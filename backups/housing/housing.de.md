---
title: Physisches Hosting
---

Cloud Temple bietet seinen Kunden die Möglichkeit, physisches Hosting in einem Verfügbarkeitsbereich zu nutzen.

Das Hosting findet zwangsläufig außerhalb der secnumcloud-Zone statt. Der Bereich für das physische Kundenhosting wird zwischen allen Kunden geteilt.

Es gibt zwei mögliche Optionen:

- __physisches Hosting pro 'U'__ in einem geteilten Rack und geteiltem Bereich,
- __dediziertes Hosting pro Rack__ mit mindestens 42 'U' in einem geteilten Bereich.

Die Anfrage für physisches Hosting wird durch __eine Dienstanfrage__ gestellt, die angibt:

    Der Name Ihrer Organisation
    Der Name eines Kontakts mit E-Mail und Telefonnummer, um die Konfiguration abzuschließen
    Der Name des Tenants
    Die gewünschte Art des Hostings (geteilt pro 'U' oder dediziert pro Rack)
    Die gewünschte Menge
    Der Typ der Ausrüstung und ihre Merkmale (Größe, Gewicht, Energieverbrauch, Wärmeabgabe, ...)

Das Support-Team von Cloud Temple wird sich mit Ihnen in Verbindung setzen, um die Anfrage zu finalisieren.

## Geteiltes Hosting

### Hosting von Appliances (Netzwerk, Firewall usw.)

Das Shared-Hosting erfolgt in einem Rackschrank, der zwischen verschiedenen Kunden von Cloud Temple geteilt wird. [Die Segmentierung](https://fr.wikipedia.org/wiki/Unit%C3%A9_de_rack) erfolgt pro 'U' (Rackeinheit).
Eine Rackeinheit misst 1,75 Zoll (44,45 mm) in der Höhe. Die für Shared-Hosting verwendeten Racks verfügen über zwei separate Stromkreise.

Das Maximalgewicht der Ausrüstung pro Rackeinheit 'U' beträgt 25 kg. Übersteigt das Gewicht dieses Limit, muss die Anzahl der 'U' bestellt werden, die das gesamte Gewicht Ihrer Ausrüstung unterstützen kann.

Beispielsweise benötigt man für ein Gerät mit einem Gewicht von 34 kg zwei Rackeinheiten.

Für jede Rackeinheit kann auf Anfrage eine oder zwei elektrische C13-Steckdosen je nach Bedarf in Anspruch genommen werden.

Jede Steckdose ist auf 150 W bei 220 V pro 'U' begrenzt.

Wenn Sie für Ihre Ausrüstung eine Leistung von 1500 W auf zwei Stromversorgungen nutzen möchten, müssen Sie anfordern

1500 W / 150 W = 10 'U', also 5 'U' (oder 750 W) pro Stromkreis.

Die Netzwerkkonnektivität muss separat nach dem gewünschten Porttyp und der gewünschten Bandbreite abgeschlossen werden. Hier sind die möglichen Optionen pro Netzwerkport:

- Kupfer 100MBps/1Gbps,
- Glasfaser 1Gbps/10Gbps über ein von Cloud Temple bereitgestelltes SFP-Modul für die Netzwerkkonnektivität.

Für diese Arbeitseinheiten ist die Kühlung zwangsläufig von der Vorderseite des Racks zur Rückseite erforderlich und **das Gerät nimmt seine Netzwerkkonnektivität an der Vorderseite des Racks auf.**

__*Notiz:*__ *Die Mindestvertragslaufzeit beträgt 12 Monate.*

| Referenz                                             | Einheit | SKU                                    | Verpflichtung |
| ---------------------------------------------------- | ------- | -------------------------------------- | ------------- |
| HÉBERGEMENT EN BAIE - 1 U Mutualisiert - 150W (1 C13) | 1 U     | csp:(region):hosting:shared:basic:v1   | 12 Monate     |
| HÉBERGEMENT EN BAIE - 1 U Mutualisiert - 300W (2 C13) | 1 U     | csp:(region):hosting:shared:premium:v1 | 12 Monate     |

### Hosting von Servern

Die Arbeitseinheiten **'Server'** sind darauf ausgelegt, sich an die Wärmeabfuhr der Server anzupassen und **bieten Netzwerkkonnektivität auf der Rückseite**, was Wartungsoperationen vereinfacht und so die Kühlung des Racks optimiert.

**Sie sind für Server obligatorisch.**

| Referenz                                                     | Einheit | SKU                                        | Verpflichtung |
| ------------------------------------------------------------- | ------- | ------------------------------------------ | ------------- |
| HOSTING IM RACK - 1 U Geteilt - Server - 400 W (2 C19)        | 2 U     | csp:(region):hosting:shared:srv:basic:v1   | 12 Monate     |
| HOSTING IM RACK - 1 U Geteilt - Server - 800 W (2 C19)        | 2 U     | csp:(region):hosting:shared:srv:premium:v1 | 12 Monate     |


## Dediziertes Hosting
Die Unterbringung in einem dedizierten Rack erfolgt in einem gemeinsam genutzten Hosting-Bereich außerhalb von SecNumCloud. Das dedizierte Rack hat eine Mindestgröße von 42 'U' oder 42 Rackeinheiten.
Die Tiefe beträgt 1200 Millimeter, davon sind 1000 Millimeter durch die Ausrüstung nutzbar. Die Breite beträgt 600 Millimeter.

Es wird mit der notwendigen Kühlung, gesicherten Vorder- und Rücktüren sowie 3 Kw Energie auf zwei elektrischen Ketten mit je 16 Ampere geliefert.

Es ist möglich, zusätzliche Energiestufen von je 2 Kw zu beantragen. __Das maximale Gewicht der Ausrüstung, die in das dedizierte Rack integriert werden kann, beträgt 1000 kg__.

Das Rack ist mit 'PDU' (Power Distribution Unit) ausgestattet, die an die abonnierte Leistung angepasst und überwacht sind. Es gibt eine 'PDU' pro elektrischer Kette.

| Referenz                                                      | Einheit    | SKU                                          | Verpflichtung |
| ------------------------------------------------------------- | ---------- | -------------------------------------------- | ------------- |
| UNTERBRINGUNG IM RACK - Dedizierter 42 U Rack inklusive 3Kw Energie | 1 Rack 42U | csp:(region):hosting:dedicated:rack:v1       | 12 Monate     |
| ENERGIE - 2 Kw zusätzlich                                     | 2 Kw       | csp:(region):hosting:dedicated:rack:2kw:v1   | 12 Monate     |

### Netzwerkverbindungen für physisches Hosting
Die Netzwerkverbindung wird als Ergänzung zur physischen Unterbringung nach der Art des gewünschten Ports und der benötigten Bandbreite abonniert. Hier sind die möglichen Optionen pro Netzwerkport:

- Kupfer 1Gbps,
- Glasfaser 1Gbps/10Gbps über ein für die Vernetzung auf Cloud Temple-Seite bereitgestelltes SFP-Modul.

Es ist ebenfalls möglich, eine Verbindung im Meet-Me-Room-Bereich der verschiedenen Rechenzentren anzufordern, um Ihre Betreiberverbindung zu erhalten.
Diese Verbindung ist zwingend über Glasfaser mit Geschwindigkeiten von 1Gbps oder 10Gbps.

| Referenz                                                                 | Einheit    | SKU                                    | Bindung    |
| ------------------------------------------------------------------------- | ---------- | -------------------------------------- | ---------- |
| NETZWERK - 1 Port - 1 Gbps - Glasfaser oder Kupfer                         | 1 Port     | csp:(region):hosting:shared:port1g:v1  | 36 Monate  |
| NETZWERK - 1 Port - 10 Gbps - Glasfaser                                    | 1 Port     | csp:(region):hosting:shared:port10g:v1 | 36 Monate  |
| NETZWERK - Private Verbindungsleitung im Meet-Me-Room einer AZ - 1 Port 1Gbps  | 1 Pauschale | csp:(region):hosting:mmr:v1:1g         | 36 Monate  |
| NETZWERK - Private Verbindungsleitung im Meet-Me-Room einer AZ - 1 Port 10Gbps | 1 Pauschale | csp:(region):hosting:mmr:v1:10g        | 36 Monate  |

### Dienste 'Hands & Eyes'
Neben den Diensten für physisches Hosting und Netzwerkanbindung besteht die Möglichkeit, professionelle Unterstützungsdienste für Ihr physisches Hosting zu beantragen.

Diese werden von den Datacenter-Technikern oder von den auf Datacenter spezialisierten Cloud Temple-Ingenieuren durchgeführt.

Hier sind die wichtigsten 'Hands & Eyes'-Dienstleistungen, die verfügbar sind. Sie zielen darauf ab, die folgenden Themen zu behandeln:

- Begleitung eines zuvor identifizierten externen Dienstleisters,
- Den Status einer Ausrüstung feststellen (LED-Zustand, Betriebszustand, ...),
- Fotos eines zuvor identifizierten Kunden-Equipments aufnehmen,
- Einen Schalter betätigen,
- Die Ausrüstung neu starten,
- Ein Zugangsterminal anschließen für Fernsteuerung,
- Eine Verbindung ersetzen ohne Änderung der Verkabelung.

| Referenz                                                                                   | Einheit  | SKU                              | GTI        |
| ------------------------------------------------------------------------------------------ | -------- | -------------------------------- | ---------- |
| Hands & Eyes Datacenter - Arbeitsstunden (8h - 19h; Montag bis Freitag)                    | 1 Stunde | csp:(region):hosting:ho:std:v1   | 2 Stunden  |
| Hands & Eyes Datacenter - Arbeitsstunden (8h - 19h; Montag bis Freitag) - DRINGEND         | 1 Stunde | csp:(region):hosting:ho:fast:v1  | 30 Minuten |
| Hands & Eyes Datacenter - Außerhalb der Arbeitsstunden (Nacht, Wochenende und Feiertage)   | 1 Stunde | csp:(region):hosting:hno:std:v1  | 2 Tage     |
| Hands & Eyes Datacenter - Außerhalb der Arbeitsstunden (Nacht, Wochenende und Feiertage) - DRINGEND | 1 Stunde | csp:(region):hosting:hno:fast:v1 | 2 Stunden  |

Sie können auch von einem Cloud Temple Datacenter-Ingenieur profitieren, um die folgenden Themen zu bearbeiten:

- Racking (mit geeigneten Schutz- und Hebegeräten),
- Verkabelung (entsprechend dem zuvor übergebenen Verkabelungsplan),
- Änderung der Verkabelung oder Versetzung einer bestehenden Ausrüstung,
- Unterstützung bei der Netzwerkverbindung des Betreibers.

| Referenz                                                                              | Einheit | SKU                             | GTI       |
| ------------------------------------------------------------------------------------- | ------- | ------------------------------- | --------- |
| Datacenter-Ingenieur - Arbeitsstunden (8h - 19h; Montag bis Freitag)                  | 1 Vorgang | csp:(region):hosting:ho:std:v1  | 2 Tage    |
| Datacenter-Ingenieur - Arbeitsstunden (8h - 19h; Montag bis Freitag) - DRINGEND       | 1 Vorgang | csp:(region):hosting:ho:fast:v1 | 4 Stunden |

__Notiz:__

- *Jede Anfrage muss über das Öffnen eines Interventionstickets in der Cloud Temple-Konsole erfolgen*,
- *Im Falle einer dringenden Anfrage die Rufbereitschaft nach dem Öffnen des Interventionstickets in der Cloud Temple-Konsole anrufen*,
- *Für jede angefangene Stunde wird eine Gebühr erhoben.*