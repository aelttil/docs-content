---
title: Mandanten
---

## Konzept des Mandanten
Der Tenant ist eine __Zusammenfassung von Ressourcen innerhalb einer Organisation__. Eine [Organisation](organisations.md) hat mindestens einen Tenant (als __Standardtenant__ bezeichnet, der umbenannt werden kann). In der Regel werden mehrere Tenants verwendet, um Verantwortlichkeiten oder technische Bereiche zu segmentieren.

Zum Beispiel:

- Ein Tenant __Produktion__
- Ein Tenant __Vorproduktion__
- Ein Tenant __Abnahme__
- Ein Tenant __Qualifikation__

Es ist jedoch auch möglich, die Dinge nach einer __anwendungsorientierten Ansicht__ oder nach __Kritikalität__ zu organisieren:

- Ein Tenant __Anwendung 1__ oder __Kritikalität 1__
- Ein Tenant __Anwendung 2__ oder __Kritikalität 2__
- ...

Die bestellten technischen Ressourcen werden einem bestimmten Tenant zugewiesen und nicht mit anderen Tenants geteilt. Zum Beispiel ist ein Hypervisor-Cluster und die zugehörigen L2-Netzwerke nur in einem Tenant verfügbar.
Bezüglich der Netzwerke ist es möglich, __'cross tenant'-Netzwerke__ zu beantragen, um die Netzwerkkontinuität zwischen den Tenants sicherzustellen.

Die Berechtigungen der Benutzer müssen in jedem Tenant definiert werden. Jede Organisation muss sorgfältig über die gewünschten Tenants nachdenken. Dieses Thema wird in der Regel im Initialisierungsworkshop behandelt, wenn die Organisation erstellt wird.

Es ist möglich, die Architektur durch Hinzufügen oder Entfernen von Tenants zu entwickeln.

Ein Tenant kann nicht leer sein. Er muss zwingend mit einer Mindestanzahl von Ressourcen initialisiert werden:

- Eine Verfügbarkeitszone (AZ, also ein physisches Rechenzentrum),
- Ein Rechencluster,
- Ein Speicherbereich,
- Ein Netzwerk-VLAN.

## Erstellung eines Tenants

Die Erstellung eines Tenants wird durch einen Serviceantrag realisiert, der angibt:

    Der Name Ihrer Organisation
    Der Name eines Kontakts mit seiner E-Mail und Telefonnummer, um die Konfiguration abzuschließen
    Der Name des Tenants
    Die Verfügbarkeitszone oder, falls nicht vorhanden, der gewünschte physische Standort für den Tenant

*__Notiz__ : Die Erstellung eines Tenants wird direkt für den Auftraggeber Q2 2024 möglich sein.*

| Bestellreferenz                                                | Einheit   | SKU                     |  
|--------------------------------------------------------------|-----------|-------------------------|
| TENANT - *(REGION)* - Aktivierung eines Tenants               | 1 Tenant  | csp:tenant:v1           |
| TENANT - *(REGION)* - Aktivierung einer Verfügbarkeitszone    | 1 Tenant  | csp:(region):iaas:az:v1 |


## Auswahl eines Tenants
Die Auswahl des Tenants erfolgt von der Hauptseite der Shiva-Konsole aus:

![](images/shiva_tenant.png)

*__Hinweis:__ Die Ressourcen eines Tenants sind eigentümlich und können nicht mit anderen Tenants vermischt werden.*

## Zugriffsberechtigung für einen Tenant: Erlaubte IP-Adressen
Der Zugang zur Cloud-Management-Konsole ist streng auf zuvor autorisierte IP-Adressen begrenzt, entsprechend den Anforderungen der SecNumCloud-Qualifikation. Diese Einschränkung gewährleistet ein erhöhtes Sicherheitsniveau, indem der Zugang nur Benutzern aus spezifizierten IP-Bereichen ermöglicht wird, wodurch das Risiko unbefugter Zugriffe minimalisiert und die Cloud-Infrastruktur gemäß den höchsten Sicherheitsstandards geschützt wird.

Es ist jetzt möglich, die Liste der autorisierten öffentlichen IP-Adressen auf dem Mandanten anzuzeigen und eine neue öffentliche IP-Adresse direkt über den Tab "Administration > Zugang" zu dieser Liste hinzuzufügen.

![](images/shiva_ip_access_management_01.png)

Dazu muss der Benutzer das Recht `console_public_access_read` haben, um die autorisierten IPs zu konsultieren, und das Recht `console_public_access_write`, um eine öffentliche IP-Adresse der Liste hinzuzufügen.

Es ist dann möglich, eine neue IP hinzuzufügen:

![](images/shiva_ip_access_management_02.png){:height="50%" width="50%"}

Hinweis: *Das Entfernen einer autorisierten IP erfolgt über eine Supportanfrage in der Cloud Temple-Konsole.*

## Ressourcenverbrauch innerhalb eines Mandanten
Es ist möglich, die verbrauchten Cloud-Ressourcen innerhalb eines Tenants zu visualisieren und somit einen detaillierten Überblick über die Nutzung der verschiedenen bereitgestellten Dienste zu erhalten. Diese Funktionalität ermöglicht es den Nutzern, den Verbrauch ihrer Ressourcen in Echtzeit zu verfolgen, die am meisten beanspruchten Dienste zu identifizieren und deren Nutzung entsprechend den Anforderungen zu optimieren.

Klicken Sie im Menü der Konsole auf „Verbrauchsbericht“ und wählen Sie dann den gewünschten Zeitraum. Sie können so den Verbrauch der Cloud-Ressourcen für den definierten Zeitraum im Detail visualisieren, was es Ihnen ermöglicht, die Nutzung der Dienste zu analysieren und Ihre Verwaltung entsprechend zu optimieren:

![](images/shiva_tenant_ressources_01.png)