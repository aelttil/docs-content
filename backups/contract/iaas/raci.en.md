---
title: IaaS Responsibility Matrix
---

Here is the RACI model defining the distribution of responsibilities between the client and Cloud Temple for the use of Cloud Temple's IaaS infrastructures.

## Definitions of Different Roles
Here we recall the various roles in the RACI:

| Role        | Description                                                                    |
|-------------|--------------------------------------------------------------------------------|
| (R) Perform | __P__erforms the process                                                       |
| (A) Approve | __A__pproves the process completion                                            |
| (C) Consult | __C__onsulted during the process                                              |
| (I) Inform  | __I__nformed of the process outcomes (via tools, portal or messaging system)   |

## Define your requirement

| Activity                                                                                       | Client Role | Cloud Temple Role |
|------------------------------------------------------------------------------------------------|-------------|-------------------|
| Define the overall architecture of your Cloud Temple platform                                  | __RA__      | __CI__            | 
| Determine the number of tenants and the number of availability zones for each tenant          | __RA__      | __CI__            | 
| Define your global strategy for recovery or business continuity                               | __RA__      | __CI__            | 
| Size your Cloud Temple platform correctly (compute, storage, network, backup, etc.)           | __RA__      | __CI__            | 
| Subscribe to services with the necessary information                                          | __RA__      | __I__             | 

## Initial Implementation of Your Cloud Temple Tenants

| Activity                                                                                                    | Client Role | Cloud Temple Role |
|-------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure the implementation of **physical datacenters**                                                       |             | __RA__            | 
| Ensure the implementation of **compute** infrastructures                                                    | __I__       | __RA__            | 
| Ensure the implementation of **storage** infrastructures                                                    | __I__       | __RA__            | 
| Ensure the implementation of connectivity to the **backbone network(1)**                                    | __I__       | __RA__            | 
| Acquire and maintain essential software licenses for the operation of the Cloud Temple platform             |             | __RA__            | 
| Implement the base configuration of your Cloud Temple tenants                                               | __CI__      | __RA__            | 
| Implement the initial configuration for the backup service                                                  | __CI__      | __RA__            |
| *If subscribed to:* implement the initial network configuration for Internet and Firewall services          | __CI__      | __RA__            |
| Provide the necessary assistance for you to get started with your Cloud Temple environments                 | __I__       | __RA__            | 
| Perform final configuration adjustments to the service after delivery                                       | __RA__      | __C__             | 
| Configure an external authentication repository for the Cloud Temple console                                | __RA__      | __C__             | 
| Create users for each tenant in the Cloud Temple console and assign rights                                  | __RA__      |                   | 
| Validate the compliance of the delivered platform with the SecNumCloud reference framework                  | __I__       | __RA__            |
| Validate the compliance of the delivered platform with the required specifications                          | __RA__      | __CI__            |

*(1) The backbone network constitutes the central infrastructure of Cloud Temple, providing a backbone on which specific customer networks are built and supported by this main infrastructure.*

## Integrate your information system into your Cloud Temple environments

| Activity                                                                                                                       | Client Role | Cloud Temple Role |
|--------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Create, install, update your virtual machines                                                                                  | **RA**      |                   | 
| Install and configure software and middleware on your virtual machines                                                         | **RA**      |                   | 
| Purchase and hold licenses and usage rights <br/>for the operating systems of your virtual machines                            | **RA**      |                   | 
| Configure the network for each of your virtual machines                                                                        | **RA**      |                   |
| Ensure that each virtual machine is associated with a consistent backup plan                                                   | **RA**      | **C**             | 
| Ensure that each virtual machine is associated with a <br/>consistent disaster recovery or business continuity plan           | **RA**      | **C**             | 
| Implement an antiviral protection strategy on your virtual machines                                                            | **RA**      |                   | 
| Implement a solution for metrology and monitoring on your virtual machines                                                     | **RA**      |                   | 
| Define the TAG policy for your virtual machines                                                                                | **RA**      |                   | 

## Recurring Operations
### Access and Identity Management
| Activity                                                                                                                          | Client Role | Cloud Temple Role |
|-----------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure the accessibility of the Cloud Temple Console service and its associated API                                               |             | __RA__            |
| Ensure the accessibility of the information system deployed on your virtual machines                                              | __RA__      |                   |
| Manage the physical and logical authorizations of Cloud Temple teams to the SecNumCloud infrastructures.                          |             | __RA__            |
| Administer access and the associated security policy related to the Cloud Temple console interface and its API                    | __RA__      |                   |
| Administer access and the associated security policy to the information system<br/> hosted within your Cloud Temple tenants       | __RA__      |                   |

### maintenance in operational and security condition

Activities aimed at maintaining operational and safety conditions for infrastructure and services offered by Cloud Temple, as part of its IaaS offer, are conducted with the goal of compliance with the SecNumCloud qualification.

| Activity                                                                                                                   | Client Role | Cloud Temple Role |
|----------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure the maintenance of the operational condition of **physical datacenters** infrastructure                              | __I__       | __RA__            |
| Ensure the maintenance of the security condition of **physical datacenters** infrastructure                                 | __I__       | __RA__            |
| Ensure the maintenance of the operational condition of **compute** infrastructure                                           | __I__       | __RA__            |
| Ensure the maintenance of the security condition of **compute** infrastructure                                              | __RA__      | __CI__            |
| Ensure the maintenance of the operational condition of **storage** infrastructure                                           | __I__       | __RA__            |
| Ensure the maintenance of the security condition of **storage** infrastructure                                              | __I__       | __RA__            |
| Ensure the maintenance of the operational condition of **backbone network** infrastructure                                  | __I__       | __RA__            |
| Ensure the maintenance of the security condition of **backbone network** infrastructure                                     | __I__       | __RA__            |
| Ensure the maintenance of the operational condition of virtual machines deployed in client tenants **(3)**                  | __RA__      |                   |
| Ensure the maintenance of the security condition of virtual machines deployed in client tenants **(3)**                     | __RA__      |                   |
| Ensure the maintenance of the operational condition of middlewares deployed in client tenants                               | __RA__      |                   |
| Ensure the maintenance of the security condition of middlewares deployed in client tenants                                  | __RA__      |                   |

*(2) Cloud Temple regularly provides the latest operating system versions for your hypervisors.
However, since Cloud Temple is not informed about the specifics of your production environments and the requirements related to your workloads, __the decision to proceed with the update of the operating system of your hypervisors, thereby causing a restart, is up to you__. This operation can be performed through the Cloud Temple console or via the API. Professional services are available if you wish Cloud Temple to handle certain operations.*

*(3) Cloud Temple offers licensing packs for firewalls (Fortinet, Stormshield) and load balancers (HAProxy), and works in collaboration with your teams for initial configuration during the implementation phase. However, the responsibility for maintaining operational and safety conditions rests with you during the regular operation phase. Professional services are available if you wish Cloud Temple to take charge of certain operations.*

### Change, Incident, Problem, and Capacity Management
| Activity                                                                                                              | Client Role | Cloud Temple Role |
|-----------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Manage incidents on **physical datacenter** infrastructures                                                           | __I__       | __RA__            |
| Manage problems on **physical datacenter** infrastructures                                                            |             | __RA__            |
| Manage capacities on **physical datacenter** infrastructures                                                          |             | __RA__            |
| Manage incidents on **compute** infrastructures                                                                       | __I__       | __RA__            |
| Manage problems on **compute** infrastructures                                                                        |             | __RA__            |
| Manage capacities on **compute** infrastructures                                                                      | __RA__      | __CI__            |
| Manage incidents on **storage** infrastructures                                                                       | __I__       | __RA__            |
| Manage problems on **storage** infrastructures                                                                        |             | __RA__            |
| Manage capacities on **storage** infrastructures                                                                      | __RA__      | __CI__            |
| Manage incidents on **backbone network** infrastructures                                                              | __I__       | __RA__            |
| Manage problems on **backbone network** infrastructures                                                               |             | __RA__            |
| Manage capacities on **backbone network** infrastructures                                                             |             | __RA__            |
| Implement a new virtual machine or create a new application environment within a client's tenant                     | __RA__      |                   |
| Modify the configuration of deployed virtual machines                                                                 | __RA__      |                   |
| Delete a deployed virtual machine                                                                                     | __RA__      |                   |
| Make the decision to add, modify, or remove resources on the Cloud Temple platform                                    | __RA__      | __CI__            |
| Execute the decision to modify resources on the Cloud Temple platform                                                 | __I__       | __RA__            |
| Apply tags to virtual machines in accordance with the defined policy                                                  | __RA__      |                   |

### Performance Management
| Activity                                                                                                                                        | Client Role | Cloud Temple Role |
|-------------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure the monitoring of proper functioning and reliability of all equipment involved in the provision of the SecNumCloud certified service      | __I__       | __RA__            |
| Follow the performance of the physical computing, storage, and network resources made available to your tenants __(4)__                         | __RI__      | __A__             |
| Monitor the performance of virtual machines supporting your environments                                                                        | __RA__      | __I__             |

*(4) The Cloud Temple platform adopts a philosophy centered on __providing dedicated infrastructures__ for __computing__ needs (with physical blades), __storage__ (via dedicated LUNs on SANs) 
and __network__ (including firewalls and load balancers). These dedicated resources are made available to the client, whose use and resulting load depend directly on how they are utilized. It is therefore the responsibility of the client to implement and manage the necessary monitoring and metrology systems to ensure optimal operation of their information system.*

### Backup Management and Disaster Recovery on Integrated Backup
| Activity                                                                                                                               | Client Role | Cloud Temple Role |
|----------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure the operational maintenance of **backup** infrastructures integrated into the Cloud Temple platform **(5)**                     |             | __RA__            |
| Ensure the security condition maintenance of **backup** infrastructures integrated into the Cloud Temple platform                       | __I__       | __RA__            |
| Manage incidents on the **backup** infrastructures integrated into the Cloud Temple platform                                            | __I__       | __RA__            |
| Manage problems on the **backup** infrastructures integrated into the Cloud Temple platform                                             |             | __RA__            |
| Manage capacities on the **backup** infrastructures integrated into the Cloud Temple platform                                           | __AI__      | __RC__            |
| Ensure the operational maintenance of the backup solution chosen within their tenants by the client **(6)**                             | __RA__      |                   |
| Ensure the security condition maintenance of the backup solution chosen within their tenants by the client                              | __RA__      |                   |
| Manage incidents on the backup solution chosen within their tenants by the client                                                       | __RA__      |                   |
| Manage problems on the backup solution chosen within their tenants by the client                                                        | __RA__      |                   |
| Manage capacities on the backup solution chosen within their tenants by the client                                                      | __RA__      | __CI__            |
| Manage the lifecycle of backup policies                                                                                                | __RA__      |                   |
| Ensure that the backup policies are consistent with the data lifecycle                                                                 | __RA__      |                   |
| Ensure that the business continuity or disaster recovery plans are consistent with the data lifecycle                                   | __RA__      |                   |
| Perform periodic tests to evaluate the effectiveness of the backup strategy                                                            | __RA__      |                   |
| Perform periodic tests to evaluate the effectiveness of the disaster recovery or business continuity strategy                          | __RA__      | __CI__            |

*(5) As of January 1st, 2024, the backup solution integrated into the Cloud Temple platform will be IBM Spectrum Protect Plus. 
This solution is fully automated and can be managed via the Cloud Temple console or the Cloud Temple API.*

### Backup and disaster recovery management for third-party platforms within a client tenant
| Activity                                                                                                                                    | Client Role | Cloud Temple Role  |
|---------------------------------------------------------------------------------------------------------------------------------------------|-------------| ------------------ |
| Ensure operational maintenance on the backup solution chosen within the client's tenants **(6)**                                            | __RA__      |                    |
| Ensure security maintenance on the backup solution chosen within the client's tenants                                                       | __RA__      |                    |
| Manage incidents on the backup solution chosen within the client's tenants                                                                  | __RA__      |                    |
| Manage problems on the backup solution chosen within the client's tenants                                                                   | __RA__      |                    |
| Manage capacities on the backup solution chosen within the client's tenants                                                                 | __RA__      | __CI__             |
| Manage the life cycle of backup policies                                                                                                    | __RA__      |                    |
| Ensure that backup policies are consistent with the data lifecycle                                                                          | __RA__      |                    |
| Ensure that business continuity or disaster recovery plans are consistent with the data lifecycle                                            | __RA__      |                    |
| Conduct periodic tests to evaluate the effectiveness of the backup strategy                                                                 | __RA__      |                    |
| Conduct periodic tests to evaluate the effectiveness of the disaster recovery or business continuity strategy                               | __RA__      | __CI__             |

*(6) This concerns any additional backup solution set up in the client's environments and managed by the client.
Cloud Temple offers professional services for those who wish to delegate certain operations to Cloud Temple.*

### Documentation and Contract Management

| Activity                                                                                                                                                 | Client Role | Cloud Temple Role |
|----------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure commercial and contractual management of the client, including preparation of quotes, processing of orders, and management of billing            | __I__       | __RA__            |
| Ensure contractual monitoring of the service, including verification of quotes, tracking deliveries, and oversight of billing                           | __RA__      | __I__             |
| Ensure maintenance and availability of the resource inventory supplied by Cloud Temple for the SecNumCloud offering                                    | __I__       | __RA__            |
| Ensure maintenance and provision of the technical documentation relevant to the SecNumCloud offering                                                     | __I__       | __RA__            |
| Monitor the life cycle of virtual machines deployed in your Cloud Temple environments<br/> via your CMDB (Configuration Management Database) | __RA__      |                   | 
| Keep the access policy to the Cloud Temple console interface or Cloud Temple API up to date                                                            | __RA__      |                   |

### Log Management


| Activity                                                                                                                       | Client Role | Cloud Temple Role |
|--------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Retain and make available the logs from the Cloud Temple IaaS platform **(7)**                                                |             | __RA__            |
| Retain and make available the logs from the information system<br/> hosted within your Cloud Temple tenants                    | __RA__      |                   |

*(7) As of January 1st, 2024, the retention period for platform logs is one year.*

## Connectivity to the client network (mpls, dedicated fiber, ipsec, ...)


| Activity                                                                                                | Client Role | Cloud Temple Role  |
|---------------------------------------------------------------------------------------------------------|-------------|--------------------|
| Subscribe to a network operator connectivity to access a physical Cloud Temple datacenter (8)            | __RA__      | __CI__             |
| Manage the IP addressing plan                                                                           | __RA__      | __I__              |
| Manage incidents on client network operator links                                                       | __RA__      |                    |
| Manage issues on client network operator links                                                          | __RA__      | __CI__             |
| Manage capacities on client network operator links                                                      | __RA__      | __CI__             |

*(8) Cloud Temple assumes responsibility for the network with regard to its backbone infrastructure, its collection points, as well as 
datacenter interconnection points, thus guaranteeing connectivity between these points and its backbone network. 
In the physical bay hosting offer, Cloud Temple assumes responsibility from the equipment located at the top of the rack, commonly referred to as "top of rack".*

## Reversibility

| Activity                                                                                                                                                                                    | Client Role | Cloud Temple Role  |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|--------------------|
| Plan the reversibility project and select the target infrastructures                                                                                                                        | __RA__      | __I__              |
| Implement the transition operations, whether they involve manual extraction, the use of APIs <br/>or any other third-party method compatible with the Cloud Temple platform.               | __RA__      | __I__              |
| Transfer data while controlling the repercussions of the migration on the quality of service provided <br/>by the client's information system.                                               | __RA__      |                    |
| Proceed with the dismantling of the Private Cloud configurations and options associated with the client, <br/>following the termination of the contract.                                    | __I__       | __RA__             |
| Carry out the secure erasure of data on storage media and provide a certificate                                                                                                            | __I__       | __RA__             |