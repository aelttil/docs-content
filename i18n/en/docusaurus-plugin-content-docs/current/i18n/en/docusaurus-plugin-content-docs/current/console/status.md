---
title: Scheduled Operations and Incident Management
---

Like any Cloud infrastructure platform, the Cloud Temple platform undergoes regular hardware and software maintenance.

## Access to ongoing operations and incidents

The operation tracking icon allows you to view the operations scheduled on the Cloud Temple infrastructure as well as the open incidents on the tenant. This icon is accessible in the icon bar at the top left of the screen and is shaped like a __'Tools'__ icon.

![](images/shiva_intervention_menu01.png)

This icon aims to provide visibility on planned, ongoing, and completed interventions and/or incidents on the tenant.

When interventions and/or incidents are ongoing, a number appears on the icon.
By clicking on quick view, you will find the ongoing interventions. It is also possible to click on __'All interventions'__ or __'All tenant incidents and reports'__ to display more details.

![](images/shiva_intervention_menu03.png)

## Tracking of planned interventions

The Interventions page consists of two tabs. The first tab allows you to view the interventions planned for the next 30 days and the ongoing interventions.

![](images/shiva_intervention_menu04.png)

Completed interventions, on the other hand, are visible in the second 'Completed' tab.

![](images/shiva_intervention_menu05.png)

Access to this information requires the user profile to have the '**intervention_read**' permission.

## Incident Management

Two types of incidents can be distinguished: global incidents, which affect the entire system, and customer-specific incidents, which only impact the resources or services associated with a particular customer.

### Global Incidents

Retrieving information about global incidents does not require any particular permissions. A red banner is displayed upon logging into the console to alert the user of an ongoing global incident being resolved. The user has the option to temporarily hide this banner during their session, but it will reappear with each new login or page refresh, as long as the incident remains unresolved.

![](images/shiva_incident_001.png)

A __'Learn more'__ button redirects to the public incident tracking page, providing access to additional information about the ongoing incident:

![](images/shiva_incident_002.png)
It is possible to obtain global incident reports. Access to these reports requires the specific permission '**incident_management**'. 

Here is an example of the tab displaying these reports:

![](images/shiva_incident_003.png)

### Incidents on a Sponsor Scope

Visibility of incidents specific to a client scope requires the **incident_read** permission. These incidents are represented by a dedicated icon, accompanied by a red badge indicating the number of ongoing incidents. 

The icon is clickable, allowing to list the tickets associated with the incidents. Each ticket includes a link to the incident details, offering the possibility to follow the progress of their resolution:

![](images/shiva_incident_004.png)

To view the details of an incident, it is necessary to be the author of the incident ticket or to have the **support_management** permission.

### Notification Management
In order to promptly inform users in the event of a new incident, an email notification system has been implemented. From their user profile, a tab titled '*My subscriptions*' allows users to subscribe to notifications for both types of incidents. Thus, they will receive an email in a very short time when an incident is reported or resolved.

![](images/shiva_incident_005.png)

The subject of the email will indicate the type of incident and, in the case of an incident related to a scope, the name of the impacted scope. The notification will also contain a link to directly access the details of the incident:

![](images/shiva_incident_006.png)