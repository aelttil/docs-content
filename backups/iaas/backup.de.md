---
title: Sicherung
---

## Sicherungsdienst für virtuelle Maschinen
Cloud Temple bietet eine __native und unabdingbare Cross-Backup-Architektur__ an (sie ist für die französische Qualifizierung secnumcloud verpflichtend).

Die Backups werden in einer Verfügbarkeitszone und in einem anderen physischen Rechenzentrum als dem gespeichert, in dem die virtuelle Maschine gehostet wird.

Dies hilft, sich gegen schwerwiegende Ausfälle im Produktionsrechenzentrum zu schützen und in einem sekundären Rechenzentrum wiederherzustellen (zum Beispiel im Falle eines Brandes).

Diese Lösung umfasst:

- Die Off-Site-Hot-Backup-Sicherung aller Festplatten,
- Die sofortige Präsentation und den Start einer virtuellen Maschine über die Mass-Storage-Infrastruktur und die Hot-Reload auf den Produktions-SANs,
- Die partielle Wiederherstellung von Dateien aus dem Backup,
- Eine nur durch die Zuweisung von Massenspeicherplatz begrenzte Retentionszeit.

Diese Backup-Infrastruktur basiert auf *IBM Spectrum Protect Plus*, einer Agent-less-Architektur-Lösung,
die einfach zu bedienen ist und die Automatisierung von Backup-Prozessen ermöglicht sowie eine Optimierung des Mass-Storage-Raumes.

Die Geschwindigkeiten der Backups und der Wiederherstellungen hängen von der Änderungsrate in den Umgebungen ab.
Die Backup-Politik ist über [die Cloud Temple Konsole](../console/console.md) für jede virtuelle Maschine konfigurierbar.

*__Hinweis:__*

*__Bestimmte virtuelle Maschinen sind nicht kompatibel mit dieser Backup-Technologie__*, die die Snapshot-Mechanismen des Hypervisors nutzt.
Dies sind typischerweise Maschinen, deren Schreiblast auf die Festplatte konstant ist. Es ist nicht möglich für den Hypervisor, den Snapshot abzuschließen,
was das Einfrieren der virtuellen Maschine erfordert, um die Abschlussoperation zu beenden. Dieser Freeze kann mehrere Stunden anhalten und ist nicht abbrechbar.*

*Die Lösung ist dann, die Festplatte, die ständigen Schreibvorgängen unterliegt, auszuschließen und die Daten mit einer anderen Methode zu sichern.* 

| Referenz                                                 | Einheit | SKU                            |
| -------------------------------------------------------  | ------- | ------------------------------ |
| BACKUP - Zugriff auf den IBM Spectrum Protect Plus Dienst | 1 VM    | csp:(region):iaas:backup:vm:v1 |

### Eine Backup-Politik erstellen
Um eine neue Backup-Politik hinzuzufügen, muss eine Anfrage an den Support gestellt werden. Der Support ist über das Bojen-Symbol oben rechts im Fenster erreichbar.

Die Erstellung einer neuen Backup-Politik wird durch __eine Dienstanfrage__ realisiert, die folgendes angibt:

    Den Namen Ihrer Organisation
    Den Namen eines Kontakts mit seiner E-Mail und Telefonnummer, um die Konfiguration abzuschließen
    Den Namen des Tenants
    Den Namen der Backup-Politik
    Die Eigenschaften (x Tage, y Wochen, z Monate, ...)

![](../console/images/shiva_support.png)

### Eine Backup-Politik einer virtuellen Maschine zuweisen
Wenn einer virtuellen Maschine (VM) ein SLA zugewiesen wird, erben automatisch alle mit dieser VM verbundenen Festplatten die gleiche SLA. Anschließend ist es möglich, die Ausführung der Sicherung manuell über den Tab "Backup-Politiken" zu starten. Wenn keine manuelle Ausführung erfolgt, wird die Sicherung automatisch nach dem durch die SLA konfigurierten Zeitplan ausgeführt.

SecNumCloud macht es obligatorisch, einer virtuellen Maschine vor dem Start eine Backup-Politik zuzuweisen. Andernfalls erhalten Sie die folgende Benachrichtigung:

![](images/shiva_vm_politiques_backup_assign_mandatory.png){:height="50%" width="50%"}

Klicken Sie auf den Tab __'Backup-Politiken'__ im Menü Ihrer virtuellen Maschine. Dort können Sie die der Maschine zugewiesenen Backup-Politik(en) einsehen.

Um einer virtuellen Maschine eine neue Backup-Politik zuzuweisen, klicken Sie auf die Schaltfläche __'Eine Politik hinzufügen'__ und wählen Sie die gewünschte Backup-Politik aus.

![](images/shiva_vm_politiques_backup.png)

### Eine Backup-Politik einem virtuellen Laufwerk zuweisen
Es ist ebenfalls möglich, einer spezifischen virtuellen Festplatte einer Maschine eine SLA direkt zuzuweisen. In diesem Fall erbt die virtuelle Maschine nicht diese individuell auf die Festplatte angewendete SLA. Es ist jedoch nicht möglich, die Ausführung der Sicherung auf der Ebene der Festplatten manuell zu starten, weil diese Funktionalität in Spectrum Protect Plus nicht unterstützt wird.

Andererseits ist es möglich, bestimmte Festplatten von einer oder mehreren Sicherungsrichtlinien (SLA) der VM auszuschließen, was das Deselektieren einer oder mehrerer SLA(s) auf einer Festplatte-zu-Festplatte-Basis ermöglicht. Dieser Ansatz bietet die Flexibilität, die Ausführung der Sicherung einer SLA manuell zu starten, ohne alle Festplatten der virtuellen Maschine zu beeinflussen, und ermöglicht somit eine feinere Verwaltung der Sicherungen.

Klicken Sie auf die Aktionsleiste der Festplatte, der Sie eine Sicherungsrichtlinie zuweisen möchten. Klicken Sie dann auf __'Richtlinien'__ und wählen Sie die gewünschte Sicherungsrichtlinie aus.

![](images/shiva_vm_disques_virtuels_politiques.png)

_Notiz_: Die hinzuzufügende Richtlinie muss sich in einer anderen Verfügbarkeitszone als die virtuelle Maschine befinden.

### Eine Sicherungsrichtlinie ausführen

Im Menü __'Sicherungsrichtlinien'__ Ihrer virtuellen Maschine klicken Sie auf die Schaltfläche __'Ausführen'__ in der Spalte __'Aktionen'__ für die Sicherungsrichtlinie, die Sie ausführen möchten.

![](images/shiva_vm_politiques_backup_execute.png)

Um eine Sicherungsrichtlinie auszuführen, können Sie auch von dem Abschnitt __'Sicherungen'__ im Menü Ihrer virtuellen Maschine starten. Klicken Sie auf die Schaltfläche __'Sicherung ausführen'__, und wählen Sie dann die Sicherung, die Sie ausführen möchten, aus dem Dropdown-Menü aus.

![](images/shiva_vm_politiques_backup_execute2.png)

### Eine Sicherungsrichtlinie entfernen
Im Menü __'Backup-Richtlinien'__ Ihrer virtuellen Maschine klicken Sie auf die Schaltfläche __'Entfernen'__ in der Spalte __'Aktionen'__ der Backup-Richtlinie, die Sie entfernen möchten.

![](images/shiva_vm_politiques_backup_retirer.png)

__Achtung, es ist nicht möglich, die letzte SLA auf einer eingeschalteten virtuellen Maschine zu entfernen:__

![](images/shiva_vm_politiques_backup_retirer_impossible.png)

### Löschung einer Backup-Richtlinie: Fall einer angehaltenen Backup-Richtlinie ("held")
Wenn die letzte Ressource von einer SLA-Richtlinie getrennt wird, erkennt das System diese Situation automatisch. Infolgedessen wechseln alle mit dieser SLA-Richtlinie verbundenen Aufträge automatisch in den Status "Gehalten" ("Held"). Es ist wichtig zu beachten, dass zu diesem Zeitpunkt das direkte Löschen der SLA-Richtlinie aufgrund der Existenz abhängiger Aufträge nicht möglich ist. Um die Richtlinie zu löschen, muss eine Reihe von Schritten befolgt werden.

Es muss überprüft werden, dass die betroffenen Aufträge sich tatsächlich im Zustand "Gehalten" befinden. Nach dieser Überprüfung können diese Aufträge gelöscht werden. Erst nach dem Löschen dieser abhängigen Aufträge kann die SLA-Richtlinie endgültig aus dem System entfernt werden.

Ein spezieller Fall verdient besondere Aufmerksamkeit: das Hinzufügen einer neuen Ressource zu einer SLA-Richtlinie, deren abhängige Aufträge nicht gelöscht wurden. In dieser Situation werden die Kennungen der Aufträge beibehalten. Es ist jedoch entscheidend zu beachten, dass die Aufträge im Status "Gehalten" nicht automatisch fortgesetzt werden. Ein manueller Eingriff ist notwendig, um sie zu reaktivieren und ihre Ausführung zu ermöglichen.

Hinweis: Für weitere Informationen zu dieser Situation kontaktieren Sie bitte den Cloud Temple Support.

Die Cloud Temple Konsole verhindert die Zuordnung einer virtuellen Maschine zu einer gehaltenen Richtlinie:

![](images/shiva_backup_held_001.png){:height="50%" width="50%"}

Ebenso ist es nicht möglich, eine virtuelle Maschine zu starten, die mit einer gehaltenen Backup-Richtlinie verbunden ist:

![](images/shiva_backup_held_002.png){:height="50%" width="50%"}


### Ein Backup wiederherstellen

Die Registerkarte __'Backups'__ im Menü Ihrer virtuellen Maschinen ermöglicht Ihnen den Zugriff auf die Liste der Backups derselben. Um ein Backup wiederherzustellen, klicken Sie auf die Schaltfläche __'Wiederherstellen'__ in der Zeile des Backups, das Sie wiederherstellen möchten.

![](images/shiva_vm_backup_restaurer.png)

1. **Produktionsmodus**: Der Produktionsmodus ermöglicht die Wiederherstellung nach einem Vorfall vor Ort von dem primären Speicher oder einer entfernten Wiederherstellungsstätte aus, indem die ursprünglichen Maschinenbilder durch die Wiederherstellungsbilder ersetzt werden. Alle Konfigurationen werden als Teil der Wiederherstellung übertragen, einschließlich der Namen und der Kennungen, und alle mit der virtuellen Maschine verbundenen Datenkopierarbeiten werden fortgesetzt. Im Rahmen einer Wiederherstellung im Produktionsmodus können Sie wählen, den Speicher in der virtuellen Maschine durch eine virtuelle Festplatte aus einem vorherigen virtuellen Maschinen-Backup zu ersetzen.

2. **Testmodus**: Der Testmodus erstellt temporäre virtuelle Maschinen für Entwicklung, Test, Momentaufnahme-Verifizierung und Wiederherstellungsnachprüfung nach einem wiederholbaren Zeitplan, ohne Auswirkungen auf die Produktionsumgebungen. Die Testmaschinen laufen so lange, wie es erforderlich ist, um den Test und die Überprüfung durchzuführen, und werden anschließend bereinigt. Über ein isoliertes Netzwerk können Sie eine sichere Umgebung für das Testen Ihrer Arbeiten etablieren, ohne mit den für die Produktion verwendeten virtuellen Maschinen zu interferieren. Die im Testmodus erstellten virtuellen Maschinen haben eindeutige Namen und Kennungen, um Konflikte in Ihrer Produktionsumgebung zu vermeiden.

3. **Klonmodus**: Der Klonmodus erstellt Kopien der virtuellen Maschinen für Anwendungsfälle, die permanente oder lang laufende Kopien für Datenexploration oder die Duplizierung einer Testumgebung auf einem isolierten Netzwerk erfordern. Die im Klonmodus erstellten virtuellen Maschinen haben eindeutige Namen und Kennungen, um Konflikte in Ihrer Produktionsumgebung zu vermeiden. Im Klonmodus sollten Sie auf den Ressourcenverbrauch achten, da der Klonmodus dauerhafte oder langfristige Maschinen erstellt.

**Die Wiederherstellung erfolgt standardmäßig im "TEST"-Modus, um die Produktion zu schützen**, und Sie können den Namen der wiederhergestellten VM wählen:

![](images/shiva_vm_backup_test.png){:height="80%" width="80%"}

Beachten Sie, dass wenn die Tests zufriedenstellend sind, es möglich ist, eine virtuelle Maschine vom Testmodus in den Produktionsmodus zu überführen:

![](images/shiva_vm_backup_2prod.png){:height="80%" width="80%"}


## Agentenbasierter Backup-Dienst
Für die Sicherung komplexer Umgebungen (sehr große Fileserver, SAP, Datenbanken usw.) kann Cloud Temple innerhalb Ihres Tenants die IBM Storage Protect Lösung bereitstellen.
Basierend auf einer Agentenarchitektur und einer dedizierten Plattform bietet Spectrum Protect fortschrittliche Datensicherungsmechanismen, einschließlich Komprimierung, Quell-Deduplizierung und Verschlüsselung.

Für Hauptanwendungen (wie E-Mail, ERP usw.) sind fortgeschrittene Backup-Agents verfügbar.

Weitere Informationen zu IBM Storage Protect finden Sie hier: https://www.ibm.com//products/storage-protect


| Referenz                                                                                                              | Einheit       | SKU                                      |
| ---------------------------------------------------------------------------------------------------------------------- | ------------- | ---------------------------------------- |
| SICHERUNG - IBM Storage Protect Dienst - 1 virtuelle Appliance                                                        | 1 Appliance | csp:(region):backup:sp:service:access:v1 |
| SICHERUNG - IBM Spectrum Protect - 1 TiB Quelldaten gesichert inklusive Backup-Raum (für eine) Richtlinie 7T - 5W - 6M) | 1 TiB       | csp:(region):backup:sp:1tio:v1           |



## Auslagerung von Backups auf LTO-Band

**Hinweis: Der Dienst wird seit dem 1. Dezember 2023 nicht mehr vermarktet.**

Um Ihre Backup-Daten bestmöglich zu sichern, schlägt Cloud Temple vor, Backups auf LTO-Magnetbänder zu schreiben und zu speichern.
Daten, die auf Band geschrieben werden, sind verschlüsselt und nicht verfälschbar.

Es ist notwendig, die Anzahl der LTO-Laufwerke (LTO8- oder LTO9-Technologie) entsprechend Ihren Anforderungen zu reservieren.

Cloud Temple beauftragt seinen Partner [__Iron Mountain__](https://www.ironmountain.com) mit der Auslagerung von Band-Backups (Transport, Lagerung und Bandmanagement), 
um die Anforderungen an den Datenschutz, die Disaster Recovery und die gesetzliche Archivierung zu erfüllen.

| Referenz                                                              | Einheit       | SKU         |
| --------------------------------------------------------------------- | ------------- | ----------- |
| SICHERUNG - Reservierung eines LTO-Laufwerks                          | 1 Laufwerk    | DEPRECATED  |
| SICHERUNG - LTO-Band für die Auslagerung von Backups                  | 1 LTO-Band    | DEPRECATED  |
| SICHERUNG - Iron Mountain Auslagerungsdienst für LTO-Bänder           | 1 Pauschale   | DEPRECATED  |