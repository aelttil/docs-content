---
title: PaaS Service Convention
---

**Table of Contents**

- [1. Framework](#1-framework)
- [2. Acronyms](#2-acronyms)
- [3. Glossary](#3-glossary)
- [4. Purpose of the Service Provider's PaaS Service Convention](#4-purpose-of-the-service-providers-paas-service-convention)
- [5. Evolution of the PaaS Service Convention](#5-evolution-of-the-paas-service-convention)
- [6. Audit](#6-audit)
- [7. Service Description](#7-service-description)
- [8. Service Implementation](#8-service-implementation)
  - [8.1. Description of Technical Components](#81-description-of-technical-components)
    - [8.1.1. REDHAT OpenShift Service Platform](#811-redhat-openshift-service-platform)
    - [8.1.2. Software Infrastructure for Controlling the Redhat Openshift Platform](#812-software-infrastructure-for-controlling-the-redhat-openshift-platform)
    - [8.1.3. Associated Backup Infrastructure](#813-associated-backup-infrastructure)
    - [8.1.4. Implementation of Business Recovery or Continuity Solutions](#814-implementation-of-business-recovery-or-continuity-solutions)
- [10. Commitments and Service Levels](#10-commitments-and-service-levels)
  - [10.1. Availability Commitments of the RedHat OpenShift Platform](#101-availability-commitments-of-the-redhat-openshift-platform)
- [12. Applicable Shared Responsibility Model](#12-applicable-shared-responsibility-model)
  - [12.1. Responsibility and Obligations of the Service Provider](#121-responsibility-and-obligations-of-the-service-provider)
  - [12.2. Service Provider's Limitation of Liability](#122-service-providers-limitation-of-liability)
  - [12.3. Access Limitation](#123-access-limitation)
- [13. Data Erasure at the End of the Contract](#13-data-erasure-at-the-end-of-the-contract)
- [14. Applicable Law](#14-applicable-law)



## 1. Framework

|           |                        |
| --------- | ---------------------- |
| Reference | CT.AM.JUR.ANX.PAAS 2.0 |
| Date      | March 13, 2024         |

## 2. Acronyms
| Acronym     | Description                                                                                          |
| ----------- | ---------------------------------------------------------------------------------------------------- |
| CAB         | Change Advisory Board – Advisory committee for changes                                               |
| CMDB        | Configuration Management Database – Database for managing configurations                            |
| COPIL       | Steering Committee                                                                                   |
| COSTRAT     | Strategic Committee                                                                                  |
| DB          | Database                                                                                             |
| DRP         | Disaster Recovery Plan                                                                               |
| GTI         | Intervention Time Guarantee                                                                          |
| GTR         | Resolution Time Guarantee                                                                            |
| GTE         | Escalation Time Guarantee                                                                            |
| HYPERVISOR  | Operating system allowing the execution of VMs on a compute blade                                    |
| ITIL        | Information Technology Infrastructure Library - Best practices for information systems management   |
| IAAS        | Infrastructure as a Service                                                                          |
| MCO         | Operational Conditioning Maintenance                                                                  |
| MOA         | Project Owner                                                                                        |
| MOE         | Project Manager                                                                                      |
| OS          | Operating system                                                                                     |
| PAQ         | Quality Assurance Plan                                                                               |
| PAAS        | Platform as a Service                                                                                |
| SDM         | Service Delivery Manager                                                                             |
| RFC         | Request For Change – Change request                                                                  |
| GDPR        | General Data Protection Regulation (personal data)                                                   |
| RPO         | Recovery Point Objective – Freshness of data restored in case of disaster                           |
| RTO         | Recovery Time Objective – Service recovery time in case of disaster                                 |
| SLA         | Service Level Agreement – Agreement on service levels                                               |
| UO          | Work Unit                                                                                           |
| VABF        | Fitness for Purpose Validation                                                                       |
| VABE        | Operational Readiness Validation                                                                     |
| VM          | Virtual Machine                                                                                     |
| VSR         | Regular Service Validation                                                                           |
| SNC         | SecNumCloud                                                                                          |

## 3. Glossary

Below are the expressions used in the present document, which will be interpreted according to the definitions attributed to them below:

| Expression                                          | Definition                                                                                                                                                                                                                                                                            |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "Secure Temple"                                     | The term "Secure Temple" refers to the Infrastructure as a Service (IaaS) offering, qualified as SecNumCloud, provided by Cloud Temple company.                                                                                                                                       |
| Region                                              | A "region" in the context of cloud computing denotes a geographically circumscribed set of cloud availability zones, <br/>delivering network, compute, and storage services to optimize latency, performance <br/>and local regulatory compliance                                    |
| Availability Zone<br/>(AZ)<br/>(Availability zone) | A specific and isolated section of cloud computing infrastructure, designed to ensure high availability and resilience of services through geographical distribution of resources.                                                                                                     |
| Tenant                                              | An isolated instance reserved for a user or group of users, sharing a common infrastructure while maintaining the independence and security of data and applications.                                                                                                                  |

| Expression               | Definition                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Incident                 | An "incident" is any unforeseen event that disrupts the normal operation of a system or compromises the security of data and infrastructure.                                                                                                                                                                                                                                                                                                  |
| Problem                  | A "problem" is a fundamental cause of one or more incidents, identified or suspected, requiring analysis and resolution to prevent its recurrence.                                                                                                                                                                                                                                                                                          |
| Change                   | A "change" refers to any modification made to the IT environment, aiming to improve or correct systems, processes or services.                                                                                                                                                                                                                                                                                                               |
| Standard change          | A "standard change" is a pre-approved, low-risk, repetitive modification following an established procedure, in the IT environment.                                                                                                                                                                                                                                                                                                         |
| Implementation           | Administration actions for realizing the change when it is approved <br/>(the change, in the ITIL sense, concerning only the change management and not its actualization/concretization).                                                                                                                                                                                                                                                    |
| Service request          | Request for evolution subject to a procedure, whose realization: <br/>i) does not modify the CMDB, <br/>ii) the operating mode, costs, and risks are known and accepted in advance and do not require specific rollback provisions<br/>iii) the realization is subject to a service level agreement and included in the contract fee when performed during business hours and days.                                                                  |
| Configuration item       | A "configuration item" is an identifiable component of the information system, such as software, hardware, or a document,<br/> subject to management within IT service management.                                                                                                                                                                                                                                                          |
| Service                  | A "service" is a means of delivering value to customers by facilitating the outcomes they want to achieve, without the need for them to manage <br/>specific costs and risks.                                                                                                                                                                                                                                                               |
| Event                    | An "event" is any detectable or identifiable occurrence within an IT system or network, which may be significant for IT service management.                                                                                                                                                                                                                                                                                                 |
| Disaster                 | A "disaster" is an unexpected damaging event that results in material, financial, or data losses for a CLIENT.                                                                                                                                                                                                                                                                                                                              |
| Service agreement        | This document, established within the framework of a specific contract or the General Conditions of Sale and Use (CGVU), and in accordance with the requirements of the SecNumCloud Repository.                                                                                                                                                                                                                                             |
| Availability             | The ability to ensure availability and maintain optimal performance of a service, in accordance with the criteria and commitments defined in the Service Level Agreements (SLA).                                                                                                                                                                                                                                                             |
| Monitoring               | Monitoring of an Information System or Service, involving the collection of various data such as measurements and alarms. <br/>This activity is limited to observing and tracking, without directly intervening in the monitored elements, a prerogative belonging to Administration operations.                                                                                                                                            |

## 4. Object of the Service Provider's PaaS Service Agreement
The present Service Agreement establishes the terms and conditions under which the Provider agrees to deliver to the CLIENT an infrastructure compliant with the specifications of the "Platform as a Service - PaaS" offer, duly qualified SecNumCloud.

Purpose of the Service Agreement:

1. Specify the performance requirements expected by the CLIENT in terms of functionality and reliability of the infrastructure.
2. State the Provider's obligations in order to meet the agreed service levels.
3. Identify the regulatory standards specifically applicable to the proposed infrastructure.
4. Ensure uniformity and integrity in the assessment of the quality of services rendered.
5. Guarantee the excellence of the services provided, evaluated through quantitative performance indicators.

It is stipulated that, in the event that the Provider is stripped of its SecNumCloud qualification, this Contract may be terminated by right, without incurring any penalties, by the CLIENT. In such an event, the Provider agrees to inform the CLIENT of this disqualification by sending an official notification, by means of a registered letter with acknowledgment of receipt.

It should be noted that a modification or an adjustment of the SecNumCloud qualification will not be interpreted as a revocation of the initial qualification.

## 5. Evolution of the PaaS Service Agreement

Changes or additions to this service agreement arise exclusively from requests made by the designated governance bodies. 
These proposed changes will be reviewed within the strategic committee, the only body authorized to determine aspects that require formal written agreement.

It is agreed that any evolution of the agreement, following validation, which alters the financial conditions initially established, will necessitate the drafting and signing of an amendment to the current contract.

Factors that may induce a revision of this agreement include, but are not limited to:

- The adaptation of the PaaS platform orchestrated by the Provider.
- Adjustments made to the services deployed by the Provider.
- Variations in the commitments made and the penalties applicable.
- Organizational reconfigurations within the CLIENT or the Provider.
- The expansion or reduction of the scope of services to which the CLIENT has subscribed.

Version and revision management of the agreement is recorded in the preamble of the document for easier monitoring.

## 6. Audit 

[Please verify that all URLs, markdown filenames, bracketed text, and parentheses immediately following bracketed text have not been translated.]
The Provider undertakes to allow the CLIENT, or any third-party auditor designated by the latter, to review all documents necessary to certify full compliance with the obligations related to conformity with the provisions of Article 28 of the General Data Protection Regulation (GDPR), thereby facilitating the conduct of audits.

**The Provider specifically commits to making available to the CLIENT a list of all third parties who may access the data and to inform them of any changes in subcontractors.**

By accepting this service agreement, the CLIENT explicitly authorizes:

1. __The French National Agency for the Security of Information Systems (ANSSI)__ and the competent certification entity to undertake the verification of the Service's and its Information System's compliance with the standards defined by the SecNumCloud Repository.
2. __A qualified information systems security audit provider__, duly qualified and expressly designated by the Provider, to conduct security audits on the Service provided by the Provider.

## 7. Service Description

The service offering proposed by the Provider is characterized by the provision of the following services, which align with the principle of shared responsibility detailed in the standards established by the SecNumCloud framework:

- The provision of a Redhat Openshift container management platform operated by the Provider.

It is understood that the Provider will utilize its expertise to deliver the Services in accordance with best professional practices, consistent with their Specifications and in compliance with the standards of its ISO/IEC 27001 certification, as well as the directives of the SecNumCloud Framework.

## 8. Implementation of the Service
It is specified that all operations and physical components involved in the provision of the qualified service, which is the subject of this agreement, are located within the European Union. This specifically includes support, operational supervision, and security oversight (SOC).

### 8.1. Technical Components Description
PaaS services (Platform as a Service) encompass all the components and services required for optimal operation in compliance with SecNumCloud certification.

In this regard, their performance and reliability are inherently tied to the technical components and services of the **IaaS infrastructure** of the Provider, as specified in the Provider's document [Convention de Service IaaS](../iaas/sla_iaas.md).

#### 8.1.1. REDHAT OpenShift Service Platform
The service encompasses the provision within a region across 3 availability zones,

#### 8.1.2. Redhat Openshift Platform Management Software Infrastructure
The Service Provider supplies the CLIENT with the administrative console and the necessary API for the operation of its RedHat OpenShift PaaS environments. 
It also undertakes to maintain them in optimal operational condition and to continuously ensure their security.

Within the specific context of the service provided, the Service Provider makes available to the CLIENT all the interfaces and APIs of the RedHat OpenShift platform within the selected tenant. It is the CLIENT's responsibility to implement the appropriate security devices, such as firewalls, Web Application Firewalls (WAF), and other protection measures, as well as to define the associated filtering rules to secure access to its platform in accordance with its security policy.

The Service Provider alerts the Client to the fact that abnormal use of its administrative console, especially in the case of overloading its command APIs (hammering), 
may trigger automatic security measures resulting in the blocking of access to the command APIs or to certain services of the Service Provider. It should be emphasized that this situation does not constitute a service unavailability but a protective action for the Infrastructure of the Service Provider; 
consequently, the Client cannot consider it as a service downtime in its calculations.

Furthermore, the Service Provider specifies to the Client that perfectly identical requests (duplicates) sent to its APIs are limited to one per second (Throttling). 
If the Client submits identical requests at a higher frequency, their rejection should not be interpreted as a service unavailability.

#### 8.1.3. Associated Backup Infrastructure
The Service Provider makes available to the CLIENT an integrated, dedicated, and managed backup platform designed for the protection of data within their RedHat Openshift environments.
The Service Provider ensures the operational and security maintenance of this integrated backup platform.
Regardless of the number of availability zones subscribed by the CLIENT, the Service Provider guarantees that the CLIENT's backup platform will be located outside of the availability zone of the backed-up workloads.

The backup service is limited to the backup of virtual machines and topology configurations of the CLIENT's SecNumCloud tenant IaaS environments. 
The development and implementation of an adequate backup policy by the CLIENT depend on the subscription to specific work units.
Therefore, it is the CLIENT's responsibility to ensure the availability of the necessary technical resources from the Service Provider to implement their backup policy, or to adjust the policy according to the available means.

The Service Provider commits to notifying the CLIENT in the event of capacity constraints and to provide advisory assistance for resource optimization.
The Service Provider's obligations will be limited to the implementation of the backup policy needs expressed by the CLIENT, within the framework of the subscribed resources.

#### 8.1.4. Implementation of business recovery or continuity solutions
The Provider supplies the CLIENT with all the technical solutions necessary to ensure an optimal allocation of its resources across various availability zones. It is the CLIENT's responsibility to manage this distribution of resources effectively, for which they have the possibility of utilizing the Provider's tools that are available for this purpose.

In particular, the applications deployed on the RedHat OpenShift platform must support the redundancy mechanisms offered by the Provider in order to take advantage of the associated disaster recovery or business continuity solutions.

## 10. Commitments and Service Levels


The Provider commits to ensuring continuous monitoring of the performance and security integrity of its 
platforms and services, maintaining their optimal operation.

The unavailability of a service, subject to a performance indicator, is acknowledged upon its detection by the Provider's supervision system, 
or following a notification by a CLIENT user. The start of the unavailability is set at the earliest time between these two events, 
to ensure an accurate and fair count of downtime.

The end of the unavailability is officially marked by the full restoration of the service, confirmed either by the Provider's monitoring tools, 
or by user feedback, thus ensuring an effective resumption of operations and a faithful measurement of the interruption duration.

### 10.1. Availability Commitments of the RedHat OpenShift Platform

The Provider commits to maintaining a level of availability and performance in accordance with the standards defined for each specified period. Service Level Agreements (SLAs) are applicable provided that the CLIENT implements its systems across at least two availability zones in the concerned region.

If the CLIENT does not adhere to these conditions, they will be unable to claim the application of the relevant SLAs, which are specifically identified by an asterisk (*). Access to the SLAs is available through the CLIENT interface. **Measurements are understood to be calculated monthly**:

- **SLA 1 (*): IC-PAAS_SNC-01** - Availability of the RedHat OpenShift platform: a guaranteed availability rate of 99.9%, calculated on a 24/7 basis.

_**Remarks**_:

- *In response to a Distributed Denial of Service (DDoS) attack, the Provider reserves the right to adjust its internet routing configuration to limit the impact of this attack and safeguard its infrastructure. In particular, if an IP address belonging to the CLIENT is targeted, the Provider may resort to the blackholing technique via the BGP community to block all traffic to the targeted IP address upstream with its suppliers, in order to protect the CLIENT's resources as well as those of other clients and the Provider's infrastructure. The Provider strongly encourages the CLIENT to adopt similar measures, such as the use of web application firewall software available on the market, and to carefully configure their security groups through the command API.*

- *The Provider insists on the necessity for the CLIENT to minimize the flow openings, in particular by avoiding making administration ports **SSH** (TCP port 22) and **RDP** (TCP port 3389) accessible from the entirety of the Internet (subnet 0.0.0.0/0), as well as internal protocols such as **SMB** (TCP/UDP port 445) or **NFS** (TCP/UDP port 2049).*

## 12. Applicable Shared Responsibility Model

### 12.1. Provider's Responsibilities and Obligations
The Provider undertakes to make available to the CLIENT user interfaces in both French and English languages, thus facilitating access and management of the provided services. The CLIENT, for their part, commits to respecting the legal and regulatory constraints in force related to the data they entrust to the Provider for processing.

In the event of the transmission of data subject to specific legal requirements, the Provider will collaborate with the CLIENT to identify and implement the necessary security measures, in accordance with the obligations of the Provider and within the framework of the service provision.

The Provider also commits to reviewing and taking into consideration the specific needs related to the CLIENT's industry sectors, respecting the limitations of its liability, to ensure an adequate level of security for the information processed.

If a project is likely to impact the security of the service offered, the Provider commits to inform the CLIENT of the potential impacts, the envisaged corrective measures, and the residual risks, ensuring total transparency.

The Provider guarantees that it will not use the CLIENT's data for testing purposes without prior and explicit consent from the CLIENT and commits to anonymizing and protecting the confidentiality of these data during their processing.

In the event of a change in subcontractor for hosting, the Provider will inform the CLIENT beforehand, ensuring that this transition does not negatively affect the provided service.

At the CLIENT's request, the Provider will provide access to its internal regulations, its code of ethics, the applicable sanctions in case of non-compliance with its security policy, the events concerning it, the procedures related to the service, and the specific security requirements.

### 12.2. Limitation of Liability of the Provider
The shared responsibility model effectively reduces the scope of the Provider's intervention to aspects related to the provision of a functional RedHat OpenShift platform, including:

- The management of the IaaS infrastructure that supports the RedHat OpenShift platform and its provisioning,
- The management of systems necessary for the proper functioning of the platform,
- The maintenance of security conditions,
- The updating of the RedHat OpenShift platform,
- The backup of essential configuration data of this platform, with the exception of the CLIENT's data and applications, which are the responsibility of the CLIENT.

It specifically excludes, but is not limited to:

- The update of operating systems and software installed by the CLIENT on its OpenShift environments within its rental spaces,
- The security of programs, software, and applications installed within the OpenShift environment by the CLIENT,
- The backup of data at the application level,
- The configuration of backup policies.

### 12.3. Access Limitation
Under the terms of this service agreement, the Provider is explicitly prohibited from accessing the CLIENT's tenants without prior authorization. 
It is the CLIENT's responsibility to provide the necessary access to the Provider's personnel, according to the specific needs of the hosting and, 
if applicable, professional support services, if this option has been selected by the CLIENT.

The CLIENT acknowledges that these accesses are granted exclusively for the needs related to the agreed service provision,
ensuring secure management in compliance with the terms of the agreement.

Remote access by third parties involved in the service provision of the Provider is strictly prohibited. 
In the event that a specific technical requirement necessitated such access, it could only be established 
after clearly notifying the CLIENT, providing a detailed justification, and obtaining their written agreement.

This measure ensures the control and security of the CLIENT's data, by ensuring that any exception to the rule is duly authorized and documented.

## 13. Data Deletion at the End of the Contract

Upon the contract's termination, whether it reaches its conclusion or is terminated for any reason, the Provider commits to the secure deletion of the entirety of the Client's data, including technical data. The Provider will ensure to issue a formal notice to the CLIENT, respecting a period of twenty-one (21) calendar days. The CLIENT's data will then be deleted within a maximum period of thirty (30) days following this notification.

To attest to this deletion, the Provider will provide the Client with a certificate confirming the data erasure.

## 14. Applicable Law
The applicable law for this service agreement is French law.