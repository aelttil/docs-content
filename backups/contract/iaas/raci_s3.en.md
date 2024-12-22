---
title: IaaS Responsibility Matrix - S3 Object Storage
---

Here is the RACI of the responsibility sharing between the client and Cloud Temple for the use of the Cloud Temple S3 Object Storage platform.

## Definition of different roles
It is important to recall the various roles within the RACI framework:

| Role         | Description                                  |
|--------------|----------------------------------------------|
| (R) Responsible | R__esponsible for performing the process     |
| (A) Accountable | A__ccountable for process approval           |
| (C) Consulted   | C__onsulted during the process               |
| (I) Informed    | I__nformed of the process outcomes           |

## Define Your Requirement

| Activity                                                                            | Client Role | Cloud Temple Role |
|----------------------------------------------------------------------------------|-------------|-------------------|
| Validate that S3 Object Storage product meets the application's requirements      | __RA__      | __CI__            |
| Subscribe to the service with the necessary information                           | __RA__      | __I__             | 

## Implement the Service

| Activity                                                                                    | Client Role | Cloud Temple Role |
|---------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure the operational maintenance of the S3 Object Storage platform                        | __I__       | __RA__            | 
| Ensure the security maintenance of the S3 Object Storage platform                           | __I__       | __RA__            | 
| Create objects                                                                              | __RA__      |                   | 
| Create access keys and assign associated rights                                             | __RA__      |                   |

## Recurring Operations
| Activity                                                                         | Client Role | Cloud Temple Role |
|-----------------------------------------------------------------------------------|-------------|-------------------|
| Ensure operational maintenance of the S3 Object Storage platform                  | __I__       | __RA__            | 
| Ensure the security maintenance of the S3 Object Storage platform                 | __I__       | __RA__            | 
| Ensure the accessibility of the S3 Object Storage service                         | __I__       | __RA__            |
| Preserve and make available the logs of the S3 Object Storage platform            |             | __RA__            |
| Monitor the proper functioning of the S3 Object Storage platform                  | __I__       | __RA__            |
| Track the lifecycle of objects                                                    | __RA__      |                   | 
| Track the lifecycle of permissions on objects                                     | __RA__      |                   |
| Manage logical security of objects                                                | __RA__      |                   |
| Manage incidents on the S3 Object Storage service                                 | __I__       | __RA__            |
| Manage problems on the S3 Object Storage service                                  | __I__       | __RA__            |
| Manage capacity on the S3 Object Storage service                                  | __I__       | __RA__            |
| Manage changes on the S3 Object Storage service                                   | __I__       | __RA__            |

## Encryption Management

| Activity                                                                                      | Client Role | Cloud Temple Role |
|-----------------------------------------------------------------------------------------------|-------------|-------------------|
| Manage data encryption before deployment to the S3 Object Storage service                     | __RA__      |                   |
| Manage encryption on the storage space allocated by the S3 Object Storage service             | __A__       | __R__             | 

## Business Continuity

| Activity                                                                                   | Client Role | Cloud Temple Role |
|--------------------------------------------------------------------------------------------|-------------|--------------------|
| Ensure the business continuity of the S3 object storage service                            | __I__       | __RA__             |
| Ensure data backup                                                                         | __RA__      |                    |
| Perform periodic data restoration tests                                                    | __RA__      |                    | 
| Maintain the business continuity and disaster recovery plan for applications               | __RA__      |                    | 

## Reversibility

| Activity                                                                                  | Client Role | Cloud Temple Role |
|-------------------------------------------------------------------------------------------|-------------|-------------------|
| Implement the reversibility project (planning, tools, methodologies, targets, ...)        | **AR**      |                   |
| Export data from the S3 Object Storage service                                           | **AR**      |                   |
| Delete data on the S3 Object Storage service                                             | **AR**      |                   |
| Destroy storage media at end of life or in error                                         |             | **AR**            |