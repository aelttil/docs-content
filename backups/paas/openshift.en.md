---
title: Redhat Openshift
---

Cloud Temple's RedHat Openshift offering is based on an architecture consisting of Openshift and Openshift Data Foundation, spread across 3 availability zones in the FR1-PARIS region.


## Introduction to RedHat Openshift

**Red Hat OpenShift** is an enterprise container platform that automates the deployment, management, and scaling of containerized applications. It is a platform built around Docker, a containerization system that allows packaging an application and its dependencies into a virtual container, and Kubernetes, a container orchestration system that manages the execution and coordination of containers across a cluster of servers.

### Main Features of Red Hat OpenShift:
- **Automated Deployment and Management:** OpenShift simplifies application deployment processes by automating management routines such as scaling, health, and container lifecycle. It provides an integrated environment for developing, testing, and production of applications.

- **Support for Multiple Languages and Services:** The platform supports a wide variety of programming languages (such as Java, Node.js, Python, Ruby, and PHP) and offers integrated services such as messaging, caching, and databases, allowing developers to focus on coding rather than infrastructure.

- **Continuous Integration (CI) and Continuous Deployment (CD):** OpenShift incorporates CI/CD tools that automate the software development pipeline, from initial commit to production deployment, thereby promoting DevOps practices.

- **Operations Management:** OpenShift provides tools for monitoring, performance management, and diagnostics of applications and infrastructure, helping operators maintain the health and performance of systems.

- **Enhanced Security:** The platform is designed with built-in security, featuring role-based access controls, separation of duties, and automated secret management to safeguard applications and data.

### Advantages of Red Hat OpenShift:
- **Flexibility:** Developers can work with the tools, languages, and frameworks of their choice.
- **Operational Efficiency:** OpenShift optimizes the use of resources, reduces the time to market, and enhances developer productivity.
- **Scalability:** The platform automatically manages the scaling of applications to meet fluctuating demand.
- **Security and Compliance:** With its built-in security policies, OpenShift helps maintain security standards and compliance.

Red Hat OpenShift is a comprehensive solution for the development, deployment, and management of containerized applications, offering a robust, secure, and flexible platform for businesses adopting modern software development approaches.

### Red Hat OpenShift Data Foundation

Red Hat OpenShift Data Foundation (ODF) is an integrated data storage and management solution designed to work seamlessly with the OpenShift ecosystem. It provides a persistent, secure, and highly available data infrastructure for containerized applications, thus supporting modern development environments focused on containers and microservices. ODF is designed to simplify and automate data management in hybrid and multi-cloud environments, providing a solid foundation for critical enterprise applications.

#### Key Features of OpenShift Data Foundation:
- **Persistent Storage:** ODF provides a persistent storage layer for containers, essential for enterprise applications such as databases, content management systems, and applications requiring a persistent state.

- **Multicloud and Hybrid:** Designed for hybrid and multicloud environments, ODF enables a consistent data management experience across different cloud environments, facilitating the mobility of applications and data.

- **Automation and Orchestration:** Deep integration with Kubernetes and OpenShift allows ODF to automate provisioning, scaling, and storage lifecycle management in response to application needs.

- **High Availability and Resilience:** ODF utilizes data replication and snapshotting to ensure high availability and durability of data, crucial for the continuity of enterprise operations.

- **Data Security:** The solution incorporates advanced security features, such as encryption of data at rest and in transit, as well as customizable security and compliance policies.

#### Benefits of OpenShift Data Foundation:
- **Operational Flexibility:** ODF allows companies to efficiently manage their data in distributed environments, offering the necessary flexibility to meet the changing requirements of modern applications.

- **Simplification of Data Management:** By automating many data management tasks, ODF reduces complexity and frees up IT resources to focus on higher-value added initiatives.

- **Cost Optimization:** ODF's ability to dynamically adapt to storage needs helps optimize costs by avoiding overprovisioning and utilizing available resources more efficiently.

- **Performance Improvement:** ODF is designed to provide high performance for enterprise applications, with optimization capabilities for different types of workloads.

Red Hat OpenShift Data Foundation is an advanced data storage solution that enhances efficiency, resilience, and security of enterprise applications deployed on OpenShift. By providing persistent, automated, and secure storage, ODF plays a crucial role in empowering businesses to fully leverage the potential of container and hybrid cloud technologies.

## General Architecture of the Platform
### General Information
The Cloud Temple Red Hat OpenShift platform is designed as a regional offering, natively deployed across **three distinct availability zones** within the same Cloud Temple region. This tri-zonal architecture significantly increases data availability and resilience.

The platform consists of a control plane and worker nodes, all managed by the Cloud Temple infrastructure. The control plane is evenly distributed across the three availability zones, ensuring centralized and secure management. Worker nodes, on the other hand, are represented by compute blades, arranged so that each availability zone contains one.

For the worker nodes, several types of compute blades are available, allowing for flexible adaptation to various operational needs:

| Redhat Openshift 4 with Data Foundations - On Demand - 1 month work units                                                   | Unit                    | SKU                                   |
| :------------------------------------------------------------------------------------------------------------------------- | :---------------------- | :------------------------------------ |
| OPENSHIFT – Control plane – 3 nodes – FR1 region                                                                           | 1 dedicated plan        | csp:fr1:paas:oshift:plan:payg:v1      |
| OPENSHIFT - WORKER NODES - TINY - 3 x (10 cores / 20 threads - 64 GB of ram - 512 GB FLASH 1500 iops)                      | 3 dedicated workers     | csp:fr1:paas:oshift:wkr:tiny:payg:v1  |
| OPENSHIFT - WORKER NODES - SMALL - 3 x (20 cores / 40 threads - 128 GB of ram - 512 GB FLASH 1500 iops)                    | 3 dedicated workers     | csp:fr1:paas:oshift:wkr:small:payg:v1 |
| OPENSHIFT - WORKER NODES - STANDARD - 3 x (32 cores / 64 threads - 384 GB of ram - 512 GB FLASH 1500 iops)                 | 3 dedicated workers     | csp:fr1:paas:oshift:wkr:std:payg:v1   |
| OPENSHIFT - WORKER NODES - ADVANCED - 3 x (48 cores / 96 threads - 768 GB of ram - 512 GB FLASH 1500 iops)                 | 3 dedicated workers     | csp:fr1:paas:oshift:wkr:adv:payg:v1   |
| OPENSHIFT - WORKER NODES - PERF - 3 x (56 cores / 112 threads - 1.5 TB of ram - 512 GB FLASH 1500 iops)                    | 3 dedicated workers     | csp:fr1:paas:oshift:wkr:perf:payg:v1  |
| OPENSHIFT - WORKER NODES - GPU - 3 x (32 cores / 64 threads - 512 GB of ram - 512 GB FLASH 1500 iops - 2xNVIDIA L40S 48GB) | 3 dedicated workers + GPUs | csp:fr1:paas:oshift:wkr:gpu:payg:v1   |

Cloud Temple Red Hat OpenShift products are available for pay-as-you-go or for a 12-month reservation.

**Notes**:

1. *The operational and security condition maintenance of the control plane is the responsibility of Cloud Temple under a PaaS service.*

2. *As of June 15, 2024, the version 1 platform is intentionally limited by software to a control plane of 30 worker nodes (regardless of the worker type) and to a global persistent storage of 50 TiB. If these limits are blocking for your project, please contact support.*

3. *Each worker node is delivered with 512 GB of block flash storage, making 1.5 TiB for each work unit (1 worker per AZ).*

4. *The PaaS Openshift offering natively includes access to the 3 availability zones, without the need to subscribe to them additionally.*

5. *It is possible to add block storage to the Openshift cluster at a later time.*

6. *Nodes are deployed in a balanced manner between the 3 availability zones (1 node per zone). It is not possible to unbalance a cluster by assigning a greater number of nodes to a single zone.*

### RedHat offer deployed as part of the Cloud Temple Openshift platform
The platform is a Redhat Openshift 4 based on [RedHat Openshift Platform Plus](https://www.redhat.com/en/technologies/cloud-computing/openshift/platform-plus) and includes [OpenShift DataFoundation Essential](https://www.redhat.com/en/resources/add-capabilities-enterprise-deployments-datasheet).

![](images/oshift_offert.jpg)

## Deploy a Redhat Openshift platform within your tenant

### Assignment of Access Rights
It is essential that the administrator of the [tenant](../console/tenants.md) grants OpenShift platform management rights to the OpenShift administrator user for access:

![](images/oshift_rights.png){:height="70%" width="70%"}

### Access to the OpenShift environment within a tenant

[Please note that I have not translated the URL ../console/tenants.md, the image path (images/oshift_rights.png), or made any changes to the markdown filename with the .md extension as instructed.]
After assigning rights, the '__Openshift__' module then appears in the Cloud Temple console menu:

![](images/oshift_menu_001.png)

You will then see the Openshift clusters that are deployed within your tenant.

Click on the cluster you wish to administer. You will access the cluster's administration environment:

![](images/oshift_menu_002.png)

After authentication, you can administer your cluster:

![](images/oshift_menu_003.png)

## Backup Strategy for your PaaS Openshift Platform

Backup and restoration of the PaaS Openshift platform is the responsibility of Cloud Temple for the **ETCD** component as part of the platform management. **The backup and restoration for the deployment and application data component is the responsibility of the Client**.

RedHat Openshift Platform Plus includes the **Openshift Data Protection API (OADP)** and natively provides **Velero**. Here you will find the complete documentation on the subject (in English): [Backing up and restoring your OpenShift Container Platform cluster](https://docs.redhat.com/en-us/documentation/openshift_container_platform/4.8/html/backup_and_restore/index).

Cloud Temple offers its clients the option of the **Veeam Kasten K10** service (Veeam [**Kasten K10**](https://www.veeam.com/kubernetes-native-backup-and-restore.html)), a platform specialized in data management for Kubernetes environments. Designed to meet data protection needs, it offers robust features for backup, restoration, migration, and disaster recovery. Kasten K10 integrates natively with Kubernetes environments, whether they are managed on cloud clusters or on-premises, and can adapt to various use cases, including the migration of clusters between different Kubernetes distributions such as Vanilla Kubernetes, VMware Tanzu, Red Hat Kubernetes Engine, and Red Hat OpenShift.

One of the major use cases for Kasten K10 is **the migration of clusters between different Kubernetes platforms**. Whether it is for a transition to more robust infrastructure or to consolidate existing environments, Kasten K10 offers simple and efficient tools to manage these migrations:

- **Data backup and protection**: during the migration from a Vanilla Kubernetes or VMware Tanzu cluster to Red Hat Kubernetes Engine or OpenShift, the first step is to back up the application data and their states. Kasten K10 integrates easily with Kubernetes APIs to identify applications, their dependencies, as well as associated data volumes. This includes the backup of persistent volumes (PV), databases, configurations, and secrets. Kasten K10 supports a wide variety of storage providers (S3, Google Cloud Storage, Azure Blob Storage, etc.), enabling the creation of snapshots of the applications to be migrated. These backups are then stored securely with encryption options and granular access control, ensuring data security throughout the process.

- **Portability and migration**: migrating between Kubernetes distributions like Vanilla or Tanzu and Red Hat solutions like OpenShift or Kubernetes Engine can be complex due to architecture differences and specific configurations of each platform. Kasten K10 simplifies this process by providing an abstraction layer for application portability. During migration, Kasten K10 replicates configurations and data from a source cluster to a target cluster, while taking into account the specifics of each environment. For example, Kubernetes objects such as ConfigMaps, Secrets, PVs, and CRDs (Custom Resource Definitions) can be migrated while considering the constraints inherent to each Kubernetes distribution, whether it’s a Red Hat OpenShift or Kubernetes Engine cluster. The process is automated, significantly reducing the risk of manual errors. Furthermore, Kasten K10 allows for a gradual or complete migration, depending on the needs, and offers real-time visibility into the migration status, thus facilitating management and monitoring of the transition.

- **Multi-cloud and multi-distribution compatibility**: Kasten K10 is designed to work in hybrid and multi-cloud environments, making it an ideal tool for organizations looking to migrate applications from Tanzu or Vanilla clusters to Red Hat environments in the cloud (Cloud Temple, Amazon EKS, Azure AKS, Google GKE) or on-premises infrastructures. This ensures maximum flexibility and allows DevOps teams to choose the best environment based on business needs or infrastructure modernization strategies.

- **Simplified management and automation**: Kasten K10 offers an intuitive user interface that allows administrators to easily manage migration and backup operations without in-depth expertise of each Kubernetes platform. The solution is also equipped with automation features that enable the definition of recurring migration and backup policies, integrating with CI/CD pipelines for continuous operations. Users can schedule migrations or restorations based on maintenance windows, conduct post-migration validation tests, and automate failover processes in case of issues with the source cluster.

- **Security and compliance**: in the context of migrations to critical environments like Red Hat OpenShift or Kubernetes Engine, data security and compliance with standards (ISO, SOC, GDPR, etc.) are essential aspects. Kasten K10 ensures encryption of data in transit and at rest, while offering auditing options and traceability of backup and restoration operations. These capabilities are crucial to ensure the security of the migrated data, whether in production or test environments. Kasten K10 is an indispensable solution for businesses looking to migrate Kubernetes Vanilla or VMware Tanzu clusters to Red Hat Kubernetes Engine or OpenShift efficiently and securely.

Billing is based on the number of worker nodes.

| Redhat Openshift 4 with Data Foundations - Worker Node Backup Solution Unit of Work | Unit       | SKU                         |
| :---------------------------------------------------------------------------------- | :--------- | :-------------------------- |
| VEEAM - KASTEN K10 - Kubernetes data protection and application mobility            | 3 workers | csp:fr1:paas:kasten:3wkr:v1 |

**Note**: *Please note that disk volume required for the proper functioning of your backup must be planned in the backup reception environment, usually in S3 storage. It is not included in the Openshift or Kasten workload units.*

**(1)** _OADP is not installed natively in the cluster. Only Kasten is activated for managing migrations, backups, and restoration_

## Rights and Permissions
Here are the main permissions implemented:

|       Group       |         API          |                                                                                             Resource Permissions                                                                                             |
|--------------------|----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|        Core        |       ("")/Apps      | ConfigMaps, Endpoints, PersistentVolumeClaims, Pods, ReplicationControllers, Secrets, Services, DaemonSets, Deployments, ReplicaSets, StatefulSets, Create, Get, List, Watch, Update, Patch, Delete          |
|        Core        |         ("")         |                                                                                                  Secrets Create                                                                                                  |
|config.kio.kasten.io|      Profiles        |                                                                           Get, List, Watch, Create, Update, Patch, Delete                                                                            |
|config.kio.kasten.io| PolicyPresets,       |                                       TransformSets, BlueprintBindings, StorageSecurityContexts, StorageSecurityContextBindings Get, List                                        |
|config.kio.kasten.io|      All             |                                                                                   All resources (*) Get, List                                                                                   |
|       Batch        | CronJobs,            |                                                                       Jobs Create, Get, List, Watch, Update, Patch, Delete                                                                       |
|    Autoscaling     | HorizontalPodAutoscalers |                                                                          Create, Get, List, Watch, Update, Patch, Delete                                                                          |
|     Networking     | Ingresses,           |                                                                 NetworkPolicies Create, Get, List, Watch, Update, Patch, Delete                                                                  |
|       Policy       | PodDisruptionBudgets |                                                                          Create, Get, List, Watch, Update, Patch, Delete                                                                          |
|       Route        |    (OpenShift)       |                                                                        Routes Create, Get, List, Watch, Update, Patch, Delete                                                                       |
|       Build        |    (OpenShift)       |                                                      BuildConfigs, Builds, BuildLogs Create, Get, List, Watch, Update, Patch, Delete                                                       |
|       Image        |    (OpenShift)       |                                                       ImageStreams, ImageStreamTags Create, Get, List, Watch, Update, Patch, Delete                                                        |
|        Apps        |    (OpenShift)       |                                                             DeploymentConfigs Create, Get, List, Watch, Update, Patch, Delete                                                             |
|      Template      |    (OpenShift)       |                                                        Templates, TemplateInstances Create, Get, List, Watch, Update, Patch, Delete                                                        |
|   Authorization    |       Roles,         |                                                                   RoleBindings Create, Get, List, Watch, Update, Patch, Delete                                                                   |
|        RBAC        |       Roles,         |                                                                   RoleBindings Create, Get, List, Watch, Update, Patch, Delete                                                                   |
|      Project       |    (OpenShift)       |                                                                               Projects Get, Delete, Update, Patch                                                                               |
|     Operators      |   Subscriptions,     |                                   ClusterServiceVersions, CatalogSources, InstallPlans, OperatorGroups Create, Get, List, Watch, Update, Patch, Delete                                   |
|    Cert-Manager    |   Certificates,      |                                             CertificateRequests, Issuers, ClusterIssuers Create, Get, List, Watch, Update, Patch, Delete                                             |
|      Logging       |    (OpenShift)       |                                                   ClusterLogForwarders, ClusterLoggings Create, Get, List, Watch, Update, Patch, Delete                                                   |
|      Storage       |  VolumeSnapshots     |                                                                          Get, List, Watch, Create, Update, Patch, Delete                                                                          |
|        Ceph        |       (Rook)         |                                    CephClusters, CephBlockPools, CephFilesystems, CephObjectStores Create, Get, List, Watch, Update, Patch, Delete                                    |
|       NooBaa       |   BackingStores,     |                                                     BucketClasses, NooBaaAccounts Create, Get, List, Watch, Update, Patch, Delete                                                      |
|    ObjectBucket    | ObjectBucketClaims,  |                                                                 ObjectBuckets Create, Get, List, Watch, Update, Patch, Delete                                                                  |
|        OCS         |    (OpenShift)       |                                               StorageClusters, StorageConsumers Create, Get, List, Watch, Update, Patch, Delete                                               |
|       Local        |      Storage         |                                              LocalVolumes, LocalVolumeDiscoveries Create, Get, List, Watch, Update, Patch, Delete                                              |
|        CSI         |      Addons          |                                                     CSIAddonsNodes, NetworkFences Create, Get, List, Watch, Update, Patch, Delete                                                      |
|      Metrics       |       Pods,          |                                                                                               Nodes Get                                                                                                |
|      Security      | PodSecurityPolicyReviews |                                                                                              Create                                                                                              |
|       Custom       |     Resources        |                                   Various custom resources related to Kasten K10, Keycloak, etc. Create, Get, List, Watch, Update, Patch, Delete                                   |

## Current limitations of the Redhat Openshift offering in the SecNumCloud environment
Here are some limitations induced by the SecNumCloud certification:

### Dedicated Control Plan
Workloads cannot be executed on the control plane due to the inherent restrictions related to resource management and the security of the OpenShift platform on SecNumCloud.

### Prohibition of deploying images with elevated privileges (rootless)
To comply with the security requirements of the SecNumCloud repository, it is mandatory to use unprivileged (rootless) containers.

This approach enhances overall security by preventing any privileged access to containers. Applications requiring privileged containers will need to be modified, as their deployment will not be permitted.

This restriction also extends to Helm Charts and operators that utilize non-rootless images, rendering their deployment impossible within the infrastructure.

### Restrictions on ClusterRole Permissions
As part of our OpenShift offering, we are implementing stringent access rights management at the cluster level, in accordance with SecNumCloud requirements.

This approach entails a limitation of ClusterRoles for our clients, thus restricting certain aspects of the global cluster management. While this measure may initially appear restrictive, it is intended to bolster the security and stability of the infrastructure.

We recognize that this can lead to technical challenges, particularly in the configuration of advanced settings, and potentially implications related to the adaptation of your applications or the acquisition of complementary tools.

Our support team is available to guide and advise you on this matter.

### The SCC context cannot be modified in the SecNumCloud environment
Security Context Constraints (SCC) are subject to strict restrictions and cannot be modified by users. This limitation has significant implications for the deployment and execution of containers.

In practice, this means that the runtime settings of containers, such as system access privileges and Linux capabilities, are predefined and not customizable.

This measure, driven by security requirements, aims to prevent unauthorized access to critical cluster resources. Therefore, applications requiring specific security contexts, especially those requiring privileged access, may encounter obstacles during deployment.

Technically, this may involve revising the application architecture and adapting deployment processes to comply with predefined SCCs. Operationally, this constraint can reduce the flexibility of deployments and increase the management complexity of certain applications within the OpenShift environment, in particular those using Helm Charts or operators that do not adhere to the existing SCCs.

### Limitations of Helm Charts Creating Custom Resource Definitions (CRDs)
To comply with the SecNumCloud qualification, a significant restriction concerns the use of Custom Resource Definitions (CRDs) and custom controllers. This measure, related to rights on the cluster, aims to prevent the deployment of potentially unstable or unauthorized custom resources.

This limitation also applies to operators and Helm Charts, with a direct impact on RBAC rights, as CRDs allow for the extension of the Kubernetes API. Therefore, operators and Helm Charts must undergo a certification chain with our services to ensure their compliance and security.

Custom CRDs, particularly those addressing specific business needs, can be denied in the infrastructure due to the risks they pose to the platform's stability and security. This policy, designed to protect the integrity and reliability of the cluster, only authorizes CRDs from officially certified operators or Helm Charts.

Our support team is available to guide you and advise you on the best practices to adopt in this context.

### No Support for Dynamic IPs for Runners

The OpenShift SecNumCloud platform requires that runners be configured with static IP addresses. This requirement is driven by the need to authorize IPs that manage our Cloud Temple console, which is necessary for the access management tool to the APIs. The authorized IP addresses are also used to access the OpenShift API as well as the administration interfaces for OpenShift and Shiva.

Consequently, the use of dynamic IP addresses is not supported for these components, necessitating the configuration of static IPs in order to ensure security and access to the APIs.

## Load Balancers
The SecNumCloud Openshift environment offers Load Balancing options at different levels to ensure secure and efficient traffic management. The Load Balancer API is accessible via ports 6443 and 443, with security control provided by a whitelist managed by the Cloud Temple console. This API uses a public IP address connected to our backbone, but it is not accessible by default, thus enhancing the security of access.

For private Load Balancing, the environment uses Ingress (nginx) as the default solution, which allows for efficient management of internal traffic. In addition, TCP support is available through the IaaS infrastructure of Cloud Temple, offering additional flexibility for applications that require load balancing at this level.

Regarding the public Load Balancer, level 4 support is provided through Ingress, although there are currently some limitations with the "expose" command. This means that the system is capable of managing TCP and UDP connections reliably while continuing to evolve to offer greater compatibility and flexibility.

## Upcoming Features
The upcoming features in the SecNumCloud environment include multiple enhancements: a custom certificate will be applied at the namespace level, and KubeVirt will be integrated for improved virtual machine management.

Regarding TCP connections, a default range of ports (from 30000 to 32767) will be made available.

The Cloud Temple console will be used for node administration, with planned updates to the OpenShift interface. The addition of nodes will be facilitated by the 'Order' command, while their removal will proceed through a ticket to the professional services.

The interconnection of private PaaS streams to Cloud Temple's IaaS infrastructure will also be possible, enhancing the management of OpenShift outbound streams.

OpenShift IAM integration with the Cloud Temple console is planned, as well as the implementation of Hapee (HAProxy) in front of the public Load Balancer. Lastly, GPU support will be available in OpenShift through the Openshift AI Operator and watsonx.ai, allowing for artificial intelligence applications on the platform.