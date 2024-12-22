---
title: IaaS Responsibility Matrix - S3 Object Storage
---

Here is the RACI of the shared responsibility between the client and Cloud Temple for the use of the Cloud Temple S3 Object Storage platform.

## Definition of different roles

We recall here the different roles of the RACI:

| Role         | Description                              |
|--------------|------------------------------------------|
| (R) Performs  | __P__erforms the process                 |
| (A) Approves | __A__pproves the process execution |
| (C) Consults | __C__onsulted during the process        |
| (I) Informed  | __I__nformed of the process results   |

## Define your need

| Activity                                                                            | Client Role | Cloud Temple Role |
|----------------------------------------------------------------------------------|-------------|-------------------|
| Validate that the S3 Object Storage product meets the application's needs | __RA__      | __CI__            | 
| Subscribe to the service with the necessary information                    | __RA__      | __I__             | 

## Implement the service

| Activity                                                                           | Client Role | Cloud Temple Role |
|------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure the operational maintenance of the S3 Object Storage platform               | __I__       | __RA__            | 
| Ensure the security maintenance of the S3 Object Storage platform                  | __I__       | __RA__            | 
| Create the objects                                                                 | __RA__      |                   |
| Create access keys and assign associated rights                                    | __RA__      |                   |

## Recurring Operations

| Activity                                                                           | Client Role | Cloud Temple Role |
|------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure the operational maintenance of the S3 Object Storage platform               | __I__       | __RA__            | 
| Ensure the security maintenance of the S3 Object Storage platform                  | __I__       | __RA__            | 
| Ensure the accessibility of the S3 Object Storage service                          | __I__       | __RA__            |
| Preserve and provide the logs of the S3 Object Storage platform                    |             | __RA__            |
| Supervise the proper functioning of the S3 Object Storage platform                 | __I__       | __RA__            |
| Track the lifecycle of objects                                                     | __RA__      |                   | 
| Track the lifecycle of object permissions                                          | __RA__      |                   |
| Manage the logical security of objects                                            | __RA__      |                   |
| Manage incidents on the S3 Object Storage service                                 | __I__       | __RA__            |
| Manage issues on the S3 Object Storage service                                    | __I__       | __RA__            |
| Manage capacity on the S3 Object Storage service                                  | __I__       | __RA__            |
| Manage changes on the S3 Object Storage service                                   | __I__       | __RA__            |

## Encryption Management

| Activity                                                                                 | Client Role | Cloud Temple Role |
|------------------------------------------------------------------------------------------|-------------|-------------------|
| Manage data encryption before deployment on the S3 Object Storage service                 | __AR__      |                   |
| Manage encryption on the storage space allocated by the S3 Object Storage service        | __A__       | __R__             | 

## Business Continuity

| Activity                                                                                  | Client Role | Cloud Temple Role |
|-------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure the continuity of the S3 object storage service                                    | __I__       | __AR__            |
| Ensure data backup                                                         | __RA__      |                   |
| Perform periodic data restoration tests                                    | __RA__      |                   | 
| Maintain the business continuity and disaster recovery plan for applications | __RA__      |                   | 

## Reversibility

| Activity                                                                                  | Client Role | Cloud Temple Role |
|-------------------------------------------------------------------------------------------|-------------|-------------------|
| Implement the reversibility project (planning, tools, methods, targets,...) | __RA__      |                   |
| Export data from the S3 Object Storage service                              | __RA__      |                   |
| Delete data on the S3 Object Storage service                                              | __RA__      |                   | 
| Destroy storage media at end of life or in error                                           |             | __RA__            |