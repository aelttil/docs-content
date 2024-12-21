---
title: User Permissions
---

The Shiva console allows for fine-grained user rights management within an organization, with segregation by tenant.
Initially, it is the main account of the sponsor that allows for the initial configuration of accounts and associated permissions.
Subsequently, the __'iam_write'__ right allows an account to administer the permissions of other users.

## Permissions available for users in your organization

The following permissions can be configured for each [user](accounts.md#assigning-permissions-to-a-user) and for each [tenant](tenants.md#tenant-selection) in your organization.

- __'read'__ type permissions are associated with viewing without the possibility of configuration
- __'write'__ type permissions are associated with configuration modification.
- __These are permissions, not roles.__ As such, it is necessary to have READ and WRITE permissions to modify a configuration.

__VERSION: 20241007__

| Permission Name                               | Permission Description                                                                                                         |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| activity_read                                 | Viewing of log files and activities                                                                                            |
| activity_write                                | Management of log files and activities                                                                                         |
| backup_iaas_opensource_read                   | Management of backup type resources - OpenIaaS Offer - read access                                                          |
| backup_iaas_opensource_write                  | Management of backup type resources - OpenIaaS Offer - write access                                                         |
| backup_iaas_spp_read                          | Management of backup type resources - VMware Offer - read access                                                           |
| backup_iaas_spp_write                         | Management of backup type resources - VMware Offer - write access                                                          |
| bastion_read                                  | Access to bastion type resources                                                                                           |
| bastion_write                                 | Management of Bastion type resources (appliances, sessions, etc.)                                                             |
| bastion_console_access                        | Authorization for console access (ssh/rdp) to a resource protected by a Bastion appliance                                 |
| compute_iaas_opensource_console_access        | OpenIaaS Offer - Opening the console of a virtual machine                                                                |
| compute_iaas_opensource_infrastructure_read   | OpenIaaS Offer - Viewing advanced data of Xen Orchestra resources |
| compute_iaas_opensource_infrastructure_write  | OpenIaaS Offer - Advanced management of Xen Orchestra resources                                                                          |
| compute_iaas_opensource_read                  | OpenIaaS Offer - Viewing Virtual Machine type resources                                                                       |
| compute_iaas_opensource_management            | OpenIaaS Offer - Management of Virtual Machine type resources                                                                 |
| compute_iaas_opensource_virtual_machine_power | OpenIaaS Offer - Management of a virtual machine's power                                                                      |
| compute_iaas_vmware_console_access            | VMware Offer - Opening the console of a virtual machine                                                                       |
| compute_iaas_vmware_infrastructure_read       | VMware Offer - Viewing advanced data of VMware resources (affinity/anti-affinity rules, drs configuration, etc)               |
| compute_iaas_vmware_infrastructure_write      | VMware Offer - Advanced Management of VMware Resources                                                                         |
| compute_iaas_vmware_read                      | VMware Offer - Consultation of Virtual Machine Type Resources                                                                  |
| compute_iaas_vmware_management                | VMware Offer - Management of Virtual Machine Type Resources                                                                    |
| compute_iaas_vmware_virtual_machine_power     | VMware Offer - Management of a Virtual Machine's Power                                                                         |
| console_public_access_read                    | Consultation of IPs Authorized to Access the Console                                                                           |
| console_public_access_write                   | Addition of authorized IPs to access the console                                                                               |
| compute_virtual_machine_power                 | Management of a virtual machine's power                                                                                        |
| documentation_read                            | Consultation of Confluence documentation resources                                                                             |
| housing_read                                  | Consultation of colocation type resources                                                                                      |
| iam_offline_access                            | Creation and deletion of Personal Access Tokens (PAT)                                                                          |
| iam_read                                      | Viewing user rights                                                                                                            |
| iam_write                                     | Managing user rights                                                                                                           |
| intervention_read                             | Viewing planned changes and deployments on the platform                                                                        |
| inventory_read                                | Viewing Inventory type resources                                                                                               |
| inventory_write                               | Managing Inventory type resources                                                                                              |
| monitoring_read                               | Monitoring consultation                                                                                                        |
| monitoring_write                              | Monitoring management                                                                                                          |
| metric_read                                   | Consultation of health data on virtual machines and hosts                                                                      |
| network_read                                  | Network resources consultation                                                                                                 |
| network_write                                 | Network resources management                                                                                                   |
| order_read                                    | Infrastructure order consultation                                                                                     |
| order_write                                   | Infrastructure order creation                                                                                           |
| object-storage_iam_management                 | Allows management of storage accounts on the S3 product                                                                       |
| object-storage_read                           | Allows viewing of buckets and bucket configurations                                                                   |
| object-storage_write                          | Allows editing of buckets and bucket configurations                                                                  |

| openshift_management                          | Allows connection to Openshift platforms (scoped to the tenant)                                                          |
| Owner                                         | The user has administrative rights to a tenant                                                                        |
| support_management                            | Viewing all support tickets of the tenant                                                                       |
| support_read                                  | Viewing their own support tickets of the tenant                                                                                  |
| support_write                                 | Creation of a support ticket on the tenant                                                                                     |
| tag_read                                      | Viewing of tags, excluding RTMS tags                                                                                   |
| tag_write                                     | Management of tags, excluding RTMS tags                                                                                        |
| ticket_comment_read                           | Viewing of comments                                                                                                  |
| ticket_comment_write                          | Management of comments                                                                                                       |
| ticket_read                                   | Viewing of tickets                                                                                                       |
| ticket_write                                  | Ticket Management                                                                                                             |

**Notes** :

- *There is no limit to the number of owners that can be defined on the tenant. However, the management interface (HMI) issues a warning when there are more than 3 owners, to encourage limiting the number of owners for security reasons and optimal access management.*
- *When adding a new owner, updating their permissions may require a delay of up to 60 minutes. This propagation time is normal and ensures that access rights are correctly applied to all associated services and resources.*
- *To remove an owner from the tenant, the user must submit a request to support. This procedure ensures that access rights modifications are carried out securely and in accordance with best access management practices.*

## Deprecated Permissions

The following permissions are no longer available:

| Permission Name                                | Date       | Permission Description                                                                                         |
| ---------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------- |
| backup_read  (**DEPRECATED**)                  | 07/10/2024 | Viewing resources of the backup type                                                                           |
| backup_write (**DEPRECATED**)                  | 07/10/2024 | Management of backup type resources - modification                                                             |
| compute_console_access (**DEPRECATED**)        | 07/10/2024 | Opening the console of a virtual machine                                                                       |
| compute_infrastructure_read (**DEPRECATED**)   | 07/10/2024 | Consultation of advanced data from VMware resources (affinity/anti-affinity rules, drs configuration, etc)     |
| compute_infrastructure_write (**DEPRECATED**)  | 07/10/2024 | Advanced management of VMware resources                                                                        |
| compute_read (**DEPRECATED**)                  | 07/10/2024 | Consultation of Virtual Machine type resources                                                                 |
| compute_management (**DEPRECATED**)            | 07/10/2024 | Management of Virtual Machine type resources                                                                   |
| compute_virtual_machine_power (**DEPRECATED**) | 07/10/2024 | Management of a virtual machine's power                                                                        |
| iam_manage_permissions (**DEPRECATED**)        | 07/10/2024 | Management of new permissions for oneself                                                                      |