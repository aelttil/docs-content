---
title: Konzepte
---

## Regionen

Die Cloud Temple Infrastruktur ist darauf ausgelegt, den kontinuierlichen Betrieb Ihrer Anwendungen und Plattformen zu ermöglichen. Innerhalb einer Region profitieren Sie von einer Netzwerkkontinuität auf Level 2.

Somit ist es möglich, eine technische Architektur in der Region Paris zu definieren, die drei physische Standorte nutzt, um die Einrichtung einer hochverfügbaren Plattform mit Quorum zu ermöglichen.

Im Januar 2024 hat die IaaS Cloud Temple Plattform folgende Regionen:

- Region FR1 (Paris)

### Region FR1

Die Region FR1 basiert auf drei physischen Standorten in der Region Paris.

![](images/iaas_az_001.png){:height="50%" width="50%"}

Jeder Standort ist mehr als 30km Luftlinie von den anderen entfernt. Im Durchschnitt beträgt die optische Entfernung zwischen jedem Standort 80Km. Die garantierte Latenz zwischen den Standorten beträgt weniger als 4 ms.

### Regionale Erweiterungen

Die Eröffnung neuer Regionen ist hauptsächlich mit Marktchancen verbunden. Im Januar 2024 werden die Eröffnungen einer Region in Südeuropa und einer Region in Nordeuropa untersucht.

## Verfügbarkeitszonen 

Jeder physische Standort innerhalb einer Region verfügt über einen oder mehrere private Räume für unsere Infrastrukturen. Diese Räume sind ausschließlich für den Gebrauch von Cloud Temple.

__Jeder physische Raum entspricht einer Verfügbarkeitszone (AZ / Availability Zone)__ und ist hinsichtlich Strom, Kühlung, Berechnung, Speicherung und Netzwerk völlig autonom.
Die Wahl einer Verfügbarkeitszone impliziert daher die Wahl eines physischen Standorts und einer Region.

Bei der anfänglichen Bereitstellung Ihrer [Organisation](../console/organisations.md),
wählen Sie die Anzahl der Verfügbarkeitszonen, die Sie wünschen (zwischen 1 und 3) für jeden Ihrer [Mieter](../console/tenants.md).

Die Shiva-Konsole schlägt Ihnen automatisch Verfügbarkeitszonen auf verschiedenen physischen Standorten vor, um Ihre Infrastruktur auf möglichst vielen physischen Standorten zu verteilen.

*__Anmerkung: Wenn Sie eine spezielle Konfiguration für einen bestimmten Kontext wünschen (mehrere AZs an demselben physischen Standort), müssen Sie einen Supportantrag stellen.__*


| Bestellreferenz                                              | Einheit         | SKU                        |  
|--------------------------------------------------------------|-----------------|---------------------------|
| MIETER - *(REGION)* - Aktivierung einer Verfügbarkeitszone   | 1 AZ pro Mieter | csp:*(REGION)*:iaas:az:v1 |


## Virtuelle Maschinen
Eine virtuelle Maschine ist eine virtualisierte Umgebung, die auf einer physischen Maschine läuft. 
Sie hat ihr eigenes Betriebssystem (OS) und besitzt die gleichen Eigenschaften wie eine physische Maschine: CPU, RAM-Speicher, Festplatte und Netzwerkkarte, GPU, BIOS, ...
Im Rahmen des IaaS-Angebots wird sie auf dedizierten Rechen- und Speicherressourcen gehostet. 
Sie haben die Möglichkeit, "from scratch" virtuelle Maschinen zu erstellen oder sie aus `Templates`, die in einem von Cloud Temple bereitgestellten öffentlichen Katalog verfügbar sind, zu deployen. 

![](images/shiva_vm_home.png)
