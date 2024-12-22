---
title: Frequently Asked Questions about the Openshift PaaS Offering
---

## Does the Terraform Cloud Temple provider cover the Openshift offering?

No, the OpenShift API is open, allowing great flexibility and integration with various tools and services. It is recommended to use the official OpenShift provider to ensure compatibility and optimal support. By using the official Terraform provider, you can automate and manage OpenShift resources effectively, including clusters, projects, roles, permissions, etc.

## If the hardware components at the Platform as a Service (PaaS) level become obsolete and a migration to new computing resources is necessary, what are the procedures to follow and who is responsible for this migration?

Migration is handled by Cloud Temple at no additional cost to the client and without service interruption (zero downtime).

## What is the average number of pods per worker node in an OpenShift cluster?


Overall, you can draw a parallel with the number of virtual machines and virtual CPUs on a hypervisor. The optimal number of pods per worker in the OpenShift offering is similar to how one determines the number of virtual machines a hypervisor can handle based on the number of available virtual CPUs. It also depends on the type of worker node you have deployed.

The maximum number of pods per node (worker) is often configured at 250, but this is to be [adjusted according to the specific needs of the application and the available resources](https://docs.openshift.com/container-platform/4.16/nodes/nodes/nodes-nodes-managing-max-pods.html). The **podsPerCore** parameter can be used to define the number of pods a node can run based on the number of processor cores. For example, if **podsPerCore** is set to 10 and the node has 4 cores, then the maximum number of pods will be 40.

You can consult [this RedHat guide to have the Openshift maximums](https://docs.openshift.com/container-platform/4.16/scalability_and_performance/planning-your-environment-according-to-object-maximums.html).

## Is it possible to have a Test environment on the PaaS Openshift Cloud Temple offering?

Cloud Temple does not offer a free access testing or laboratory environment for its PaaS OpenShift offering. However, it is possible to use [RedHat's dedicated platforms](https://www.redhat.com/fr/technologies/cloud-computing/openshift/try-it) for this purpose.

## Can the integrated Load Balancer in the PaaS Openshift platform serve as a WAF?

No, the load balancer integrated into the OpenShift PaaS offering is not designed to function as a Web Application Firewall (WAF). However, a WAF as a Service offering is planned for the second half of 2025.