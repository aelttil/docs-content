---
title: Quickstart
---

This quickstart guide shows you how to request the creation of an Appliance and how to register a new session and connect to it.


## Prerequisites

1. Have subscribed to the Cloud Temple offer (Appliance Bastion subscription).
2. The devices to be managed must be accessible from the network where the Bastion Appliance is deployed.
3. Have the rights to the Bastion module.
4. In the case of an on-premise Appliance deployment, the corresponding flows must be open.


## Request the creation of an Appliance
Before being able to deploy an Appliance, you need to make a request for subscription to an Appliance via a support request.
The support is accessible in the Shiva console from the buoy icon on the top right bar of the window.

![](images/shiva_support.png)


## Register a session

To regularly access a device to be managed, it is more suitable to create a session, which will only require your username and password for each connection.

To do this, go to the "Sessions" tab in the "Bastion" menu, then click on the "New session" button.

![](images/creer_session.png)


Then fill in the necessary information for the creation of your session:

    - Session name;
    - Description;
    - Associated Appliance;
    - Protocol type (SSH or RDP);
    - Host IP address;
    - Keyboard configuration.

![](images/creer_session2.png)


A notification indicating the creation of the session should appear at the top right of the page. The session is then added to the list of your sessions.

To create a new session, you can also go to the "Appliances" tab by clicking on the action bar of the Appliance to which you want to associate a session.

![](images/creer_session3.png)

## Connect to a session

Go to the "Sessions" tab in the "Bastion" tab. Click on the action bar of the session you want to open, and click on the "Open" button.

![](images/ouvrir_session.png)

Each time you connect to the session, you only need to provide your authentication information.

![](images/ouvrir_session2.png)

After entering your credentials, a notification confirming the start of the session appears and the console to your virtual machine opens.
