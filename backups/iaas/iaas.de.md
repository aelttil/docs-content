---
title: Übersicht
---

## Allgemeine Eigenschaften

Das __IaaS (Infrastructure As A Service)__ Angebot von Cloud Temple wurde ursprünglich konzipiert, um Industrie-, Banken- und Versicherungswelten Erleichterungen bei der Wiederherstellung des Betriebs und der Geschäftskontinuität zu bieten.
Die technischen Merkmale, insbesondere die Netzwerkaspekte, machen es zu einer Plattform, die für Arbeitslasten mit maximaler Verfügbarkeit konzipiert ist.

Die Cloud Temple Plattform ist vollautomatisiert und stützt sich auf die folgenden Technologiepartner:

- Die Berechnung basiert auf __CISCO UCS__ Technologien,
- Die Speicherung basiert auf __IBM Spectrum Virtualize__ und __IBM FlashSystem__ für Blockspeicher, __DELL ECS__ für Objektspeicher,
- Das Netzwerk basiert auf __JUNIPER__ Technologien.

Die Plattform ist vom Typ __'VersaStack'__, einer Technologieallianz zwischen Cisco und IBM, und ermöglicht eine einfache Integration der Kompatibilitätsmatrizen der wichtigsten Softwareanbieter.

Obwohl sie vollständig über ihre APIs und ihren Terraform-Provider automatisiert ist, bietet die Cloud Temple Plattform dennoch einen einzigartigen Ansatz:

- Die Recheneinheiten sind dem [Tenant](../console/tenants.md) der [Organisation](../console/organisations.md) des Auftraggebers gewidmet und werden nicht zwischen Kunden geteilt.
- Die Speichervolumen sind dem [Tenant](../console/tenants.md) der [Organisation](../console/organisations.md) des Auftraggebers gewidmet und werden nicht zwischen Kunden geteilt.
- Die Softwarestapel (Virtualisierung, Backup, Load Balancing, Firewalling, ...) sind ebenfalls dediziert und werden nicht geteilt.

Die Cloud Temple Plattform ermöglicht somit eine __maximale Vorhersehbarkeit des Infrastrukturverhaltens__ (der Auftraggeber beherrscht die Virtualisierungsgrade und den Iops-Druck auf den Speicher) sowie eine __starke Vorhersehbarkeit der Abrechnung__, da alle Serviceeinheiten monatlich gemäß dem Verbrauch bezahlt werden.

Diese Infrastruktur ist von der [ANSSI](https://www.ssi.gouv.fr/) als SecNumCloud zertifiziert, was eine industrielle Steuerung mit sehr hohem Automatisierungs- und Sicherheitsniveau garantiert.

Das IaaS-Angebot umfasst die folgenden Elemente:

    - Berechnungsressourcen (CPU, RAM) dediziert und auf Anfrage;
    - Speicherressourcen auf Anfrage (mehrere Speicherklassen verfügbar);
    - Netzwerkressourcen (Internetzugang, privates Netzwerk);
    - Kreuzsicherungen mit konfigurierbarer Aufbewahrung (optional extern möglich);
    - Asynchrone Replikation auf Speicher- oder virtueller Maschinenebene;

Alle Ihre _IaaS_ Ressourcen können über die [Shiva Konsole](../console/console.md) gesteuert werden. 
Es ist auch möglich, einen "Infrastructure as Code" Ansatz zu verfolgen, um Ihre Cloud-Ressourcen über die APIs und den von Cloud Temple bereitgestellten Terraform-Anbieter zu steuern.


## Vorteile
| Vorteil               | Beschreibung                                                                                                                                     |   
|-----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| Digitales Vertrauen   | Datenhosting in Frankreich und GDPR-Konformität.                                                                                                  |   
| Sicherheit            | Hochsichere Plattform, zertifiziert mit __SecNumCloud__, __HDS__ (Hosting von Gesundheitsdaten), __ISO 27001__ und __ISAE 3402 Typ II__.        |  
| Hohe Verfügbarkeit    | Verfügbarkeitsrate der Plattform von 99,99%, monatlich gemessen, einschließlich Wartungszeiten.                                                   |   
| Resilienz             | Einrichtung von Business Continuity oder Disaster Recovery Plänen gemäß den Anforderungen.                                                        |
| Automatisierung       | Vollautomatisierte Plattform, die für die Integration in ein digitales Transformationsprogramm konzipiert ist                                      |
| On demand             | Ressourcen auf Anfrage verfügbar                                                                                                                  |


## Einkaufsplattformen

Sind Sie ein Akteur des öffentlichen Dienstes und möchten die Dienste von Cloud Temple bestellen?

Unser Angebot ist über die öffentliche Einkaufsplattform [UGAP](https://cloudtour.capgemini.fr/partenaires/cloud-temple) sowie den Markt [CAIH](https://www.caih-sante.org) für den medizinischen Sektor verfügbar.

[Mehr erfahren](https://www.cloud-temple.com/cloud-souverain-disponible-via-lugap/)
