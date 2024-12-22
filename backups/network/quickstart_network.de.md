---
title: Ein Open-Source-Firewall pfSense einsetzen
---
Dieser Leitfaden wird Ihnen helfen, Ihre __Open-Source-Firewall pfSense__ in der Vertrauenswolke in nur wenigen Minuten zu implementieren.

## Voraussetzungen
Die Voraussetzungen für diesen Leitfaden sind wie folgt:

1. Ein Abonnement für das Cloud Temple Angebot haben: Sie müssen über Ihre Organisation, Ihren Tenant und Ihre Zugangsdaten verfügen,
2. Berechtigungen für das Compute-Modul haben.

Dieses Dokument beschreibt die Schritte, die zum Bereitstellen einer pfSense virtuellen Firewall erforderlich sind.

## Ein pfSense Open-Source-Firewall bereitstellen
[pfSense](https://www.pfsense.org) ist ein Open-Source-Projekt, das auf FreeBSD basiert und es ermöglicht, eine virtuelle Firewall einzurichten.

Ein pfSense-Firewall wird über eine Web-Oberfläche verwaltet, daher ist es notwendig, über eine zweite Maschine mit einer grafischen Schnittstelle zu verfügen, die eine IP-Adresse im selben LAN-Netzwerk wie die Firewall hat, damit sie konfiguriert werden kann.

Wir benötigen ein Set von zwei VMs:

- Die erste wird die Maschine sein, auf der wir die Firewall bereitstellen werden.
- Die zweite wird die Maschine sein, von der aus wir die Firewall verwalten werden.

### Eine Internetzugangslieferung anfordern
Der erste Schritt besteht darin, [Internetzugangsinformationen hier](https://docs.cloud-temple.com/network/internet/#gestion-de-vos-connectivites-internet) abzurufen. Sie sollten die folgenden Informationen haben:

- öffentliches Präfix
- Interkonnektions-Präfix
- Any-Cast-Gateway
- IP-Bereich
- lokales AS
- AS von Cloud Temple
- Keepalive-Timer und den Hold-Time-Timer
- die Adressen der Route-Server

### Installation und Netzwerkkonfiguration der Schnittstellen
Sie können dann Ihre VM pfSense wie folgt bereitstellen:

1. __Installation der Firewall__ von der pfSense-Vorlage in Shiva:
    - [(Über die Konsole bereitstellen)](../iaas/quickstart_iaas_template.md#déployer-une-machine-virtuelle-depuis-un-template)
    - [(Über Terraform bereitstellen)](../iaas/quickstart_iaas.md#déployer-une-machine-virtuelle-via-terraform).
2. __Konfiguration der LAN- und WAN-Schnittstellen__ der Firewall: Die WAN-Schnittstelle sollte in Ihrem Internet-VLAN sein, ihre IP wird aus dem IP-Bereich genommen, der Ihnen vom CDS mitgeteilt wurde, sowie das standardmäßige GW.
3. __Installation des zweiten Management-Servers__.
4. __Konfiguration der Schnittstelle__ der Management-VM: Diese Maschine muss im selben Netzwerk sein wie das Netzwerk, in dem die LAN-Schnittstelle der Firewall konfiguriert wurde.

### Zugriff auf die Firewall
Sobald die beiden VMs erfolgreich installiert sind, besteht der zweite Schritt darin, auf die Firewall zuzugreifen, um mit deren Konfiguration zu beginnen.

- Zugriff auf die Web-Oberfläche der Firewall über die Verwaltungs-VM:

![](images/pfsense/pfsense_webui.png)
- Standardanmeldung:
    - Benutzername: *admin*
    - Passwort: *pfsense* (denken Sie daran, das Standardpasswort zu ändern)
  
![](images/pfsense/pfsense_home_page.png)
### Konfiguration der Firewall
Dieser Schritt beinhaltet die Konfiguration der BGP-Nachbarn des FW.

- als Erstes, denken Sie daran, den BGP-Fluss in TCP 179 unter __'Firewall > Regeln'__ zu erlauben:

![](images/pfsense/pfsense_bgp_rule.png)

- Gehen Sie zu __'Dienste > FRR BGP'__, um mit der Konfiguration Ihrer BGP-Sitzung zu beginnen:

![](images/pfsense/pfsense_frr_package.png)

- Markieren Sie die ersten beiden Kästchen und geben Sie die Nummer Ihres lokalen AS und die Zeiten an, wie sie Ihnen vom CDS mitgeteilt wurden.

![](images/pfsense/pfsense_general_conf.png)

### Konfiguration der BGP-Nachbarn
Im Bereich Neighbors klicken Sie auf +Add, um die Erstellung Ihrer BGP-Nachbarn zu beginnen.

- Für jeden Nachbarn: Geben Sie seine IP-Adresse unter __'General Options > Name/address'__ ein.
   
![](images/pfsense/pfsense_neighbor_conf.png)

  - Geben Sie das entfernte AS (entsprechend der AS-Nummer von Cloud Temple) in den Grundoptionen wie folgt ein:
    
![](images/pfsense/bgp_basic_options.png)

  - und schließlich in den erweiterten Optionen machen Sie folgendes:
     
![](images/pfsense/ebgp_conf.png)

  - markieren Sie das Kästchen, das den Typ Ihres Nachbarn definiert. In unserem Fall ist dies ``ein Route`` Server:
     
![](images/pfsense/route_server_neighbor.png)

  - am Ende vergessen Sie nicht, Ihre Änderungen durch Klicken auf __'save'__ zu speichern:
  
![](images/pfsense/neighbors_overview.png) 

### Überprüfung des Zustands der bgp-Sitzung mit den Nachbarn
Im Status können Sie den Zustand der BGP-Sitzung einsehen, die Sie gerade konfiguriert haben

![](images/pfsense/pfsense_bgp_status.png)

Stellen Sie sicher, dass der __BGP-State__ auf __established__ steht.

### Ihren öffentlichen Präfix ankündigen
Um seinen öffentlichen Präfix anzukündigen, können Sie /32-Routen erstellen und die Umverteilung statisch durchführen:

- in __*System > Routing > Statische Routen*__ : erstellen Sie Ihre statischen /32-Routen, indem Sie das Gateway auf Null4 - 127.0.0.1 setzen
- in __*Dienste > FRR-Paket > BGP > Netzwerkverteilung*__ : aktivieren Sie die ``Umverteilung`` lokal, indem Sie IPV4 in ``Redistribute`` FRR statische Routen auswählen.