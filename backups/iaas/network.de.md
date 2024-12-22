---
title: Netzwerke
---

## Private Network Produkt

Das Netzwerkangebot __Cloud Temple__ wird im Abschnitt [Netzwerke](../network/private_network.md) beschrieben.

## Angebot an virtuellen Firewalls

Ab dem 1. Januar 2024 bietet Cloud Temple in seinem Arbeitsbereichskatalog zwei Firewall-Technologien an: __Stormshield__ und __Fortinet__.

Die Bereitstellung eines Firewall-Clusters erfolgt durch die Anforderung von technischer Unterstützung direkt in der Cloud Temple-Konsole. Die Cluster sind mit UTM-Technologie (Antivirus, Intrusion Prevention und Webfilter) ausgestattet.

Die Bereitstellung eines Firewall-Clusters wird durch eine Serviceanforderung durchgeführt, die angibt:

    Der Name Ihrer Organisation
    Der Name eines Kontakts mit seiner E-Mail und Telefonnummer zur Abschluss der Konfiguration
    Der Name des Tenants
    die Verfügbarkeitszonen für jeden der Knoten
    Der zugewiesene IPv4-Block zu verwenden, wenn der Cluster Zugriff auf das Internet haben soll
    Die gewünschte SKU (das Firewall-Modell)
    
Der Firewall-Cluster wird vom Cloud Temple Support-Team vorkonfiguriert geliefert.

### Stormshield Angebot

Das virtuelle Firewall-Angebot __Stormshield EVA__ ist auf der Cloud Temple-Infrastruktur verfügbar. Standardmäßig besteht das Angebot aus zwei aktiven / passiven Knoten, mit der Möglichkeit, 1 Knoten pro Verfügbarkeitszone zu haben.
Das Angebot der __Stormshield EVA__ hat das Vertrauensvisum der __ANSSI__.

| Bezug                                                                                                | Einheit     | SKU                          | 
|------------------------------------------------------------------------------------------------------|-------------|------------------------------|
| FIREWALL UTM - virtuelles STORMSHIELD EVA1 - 1 Vcpu - 2GB RAM - 50 SSLVPN-Benutzer Max - 100 Tunnel | 1 Cluster | csp:(region):licence:fw:eva1 |
| FIREWALL UTM - virtuelles STORMSHIELD EVA2 - 2 Vcpu - 3GB RAM - 512 SSLVPN-Benutzer Max - 150 Tunnel | 1 Cluster | csp:(region):licence:fw:eva2 |
| FIREWALL UTM - virtuelles STORMSHIELD EVA3 - 4 Vcpu - 6GB RAM - 512 SSLVPN-Benutzer Max - 200 Tunnel | 1 Cluster | csp:(region):licence:fw:eva3 |
| FIREWALL UTM - virtuelles STORMSHIELD EVA4 - 4 Vcpu - 8GB RAM - 1024 SSLVPN-Benutzer Max - 250 Tunnel | 1 Cluster | csp:(region):licence:fw:eva4 |

### Fortinet-Angebot

Das virtuelle Firewall-Angebot __Fortigate VM__ ist auf der Cloud Temple-Infrastruktur verfügbar. Standardmäßig besteht das Angebot aus zwei "aktiven / passiven" Knoten, mit der Möglichkeit, 1 Knoten pro Verfügbarkeitszone zu haben.

| Referenz                                         | Einheit     | SKU                          | 
|--------------------------------------------------|-------------|------------------------------|
| FIREWALL UTM - Virtuelles Fortigate VM02V - ohne vdom  | 1 Cluster | csp:(region):licence:fw:ftg2 |
| FIREWALL UTM - Virtuelles Fortigate VM04V - ohne vdom  | 1 Cluster | csp:(region):licence:fw:ftg4 |
| FIREWALL UTM - Virtuelles Fortigate VM08V - ohne vdom  | 1 Cluster | csp:(region):licence:fw:ftg8 |

### Leistungsbeispiel

Hier geben wir einen Hinweis auf die mit dem VMware-Virtualisierungsangebot erreichbare Leistung, ohne SRV-IO Aktivierung, 
mit einem Rechenschaftsplattformstyp __'standard:v2'__, der über 2 Prozessoren mit 2,4 GHz vom Typ Intel Silver 4314 oder äquivalent verfügt.

Eine virtuelle Appliance __Fortigate VM16__, ausgestattet mit 128 GB RAM und 16 vCPU, kann eine Datenrate von __9 Gbit__ zwischen 2 Verfügbarkeitszonen erreichen, mit einem MSS von 1350 und 100 simultanen Verbindungen parallel.

*__Hinweis__* : 

*Da die garantierte Latenz zwischen den Verfügbarkeitszonen weniger als 4 Millisekunden beträgt, kann die Leistung __nicht mit einer einzigen TCP-Sitzung erreicht werden__.*
*Die maximale Datenrate auf einer TCP-Verbindung wird durch das folgende Gesetz bestimmt:*

__MAX DURCHSATZ = TCP WINDOWS SIZE / RTT__, wobei RTT die Ping-Antwortzeit / 1000 ist.

*Sie müssen daher __Ihre TCP-Übertragungen multiplexen__ oder __ein unverbundenes Protokoll wie UDP verwenden__, um die maximale Leistung zu erreichen.*

## Mikrosegmentierung

Ab dem 1. Januar 2024 ist das Angebot zur Mikrosegmentierung von virtuellen Maschinen noch nicht auf dem Markt erhältlich.
