---
title: IaaS Responsibility Matrix
---

Here is the **RACI** model defining the distribution of responsibilities between the client and Cloud Temple for the use of Cloud Temple's IaaS infrastructures.

## Definition of different roles

We remind here the different roles of the RACI:

| Role         | Description                                                                           |
|--------------|---------------------------------------------------------------------------------------|
| (R) Performs  | __P__erforms the process                                                              |
| (A) Approves | __A__pproves the execution of the process                                              |
| (C) Consulted | __C__onsulted during the process                                                     |
| (I) Informed  | __I__nformed of the results of the process (via tools, the portal, or messaging) |

## Define your need

| Activity                                                                                     | Client Role | Cloud Temple Role |
|----------------------------------------------------------------------------------------------|-------------|-------------------|
| Define the overall architecture of your Cloud Temple platform                                | __AC__      | __CI__            |
| Define the number of tenants and the number of availability zones for each tenant            | __AC__      | __CI__            |
| Define your overall business recovery or continuity strategy                                 | __AC__      | __CI__            |
| Properly size your Cloud Temple platform (compute, storage, network, backup, etc.)           | __AC__      | __CI__            |
| Subscribe to services with the necessary information                                         | __AC__      | __I__             |

## Initial implementation of your Cloud Temple tenants
| Activity                                                                                                    | Client Role | Cloud Temple Role |
|-------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure the implementation of **physical datacenters**                                                       |             | __RA__            | 
| Ensure the implementation of **compute** infrastructures                                                    | __I__       | __RA__            | 
| Ensure the implementation of **storage** infrastructures                                                    | __I__       | __RA__            | 
| Ensure the implementation of connectivity to the **backbone network(1)**                                    | __I__       | __RA__            |
| Acquire and maintain essential software licenses for the operation of the Cloud Temple platform |             | __RA__            | 
| Implement the basic configuration of your Cloud Temple tenants                                             | __CI__      | __RA__            | 
| Implement the initial configuration for the backup service                                          | __CI__      | __RA__            |
| *If subscribed:* implement the initial network configuration for Internet and Firewall services  | __CI__      | __RA__            |
| Provide the necessary assistance for getting started with your Cloud Temple environments                         | __I__       | __RA__            | 
| Perform final configuration adjustments of the service after its delivery                              | __RA__      | __C__             |
| Set up an external authentication repository for the Cloud Temple console                                    | __RA__      | __C__             | 
| Create the users for each tenant in the Cloud Temple console and assign rights                               | __RA__      |                   | 
| Validate the compliance of the delivered platform with the SecNumCloud repository                            | __I__       | __RA__            |
| Validate the compliance of the delivered platform with the required specifications                           | __RA__      | __CI__            |

*(1) The backbone network constitutes the central infrastructure of Cloud Temple, providing a backbone on which 
specific client networks rest, which are integrated and supported by this main infrastructure.*

## Integrating your information system into your Cloud Temple environments
| Activity                                                                                                                  | Client Role | Cloud Temple Role |
|---------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Create, install, update your virtual machines                                                                             | __CR__      |                   | 
| Install and configure software and middleware on your virtual machines                                                    | __CR__      |                   | 
| Purchase and hold licenses and usage rights <br/>for the operating systems of your virtual machines                       | __CR__      |                   | 
| Configure the network for each of your virtual machines                                                                   | __CR__      |                   |
| Ensure each virtual machine is associated with a consistent backup plan                                                      | __RA__      | __C__             | 
| Ensure each virtual machine is associated with a consistent <br/>disaster recovery or business continuity plan              | __RA__      | __C__             | 
| Implement an antivirus protection strategy on your virtual machines                                                         | __RA__      |                   | 
| Establish a metrology and monitoring solution on your virtual machines                                                      | __RA__      |                   | 
| Define the TAG policy of your virtual machines                                                                              | __RA__      |                   | 

## Recurring Operations

### Access and Identity Management
| Activity                                                                                                                            | Client Role | Cloud Temple Role |
|-------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure the accessibility of the Cloud Temple Console service and its associated API                                                 |             | __RA__            |
| Ensure the accessibility of the information system deployed on your virtual machines                                                | __RA__      |                   |
| Manage the physical and logical authorizations of the Cloud Temple teams to the SecNumCloud infrastructures.                        |             | __RA__            |
| Administer access and associated security policy related to the Cloud Temple console interface and its API                | __Client Role__      |                   |
| Administer access and associated security policy for the information system<br/> hosted within your Cloud Temple tenants | __Client Role__      |                   |

### operational and security maintenance

The activities aimed at maintaining operational and secure conditions for the infrastructures and services 
offered by Cloud Temple, as part of its IaaS offering, are carried out with the aim of compliance with the SecNumCloud qualification.

| Activity                                                                                                          | Client Role | Cloud Temple Role |
|-------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure the operational maintenance of **physical datacenter** infrastructures                     | __I__       | __RA__            | 
| Ensure the security maintenance of **physical datacenter** infrastructures                        | __I__       | __RA__            | 
| Ensure the operational maintenance of **computing** infrastructures                                    | __I__       | __RA__            | 
| Ensure the security maintenance of **computing** infrastructures (2)                                   | __RA__      | __CI__            | 
| Ensure the operational maintenance of **storage** infrastructures                                  | __I__       | __RA__            | 
| Ensure the security maintenance of **storage** infrastructures                                     | __I__       | __RA__            |
| Ensure the operational maintenance of **backbone network** infrastructures                                         | __I__       | __RA__            | 
| Ensure the security maintenance of **backbone network** infrastructures                                            | __I__       | __RA__            |
| Ensure the operational maintenance of virtual machines deployed in client tenants **(3)**                          | __RA__      |                   |
| Ensure the security maintenance of virtual machines deployed in client tenants **(3)**                             | __RA__      |                   |
| Ensure the operational maintenance of middlewares deployed in client tenants                                       | __RA__      |                   |
| Ensure the security maintenance of middlewares deployed in client tenants                                          | __RA__      |                   |
*(2) Cloud Temple regularly provides the latest versions of the operating system for your hypervisors. However, since Cloud Temple is not informed about the specifics of your production environments and the requirements related to your workloads, __the decision to update the operating system of your hypervisors, thus causing a reboot, is up to you__. This operation can be performed through the Cloud Temple console or via the API. Professional services are available if you wish for Cloud Temple to handle certain operations.*

*(3) Cloud Temple offers license packs for firewalls (Fortinet, Stormshield) and load balancers (HAProxy), and works in collaboration with your teams for the initial configuration during the implementation phase. However, the responsibility for maintaining operational and secure conditions rests with you during the exploitation phase.
current. Professional services are available if you wish for Cloud Temple to handle certain operations.*

### Management of changes, incidents, problems, and capacities

| Activity                                                                                                              | Client Role | Cloud Temple Role |
|-----------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Manage incidents on **physical datacenter** infrastructures                                                           | __I__       | __RA__            |
| Manage problems on **physical datacenter** infrastructures                                                            |             | __RA__            |
| Manage capacities on **physical datacenter** infrastructures                                                          |             | __RA__            |
| Manage incidents on **computing** infrastructures                                                                     | __I__       | __RA__            |
| Manage problems on **computing** infrastructures                                                                      |             | __RA__            |
| Manage capacities on **computing** infrastructures                                                                    | __RA__      | __CI__            |
| Manage incidents on **storage** infrastructures                                                                       | __I__       | __RA__            |
| Manage problems on **storage** infrastructures                                                                        |             | __RA__            |
| Manage capacities on **storage** infrastructures                                                                      | __RA__      | __CI__            |
| Manage incidents on **backbone network** infrastructures                                                       | __I__       | __RA__            |
| Handle problems on **backbone network** infrastructures                                                       |             | __RA__            |
| Manage capacities on **backbone network** infrastructures                                                       |             | __RA__            |
| Implement a new virtual machine or create a new application environment within a client tenant | __RA__      |                   |
| Modify the configuration of deployed virtual machines                                                           | __RA__      |                   |
| Delete a deployed virtual machine                                                                              | __RA__      |                   |
| Making the decision to add, modify, or remove resources on the Cloud Temple platform                                     | __RA__      | __CI__            |
| Executing the decision to modify resources on the Cloud Temple platform                                                  | __I__       | __RA__            |
| Applying tags to virtual machines in accordance with the defined policy                                                  | __RA__      |                   |

### Performance Management

| Activity                                                                                                                                             | Client Role | Cloud Temple Role |
|------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure the monitoring of the proper functioning and reliability of all equipment involved in the provision of the qualified SecNumCloud service | __I__       | __RA__            |
| Ensure the tracking of the performance of physical computing, storage, and network resources made available to your tenants __(4)__                  | __RI__      | __A__             |
| Supervise the performance of virtual machines supporting your environments                                                                      | __RA__      | __I__             |

*(4) The Cloud Temple platform adopts a philosophy centered on __the provision of dedicated infrastructures__ for __computing__ needs (with physical blades), __storage__ (via dedicated LUNs on SANs) 
and __network__ (including firewalls and load balancers). These dedicated resources are made available to the client, whose usage
and the resulting load directly depend on how it is used. It is therefore the client's responsibility to implement and manage the necessary supervision 
and metrology systems to ensure the optimal operation of their information system.*

### Management of backup and business recovery on integrated backup

| Activity                                                                                                                                  | Client Role | Cloud Temple Role |
|-------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure operational maintenance on the **backup** infrastructures integrated into the Cloud Temple platform **(5)** |             | __RA__            |
| Ensure the security maintenance of **backup** infrastructures integrated into the Temple Cloud platform | __I__ | __RA__ |
| Manage incidents on the **backup** infrastructures integrated into the Temple Cloud platform | __I__ | __RA__ |
| Manage problems on the **backup** infrastructures integrated into the Temple Cloud platform | | __RA__ |
| Manage capacities on the **backup** infrastructures integrated into the Temple Cloud platform | __AI__ | __RC__ |
| Ensure operational maintenance on the chosen backup solution within its tenants by the client **(6)** | __RA__ | |
| Ensure the security maintenance of the backup solution chosen within its tenants by the client                                             | __RA__      |                   |
| Manage incidents on the backup solution chosen within its tenants by the client                                                            | __RA__      |                   |
| Manage problems on the backup solution chosen within its tenants by the client                                                             | __RA__      |                   |
| Manage capacities on the backup solution chosen within its tenants by the client                                                           | __RA__      | __CI__            |
| Manage the lifecycle of backup policies                                                                                                    | __RA__      |                   |
| Ensure that backup policies are consistent with the data lifecycle                                                                 | __RA__      |                   |
| Ensure that business continuity or recovery plans are consistent with the data lifecycle                                            | __RA__      |                   |
| Perform periodic tests to evaluate the effectiveness of the backup strategy                                                          | __RA__      |                   |
| Perform periodic tests to evaluate the effectiveness of the recovery or business continuity strategy                                 | __RA__      | __CI__            |

*(5) As of January 1, 2024, the backup solution integrated into the Cloud Temple platform is IBM Spectrum Protect Plus. 
This solution is fully automated and can be managed via the Cloud Temple console or the Cloud Temple API.*
### Backup and Disaster Recovery Management for Third-Party Platforms within a Client Tenant

| Activity                                                                                                                                  | Client Role | Cloud Temple Role |
|-------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure operational continuity on the backup solution chosen within its tenants by the client **(6)**                                      | __AR__      |                   |
| Ensure security condition maintenance on the backup solution chosen within its tenants by the client                                      | __AR__      |                   |
| Manage incidents on the backup solution chosen within its tenants by the client                                                           | __AR__      |                   |
| Manage issues on the backup solution chosen within its tenants by the client                                                             | __RA__      |                   |
| Manage capacities on the backup solution chosen within its tenants by the client                                                         | __RA__      | __CI__            |
| Manage the lifecycle of backup policies                                                                                                  | __RA__      |                   |
| Ensure that backup policies are consistent with the data lifecycle                                                                       | __RA__      |                   |
| Ensure that business continuity or recovery plans are consistent with the data lifecycle                                                 | __RA__      |                   |
| Conduct periodic tests to assess the effectiveness of the backup strategy                                                   | __Client Role__      |                   |
| Conduct periodic tests to assess the effectiveness of the<br/> disaster recovery or business continuity strategy          | __Client Role__      | __Cloud Temple Role__            |

*(6) This concerns any additional backup solution implemented in the client's environments and managed by them. 
Cloud Temple offers professional services for those who wish to delegate certain operations to Cloud Temple.* 

### Documentation and Contract Management

| Activity                                                                                                                                                        | Client Role | Cloud Temple Role |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure commercial and contractual management of the client, including the preparation of quotes, processing of orders, and management of invoicing               | __I__       | __RA__            |
| Ensure contractual follow-up of the service, including validation of quotes, tracking of deliveries, and monitoring of invoicing                                 | __RA__      | __I__             |
| Ensure the maintenance and availability of the inventory of resources provided by Cloud Temple related to the SecNumCloud offer                                  | __I__       | __RA__            |
| Ensure the maintenance and availability of technical documentation related to the SecNumCloud offer                                                              | __I__       | __RA__            |
| Monitor the lifecycle of virtual machines deployed in your Cloud Temple environments<br/> via your CMDB (Configuration Management Database) | __RA__      |                   | 
| Keep the access policy to the Cloud Temple console interface or the Cloud Temple API up to date                                                          | __RA__      |                   |

### Log Management

| Activity                                                                                                                 | Client Role | Cloud Temple Role |
|--------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Preserve and make available the logs of the Cloud Temple IaaS platform **(7)**                                |             | __RA__            |
| Preserve and make available the logs of the information system<br/> hosted within your Cloud Temple tenants | __AR__      |                   |

*(7) As of January 1, 2024, the retention period for platform logs is one year.*

## Client network connectivity (mpls, dedicated fiber, ipsec, ...)

| Activity                                                                                             | Client Role | Cloud Temple Role |
|------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Subscribe to a network operator connectivity to access a physical Cloud Temple datacenter (8) | __AR__      | __CI__            |
| Manage the IP addressing plan                                                                         | __AR__      | __I__             |
| Manage incidents on client operator network links                                          | __RA__      |                   |
| Manage issues on client operator network links                                          | __RA__      | __CI__            |
| Manage capacities on client operator network links                                          | __RA__      | __CI__            |

*(8) Cloud Temple assumes responsibility for the network regarding its backbone infrastructure, its collection points, and 
datacenter interconnection points, thus ensuring connectivity between these points and its backbone network. 
In the physical bay hosting offer, Cloud Temple assumes responsibility from the equipment located at the top of the rack, commonly referred to as "top of rack".*

## Reversibility
| Activity                                                                                                                                                                                       | Client Role | Cloud Temple Role |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Plan the reversibility project and select target infrastructures                                                                                                                               | __AR__      | __I__             |
| Implement transition operations, whether they involve manual extraction, the use of APIs <br/>or any other third-party method compatible with the Cloud Temple platform.                        | __AR__      | __I__             |
| Transfer data while controlling the impact of the migration on the quality of service provided <br/>by the client's information system.                                      | __RA__      |                   | 
| Proceed with the dismantling of Private Cloud configurations and options associated with the client, <br/>following the termination of the contract.                                                  | __I__       | __RA__            |
| Perform secure data erasure on storage media and provide a certificate                                                                                             | __I__       | __RA__            |