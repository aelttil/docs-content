---
title: Presentation
---

## General Characteristics

The __IaaS (Infrastructure As A Service)__ offering from Cloud Temple was initially designed to provide disaster recovery and business continuity facilities to the world of industry, banking, and insurance.
Its technical characteristics, particularly network aspects, make it a platform conceived for workloads that require maximum availability.

The Cloud Temple platform is fully automated and relies on the following technological partners:

- Computing is based on __CISCO UCS__ technologies,
- Storage is based on __IBM Spectrum Virtualize__ and __IBM FlashSystem__ technologies for block storage, __DELL ECS__ for object storage,
- Networking is based on __JUNIPER__ technologies.

The platform is a __'VersaStack'__ type, a technological alliance between Cisco and IBM, allowing for easy integration of compatibility matrices of major software publishers.

Although it is entirely automated through its APIs and Terraform provider, the Cloud Temple platform nevertheless offers a unique approach:

- Computing blades are dedicated to the [tenant](../console/tenants.md) of the commissioning [organization](../console/organisations.md) and are not shared among clients.
- Storage volumes are dedicated to the [tenant](../console/tenants.md) of the commissioning [organization](../console/organisations.md) and are not shared among clients.
- Software stacks (virtualization, backup, load balancing, firewalling, etc.) are also dedicated and not shared.

The Cloud Temple platform thus allows for __maximum predictability of the infrastructure behavior__ (the commissioner is master of the virtualization rates and the Iops pressure on the storage) as well as a __strong predictability of billing__, with all UOs being on a pay-as-you-go monthly basis.

This infrastructure is SecNumCloud qualified by [ANSSI](https://www.ssi.gouv.fr/), which guarantees industrial-style management with a very high level of automation and security.

The IaaS offering includes the following elements:

    - Computing resources (CPU, RAM) dedicated and on-demand;
    - On-demand storage resources (several storage classes available);
    - Network resources (Internet access, private network);
    - Cross-backups with configurable retention (possible outsourcing as an option);
    - Asynchronous replication at the storage or virtual machine level;

All your _IaaS_ resources can be managed from the [Shiva Console](../console/console.md). 
It is also possible to adopt an "Infrastructure as Code" approach to manage your Cloud resources, thanks to the APIs and the Terraform provider made available to you by Cloud Temple.


## Advantages
| Advantage            | Description                                                                                                                                     |   
|----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| Digital trust        | Data hosting in France and GDPR compliance.                                                                                                     |   
| Security             | Highly secure platform, qualified __SecNumCloud__, __HDS__ (Health Data Hosting), __ISO 27001__, and __ISAE 3402 type II__.                     |  
| High availability    | Platform availability rate of 99.99%, measured monthly, including maintenance windows.                                                          |   
| Resilience           | Implementation of business continuity or disaster recovery plans as needed.                                                                      |
| Automation           | Fully automated platform designed to integrate into a digital transformation program                                                             |
| On demand            | Resources available on-demand                                                                                                                   |


## Purchasing Platforms

Are you a Public Service actor and wish to order Cloud Temple services?

Our offer is available through the [UGAP](https://cloudtour.capgemini.fr/partenaires/cloud-temple) public procurement platform, as well as the [CAIH](https://www.caih-sante.org) market for the medical world.

[Learn more](https://www.cloud-temple.com/cloud-souverain-disponible-via-lugap/)


