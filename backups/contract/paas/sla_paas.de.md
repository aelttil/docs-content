---
title: PaaS Dienstleistungsvereinbarung
---

**Inhaltsverzeichnis**

- [1. Rahmen](#1-rahmen)
- [2. Akronyme](#2-akronyme)
- [3. Glossar](#3-glossar)
- [4. Gegenstand der PaaS Dienstleistungsvereinbarung des Anbieters](#4-gegenstand-der-paas-dienstleistungsvereinbarung-des-anbieters)
- [5. Entwicklung der PaaS Dienstleistungsvereinbarung](#5-entwicklung-der-paas-dienstleistungsvereinbarung)
- [6. Audit](#6-audit)
- [7. Beschreibung des Dienstes](#7-beschreibung-des-dienstes)
- [8. Implementierung des Dienstes](#8-implementierung-des-dienstes)
  - [8.1. Beschreibung der technischen Komponenten](#81-beschreibung-der-technischen-komponenten)
    - [8.1.1. REDHAT OpenShift Dienstleistungsplattform](#811-redhat-openshift-dienstleistungsplattform)
    - [8.1.2. Softwareinfrastruktur zur Steuerung der Redhat Openshift Plattform](#812-softwareinfrastruktur-zur-steuerung-der-redhat-openshift-plattform)
    - [8.1.3. Assoziierte Backup-Infrastruktur](#813-assoziierte-backup-infrastruktur)
    - [8.1.4. Implementierung von Lösungen für Geschäftswiederherstellung oder Geschäftskontinuität](#814-implementierung-von-lösungen-für-geschäftswiederherstellung-oder-geschäftskontinuität)
- [10. Verpflichtungen und Servicelevel](#10-verpflichtungen-und-servicelevel)
  - [10.1. Verfügbarkeitsverpflichtungen der REDHAT OpenShift Plattform](#101-verfügbarkeitsverpflichtungen-der-redhat-openshift-plattform)
- [12. Anwendbares Modell geteilter Verantwortlichkeiten](#12-anwendbares-modell-geteilter-verantwortlichkeiten)
  - [12.1. Verantwortung und Verpflichtungen des Anbieters](#121-verantwortung-und-verpflichtungen-des-anbieters)
  - [12.2. Haftungsbeschränkung des Anbieters](#122-haftungsbeschränkung-des-anbieters)
  - [12.3. Zugriffsbegrenzung](#123-zugriffsbegrenzung)
- [13. Datenlöschung am Ende des Vertrags](#13-datenlöschung-am-ende-des-vertrags)
- [14. Anwendbares Recht](#14-anwendbares-recht)



## 1. Rahmen

|           |                        |
| --------- | ---------------------- |
| Referenz  | CT.AM.JUR.ANX.PAAS 2.0 |
| Datum     | 13. März 2024          |

## 2. Akronyme

| Akronym     | Beschreibung                                                                                               |
| ----------- | ---------------------------------------------------------------------------------------------------------- |
| CAB         | Change Advisory Board – Beratungsausschuss für Änderungen                                                   |
| CMDB        | Configuration Management Database – Konfigurationsmanagement-Datenbank                                      |
| COPIL       | Steuerungskomitee                                                                                          |
| COSTRAT     | Strategiekomitee                                                                                           |
| DB          | Database (Datenbank)                                                                                       |
| DRP         | Disaster Recovery Plan (Notfallwiederherstellungsplan)                                                     |
| GTI         | Garantie der Eingriffszeit                                                                                 |
| GTR         | Garantie der Lösungszeit                                                                                    |
| GTE         | Garantie der Eskalationszeit                                                                                |
| HYPERVISEUR | Betriebssystem für die Ausführung von VMs auf einer Rechenblatt                                             |
| ITIL        | Information Technology Infrastructure Library - Empfehlungen für das Management von Informationssystemen   |
| IAAS        | Infrastructure as a Service                                                                                |
| MCO         | Aufrechterhaltung der Betriebsbereitschaft                                                                  |
| MOA         | Auftraggeberschaft                                                                                         |
| MOE         | Auftragnehmerschaft                                                                                         |
| OS          | Operating System                                                                                            |
| PAQ         | Plan d’Assurance Qualité                                                                                   |
| PAAS        | Platform as a Service                                                                                      |
| SDM         | Service Delivery Manager                                                                                   |
| RFC         | Request For Change – Anforderung für eine Änderung                                                          |
| RGPD        | Allgemeine Datenschutzverordnung                                                                           |
| RPO         | Recovery Point Objective – Zeitpunkt der Datenwiederherstellung bei einem Vorfall                          |
| RTO         | Recovery Time Objective – Zeitdauer bis zur Wiederherstellung eines Dienstes nach einem Vorfall            |
| SLA         | Service Level Agreement – Vereinbarung über Servicelevel                                                   |
| UO          | Arbeitseinheit                                                                                              |
| VABF        | Eignungsprüfung für die gute Funktionalität                                                                 |
| VABE        | Eignungsprüfung für die gute Betreibbarkeit                                                                 |
| VM          | Virtual Machine (Virtuelle Maschine)                                                                       |
| VSR         | Regelmäßige Dienstprüfung                                                                                   |
| SNC         | SecNumCloud                                                                                                 |

## 3. Glossar
Folgende im vorliegenden Dokument verwendete Ausdrücke werden gemäß den ihnen zugewiesenen Definitionen interpretiert:

| Ausdruck                                             | Definition                                                                                                                                                                                                                                                                                 |
| ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "Secure Temple"                                      | Die Bezeichnung "Secure Temple" bezieht sich auf den Infrastructure-as-a-Service (IaaS), der als SecNumCloud qualifiziert ist und von der Firma Cloud Temple angeboten wird.                                                                                                             |
| Region                                               | Eine "Region" im Kontext des Cloud Computings bezeichnet ein geografisch begrenztes Ensemble von Cloud-Verfügbarkeitszonen, <br/>welche Netzwerk-, Rechner- und Speicherdienste bereitstellen, um Latenz, Leistung <br/>und lokale regulatorische Compliance zu optimieren               |
| Verfügbarkeitszone<br/>(AZ)<br/>(Availability zone)  | Ein spezifischer und isolierter Abschnitt der Cloud-Computing-Infrastruktur, der dazu entworfen ist, hohe Verfügbarkeit und Resilienz von Diensten durch geografische Verteilung der Ressourcen zu gewährleisten.                                                                       |
| Mandant                                              | Eine isolierte Instanz, die einem Benutzer oder einer Benutzergruppe vorbehalten ist, die eine gemeinsame Infrastruktur teilt, während die Unabhängigkeit und Sicherheit von Daten und Anwendungen gewahrt bleibt.                                                                      |

| Ausdruck                    | Definition                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Zwischenfall                | Ein "Zwischenfall" bezeichnet jedes unerwartete Ereignis, das den normalen Betrieb eines Systems stört oder die Sicherheit von Daten und Infrastrukturen gefährdet.                                                                                                                                                                                                                                                                    |
| Problem                     | Ein "Problem" ist eine identifizierte oder vermutete Grundursache für einen oder mehrere Zwischenfälle, die eine Analyse und Lösung erfordert, um ein Wiederauftreten zu verhindern.                                                                                                                                                                                                                                                   |
| Änderung                    | Eine "Änderung" bezeichnet jede Modifikation der IT-Umgebung, die darauf abzielt, Systeme, Prozesse oder Dienste zu verbessern oder zu korrigieren.                                                                                                                                                                                                                                                                                    |
| Standardänderung            | Eine "Standardänderung" ist eine vorab genehmigte Änderung, die ein geringes Risiko birgt, wiederholend ist und einem etablierten Verfahren folgt, innerhalb der IT-Umgebung.                                                                                                                                                                                                                                                           |
| Inbetriebnahme              | administrative Aktion zur Realisierung der Änderung, wenn diese genehmigt ist<br/>(die Änderung im Sinne von ITIL betrifft nur das Change Management und nicht die Umsetzung/Konkretisierung derselben).                                                                                                                                                                                                                                 |
| Dienstanforderung           | Anfrage einer Evolution, die einem Verfahren unterliegt und deren Realisierung:<br/>i) die CMDB nicht verändert,<br/>ii) deren Vorgehensweise, Kosten und Risiken bekannt und im Voraus akzeptiert sind und keinen spezifischen Rückgriff erfordern<br/>iii) deren Umsetzung einem Service-Level-Agreement unterliegt und im Rahmen des Vertrags einbezogen ist, wenn sie während der Arbeitszeiten an Werktagen durchgeführt wird. |
| Konfigurationselement       | Ein "Konfigurationselement" ist eine identifizierbare Komponente des Informationssystems, wie etwa eine Software, Hardware oder ein Dokument,<br/> das im Rahmen des IT-Service-Managements verwaltet wird.                                                                                                                                                                                                    |
| Dienst                      | Ein "Dienst" ist ein Mittel, um Kunden Wert zu liefern, indem es erwünschte Ergebnisse ermöglicht, ohne dass diese die spezifischen Kosten und Risiken verwalten müssen.                                                                                                                                                                                                                                                               |
| Ereignis                    | Ein "Ereignis" ist jede detektierbare oder erkennbare Vorkommnis in einem Informationssystem oder Netzwerk, die für das Service-Management IT von Bedeutung sein könnte.                                                                                                                                                                                                                                                                |
| Schadensfall                | Ein "Schadensfall" bezeichnet ein unerwartetes schädigendes Ereignis, das materielle, finanzielle oder Datenverluste für einen KUNDEN verursacht.                                                                                                                                                                                                                                                                                       |
| Servicevereinbarung         | Dieses Dokument, das im Rahmen eines spezifischen Vertrags oder der Allgemeinen Geschäftsbedingungen und Nutzung (AGB) erstellt wird, und das im Einklang mit den Anforderungen des SecNumCloud-Referenzrahmens steht.                                                                                                                                                                                                                  |
| Verfügbarkeit               | Fähigkeit, die Verfügbarkeit und Aufrechterhaltung optimaler Leistungen eines Dienstes zu gewährleisten, in Übereinstimmung mit den definierten Kriterien und Engagements in den Serviceebenenabkommen (SLA).                                                                                                                                                                                                                            |
| Überwachung                 | Beobachtung eines Informationssystems oder eines Dienstes, welche das Sammeln verschiedener Daten wie Messwerte und Alarme beinhaltet. <br/>Diese Aktivität beschränkt sich auf Beobachtung und Nachverfolgung, ohne direkt in die überwachten Elemente einzugreifen, eine Prärogative, die den Verwaltungsoperationen vorbehalten ist.                                                                                                |

## 4. Gegenstand der PaaS-Dienstvereinbarung des Anbieters
Die vorliegende Dienstleistungsvereinbarung legt die Bedingungen fest, unter denen der Dienstleister sich verpflichtet, dem KUNDEN eine Infrastruktur zur Verfügung zu stellen, die den Spezifikationen des Angebots „Platform as a Service – PaaS“ entspricht und ordnungsgemäß als SecNumCloud qualifiziert ist.

Gegenstand der Dienstleistungsvereinbarung:

1. Die vom KUNDEN erwarteten Leistungsanforderungen an Funktionalität und Zuverlässigkeit der Infrastruktur zu präzisieren.
2. Die Verpflichtungen des Dienstleisters darzulegen, um die vereinbarten Service-Level zu erfüllen.
3. Die speziell für die vorgeschlagene Infrastruktur anwendbaren regulatorischen Normen zu identifizieren.
4. Einheitlichkeit und Integrität in der Bewertung der Qualität der erbrachten Dienstleistungen zu gewährleisten.
5. Die Exzellenz der bereitgestellten Dienstleistungen, bewertet anhand quantitativer Leistungsindikatoren, zu garantieren.

Es wird festgehalten, dass im Fall, dass dem Dienstleister seine SecNumCloud-Qualifikation entzogen würde, der vorliegende Vertrag ohne Verhängung von Sanktionen durch den KUNDEN von Rechts wegen gekündigt werden kann. In einem solchen Fall verpflichtet sich der Dienstleister, den KUNDEN über diese Disqualifizierung durch Zusendung einer offiziellen Benachrichtigung mittels eines eingeschriebenen Briefes mit Rückschein zu informieren.

Es ist anzumerken, dass eine Änderung oder Anpassung der SecNumCloud-Qualifikation nicht als Widerruf der ursprünglichen Qualifikation ausgelegt werden darf.

## 5. Entwicklung der PaaS-Dienstleistungsvereinbarung
Änderungen oder Hinzufügungen zu dieser Dienstleistungsvereinbarung ergeben sich ausschließlich aus den Anfragen, die von den hierfür bestimmten Governance-Organen gestellt wurden. 
Diese Änderungsvorschläge werden innerhalb des strategischen Komitees geprüft, das als einzige Instanz befugt ist, über die Notwendigkeit einer schriftlichen Formalisierung der Aspekte zu entscheiden.

Es wird vereinbart, dass jede Weiterentwicklung des Abkommens, die nach der Validierung die anfänglich festgelegten finanziellen Bedingungen verändert, die Erstellung und Unterzeichnung einer Ergänzung zum laufenden Vertrag erfordert.

Faktoren, die eine Überprüfung dieser Vereinbarung bewirken können, beinhalten, sind aber nicht beschränkt auf:

- Die Anpassung der PaaS-Plattform, die durch den Dienstleister orchestriert wird.
- Die vorgenommenen Anpassungen an den vom Dienstleister bereitgestellten Services.
- Die Änderungen der eingegangenen Verpflichtungen und der anwendbaren Sanktionen.
- Die organisatorischen Umstrukturierungen innerhalb des KUNDEN oder des Dienstleisters.
- Die Erweiterung oder Verringerung des Anwendungsbereichs der Dienstleistungen, für die sich der KUNDE entschieden hat.

Die Verwaltung der Versionen und Revisionen der Vereinbarung wird im Vorwort des Dokuments vermerkt, um die Nachverfolgung zu erleichtern.

## 6. Audit 

Der Dienstleister verpflichtet sich, dem KUNDEN oder jedem von ihm benannten Dritten Prüfer zu erlauben, alle für die Bestätigung der vollständigen Einhaltung der Verpflichtungen im Zusammenhang mit der Konformität nach Artikel 28 der Allgemeinen Datenschutzverordnung (DSGVO) erforderlichen Unterlagen einzusehen, was die Durchführung von Audits erleichtert.

**Insbesondere verpflichtet sich der Dienstleister, dem KUNDEN eine Liste aller Dritten zur Verfügung zu stellen, die auf die Daten zugreifen können, und ihn über alle Änderungen der Unterauftragnehmer zu informieren.**

Durch die Annahme dieser Dienstleistungsvereinbarung erteilt der KUNDE seine ausdrückliche Genehmigung an:

1. __Die Nationale Agentur für die Sicherheit von Informationssystemen (ANSSI)__ sowie die zuständige Qualifikationseinheit zur Überprüfung der Konformität des Dienstes und seines Informationssystems mit den vom Sicherheitsreferenzsystem SecNumCloud definierten Standards.
2. __Einen anerkannten Anbieter für die Sicherheitsprüfung von Informationssystemen__, der ordnungsgemäß qualifiziert und ausdrücklich vom Dienstleister benannt wurde, um Sicherheitsaudits im Zusammenhang mit dem vom Dienstleister bereitgestellten Dienst durchzuführen.

## 7. Beschreibung des Dienstes
Das Dienstleistungsangebot des Anbieters zeichnet sich durch die Bereitstellung der folgenden Dienstleistungen aus, 
welche dem Prinzip der geteilten Verantwortung folgen, wie in den Standards des SecNumCloud-Referenzrahmens detailliert beschrieben:

- Die Bereitstellung einer Redhat Openshift-Container Management Plattform, betrieben vom Anbieter.

Es wird verstanden, dass der Anbieter seine Expertise einsetzen wird, um die Dienstleistungen gemäß den besten professionellen Praktiken zu erbringen, 
entsprechend ihren Spezifikationen und unter Einhaltung der Normen seiner ISO/IEC 27001 Zertifizierung sowie den Richtlinien des SecNumCloud-Referenzrahmens.

## 8. Implementierung des Dienstes

Es wird darauf hingewiesen, dass alle Vorgänge und alle physischen Komponenten, die an der Erbringung des qualifizierten Dienstes beteiligt sind, auf den dieser Vertrag sich bezieht, 
innerhalb der Europäischen Union angesiedelt sind. Dies beinhaltet insbesondere den Support, die operationelle Überwachung und die Sicherheitsüberwachung (SOC).

### 8.1. Beschreibung der technischen Komponenten
Die PaaS-Dienste (Platform as a Service) umfassen alle Komponenten und Dienste, die für ihren optimalen Betrieb entsprechend der SecNumCloud-Qualifizierung erforderlich sind.

In dieser Hinsicht sind ihre Leistung und Zuverlässigkeit untrennbar mit den technischen Komponenten und Dienstleistungen der **IaaS-Infrastruktur** des Anbieters verbunden, wie im Dokument [IaaS-Dienstvereinbarung](../iaas/sla_iaas.md) des Anbieters angegeben.

#### 8.1.1. REDHAT OpenShift Serviceplattform
Der Service umfasst die Bereitstellung innerhalb einer Region über 3 Verfügbarkeitszonen,

#### 8.1.2. Infrastruktursoftware für das Management der Redhat Openshift Plattform
Der Dienstleister stellt dem KUNDEN die Administrationskonsole und die erforderliche API zur Verfügung, um seine PaaS RedHat OpenShift-Umgebungen zu betreiben.
Er verpflichtet sich auch, diese in einem optimalen betriebsbereiten Zustand zu halten und deren Sicherheit kontinuierlich zu gewährleisten.

Im spezifischen Rahmen des bereitgestellten Dienstes stellt der Dienstleister dem KUNDEN alle Schnittstellen und APIs der RedHat OpenShift-Plattform innerhalb des ausgewählten Mandanten zur Verfügung. Es obliegt dem KUNDEN, die angemessenen Sicherheitsvorrichtungen wie Firewalls, Web Application Firewalls (WAF) und andere Schutzmaßnahmen einzurichten sowie die damit verbundenen Filterregeln festzulegen, um den Zugriff auf seine Plattform gemäß seiner Sicherheitspolitik abzusichern.

Der Dienstleister warnt den Kunden, dass eine anormale Nutzung seiner Administrationskonsole, insbesondere im Falle einer Überlastung seiner Befehls-APIs (Hammering), 
automatische Sicherheitsmaßnahmen auslösen kann, die eine Sperrung des Zugriffs auf die Befehls-APIs oder bestimmte Dienstleistungen des Dienstleisters zur Folge haben können. Es ist wichtig zu betonen, dass diese Situation nicht als Dienstausfall gilt, sondern als Schutzmaßnahme für die Infrastruktur des Dienstleisters; 
daher kann der Kunde sie nicht als Dienstausfall in seine Berechnungen einbeziehen.

Darüber hinaus weist der Dienstleister den Kunden darauf hin, dass identische Anfragen (Duplikate) an seine APIs auf eine pro Sekunde (Throttling) beschränkt sind. 
Sollte der Kunde identische Anfragen mit einer höheren Frequenz einreichen, darf ihre Ablehnung nicht als Dienstausfall interpretiert werden.

#### 8.1.3. Zugehörige Backup-Infrastruktur
Der Anbieter stellt dem KUNDEN eine integrierte, dedizierte und verwaltete Backup-Plattform zur Verfügung, um die Daten der RedHat Openshift-Umgebungen zu schützen. 
Der Anbieter gewährleistet die Aufrechterhaltung der betrieblichen und der Sicherheitsbedingungen dieser integrierten Backup-Plattform.
Unabhängig von der Anzahl der vom KUNDEN abonnierten Verfügbarkeitszonen garantiert der Anbieter, dass die Backup-Plattform des KUNDEN außerhalb der Verfügbarkeitszone der gesicherten Workloads gelegen ist.

Die Backup-Leistung beschränkt sich auf das Backup der virtuellen Maschinen und der Topologiekonfigurationen der IaaS-Umgebung der SecNumCloud-Tenants des KUNDEN. 
Die Ausarbeitung und Anwendung einer angemessenen Backup-Politik durch den KUNDEN hängt von der Unterzeichnung spezifischer Leistungseinheiten ab.
Daher muss der KUNDE sicherstellen, dass er vom Anbieter die notwendigen technischen Ressourcen zur Verfügung gestellt bekommt, um seine Backup-Politik umzusetzen, oder diese anhand der verfügbaren Mittel anzupassen.

Der Anbieter verpflichtet sich, den KUNDEN im Falle von Kapazitätsbeschränkungen zu benachrichtigen und beratende Unterstützung zur Optimierung der Ressourcen zur Verfügung zu stellen.
Die Verpflichtungen des Anbieters beschränken sich auf die Umsetzung der vom KUNDEN ausgedrückten Bedürfnisse bezüglich der Backup-Politik, im Rahmen der abonnierten Ressourcen.

#### 8.1.4. Implementierung von Lösungen zur Geschäftsfortführung oder Betriebskontinuität
Der Dienstleister stellt dem KUNDEN alle technischen Lösungen zur Verfügung, die notwendig sind, um eine optimale Verteilung seiner Ressourcen über verschiedene Verfügbarkeitszonen zu gewährleisten. Es obliegt dem KUNDEN, diese Ressourcenverteilung effektiv zu verwalten, für die er die Möglichkeit hat, die vom Dienstleister zu diesem Zweck bereitgestellten Werkzeuge zu nutzen.

Insbesondere müssen die auf der RedHat OpenShift Platform implementierten Anwendungen die vom Dienstleister angebotenen Redundanzmechanismen unterstützen, um von den damit verbundenen Disaster-Recovery- oder Business-Continuity-Lösungen profitieren zu können.

## 10. Verpflichtungen und Service-Level
Der Dienstleister verpflichtet sich, eine kontinuierliche Überwachung der Leistung und der Sicherheitsintegrität seiner Plattformen und Dienste zu gewährleisten und auf deren optimalen Betrieb zu achten.

Die Nichtverfügbarkeit eines Dienstes, für den ein Leistungsindikator besteht, wird anerkannt, sobald sie durch das Überwachungssystem des Dienstleisters identifiziert wird oder nach einer Benachrichtigung durch einen Nutzer des KUNDEN. Der Beginn der Nichtverfügbarkeit wird auf den frühesten Zeitpunkt zwischen diesen beiden Ereignissen festgelegt, um eine genaue und gerechte Zählung der Ausfallzeit zu garantieren.

Das Ende der Nichtverfügbarkeit wird offiziell durch die vollständige Wiederherstellung des Dienstes markiert, bestätigt entweder durch die Überwachungswerkzeuge des Dienstleisters oder durch eine Rückmeldung des Nutzers, um so eine tatsächliche Wiederaufnahme des Betriebs und eine treue Messung der Dauer des Ausfalls zu sichern.

### 10.1. Verfügbarkeitszusagen der RedHat OpenShift-Plattform


Der Anbieter verpflichtet sich, ein Verfügbarkeits- und Leistungsniveau gemäß den für jede spezifizierte Periode definierten Standards aufrechtzuerhalten.
Die Service-Level-Vereinbarungen (Service Level Agreements, SLAs) finden Anwendung unter der Voraussetzung, dass der KUNDE seine Systeme in mindestens zwei der Verfügbarkeitszonen implementiert, die in der betroffenen Region vorhanden sind.

Kann der KUNDE diese Bedingungen nicht einhalten, ist er nicht in der Lage, die Anwendung der betreffenden SLAs zu beanspruchen, die spezifisch mit einem Sternchen (*) markiert sind. Der Zugang zu den SLAs erfolgt über die KUNDENSCHNITTSTELLE.** Die Messungen verstehen sich monatlich berechnet **:

- **SLA 1 (*) : IC-PAAS_SNC-01** – Verfügbarkeit der RedHat OpenShift-Plattform: Garantierter Verfügbarkeitsgrad von 99,9%, berechnet auf einer 24-Stunden-Basis, 7 Tage die Woche.

_**Anmerkungen**_:

- *Als Reaktion auf eine verteilte Denial-of-Service-Attacke (DDoS) behält sich der Anbieter das Recht vor, seine Internet-Routing-Konfiguration anzupassen, um
die Auswirkung dieser Attacke zu begrenzen und seine Infrastruktur zu schützen. Insbesondere wenn eine dem KUNDEN gehörende IP-Adresse gezielt ist, kann der Anbieter auf die Technik des Blackholing
über die BGP-Community zurückgreifen, um den gesamten Verkehr zu der betroffenen IP-Adresse bei seinen Lieferanten zu blockieren, um die Ressourcen des KUNDEN sowie die anderer Kunden
und die Infrastruktur des Anbieters zu schützen. Der Anbieter empfiehlt dem KUNDEN dringend, ähnliche Maßnahmen zu ergreifen, wie die Verwendung von am Markt verfügbaren Webanwendungs-Firewalls
und die sorgfältige Konfiguration seiner Sicherheitsgruppen über die Befehls-API.*

- *Der Anbieter betont die Notwendigkeit für den KUNDEN, die Öffnungen von Flüssen zu minimieren, indem insbesondere vermieden wird, die Administrationsports **SSH** (TCP-Port 22) und **RDP** (TCP-Port 3389) sowie interne Protokolle wie **SMB** (TCP/UDP-Port 445) oder **NFS** (TCP/UDP-Port 2049) vom gesamten Internet (Subnetz 0.0.0.0/0) zugänglich zu machen.*

## 12. Anwendbares Modell geteilter Verantwortlichkeiten
### 12.1. Verantwortung und Pflichten des Dienstleisters
Der Anbieter verpflichtet sich, dem KUNDEN Benutzerschnittstellen in französischer und englischer Sprache zur Verfügung zu stellen, um den Zugang und die Verwaltung der bereitgestellten Dienste zu erleichtern.
Der KUNDE verpflichtet sich seinerseits, die geltenden gesetzlichen und regulatorischen Anforderungen in Bezug auf die Daten zu respektieren, die er dem Anbieter zur Verarbeitung anvertraut.

Falls Daten übermittelt werden, die spezifischen rechtlichen Anforderungen unterliegen, wird der Anbieter mit dem KUNDEN zusammenarbeiten, um die notwendigen Sicherheitsmaßnahmen zu identifizieren und umzusetzen,
entsprechend den Verpflichtungen des Anbieters und im Rahmen der Dienstleistungserbringung.

Der Anbieter verpflichtet sich zudem, die spezifischen Anforderungen im Zusammenhang mit den Tätigkeitsbereichen des KUNDEN zu prüfen und zu berücksichtigen,
unter Beachtung der Haftungsbeschränkungen, um ein dem verarbeiteten Informationsniveau angemessenes Sicherheitsniveau zu gewährleisten.

Sollte ein Projekt die Sicherheit der angebotenen Dienstleistung beeinflussen können, verpflichtet sich der Anbieter, den KUNDEN über potenzielle Auswirkungen,
erwogene Korrekturmaßnahmen und verbleibende Risiken zu informieren, wodurch eine vollständige Transparenz gewährleistet ist.

Der Anbieter gewährleistet, dass er die Daten des KUNDEN nicht zu Testzwecken verwenden wird, ohne eine vorherige und ausdrückliche Zustimmung des KUNDEN,
und verpflichtet sich, die Anonymität und den Schutz der Vertraulichkeit dieser Daten während ihrer Verarbeitung zu gewährleisten.

Im Falle einer Änderung des Subunternehmers für das Hosting wird der Anbieter den KUNDEN im Voraus informieren und sicherstellen, dass dieser Übergang den bereitgestellten Dienst nicht negativ beeinträchtigt.

Auf Anfrage des KUNDEN wird der Anbieter Zugang zu seiner Hausordnung, seiner Ethikcharta, den anwendbaren Sanktionen bei Nichteinhaltung seiner
Sicherheitspolitik, den ihn betreffenden Ereignissen, den verfahrensbezogenen Abläufen und den spezifischen Sicherheitsanforderungen gewähren.

### 12.2. Haftungsbeschränkung des Anbieters
Die geteilte Verantwortungsstruktur reduziert effektiv den Umfang des Eingreifens des Dienstleisters auf Aspekte, die mit der Bereitstellung einer funktionalen RedHat OpenShift-Plattform zusammenhängen. Dies umfasst:

- Die Verwaltung der IaaS-Infrastruktur, die die RedHat OpenShift-Plattform unterstützt und ihr Provisioning,
- Die Verwaltung der Systeme, die für das ordnungsgemäße Funktionieren der Plattform erforderlich sind,
- Die Aufrechterhaltung der Sicherheitsbedingungen,
- Das Update der RedHat OpenShift-Plattform,
- Die Sicherung der wesentlichen Konfigurationsdaten dieser Plattform, mit Ausnahme der Daten und Anwendungen des KUNDEN, die in seiner Verantwortung liegen.

Insbesondere, aber nicht ausschließlich, werden ausgeschlossen:

- Das Update der Betriebssysteme und der vom KUNDEN in seinen OpenShift-Mietbereichen installierten Software,
- Die Sicherheit der Programme, Software und Anwendungen, die innerhalb der OpenShift-Umgebung vom KUNDEN installiert sind,
- Die Datensicherung auf Anwendungsebene,
- Die Konfiguration der Back-up-Richtlinien.

### 12.3. Zugangsbeschränkung
Im Rahmen dieser Dienstleistungsvereinbarung ist es dem Anbieter ausdrücklich untersagt, ohne vorherige Genehmigung auf die Mandanten des KUNDEN zuzugreifen.
Es liegt in der Verantwortung des KUNDEN, dem Personal des Anbieters die notwendigen Zugänge gemäß den spezifischen Anforderungen des Hostings zu gewähren und
gegebenenfalls der professionellen Support-Dienste, falls diese Option vom KUNDEN gewählt wurde.

Der KUNDE erkennt an, dass diese Zugänge ausschließlich für Bedürfnisse im Zusammenhang mit der Erbringung der vereinbarten Dienstleistungen gewährt werden,
und so eine sichere Handhabung im Einklang mit den Bedingungen der Vereinbarung gewährleisten.

Der Fernzugriff durch Dritte, die an der Erbringung der Dienstleistung des Anbieters beteiligt sind, ist strengstens verboten.
Falls eine spezifische technische Anforderung einen solchen Zugriff erforderlich machen sollte, kann dieser nur eingerichtet werden,
nachdem der KUNDE klar benachrichtigt wurde, eine detaillierte Rechtfertigung erhalten hat und seine schriftliche Zustimmung erteilt wurde.

Diese Maßnahme garantiert die Kontrolle und Sicherheit der Daten des KUNDEN, indem sichergestellt wird, dass jede Ausnahme von der Regel ordnungsgemäß autorisiert und dokumentiert ist.

## 13. Löschung der Daten am Ende des Vertrags
Am Ende des Vertrages, sei es aufgrund des Ablaufs oder einer Kündigung aus welchem Grund auch immer, verpflichtet sich der Dienstleister, ein sicheres Löschen 
sämtlicher Kundendaten, einschließlich der technischen Daten, durchzuführen. Der Dienstleister wird sicherstellen, dem KUNDEN eine formelle Ankündigung mit einer 
Frist von einundzwanzig (21) Kalendertagen zu übermitteln. Die Daten des KUNDEN werden dann innerhalb einer maximalen Frist von dreißig (30) Tagen 
nach dieser Benachrichtigung gelöscht.

Zum Nachweis dieser Löschung wird der Dienstleister dem Kunden ein Zertifikat ausstellen, das die Datenlöschung bestätigt.

## 14. Anwendbares Recht

Das anwendbare Recht für dieses Dienstleistungsabkommen ist französisches Recht.