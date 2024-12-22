---
title: Internetverbindung
---

Cloud Temple stellt seinen Kunden __öffentliche IP-Adressblöcke__ mit mindestens 8 IPv4- oder 64 IPv6-Adressen zur Verfügung, die bei RIPE gemeldet sind, um Ihre Internetverbindung zu ermöglichen.

## Zuweisung einer öffentlichen Internetadresse im Provider Aggregated (PA)-Format
Im vorliegenden Kontext verwenden Sie öffentliche IP-Adressen, die Cloud Temple Ihnen für Ihre Zwecke vermietet hat.

Die Einrichtung einer Internetverbindung und die Zuweisung der damit verbundenen öffentlichen IP-Adressen erfolgt durch __eine Serviceanfrage__, die angibt:

    Der Name Ihrer Organisation
    Der Name einer Kontaktperson mit deren E-Mail-Adresse und Telefonnummer zur Fertigstellung der Konfiguration
    Der Name des Tenants
    Die Größe des gewünschten Subnetzes (Minimum /29 in IPv4 und /64 in IPv6)
    Falls sie noch nicht bereitgestellt wurden, werden die RIPE-Informationen (insbesondere der administrative Kontakt) beim Support angefordert

Die Bereitstellung des Internetzugangs erfolgt über das BGP4-Protokoll als Antwort auf die Supportanfrage, die folgende Informationen liefern wird:

- *öffentliches Präfix*
- *Interconnection-Präfix*
- *Any-cast-Gateway*
- *Subnetz-IP*
- *lokales AS*
- *AS von Cloud Temple*
- *Keepalive Timer und Hold-Time Timer*
- *die Adressen der Route-Server, die Ihrem Tenant zugeordnet sind*.

Die Nutzung des BGP4-Protokolls garantiert ein effizientes Routing Ihrer Internetflows zur aktiven Gateway Ihres Architekturdesigns, insbesondere in Szenarien mit Multi-Zonen-Verfügbarkeit wie es bei Firewall-Clustern der Fall ist, die zwischen zwei Verfügbarkeitszonen aufgeteilt sind.

## IPv4-Blöcke
### Angebot von IPv4-Adressen, Version 1
__*Dieses Angebot wird seit dem 2. Mai 2024 nicht mehr vermarktet*__

Die Lieferung von IPv4 erfolgt im Rahmen der __verfügbaren Bestände__ für unsere Kunden, mit einem Mindestblock von 8 IPV4 (/29 oder 255.255.255.248).

Es ist möglich, die Ihnen zugewiesenen Adressblöcke im Menü __*'Öffentliche IPs'*__ des Netzwerkmenüs in der grünen Leiste links zu sehen.

| Referenz                                   | Einheit | SKU                          |
| ------------------------------------------ | ------- | ---------------------------- |
| Netzwerk - Öffentliche IPv4-Adressbereiche | 8 IPv4  | csp:(region):network:ipv4:v1 |

### Angebot für IPv4-Adressen in Version 2

Die Bereitstellung einer IPv4 erfolgt im Rahmen der __verfügbaren Lagerbestände__ für unsere Kunden, pro IP-Adresse.

Es ist möglich, die Ihnen zugewiesenen Adressblöcke im Menü __*'Öffentliche IPs'*__ im Netzwerke-Menü auf dem grünen Banner links zu sehen.


| Referenz                     | Einheit | SKU                         |
| ---------------------------- | ------- | --------------------------- |
| Netzwerk - Öffentliche IPv4 | 1 IPv4  | csp:(region):network:ipv4:v2 |


## IPv6-Blöcke
__Stand 1. Mai 2024 ist das Angebot von öffentlichen IPv6-IP-Adressen noch nicht verfügbar.__

Die Vermarktung ist für das zweite Halbjahr 2024 geplant.

| Referenz                             | Einheit | SKU                          |
| ------------------------------------- | ------- | ---------------------------- |
| Netzwerk - Öffentliche dedizierte IPv6-Bereiche | 64 IPv6 | csp:(region):network:ipv6:v1 |

## Öffentliche Provider Unabhängige (PI) IP-Adressen
Wenn Sie über eigene Provider-Unabhängige Adressierung verfügen, haben Sie die Möglichkeit, diese im Autonomous System von Cloud Temple anzukündigen. Dies ermöglicht Ihnen, Ihre eigenen IP-Adressen innerhalb der Cloud-Temple-Infrastruktur weiterzuverwenden und Ihre Migrationen zu erleichtern.

Um dies zu tun, stellen Sie __einen Dienstantrag__ mit den folgenden Informationen:

    Der Name Ihrer Organisation
    Der Name einer Kontaktperson mit E-Mail und Telefonnummer, um die Konfiguration abzuschließen
    Der Name des Mandanten
    Der IP-PI-Adressblock, den Sie besitzen und anzukündigen wünschen
    Falls noch nicht bereitgestellt, werden die damit verbundenen RIPE-Informationen vom Support angefordert

Für Kunden, die Provider-Unabhängige Adressen verwenden, gibt es keine spezifische Berechnung.

## Verwaltung Ihrer Internetverbindungen
Die Verwaltung der Konnektivität erfolgt über das Menü **'Netzwerk'** > **'Internet'**. Dieses Menü zentralisiert die Verwaltung der IP-Adressen und bietet zwei separate Kategorien:

1. **Öffentliche IP-Adressen**: Sie werden verwendet, um Ihre Dienste im Internet sichtbar zu machen, wodurch der Austausch von eingehenden und ausgehenden Daten erleichtert wird.
2. **Interkonnektions-IP-Adressen**: Diese Adressen ermöglichen es Ihren Gateways, den Verkehr zu dem spezifischen Netzwerk von Cloud Temple zu leiten und so eine sichere und effiziente Verbindung zu gewährleisten.

Die öffentlichen IP-Adressen ermöglichen den Internetzugang, während die Interkonnektions-IP-Adressen, die mit dem BGP4-Protokoll verwendet werden, sichere Verbindungen zwischen Netzwerken sicherstellen. Diese erleichtern zuverlässige und gesicherte Austauschprozesse zwischen Ihrem Tenant und dem Cloud Temple-Netzwerk. Die gemeinsame Nutzung dieser Adressen verbessert die Verkehrsverwaltung und stärkt die Sicherheit und Leistung des Netzwerks.

Hier ist die Hauptoberfläche für die Verwaltung der IP-Adressen:

![](images/shiva_inet_001.png)

Das Starttab entspricht Ihrer internen ASN, die Ihrem Tenant gewidmet ist. Es zeigt vor allem wichtige Informationen für die Konfiguration Ihrer BGP-Konnektivität an.

### Öffentliche IP-Adressen
Es ist möglich, die Blöcke und IP-Adressen zu sehen und zu kommentieren, die Ihrem Tenant über das in die Cloud Temple-Konsole integrierte IPAM zugeordnet sind:

![](images/shiva_inet_002.png)

Die Bestellung von öffentlichen IP-Adressen erfolgt über die Schaltfläche **'Öffentliche IPs bestellen'**:

![](images/shiva_inet_003.png){:height="70%" width="70%"}

Die Reservierung und Zuweisung einer IP-Adresse erfolgen über die Schaltfläche **'Eine Adresse reservieren'**:

![](images/shiva_inet_004.png){:height="70%" width="70%"}

Die Änderung oder Löschung der Reservierung erfolgen über die Schaltflächen **'Aktionen'**:

![](images/shiva_inet_005.png){:height="30%" width="30%"}

Das Löschen einer Reservierung bedeutet, dass die Ressource für eine andere Verwendung verfügbar wird, jedoch weiterhin dem Kunden zugeteilt und in Rechnung gestellt bleibt.

Bei einigen Zeilen ist die Schaltfläche **'Aktion'** nicht verfügbar, was darauf hinweist, dass die IP-Adressen reserviert und daher nicht für eine Verwendung verfügbar sind.

### Interkonnektions-IP-Adressen

Genauso können Sie Interkonnektions-IP-Adressblöcke einsehen und kommentieren. Sie können die Subnetze der Interkonnektionen mit dem Cloud Temple Netzwerk und deren Nutzung einsehen:

![](images/shiva_inet_008.png)

Sie können deren Nutzung, wie bei öffentlichen Adressen, einfach in der integrierten IPAM-Verwaltung ändern:

![](images/shiva_inet_007.png){:height="70%" width="70%"}

### Reservierung von Internetbandbreite

Die Internet-Bandbreite kann in Schritten von 100 Mbps reserviert werden. Die maximale verfügbare Kapazität für ein Gateway beträgt 10 Gbps, potenziell eingeschränkt durch die technischen Eigenschaften Ihres Gateways.

Die Abrechnung erfolgt am 95. Perzentil über den Abrechnungszeitraum, üblicherweise ein Monat. Sie können also gelegentlich einen Burst über Ihre reservierte Kapazität hinaus genießen.

| Referenz                                     | Einheit   | SKU                                      |
| -------------------------------------------- | --------- | ---------------------------------------- |
| Netzwerk - Reservierte Internet-Bandbreite   | 100 Mbps  | csp:(region):network:trafic:internet:v1 |

__*Notiz:*__
*Es gibt keine __volumetrische Abrechnung__ wie __'Egress Fees'. Sie bezahlen nur für die Reservierung der Bandbreite.__*


## Anti-DDoS
Ein verteilter Denial-of-Service-Angriff (DDoS) zielt darauf ab, einen Dienst durch Überlastung mit illegitimem Verkehr zu verschlechtern oder offline zu nehmen.

Der Anti-DDoS-Schutz von Cloud Temple schützt Sie vor bösartigen Akteuren und __ist ohne Mehrkosten bei volumetrischen Angriffen aktiv__: Die Filterung wird im Voraus durch unsere Telekommunikationspartner durchgeführt.

## Weiterführendes Wissen
- [Ein virtuelles Firewall bereitstellen](quickstart_network.md#ein-virtuelles-firewall-opensource-pfsense-bereitstellen-)