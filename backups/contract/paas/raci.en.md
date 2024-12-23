---
title: PaaS Responsibility Matrix
---

Here is the RACI model defining the distribution of responsibilities between the client and Cloud Temple for the use of Cloud Temple's PaaS platforms.

## Definition of Different Roles

We here recall the different roles within the RACI:

| Role | Description |
| --- | --- |
| (R) Responsible | __R__esponsible for executing the process |
| (A) Accountable | __A__ccountable for the process execution approval |
| (C) Consulted | __C__onsulted during the process |
| (I) Informed | __I__nformed of the process outcomes (via tools, portals, or messaging) |

## Initial Setup
| Activity                                                              | Client Role | Cloud Temple Role |
| --------------------------------------------------------------------- | ----------- | ----------------- |
| Define the overall architecture of the OpenShift platform             | C           | RA                |
| Size the OpenShift platform (number of nodes, resources)              | C           | RA                |
| Install and configure the OpenShift platform                          | I           | RA                |
| Configure the basic network of the OpenShift platform                 | I           | RA                |
| Implement identity and access management for OpenShift                | C           | RA                |
| Define the scaling and high availability strategy                     | C           | RA                |

## Project and Application Management


| Activity                                           | Client Role | Cloud Temple Role |
| -------------------------------------------------- | ----------- | ----------------- |
| Create and manage OpenShift projects               | RA          | C                 |
| Deploy and manage applications in OpenShift        | RA          | C                 |
| Configure CI/CD pipelines                          | RA          | C                 |
| Manage container images and registries             | RA          | C                 |

## Maintenance and Updates

| Activity                                           | Client Role | Cloud Temple Role |
| -------------------------------------------------- | ----------- | ----------------- |
| Update the OpenShift platform                     | I           | RA                |
| Apply security patches to OpenShift               | I           | RA                |
| Update deployed applications                      | RA          | I                 |
| Manage updates for container images               | RA          | I                 |

## Monitoring and Performance

| Activity                                                | Customer Role | Cloud Temple Role |
| ------------------------------------------------------- | ------------- | ----------------- |
| Monitor the performance of the OpenShift platform       | I             | RA                |
| Monitor the performance of applications                 | RA            | I                 |
| Manage platform-related alerts                          | I             | RA                |
| Manage application-related alerts                       | RA            | I                 |

## Security

| Activity                                                          | Client Role | Cloud Temple Role |
| ------------------------------------------------------------------ | ----------- | ----------------- |
| Manage the security of the OpenShift platform                      | I           | RA                |
| Configure and manage security policies for pods                    | RA          | C                 |
| Manage SSL/TLS certificates for the platform                       | I           | RA                |
| Manage SSL/TLS certificates for applications                       | RA          | C                 |
| Implement and manage Role-Based Access Control (RBAC)              | C           | RA                |

## Backup and Disaster Recovery

| Activity                                                              | Client Role | Cloud Temple Role |
| --------------------------------------------------------------------- | ----------- | ----------------- |
| Define the backup strategy for the OpenShift platform                 | C           | RA                |
| Implement and manage the backups for the platform                     | I           | RA                |
| Define the backup strategy for the applications                       | RA          | C                 |
| Implement and manage the backups for the applications                 | RA          | I                 |
| Test the disaster recovery procedures for the platform                | I           | RA                |
| Test the disaster recovery procedures for the applications            | RA          | C                 |

## Support and Problem Resolution

| Activity                                                          | Client Role | Cloud Temple Role |
| ----------------------------------------------------------------- | ----------- | ----------------- |
| Provide level 1 support for the OpenShift platform                | I           | RA                |
| Provide level 2 and 3 support for the OpenShift platform          | I           | RA                |
| Resolve issues related to the platform                            | I           | RA                |
| Resolve issues related to the applications                        | RA          | C                 |

## Capacity Management and Evolution
| Activity                                                        | Client Role | Cloud Temple Role |
| --------------------------------------------------------------- | ----------- | ----------------- |
| Monitor the resource usage of the platform                      | I           | RA                |
| Plan the capacity evolution of the platform                     | C           | RA                |
| Implement capacity changes                                      | I           | RA                |
| Manage the evolution of the applications and their resources    | RA          | C                 |

## Documentation and Compliance

| Activity                                                        | Client Role | Cloud Temple Role |
| ----------------------------------------------------------------| ------------| ------------------|
| Maintain the OpenShift platform documentation                   | I           | RA                |
| Maintain the applications documentation                          | RA          | I                 |
| Ensure platform compliance with security standards              | I           | RA                |
| Ensure applications compliance with security standards          | RA          | C                 |
| Conduct audits of the platform                                  | I           | RA                |
| Conduct audits of the applications                              | RA          | C                 |