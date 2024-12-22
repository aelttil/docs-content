---
title: Deployment from a Template
---

This guide will allow you to deploy your first instances on the Confiance Cloud in less than 5 minutes.

## Prerequisites
1. Have subscribed to the Cloud Temple offer (subscription to the IaaS offer).
2. Have permissions enabled for the 'IaaS' object driver.

## Deploying a virtual machine from a Template
This guide shows you step by step how to deploy a virtual machine from a Template in the Shiva console.

On the Shiva portal, go to the "Confiant Cloud" tab, then "Catalogs". Before you can deploy a Template, it must be loaded into your private catalog, in the "My Catalog" tab.

To do this, you have two options: import your own Template directly into your private catalog, or import a template from the public catalog of Cloud Temple.

### Importing a personal Template into the private catalog
In the "My Catalog" tab, click on "Publish files".

![](images/shiva_catalogs_charger.png)

Then follow the steps to publish the Template, by entering its name and a description, and choosing its location in a library.

The Template should then appear in your private catalog.

### Importing a Template from the public catalog
In the "Public Catalog" tab, click on the "Add to my catalog" button for the Template of your choice to import it into your private catalog. It should then appear in your private catalog.

![](images/shiva_catalogs_ajout.png)

### Deploying the Template
Once the Template is imported into your private catalog, you can deploy it by clicking on "Deploy".

![](images/shiva_catalogs_deployer.png)

Then follow the different steps to deploy the resource, selecting its physical location (datacenter, compute cluster, datastore), and other optional configuration parameters.
