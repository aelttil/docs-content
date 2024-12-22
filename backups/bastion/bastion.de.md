---
title: Überblick
---

## Was ist das Bastion Cloud Temple?

Das Bastion Cloud Temple ist ein verwalteter Service, der Ihnen eine sichere RDP- oder SSH-Konnektivität von der Cloud Temple-Konsole zu Ihrer physischen und virtuellen Infrastruktur bietet, egal ob sie sich in der vertrauenswürdigen Cloud, in einer öffentlichen Cloud oder On-Premise befindet. Die Bastionlösung ermöglicht die Verwaltung Ihrer Geräte, ohne sie dem Internet auszusetzen.

![](images/bastion.svg)

## Die Vorteile
| Vorteil               |                                                                                                           Beschreibung                                                                                                           |   
|-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Zentrales Management  |                                                                          Das Bastion Cloud Temple ist direkt über das Shiva-Portal zugänglich.                                                                          |   
| Sicherheit            | Geräte, die über die Bastion verwaltet werden, sind nicht dem Internet ausgesetzt, was sie insbesondere vor der Analyse ihrer Ports durch böswillige Benutzer schützt.                                                  |  
| Infrastructure as Code |                         APIs ermöglichen die vollständige Verwaltung der Bastion Cloud Temple "as Code" (Erstellung von Sitzungen, Verbindung, Änderung und Löschung von Sitzungen).                        |   

## Referenzen (SKU)
| Referenz                          |   Einheit  |      SKU      |  
|-----------------------------------|:----------:|:-------------:|
| ADMINISTRATION - Bastion SSH & RDP | 1 Sitzung  | cmp:bastion:session:std | 

## Konzepte
### Das Bastion-Gerät

Das Bastion-Gerät ist eine virtuelle Maschine, die in der Nähe Ihrer Geräte bereitgestellt wird. Dieses Gerät ermöglicht einen sicheren und direkten Datenfluss von der Shiva-Plattform zu den zu verwaltenden Geräten, die sich im selben virtuellen Netzwerk befinden.

Der Datenfluss ist verschlüsselt und in einem VPN-Tunnel verpackt. Die Lösung erfordert keine Öffnung eines Datenflusses von Internet zu Ihrer Infrastruktur. Es genügt, dass das Gerät Zugang zur öffentlichen IP-Adresse des Shiva Bastion-Moduls auf Port 443 hat.

Ein Gerät kann verwendet werden, um eine schnelle Verbindung zu einem Gerät herzustellen. Bei jeder Verbindung müssen das gewünschte Protokoll, die IP-Adresse der Maschine und Ihre Anmeldeinformationen angegeben werden. Um zu vermeiden, dass diese Informationen bei jeder Verbindung eingegeben werden müssen, können Sitzungen erstellt werden, die mit regelmäßig zu verwaltenden Geräten verknüpft sind.

### Die Sitzungen

Eine Sitzung ist eine Konfiguration einer Verbindung zu einem Gerät über eine Bastion. Sie definiert ein Gerät, das verwaltet werden soll, und das zu verwendende Gerät, um den Datenfluss zu leiten, und ermöglicht so eine schnellere Verbindung zu diesem Gerät.

Diese Lösung eignet sich für regelmäßige Verbindungen zu einem Gerät, das verwaltet werden soll. Wesentliche Informationen werden beibehalten, nur Ihre Anmeldeinformationen werden bei der Verbindung benötigt.
