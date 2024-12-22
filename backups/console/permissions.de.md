---
title: Benutzerberechtigungen
---

Die Shiva-Konsole ermöglicht eine detaillierte Verwaltung der Benutzerrechte innerhalb einer Organisation, mit einer Unterteilung nach Tenant.
Anfangs ist es das Hauptkonto des Sponsors, das die anfängliche Konfiguration der Konten und der zugehörigen Berechtigungen ermöglicht.
Im weiteren Verlauf erlaubt das Recht __'iam_write'__ einem Konto, die Berechtigungen anderer Benutzer zu verwalten.

## Verfügbare Berechtigungen für die Benutzer Ihrer Organisation

Die folgenden Berechtigungen können für jeden [Benutzer](accounts.md#affectation-des-permissions-à-un-utilisateur) und für jeden [Mandanten](tenants.md#selection-dun-tenant) Ihrer Organisation konfiguriert werden.

- Berechtigungen vom Typ __'read'__ sind mit der Konsultation verbunden, ohne die Möglichkeit der Konfiguration
- Berechtigungen vom Typ __'write'__ sind mit der Änderung der Konfiguration verbunden.
- __Es handelt sich um Berechtigungen, nicht um Rollen.__ In diesem Sinne ist es erforderlich, sowohl die READ- als auch die WRITE-Berechtigung zu haben, um eine Konfiguration zu ändern.

__VERSION: 20241007__

| Berechtigungsname                             | Berechtigungsbeschreibung                                                                                                       |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| activity_read                                 | Konsultation der Logbücher und Aktivitäten                                                                                      |
| activity_write                                | Verwaltung der Logbücher und Aktivitäten                                                                                        |
| backup_iaas_opensource_read                   | Verwaltung von Backup-Ressourcen - OpenIaaS-Angebot - Konsultation                                                              |
| backup_iaas_opensource_write                  | Verwaltung von Backup-Ressourcen - OpenIaaS-Angebot - Änderung                                                                 |
| backup_iaas_spp_read                          | Verwaltung von Backup-Ressourcen - Vmware-Angebot - Konsultation                                                                |
| backup_iaas_spp_write                         | Verwaltung von Backup-Ressourcen - Vmware-Angebot - Änderung                                                                    |
| bastion_read                                  | Konsultation von Bastion-Typ-Ressourcen                                                                                         |
| bastion_write                                 | Verwaltung von Bastion-Typ-Ressourcen (Appliances, Sitzungen,...)                                                               |
| bastion_console_access                        | Zugriffsberechtigung auf die Konsole (ssh/rdp) einer durch eine Bastion-Appliance geschützten Ressource                        |
| compute_iaas_opensource_console_access        | OpenIaaS-Angebot - Öffnen der Konsole einer virtuellen Maschine                                                                 |
| compute_iaas_opensource_infrastructure_read   | OpenIaaS-Angebot - Konsultation von erweiterten Daten der Xen Orchestra-Ressourcen                                              |
| compute_iaas_opensource_infrastructure_write  | OpenIaaS-Angebot - Erweiterte Verwaltung der Xen Orchestra-Ressourcen                                                           |
| compute_iaas_opensource_read                  | OpenIaaS-Angebot - Konsultation von Virtuellen Maschinen-Ressourcen                                                             |
| compute_iaas_opensource_management            | OpenIaaS-Angebot - Verwaltung von Virtuellen Maschinen-Ressourcen                                                               |
| compute_iaas_opensource_virtual_machine_power | OpenIaaS-Angebot - Verwaltung der Stromversorgung einer virtuellen Maschine                                                     |
| compute_iaas_vmware_console_access            | Vmware-Angebot - Öffnen der Konsole einer virtuellen Maschine                                                                   |
| compute_iaas_vmware_infrastructure_read       | Vmware-Angebot - Konsultation von erweiterten Daten der VMware-Ressourcen (Affinitäts-/Anti-Affinitätsregeln, DRS-Konfiguration, etc.) |
| compute_iaas_vmware_infrastructure_write      | Vmware-Angebot - Erweiterte Verwaltung der VMware-Ressourcen                                                                     |
| compute_iaas_vmware_read                      | Vmware-Angebot - Konsultation von Virtuellen Maschinen-Ressourcen                                                               |
| compute_iaas_vmware_management                | Vmware-Angebot - Verwaltung von Virtuellen Maschinen-Ressourcen                                                                 |
| compute_iaas_vmware_virtual_machine_power     | Vmware-Angebot - Verwaltung der Stromversorgung einer virtuellen Maschine                                                       |
| console_public_access_read                    | Konsultation der zur Konsole zugelassenen IPs                                                                                   |
| console_public_access_write                   | Hinzufügen von zur Konsole zugelassenen IPs                                                                                     |
| compute_virtual_machine_power                 | Verwaltung der Stromversorgung einer virtuellen Maschine                                                                        |
| documentation_read                            | Konsultation der Confluence-Dokumentationsressourcen                                                                            |
| housing_read                                  | Konsultation der Colocation-Ressourcen                                                                                          |
| iam_offline_access                            | Erstellung und Löschung von Personal Access Tokens (PAT)                                                                        |
| iam_read                                      | Konsultation der Benutzerrechte                                                                                                 |
| iam_write                                     | Verwaltung der Benutzerrechte                                                                                                   |
| intervention_read                             | Konsultation der geplanten Änderungen und Inbetriebnahmen auf der Plattform                                                     |
| inventory_read                                | Konsultation der Inventar-Ressourcen                                                                                            |
| inventory_write                               | Verwaltung der Inventar-Ressourcen                                                                                              |
| monitoring_read                               | Konsultation des Monitorings                                                                                                    |
| monitoring_write                              | Verwaltung des Monitorings                                                                                                      |
| metric_read                                   | Konsultation von Gesundheitsdaten auf virtuellen Maschinen und Hosts                                                            |
| network_read                                  | Konsultation der Netzwerkressourcen                                                                                             |
| network_write                                 | Verwaltung der Netzwerkressourcen                                                                                               |
| order_read                                    | Konsultation der Infrastrukturbestellungen                                                                                      |
| order_write                                   | Erstellung einer Infrastrukturbestellung                                                                                        |
| object-storage_iam_management                 | Verwaltung der Speicherkonten auf dem S3-Produkt                                                                                |
| object-storage_read                           | Ansicht der Buckets und deren Konfigurationen                                                                                   |
| object-storage_write                          | Bearbeitung der Buckets und deren Konfigurationen                                                                                |
| openshift_management                          | Verbindung zu den Openshift-Plattformen (tenant-scope)                                                                          |
| Owner                                         | Der Benutzer hat Administrationsrechte eines Mandanten                                                                           |
| support_management                            | Konsultation aller Support-Tickets des Mandanten                                                                                |
| support_read                                  | Konsultation eigener Support-Tickets des Mandanten                                                                               |
| support_write                                 | Erstellung eines Support-Tickets für den Mandanten                                                                               |
| tag_read                                      | Konsultation der Tags, ausgenommen RTMS-Tags                                                                                    |
| tag_write                                     | Verwaltung der Tags, ausgenommen RTMS-Tags                                                                                      |
| ticket_comment_read                           | Konsultation der Ticketkommentare                                                                                               |
| ticket_comment_write                          | Verwaltung der Ticketkommentare                                                                                                 |
| ticket_read                                   | Konsultation der Tickets                                                                                                        |
| ticket_write                                  | Verwaltung der Tickets                                                                                                          |

**Anmerkungen**:

- *Es gibt keine Begrenzung für die Anzahl an Owners (Eigentümern), die auf dem Mandanten definiert sein können. Die Verwaltungsoberfläche (GUI) gibt jedoch eine Warnung aus, wenn mehr als 3 Owners vorhanden sind, um die Anzahl der Eigentümer aus Sicherheitsgründen und zur optimalen Zugriffsverwaltung zu begrenzen.*
- *Wenn ein neuer Eigentümer (Owner) hinzugefügt wird, kann die Aktualisierung seiner Berechtigungen bis zu 60 Minuten dauern. Diese Verbreitungszeit ist normal und stellt sicher, dass die Zugriffsrechte korrekt auf alle verbundenen Dienste und Ressourcen angewendet werden.*
- *Um einen Eigentümer (Owner) vom Mandanten zu entfernen, muss der Benutzer eine Anfrage an den Support stellen. Dieses Verfahren garantiert, dass die Änderungen der Zugriffsrechte sicher und im Einklang mit den Best Practices der Zugriffsverwaltung durchgeführt werden.*

## Veraltete Berechtigungen
Die folgenden Berechtigungen sind nicht mehr verfügbar:

| Berechtigungsname                                  | Datum       | Beschreibung der Berechtigung                                                                                           |
| -------------------------------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------- |
| backup_read  (**ABGELAUFEN**)                      | 07.10.2024  | Konsultation von Ressourcentyp Backup                                                                                   |
| backup_write (**ABGELAUFEN**)                      | 07.10.2024  | Ressourcenmanagement vom Typ Backup - Änderung                                                                          |
| compute_console_access (**ABGELAUFEN**)            | 07.10.2024  | Öffnen der Konsole einer virtuellen Maschine                                                                            |
| compute_infrastructure_read (**ABGELAUFEN**)       | 07.10.2024  | Konsultation von erweiterten VMware-Ressourcendaten (Affinitäts-/Anti-Affinitätsregeln, DRS-Konfiguration etc.)         |
| compute_infrastructure_write (**ABGELAUFEN**)      | 07.10.2024  | Erweitertes Ressourcenmanagement bei VMware                                                                             |
| compute_read (**ABGELAUFEN**)                      | 07.10.2024  | Konsultation von Ressourcen des Typs Virtuelle Maschinen                                                                |
| compute_management (**ABGELAUFEN**)                | 07.10.2024  | Ressourcenmanagement des Typs Virtuelle Maschinen                                                                       |
| compute_virtual_machine_power (**ABGELAUFEN**)     | 07.10.2024  | Verwaltung der Stromversorgung einer virtuellen Maschine                                                                |
| iam_manage_permissions (**ABGELAUFEN**)            | 07.10.2024  | Verwaltung neuer Rechte für sich selbst                                                                                 |

