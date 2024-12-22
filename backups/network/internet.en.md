---
title: Internet Connectivity
---

Cloud Temple provides its clients with blocks of __public IP addresses__ of at least 8 IPv4, or 64 IPv6, declared to the RIPE, to enable your Internet connectivity.

## Allocation of a Public Internet Addressing Provider Aggregated (PA)
Within this context, you are utilizing public IP addresses allocated to Cloud Temple, which are leased to you for your purposes.

The establishment of internet connectivity and the allocation of associated public IP addresses is carried out by __a service request__ indicating:

    The name of your Organization
    The name of a contact with their email and telephone number to finalize the configuration
    The name of the tenant
    The size of the desired subnet (minimum /29 in IPv4 and /64 in IPv6)
    If not already provided, RIPE information (especially the administrative contact) will be requested by support

The delivery of internet access is done via the BGP4 protocol following the support request, which will provide the following information:

- *public prefix*
- *interconnection prefix*
- *any-cast gateway*
- *IP Subnet*
- *local AS*
- *AS of Cloud Temple*
- *keepalive timers and hold-time timer*
- *the addresses of the route servers associated with your tenant*.

The use of the BGP4 protocol ensures efficient routing of your Internet flows towards the active gateway of your architecture, particularly in scenarios of multi-availability zone deployments, as is the case for clusters of firewalls distributed across two availability zones.

## IPv4 Blocks
### IPv4 Address Offer Version 1
__*This offer is no longer marketed since May 2, 2024*__

IPv4 delivery is made __subject to availability__ for our customers, with a minimum block of 8 IPV4 (/29 or 255.255.255.248).

It is possible to view the address blocks assigned to you in the __*'Public IPs'*__ section of the Network menu in the green banner on the left.

| Reference                             | Unit   | SKU                          |
| ------------------------------------- | ------ | ---------------------------- |
| Network - Dedicated Public IPv4 Range | 8 IPv4 | csp:(region):network:ipv4:v1 |

### IPv4 Address Offer Version 2

The delivery of an IPv4 is subject to __availability__ for our customers, per IP address.

You can view the blocks of addresses assigned to you in the __*'Public IPs'*__ section of the Networks menu in the green panel on the left.


| Reference                     | Unit   | SKU                          |
| ----------------------------- | ------ | ---------------------------- |
| Network - Dedicated Public IPv4 | 1 IPv4 | csp:(region):network:ipv4:v2 |


## IPv6 Blocks

As of May 1, 2024, the offer for IPv6 Public IP Addresses is not yet available for commercialization.

The target for commercialization is planned for the second half of 2024.

| Reference                                  | Unit     | SKU                            |
| ------------------------------------------ | -------- | ------------------------------ |
| Network - Dedicated Public IPv6 Range      | 64 IPv6  | csp:(region):network:ipv6:v1   |

## Provider Independent (PI) Public IP Addresses
If you have your own Provider Independent addressing, you have the possibility of announcing it within the Autonomous System of Cloud Temple. This allows you to continue using your own IP addresses within the Cloud Temple infrastructure and facilitates your migrations.

To do so, please __submit a service request__ indicating:

    The name of your Organization
    The name of a contact with their email and phone number to finalize the configuration
    The name of the tenant
    The block of PI IP addresses you hold and wish to announce
    If not already provided, the associated RIPE information will be requested by support

There is no specific billing for clients using Provider Independent addresses.

## Management of your Internet connectivities
Connectivity management is performed through the **'Network'** > **'Internet'** menu. This menu centralizes the management of IP addresses, offering two distinct categories:

1. **Public IP Addresses**: these are used to expose your services on the Internet, facilitating incoming and outgoing data exchanges.
2. **Interconnection IP Addresses**: these addresses allow your gateways to direct traffic to Cloud Temple's specific network, ensuring a secure and efficient connection.

Public IP addresses enable Internet access, while interconnection IP addresses used with the BGP4 protocol ensure secure connections between networks. These facilitate reliable and secure exchanges between your tenant and the Cloud Temple network. The joint use of these addresses improves traffic management and enhances network security and performance.

Here is the main interface for managing IP addresses:

![](images/shiva_inet_001.png)

The homepage tab corresponds to your internal ASN dedicated to your tenant. It notably indicates important information for configuring your BGP connectivity.

### Public IP Addresses
It is possible to view and comment on the blocks and IP addresses associated with your tenant through the IPAM integrated into the Cloud Temple console:

![](images/shiva_inet_002.png)

The ordering of public IP addresses is done via the **'Order public IPs'** button:

![](images/shiva_inet_003.png){:height="70%" width="70%"}

The reservation and assignment of an IP address are done via the **'Reserve an address'** button:

![](images/shiva_inet_004.png){:height="70%" width="70%"}

The modification or deletion of the reservation through the **'Actions'** buttons:

![](images/shiva_inet_005.png){:height="30%" width="30%"}

Deleting a reservation means that the resource becomes available for other uses but remains allocated and billed to the client.

On certain lines, the **'Action'** button is not available, indicating that the IP addresses are reserved and therefore not available for use.

### Interconnection IP Addresses
In the same manner, you are able to view and comment on the interconnection IP address blocks. You can visualize the interconnection subnets with the Cloud Temple network and their utilization:

![](images/shiva_inet_008.png)

You can easily modify, as with the public addresses, their utilization in the integrated IPAM management:

![](images/shiva_inet_007.png){:height="70%" width="70%"}

### Internet Bandwidth Reservation

Internet bandwidth can be reserved in increments of 100 Mbps. The maximum available capacity for a gateway is 10 Gbps, potentially limited by the technical characteristics of your gateway.

Billing is done at the 95th percentile over the billing period, usually a month. Therefore, you can occasionally enjoy a burst beyond your reserved capacity.

| Reference                                  | Unit    | SKU                                      |
| ------------------------------------------ | ------- | ---------------------------------------- |
| Network - Reserved Internet Bandwidth      | 100 Mbps| csp:(region):network:traffic:internet:v1|

__*Note:*__
*There is no __volumetric billing__ such as __'egress fees'. You only pay for the bandwidth reservation.__*

## Anti-DDoS
A Distributed Denial of Service (DDoS) attack aims to degrade or take offline a service by overloading it with illegitimate traffic.

Cloud Temple's Anti-DDoS protection shields you from malicious actors and __is active at no extra cost against volumetric attacks__: filtering is carried out upstream by our telecom partners.

## Going Further
- [Deploy a Virtual Firewall](quickstart_network.md#deploy-an-open-source-pfsense-firewall-)