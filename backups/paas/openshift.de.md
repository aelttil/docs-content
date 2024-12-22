---
title: Redhat Openshift
---

Das RedHat Openshift-Angebot von Cloud Temple basiert auf einer Architektur, die aus Openshift und Openshift Data Foundation besteht und auf drei Verfügbarkeitszonen in der FR1-PARIS-Region verteilt ist.

## Vorstellung von RedHat Openshift
**Red Hat OpenShift** ist eine Unternehmenscontainer-Plattform, die die Bereitstellung, Verwaltung und Skalierung von containerisierten Anwendungen automatisiert. Es ist eine Plattform, die um Docker herum aufgebaut ist, ein Containerisierungssystem, das es ermöglicht, eine Anwendung und ihre Abhängigkeiten in einem virtuellen Container zu verpacken, und Kubernetes, einem Containers-Orchestrierungssystem, das die Ausführung und Koordination der Container auf einem Servercluster verwaltet.

### Hauptfunktionen von Red Hat OpenShift:
- **Automatisierte Bereitstellung und Verwaltung:** OpenShift vereinfacht den Anwendungs-Bereitstellungsprozess, indem es Verwaltungsroutinen wie Skalierung, Gesundheit und Lebensdauer der Container automatisiert. Es bietet eine integrierte Umgebung für die Entwicklung, das Testen und die Produktion von Anwendungen.

- **Unterstützung für mehrere Sprachen und Dienste:** Die Plattform unterstützt eine Vielzahl von Programmiersprachen (wie Java, Node.js, Python, Ruby und PHP) und bietet integrierte Dienste wie Messaging, Caching und Datenbanken, was es Entwicklern ermöglicht, sich auf den Code anstatt auf die Infrastruktur zu konzentrieren.

- **Fortlaufende Integration (CI) und fortlaufendes Deployment (CD):** OpenShift integriert CI/CD-Tools, die den Softwareentwicklungs-Pipelineprozess automatisieren, vom ersten Commit bis zum Produktions-Deployment, und fördern dadurch DevOps-Praktiken.

- **Operationsmanagement:** OpenShift bietet Tools zur Überwachung, Leistungsmanagement und Diagnose von Anwendungen und Infrastrukturen und hilft Betreibern dabei, die Gesundheit und Leistung der Systeme aufrechtzuerhalten.

- **Erhöhte Sicherheit:** Die Plattform ist mit integrierter Sicherheit konzipiert und bietet zugriffsbasierte Rollenkontrollen, Trennung der Aufgaben und automatisches Geheimnismanagement zum Schutz von Anwendungen und Daten.

### Vorteile von Red Hat OpenShift:
- **Flexibilität:** Entwickler können mit den Tools, Sprachen und Frameworks ihrer Wahl arbeiten.
- **Betriebseffizienz:** OpenShift optimiert die Ressourcennutzung, reduziert die Markteinführungszeit und steigert die Produktivität der Entwickler.
- **Skalierbarkeit:** Die Plattform verwaltet automatisch das Scaling der Anwendungen, um auf Nachfrageschwankungen zu reagieren.
- **Sicherheit und Konformität:** Mit seinen integrierten Sicherheitsrichtlinien hilft OpenShift dabei, Sicherheitsstandards und Konformitätsanforderungen aufrechtzuerhalten.

Red Hat OpenShift ist eine komplette Lösung für die Entwicklung, den Einsatz und die Verwaltung containerisierter Anwendungen, die eine robuste, sichere und flexible Plattform für Unternehmen bietet, die moderne Ansätze zur Softwareentwicklung übernehmen.

### RedHat Openshift Data Foundation
Red Hat OpenShift Data Foundation (ODF) ist eine integrierte Speicher- und Datenverwaltungslösung, die für ein nahtloses Funktionieren mit dem OpenShift-Ökosystem konzipiert ist. Sie bietet eine persistente, sichere und hochverfügbare Dateninfrastruktur für containerisierte Anwendungen und unterstützt damit moderne Entwicklungsumgebungen, die sich auf Container und Mikroservices konzentrieren. ODF ist darauf ausgerichtet, die Datenverwaltung in hybriden und Multi-Cloud-Umgebungen zu vereinfachen und zu automatisieren, und liefert eine starke Grundlage für kritische Unternehmensanwendungen.

#### Schlüsselmerkmale von OpenShift Data Foundation:
- **Persistenter Speicher:** ODF stellt eine Ebene des persistenten Speichers für Container bereit, die für Unternehmensanwendungen wie Datenbanken, Content-Management-Systeme und Anwendungen, die einen persistenten Status erfordern, unerlässlich ist.

- **Multicloud und Hybrid:** Entwickelt für hybride und Multicloud-Umgebungen, ermöglicht ODF eine konsistente Datenmanagementerfahrung über verschiedene Cloud-Umgebungen hinweg und erleichtert die Mobilität von Anwendungen und Daten.

- **Automatisierung und Orchestrierung:** Die tiefe Integration mit Kubernetes und OpenShift ermöglicht ODF, das Provisioning, das Skalieren und die Lebenszyklusverwaltung des Speichers automatisch, entsprechend den Anforderungen der Anwendungen, durchzuführen.

- **Hohe Verfügbarkeit und Resilienz:** ODF nutzt Datenreplikation und Snapshotting, um hohe Verfügbarkeit und Datenhaltbarkeit zu gewährleisten, was für die Unternehmensbetriebskontinuität wesentlich ist.

- **Datensicherheit:** Die Lösung integriert fortschrittliche Sicherheitsfunktionen, wie die Verschlüsselung von Daten im Ruhezustand und während der Übertragung, sowie anpassbare Sicherheits- und Compliance-Richtlinien.

#### Vorteile von OpenShift Data Foundation:
- **Betriebliche Flexibilität:** ODF ermöglicht es Unternehmen, ihre Daten effektiv in verteilten Umgebungen zu verwalten und bietet die erforderliche Flexibilität, um auf die sich ändernden Anforderungen moderner Anwendungen zu reagieren.

- **Vereinfachung der Datenverwaltung:** Durch die Automatisierung zahlreicher Datenverwaltungsaufgaben verringert ODF die Komplexität und befreit IT-Ressourcen, um sich auf Initiativen mit höherem Mehrwert zu konzentrieren.

- **Kostenoptimierung:** Die Fähigkeit von ODF, sich dynamisch an Speicherbedürfnisse anzupassen, hilft Kosten zu optimieren, indem Überprovisionierung vermieden und die verfügbaren Ressourcen effektiver genutzt werden.

- **Leistungsverbesserung:** ODF ist darauf ausgelegt, hohe Leistungen für Unternehmensanwendungen zu liefern, mit Optimierungsfähigkeiten für verschiedene Arten von Arbeitslasten.

Red Hat OpenShift Data Foundation ist eine fortschrittliche Datenspeicherlösung, die Effizienz, Resilienz und Sicherheit von Unternehmensanwendungen, die auf OpenShift bereitgestellt werden, stärkt. Indem es persistenten, automatisierten und sicheren Speicher bietet, spielt ODF eine entscheidende Rolle dabei, Unternehmen zu befähigen, das volle Potenzial von Container-Technologien und hybriden Cloud-Umgebungen auszuschöpfen.

## Allgemeine Architektur der Plattform
### Allgemeines
Die Red Hat OpenShift-Plattform von Cloud Temple wurde als regionales Angebot konzipiert und ist nativ über **drei verschiedene Verfügbarkeitszonen** in derselben Cloud Temple-Region bereitgestellt. Diese tri-zonale Architektur erhöht signifikant die Verfügbarkeit und Resilienz der Daten.

Die Plattform besteht aus einem Steuerungs- und Arbeitsknotenplan, die beide von der Cloud Temple-Infrastruktur verwaltet werden. Der Steuerungsplan ist gleichmäßig über die drei Verfügbarkeitszonen verteilt, was eine zentralisierte und sichere Verwaltung gewährleistet. Die Arbeitsknoten hingegen werden durch Rechenblades dargestellt, die so angeordnet sind, dass jede Verfügbarkeitszone eine davon enthält.

Für die Arbeitsknoten sind verschiedene Typen von Rechenblades verfügbar, die eine flexible Anpassung an unterschiedliche betriebliche Anforderungen ermöglichen:

| Redhat Openshift 4 Arbeitsleistungseinheiten mit Data Foundations - On Demand - 1 Monat                                      | Einheit                 | SKU                                   |
| :--------------------------------------------------------------------------------------------------------------------------- | :---------------------- | :------------------------------------ |
| OPENSHIFT - Steuerungsplan - 3 Knoten - Region FR1                                                                           | 1 dedizierter Plan      | csp:fr1:paas:oshift:plan:payg:v1      |
| OPENSHIFT - WORKER NODES - TINY - 3 x (10 Kerne / 20 Threads - 64 GB RAM - 512 GB FLASH 1500 iops)                           | 3 dedizierte Worker     | csp:fr1:paas:oshift:wkr:tiny:payg:v1  |
| OPENSHIFT - WORKER NODES - SMALL - 3 x (20 Kerne / 40 Threads - 128 GB RAM - 512 GB FLASH 1500 iops)                         | 3 dedizierte Worker     | csp:fr1:paas:oshift:wkr:small:payg:v1 |
| OPENSHIFT - WORKER NODES - STANDARD - 3 x (32 Kerne / 64 Threads - 384 GB RAM - 512 GB FLASH 1500 iops)                      | 3 dedizierte Worker     | csp:fr1:paas:oshift:wkr:std:payg:v1   |
| OPENSHIFT - WORKER NODES - ADVANCED - 3 x (48 Kerne / 96 Threads - 768 GB RAM - 512 GB FLASH 1500 iops)                       | 3 dedizierte Worker     | csp:fr1:paas:oshift:wkr:adv:payg:v1   |
| OPENSHIFT - WORKER NODES - PERF - 3 x (56 Kerne / 112 Threads - 1,5 TB RAM - 512 GB FLASH 1500 iops)                          | 3 dedizierte Worker     | csp:fr1:paas:oshift:wkr:perf:payg:v1  |
| OPENSHIFT - WORKER NODES - GPU - 3 x (32 Kerne / 64 Threads - 512 GB RAM - 512 GB FLASH 1500 iops - 2xNVIDIA L40S 48GB)      | 3 dedizierte Worker + GPU | csp:fr1:paas:oshift:wkr:gpu:payg:v1   |

Die Red Hat OpenShift-Produkte von Cloud Temple sind sowohl auf Pay-as-you-Go-Basis als auch als 12-Monats-Reservierung verfügbar.

**Hinweise**:

1. *Die Aufrechterhaltung der Betriebsfähigkeit und der Sicherheit des Steuerungsplans liegt in der Verantwortung von Cloud Temple als Teil des PaaS-Dienstes.*
   
2. *Am 15. Juni 2024 wird Version 1 der Plattform softwareseitig auf 30 Worker-Knoten (unabhängig vom Typ des Workers) und einen globalen persistenten Speicher von 50 TB beschränkt. Wenn diese Grenzen für Ihr Projekt ein Hindernis darstellen, setzen Sie sich bitte mit dem Support in Verbindung.*

3. *Jeder Worker-Knoten wird mit 512 GB Flash-Blockspeicher geliefert, was insgesamt 1,5 TB pro Arbeitsleistungseinheit ergibt (1 Worker pro AZ).*

4. *Das PaaS-Angebot OpenShift beinhaltet nativ den Zugang zu den 3 Verfügbarkeitszonen, ohne dass eine zusätzliche Abonnierung erforderlich ist.*

5. *Zu einem späteren Zeitpunkt kann zusätzlicher Blockspeicher zum OpenShift-Cluster hinzugefügt werden.*
   
6. *Die Knoten werden gleichmäßig über die 3 Verfügbarkeitszonen verteilt (1 Knoten pro Zone). Es ist nicht möglich, ein Cluster unausgewogen zu konfigurieren, indem einem mehr Knoten einer einzelnen Zone zugeordnet werden.*

### RedHat-Angebot, das im Rahmen der OpenShift Cloud Temple-Plattform bereitgestellt wird
Die Plattform ist eine Redhat Openshift 4, basiert auf [RedHat Openshift Platform Plus](https://www.redhat.com/en/technologies/cloud-computing/openshift/platform-plus) und beinhaltet [OpenShift DataFoundation Essential](https://www.redhat.com/en/resources/add-capabilities-enterprise-deployments-datasheet).

![](images/oshift_offert.jpg)

## Eine Redhat Openshift Plattform innerhalb Ihres Tenants bereitstellen
### Zuweisung von Zugriffsrechten
Es ist unerlässlich, dass der Administrator des [tenant](../console/tenants.md) dem Openshift-Administrator das Recht zur Verwaltung der Openshift-Plattform erteilt, damit dieser darauf zugreifen kann:

![](images/oshift_rights.png){:height="70%" width="70%"}

### Zugang zur Openshift-Umgebung innerhalb eines Tenants
Nach der Zuweisung der Rechte erscheint das Modul '__Openshift__' im Menü der Cloud Temple-Konsole:

![](images/oshift_menu_001.png)

Dann sehen Sie die Openshift-Cluster, die in Ihrem Tenant bereitgestellt sind.

Klicken Sie auf den Cluster, den Sie verwalten möchten. Sie gelangen in die Verwaltungsumgebung des Clusters:

![](images/oshift_menu_002.png)

Nach der Authentifizierung können Sie Ihren Cluster verwalten:

![](images/oshift_menu_003.png)

## Backup-Strategie für Ihre PaaS Openshift-Plattform

Die Sicherung und Wiederherstellung der PaaS-Plattform Openshift liegt in der Verantwortung von Cloud Temple für den Bereich **ETCD** als Teil des Plattform-Managements. **Die Sicherung und Wiederherstellung für den Bereich Deployment und Anwendungsdaten obliegt dem Auftraggeber**.

RedHat Openshift Platform Plus beinhaltet die **Openshift Data Protection API (OADP)** und stellt **Velero** standardmäßig zur Verfügung. Hier finden Sie die vollständige Dokumentation zu diesem Thema (auf Englisch): [Backing up and restoring your OpenShift Container Platform cluster](https://docs.redhat.com/fr/documentation/openshift_container_platform/4.8/html/backup_and_restore/index). *(1)*

Cloud Temple bietet seinen Kunden zusätzlich die Option auf das Angebot **Veeam Kasten K10** (Veeam [**Kasten K10**](https://www.veeam.com/fr/kubernetes-native-backup-and-restore.html)), eine Plattform, die auf das Datenmanagement in Kubernetes-Umgebungen spezialisiert ist. Sie ist entwickelt, um den Bedarf an Datenschutz zu decken und bietet robuste Funktionen für Sicherung, Wiederherstellung, Migration und Disaster Recovery. Kasten K10 integriert sich nativ in Kubernetes-Umgebungen, egal ob sie in Cloud-Clustern oder vor Ort verwaltet werden, und kann an verschiedene Nutzungsszenarien angepasst werden, insbesondere an die Migration von Clustern zwischen verschiedenen Kubernetes-Distributionen wie Kubernetes Vanilla, VMware Tanzu, Red Hat Kubernetes Engine und Red Hat OpenShift.

Einer der Hauptanwendungsfälle von Kasten K10 ist **die Migration von Clustern zwischen verschiedenen Kubernetes-Plattformen**. Ob es sich um den Wechsel zu einer robusteren Infrastruktur handelt oder um vorhandene Umgebungen zu konsolidieren, Kasten K10 bietet einfache und effiziente Werkzeuge, um diese Migrationen zu verwalten:

 - **Datenbackup und Schutz**: Bei der Migration eines Kubernetes Vanilla- oder VMware Tanzu-Clusters zu Red Hat Kubernetes Engine oder OpenShift besteht der erste Schritt darin, die Anwendungsdaten und deren Zustände zu sichern. Kasten K10 integriert sich nahtlos mit den Kubernetes-APIs, um Anwendungen, ihre Abhängigkeiten sowie die zugehörigen Datenvolumes zu identifizieren. Dies umfasst die Sicherung von Persistent Volumes (PVs), Datenbanken, Konfigurationen und Secrets. Kasten K10 unterstützt eine Vielzahl von Speicheranbietern (S3, Google Cloud Storage, Azure Blob Storage usw.), was die Erstellung von Schnappschüssen der zu migrierenden Anwendungen ermöglicht. Diese Backups werden dann sicher mit verschlüsselten und granularen Zugriffskontrolloptionen gespeichert, was die Datensicherheit während des gesamten Prozesses gewährleistet.

 - **Portabilität und Migration**: Die Migration zwischen Kubernetes-Distributionen wie Vanilla oder Tanzu und Red Hat-Lösungen wie OpenShift oder Kubernetes Engine kann aufgrund unterschiedlicher Architekturen und Plattform-spezifischer Konfigurationen komplex sein. Kasten K10 erleichtert diesen Prozess durch die Bereitstellung einer Abstraktionsschicht für die Anwendungsportabilität. Während der Migration repliziert Kasten K10 die Konfigurationen und Daten von einem Quellcluster zu einem Zielcluster und berücksichtigt dabei die Besonderheiten jeder Umgebung. Zum Beispiel können Kubernetes-Objekte wie ConfigMaps, Secrets, PVs sowie CRDs (Custom Resource Definitions) unter Berücksichtigung der spezifischen Anforderungen jeder Kubernetes-Distribution migriert werden, sei es ein Red Hat OpenShift oder Kubernetes Engine Cluster. Der Prozess ist automatisiert, was das Risiko manueller Fehler erheblich verringert. Zusätzlich ermöglicht Kasten K10 eine schrittweise oder vollständige Migration, abhängig von den Anforderungen, und bietet Echtzeitüberblick über den Migrationsstatus, was die Verwaltung und Überwachung des Übergangs erleichtert.

 - **Multi-Cloud- und Multi-Distributionskompatibilität**: Kasten K10 ist so konzipiert, dass es in hybriden und Multi-Cloud-Umgebungen funktioniert, was es zu einem idealen Werkzeug für Organisationen macht, die Anwendungen von Tanzu oder Vanilla-Clustern zu Red Hat-Umgebungen in der Cloud (Cloud Temple, Amazon EKS, Azure AKS, Google GKE) oder auf lokalen Infrastrukturen migrieren möchten. Dies gewährleistet maximale Flexibilität und erlaubt den DevOps-Teams, die beste Umgebung entsprechend den Geschäftsanforderungen oder Infrastrukturmodernisierungsstrategien auszuwählen.

 - **Vereinfachte Verwaltung und Automatisierung**: Kasten K10 bietet eine intuitive Benutzeroberfläche, die es Administratoren ermöglicht, Migrations- und Backup-Operationen einfach zu verwalten ohne eine tiefgehende Expertise jeder Kubernetes-Plattform zu benötigen. Die Lösung bietet zusätzlich Automatisierungsfunktionen, die es ermöglichen, wiederkehrende Migrations- und Backup-Politiken festzulegen, die sich in CI/CD-Pipelines für kontinuierliche Operationen integrieren lassen. Nutzer können Migrationen oder Wiederherstellungen nach Wartungsfenstern planen, Validierungstests nach der Migration durchführen und Basculement-Prozesse bei Problemen auf dem Quellcluster automatisieren.
   
 - **Sicherheit und Konformität**: Bei Migrationen zu kritischen Umgebungen wie Red Hat OpenShift oder Kubernetes Engine sind Datensicherheit und Compliance mit Standards (ISO, SOC, GDPR usw.) wesentliche Aspekte. Kasten K10 sichert die Verschlüsselung von Daten während der Übertragung und im Ruhezustand sowie Optionen für die Überprüfung und Nachverfolgung von Backup- und Wiederherstellungsoperationen. Diese Fähigkeiten sind unerlässlich, um die Sicherheit der migrierten Daten zu garantieren, egal ob in Produktions- oder Testumgebungen. Kasten K10 ist eine unverzichtbare Lösung für Unternehmen, die Kubernetes Vanilla- oder VMware Tanzu-Cluster effizient und sicher zu Red Hat Kubernetes Engine oder OpenShift migrieren möchten.

 Die Abrechnung erfolgt nach Anzahl der Worker Nodes.

| Einheiten der Arbeit Redhat Openshift 4 with Data Foundations - Worker Node Backup Solution | Einheit   | SKU                        |
| :----------------------------------------------------------------------------------------- | :--------- | :------------------------- |
| VEEAM - KASTEN K10 - Kubernetes-Datenschutz und Anwendungsmobilität                        | 3 workers | csp:fr1:paas:kasten:3wkr:v1 |
   
**Hinweis**: *Achtung, das für den ordnungsgemäßen Betrieb Ihres Backups erforderliche Plattenspeichervolumen sollte auf der Umgebung vorgesehen werden, die Ihr Backup empfängt, normalerweise S3-Speicher. Es ist nicht in den Openshift- oder Kasten-Arbeitseinheiten enthalten.*

**(1)** _OADP ist im Cluster nicht nativ installiert. Nur Kasten wird für die Verwaltung von Migrationen, Sicherungen und Wiederherstellungen aktiviert_

## Rechte und Berechtigungen
Hier sind die Hauptberechtigungen, die implementiert wurden:

|       Gruppe       |         API           |                                                                                       Berechtigungen für Ressourcen                                                                                       |
|--------------------|------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|        Core        |       ("")/Apps        |ConfigMaps, Endpoints, PersistentVolumeClaims, Pods, ReplicationControllers, Secrets, Services, DaemonSets, Deployments, ReplicaSets, StatefulSets, Erstellen, Abrufen, Auflisten, Beobachten, Aktualisieren, Patchen, Löschen |
|        Core        |          ("")          |                                                                                           Secrets Erstellen                                                                                           |
|config.kio.kasten.io|        Profile         |                                                                          Abrufen, Auflisten, Beobachten, Erstellen, Aktualisieren, Patchen, Löschen                                                                           |
|config.kio.kasten.io|     Richtlinienvorgaben,     |                                                Transformationssets, Blaupausenanbindungen, Sicherheitskontexte für Speicher, Bindungen von Sicherheitskontexten für Speicher Abrufen, Auflisten                                                 |
|config.kio.kasten.io|         Alle         |                                                                                    Ressourcen (*) Abrufen, Auflisten                                                                                    |
|       Batch        |       CronJobs,        |                                                                        Jobs Erstellen, Abrufen, Auflisten, Beobachten, Aktualisieren, Patchen, Löschen                                                                        |
|    Autoscaling     |HorizontalPodAutoscalers|                                                                          Erstellen, Abrufen, Auflisten, Beobachten, Aktualisieren, Patchen, Löschen                                                                           |
|     Networking     |       Ingresses,       |                                                                  Netzwerkrichtlinien Erstellen, Abrufen, Auflisten, Beobachten, Aktualisieren, Patchen, Löschen                                                                   |
|       Policy       |  PodDisruptionBudgets  |                                                                          Erstellen, Abrufen, Auflisten, Beobachten, Aktualisieren, Patchen, Löschen                                                                           |
|       Route        |      (OpenShift)       |                                                                       Routen Erstellen, Abrufen, Auflisten, Beobachten, Aktualisieren, Patchen, Löschen                                                                       |
|       Build        |      (OpenShift)       |                                                          Build-Konfigurationen, Builds, Build-Logs Erstellen, Abrufen, Auflisten, Beobachten, Aktualisieren, Patchen, Löschen                                                           |
|       Image        |      (OpenShift)       |                                                           Bildströme, Bildstrom-Tags Erstellen, Abrufen, Auflisten, Beobachten, Aktualisieren, Patchen, Löschen                                                            |
|        Apps        |      (OpenShift)       |                                                                 Bereitstellungskonfigurationen Erstellen, Abrufen, Auflisten, Beobachten, Aktualisieren, Patchen, Löschen                                                                  |
|      Template      |      (OpenShift)       |                                                            Vorlagen, Vorlageninstanzen Erstellen, Abrufen, Auflisten, Beobachten, Aktualisieren, Patchen, Löschen                                                            |
|   Autorisierung    |         Rollen,         |                                                                    Rollenbindungen Erstellen, Abrufen, Auflisten, Beobachten, Aktualisieren, Patchen, Löschen                                                                    |
|        RBAC        |         Rollen,         |                                                                    Rollenbindungen Erstellen, Abrufen, Auflisten, Beobachten, Aktualisieren, Patchen, Löschen                                                                    |
|      Projekt       |      (OpenShift)       |                                                                                Projekte Abrufen, Löschen, Aktualisieren, Patchen                                                                                 |
|     Operatoren      |     Abonnements,     |                                        Cluster-Dienstversionen, Katalogquellen, Installationspläne, Operatorgruppen Erstellen, Abrufen, Auflisten, Beobachten, Aktualisieren, Patchen, Löschen                                        |
|    Zertifikats-Manager    |     Zertifikate,      |                                                    Zertifikatsanfragen, Aussteller, Cluster-Aussteller Erstellen, Abrufen, Auflisten, Beobachten, Aktualisieren, Patchen, Löschen                                                    |
|      Protokollierung       |      (OpenShift)       |                                                       Cluster-Protokollweiterleiter, Cluster-Protokollierungen Erstellen, Abrufen, Auflisten, Beobachten, Aktualisieren, Patchen, Löschen                                                        |
|      Speicher       |    Volumesnapshots     |                                                                          Abrufen, Auflisten, Beobachten, Erstellen, Aktualisieren, Patchen, Löschen                                                                           |
|        Ceph        |         (Rook)         |                                          Ceph-Cluster, Ceph-Blockpools, Ceph-Dateisysteme, Ceph-Objektspeicher Erstellen, Abrufen, Auflisten, Beobachten, Aktualisieren, Patchen, Löschen                                           |
|       NooBaa       |     Sicherungspeicher,     |                                                           Speicherklassen, NooBaa-Konten Erstellen, Abrufen, Auflisten, Beobachten, Aktualisieren, Patchen, Löschen                                                            |
|    ObjectBucket    |  Ansprüche für ObjectBucket,   |                                                                   ObjectBuckets Erstellen, Abrufen, Auflisten, Beobachten, Aktualisieren, Patchen, Löschen                                                                    |
|        OCS         |      (OpenShift)       |                                                         Speichercluster, Speicherkonsumenten Erstellen, Abrufen, Auflisten, Beobachten, Aktualisieren, Patchen, Löschen                                                          |
|       Local        |        Storage         |                                                        Lokale Volumes, Lokale Volumenentdeckungen Erstellen, Abrufen, Auflisten, Beobachten, Aktualisieren, Patchen, Löschen                                                        |
|        CSI         |         Addons         |                                                           CSIAddons-Knoten, Netzwerkzäune Erstellen, Abrufen, Auflisten, Beobachten, Aktualisieren, Patchen, Löschen                                                            |
|      Metriken       |         Pods,          |                                                                                             Knoten Abrufen                                                                                              |
|      Sicherheit      |Überprüfungen der Pod-Sicherheitsrichtlinie|                                                                                               Erstellen                                                                                               |
|       Benutzerdefiniert       |       Ressourcen        |                                       Verschiedene benutzerdefinierte Ressourcen im Zusammenhang mit Kasten K10, Keycloak usw. Erstellen, Abrufen, Auflisten, Beobachten, Aktualisieren, Patchen, Löschen                                        |

## Aktuelle Grenzen des Redhat Openshift-Angebots in der SecNumCloud-Umgebung
Hier sind einige durch die Qualifikation SecNumCloud bedingte Einschränkungen:

### Dedizierter Kontrollplan
Die Workloads können aufgrund der inhärenten Einschränkungen bei der Ressourcenverwaltung und der Sicherheit der OpenShift-Plattform auf SecNumCloud nicht im Steuerungsebene ausgeführt werden.

### Verbot des Einsatzes von Images mit erhöhten Privilegien (rootless)
Um den Sicherheitsanforderungen des SecNumCloud-Verzeichnisses zu entsprechen, ist es zwingend notwendig, Container ohne Privilegien (rootless) zu verwenden.

Dieser Ansatz verstärkt die allgemeine Sicherheit, indem er jeglichen privilegierten Zugriff auf die Container verhindert. Anwendungen, die Container mit Privilegien benötigen, müssen geändert werden, da ihre Bereitstellung nicht zugelassen wird.

Diese Einschränkung gilt auch für Helm Charts und Operatoren, die nicht-rootlose Bilder verwenden, was ihre Bereitstellung innerhalb der Infrastruktur unmöglich macht.

### Einschränkungen bei den Rechten der ClusterRole
Im Rahmen unseres OpenShift-Angebots implementieren wir ein strenges Zugriffsrechtsmanagement auf Clusterebene, gemäß den Anforderungen von SecNumCloud.

Dieser Ansatz beinhaltet eine Einschränkung der ClusterRoles für unsere Kunden, wodurch bestimmte Aspekte des globalen Cluster-Managements eingeschränkt werden. Obwohl diese Maßnahme anfangs restriktiv erscheinen mag, zielt sie darauf ab, die Sicherheit und Stabilität der Infrastruktur zu stärken.

Wir sind uns bewusst, dass dies technische Herausforderungen, insbesondere bei der Konfiguration fortgeschrittener Einstellungen, und möglicherweise Anpassungen Ihrer Anwendungen oder die Anschaffung zusätzlicher Tools mit sich bringen kann.

Unser Support-Team steht Ihnen zur Verfügung, um Sie zu diesem Thema zu führen und zu beraten.

### Der SCC-Kontext kann in der SecNumCloud-Umgebung nicht geändert werden
Die Security Context Constraints (SCC) unterliegen strengen Einschränkungen und können nicht von den Benutzern geändert werden. Diese Beschränkung hat erhebliche Auswirkungen auf die Bereitstellung und Ausführung von Containern.

In der Praxis bedeutet dies, dass die Laufzeitparameter der Container, wie die Systemzugriffsprivilegien oder die Linux-Fähigkeiten, vorgegeben und nicht anpassbar sind.

Diese Maßnahme, die durch Sicherheitsanforderungen motiviert ist, zielt darauf ab, jeden unberechtigten Zugriff auf kritische Clusterressourcen zu verhindern. Daher können Anwendungen, die spezifische Sicherheitskontexte benötigen, insbesondere solche mit privilegiertem Zugriff, beim Einsatz auf Hindernisse stoßen.

Aus technischer Sicht kann dies eine Überarbeitung der Anwendungsarchitektur und eine Anpassung der Bereitstellungsprozesse erfordern, um den vorgegebenen SCCs zu entsprechen. Operativ kann diese Einschränkung die Flexibilität der Bereitstellungen reduzieren und die Komplexität des Managements bestimmter Anwendungen in der OpenShift-Umgebung erhöhen, insbesondere von solchen, die Helm Charts oder Operatoren verwenden, die nicht den geltenden SCCs entsprechen.

### Einschränkungen von Helm Charts bei der Erstellung von Custom Resource Definitions (CRDs)
Um den Anforderungen der SecNumCloud-Zertifizierung zu entsprechen, gibt es eine wichtige Einschränkung, die die Verwendung von Custom Resource Definitions (CRDs) und benutzerdefinierten Controllern betrifft. Diese Maßnahme, in Zusammenhang mit den Rechten am Cluster, dient dazu, die Bereitstellung von möglicherweise instabilen oder nicht autorisierten benutzerdefinierten Ressourcen zu verhindern.

Diese Begrenzung gilt auch für Operatoren und Helm Charts, mit einer direkten Auswirkung auf die RBAC-Rechte, da CRDs es ermöglichen, die Kubernetes-API zu erweitern. Folglich müssen Operatoren und Helm Charts einen Zertifizierungsprozess durch unsere Dienste durchlaufen, um ihre Konformität und Sicherheit zu gewährleisten.

Benutzerdefinierte CRDs, insbesondere solche, die für spezifische Geschäftsanforderungen entwickelt wurden, können aufgrund der Risiken, die sie für die Stabilität und Sicherheit der Plattform darstellen, in der Infrastruktur abgelehnt werden. Diese Politik, die darauf ausgelegt ist, die Integrität und Zuverlässigkeit des Clusters zu schützen, lässt nur CRDs zu, die von offiziell zertifizierten Operatoren oder Helm Charts stammen.

Unser Support-Team steht zur Verfügung, um Sie zu führen und über die besten Praktiken in diesem Zusammenhang zu beraten.

### Kein Support für dynamische IPs bei Runnern
Die OpenShift SecNumCloud-Plattform verlangt, dass Runner mit festen IP-Adressen konfiguriert werden. Diese Anforderung wird durch die Notwendigkeit begründet, die IP-Adressen zu autorisieren, die unsere Cloud Temple-Konsole verwalten, welche für das Zugangsmanagement-Tool zu den API erforderlich ist. Die autorisierten IP-Adressen werden ebenfalls verwendet, um auf die OpenShift-API sowie auf die OpenShift- und Shiva-Administrationsinterfaces zuzugreifen.

Deshalb wird die Verwendung dynamischer IP-Adressen für diese Komponenten nicht unterstützt, was die Konfiguration fester IPs erfordert, um sowohl die Sicherheit als auch den Zugang zu den APIs zu gewährleisten.

## Lastverteilung 
Das SecNumCloud Openshift-Umfeld bietet Load-Balancing-Optionen auf verschiedenen Ebenen, um einen sicheren und effizienten Verkehr zu gewährleisten. Die API des Load Balancers ist über die Ports 6443 und 443 zugänglich, wobei eine Sicherheitskontrolle durch eine Whitelist gewährleistet wird, die von der Cloud Temple-Konsole verwaltet wird. Diese API verwendet eine öffentliche IP-Adresse, die an unser Backbone angeschlossen ist, ist jedoch standardmäßig nicht zugänglich, was die Sicherheit des Zugriffs weiter erhöht.

Für den privaten Load Balancer verwendet die Umgebung standardmäßig Ingress (nginx) als Lösung, was eine effiziente Verwaltung des internen Verkehrs ermöglicht. Darüber hinaus ist eine TCP-Unterstützung über die IaaS-Infrastruktur von Cloud Temple verfügbar, was zusätzliche Flexibilität für Anwendungen bietet, die ein Lastenausgleich auf dieser Ebene benötigen.

Bezüglich des öffentlichen Load Balancers wird die Unterstützung der Ebene 4 über Ingress gewährleistet, obwohl derzeit einige Einschränkungen mit dem Befehl "expose" bestehen. Dies bedeutet, dass das System in der Lage ist, TCP- und UDP-Verbindungen zuverlässig zu verwalten und gleichzeitig weiterzuentwickeln, um eine größere Kompatibilität und Flexibilität zu bieten.

## Kommende Funktionen
Die kommenden Funktionen in der SecNumCloud-Umgebung beinhalten mehrere Verbesserungen: Ein benutzerdefiniertes Zertifikat wird auf Namespace-Ebene angewandt, und KubeVirt wird für eine verbesserte Verwaltung der virtuellen Maschinen integriert werden.

Hinsichtlich der TCP-Verbindungen wird ein Standardbereich von Ports (von 30000 bis 32767) zur Verfügung gestellt.

Die Cloud Temple-Konsole wird für die Verwaltung der Knoten verwendet, mit geplanten Aktualisierungen für die OpenShift-Schnittstelle. Das Hinzufügen von Knoten wird durch den Befehl 'Order' erleichtert, während ihre Entfernung über ein Ticket bei den professionellen Diensten erfolgen wird.

Die Interkonnektion von privaten PaaS-Strömen zu der IaaS-Infrastruktur von Cloud Temple wird ebenfalls möglich sein, was die Verwaltung der ausgehenden OpenShift-Ströme verbessert.

Die Integration von OpenShift IAM mit der Cloud Temple-Konsole ist geplant, ebenso wie die Implementierung von Hapee (HAProxy) vor dem öffentlichen Load Balancer. Schlussendlich wird die Unterstützung von GPUs in OpenShift verfügbar sein dank des Openshift AI Operator und watsonx.ai, was Anwendungen künstlicher Intelligenz auf der Plattform ermöglicht.