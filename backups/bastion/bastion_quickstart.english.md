---
title: Quickstart
---

This quickstart guide will introduce you how to request the creation of an Appliance and how to register a new session and connect to it.

## Prerequisites
1. Must have subscribed to the Cloud Temple offer (Bastion Appliance subscription).
2. The equipment to be managed must be accessible from the network where the Bastion Appliance is deployed.
3. Must have rights on the Bastion module.
4. In the context of an on-premise Appliance deployment, the corresponding flows must be opened.

## Request the Creation of an Appliance
Before one can deploy an Appliance, a subscription request for an Appliance must be made through a support request.
Support can be accessed in the Shiva console via the lifebuoy icon on the bar at the top right of the window.

![](images/shiva_support.png)

## Registering a Device
To consistently access a piece of equipment for administration, it is more appropriate to create a session, which will only require your username and password for each connection.

To do this, go to the "Equipment" tab in the "Bastion" menu, and then click on the "New equipment" button.

![](images/creer_session.png)

Next, enter the necessary information for creating your equipment:

    - Equipment name;
    - Description;
    - Associated appliance;
    - Type of protocol (SSH or RDP);
    - Host's IP address;
    - Keyboard configuration.

![](images/creer_session2.png)

A notification indicating the creation of the equipment should appear at the top right of the page. The session is then added to the list of your equipment.

To create a new piece of equipment, you can also go through the "Appliances" tab by clicking on the action bar of the Appliance to which you want to associate a piece of equipment.

![](images/creer_session3.png)

## Connecting to Equipment

Go to the "Equipment" tab in the "Bastion" section. Click on the action bar of the equipment you want to access, and click on the "Open" button.

![](images/ouvrir_session.png)

For each connection to the equipment, you only need to provide your authentication details.

![](images/ouvrir_session2.png)

After entering your credentials, a notification confirming the start of the connection to your equipment will appear, and the console to your virtual machine will open.