---
title: Tutorials
---

These tutorials will help you deploy and manage a Cloud Temple Bastion from the Shiva portal.

## Prerequisites

1. Have subscribed to the Cloud Temple offer (Bastion Appliance subscription).
2. The equipment to be administered must be accessible from the network where the Bastion Appliance is deployed.
3. Have rights to the Bastion module.
4. In the context of an on-premise Appliance deployment, the corresponding flows must be open.

## Interface

Once connected to the Shiva web portal, go to the "Bastion" tab in the left menu.

![](images/sessions.png)

The "Equipment" tab allows you to view the list of your equipment. A piece of equipment corresponds to a connection configuration via a Bastion Appliance. For each piece of equipment, its name, tags, description, the Appliance associated with it, the type of connection (SSH or RDP), the host's IP, and finally the keyboard configuration are indicated.
You can filter the list of your devices based on the tags assigned to them, and a search engine allows you to search for a session by its name.

![](images/sessions2.png)

The "Appliances" tab gives you a list of your Bastion Appliances. For each Appliance, the name of the Appliance and its description are specified.

A search engine is available to allow you to search for an Appliance by its name.

![](images/appliances.png)

## Deploying an Appliance
Before you can deploy an Appliance, you must request a subscription to an Appliance through a support request.

## Opening a stream to a device
In the "Appliances" tab, click on the action bar of the Appliance you want to open. Then click on the "Open" button.

![](images/ouvrir_appliance.png)

Then provide the necessary information for the connection:

    - Choice of protocol (SSH or RDP);
    - IP address of the host to administer;
- Credentials;
- Keyboard configuration.

Then click on "Connect" to open the Appliance. The console of the virtual machine to be managed will then open.

## Register a device

To regularly access a device to be managed, it is more appropriate to create a device configuration, which will only require your username and password at each connection.

To do this, go to the "Devices" tab in the "Bastion" menu, then click on the "New device" button.

![](images/creer_session.png)

Then fill in the necessary information to create your device:

    - Device name;
    - Description;
    - Associated Appliance;
    - Protocol type (SSH or RDP);
    - Host IP address;
    - Keyboard language.

![](images/creer_session2.png)

A notification indicating the creation of your equipment configuration should appear at the top right of the page. The configuration is then added to your list of equipment.

To create a new connection, you can also go through the "Appliances" tab by clicking on the action bar of the Appliance to which you want to associate an equipment configuration.

![](images/creer_session3.png)

## Connecting to a device

Go to the "Devices" tab of the "Bastion" tab. Click on the action bar of the device you want to open, and click on the "Open" button.

![](images/ouvrir_session.png)

Each time you connect to the device, you only need to provide your authentication information.

![](images/ouvrir_session2.png)

After entering your credentials, a notification confirming the start of the session appears and the console to your virtual machine opens.
## Modify a Device Configuration

Go to the "Devices" tab in the "Bastion" section, click on the action bar of the device you want to modify, and click on the "Modify" button.

![](images/modifier_session.png)

You can then modify the name of the device, its description, the associated Appliance, the protocol (SSH or RDP), the host's IP address, or the keyboard language.

![](images/modifier_session2.png)

## Delete a Device Configuration

Go to the "Devices" tab in the "Bastion" section, click on the action bar of the device you want to delete, and click on the "Delete" button.

![](images/supprimer_session.png)