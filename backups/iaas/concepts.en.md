---
title: Concepts
---

## Regions

Cloud Temple's infrastructure is designed to ensure the continuity of your applications and platforms. 
Within a region, you benefit from level 2 network continuity.

Thus, it is possible to define a technical architecture in the Paris region, using 3 physical sites to enable the implementation of a high availability platform with quorum.

In January 2024, the IaaS Cloud Temple platform has the following regions:

- FR1 Region (Paris)

### FR1 Region

The FR1 region is based on three physical sites in the Paris region. 

![](images/iaas_az_001.png){:height="50%" width="50%"}

Each site is more than 30km as the crow flies from the others. On average, you have to count 80Km of optical distance between each site. The guaranteed latency between the sites is less than 4 ms.

### Regional Extensions

The opening of new regions is mainly associated with market opportunities. In January 2024, the opening of a region in southern Europe and a region in northern Europe is being studied.

## Availability Zones 

Each physical site within a region has one or more private rooms for our infrastructures. These rooms are for the exclusive use of Cloud Temple.

__Each physical room corresponds to an availability zone (AZ / Availability Zone)__ and is completely autonomous from an electricity, cooling, computing, storage and network point of view.
Choosing an availability zone therefore involves choosing a physical site and a region.

During the initial deployment of your [organization](../console/organisations.md),
you choose the number of availability zones you want (between 1 and 3) for each of your [tenants](../console/tenants.md).

The Shiva console automatically proposes availability zones on different physical sites so as to spread your infrastructure over the maximum number of physical sites.

*__Note: If you want specific settings for a particular context (several AZs on the same physical site), it is necessary to make a support request.__*


| Order Reference                                           | Unit           | SKU                       |  
|----------------------------------------------------------|----------------|--------------------------|
| TENANT - *(REGION)* - Activation of an availability zone | 1 AZ per tenant | csp:*(REGION)*:iaas:az:v1 |


## Virtual Machines
A virtual machine is a virtualized environment that runs on a physical machine. 
It has its own operating system (OS) and benefits from the same characteristics as a physical machine: CPU, RAM memory, hard drive and network card, GPU, Bios, ...
Within the IaaS offer, it is hosted on dedicated computing and storage resources. 
You have the option to create virtual machines "from scratch" or to deploy them from `Templates` available in a public catalogue provided by Cloud Temple. 

![](images/shiva_vm_home.png)

