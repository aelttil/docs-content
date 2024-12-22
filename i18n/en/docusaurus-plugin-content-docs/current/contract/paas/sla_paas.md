---
title: PaaS Service Agreement
---

**Table of Contents**

- [1. Framework](#1-framework)
- [2. Acronyms](#2-acronyms)
- [3. Glossary](#3-glossary)
- [4. Purpose of the Provider's PaaS Service Agreement](#4-purpose-of-the-provider's-paas-service-agreement)
- [5. Evolution of the PaaS Service Agreement](#5-evolution-of-the-paas-service-agreement)
- [6. Audit](#6-audit)
- [7. Service Description](#7-service-description)
- [8. Service Implementation](#8-service-implementation)
  - [8.1. Description of Technical Components](#81-description-of-technical-components)
    - [8.1.1. REDHAT OpenShift Service Platform](#811-redhat-openshift-service-platform)
    - [8.1.2. Software Infrastructure for Managing the Redhat Openshift Platform](#812-software-infrastructure-for-managing-the-redhat-openshift-platform)
    - [8.1.3. Associated Backup Infrastructure](#813-associated-backup-infrastructure)
    - [8.1.4. Implementation of business recovery or continuity solutions](#814-implementation-of-business-recovery-or-continuity-solutions)
- [9. Commitments and service levels](#9-commitments-and-service-levels)
  - [9.1. Availability commitments of the RedHat OpenShift platform](#91-availability-commitments-of-the-redhat-openshift-platform)
- [10. Applicable shared responsibility model](#10-applicable-shared-responsibility-model)
  - [10.1. Responsibility and Obligations of the Provider](#101-responsibility-and-obligations-of-the-provider)
  - [10.2. Limitation of Provider's liability](#102-limitation-of-providers-liability)
  - [10.3. Access limitation](#103-access-limitation)
- [11. Data deletion at the end of the contract](#11-data-deletion-at-the-end-of-the-contract)
- [12. Applicable law](#12-applicable-law)


## 1. Framework

|           |                        |
| --------- | ---------------------- |
| Reference | CT.AM.JUR.ANX.PAAS 2.0 |
| Date      | March 13, 2024         |

## 2. Acronyms

| Acronym    | Description                                                                                                 |
| ----------- | ----------------------------------------------------------------------------------------------------------- |
| CAB         | Change Advisory Board – Advisory committee on changes                                                       |
| CMDB        | Configuration Management Database – Database for configuration management                                   |
| COPIL       | Steering Committee                                                                                          |
| COSTRAT     | Strategic Committee                                                                                         |
| DB          | Database                                                                                                   |
| DRP         | Disaster Recovery Plan                                                                                     |
| GTI         | Intervention Time Guarantee                                                                                 |
| GTR         | Resolution Time Guarantee                                                                                   |
| GTE         | Escalation Time Guarantee                                                                                   |
| HYPERVISOR  | Operating system that allows the execution of VMs on a compute blade                                       |
| ITIL        | Information Technology Infrastructure Library - Best practices for information systems management           |
| IAAS        | Infrastructure as a Service                                                                                 |
| MCO         | Operational Maintenance                                                                                     |
| MOA         | Project Ownership                                                                                           |
| MOE         | Project Management                                                                                          |
| OS          | Operating System                                                                                            |
| PAQ         | Quality Assurance Plan                                                                                      |
| PAAS        | Platform as a Service                                                                                       |
| SDM         | Service Delivery Manager                                                                                    |
| RFC         | Request For Change – Request for change                                                                     |
| RGPD        | General Data Protection Regulation (personal)                                                               |
| RPO         | Recovery Point Objective – Freshness of restored data in case of disaster                                   |
| RTO         | Recovery Time Objective – Service recovery time in case of disaster                                         |
| SLA         | Service Level Agreement – Agreement on service levels                                                       |
| UO          | Work Unit                                                                                                   |
| VABF        | Operational Suitability Validation                                                                          |
| VABE        | Operational Exploitability Validation                                                                       |
| VM          | Virtual Machine                                                                                             |
| VSR         | Regular Service Validation                                                                                  |
| SNC         | SecNumCloud                                                                                                |

## 3. Glossary

The expressions used in this document should be interpreted in accordance with the definitions attributed to them below:
| Expression                                          | Definition                                                                                                                                                                                                                                                                             |
| "Secure Temple"                                     | The term "Secure Temple" refers to the Infrastructure as a Service (IaaS) offering, qualified as SecNumCloud, provided by the company Cloud Temple.                                                                                                                          |
| Region                                              | A "region" in the context of cloud computing refers to a geographically bounded set of cloud availability zones, <br/>providing network, compute, and storage services to optimize latency, performance, <br/>and local regulatory compliance.
| Availability Zone<br/>(AZ) | A specific and isolated section of the cloud computing infrastructure, designed to ensure high availability and resilience of services through geographical distribution of resources. |
| Tenant | An isolated instance reserved for a user or group of users, sharing a common infrastructure while maintaining the independence and security of data and applications. |
| Expression               | Definition                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Incident                 | An "incident" refers to any unexpected event that disrupts the normal operation of a system or compromises the security of data and infrastructure.                                                                                                                                                                                                                                                                                             |
| Problem                  | A "problem" is a fundamental cause of one or more incidents, identified or suspected, requiring analysis and resolution to prevent its recurrence.                                                                                                                                                                                                                                                                                             |
| Change                   | A "change" refers to any modification made to the IT environment, aimed at improving or correcting systems, processes, or services.                                                                                                                                                                                                                                                                                                               |
| standard change          | A "standard change" is a pre-approved, low-risk, repetitive modification that follows an established procedure in the IT environment.                                                                                                                                                                                                                                                                                                             |
| Production Deployment       | Administrative action(s) for implementing the change when it is approved <br/>(the change, in the ITIL sense, only concerns change management and not its realization/concretization).                                                                                                                                                                                                                                      |
| Service Request       | Request for evolution subject to a procedure, the realization of which: <br/> i) does not modify the CMDB,<br/>ii) the operating mode, costs, and risks are known and accepted in advance and do not require specific rollback procedures<br/> iii) the realization is subject to a service level agreement and included in the contract fee when it is carried out during working hours and working days. |
| Configuration Item | A "Configuration Item" is an identifiable component of the information system, such as software, hardware, or a document,<br/> subject to management within the framework of IT service management |
| Service            | A "service" is a means of delivering value to customers by facilitating desired outcomes without them having to manage <br/>specific costs and risks                                                                                                 |

| Event                    | An "event" is any detectable or identifiable occurrence in a computer system or network, which may be significant for IT service management                                                                                                                                                                                                                                                                           |
| Disaster                 | A "disaster" refers to an unforeseen damaging event causing material, financial, or data losses for a CLIENT                                                                                                                                                                                                                                                                                                            |
| Service Agreement    | This document, established within the framework of a specific contract or General Terms and Conditions of Sale and Use (GTC), in compliance with the requirements of the SecNumCloud standard.                                                                                                                                                                                                                                                   |
| Availability         | The ability to ensure the availability and optimal performance of a service, in accordance with the criteria and commitments defined in the Service Level Agreements (SLA)                                                                                                                                                                                                                                                    |
| Supervision              | Monitoring of an Information System or Service, involving the collection of various data such as measurements and alarms. <br/>This activity is limited to observation and tracking, without directly intervening on the monitored elements, a prerogative that belongs to Administration operations.                                                                                                                        |

## 4. Purpose of the Service Provider's PaaS Service Level Agreement

This Service Level Agreement establishes the terms and conditions under which the Service Provider commits to deliver to the CLIENT an infrastructure 
in accordance with the specifications of the "Platform as a Service – PaaS" offer, duly qualified as SecNumCloud.

Purpose of the Service Level Agreement:

1. Specify the performance requirements expected by the CLIENT in terms of functionality and reliability of the infrastructure.
2. State the obligations of the Service Provider in order to meet the agreed service levels.
3. Identify the regulatory standards specifically applicable to the proposed infrastructure.
4. Ensure uniformity and integrity in the evaluation of the quality of services rendered.
5. Guarantee the excellence of the services provided, evaluated through quantitative performance indicators.

It is stipulated that, in the event the Service Provider loses its SecNumCloud qualification, the present Contract may be terminated by right, without incurring penalties, by the CLIENT. 
In such an eventuality, the Service Provider commits to inform the CLIENT of this disqualification by sending an official notification, through a registered letter with a request for acknowledgment of receipt.

It should be noted that a modification or adjustment of the SecNumCloud qualification will not be interpreted as a revocation of the initial qualification.
## 5. Evolution of the PaaS Service Agreement

Modifications or additions to this service agreement exclusively result from requests made by the designated governance bodies. 
These proposed changes will be reviewed within the strategic committee, the only body authorized to determine aspects requiring written formalization.

It is agreed that any evolution of the agreement, after validation, which alters the initially established financial conditions, will require the establishment and signature of an amendment to the ongoing contract.

Factors that may induce a revision of this agreement include, but are not limited to:

- The adaptation of the PaaS platform orchestrated by the Provider.
- Adjustments made to the services deployed by the Provider.
- Variations in the commitments made and applicable sanctions.
- Organizational reconfigurations within the CLIENT or the Provider.
- The expansion or reduction of the scope of services to which the CLIENT has subscribed.

The management of versions and revisions of the agreement is recorded in the preamble of the document to facilitate tracking.

## 6. Audit 

The Provider commits to allowing the CLIENT, or any third-party auditor designated by the latter, to consult all documents necessary to attest to the full compliance with the obligations related to conformity with the provisions of Article 28 of the General Data Protection Regulation (GDPR), thus facilitating the conduct of audits.

**The Provider specifically commits to making available to the CLIENT the list of all third parties who can access the data and to inform them of any changes in subcontractors.**

By accepting this service agreement, the CLIENT gives explicit authorization to:
1. __The National Agency for the Security of Information Systems (ANSSI)__ as well as the competent qualification entity to undertake the verification of the Service and its Information System's compliance with the standards defined by the SecNumCloud Reference System.
2. __An information system security audit provider__, duly qualified and expressly designated by the Provider, to successfully carry out security audits on the Service delivered by the Provider.

## 7. Service Description

The service offering proposed by the Provider is characterized by the provision of the following services, 
which align with the shared responsibility principle detailed in the standards established by the SecNumCloud reference system:

- The provision of a Redhat Openshift container management platform managed by the Provider.
It is understood that the Provider will mobilize its expertise to perform the Services according to the best professional practices, in accordance with their Specifications and in compliance with the standards of its ISO/IEC 27001 certification as well as the guidelines of the SecNumCloud Reference System.

## 8. Implementation of the service

It is specified that all operations and all physical components involved in the provision of the qualified service, which is the subject of this agreement, are located in the European Union. This includes notably support, operational supervision, and security supervision (SOC).

### 8.1. Description of technical components 

The PaaS (Platform as a Service) service encompasses all the components and services required for its optimal operation in compliance with the SecNumCloud qualification.
In this regard, their performance and reliability are intrinsically linked to the technical components and services of the Provider's **IaaS infrastructure**, as specified in the Provider's [IaaS Service Agreement](../iaas/sla_iaas.md) document.

#### 8.1.1. REDHAT OpenShift Service Platform

The service encompasses the provision within a region, across 3 availability zones,

#### 8.1.2. Software Infrastructure for Managing the Redhat Openshift Platform

The Provider provides the CLIENT with the administration console and the API necessary for the operation of their RedHat OpenShift PaaS environments. 
They also commit to maintaining them in optimal operational condition and to continuously ensure their security.
In the specific context of the service provided, the Provider makes available to the CLIENT all the interfaces and APIs of the RedHat OpenShift platform within the selected tenant. It is the CLIENT's responsibility to establish appropriate security measures, such as firewalls, Web Application Firewalls (WAF), and other protective measures, as well as to define the associated filtering rules to secure access to their platform in accordance with their security policy.

The Provider alerts the Client that abnormal use of their administration console, particularly in the event of overloading their command APIs (hammering), can trigger automatic security measures resulting in the blocking of access to the command APIs or certain services of the Provider. It should be emphasized that this situation does not constitute a service unavailability but a protective action of the Provider's Infrastructure.
Therefore, the Client cannot consider it as downtime in their calculations.

Furthermore, the Provider informs the Client that perfectly identical (duplicate) requests sent to its APIs are limited to one per second (Throttling).
If the Client submits identical requests at a higher frequency, their rejection should not be interpreted as a service unavailability.

#### 8.1.3. Associated Backup Infrastructure

The Provider makes available to the CLIENT an integrated, dedicated, and managed backup platform, intended for the protection of data from their RedHat Openshift environments.
The Provider ensures the operational and security maintenance of this integrated backup platform.
Regardless of the number of availability zones subscribed by the CLIENT, the Provider guarantees that the CLIENT's backup platform will be located outside of the availability zone of the backed-up workloads.
The backup service is limited to the backup of virtual machines and topology configurations of the CLIENT's SecNumCloud IaaS environment. 
The development and implementation of an adequate backup policy by the CLIENT depends on the subscription to specific work units.
It is therefore the CLIENT's responsibility to ensure the availability of the necessary technical resources from the Service Provider
to implement their backup policy or adjust it according to the available means. 

The Service Provider commits to notify the CLIENT in case of capacity constraints and to provide advisory assistance for resource optimization.
The Service Provider's obligations will be limited to the implementation of the backup policy needs expressed by the CLIENT, within the framework of the subscribed resources.

#### 8.1.4. Implementation of business recovery or continuity solutions

The Provider supplies the CLIENT with all the necessary technical solutions to ensure optimal distribution of its resources across various availability zones. It is the CLIENT's responsibility to effectively manage this resource distribution, for which they have the opportunity to utilize the Provider's tools available for this purpose.

In particular, applications deployed on the RedHat OpenShift platform must support the redundancy mechanisms proposed by the Provider in order to benefit from the associated business recovery or continuity solutions.

## 9. Commitments and service levels

The Provider commits to guaranteeing continuous monitoring of the performance and security integrity of its platforms and services, ensuring their optimal operation.
The unavailability of a service, subject to a performance indicator, is acknowledged as soon as it is identified by the Provider's supervision system, 
or following a notification by a CLIENT user. The start of the unavailability is set at the earliest time between these two events, 
to ensure an accurate and fair count of the downtime.

The end of the unavailability is officially marked by the full restoration of the service, confirmed either by the Provider's supervision tools, 
or by user feedback, thus ensuring an effective resumption of operations and an accurate measurement of the interruption duration.

### 9.1. RedHat OpenShift Platform Availability Commitments

The Provider commits to maintaining a level of availability and performance in accordance with the standards defined for each specified period.
Service Level Agreements (SLAs) apply provided that the CLIENT implements their systems across at least two of the availability zones present in the relevant region.

If the CLIENT does not comply with these conditions, they will be unable to claim the application of the relevant SLAs, which are specifically identified by an asterisk (*). Access to the SLAs is via the CLIENT interface. **Measurements are calculated monthly**:

- **SLA 1 (*) : IC-PAAS_SNC-01** – Availability of the RedHat OpenShift platform: guaranteed availability rate of 99.9%, calculated on a 24/7 basis.

_**Notes**_ : 

- *In response to a Distributed Denial of Service (DDoS) attack, the Provider reserves the right to adjust its internet routing configuration to
to limit the impact of this attack and safeguard its infrastructure. In particular, if an IP address belonging to the CLIENT is targeted, the Provider may resort to the blackholing technique 
via the BGP community to block all traffic to the targeted IP address upstream at its suppliers, with the aim of protecting the CLIENT's resources as well as those of other clients 
and the Provider's infrastructure. The Provider strongly encourages the CLIENT to adopt similar measures, such as the use of commercially available web application firewall software, 
and to carefully configure its security groups via the command API.*

- *The Provider emphasizes the need for the CLIENT to minimize the opening of flows, particularly by avoiding making ports accessible
**SSH** administration (TCP port 22) and **RDP** (TCP port 3389) from the entire Internet (subnet 0.0.0.0/0), as well as internal protocols such as **SMB** (TCP/UDP port 445) or **NFS** (TCP/UDP port 2049).*

## 10. Applicable Shared Responsibility Model

### 10.1. Provider's Responsibility and Obligations

The Provider commits to providing the CLIENT with user interfaces in French and English, thus facilitating access and management of the services provided.
The CLIENT, on their part, commits to complying with the current legal and regulatory constraints related to the data they entrust to the Provider for processing.

In case of data transmission subject to specific legal requirements, the Provider will collaborate with the CLIENT to identify and implement 
the necessary security measures, in accordance with the Provider's obligations and within the scope of service provision.
The Provider also commits to examining and considering the specific needs related to the CLIENT's sectors of activity, respecting the limitations of its liability, to guarantee a level of security appropriate to the information processed.

If a project is likely to impact the security of the service provided, the Provider commits to informing the CLIENT of the potential impacts, the corrective measures envisaged, and the residual risks, ensuring total transparency.

The Provider guarantees that it will not use the CLIENT's data for testing purposes without prior and explicit agreement from the CLIENT, and commits to anonymizing and protecting the confidentiality of this data during its processing.

In the event of a change in subcontractor for hosting, the Provider will inform the CLIENT in advance, ensuring that this transition does not negatively affect the service provided.
Upon the CLIENT's request, the Service Provider will provide access to its internal regulations, ethical charter, applicable penalties in case of non-compliance with its security policy, events concerning it, service-related procedures, and specific security requirements.

### 10.2. Service Provider's Liability Limitation

The shared responsibility structure effectively reduces the extent of the Service Provider's intervention to aspects related to the provision of a functional RedHat OpenShift platform, including:

- The management of the IaaS infrastructure that supports the RedHat OpenShift platform and its provisioning,
- The management of systems necessary for the proper functioning of the platform,
- The maintenance of security conditions,
- The updating of the RedHat OpenShift platform,
- The backup of essential configuration data of this platform, excluding the data and applications of the CLIENT which are their responsibility.
This specifically excludes, but is not limited to:

- Updating operating systems and software installed by the CLIENT on their OpenShift environments in their rental spaces,
- The security of programs, software, and applications installed within the OpenShift environment by the CLIENT,
- Data backup at the application level,
- Configuration of backup policies.

### 10.3. Access Limitation

Under this service agreement, the Service Provider is strictly prohibited from accessing the tenants belonging to the CLIENT without prior authorization. 
It is the responsibility of the CLIENT to provide the necessary access to the Service Provider's staff, according to the specific needs of the hosting and, 
if applicable, professional support services, if this option has been chosen by the CLIENT. 

The CLIENT acknowledges that these accesses are granted exclusively for the needs related to the agreed service provision,
thus ensuring secure and compliant management in accordance with the terms of the agreement.

Remote access by third parties involved in the Provider's service delivery is strictly prohibited. 
In the event that a specific technical requirement would necessitate such access, it could only be established 
after clearly notifying the CLIENT, providing a detailed justification, and obtaining their written consent. 

This measure ensures the control and security of the CLIENT's data, by ensuring that any exception to the rule is duly authorized and documented.

## 11. Data deletion at the end of the contract

At the end of the contract, whether it expires or is terminated for any reason, the Provider commits to securely erase 
all of the Client's data, including technical data. The Provider will ensure to provide the CLIENT with a formal notice,
within a period of twenty-one (21) calendar days. The CLIENT's data will then be deleted within a maximum period of thirty (30) days 
following this notification.

To attest to this deletion, the Provider will provide the Client with a certificate confirming the data erasure.

## 12. Applicable Law

The applicable law for this service agreement is French law.

In the event of recourse by the Provider, within the framework of the services provided to the CLIENT, to a third-party company, including a subcontractor, whose head office, central administration 
or main establishment is located in a non-European Union member state, or which is owned or under the control of a third-party company domiciled outside the European Union,
the Provider undertakes to ensure that said third-party company will have no access to the data processed by the Provider's service.
It should be noted that the targeted data includes those entrusted to the Service Provider by the CLIENT, as well as all technical data such as the identities of the beneficiaries and administrators of the technical infrastructure, the data handled by the networks, the logs of the technical infrastructure, the directory, the certificates, the access configuration, etc., containing information about the CLIENT.

For clarity, the concept of control is defined in accordance with Section II of Article L233-3 of the Commercial Code.