---
title: IaaS Service Level Agreement
---
  
![Cloud Temple Logo](images/ct.png)

# 1. **IaaS SERVICE LEVEL AGREEMENT**

| **Recipients:**                      | **SPONSOR**                                     |
| :----------------------------------- | :---------------------------------------------- |
| **Document Reference**               | CT.AM.JUR.ANX_Service Level Agreement_IaaS_v2.0 |
| **Your contacts**                    | *First Name* *Last Name*                         |
|                                      | Account Manager                                  |
|                                      | e-mail: *firstname.lastname*@cloud-temple.com   |
| **Last update date**                 | 04/03/2024                                      |
| **Contractual validation date**      | Day DD YYYY                                      |


----------------------------------------------------------------------------------
| **Version** | **Date**   | **Action**                             | **Author**      |
| ----------- | ---------- | -------------------------------------- | --------------- |
| v0.1        | 06/07/2022 | Initial Draft                          | Lorena ALCALDE  |
| v0.2        | 09/14/2022 | Enrichment                             | Lorena ALCALDE  |
| v1.0        | 12/30/2022 | Integration of Indicators              | Lorena ALCALDE  |
| v1.1        | 01/23/2023 | Footer Modification                    | Lorena ALCALDE  |
| v1.2        | 05/22/2023 | Enrichment                             | Lorena ALCALDE  |
| v1.3        | 06/29/2023 | Enrichment                             | Lorena ALCALDE  |
| v1.4        | 11/06/2023 | Capital Modification and Enrichment    | Lorena ALCALDE  |
| v1.5        | 11/30/2023 | Enrichment                             | Lorena ALCALDE  |
| v1.6        | 03/21/2024 | Enrichment                             | Lorena ALCALDE  |
| v2.0        | 29/03/2024 | SNC Compliance Adjustments             | Nicolas ABRIOUX |
| v2.0        | 03/04/2024 | Publication                            | Lorena ALCALDE  |


----------------------------------------------------------------------------------

# 2. **TABLE OF CONTENTS**


- [1. **IaaS SERVICE AGREEMENT**](#1-iaas-service-agreement)
- [2. **TABLE OF CONTENTS**](#2-table-of-contents)
- [3. Preliminary and Glossary](#3-preliminary-and-glossary)
  - [3.1. Preliminary](#31-preliminary)
  - [3.2. Glossary](#32-glossary)
- [4. Acronyms](#4-acronyms)
- [5. Purpose of this Service Agreement](#5-purpose-of-this-service-agreement)
- [6. Audit](#6-audit)
- [7. Service Description](#7-service-description)
  - [7.1. Shared Responsibility Model](#71-shared-responsibility-model)
  - [7.2. Detailed Presentation of the Service Scope](#72-detailed-presentation-of-the-service-scope)
- [7.2.1. Datacenter Infrastructures](#721-datacenter-infrastructures)
- [7.2.2. Service Management Software Infrastructure](#722-service-management-software-infrastructure)
- [7.2.3. Computing Infrastructures](#723-computing-infrastructures)
- [7.2.4. Storage Infrastructure](#724-storage-infrastructure)
- [7.2.5. Global Network Infrastructure](#725-global-network-infrastructure)
- [7.2.6. Backup Infrastructure](#726-backup-infrastructure)
- [7.2.7. Implementation of Business Continuity or Disaster Recovery Solutions](#727-implementation-of-business-continuity-or-disaster-recovery-solutions)
- [7.3. Limitations of Services in the Qualified IaaS Model](#73-limitations-of-services-in-the-qualified-iaas-model)
  - [7.3.1. Managed Services in RUN](#731-managed-services-in-run)
  - [7.3.2. Backup Configuration](#732-backup-configuration)
- [7.3.3. Backup Configuration](#733-backup-configuration)
  - [7.4. Service Implementation](#74-service-implementation)
    - [7.4.1. Technical Prerequisites](#741-technical-prerequisites)
  - [7.5. Service Localization in France](#75-service-localization-in-france)
    - [7.5.1. Localization of Datacenters Hosting the Service](#751-localization-of-datacenters-hosting-the-service)
    - [7.5.2. Localization of Cloud Temple Agencies Operating the Service](#752-localization-of-cloud-temple-agencies-operating-the-service)
  - [7.6. Support](#76-support)
    - [7.6.1. Nature of the Support Accompanying the Service](#761-nature-of-the-support-accompanying-the-service)
    - [7.6.2. Solicitation of the Technical Support Service](#762-solicitation-of-the-technical-support-service)
    - [7.6.3. Incident Management Process](#763-incident-management-process)
    - [7.6.4. Prioritization Process of Treatments](#764-prioritization-process-of-treatments)
- [7.6.5. Language and location of support service](#765-language-and-location-of-support-service)
- [8. Commitments and service levels](#8-commitments-and-service-levels)
  - [8.1. Infrastructure availability commitments](#81-infrastructure-availability-commitments)
  - [8.2. SPONSOR interface availability commitment](#82-sponsor-interface-availability-commitment)
  - [8.3. Support availability commitment](#83-support-availability-commitment)
  - [8.4. S3 object storage availability commitment](#84-s3-object-storage-availability-commitment)
  - [8.5. Clarification regarding backup commitment](#85-clarification-regarding-backup-commitment)
- [9. Organization of the contractual relationship](#9-organization-of-the-contractual-relationship)
  - [9.1. Provider's responsibilities](#91-providers-responsibilities)
  - [9.2. Limitation of the Provider's Liabilities](#92-limitation-of-the-providers-liabilities)
  - [9.3. Access Limitation](#93-access-limitation)
  - [9.4. Responsibilities of Third Parties Involved in the Provision of the Secure Temple Service](#94-responsibilities-of-third-parties-involved-in-the-provision-of-the-secure-temple-service)
  - [9.5. Responsibilities and Obligations of the SPONSOR](#95-responsibilities-and-obligations-of-the-sponsor)
  - [9.6. Rights of the SPONSOR](#96-rights-of-the-sponsor)
  - [9.7. Data Erasure at the End of the Contract](#97-data-erasure-at-the-end-of-the-contract)
- [10. Lifecycle of the Current Service Agreement](#10-lifecycle-of-the-current-service-agreement)
  - [10.1. Effective Date of the Service Agreement](#101-effective-date-of-the-service-agreement)
  - [10.2. Evolution of the Service Agreement](#102-evolution-of-the-service-agreement)
- [10.2.1. Changes initiated by the SPONSOR](#1021-changes-initiated-by-the-sponsor)
- [10.2.2. Changes initiated by the Service Provider](#1022-changes-initiated-by-the-service-provider)
- [10.3. Reversibility](#103-reversibility)
- [11. Availability, Continuity, and Service Restoration](#11-availability-continuity-and-service-restoration)
  - [11.1. Incident and Interruption Management](#111-incident-and-interruption-management)
    - [11.1.1. Incidents](#1111-incidents)
      - [11.1.1.1. Types of Incidents addressed in this Service Agreement](#11111-types-of-incidents-addressed-in-this-service-agreement)
      - [11.1.1.2. Incident Handling](#11112-incident-handling)
      - [11.1.1.3. Security Incident Notification Level](#11113-security-incident-notification-level)
  - [11.2. Service Maintenance](#112-service-maintenance)
- [11.2.1. Nature of Maintenance](#1121-nature-of-maintenance)
- [11.2.2. Remote Access of Cloud Temple within the SPONSOR's Scope](#1122-remote-access-of-cloud-temple-within-the-sponsors-scope)
- [11.2.3. Remote Access of Third Parties Involved in Service Provision within the SPONSOR's Scope](#1123-remote-access-of-third-parties-involved-in-service-provision-within-the-sponsors-scope)
- [12. Data Erasure Procedure at the End of the Contract](#12-data-erasure-procedure-at-the-end-of-the-contract)
- [13. Applicable Law](#13-applicable-law)
  - [13.1. Generally](#131-generally)
  - [13.2. Compliance with Law and Applicable Regulations](#132-compliance-with-law-and-applicable-regulations)
  - [13.3. GDPR](#133-gdpr)
  - [13.4. Protection Against Non-European Law](#134-protection-against-non-european-law)
- [14. SIGNATURES](#14-signatures)
----------------------------------------------------------------------------------

# 3. Preliminary and Glossary

## 3.1. Preliminary

This document formalizes the Service Agreement associated with the SecNumCloud qualified IaaS service, referred to as "*Secure Temple*".

This service agreement supplements and is complementary to the Provider's general terms and conditions of sale and use. It is understood that the contractual documents are interpreted consistently with each other. In case of contradiction or divergence between the terms of the contractual documents, the documents will prevail over each other in the following order:

1. General Terms and Conditions of Sale and Use (GTC)
2. SecNumCloud IaaS Service Agreement
3. SecNumCloud PaaS Service Agreement
4. Specific Individual Agreement
5. Security Assurance Plan (SAP)
6. Specific Terms of Use (STU)

## 3.2. Glossary
In this Service Agreement, the **SPONSOR**, the **Provider**, and the **Parties** are identified in the Contract to which this Service Agreement is annexed.

The expressions used in this Service Agreement will be interpreted in accordance with the definitions attributed to them below:

-   **Change:** Any addition, modification, or removal impacting the Service, which has been authorized, planned, or undertaken.

-   **Standard Change:** A change that follows a procedure, the terms of implementation and impacts (including financial) of which are known and accepted in advance by the Parties. It is then integrated into the catalog of standard changes, and may, depending on the case, have a GTI and a GTR.
-   **Contract:** refers to the contract subscribed by the SPONSOR with the Provider to allow the SPONSOR to benefit from the Service, to which this Service Agreement is attached.

-   **Service Agreement:** This document, established within the framework of a specific contract or General Terms and Conditions of Sale and Use (T&Cs), in compliance with the requirements of the SecNumCloud Standard.

-   **Service Request:** request from the SPONSOR to the Provider within the framework of the Service, covering operations not achievable by the SPONSOR from the SPONSOR interface and support requests within the framework of the Service. Service requests are limited to those provided for in the Contract or this Service Agreement.

-   **Availability:** Ability to ensure the availability and maintenance of optimal Service performance, in accordance with the criteria and commitments defined in the Service Level Agreements (SLA).
-   **Technical Data**: Includes all data processed to deliver the Service, notably the identity of beneficiaries and administrators of the technical infrastructure, logs of the technical infrastructure, access configuration, directory, certificates...

-   **Event**: An "event" is any detectable or identifiable occurrence that may be important for the management of the Service.

-   **Hypervisor**: Operating system that allows the execution of virtual machines on a compute blade.

-   **Incident**: Any unexpected event that disrupts the normal operation of the Service or compromises data security.

-   **Security Incident**: Any event within the scope of the Service:

    -   Of an intentionally malicious nature;
    -   Of an accidental nature that harms the integrity, confidentiality, or traceability of the Service or the SPONSOR's data;
-   Breaching existing security measures.
    Non-malicious threats to Availability are not considered a Security Incident (hardware failure, bug, malfunction, natural disaster...).

-   **SPONSOR Interface:** Administration interface of the Service provided to the SPONSOR by the Provider, comprising a web administration console and an API.

-   **Production Deployment:** Administrative action(s) to implement the Change when it is approved (the change, in the ITIL sense, only concerns change management and not its realization/concretization).

-   **Problem:** Cause of one or more recurring Incidents, cause of a potential Incident (risk situation).

-   **Region:** Refers to a geographically delimited set of cloud availability zones, providing network services,
    calculation and storage to optimize latency, performance, and local regulatory compliance.

-   **Service:** refers to the SecNumCloud qualified IaaS service "Secure Temple", provided to the SPONSOR by the Service Provider from technical infrastructures maintained by the Service Provider, as described in the "Service Description" section of this Service Agreement.

-   **Secure Temple**: refers to the SecNumCloud qualified IaaS service, offered by the company Cloud Temple, as defined in the certificate available on the ANSSI website and provided in the appendix of this Service Agreement.

-   **Disaster:** refers to a serious event of natural or human origin, accidental or intentional, causing significant losses and damages to the affected Party.
-   **Monitoring:** Supervision of an Information System or Service, involving the collection of various data such as measurements and alarms. This activity is limited to observation and tracking, without directly intervening on the monitored elements, a prerogative that belongs to Administration operations.

-   **Tenant:** An isolated instance reserved for a user or group of users, sharing a common infrastructure while maintaining the independence and security of data and applications.

-   **Availability Zone (AZ):** A specific and isolated section of the cloud computing infrastructure, designed to ensure high availability and resilience of services through geographical distribution of resources.

# 4. Acronyms


  | **Acronym** | **Definition**                                                                          |
  | ------------ | :-------------------------------------------------------------------------------------- |
  | **CAB**      | Change Advisory Board                                                                   |
  | **CMDB**     | Configuration Management Database                                                       |
  | **COPIL**    | Steering Committee                                                                      |
  | **COSTRAT**  | Strategic Committee                                                                     |
  | **COPROJ**   | Project Committee                                                                       |
  | **DB**       | Database                                                                                |
  | **DRP**      | Disaster Recovery Plan                                                                  |
  | **GTE**      | Guarantee of Escalation Time                                                            |
  | **GTI**      | Intervention Time Guarantee                                                         |
  | **GTR**      | Resolution Time Guarantee                                                          |
  | **ITIL**     | Information Technology Infrastructure Library - Best practices for IS management   |
  | **IaaS**     | Infrastructure as a Service                                                        |
  | **MCO**      | Operational Condition Maintenance                                                   |
  | **MOA**      | Project Ownership                                                                   |
  | **MOE**      | Project Management                                                                  |
  | **MSP**      | Managed Services Provider                                                          |
  | **OS**       | Operating System                                                                    |
  | **PAQ**      | Quality Assurance Plan                                                                  |
  | **PaaS**     | Platform as a Service                                                                   |
  | **PAS**      | Security Assurance Plan                                                                 |
  | **PASSI**    | Information Systems Security Audit Provider                                             |
  | **RFC**      | Request For Change                                                                      |
  | **GDPR**     | General Data Protection Regulation (personal data)                                      |
  | **RPO**      | Recovery Point Objective -- Freshness of the restored data in case of Disaster          |
  | **RTO**      | Recovery Time Objective -- Service recovery time in case of Disaster                    |
  | **SDM**      | Service Delivery Manager                                                                |
  | **SLA**      | Service Level Agreement                                                                 |
  | **SNC**      | SecNumCloud                                                                             |
  | **SOC**      | Security Operation Center                                                               |
  | **TMA**      | Third-party Application Maintenance                                                     |
  | **UO**       | Work Unit                                                                               |
  | **VABE**     | Validation of Aptitude for Good Exploitability                                          |
  | **VABF**     | Validation of Aptitude for Proper Functioning                                           |
  | **VM**       | Virtual Machine                                                                         |
  | **VSR**      | Regular Service Validation                                                              |
# 5. Purpose of this Service Level Agreement

This Service Level Agreement establishes the terms and conditions under which the Provider commits to deliver the Service to the SPONSOR. Its purpose is to:

-   Specify the performance requirements expected by the SPONSOR in terms of functionality and reliability of the Service;

-   State the obligations of the Provider to meet the agreed service levels;

-   Identify the regulatory standards specifically applicable to the delivered Service;

-   Ensure uniformity and integrity in the evaluation of the Service quality;

-   Guarantee the excellence of the services provided, evaluated using quantitative performance indicators.

It is stipulated that, in the event the Provider loses its SecNumCloud qualification, the Contract may be terminated.
the SPONSOR, without incurring any penalties. In such an event, the Provider commits to inform the SPONSOR of this disqualification by sending an official notification, through a registered letter with a request for acknowledgment of receipt.

It should be noted that a modification or adjustment of the SecNumCloud qualification will not be interpreted as a revocation of the initial qualification.

# 6. Audit

The Provider commits to allowing the SPONSOR, or any third-party auditor who is not a competitor of the Provider that the latter would have designated, to consult all the documents necessary to attest to the full compliance with the obligations related to compliance with the provisions of Article 28 of the General Data Protection Regulation (GDPR), thus facilitating the conduct of audits.

By accepting this Service Agreement, the SPONSOR gives its explicit authorization to:
1. The National Agency for Information Systems Security (ANSSI) and the competent qualification entity are responsible for undertaking the verification of the Service's and its information system's compliance with the SecNumCloud standard.
2. An information systems security audit provider, duly qualified as PASSI and expressly designated by the Provider, is responsible for conducting security audits on the Service.

# 7. Service Description

## 7.1. Shared Responsibility Model

The Service offered by the Provider is characterized by the provision of the following services, which align with the shared responsibility principle presented in the SecNumCloud standard:

-   The provision of computing resources;

-   The provision of storage spaces;

-   Access to network and internet connectivity services;

-   The offer of a backup service dedicated to virtual machines.
The shared responsibility model applied between the Provider and the CLIENT within the scope of the Service is presented in §7.1.

It is understood that the Provider will leverage its expertise to perform the Services according to the best professional practices and
in accordance with the requirements of the SecNumCloud standard.

The Service is SecNumCloud certified (see certificate in Annex).

## 7.2. Detailed presentation of the Service scope

| Compute               | Computing resource of the CLIENT Tenant                                                                              |
| :-------------------- | :------------------------------------------------------------------------------------------------------------------- |
| Storage               | Production data of the CLIENT Tenant                                                                                 |
| S3 Object Storage     | Provides a sovereign multi-AZ object storage infrastructure compatible with standard S3 APIs. |
| Backup                | Subject to subscription to the appropriate mass-storage                                                              |
| Network Infrastructure | Network resource of the SPONSOR Tenant                                                                              |
| SPONSOR Console       | The service allowing the SPONSOR to access their IaaS service and administer it via the Shiva interface              |
| Support               | The support service accompanying the previous services and only these (*)                                           |

_(*) Within the scope of the SNC qualified Service and the responsibilities of the Provider in this matter_

### 7.2.1. Datacenter Infrastructures

The Service encompasses the provision, for each Availability Zone, of the following qualified services:
-   Datacenter site located in France for the FR Region, compliant with the latest technological standards, offering a resilience level equivalent to or higher than Tier 3 of the Uptime Institute;
-   Provision of technical rooms within dedicated datacenters for hosting essential technical equipment for service production, including computation, storage, network, cabling, and other necessary components;
-   Secure power supply, provided by two distinct electrical circuits, ensuring service continuity;
-   Provision of air conditioning services, adjusted to comply with the standards and recommendations of equipment manufacturers, in order to maintain an optimal environment for technical devices;
-   Continuous monitoring and detailed metrology, allowing for precise tracking and proactive management of the performance and security of the provided service.
The Provider ensures the availability of advanced fire detection and extinguishing services, designed to identify and effectively neutralize any fire outbreak within the facilities. These systems are essential to guarantee the safety of the equipment and data. They include high-precision smoke detectors and extinguishing devices that can act quickly without damaging the IT equipment. This service is crucial to prevent fire risks, minimize potential damage, and ensure the continuity of operations.

The SPONSOR is informed that all security procedures and measures put in place, including annual failover tests on generator sets, are essential to guarantee the continuity and integrity of the services provided. These practices are designed to
minimize the risk of failure and ensure optimal responsiveness in case of an Incident. By accepting these conditions, the client acknowledges
the importance of these measures and commits to fully cooperate to facilitate their implementation. The SPONSOR is also encouraged to
become familiar with the provided security recommendations and integrate them into their own risk management strategy.

### 7.2.2. Software Infrastructure for Service Management

The Provider provides the SPONSOR with the administration console and the necessary API for the use of the Service. They also commit to maintaining this administration console and the API in optimal operational condition and to continuously ensure their security.
This administration console and the API are collectively referred to as the "SPONSOR interface".
The Provider alerts the SPONSOR that abnormal use of the SPONSOR interface, particularly in the event of overloading its command APIs (hammering), can trigger automatic security measures resulting in the blocking of access to the command APIs or the Service. It should be emphasized that this situation does not constitute a Service unavailability but a protective action of the Service and the Provider's infrastructure; therefore, the SPONSOR cannot consider it as an unavailability in its calculations.

Moreover, the Provider specifies to the SPONSOR that perfectly identical requests (duplicates) sent to its APIs are limited to one per second (Throttling). If the SPONSOR submits identical requests at a higher frequency, their rejection cannot be interpreted as a Service unavailability.

### 7.2.3. Computing Infrastructures

The Service includes the provision, in the availability zones subscribed by the SPONSOR, of the necessary equipment for executing workloads in the form of virtual machines.

This includes:

- The provision of the technical chassis necessary for the proper functioning of the compute blades;
- The provision of compute blades in the quantities specified by the SPONSOR and distributed according to the availability zones of their choice. It should be noted that these compute blades are exclusively dedicated to the SPONSOR.
- The provision of hypervisor-type operating systems, as well as ensuring the operational and security maintenance of the software infrastructure necessary for managing these operating systems. It should be highlighted that, even though the Provider is responsible for operational maintenance and overall security of the Service, they do not possess specific knowledge concerning the CLIENT's production environments or requirements related to their workloads. Therefore, the responsibility of deciding on the update of the operating systems of the hypervisor compute blades, an action that may require a reboot, rests entirely with the CLIENT. This operation can be performed via the CLIENT Interface.

The choice of the compute blade model, selected from the catalog offered by the Provider, is the responsibility of the CLIENT.
### 7.2.4. Storage Infrastructure

The service includes providing the SPONSOR with a shared SAN (Storage Area Network) type storage infrastructure, offering various levels of performance. This service encompasses:

- The implementation and maintenance of the dedicated SAN network in operational and secure condition;
- The installation and management of storage arrays shared among clients, including their maintenance in operational and secure condition, their supervision, and their metrology;
- The establishment of automated systems for the allocation of LUNs (Logical Unit Numbers) for storage dedicated to the SPONSOR's use, in accordance with the volumes subscribed by the SPONSOR.

### 7.2.5. Global Network Infrastructure

As part of the Service, the Provider deploys a global network facilitating the SPONSOR's accessibility to its hosted systems. This service includes:
-   The provision, operational maintenance, and security of all optical fiber connections interconnecting the different Availability Zones;

-   The provision, operational maintenance, and security of the technical equipment necessary for the proper functioning of the network and the isolation of different clients.

The network interconnection of the SPONSOR Tenant, to the Internet or to private networks, and the network equipment, operator links, and other technical components implementing this interconnection, are not part of the Service scope. This network interconnection is implemented in accordance with the provisions set out in the Contract.

### 7.2.6. Backup Infrastructure

The Service Provider provides the SPONSOR with an integrated, dedicated, and managed backup service, intended for the protection of its
Virtual machines. The Provider ensures the operational and security maintenance of this backup service. The Provider guarantees that the CLIENT's backups will be located outside the Availability Zone of the backed-up workloads, provided that the CLIENT has subscribed to the appropriate Work Units.

This backup service is limited to the backup of virtual machines and topology configurations of the IaaS environment of the CLIENT's Tenants within the scope of the Service. The development and implementation of an adequate backup policy by the CLIENT depends on the subscription to specific Work Units. Therefore, it is the CLIENT's responsibility to ensure the availability of the necessary technical resources from the Provider to implement their backup policy or adjust it according to the available resources.
The Provider commits to notifying the CLIENT in case of capacity constraints and to provide advisory assistance for resource optimization. The Provider's obligations will be limited to implementing the backup policy needs expressed by the CLIENT, within the framework of the subscribed resources.

### 7.2.7. Implementation of business recovery or continuity solutions

The Provider provides the CLIENT with all the technical solutions necessary to ensure optimal distribution of its resources across various Availability Zones. It is the CLIENT's responsibility to effectively manage this resource distribution, for which they have the opportunity to use the Provider's tools available for this purpose.

## 7.3. Limitations of services in the qualified IaaS model

### 7.3.1. Managed services in RUN

It is important to note that the following are excluded from the Service:
-   Hosting of the SPONSOR's physical components;

-   Network interconnection of the SPONSOR's Tenant, to the Internet or to private networks, including operator links;

-   Any managed service type, or TMA;

-   Any assistance on virtual machines at the OS level and above in the IaaS responsibility stack, even if it is simple supervision.

However, it is not at all excluded that the SPONSOR may use such services from the Provider's MSP offer to intervene in managed services mode on its Tenants. These services will then not be covered by this Service Agreement and its bilateral commitments/clauses.

### 7.3.2. Backup Configuration
By default, the Provider sets up the IaaS resources for the SPONSOR by reserving resources and configuring deployments to use Availability Zones. It is the responsibility of the SPONSOR to choose the Availability Zones via the SPONSOR interface.

### 7.3.3. Backup Configuration

The backup service extends to the backup of virtual machines and topology configurations representing the IaaS environment of the SPONSOR's Tenants as part of the Service.
The provision of backup services and the implementation of the SPONSOR's backup policy is subject to the subscription of storage space on the necessary mass storage to ensure the service. Therefore, it is the responsibility of the SPONSOR to subscribe to the necessary technical means from the Provider to ensure the backup policy on their IT scope, or to adjust the backup policy to the means implemented. The Provider commits to inform the SPONSOR in case of technical capacity limit.

The Provider will implement the necessary technical and human resources for the backup of the system hosted within the limit of resources subscribed by the SPONSOR.
Furthermore, in the case of scopes not covered by the Service Provider, it is the CLIENT's responsibility to define their own backup strategy and to configure the backups of the VMs themselves or to make a Service Request to the Service Provider so that the backup settings for the physical servers are set up if the CLIENT has a managed service contract allowing the Service Provider to act via the CLIENT's interface, which is the administration console that is made available as part of this Service Agreement and which has features to configure backups.

In addition, this service will only commit to translating the configuration specified clearly by the CLIENT through the settings via the CLIENT's interface.
For reasons of flexibility in the Provider's offering, the CLIENT has the option to associate a no-backup policy with some of their VMs. In this case, it is the responsibility of the CLIENT to accept this choice. The Provider will not back up VMs associated with the "no backup" policy. The Provider alerts the CLIENT that choosing the "no backup" policy or choosing to manually backup exposes the CLIENT to a permanent data loss in the event of an Incident on the lower layers or on the layers depending on their responsibility in the IaaS model. In such a case, it will be impossible to hold the Provider accountable for restoring the data as there will be nothing to restore. The Provider recommends always backing up the VMs.
For any topic concerning the OS installed on a virtual machine and any software or program run "on top of the OS", it is the SPONSOR's responsibility to carry out administration and supervision operations within the European Union if they wish to ensure that all layers of the IS are operated and managed from the European Union. Administration operations outside the scope of the Service Provider's responsibility under this Service Agreement are indicated in the "Shared Responsibility Model" section of this Service Agreement.

## 7.4. Service Implementation

### 7.4.1. Technical Prerequisites

For the implementation of the Service, the SPONSOR acknowledges that they will need to:

-   Operate with VMware-type virtualization in the versions supported by the publisher and provided by the Service Provider as part of the Service;

-   Resort via the Service Provider to the use of the backup tool;
- Declare fixed IPs from which the Provider will authorize access to the CLIENT interface (Filtering by whitelist). Modifications to this IP list must be made via Service Requests (list not manageable from the Service administration interface).

## 7.5. Service Localization in France

It is specified that none of the operations and none of the physical components involved in the provision of the Service, which this Service Agreement is subject to, are located outside the European Union.

This includes in particular support, operational supervision, and security supervision (SOC) of the technical infrastructure delivering the Service. Consequently, all storage, all administration tasks, supervision, and all processing are carried out in France.

### 7.5.1. Location of Datacenters Hosting the Service
Except for the operations of the Provider's employees and agencies, all production operations (including data storage and processing) and technical components delivering the Service are located in Datacenters based in France.

### 7.5.2. Location of Cloud Temple agencies operating the service

Cloud Temple employees working within the scope of the Service operate from Cloud Temple agencies all located exclusively in France. These agencies are located in France, in Tours, Lyon, Caen, and Paris La Défense.

The SPONSOR is informed of the possibility of Cloud Temple employees working remotely. However, the Provider guarantees the same level of security for remote access, particularly regarding VPN access. These remote accesses are implemented in accordance with the requirements of the SecNumCloud standard.

## 7.6. Support

### 7.6.1. Nature of the support accompanying the service
The Provider offers a technical support service aimed at assisting the SPONSOR in the management, troubleshooting, and optimization of their deployed resources. This service covers a wide range of activities, from assisting with the initial setup of services to advanced technical support to resolve specific issues.

Here is a description of the features and functionalities of the support service:

-   Assistance with the initial implementation of the Service usage;
-   Assistance in incident resolution;
-   Assistance in problem-solving;
-   Monitoring and advice on the optimization of the technical platform.
Within the scope of the support service, the Provider does not substitute for the SPONSOR in the use of the Service. The SPONSOR remains entirely responsible for the configuration, operation of its VMs and Tenants, and the management of all elements (including data and applications) that it has stored or installed on the Provider's infrastructure. The technical support service is provided in accordance with the General Terms and Conditions of Sale and Use, with the Provider being held to a duty of means.

The SPONSOR commits to using the technical support service in a reasonable manner, particularly refraining from requesting services not subscribed to from the Provider and from involving the Provider's teams with its own clients or third parties not included in the Contract. The Provider reserves the right to reject any service request that does not meet these criteria.
The level of support engagement is contingent upon the subscription of the associated support work units.

### 7.6.2. Requesting technical support service 

Technical support can be accessed through a ticketing system via the CLIENT console and is available during normal business hours excluding public holidays (8am - 6pm; Monday -- Friday; French calendar and schedule). For emergencies occurring outside of working hours, particularly incidents significantly affecting production, the on-call service can be reached via a number provided to the CLIENT at the initiation of the Service.

For each request or Incident, it is imperative to generate a ticket with the Provider's support. The initiation of this ticket, including all necessary information, is essential and marks the beginning of the evaluation of the Provider's commitments.
As soon as the Service Provider receives a request or an Incident notification, whether through the management console or following a phone call, a ticket is automatically created. When reporting an Incident, it is essential that the SPONSOR provides the service provider with as much detail as possible about the problem encountered. This step is crucial for an adequate assessment of the situation, its prioritization, and an effective diagnosis.

The Client then receives a confirmation email, indicating the creation of the ticket and its unique number. The SPONSOR can check the status and history of their requests and Incident reports directly from the management console.

### 7.6.3. Incident Management Process
When an Incident is declared, the technical support team of the Service Provider initiates an investigation to identify the cause of the problem and establish a diagnosis. The Client must actively collaborate with the Service Provider by providing all necessary information and performing the required tests. The Service Provider may access the Client's Service to diagnose the Incident.

If the Service Provider's Services are deemed functional and the Incident is not attributable to them, the Client will be informed. Upon the Client's request, the Service Provider can offer Professional Services to identify the origin of the problem, billable upon prior agreement in 30-minute increments.
In the event that the Incident is the responsibility of the Provider or one of its subcontractors, the Provider completes the diagnosis and undertakes the restoration of the Service at no additional cost. The diagnosis is based on the exchanges between the Parties and the Provider's data, these elements being considered as probative by agreement of the Parties.

### 7.6.4. Incident treatment prioritization process 

The determination of a case's priority level is based on a matrix analysis that evaluates the impact of the Incident and its degree of
criticality:

-   The impact levels are defined as follows:

| Impact Level | Description                                                                                                           |
| --------------- | --------------------------------------------------------------------------------------------------------------------- |
| Impact I1       | The Provider's service or services are interrupted                                                                    |
| Impact I2       | The Provider's service or services are degraded                                                                       |
| Impact I3       | The Provider's service or services are currently stable, but show signs of potential long-term decline |

-   The levels of Criticality are defined as follows:

| Criticality Level | Description                                                                                             |
| ------------------- | ------------------------------------------------------------------------------------------------------- |
| Criticality C1        | The Provider's service or services are degrading at a concerning rate                               |
| Severity C2        | The Provider's service or services gradually deteriorate over time                          |
| Severity C3        | The Provider's service or services present one or more inconveniences without significant consequence |

-   Based on a thorough analysis of the situation, taking into account the elements determining the Impact and Severity, a priority is assigned to the ticket in accordance with the decision matrix below:

| Impact level <br/> \ Severity level | Impact I1       | Impact I2       | Impact I3       |
| ----------------------------------- | --------------- | --------------- | --------------- |
| Severity C1                         | Priority **P1** | Priority **P2** | Priority **P3** |
| Severity C2                         | Priority **P2** | Priority **P3** | Priority **P4** |
| Severity C3                         | Priority **P3** | Priority **P4** | Priority **P5** |
The service level commitments corresponding to each priority level are detailed in the following chapter.

### 7.6.5. Language and location of the support service

Support is provided by the Provider to the SPONSOR at least in French. Support can also be provided in English.

The operations of the Provider's support service for the SecNumCloud qualified infrastructure service are located in the European Union.

# 8. Commitments and service levels

The Provider commits to ensuring continuous monitoring of the performance and security integrity of its technical infrastructure delivering the Service, ensuring their optimal operation.
The unavailability of a service, subject to a performance indicator, is recognized as soon as it is identified by the Provider's supervision system, or following a notification by a user of the CLIENT. The start of the unavailability is set at the earliest time between these two events, to ensure an accurate and fair count of the downtime.

The end of the unavailability is officially marked by the full restoration of the service, confirmed either by the Provider's supervision tools or by user feedback, thus ensuring an effective resumption of operations and an accurate measurement of the interruption duration.

## 8.1. Infrastructure Availability Commitments
The Provider commits to maintaining a level of availability and performance in accordance with the standards defined for each specified period. Service Level Agreements (SLAs) apply provided that the CLIENT implements their systems across at least two of the Availability Zones present in the concerned Region.

In the event that the CLIENT does not meet these conditions, they will be unable to claim the application of the relevant SLAs, which are specifically identified by an asterisk (\*). Access to the SLAs is via the CLIENT interface. Measurements are calculated on a monthly basis:

- **SLA 1 (*) : IC-INFRA_SNC-01** – Compute Availability: guaranteed availability rate of 99.99%, calculated on a 24/7 basis.
- **SLA 2 (*) : IC-INFRA_SNC-02** – Storage Availability: guaranteed availability rate of 99.99%, calculated on a 24/7 basis.
- **SLA 3     : IC-INFRA_SNC-03** – Backup Reliability: guaranteed availability rate of 99.99%, calculated on a 24/7 basis.
- **SLA 4 (*) : IC-INFRA_SNC-04** – Network Infrastructure Availability: guaranteed availability rate of 99.99%, calculated on a 24/7 basis.
- **SLA 5     : IC-INFRA_SNC-05** – Internet Access: guaranteed availability rate of 99.99%, calculated on a 24/7 basis.

_**Notes**_ : 

- *In response to a Distributed Denial of Service (DDoS) attack, the Provider reserves the right to adjust its internet routing configuration to limit the impact of this attack and protect its infrastructure. In particular, if an IP address belonging to the CLIENT is targeted, the Provider may resort to the technique of blackholing.
via the BGP community to block all traffic to the targeted IP address upstream at its providers, with the aim of protecting the SPONSOR's resources as well as those of other SPONSORs 
and the Provider's infrastructure. The Provider strongly encourages the SPONSOR to adopt similar measures, such as using commercially available web application firewall 
software, and to carefully configure its security groups via the command API.*

- *The Provider emphasizes the need for the SPONSOR to minimize the opening of flows, particularly by avoiding making the administration ports 
**SSH** (TCP port 22) and **RDP** (TCP port 3389) accessible from the entire Internet (subnet 0.0.0.0/0), as well as internal protocols such as **SMB** (TCP/UDP port 445) or **NFS** (TCP/UDP port 2049).*

## 8.2. SPONSOR Interface Availability Commitment
-   SLA 6: IC-INFRA_SNC-06 -- Access to the Service Administration Console: a guaranteed availability of 97%, provided continuously, 24 hours a day, 7 days a week.
-   SLA 7: IC-INFRA_SNC-07 -- Access to the Service Control APIs: an availability of 99.9%, calculated on a 24/7 basis.

## 8.3. Support Availability Commitment

- **SLA 8: IC-INFRA_SNC-08** – Here are the performance commitments of the Provider's technical support for incidents, excluding scheduled maintenance:

| Priority        | Response Time Guarantee (RTG) | Performance Objective |
| --------------- | ----------------------------- | --------------------- |
| Priority **P1** | 30mn                          | 95%                   |
| Priority **P2** | 2h                            | 90%                   |
| Priority **P3** | 4h                            | 90%                   |
| Priority **P4** | 24h                                    | 85%                     |
| Priority **P5** | 48h                                    | 85%                     |

- **SLA 9      : IC-INFRA_SNC-09** – Here are the performance commitments of the technical support provided by the Service Provider for service requests:

|                    | Response Time Guarantee (RTG) | Performance Objective |
| ------------------ | ----------------------------- | --------------------- |
| Service Request    | 4h                            | 90%                   |

*Note:*

- *The delay for the Response Time Guarantee (RTG) is calculated from the difference between the moment the SPONSOR opens the ticket and the first intervention of the Service Provider's support.*
- *Incident investigations regarding the SPONSORs will not include remote intervention on the SPONSOR's hosted servers. This assistance will be limited to explaining the available metrics related to the SPONSOR's environment, in order to facilitate understanding of incidents or performance issues encountered. Based on the results of this analysis, recommendations may be suggested.*

## 8.4. S3 Object Storage Availability Commitment

- **SLA 10      : IC-INFRA_SNC-10** – Here are the availability commitments for S3 object storage:

| Indicator        | Commitment                                         | Availability Objective |
| ----------------- | -------------------------------------------------- | ------------------------- |
| IC-INFRA-SNC-10.1 | Durability of an object's storage in a region   | 99.9999999% / year          |
| IC-INFRA-SNC-10.2 | Availability of the S3 Object Storage API         | 99.99%                    |
| IC-INFRA-SNC-10.3 | Maximum latency for accessing an object in a region | 150 ms                    |

Notes:

- The Object Storage Service is specifically designed for object storage and should be used for this purpose only, **explicitly excluding its use in block mode**. Resorting to block mode through indirect methods, including for example the use of *"FUSE" in a Linux environment*, constitutes a violation of the stated terms of use. No incident, malfunction, or damage resulting from this non-compliant use will be covered by the Service Level Agreements (SLAs) defined in this service convention.
- The durability guarantee is contingent upon the use of services in accordance with current best practices and standards, and explicitly excludes any data modification, whether intentional or accidental, resulting from actions taken by the SPONSOR.

## 8.5. Clarification regarding the backup commitment

The backup strategy deployed for the SPONSOR is conditioned by the subscription to the appropriate work units.

The Provider commits to providing a backup solution that will allow the SPONSOR to implement the desired backup policies.

It should be noted that the Provider's scope stops at providing a backup service, and it is up to the SPONSOR to supervise the proper execution of the associated policies via the SPONSOR interface.
It is specified that the management of storage capacity of the storage space dedicated to backups, remains the responsibility of the SPONSOR. The Provider makes the usage rate available via the console.

*Example: Non-backup of a virtual machine:*

*The SPONSOR is responsible for checking/supervising the proper execution of backup policies. In the event that the SPONSOR notices that a virtual machine is not backed up, it is their responsibility to verify the cause. The SPONSOR can request support from the Provider's Support according to the subscribed support level for assistance.*

**SLA 8: IC-INFRA_SNC-08 and SLA 9**, will be exclusively applicable in the event of a backup service Incident.

# 9. Organization of the contractual relationship


## 9.1. Provider's Responsibilities

The Provider commits to:
- to adequately inform the SPONSOR (for example, in case of a technical resource capacity limit delivering the Service).

- to formally notify the SPONSOR within one month of any legal, organizational, or technical changes that may impact the Service's compliance with protection requirements against non-European laws (19.6 of the SNC v3.2 repository).

- to provide the SPONSOR with interfaces and service interfaces that are at least in French.

- to study and take into account specific sectoral requirements related to the types of information entrusted by the SPONSOR in the implementation of the service and within the limits of the Provider's responsibilities.

- not to disclose any information related to the service to third parties, except with the formal written permission of the SPONSOR.
- to provide all necessary information for the conduct of compliance audits in accordance with the provisions of Article 28 of the GDPR.

- to report to the SPONSOR, through this Service Agreement, any security incident impacting the Service or the use made by the SPONSOR of the Service (including the SPONSOR's data).

- to authorize a qualified Information Systems Security Audit Provider (PASSI), mandated by the Provider, to audit the service as well as its information system, in accordance with the Provider's SecNumCloud control plan. In addition, the Provider undertakes to provide all necessary information to successfully conduct compliance audits in accordance with the provisions of Article 28 of the GDPR, conducted by the sponsor or a third party mandated.
- To provide, as a subcontractor, in accordance with Article 28 of the General Data Protection Regulation (GDPR), assistance and advice to the CLIENT by alerting them whenever an instruction issued by them could constitute a violation of data protection rules.

- To notify in writing, when a project impacts or is likely to impact the security level of the Service, the CLIENT of potential impacts, mitigation measures put in place, as well as residual risks concerning them.

- To document and implement all necessary procedures to comply with the legal, regulatory, and contractual requirements applicable to the service, as well as the specific security needs of the CLIENT, defined by them and provided for in the Contract. Upon request from the CLIENT, the Documentation module of the CLIENT interface will allow secure sharing of these documents.
- to provide, at the SPONSOR's request, risk assessment elements related to the submission of the SPONSOR's data to the law of a non-member state of the European Union.

Upon formal and written request from the SPONSOR, the Service Provider commits to:

1. Make the internal regulations and the ethical charter of the Service Provider accessible to the SPONSOR;

2. Make the penalties incurred in case of violation of the security policy accessible to the SPONSOR;

3. Provide the SPONSOR with all events concerning them in the logging elements of the Service;

4. At the end of the Contract, the Service Provider commits to delete the data and Technical Data related to the SPONSOR, in accordance with the "data erasure procedure at the end of the Contract" described in this Service Agreement.
5. To ensure a secure erasure of all the SPONSOR's data by completely rewriting any medium that hosted its data as part of the Service.

6. To provide the complete list of third parties authorized to access the infrastructures carrying the data.
The Provider will keep up to date and make available to the SPONSOR a comprehensive list of third parties authorized to access the infrastructure carrying the data, informing the latter of any changes relating to subcontractors. The Provider and all its subsidiaries commit to respecting the fundamental values of the European Union, namely human dignity, freedom, democracy, equality, the rule of law, as well as respect for Human Rights. The service provided by the Provider complies with current legislation on fundamental rights and the values of the European Union relating to respect for human dignity, freedom, equality, democracy, and the rule of law.

## 9.2. Limitation of Provider's liabilities

Due to all the definitions and conditions mentioned in this Service Agreement, the Provider's liabilities are limited as follows:
1. The shared responsibility model, described in the "Shared Responsibilities Model" section of this Service Agreement, effectively limits the Provider's involvement in the operational layers going "above" the provision of computing, network, storage, and backup resources. This specifically excludes, but is not limited to:

    -   The management of what is installed on the virtual machines (OS, middlewares, applications, etc.);

    -   The updating of the OS and other software installed by the CLIENT on their machines in their Tenants;

    -   The security of the programs, software, and applications installed on the virtual machines;

    -   The updating of the virtual machines;
  
    -   The backup of application-level data.

2.  The Provider cannot commit to backing up the CLIENT's Tenants without the CLIENT first subscribing to the appropriate work units.
3. The Provider cannot claim ownership of the data transmitted and generated by the SPONSOR. Indeed, this data is the property of the SPONSOR.

4. The Provider emphasizes that it cannot in any case exploit the data transmitted and generated by the SPONSOR without prior validation from the latter.

5. The Provider disclaims all responsibility for the components physically hosted and managed by the Provider, but being the direct property of the SPONSOR or a third party with whom the SPONSOR has contracted. The hosting of physical components of clients is not part of the Service and is therefore outside the scope of this Service Agreement. It is the responsibility of the SPONSOR to assess the level of adherence or dependence that these components introduce with respect to the qualified SecNumCloud IaaS Service.

## 9.3. Access Limitation

As part of the Service, the Provider is strictly prohibited from accessing the Tenants belonging to the CLIENT without prior authorization. It is the responsibility of the CLIENT to provide the necessary access to the Provider's personnel, according to the specific needs of the hosting and, if applicable, professional support services, if this option has been chosen by the CLIENT.

The CLIENT acknowledges that these accesses are granted exclusively for the needs related to the provision of agreed services, thus ensuring secure management in accordance with the terms of the agreement.

Remote access by third parties involved in the Provider's service delivery is strictly prohibited. In the event that a specific technical requirement would necessitate such access, it could only be established after clearly notifying the CLIENT, providing a detailed justification, and obtaining their written agreement.
This measure ensures the control and security of the SPONSOR's data, by ensuring that any exception to the rule is duly authorized and documented.

## 9.4. Responsibilities of third parties involved in the provision of the Secure Temple service

The Provider manages the list of third-party partners involved in the provision of the Service. These third parties are publishers, providers (of the Provider), and other suppliers involved in the provision of the Service. The Provider applies the following measures to these third parties:

-   The Provider requires third parties involved in the implementation of the service, in their contribution to the Service, a level of security at least equivalent to that which it commits to maintain in its own security policy applicable to the Secure Temple service;
- The Provider contracts, with each of the third parties involved in the implementation of the service, audit clauses allowing a qualification body to verify that these third parties comply with legal requirements and SNC requirements, enabling the Provider to meet its commitments in this Service Agreement.

- The Provider implements a procedure to regularly monitor the measures put in place by the third parties involved in the implementation of the service to meet the requirements for the Provider to fulfill its commitments in this Service Agreement.

- The Provider implements a procedure to track changes made by the third parties involved in the implementation of the service that could affect the security level of the service's information system.

## 9.5. Responsibilities and obligations of the SPONSOR
As a reminder, the Provider supplies the SPONSOR with a platform for running virtual machines, the configuration of which is the responsibility of the SPONSOR. Each virtual machine cannot operate without an associated backup policy. The Provider defines automatic backup policies through its interfaces. However, it is the SPONSOR's responsibility to activate these backup policies and thus activate the virtual machines.

The SPONSOR authorizes ANSSI and the SNC qualification body to audit the Service and the technical infrastructure delivering the Service.

## 9.6. SPONSOR's Rights

At any time during the contractual relationship, the SPONSOR can file a complaint related to the qualified service with ANSSI.

At any time, the SPONSOR can request the Provider to make its internal regulations and ethics charter accessible.

## 9.7. Data Erasure at the End of the Contract
Upon the termination of the contract, whether it reaches its expiration or is terminated for any reason, the Service Provider commits to securely erase all of the CLIENT's data, including technical data. The Service Provider will ensure to provide the CLIENT with a formal notice, respecting a period of twenty-one (21) calendar days. The CLIENT's data will then be deleted within a maximum period of thirty (30) days following this notification.

To attest to this deletion, the Service Provider will provide the CLIENT with a certificate confirming the data erasure.

# 10. Life Cycle of the Present Service Agreement

## 10.1. Effectiveness of the Service Agreement

The present Service Agreement comes into effect on the day of its signing by the CLIENT.
The collection, manipulation, storage, and processing of data carried out in the context of pre-sales, implementation, and service termination are done in compliance with current legislation.

## 10.2. Service Agreement Changes

Modifications or additions to this Service Agreement arise exclusively from requests made by the designated governance bodies. These proposed changes will be reviewed by the Parties, authorized to determine the aspects requiring written formalization.

It is agreed that any change to the Service Agreement, once validated, that alters the initially established financial conditions, will require the establishment and signing of an amendment to the current Contract.

Factors that may trigger a revision of this Service Agreement include, but are not limited to:

-   The evolution of the technical infrastructure delivering the IaaS Service;

-   Adjustments made to the services deployed by the Provider to deliver the Service;
-   Variations in commitments made and applicable penalties;
-   Organizational reconfigurations within the SPONSOR or the Provider;
-   Expansion or reduction of the Service's scope.

The management of versions and revisions of the Service Agreement is recorded in the preamble of the document to facilitate tracking.

### 10.2.1. Changes initiated by the SPONSOR

The changes to the Service Agreement can originate from:

-   An evolution of the infrastructure managed by the Provider;

-   A modification of the services implemented by the Provider;

-   A modification of the service level commitments by the Provider.

### 10.2.2. Changes initiated by the Provider

Any modification of the Service Agreement is subject to the SPONSOR's acceptance. It is understood that any validated modification or addition that changes the financial elements of the Contract may require the signing of an amendment to it.

## 10.3. Reversibility

Furthermore, Cloud Temple commits to allowing a review of the current Service Agreement (including its termination) without penalty for the SPONSOR in case of loss of the SecNumCloud qualification.
The Services do not include any obligation for reversibility (i.e., assisting the Client in migrating their system to another Provider) except for the provision to the CLIENT by the Provider of the CLIENT interface allowing the CLIENT to backup and retrieve their data, including notably the configuration data of their information system via one of the following technical modalities at the CLIENT's choice: the provision of files in one or more documented and usable formats outside of the service provided by the Provider, or via the implementation of technical interfaces allowing access to data according to a documented and usable schema (API).
The SPONSOR, being the sole master of their system, must do everything possible to facilitate this operation as needed (which implies, among other things, that they establish rigorous documentation for this purpose) and the development of reversibility plans. In the event that the SPONSOR needs additional services, the Provider can offer a consulting mission in this regard within the framework of a specific contract to be negotiated.

# 11. Availability, continuity, and service restoration

## 11.1. Incident and interruption management

### 11.1.1. Incidents

#### 11.1.1.1. Types of Incidents handled under this Service Agreement

-   Disasters

-   Breakdowns and failures

-   Security incidents:

-   Impacting service availability

-   Impacting service confidentiality

-   Impacting service integrity

#### 11.1.1.2. Incident handling

-   Deadlines

-   Post-incident actions
-   Archive documents detailing security incidents.

-   Personal data breach notification (online): https://notifications.cnil.fr/notifications/index

#### 11.1.1.3. Security Incident Notification Level

The CLIENT has the responsibility to choose the severity levels of Security Incidents for which they wish to be informed, for example, through their formalization in a PAS applicable to the Service.

By default, the CLIENT is informed of:

-   Security incidents with impact (impacts I1 and I2 according to the impact scale defined in the prioritization process of this Service Agreement);

-   Personal data breaches for which the CLIENT is responsible for processing;

-   Personal data breaches for which the Provider is responsible for processing and involving the CLIENT's personal data.
## 11.2. Service Maintenance

### 11.2.1. Nature of Maintenance

The provided maintenance involves the implementation of:

-   The Service's operational continuity plan to ensure good availability indicators as committed by the Provider above;

-   The Business Continuity Plan/Disaster Recovery Plan (BCP/DRP) if subscribed to by the CLIENT, triggered according to any incidents that may occur.

### 11.2.2. Remote Access of Cloud Temple to the CLIENT's Scope

In the context of this Service Agreement, the Provider prohibits any access to the Tenants and the interface space of the CLIENT.

It will be the responsibility of the CLIENT to provide the necessary access to the Provider's personnel. The CLIENT acknowledges that the accesses will be used in the context of hosting and ultimately managed services (if subscribed to by the CLIENT).

### 11.2.3. Remote Access of Third Parties Involved in Service Provision to the CLIENT's Scope

No third-party remote access involved in the provision of the Service is permitted.

If a technical need made this scenario necessary, then this type of access would only be carried out after notification to the SPONSOR, justification, and obtaining their written agreement.

# 12. Data Deletion Procedure at the End of the Contract

At the end of the Contract, whether the Contract has reached its term or for any other reason, the Provider will ensure the secure deletion of all data processed as part of the Service, including the SPONSOR's technical data. The Provider will give formal notice respecting a period of twenty-one (21) calendar days. The SPONSOR's data will be deleted within a maximum period of thirty (30) days after the notification. The Provider provides a data deletion certificate to the SPONSOR.

# 13. Applicable Law

## 13.1. In General
The applicable law and the one to which this Service Agreement is subject is French law.

## 13.2. Compliance with applicable law and regulations

The Provider commits to the following points:

-   Identification of legal and regulatory constraints applicable within the framework of the Service;

-   Compliance with legal and regulatory constraints applicable to the data entrusted to the Provider;

-   Compliance with the Data Protection Act and the GDPR;

-   Implementation of means to protect personal data;

-   Implementation of a legal and regulatory monitoring process;

-   To have and maintain appropriate relationships or monitoring with sectoral authorities related to the nature of the data processed within the framework of the Services. This includes notably ANSSI, CERT-FR, and CNIL.

## 13.3. GDPR

Acting as a subcontractor within the meaning of Article 28 of the General Data Protection Regulation (GDPR), the Service Provider commits to:

-   Ensuring transparency and traceability;

-   Appointing a DPO responsible for defining and implementing personal data protection measures;

-   Providing assistance and advice to the CLIENT, alerting them if an instruction from the latter constitutes a violation of personal data protection rules, if the Service Provider has the means to identify it;

-   Guaranteeing security on the processed data (due to the SecNumCloud certification).

## 13.4. Protection against non-European law

In the event that the Provider, as part of the Service, uses the service of a third-party company - including a subcontractor - that has its statutory headquarters, central administration, or main establishment in a non-European Union member state or is owned or controlled by a third-party company domiciled outside the European Union, the Provider commits that this aforementioned third-party company will not have any access to the data operated by the 'Secure Temple' service.

As a reminder, the data in question are those entrusted to the Provider by the CLIENT as well as all technical data including information about the CLIENTS.

For the purposes of this article, the concept of control is understood as that mentioned in II of article L233-3 of the commercial code.

# 14. SIGNATURES

Done at \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, on
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

For Cloud Temple, the PROVIDER

For \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, the SPONSOR