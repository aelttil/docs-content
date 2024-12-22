---
title: Deploying an Open Source pfSense Firewall
---
This guide will assist you in deploying your __open source pfSense firewall__ in the Trust Cloud in just a few minutes.

## Prerequisites
The prerequisites for this guide are as follows:

1. Having subscribed to the Cloud Temple offer: you must have your organization, your tenant, and your access rights,
2. Having permissions on the compute module.

This document describes the steps to follow for deploying a pfSense virtual firewall.

## Deploy an open-source pfSense firewall
[pfSense](https://www.pfsense.org) is an open-source project based on FreeBSD designed to implement a virtual firewall.

A pfSense firewall is administered via a web interface, so you need a second machine with a graphical interface that has an IP address on the same LAN network as the firewall for configuration purposes.

We will need a set of two VMs:

- The first will be the machine on which we are going to deploy the firewall.
- The second will be the machine from which we will administer the firewall.

### Request an Internet Access Delivery
The first step is to retrieve [the internet access information here](https://docs.cloud-temple.com/network/internet/#gestion-de-vos-connectivites-internet). You should have the following information:

- public prefix
- interconnection prefix
- any-cast gateway
- IP range
- local AS
- Cloud Temple AS
- keepalive timers and the hold-time timer
- the addresses of the route servers

### Network Installation and Configuration of Interfaces
You can then deploy your pfSense vm:

1. __Firewall installation__ from the pfSense template in shiva:
    - [(Deploy via console)](../iaas/quickstart_iaas_template.md#deploy-a-virtual-machine-from-a-template)
    - [(Deploy via Terraform)](../iaas/quickstart_iaas.md#deploy-a-virtual-machine-via-terraform).
2. __Configuration of LAN and WAN interfaces__ of the firewall: the WAN interface must be in your internet vLAN, its IP will be taken from the IP range that was communicated to you by the CDS as well as the default GW.
3. __Installation of the second management machine__.
4. __Configuration of the interface__ of the management VM: this machine must be in the same network as the one where the LAN interface of the firewall was configured.

### Firewall Access
Once both VMs are properly installed, the second step is to access the firewall in order to begin its configuration.

- Access the firewall's web interface from the management VM:

![](images/pfsense/pfsense_webui.png)
- Default login:
    - username: *admin*
    - password: *pfsense* (remember to change the default password)
  
![](images/pfsense/pfsense_home_page.png)
### Firewall Configuration
This step involves configuring the BGP neighbors of the FW.

- First, remember to allow BGP traffic over TCP 179 in __'Firewall > Rules'__:

![](images/pfsense/pfsense_bgp_rule.png)

- Go to __'Services > FRR BGP'__ to start setting up your BGP session:

![](images/pfsense/pfsense_frr_package.png)

- Check the first two boxes and enter the number of your local AS and the times as communicated to you by the CDS.

![](images/pfsense/pfsense_general_conf.png)

### BGP Neighbors Configuration
In Neighbors, click on +Add to start creating your BGP neighbors.

- For each neighbor: enter its IP address in __'General Options > Name/address'__

![](images/pfsense/pfsense_neighbor_conf.png)

  - enter the remote AS (corresponding to the AS number of cloud temple) in basic options as follows:

![](images/pfsense/bgp_basic_options.png)

  - and finally in Advanced option, do the following:

![](images/pfsense/ebgp_conf.png)

  - check the box that defines the type of your neighbor. In our case, it is ``a route`` server:

![](images/pfsense/route_server_neighbor.png)

  - at the end, don't forget to save your changes by clicking on __'save'__:
  
![](images/pfsense/neighbors_overview.png) 

### Checking the status of the bgp session with neighbors
In Status, you can see the state of the BGP session that you have just configured

![](images/pfsense/pfsense_bgp_status.png)

Ensure that the __BGP State__ is set to __established__.

### Announcing Your Public Prefix


To announce its public prefix, you can create /32 routes and perform static redistribution:

- in __*System > Routing > Static Routes*__: create your static /32 routes by setting the Gateway to Null0 - 127.0.0.1
- in __*Services > FRR package > BGP > Network Distribution*__: enable ``redistribution`` locally by selecting IPV4 in ``Redistribute`` FRR static routes.