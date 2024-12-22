---
title: User Permissions
---

The Shiva console allows for precise user rights management within an organization, with segregation by tenant.
Initially, the main account of the sponsor enables the initial configuration of accounts and associated permissions.
Subsequently, the __'iam_write'__ right allows an account to administer the permissions of other users.

## Available Permissions for Users in Your Organization
The following permissions are configurable for each [user](accounts.md#affectation-des-permissions-à-un-utilisateur) and for each [tenant](tenants.md#selection-dun-tenant) within your organization.

- 'Read' type permissions are associated with consultation without the possibility of configuration.
- 'Write' type permissions are associated with modification of the configuration.
- __These are permissions, not roles.__ As such, it is necessary to have both READ and WRITE permissions to alter a configuration.

__VERSION: 20241007__

| Permission Name                               | Permission Description                                                                                                         |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| activity_read                                 | Consultation of logs and activities                                                                                            |
| activity_write                                | Management of logs and activities                                                                                              |
| backup_iaas_opensource_read                   | Management of backup type resources - OpenIaaS offer - consultation                                                            |
| backup_iaas_opensource_write                  | Management of backup type resources - OpenIaaS offer - modification                                                            |
| backup_iaas_spp_read                          | Management of backup type resources - VMware offer - consultation                                                              |
| backup_iaas_spp_write                         | Management of backup type resources - VMware offer - modification                                                              |
| bastion_read                                  | Consultation of bastion type resources                                                                                         |
| bastion_write                                 | Management of bastion type resources (appliances, sessions, etc.)                                                              |
| bastion_console_access                        | Authorization to access the console (ssh/rdp) of a resource protected by a Bastion appliance                                  |
| compute_iaas_opensource_console_access        | OpenIaaS Offer - Opening the console of a virtual machine                                                                      |
| compute_iaas_opensource_infrastructure_read   | OpenIaaS Offer - Consultation of advanced data of Xen Orchestra resources                                                      |
| compute_iaas_opensource_infrastructure_write  | OpenIaaS Offer - Advanced management of Xen Orchestra resources                                                                |
| compute_iaas_opensource_read                  | OpenIaaS Offer - Consultation of Virtual Machines type resources                                                               |
| compute_iaas_opensource_management            | OpenIaaS Offer - Management of Virtual Machines type resources                                                                 |
| compute_iaas_opensource_virtual_machine_power | OpenIaaS Offer - Management of the power supply of a virtual machine                                                           |
| compute_iaas_vmware_console_access            | VMware Offer - Opening the console of a virtual machine                                                                        |
| compute_iaas_vmware_infrastructure_read       | VMware Offer - Consultation of advanced data of VMware resources (affinity/anti-affinity rules, DRS configuration, etc.)       |
| compute_iaas_vmware_infrastructure_write      | VMware Offer - Advanced management of VMware resources                                                                          |
| compute_iaas_vmware_read                      | VMware Offer - Consultation of Virtual Machines type resources                                                                 |
| compute_iaas_vmware_management                | VMware Offer - Management of Virtual Machines type resources                                                                   |
| compute_iaas_vmware_virtual_machine_power     | VMware Offer - Management of the power supply of a virtual machine                                                             |
| console_public_access_read                    | Consultation of IPs authorized to access the console                                                                            |
| console_public_access_write                   | Addition of IPs authorized to access the console                                                                                |
| compute_virtual_machine_power                 | Management of the power supply of a virtual machine                                                                            |
| documentation_read                            | Consultation of Confluence documentation resources                                                                             |
| housing_read                                  | Consultation of colocation type resources                                                                                      |
| iam_offline_access                            | Creation and deletion of Personal Access Tokens (PAT)                                                                           |
| iam_read                                      | Consultation of user rights                                                                                                    |
| iam_write                                     | Management of user rights                                                                                                      |
| intervention_read                             | Consultation of planned changes and deployments on the platform                                                                 |
| inventory_read                                | Consultation of Inventory type resources                                                                                       |
| inventory_write                               | Management of Inventory type resources                                                                                         |
| monitoring_read                               | Consultation of monitoring                                                                                                     |
| monitoring_write                              | Management of monitoring                                                                                                       |
| metric_read                                   | Consultation of health data on virtual machines and hosts                                                                      |
| network_read                                  | Consultation of network resources                                                                                              |
| network_write                                 | Management of network resources                                                                                                |
| order_read                                    | Consultation of infrastructure orders                                                                                          |
| order_write                                   | Creation of infrastructure orders                                                                                              |
| object-storage_iam_management                 | Allows management of storage accounts on the S3 product                                                                        |
| object-storage_read                           | Allows viewing of buckets and their configurations                                                                             |
| object-storage_write                          | Allows editing of buckets and their configurations                                                                             |
| openshift_management                          | Allows connection to Openshift platforms (scoped to the tenant)                                                                |
| Owner                                         | User has administrative rights over a tenant                                                                                   |
| support_management                            | Consultation of all support tickets of the tenant                                                                              |
| support_read                                  | Consultation of one's own support tickets of the tenant                                                                        |
| support_write                                 | Creation of a support ticket on the tenant                                                                                     |
| tag_read                                      | Consultation of tags, excluding RTMS tags                                                                                      |
| tag_write                                     | Management of tags, excluding RTMS tags                                                                                        |
| ticket_comment_read                           | Consultation of comments                                                                                                       |
| ticket_comment_write                          | Management of comments                                                                                                         |
| ticket_read                                   | Consultation of tickets                                                                                                        |
| ticket_write                                  | Management of tickets                                                                                                          |

**Notes**:

- *There is no limit on the number of owners that can be set on the tenant. However, the management interface (IHM) issues a warning when there are more than 3 owners, to encourage limiting the number of owners for security reasons and optimal access management.*
- *When a new owner is added, updating their permissions may take up to 60 minutes. This propagation time is normal and ensures that access rights are correctly applied to all associated services and resources.*
- *To remove an owner from the tenant, the user must submit a request to support. This procedure guarantees that the changes in access rights are made securely and in compliance with best access management practices.*

## Deprecated Permissions
The following permissions are no longer available:

| Permission Name                              | Date       | Permission Description                                                                                        |
| -------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------- |
| backup_read (**DEPRECATED**)                 | 07/10/2024 | Viewing backup type resources                                                                                 |
| backup_write (**DEPRECATED**)                | 07/10/2024 | Management of backup type resources - modification                                                            |
| compute_console_access (**DEPRECATED**)      | 07/10/2024 | Opening the console of a virtual machine                                                                      |
| compute_infrastructure_read (**DEPRECATED**) | 07/10/2024 | Viewing advanced VMware resource data (affinity/anti-affinity rules, DRS configuration, etc.)                  |
| compute_infrastructure_write (**DEPRECATED**)| 07/10/2024 | Advanced management of VMware resources                                                                       |
| compute_read (**DEPRECATED**)                | 07/10/2024 | Viewing Virtual Machines type resources                                                                       |
| compute_management (**DEPRECATED**)          | 07/10/2024 | Management of Virtual Machines type resources                                                                 |
| compute_virtual_machine_power (**DEPRECATED**)| 07/10/2024 | Management of a virtual machine's power                                                                       |
| iam_manage_permissions (**DEPRECATED**)      | 07/10/2024 | Management of new rights for oneself                                                                          |