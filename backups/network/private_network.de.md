---
title: Private Netzwerke
---

## Cloud Temple Netzwerkarchitektur
Das Angebot __*Private Network*__ ermöglicht eine private Netzwerkkonnektivität der Ebene 2 zwischen Ihren Diensten. Die Austauschkapazität jeder Verfügbarkeitszone beträgt mehrere hundert Gigabit, und wir erhöhen regelmäßig unsere Kapazität entsprechend unseren Bedürfnissen. Wir beleuchten unser optisches Netzwerk selbst.

### Die VPLS-Technologie
Das globale Cloud-Tempel-Netzwerk verwendet die Technologie __[VPLS](https://fr.wikipedia.org/wiki/Virtual_Private_LAN_Service)__.
__VPLS__ ist ein Layer-2 point-to-multipoint Ethernet-basiertes VPN. Es ermöglicht die Verbindung von Standorten, die geografisch voneinander entfernt sind, über ein MPLS-Netzwerk. Für die Kunden scheinen alle Standorte im selben Ethernet-LAN zu sein, auch wenn der Verkehr durch das Cloud-Tempel-Netzwerk transportiert wird.

__VPLS__, in seiner Implementierung und Konfiguration, hat viel gemein mit einem Layer-2 VPN. In VPLS wird ein Paket, das von einem Kunden-Netzwerk stammt, zuerst an eine Kunden-Einrichtung (CE) geschickt (zum Beispiel ein Router oder ein Ethernet-Switch). Dann wird es an einen Provider-Edge-Router (PE) innerhalb des Service-Provider-Netzwerks gesendet. Das Paket durchquert das Service-Provider-Netzwerk auf einem MPLS Label-Switched Path (LSP). Es erreicht den ausgangsseitigen PE-Router, der dann den Verkehr zur CE-Einrichtung auf dem Bestimmungskundenstandort weiterleitet. Der Unterschied besteht darin, dass bei __VPLS__ die Pakete das Netzwerk des Service-Providers auf eine point-to-multipoint Art und Weise durchqueren können, was bedeutet, dass ein Paket, das von einer CE-Einrichtung stammt, an alle PE-Router übertragen werden kann, die an einer __VPLS__-Routing-Instanz teilnehmen.

Der __VPLS__-Kreislauf eines Kunden kann __zwischen allen Verfügbarkeitszonen einer Region erweitert werden__.

Das Protokoll __VPLS__ ist __vollständig transparent__ für Kunden, die nur die verschiedenen VLANs in ihren Verfügbarkeitszonen sehen.

### Das Netzwerk im VMware-Virtualisierungsangebot

Die virtuellen Netzwerke (vlan) des VMware Virtualisierungsangebots sind Netzwerke vom Typ __'DVPortgroup'__. Ein __'dvPortGroup'__, 
oder __'Distributed Virtual Port Group'__, ist ein spezifisches Konzept von VMware. Ein dvPortGroup ist eine Entität, die 
mehrere virtuelle Ports (vPorts) in einer verteilten virtuellen Netzwerkumgebung zusammenfasst, um deren Nutzung zu erleichtern.

Lokalisiert innerhalb eines __[tenant](../console/tenants.md)__, können sie über Verfügbarkeitszonen hinaus erweitert werden,
was Ihnen ermöglicht, "aktiv/aktiv"-Architekturen mit Quorum aufzubauen.

Die maximal nutzbare Bandbreite hängt hauptsächlich vom verwendeten Blade-Modell ab (10Gbps konvergiert oder 25 Gbps konvergiert) und von den Fähigkeiten der virtuellen Maschinen.

Es ist möglich, eine Bandbreite von 10Gbps zu erreichen.

Die auf der Cloud Temple Konsole verfügbaren Konfigurationen im Rahmen des VMware Virtualisierungsangebots sind folgende:

- __Vlan-Tagging__
- __Trunk__
- __Portspiegelung__

*__Hinweis__* :

- *Die Auswahl der IP-Adressierung innerhalb dieser Netzwerke ist __frei.__*
- *__SRV-IO__ ist im Netzwerkangebot, das mit der VMware-Virtualisierung verbunden ist, nicht verfügbar.*
- *__QinQ__ wird in der Cloud Temple Architektur unterstützt. QinQ, auch bekannt als "VLAN-Stacking" oder 802.1ad, ist 
ein Netzwerkprotokoll, das die Kapselung mehrerer VLAN (Virtual Local Area Network) Etiketten in einem einzelnen Ethernet-Frame ermöglicht.*


## Regionale private Netzwerke

Die Verwaltung privater Netzwerke innerhalb einer Region erfolgt direkt in der Cloud Temple-Konsole.

### Innerhalb eines Tenants

Das Erstellen eines virtuellen Netzwerks erfolgt im __*Network*__ Menü auf dem grünen Band links auf dem Bildschirm.

![](images/shiva_network_001.jpg)

Klicken Sie dann auf die Schaltfläche __*Neues Netzwerk*__

Sie müssen den Namen Ihres Netzwerks angeben, der angezeigt wird. Standardmäßig werden alle Ihre Cluster auf Ihr neues Netzwerk zugreifen.
Im Untermenü __*Erweiterte Optionen*__ können Sie jedoch genauer spezifizieren, wie weit sich Ihr Netzwerk innerhalb des Tenants zwischen Ihren verschiedenen Clustern ausbreiten soll.

![](images/shiva_network_002.jpg){:height="50%" width="50%"} 

Alle möglichen Aktionen mit Ihren Netzwerken finden Sie im Menü __*Aktionen*__ jedes einzelnen Netzwerks:

- Die Aktivierung der Gemeinschaftsnutzung eines Netzwerks zwischen den Tenants einer gleichen Organisation.
- Die Deaktivierung der Gemeinschaftsnutzung eines Netzwerks zwischen den Tenants einer gleichen Organisation.
- Das Hinzufügen der Gemeinschaftsnutzung eines Netzwerks zwischen den Tenants einer gleichen Organisation.
- Das Entfernen der Gemeinschaftsnutzung eines Netzwerks zwischen den Tenants einer gleichen Organisation.
- Die grafische Darstellung der Ausbreitung eines Netzwerks über alle Ihre Cluster und Hypervisoren innerhalb eines Tenants.
- Das Entfernen einer Ausbreitung innerhalb eines Tenants.
- Das Ändern einer Ausbreitung innerhalb eines Tenants.
- Das Löschen eines Netzwerks.

![](images/shiva_network_003.jpg)

__*Hinweis:*__ *Es ist nicht möglich, die VLAN 802.1q ID auszuwählen.*

| Referenz                                 | Einheit | SKU                          | 
|-------------------------------------------|--------|------------------------------|
| NETZWERK - Region FR1 - VLAN Privat Inter AZ | 1 vlan | csp:(region):network:vlan:v1 |

#### Visualisierung der Ausbreitung Ihrer Netzwerke
Sie können im Menü __*Aktionen*__ leicht die Verbreitung eines Netzwerks zu Ihren verschiedenen Clustern innerhalb eines Tenants visualisieren.
Wählen Sie die Option *"Verbreitung visualisieren"*:

![](images/shiva_network_004.jpg)

#### Änderung der Verbreitung
Die Änderung einer Ausbreitung innerhalb eines Mandanten wird durch die Option *"Propagieren"* durchgeführt:
wählen Sie dann die Cluster aus, die in diese Ausbreitung einbezogen werden sollen.

![](images/shiva_network_005.jpg){:height="50%" width="50%"} 

__*Hinweis:*__ *Die Änderung der Ausbreitung ist auf 20 Netzwerke pro Aktion begrenzt.*

#### Entfernung eines Netzwerks
Die Entfernung eines Netzwerks innerhalb eines Tenants wird durch die Option *"Netzwerk löschen"* durchgeführt:

![](images/shiva_network_006.jpg){:height="50%" width="50%"}

### Netzwerkfreigabe zwischen Tenants

Standardmäßig __sind Netzwerke nur innerhalb eines Mandanten verfügbar__. Sie können wählen, __ein Netzwerk zwischen mehreren Mandanten zu teilen__, aus technischen Gründen oder aus Gründen der Konnektivität.
Es ist möglich, ein Netzwerk zwischen Ihren __[Mandanten](../console/tenants.md)__ innerhalb derselben Organisation zu teilen.

Dazu müssen Sie das Teilen wie unten aktiveren.

![](images/shiva_network_vn_share_enabled.png)

Nachdem das Teilen aktiviert wurde, müssen Sie nur noch eine Freigabe hinzufügen, wie unten gezeigt.

![](images/shiva_network_vn_shared.png){:style="width:200px"}

Wählen Sie dann den Zielmandanten aus. Achtung, die Liste der Mandanten ist dynamisch.
Sie hängt von Ihrer Organisation und Ihren Berechtigungen ab.

![](images/shiva_network_vn_shared_tenant.png)

Sobald das Netzwerk geteilt wurde, wird es im Tab 'Geteilte Netzwerke' von Ihrem zweiten Mandanten aus sichtbar sein.

![](images/shiva_network_vn_shared_with_me.png) 

## Externe private Konnektivität

Das Netzwerkangebot von Cloud Temple ermöglicht es Kunden, ihre eigenen IPSEC-, MPLS- oder Glasfaser-Infrastrukturen mit ihren Tenants zu verbinden.

Zu diesem Zweck bietet Cloud Temple:

- Die Möglichkeit, Netzwerkausrüstung in einem gemeinsamen Bereich zu hosten (nicht als Secnumcloud zertifiziert),
- Anschlussports mit 1 Gbps oder 10 Gbps.

Die Erstellung einer externen Konnektivität erfolgt durch eine Serviceanfrage, die angibt:

    Den Namen Ihrer Organisation
    Den Namen eines Ansprechpartners mit seiner E-Mail und Telefonnummer, um die Konfiguration abzuschließen
    Den Namen des Tenants
    Die Verfügbarkeitszone oder, falls nicht verfügbar, den gewünschten physischen Standort für diese Konnektivität
    Die Anzahl und für jeden, den Typ des erwarteten Konnektivitätsports (Glasfaser, Kupfer, 1 Gbps, 10 Gbps, ...)
    Das Netzwerk Ihres Tenants, das diese Konnektivität aufnehmen soll
    Die Anzahl der eventuell gewünschten 'U' für das Hosting

## Dedizierte Kreisläufe
Cloud Temple bietet die Möglichkeit, eine dedizierte Glasfaserleitung zwischen zwei Infrastrukturen für dediziertes Hosting (Racks) zu nutzen.

Dieser Dienst wird typischerweise verwendet, wenn Sie zwei nicht-cloud Infrastrukturen (zum Beispiel zwei IBM AS/400) in zwei separaten Racks in zwei physisch unterschiedlichen Rechenzentren hosten möchten.
Sie möchten vielleicht diese beiden Racks direkt privat verbinden, ohne über die Backbone-Infrastruktur von Cloud Temple zu gehen, und nur das optische Übertragungs-Backbone nutzen.

In diesem Kontext können wir eine optische Glasfaserverbindung zwischen Ihren beiden Racks liefern. Die Lieferung erfolgt immer über zwei diversifizierte optische Wege.

Hier sind die verschiedenen möglichen Lieferarten:

- Ethernet Glasfaser 1Gbps
- Ethernet Glasfaser 10Gbps
- Fiber Channel 8Gbps
- Fiber Channel 16Gbps

Die Einrichtung einer dedizierten Konnektivität wird durch eine Serviceanforderung realisiert, die angibt:

    Der Name Ihrer Organisation
    Der Name eines Kontakts mit seiner E-Mail und Telefonnummer zur endgültigen Konfiguration
    Der Name des Tenants
    Die Kennungen der beiden dedizierten Racks
    Die gewünschte Bandbreite
    Das Netzwerk Ihres Tenants, das diese Konnektivität aufnehmen soll

Sie werden vom Support kontaktiert, um Ihre Anfrage zu verfeinern.

| Referenz                                                                                | Einheit   | SKU                              | Verpflichtung |
|-----------------------------------------------------------------------------------------|-----------|----------------------------------|---------------|
| NETZWERK - Dedizierter Inter-AZ-Link 1G Ethernet (zwei Links über zwei diverse Wege)    | 1 Pauschale | csp:(region):network:epl:1g:v1   | 36 Monate     |
| NETZWERK - Dedizierter Inter-AZ-Link 10G Ethernet (zwei Links über zwei diverse Wege)   | 1 Pauschale | csp:(region):network:epl:10g:v1  | 36 Monate     |
| NETZWERK - Dedizierter Inter-AZ-Link 8G Fiber-Channel (zwei Links über zwei diverse Wege)  | 1 Pauschale | csp:(region):network:fcpl:8g:v1  | 36 Monate     |
| NETZWERK - Dedizierter Inter-AZ-Link 16G Fiber-Channel (zwei Links über zwei diverse Wege) | 1 Pauschale | csp:(region):network:fcpl:16g:v1 | 36 Monate     |

## Weiterführende Informationen
- [Einrichten einer Open-Source Virtual Firewall](quickstart_network.md#einrichten-einer-open-source-virtual-firewall-pfsense-)