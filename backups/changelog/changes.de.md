---
title: Änderungsverfolgung
---

## Version 241206.1.44.0
- **COMPUTE** : Zusatz von Präzisierungen zu den Extrastrukturen in VMware's IaaS-Angebot.

## Version 241126.1.43.0
- Zusätzliche Erläuterungen zur Dokumentation von Vorfällen, um die Statusseite für Vorfälle hervorzuheben.

## Version 241031.1.42.0

- Änderung der Bildschirmfotos aufgrund der Überarbeitung des "Konsole" IHM.
- Änderung der Benennung einiger Registerkarten, Menüs, Aktionsknöpfe aufgrund der Überarbeitung des "Konsole" IHM.

## Version 241001.1.41.0
- Zusatzinformationen zu den Einschränkungen von Openshift in der SecNumCloud-Umgebung.
- Erstinformation über das OpenIaaS-Angebot:
  - **IAM** - Aktualisierung des Namens der Berechtigungen zur Vorbereitung der OpenIaaS-MEP.
  - **NETWORK** - Aktualisierung der Fortinet-Installationsdokumentation zur Unterstützung der neuen Berechtigungen.
  - **KONSOLE / API** - Aktualisierung der Aktivitätensteuerung.
  - **STATUS** : Erläuterungen zur Handhabung von Vorfällen und Benachrichtigungen.
  - **COMPUTE** : Klärung, dass 16 GB RAM-Hypervisor dem Hypervisor zugeordnet sind und nicht vom Kunden genutzt werden können.
  - **OPENSHIFT** : Korrektur von Tippfehlern; Hinzufügen von Erläuterungen.

## Version 240924.1.40.0

- Korrektur eines Fehlers in der Backup-Dokumentation über den Status "held"
- Hinzufügung von Details zu den SLAs für das Backup von virtuellen Maschinen und Disketten.
- Hinzufügung der Möglichkeit, den Zugang zur Shiva-Konsole für eine neue IP zu erlauben
- Änderung der Berechtigungstabelle; Hinzufügung der Besitzerrechte. iam_permission_manager wird veraltet
- Neue Berechtigung namens "bastion_console_access", die von nun an für den Zugriff auf ein Gerät (über SSH/RDP) erforderlich sein wird.
- Visualisierung des Ressourcenverbrauchs innerhalb eines Mieters
- Korrekturen von Tippfehlern im Blockspeicherteil
- Zusätzliche Details zum S3-Teil
- Hinzufügung von Veeam Kasten K10 für die Migration und Sicherung von OpenShift
- Hinzufügung der Liste der verfügbaren OpenShift-Berechtigungen
- Hinzufügung der OpenShift-Berechtigungen und -beschränkungen
- Korrektur des pfSense-Installationsverfahrens
- Hinzufügung des AZ-Befehls im Bestellmenü
- Hinzufügung der Befehls eines Speicherclusters
- Änderung der Netzwerkbefehl-Dokumentation

## Version 240709.1.39.1
- Hinzufügen des Leitfadens zur Installation einer Fortinet-Firewall auf der Cloud Temple-Infrastruktur

## Version 240705.1.38.2
- Hinzufügen des RACI PaaS im vertraglichen Teil

## Version 240701.1.38.1
- Hinzufügen einer FAQ zur PaaS Openshift-Angebot.

## Version 240627.1.37.5
- Abschnitt Paas Openshift: Hinzufügen von Details zur bereitgestellten Version und den aktuellen Softlimits.
- Abschnitt Paas Openshift: Hinzufügen eines Absatzes über die Sicherung der Openshift-Plattform.

## Version 240625.1.37.4
- Speicherabschnitt / Block: Ergänzungen zum Funktionieren von Datastores in VMwares IaaS-Angebot.
- Compute Section / VMware Angebot: Die vAPP-Eigenschaften einer virtuellen Maschine können nun in den erweiterten Einstellungen der virtuellen Maschine geändert werden.
- Backup-Sektion: Änderung des Backup-Verhaltens für suspendierte Backup-Richtlinien ("gehalten"); es ist jetzt nicht mehr möglich, eine Maschine zu starten, die eine suspendierte Backup-Richtlinie hat. Hinzufügen einer Frage zur FAQ zu diesem Punkt.
- Backup-Sektion: Die Standardwiederherstellungsrichtlinie ist nun **TEST**, um die Risiken für die Produktion zu begrenzen;
- Backup-Sektion: Es ist nun möglich, den Namen der wiederhergestellten VM zu ändern.

## Version 240608.1.37.3
- Hinzufügen der Möglichkeit, den Festplattentyp in einer virtuellen Maschine des IAAS-Vmware-Angebots zu ändern.
- Klärung der Begrenzung auf 20 Netzwerke pro Propagierungsaktion.
- Hinweis auf die Speicherdauer von Ereignissen in der SHIVA-Konsole (FAQ/Allgemein): 6 Monate.
  
## Version 240514.1.37.2
- Korrekturen am DPA

## Version 240514.1.37.1

- Hinzufügen eines Absatzes zur Beschreibung der Verfahren für die DPA.
- Hinzufügen von WINSCP als kompatibler S3-Client.

## Version 240514.1.37.0
- Hinzufügung des Dokuments "Personendaten" (DPA)

## Version 240430.1.36.4

- Korrektur einiger Informationen zum VMware-Berechnungsangebot und zur Speicherung.

## Version 240430.1.36.3
- Das Angebot von [Calcul v2](../iaas/compute.md/#offre-de-calcul-v2) ist nicht mehr erhältlich und wird ersetzt durch das Angebot von [Calcul v3](../iaas/compute.md/#offre-de-calcul-v3).
- Hinzufügung der Beschreibung des [Abonnements zu thematischen Benachrichtigungskanälen](../console/accounts.md#abonnement-aux-notifications-thématiques).
- Hinzufügung der [Verwaltung des Netzwerkzugriffs auf Ihre S3-Buckets](../paas/s3.md#limitations-des-accès-à-vos-bucket-s3) und Erweiterung der [FAQ](../paas/s3.md#faq).
- Das IPV4 v1-Angebot ist nicht mehr erhältlich und wird ersetzt durch das IPV4 v2-Angebot.
- Hinzufügung der Beschreibung der [Verwaltung des Internetzugriffs](../network/internet.md#gestion-de-vos-connectivités-internet) über die Cloud Temple Konsole.
- Hinzufügung der Beschreibung der Verwendung von *Provider Independant* Adressen.
- Hinzufügung der Arbeitseinheiten RedHat Openshift.
- Hinzufügung der Arbeitseinheiten für [Hosting des Typs 'Server'](../housing/housing.md).
- Hinzufügung der Nachverfolgung von [geplanten Operationen und Vorfällen](../console/status.md) in der Cloud Temple Konsole.
- Aktualisierung der [Berechtigungen](../console/permissions.md).