---
title: Change tracking
---

## Version 241206.1.44.0
- **COMPUTE** : Adding details about the operation of Extra Config in the VMware IaaS offer.

## Version 241126.1.43.0
- Additional details on the documentation related to incidents to highlight the incident status page.

## Version 241031.1.42.0
- Modification of screenshots following the redesign of the "Console" UI.
- Modification of the naming of certain tabs, menus, action buttons following the redesign of the "Console" UI.

## Version 241001.1.41.0
- Further clarifications on Openshift limitations in SecNumCloud environment.
- Initial documentation on the OpenIaaS offer:
  - **IAM** - Update of permission names to prepare for OpenIaaS implementation.
  - **NETWORK** - Updating fortinet installation documentation to support new permissions.
  - **CONSOLE / API** - Updating activity management.
  - **STATUS** : Details on incident and notification management.
  - **COMPUTE** : Clarification that 16GB of hypervisor RAM are dedicated to the hypervisor and not available for clients.
  - **OPENSHIFT** : Typo corrections; addition of clarifications.

## Version 240924.1.40.0
- Correction of an error in the backup documentation on the "held" status
- Addition of details on the SLA for the backup of virtual machines and disks.
- Addition of the ability to authorize access to the Shiva console for a new IP.
- Modification of the permissions table; addition of rights associated with Owner. iam_permission_manager is now deprecated
- New permission named "bastion_console_access" which will now be necessary to connect to an appliance (via SSH/RDP).
- Viewing resource consumption within a tenant
- Typos corrections in the block storage section
- Addition of details on the S3 section
- Addition of Veeam Kasten K10 for OpenShift migration and backup
- Addition of the list of available OpenShift permissions
- Addition of OpenShift permissions and limitations
- Correction of the pfSense installation procedure
- Addition of the order command for an AZ in the order menu
- Addition of the order command for a storage cluster
- Modification of the documentation on the network order

## Version 240709.1.39.1

- Addition of the installation guide for a Fortinet firewall on the Cloud Temple infrastructure

## Version 240705.1.38.2
- Addition of the RACI PaaS in the contractual part

## Version 240701.1.38.1
- Addition of a FAQ on the PaaS Openshift offer.

## Version 240627.1.37.5
- Openshift PaaS Section: Added details about the deployed version and the current software limitations.
- Openshift PaaS Section: Added a paragraph on backing up the Openshift platform.

## Version 240625.1.37.4
- Storage / Block Section: Added details on the operation of datastores in VMware's IaaS offering.
- Compute / vmware offer Section: vAPP type properties of a virtual machine can now be modified in the advanced properties of the virtual machine.
- Backup Section: Changed the behavior of the backup for "held" backup policies; now, it is no longer possible to start a machine that has a suspended backup policy. Added a question to the FAQ on this point.
- Backup Section: Now the default restoration policy is **TEST** in order to limit risks to production;
- Backup Section: It is now possible to change the name of the restored VM.

## Version 240608.1.37.3
- Addition of the ability to change the disk controller type in a virtual machine from the IAAS-Vmware offer.
- Precision on the limit of 20 networks per propagation action.
- Indication of the storage duration of events in the SHIVA console (FAQ/General): 6 months.

## Version 240514.1.37.2
- Corrections to the DPA

## Version 240514.1.37.1
- Addition of a paragraph on the description of treatments to the DPA.
- Addition of WINSCP as a compatible S3 client.

## Version 240514.1.37.0
- Addition of the document "Personal Data" (DPA)

## Version 240430.1.36.4
- Correction of some information on the vmware computing offer and storage. 

## Version 240430.1.36.3
- The [Compute v2](../iaas/compute.md/#offre-de-calcul-v2) offer is no longer marketed and is replaced by the [Compute v3](../iaas/compute.md/#offre-de-calcul-v3) offer.
- Addition of the description of [subscribing to thematic notification channels](../console/accounts.md#abonnement-aux-notifications-thématiques).
- Addition of [managing network access to your S3 buckets](../paas/s3.md#limitations-des-accès-à-vos-bucket-s3) and enrichment of the [faq](../paas/s3.md#faq).
- The IPV4 v1 offer is no longer marketed and is replaced by the IPV4 v2 offer.
- Addition of the description of [internet access management](../network/internet.md#gestion-de-vos-connectivités-internet) from the Cloud Temple console.
- Addition of the description of the use of *Provider Independent* addresses.
- Addition of RedHat Openshift work units.
- Addition of work units for [hosting of the 'server' type](../housing/housing.md).
- Addition of tracking [planned operations and incidents](../console/status.md) in the Cloud Temple console.
- Update of [permissions](../console/permissions.md).