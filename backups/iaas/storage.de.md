---
title: Speicherung
---

## Allgemeinheit über die Speicherung
Cloud Temple bietet verschiedene Speicherklassen basierend auf der Technologie [IBM FlashSystem](https://www.ibm.com/flashsystem/) 
und [IBM SVC](https://www.ibm.com/products/san-volume-controller) an.

Die __IBM SVC__ Technologie ermöglicht es, das erforderliche Leistungsniveau für die Umgebungen unserer Kunden zu liefern, dank der großen Menge an eingebautem Cache-Speicher in den Controllern und der Möglichkeit, die gesamten IOPS
eines Servers auf mehrere SANs zu verteilen.

Sie wird auch verwendet, um die Replikation Ihrer Blockspeicher-LUNs zwischen den Verfügbarkeitszonen zu ermöglichen oder Eingriffe an den Speichersystemen zu erleichtern.

## Blockspeicherung
### Allgemeinheit
Die Speicherung basiert hauptsächlich auf FLASH NVME Speicher vom Typ, der speziell für professionelle Arbeitslasten konzipiert ist.
Die Festplatten werden von Speichersystemen in [__'Distributed Raid 6'__](https://www.ibm.com/docs/en/flashsystem-5x00/8.6.x?topic=configurations-distributed-raid-array-properties) verwendet.

Die Speicherklasse __'Mass Storage'__ bietet mechanische Festplatten für Archivierungsbedürfnisse
im Kontext wirtschaftlicher Effizienz. Verschiedene Leistungsstufen sind verfügbar:

| Referenz                           | Einheit | SKU                                        | 
|------------------------------------|---------|--------------------------------------------|
| FLASH - Essentiel - 500 IOPS/To    | 1 Gio   | csp:(region):iaas:storage:bloc:live:v1     |
| FLASH - Standard - 1500 IOPS/To    | 1 Gio   | csp:(region):iaas:storage:bloc:medium:v1   | 
| FLASH - Premium - 3000 IOPS/To     | 1 Gio   | csp:(region):iaas:storage:bloc:premium:v1  |
| FLASH - Enterprise - 7500 IOPS/To  | 1 Gio   | csp:(region):iaas:storage:bloc:enterprise:v1 |
| FLASH - Ultra - 15000 IOPS/To      | 1 Gio   | csp:(region):iaas:storage:bloc:ultra:v1    | 
| MASS STORAGE - Archivierung        | 1 Tio   | csp:(region):iaas:storage:bloc:mass:v1     |

*__Nota__ :*

- *Die Verfügbarkeit des Speichers beträgt monatlich gemessen 99,99%, einschließlich Wartungsfenster,*
- *Es gibt keine Beschränkungen oder Quoten für das Lesen oder Schreiben,*
- *Es gibt keine Abrechnung nach IOPS,*
- *Es gibt keine Leistungszusage für die Klasse __'Mass Storage'__,*
- *Die Mindestgröße eines Speicher-LUN beträgt 500Gio,*
- *Bei der Verwendung eines Replikationsmechanismus für Speicher müssen die Leistungen in beiden Verfügbarkeitszonen identisch sein,*
- *Es werden keine "intelligenten" Optimierungsmechanismen wie Kompression oder Deduplizierung eingesetzt: Wenn Sie 10Tio Speicher reservieren, haben Sie physisch 10Tio nutzbaren Speicher, der auf IBM-Maschinen implementiert ist.*
- *Die Speicher-LUNs sind der Kunden-Umgebung gewidmet.*

### Verwendung im Rahmen des vmware Rechenangebots
Bei der Verwendung von Blockspeicher als Datastore im VMware-Computing-Angebot von Cloud Temple müssen Sie **mehrere wichtige Überlegungen berücksichtigen**:

1. **Austauschdatei (.VSWP) beim Start der virtuellen Maschinen**: Wenn eine virtuelle Maschine startet, erstellt sie eine .VSWP-Austauschdatei in der Größe ihres Speichers auf der Festplatte. Daher müssen Sie immer freien Speicherplatz in Ihrem Datastore in Höhe der Summe der Speichergrößen aller Ihrer virtuellen Maschinen vorhalten, um Ihre virtuellen Maschinen starten zu können. Wenn Ihr Datastore beispielsweise 1 TiB Blockspeicher hat und Sie 10 virtuelle Maschinen mit jeweils 64 GiB Speicher starten möchten, werden 640 GiB Festplattenspeicher benötigt. Ohne diesen freien Speicher ist der Start der Maschinen durch die verfügbare Kapazität für die Erstellung der Austauschdateien begrenzt.

2. **Freier Speicherplatz für Backup-Snapshots**: Der Backup-Dienst verwendet Momentaufnahmen (Snapshots). Sie müssen daher immer genügend freien Speicherplatz haben, um die Erstellung eines Snapshots beim Backup einer virtuellen Maschine zu ermöglichen. Die Größe des Snapshots hängt vom Schreibvolumen der virtuellen Maschine und der benötigten Zeit für die Durchführung des Backups ab. Grundsätzlich wird empfohlen, mindestens 10 % freien Speicherplatz für diese Operation vorzuhalten.

3. **Umgang mit dynamischen Disks**: Seien Sie vorsichtig beim Einsatz von dynamischen Disks. Wenn deren Wachstum nicht kontrolliert wird, kann ein Mangel an physischem Speicher im besten Fall zum Einfrieren (Freeze) der virtuellen Maschine oder im schlimmsten Fall zu einem Absturz mit Korruption führen. Es ist von entscheidender Bedeutung, den verfügbaren Speicherplatz auf Ihren Datastores genau im Auge zu behalten, wenn Sie diesen Typ von Disk verwenden.

Eine proaktive Verwaltung des Festplattenspeichers ist entscheidend, um den reibungslosen Betrieb Ihrer virtuellen Maschinen und die Zuverlässigkeit der Backups zu gewährleisten. Stellen Sie sicher, dass Sie immer ausreichend Speicherplatz für Austauschdateien, Snapshots und das Wachstum von dynamischen Disks haben.

## Backupmodus-Speicherung
Der Speicherplatz, der für die Sicherung Ihrer virtuellen Maschinen vorgesehen ist, wird automatisch von der Plattform [IBM Spectrum Protect Plus](backup.md) im Rahmen des bestellten Quotas bereitgestellt.

| Referenz                 | Einheit | SKU                                       |
|--------------------------|---------|-------------------------------------------|
| MASS STORAGE - Archivierung | 1 TiB  | csp:(region):iaas:storage:bloc:backup:v1 |

## Objektspeicher
Das Cloud-Temple-Objektspeicher ist auf der Technologie [DELL ECS](https://www.dell.com/en-us/dt/storage/ecs/) basiert.

Die Beschreibung dieses Speichers finden Sie im PaaS-Abschnitt: [Objektspeicher]().

## Replikation des blockbasierten Speichers
### Prinzipien
Um die Umsetzung Ihrer Geschäftskontinuitätspläne zu ermöglichen, wenn es nicht möglich ist, eine Aktivitätskontinuität mit Anwendungsmechanismen zu gewährleisten und die Replikation virtueller Maschinen nicht geeignet ist, bietet Cloud Temple __Mechanismen zur Blockspeicherreplikation zwischen den Verfügbarkeitszonen einer Region__ an.

Diese Replikationsmechanismen werden auf die LUNs des Speichers Ihrer Umgebungen angewendet, ergänzend zu den Sicherungen. 
Die Wahl der Verwendung eines Replikationsmechanismus in einer Umgebung __hängt von vielen Faktoren ab, einschließlich ihrer Kritikalität, der tolerierten Datenverlust oder auch die angestrebte Leistung__ für die Anwendung.

Cloud Temple bietet zwei Arten von Mechanismen an, die in einer aktiven/passiven Konfiguration implementiert sind:

- Die __asynchrone Replikation__ (oder __'Global Mirror'__): *Die Funktion __'Global Mirror'__ bietet einen Prozess asynchroner Kopie an.
Wenn ein Host auf das primäre Volume schreibt, wird die Bestätigung des I/O-Abschlusses erhalten, bevor die Schreiboperation 
auf dem sekundären Volume abgeschlossen ist. Wenn ein Failover initiiert wird, muss die Anwendung
alle Aktualisierungen, die auf dem sekundären Volume nicht bestätigt wurden, abrufen und anwenden. 
Wenn die I/O-Operationen auf dem primären Volume für eine kurze Zeit angehalten werden, 
kann das sekundäre Volume eine exakte Übereinstimmung des primären Volumens werden. Diese Funktion ist vergleichbar mit einem Prozess 
der kontinuierlichen Sicherung, bei dem die letzten Updates immer fehlen. 
Wenn Sie Global Mirror für die Notfallwiederherstellung verwenden, sollten Sie überlegen, wie Sie diese fehlenden Updates handhaben wollen.*

- Die __synchrone Replikation__ (oder __'Metro Mirror'__): *Die Funktion __'Metro Mirror'__ ist eine Art Fernkopie, die eine synchrone Kopie 
von Daten eines primären Volumes zu einem sekundären Volume erstellt. Bei synchronen Kopien schreiben Hostanwendungen auf das primäre Volume, erhalten jedoch keine Bestätigung,
dass die Schreiboperation abgeschlossen ist, bis die Daten auf das sekundäre Volume geschrieben sind. Das stellt sicher, dass beide Volumes identische Daten enthalten, wenn 
die Kopieroperation abgeschlossen ist. Nachdem die initiale Kopieroperation abgeschlossen ist, 
hält die Metro Mirror Funktion kontinuierlich eine vollständig synchrone Kopie der Quelldaten auf dem Zielstandort vor. __Seit dem 1. Januar 2024 wird die 'Metro Mirror' Funktion nicht mehr vermarktet.__*

Ein Standort wird dann als "aktiv" oder "primär" und ein anderer als "passiv" oder "Standby" definiert.
Der Geschäftskontinuitätsplan wird im Falle eines Desasters oder im Rahmen einer Testanfrage des BCP aktiviert.
Danach übernimmt der passive Standort die Rolle des aktiven Standorts.

### Asynchrone Replikation
Wenn Ihre Arbeitslasten kurze Wiederanlaufzeiten erfordern und es nicht akzeptabel oder angemessen ist, Mechanismen wie Anwendungsreplikation/Virtual Machine Replikation zu verwenden, ist es möglich, eine SAN-Speicher-LUN zwischen zwei Verfügbarkeitszonen innerhalb derselben Region zu replizieren.

Dieses Angebot ermöglicht eine __Wiederherstellungspunkt-Objektiv (RPO) von 15 Minuten__ und eine __Wiederherstellungszeit-Objektiv (RTO) von weniger als 4 Stunden__. Es ermöglicht einen deutlich schnelleren Neustart als die Umsetzung einer Backupwiederherstellung.

Bei einem Speichervolumen in asynchroner Replikation (__Global Mirror__) arbeiten die SAN-Virtualisierungskontrolleure der beiden Verfügbarkeitszonen zusammen, um die Schreiboperationen auf beiden Seiten durchzuführen. Die Hauptseite wartet nicht auf die Schreibbestätigung der Sekundärseite.

Die Schritte einer Schreiboperation sind wie folgt:

1. Ein Hypervisor möchte __eine Schreiboperation auf einem Global-Mirror-Volume__ durchführen: er sendet seine Anfrage an den SAN-Controller seiner Verfügbarkeitszone,
2. Der lokale SAN-Controller bittet den SAN-Controller der entfernten Zone, die Schreiboperation durchzuführen,
3. der lokale SAN-Controller wartet nicht auf die Bestätigung des entfernten SAN und führt dann das Schreiben lokal durch,
4. Er gibt __Bestätigung__ an den Hypervisor, der die Anfrage gestellt hat,
5. __Die Hypervisoren der entfernten Seite haben keinen direkten Zugriff auf die Global Mirror LUN__: Eine Dienstanforderung ist notwendig.

| SLA       | Beschreibung                                                                                                                                       |   
|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO 15mn  | Im Falle eines Schadens am Hauptrechenzentrum entspricht die maximale Datenmenge, die verloren gehen kann, maximal den letzten 15 Minuten an Schreibvorgängen |
| RTO < 4H  | Im Falle eines Schadens am Hauptrechenzentrum ist die Wiederherstellung der Aktivität innerhalb von 4 Stunden, abhängig von der Komplexität der Umgebungen, garantiert. |

Im Falle einer Aktivierung des Notfallwiederherstellungsplans (PRA), führt das Cloud Temple Team eine Präsentation der __'Global Mirror'__ LUN an die entfernten Hypervisoren durch, damit sie auf die Daten zugreifen können. Die Implementierung dieser Lösung erfordert daher, dass auf der 'Standby' Seite Rechenressourcen und RAM reserviert worden sind, um die Aktivität im Falle eines Schadens wieder aufzunehmen.

Die Nutzung dieser Technologie erfordert auch die Verdopplung des Speicherplatzes: es ist notwendig, genau denselben Platz auf der entfernten Seite wie auf der lokalen Seite zu haben.

Die Nutzung dieses Mechanismus kann die Leistung der Anwendung um bis zu 10 % beeinträchtigen. __Nur die Speicherklassen 500 Iops/To, 1500 Iops/To und 3000 Iops/TO sind kompatibel.__

| Referenz                          | Einheit   | SKU                                               |  
|------------------------------------|----------|---------------------------------------------------|
| SPEICHER – Global Replication SAN  | 1 TiB    | csp:(region):iaas:storage:licence:globalmirror:v1 |

*__Hinweis__*:

- *Da das Angebot asynchron ist, kann es im Falle eines Schadens vorkommen, dass bestimmte Festplattenoperationen nicht auf der entfernten Seite geschrieben wurden. Es kann also ein Risiko für die Datenkonsistenz geben, das im Risikoanalyseplan für den Notfallwiederherstellungsplan zu berücksichtigen ist.*
- *Die Blockspeicherreplikation erfolgt für virtuelle Maschinen und Anwendungen unsichtbar,*
- *Aus diesem Grund ist es wichtig, Szenarien der Anwendungsreplikation oder gegebenenfalls der virtuellen Maschinenreplikation zu bevorzugen,*
- *Rechenleistung und Speicher auf der Wiederherstellungsseite können reduziert werden, um Kosten zu optimieren, wenn eine eingeschränkte Situation für das Geschäft bei der Anwendung des Notfallwiederherstellungsplans akzeptabel ist.*

### Synchrone Replikation
__Seit dem 1. Januar 2024 wird der Mechanismus der synchronen Replikation nicht mehr vertrieben__

Im Falle von Anwendungen mit sehr hoher Kritikalität, die keinen Datenverlust tolerieren, wird empfohlen, 
ein synchrones Replikationssystem (oder Metro-Replikation) SAN zwischen den beiden Verfügbarkeitszonen zu übernehmen.
Dieser Plan ermöglicht es, ein RPO von Null zu erreichen (vom Typ 'letzte Festplattenschreibung').

Bei einem Speichervolumen in Metro-Replikation arbeiten die SAN-Virtualisierungscontroller zusammen, um die Schreiboperationen auf beiden Standorten gleichzeitig durchzuführen.

Die Schritte einer Schreiboperation sind folgende:

1.	Ein Hypervisor möchte eine Schreiboperation auf einem Metro-Mirror-Volume durchführen: er sendet seine Anfrage an den SAN-Controller seiner Site.
2.	Der lokale SAN-Controller fordert den SAN-Controller der entfernten Site auf, die Schreiboperation durchzuführen.
3.	Nachdem die Schreiboperation durchgeführt wurde, bestätigt der entfernte SAN-Controller.
4.	Der lokale SAN-Controller führt dann die Schreiboperation lokal durch und bestätigt dem Hypervisor, der die Anfrage gestellt hat.
5.	Die Hypervisoren der entfernten Site greifen nicht direkt auf die Metro Mirror LUN zu.

![](images/schemas/replication_metro.png)

| SLA                            | Beschreibung                                                                                                                                                     |   
|--------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO = letzte Festplattenschreibung | Im Falle eines Unglücks im Haupt-Datacenter ist die maximal verlorene Datenmenge die der letzten Festplattenschreibung, also ein RPO nahe Null.                    |
| RTO < 4H                       | Im Falle eines Unglücks im Haupt-Datacenter ist die Wiederherstellung der Aktivität innerhalb von 4 Stunden garantiert, abhängig von der Komplexität der Umgebungen. |

Im Falle der Aktivierung des PRA führt das Team von Cloud Temple eine Operation zur Präsentation der Metro-Mirror LUN an die entfernten Hypervisoren durch, damit sie auf die Daten zugreifen können.

Die Einrichtung dieser Lösung erfordert daher, dass auf der Standby-Site Rechenleistung und RAM reserviert wurden, um die Aktivität im Falle eines Unglücks wieder aufzunehmen.
Die Nutzung dieser Technologie erfordert ebenfalls die Verdoppelung des Festplattenspeicherplatzes: es ist notwendig, den gleichen Platz auf der entfernten Site wie auf der lokalen Site zu haben.

Es ist zu beachten, dass die Nutzung dieses Mechanismus die Leistung der Anwendung um bis zu 30 % beeinflussen kann. __Nur die Speicherklasse 500 Iops/To wird unterstützt__.


| Referenz                                             | Einheit | SKU                                              |  
|-----------------------------------------------------|---------|--------------------------------------------------|
| SPEICHER - Metro Replikation SAN inter-datacenter   | 1 TiB   | csp:(region):iaas:storage:licence:metromirror:v1 |

*__Notiz__*: 

- *Die Blockspeicher-Replikation erfolgt für virtuelle Maschinen und Anwendungen verdeckt,*
- *In diesem Zusammenhang ist es wichtig, anwendungsspezifische Replikationsszenarien zu bevorzugen oder eventuell virtuelle Maschinen-Replikationen,*
- *Rechenleistung und Speicher auf der Wiederherstellungsseite können reduziert werden, um Kosten zu optimieren,
wenn ein herabgesetzter Zustand für das Geschäft beim Einsatz des Business Continuity Plans akzeptabel ist.*

## Asynchrone Replikation Ihrer virtuellen Maschinen in einer VMware-Umgebung
Die asynchrone Replikation Ihrer virtuellen Maschinen ist ein Mechanismus, der darin besteht, Schreiboperationen auf Hypervisor-Ebene auf der Standby-Site in regelmäßigen Zeitabständen zu übertragen.

Nach einer initialen Online-Kopie des gesamten aktiven Speichers auf der Standby-Site werden nur die Schreibvorgänge in regelmäßigen Abständen auf die Standby-Site übertragen.
Dieses Intervall hängt vom Schreibvolumen ab (von jeder Stunde bis zu alle 24 Stunden).

Die Replikation der virtuellen Maschinen basiert auf dem Mechanismus der Momentaufnahmen des Hypervisors. Als solche hat 
diese Lösung die gleichen Nachteile, insbesondere die Empfindlichkeit gegenüber dem Schreibvolumen der virtuellen Maschine,
da der Momentaufnahmen-Prozess ein rekursiver Mechanismus ist, um die Momentaufnahme zu schließen.

Das typische Beispiel für eine Maschine, die das Replikationsmechanismus der virtuellen Maschinen nicht unterstützt, ist ein
FTP-Server, der Echtzeit-Datenströme von Überwachungskameras empfängt. __Die Maschine verbringt ihre Zeit mit Schreiben und wird 
nicht in der Lage sein, eine Momentaufnahme ohne eine Betriebssystempause für einen bedeutenden Zeitraum
(mehrere Dutzend Minuten) zu schließen__. Wenn es dem Hypervisor nicht gelingt, die Momentaufnahme zu schließen, wird er genau das tun,
ohne die Möglichkeit einzugreifen, außer die virtuelle Maschine zu korrumpieren.

![](images/schemas/replication_vsphere.png)


| SLA                 | Beschreibung                                                                                                                                                 |   
|---------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO von 1H bis 24H  | Im Falle eines Schadens am Hauptdatenzentrum ist die maximal verlorene Datenmenge die der letzten Übertragung der Schreiboperationen auf die Standby-Site.  |
| RTO  < 15mn         | Betriebsstartoperation der auf der entfernten Site gestoppten virtuellen Maschine                                                                            |


Bei Bedarf oder im Falle eines Ausfalls einer Maschine auf der Hauptsite wird die Spiegelmaschine auf der Standby-Site aktiviert.
Die Wiederaufnahme des Betriebs erfordert reservierte Rechenleistung und RAM im Standby auf der Standby-Site.
Es ist notwendig, den gleichen Speicherplatz auf der passiven Site wie auf der aktiven Site zu haben.


| Referenz                             | Einheit | SKU                                              |  
|--------------------------------------|---------|---------------------------------------------------|
| PRA - VMware-Replikation inter-AZ    | 1 vm    | csp:(region):iaas:vmware:licence:replication:v1  |

*__Notiz__ : Die Berechnung des minimalen RPO muss gemäß der Änderungsrate auf der virtuellen Maschine definiert werden.*