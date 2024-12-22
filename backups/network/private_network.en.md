---
title: Private Networks
---

## Cloud Temple Network Architecture
The __*Private Network*__ offer provides private level 2 network connectivity between your services. The exchange capacity of each availability zone is several hundred gigabits, and we regularly add capacity according to our needs. We light our own optical network.

### The VPLS Technology
The global Cloud Temple network utilizes the technology __[VPLS](https://fr.wikipedia.org/wiki/Virtual_Private_LAN_Service)__.
__VPLS__ is a Layer 2 Ethernet-based point-to-multipoint VPN. It enables the connection of geographically
dispersed sites to one another through an MPLS network. For clients, all sites appear to be on the same
Ethernet LAN, even though the traffic is carried by the Cloud Temple network.

__VPLS__, in its implementation and configuration, shares much in common with a Layer 2 VPN. Within VPLS, a packet originating
from a client network is first sent to a customer edge device (CE) (for example, a router or an Ethernet switch).
It is then sent to a provider edge (PE) router within the service provider’s network.
The packet travels through the service provider’s network over an MPLS label-switched path (LSP).
It arrives at the exit PE router, which then forwards the traffic to the CE device at the destination client site.
The notable difference is that, for __VPLS__, packets can traverse the service provider's
network in a point-to-multipoint manner, meaning that a packet from a CE device can be
broadcast to all PE routers participating in a __VPLS__ routing instance.

The __VPLS__ circuit of a client can be __extended across all the availability zones within a region__.

The __VPLS__ protocol is __completely transparent__ to clients who only see the different VLANs across their availability zones.

### The network in the VMware virtualization offering
Virtual networks (VLAN) in the VMware virtualization offering are networks of the __'DVPortgroup'__ type. A __'dvPortGroup'__, or __'Distributed Virtual Port Group'__, is a concept specific to VMware. A dvPortGroup is an entity that groups multiple virtual ports (vPorts) in a distributed virtual network environment to facilitate their management.

Located within a __[tenant](../console/tenants.md)__, they can be extended between availability zones, thereby allowing you to construct "active/active" architectures with quorum.

The maximum usable bandwidth mainly depends on the blade model used (10Gbps converged or 25 Gbps converged) and the capabilities of the virtual machines.

It is possible to achieve a bandwidth of 10Gbps.

The available configurations on the Cloud Temple console in the context of the VMware virtualization offering are as follows:

- __Vlan tagging__
- __Trunk__
- __port mirror__

*__Note__*:

- *The choice of IP addressing within these networks is __free.__*
- *__SRV-IO__ is not available in the network offering associated with VMware virtualization.*
- *__QinQ__ is supported on the Cloud Temple architecture. QinQ, also known as "VLAN stacking" or 802.1ad, is a network protocol that allows the encapsulation of multiple VLAN (Virtual Local Area Network) labels in a single Ethernet frame.*


## Regional Private Networks
Network command within a region is performed directly in the Cloud Temple console.

### Within a tenant
Creating a virtual network is done through the __*Network*__ menu on the green banner to the left of the screen.

![](images/shiva_network_001.jpg)

Then, click on the __*New network*__ button.

You will need to specify the name of your network, which will be displayed. By default, all of your clusters will have access to your new network.
However, in the __*Advanced Options*__ submenu, you can more precisely specify the scope of propagation within the tenant among your different clusters.

![](images/shiva_network_002.jpg){:height="50%" width="50%"} 

The complete range of possible actions on your networks is found in the __*Actions*__ menu for each one:

- Enabling the sharing of a network between tenants within the same organization.
- Disabling the sharing of a network between tenants within the same organization.
- Adding a network share between tenants within the same organization.
- Removing a network share between tenants within the same organization.
- Graphical visualization of the propagation of a network across all your clusters and hypervisors within a tenant.
- Deleting a propagation within a tenant.
- Modifying a propagation within a tenant.
- Deleting a network.

![](images/shiva_network_003.jpg)

__*Note:*__ *It is not possible to choose the 802.1q VLAN ID.*

| Reference                                   | Unit   | SKU                          | 
|---------------------------------------------|--------|------------------------------|
| NETWORK - FR1 Region - Inter AZ private VLAN | 1 vlan | csp:(region):network:vlan:v1 |

#### Visualization of your networks' propagation
You can easily view the propagation of a network to your different clusters within the same tenant through the __*Actions*__ menu. Select the option *"Visualize Propagation"*:

![](images/shiva_network_004.jpg) 

#### Propagation Modification

The modification of a propagation within a tenant is carried out using the *"Propagate"* option:
then select the clusters that should be included in this propagation.

![](images/shiva_network_005.jpg){:height="50%" width="50%"} 

__*Note:*__ *Propagation modification is limited to 20 networks per action.*

#### Network Deletion
The deletion of a network within a tenant is performed by the option "Delete Network":

![](images/shiva_network_006.jpg){:height="50%" width="50%"}

### Network Sharing between Tenants
By default, __networks are only available within a single tenant__. You can choose to __share a network across multiple tenants__ for technical reasons or connectivity purposes.
It is possible to share a network among your __[tenants](../console/tenants.md)__ within the same organization.

To do this, simply enable sharing as shown below.

![](images/shiva_network_vn_share_enabled.png)

Once sharing is activated, you just need to add a share as shown below.

![](images/shiva_network_vn_shared.png){:style="width:200px"}

Then, select the target tenant. Be aware that the list of tenants is dynamic. 
It depends on your organization and your permissions.

![](images/shiva_network_vn_shared_tenant.png)

Once the network is shared, it will be visible in the 'Shared Networks' tab from your second tenant.

![](images/shiva_network_vn_shared_with_me.png) 

## External Private Connectivity

Cloud Temple's network offering allows clients to connect their own IPSEC, MPLS, or Fiber infrastructures to their tenants.

To this end, Cloud Temple offers:

- The ability to host a network device in a common area (not Secnumcloud certified),
- Connectivity ports at 1Gbps or 10Gbps.

The creation of an external connectivity is carried out by a service request indicating:

    The name of your Organization
    The name of a contact with their email and phone number to finalize the configuration
    The name of the tenant
    The availability zone or, failing that, the desired physical site for this connectivity
    The number and for each, the expected type of connectivity port (fiber, copper, 1Gbps, 10Gbps, ...)
    The network of your tenant to host this connectivity
    The number of 'U' of hosting space desired if any

## Dedicated Circuits
Cloud Temple offers the opportunity to benefit from a dedicated fiber connection between two dedicated hosting infrastructures (racks).

This service is typically used when you wish to host two non-cloud infrastructures (for example, two IBM AS/400s), in two separate racks at two distinct physical datacenters.
You may want to directly link these two racks privately, bypassing the Cloud Temple backbone infrastructure and using only the optical transmission backbone.

In this context, we can deliver an optical fiber connectivity between your two racks. Delivery is always through two diversified optical paths.

Here are the different types of delivery options available:

- Ethernet fiber 1Gbps
- Ethernet fiber 10Gbps
- Fiber Channel 8Gbps
- Fiber Channel 16Gbps

The creation of a dedicated connectivity is carried out by a service request indicating:

    The name of your Organization
    The name of a contact with their email and phone number to finalize the configuration
    The name of the tenants
    The identifiers of the two dedicated racks
    The desired bandwidth
    The network of your tenant that will host this connectivity

You will be contacted by support to refine your request.

| Reference                                                                                  | Unit       | SKU                              | Commitment |
|------------------------------------------------------------------------------------------|------------|----------------------------------|------------|
| NETWORK - Dedicated inter AZ 1G ethernet link (two links via two diversified paths)       | 1 package  | csp:(region):network:epl:1g:v1   | 36 months  |
| NETWORK - Dedicated inter AZ 10G ethernet link (two links via two diversified paths)      | 1 package  | csp:(region):network:epl:10g:v1  | 36 months  |
| NETWORK - Dedicated inter AZ 8G fiber-channel link (two links via two diversified paths)  | 1 package  | csp:(region):network:fcpl:8g:v1  | 36 months  |
| NETWORK - Dedicated inter AZ 16G fiber-channel link (two links via two diversified paths) | 1 package  | csp:(region):network:fcpl:16g:v1 | 36 months  |

## Learn more
- [Deploy an Open Source Virtual Firewall](quickstart_network.md#deploy-an-open-source-virtual-firewall-pfsense-)