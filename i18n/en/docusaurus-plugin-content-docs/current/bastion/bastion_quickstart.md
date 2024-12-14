---
title: Quickstart
---

This quickstart guide explains how to request the creation of an Appliance, register a new session, and connect to it.

## Prerequisites

1. You must subscribe to the Cloud Temple offer (Appliance Bastion subscription).
2. The devices to be managed must be accessible from the network where the Appliance Bastion is deployed.
3. You must have permissions for the Bastion module.
4. For an on-premise deployment of the Appliance, the corresponding network flows must be opened.

## Requesting the Creation of an Appliance

Before deploying an Appliance, you need to request a subscription to an Appliance through a support request.  
Support is accessible in the Shiva console via the lifebuoy icon in the top-right corner of the window.

![](images/shiva_support.png)

## Registering a Device

To regularly access a device to be managed, it is more convenient to create a session, which will only require your username and password for each connection.

To do so, go to the "Equipements" tab in the "Bastion" menu, then click the "Nouveau équipement" button.

![](images/creer_session.png)

Next, provide the necessary information to create your device:

- Device name;
- Description;
- Associated Appliance;
- Protocol type (SSH or RDP);
- Host IP address;
- Keyboard configuration.

![](images/creer_session2.png)

A notification confirming the creation of the device should appear in the top-right corner of the page. The session will then be added to your list of devices.

You can also create a new device via the "Appliances" tab by clicking the action bar of the Appliance you want to associate with a device.

![](images/creer_session3.png)

## Connecting to a Device

Go to the "Equipements" tab in the "Bastion" menu. Click the action bar of the device you want to open, then click the "Ouvrir" button.

![](images/ouvrir_session.png)

Each time you connect to the device, you will only need to provide your authentication details.

![](images/ouvrir_session2.png)

After entering your credentials, a notification confirming the connection to your device will appear, and the console for your virtual machine will open.