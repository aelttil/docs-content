---
title: Networks
---

## Private Network Product

The __Cloud Temple__ network offering is described in the [Networks](../network/private_network.md) section.

## Virtual Firewalling Offer

As of January 1, 2024, Cloud Temple offers two firewall technologies in its workload catalog: __Stormshield__ and __Fortinet__.

The provision of a firewall cluster is done by requesting technical support directly in the Cloud Temple console. Clusters are delivered with UTM technology (antivirus, intrusion prevention and web filtering).

The provision of a firewall cluster is made by a service request indicating:

    The name of your Organization
    The name of a contact with its email and phone number to finalize the configuration
    The name of the tenant
    The availability zones for each node
    The IPv4 block assigned to use if the cluster needs to have internet access
    The desired SKU (firewall model) 

The firewall cluster is delivered pre-configured by the Cloud Temple support teams.

### Stormshield Offer

The virtual firewall offer __Stormshield EVA__ is available on the Cloud Temple infrastructure. By default, the offer is composed of two Active / Passive nodes, with the possibility of having 1 node per availability zone.
The __Stormshield EVA__ offer has the seal of approval of the __ANSSI__.

| Reference                                                                                        | Unit     | SKU                          | 
|--------------------------------------------------------------------------------------------------|-----------|------------------------------|
| UTM FIREWALL - Virtual STORMSHIELD EVA1 - 1 Vcpu - 2Go RAM - 50 SSLVPN Max Users - 100 Tunnels   | 1 Cluster | csp:(region):licence:fw:eva1 |
| UTM FIREWALL - Virtual STORMSHIELD EVA2 - 2 Vcpu - 3Go RAM - 512 SSLVPN Max Users - 150 Tunnels  | 1 Cluster | csp:(region):licence:fw:eva2 |
| UTM FIREWALL - Virtual STORMSHIELD EVA3 - 4 Vcpu - 6Go RAM - 512 SSLVPN Max Users - 200 Tunnels  | 1 Cluster | csp:(region):licence:fw:eva3 |
| UTM FIREWALL - Virtual STORMSHIELD EVA4 - 4 Vcpu - 8Go RAM - 1024 SSLVPN Max Users - 250 Tunnels | 1 Cluster | csp:(region):licence:fw:eva4 |

### Fortinet Offer

The virtual firewall offer __Fortigate VM__ is available on the Cloud Temple infrastructure. By default, the offer is composed of two 'Active/Passive' nodes, with the possibility of having 1 node per availability zone.

| Reference                                          | Unit     | SKU                          | 
|----------------------------------------------------|-----------|------------------------------|
| UTM FIREWALL - Virtual Fortigate VM02V - without vdom | 1 Cluster | csp:(region):licence:fw:ftg2 |
| UTM FIREWALL - Virtual Fortigate VM04V - without vdom | 1 Cluster | csp:(region):licence:fw:ftg4 |
| UTM FIREWALL - Virtual Fortigate VM08V - without vdom | 1 Cluster | csp:(region):licence:fw:ftg8 |

### Performance Example

Here we provide an indication of the performance achievable with the VMware virtualization offer, without SRV-IO activation,
using a compute blade of type __'standard:v2'__, equipped with 2 processors at 2.4Ghz of type Intel Silver 4314 or equivalent.

A virtual appliance __Fortigate VM16__, equipped with 128GB of ram and 16 vCPU, can reach a throughput of __9 Gbits__ between 2 availability zones with an MSS of 1350 and 100 simultaneous connections in parallel.

*__Caution__*: 

*The guaranteed latency between availability zones being less than 4 milliseconds, the performance __cannot be achieved with a single TCP session__.*
*The maximum throughput achievable on a TCP connection is governed by the following law:*

__MAX THROUGHPUT = TCP WINDOW SIZE / RTT__, where RTT is the ping response time / 1000.

*Therefore, you must __multiplex your TCP transfers__ or __use a non-connected protocol such as UDP__ to achieve maximum performance.*

## Micro segmentation

As of January 1, 2024, the offer of micro-segmentation of virtual machines is not open to the market.
