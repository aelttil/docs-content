---
title: Tenants
---

## Tenant concept

A tenant is a __grouping of resources within an organization__. An [Organization](organisations.md) has at least one tenant (referred to as the __default tenant__, which can be renamed). Typically, multiple tenants are used to segment responsibilities or technical scopes.

For example:

- A __Production__ tenant
- A __Preproduction__ tenant
- A __Acceptance__ tenant
- A __Qualification__ tenant

But it is also possible to organize things with an __application view__ or by __criticality__:

- A __Application 1__ or __Criticality 1__ tenant
- A __Application 2__ or __Criticality 2__ tenant
- ...

The technical resources ordered are assigned to a specific tenant and are not shared with other tenants. For example, a Hypervisor cluster and the associated L2 networks are only available in 1 tenant.
Regarding networks, it is possible to request __'cross tenant'__ networks to ensure network continuity between tenants.

User permissions must be defined in each tenant. Thus, each organization must carefully consider the desired tenants. This point is usually addressed in the initial workshop, at the time of the organization's creation.

It is possible to evolve the architecture by adding or removing tenants.

A tenant cannot be empty. It must necessarily be initialized with a minimum of resources:

- An availability zone (AZ, i.e., a physical datacenter),
- A compute cluster,
- A storage space,
- A network vlan.

## Creating a tenant

The creation of a tenant is carried out by a service request indicating:

    The name of your Organization
    The name of a contact with their email and phone number to finalize the configuration
    The name of the tenant
The desired availability zone or, failing that, the physical site for the tenant

*__Note__ : The creation of a tenant will be possible directly for the sponsor Q2 2024.*

| Order Reference                                        | Unit    | SKU                     |  
|--------------------------------------------------------|---------|-------------------------|
| TENANT - *(REGION)* - Tenant activation                | 1 tenant | csp:tenant:v1           |
| TENANT - *(REGION)* - Activation of an availability zone | 1 tenant | csp:(region):iaas:az:v1 |


## Tenant selection

The tenant selection is made from the main page of the Shiva console:

![](images/shiva_tenant.png)

*__Note:__ The resources of a tenant are unique to it and cannot be mixed with other tenants.*

## Tenant access authorization: Authorized IPs

Access to the cloud management console is strictly limited to previously authorized IP addresses, in compliance with the requirements of the SecNumCloud qualification. This restriction ensures an enhanced level of security by only allowing access to users from specified IP ranges, thus minimizing the risks of unauthorized access and protecting the cloud infrastructure according to the highest security standards.

It is now possible to display the list of authorized public IP addresses on the tenant and to add a new public IP address to this list directly from the "Administration > Access" tab.

![](images/shiva_ip_access_management_01.png)

For this, the user must have the `console_public_access_read` right to view the authorized IPs, and the `console_public_access_write` right to add a public IP address to the list.

It is then possible to add a new IP:
![](images/shiva_ip_access_management_02.png)

Note: *The removal of an authorized IP is done by a support request in the Cloud Temple console.*

## Resource Consumption within a Tenant

It is possible to view the cloud resources consumed within a tenant, thus providing a detailed view of the usage of the various deployed services. This feature allows users to track their resource consumption in real time, identify the most demanded services, and optimize their usage according to needs.

In the console menu, click on "Consumption Report" and then select the desired time period. You will be able to view in detail the consumption of cloud resources over the defined period, which will allow you to analyze the use of services and optimize your management accordingly:

![](images/shiva_tenant_ressources_01.png)