---
title: Console Overview
---

## The Cloud Temple Console

The Cloud Temple console is Cloud Temple's integrated cloud management platform (**Cloud Management Platform**). It serves as the central point for managing all your cloud resources, providing you with a unique and powerful interface.

Thanks to the **Console**, you can supervise and operate your cloud infrastructures with great simplicity. Here is an overview of its main features:

### Management of your Cloud Temple products and services
The console allows you to effectively manage your virtual servers, storage, networks, and Cloud services from a centralized interface.

### Monitoring and reporting
Benefit from a comprehensive view of your resources thanks to integrated monitoring and reporting tools, ensuring that your environments are operating optimally.

### Automation and orchestration
With its **powerful API**, the console simplifies the automation of repetitive tasks and the orchestration of complex workflows. Deploy, manage, and scale your resources with a few clicks or through custom scripts.

### Security and Compliance
The console integrates advanced features to:
- Manage identities and access,
- Filter access to meet regulatory requirements,
- Strengthen your security policies.

### Multi-cloud Integration
Thanks to its hybrid capabilities, the console facilitates the management of multi-cloud environments by integrating third-party services such as **Microsoft Azure** and **Amazon AWS**, all through a single interface.

### Technical Support and Customer Service
The console provides direct access to your technical support cases. You benefit from:
- Dedicated customer support to resolve your technical issues,
- Assistance with the initial setup of your services.

### Professional Services
Need expertise? Benefit from the support of our engineers for:
- Personalized advice,
- Assistance in implementing cloud architectures,
- Training for your teams.

The Cloud Temple __'Shiva'__ console is __the integrated cloud management platform__ of __Cloud Temple__.

The Cloud Temple Shiva console allows you to manage cloud resources such as virtual servers, storage, networks, and application services. It is a centralized management interface that enables you to design and operate your cloud infrastructure.

In particular, the Cloud Temple Shiva console allows your teams to:

- __Manage your Cloud Temple products and services__,
- __Monitor and report__ on the operation of your cloud resources.
- __Automation and Orchestration__: Shiva, through its API, allows for the automation of repetitive tasks and the orchestration of complex workflows to deploy, manage, and scale your cloud resources,
- __Security and Compliance__: Shiva enables identity control and access filtering to ensure regulatory compliance and adherence to your security policies,
- __Integration of Cloud Adoption Frameworks__: Thanks to its hybridization functions, you can ensure operational continuity with third-party cloud providers (Microsoft Azure and Amazon AWS) from a single interface, facilitating the integration and management of your multi-cloud application environments.
- __Access and tracking of technical support files__: Dedicated technical support is also available. This includes customer support for resolving technical issues as well as assistance with initial setup.
- __The ability to subscribe to professional services__: To effectively manage your Cloud environments, your teams can benefit from the assistance of our engineers for consulting, help with architecture implementation, or training.

## Prerequisites
- Have subscribed to a Cloud Temple offer. To subscribe simply, you can [contact us](https://www.cloud-temple.com/contactez-nous/) or by email at __contact@cloud-temple.com__.
- Have access to the Shiva console
- Have your public IPv4 declared in the Cloud Temple trust zone (access to the Shiva console is limited to identified trusted addresses)

## Connecting to your Cloud Temple tenant
Shiva can be accessed via the URL below:
https://shiva.cloud-temple.com
    Or from the direct URL that was communicated to you by email.

The first page allows you to select the [organization](organisations.md) in which your user was created.
Once the company is specified, please click on __'Log in'__.

![](images/shiva_login.png)

You will then be redirected to a page asking you to authenticate.
Once logged in, you arrive at this page.

![](images/shiva_home.png)

## Language Management
The console is available in __French__, __English__. You can change the operating language using the __language__ icon located at the top right of the screen.

The language change for a user is to be made in their __'Profile'__, at the top right of the screen, in the __'User Settings'__.

![](images/shiva_profil_006.png)

The configuration is done for each tenant [Tenant](tenants.md).

## Access to Technical Support
At any time, you can contact the __Cloud Temple support team__ via the __'lifebuoy' icon__ located at the top right of the screen.

![](images/shiva_support.png)

You will be guided throughout the entire support request process.

The first step is to identify the type of support request:

- Request advice on the use of a product (excluding incidents),
- Request assistance related to your customer account,
- Report an incident or request technical support.
- Request assistance from a professional service (provision of a Cloud Temple engineer for a specific issue).

![](images/shiva_support_01.png)

You then have the opportunity to provide further details and include files (such as images or logs).

![](images/shiva_support_02.png)

Once your request is made, it is possible to find your requests via the __'lifebuoy' icon__ located at the top right of the screen:

![](images/shiva_support_03.png)

## Access to user features via the web interface

All the features accessible to your user (depending on their permissions) are located on the left side of the screen, in the green banner. 
The features are grouped by module. This mainly includes:

- The __inventory__ of your resources,
- The __tracking of operations__,
- The __management of IaaS resources__ (Compute, storage, network, ...)
- The __management of OpenIaaS resources__ (Compute, storage, network, ...)
- Access to __ancillary services__ (Bastion, monitoring, ...)
- The __administration of your organization__ (Management of tenants, rights, ...)

The activation of a module for a user depends on the user's rights. For example, the __'Order'__ module will not be available if the user does not have the __'ORDER'__ right.

Here is a presentation of the different available modules. New modules are regularly added to the console:

![](images/shiva_onboard_007.png)
- __Dashboard__: provides a quick overview of the __total computing and storage resources__, backup statistics, and a __summary of support tickets__,
- __Inventory__: provides a view of all your __'virtual machine'__ type resources. If __tags__ are used, it allows for a view by __tag__ (for example, business view, application view, etc.),
- __Managed Services__: provides access to the tracking of your __support requests__ and the __metrics of services__,
- __IaaS__: allows for the __management of VMware IaaS infrastructures__ (Virtual machines, clusters, hypervisors, replications, backup, etc.),
- __OpenIaaS__: allows for the __management of Xen Orchestra resources__ (Virtual machines, backup, etc.),
- __OpenShift__: allows for the management of your **RedHat Openshift PaaS architecture** and the management of your containers across the 3 availability zones of the platform.
- __Bastion__: Allows the deployment and management of SSH/RDP bastion appliances in your networks,
- __Network__: Allows the management of __level 2 and 3 networks__, __public IPs__, and your __telecom circuits__,
- __Colocation__: Provides a view of the equipment located in __shared or dedicated colocation areas__,
- __Order__: Allows the ordering of resources and tracking of deployments,
- __Administration__: Groups together user and tenant administration functions as well as access to global logging.

## Access to user features via the API

Access to all the features of the Shiva console is possible via the Shiva API. You can get the details of the verbs and configurations via __'Profile'__ and __'APIs'__:

![](images/shiva_onboard_008.png)

## Terraform Provider

Cloud Temple provides you with a Terraform provider to manage your Cloud platform *"as code"*. It can be accessed here:
https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest

## Going Further

We now propose to understand the operation of:

- An organization: [My Organization](organisations.md)
- User accounts: [My Accounts](accounts.md)
- Tenants associated with this organization: [My Tenants](tenants.md)