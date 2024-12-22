---
title: Quickstart
---

This quickstart guide introduces you to how to request the creation of an Appliance and how to register a new session and connect to it.

## Prerequisites

1. Have subscribed to the Cloud Temple offer (Bastion Appliance subscription).
2. The equipment to be administered must be accessible from the network where the Bastion Appliance is deployed.
3. Have rights to the Bastion module.
4. In the context of an on-premise Appliance deployment, the corresponding flows must be opened.

## Request the creation of an Appliance
Before you can deploy an Appliance, you must request a subscription to an Appliance via a request to support.
Support is accessible in the Shiva console from the lifebuoy icon on the top right bar of the window.

![](images/shiva_support.png)


## Register a device

To regularly access a device for administration, it is more appropriate to create a session, which will only require your username and password for each connection.

To do this, go to the "Devices" tab in the "Bastion" menu, then click on the "New Device" button.

![](images/creer_session.png)

Then fill in the necessary information to create your device:

    - Device name;
    - Description;
    - Associated appliance;
    - Protocol type (SSH or RDP);
    - Host IP address;
    - Keyboard configuration.

![](images/creer_session2.png)

A notification indicating the creation of the device should appear at the top right of the page. The session is then added to the list of your devices.

To create a new device, you can also go through the "Appliances" tab by clicking on the action bar of the Appliance to which you want to associate a device.
![](images/creer_session3.png)

## Connecting to a Device

Go to the "Devices" tab under the "Bastion" tab. Click on the action bar of the device you want to open, and click on the "Open" button.

![](images/ouvrir_session.png)

Each time you connect to the device, you only need to provide your authentication information.

![](images/ouvrir_session2.png)

After entering your credentials, a notification confirming the start of the connection to your device appears, and the console to your virtual machine opens.