---
title: Domande frequenti riguardo l'offerta PaaS Openshift
---

## Il provider Terraform Cloud Temple copre l'offerta Openshift?
No, l'API di OpenShift è aperta, il che permette una grande flessibilità e integrazione con diversi strumenti e servizi. Si raccomanda di utilizzare il provider ufficiale di OpenShift per assicurare compatibilità e supporto ottimali. Utilizzando il provider Terraform ufficiale, è possibile automatizzare e gestire efficacemente le risorse OpenShift, inclusi i cluster, i progetti, i ruoli, le autorizzazioni, ecc.

## Se i componenti hardware a livello della piattaforma come servizio (PaaS) diventano obsoleti e è necessaria una migrazione verso nuove risorse di calcolo, quali sono le procedure da seguire e chi è responsabile di tale migrazione ?
La migrazione è gestita da Cloud Temple senza costi aggiuntivi per il cliente e senza interruzioni di servizio (zero downtime).

## Qual è il numero medio di pod per nodo worker in un cluster OpenShift?

In generale, potete fare un parallelo con il numero di macchine virtuali e di CPU virtuali su un hypervisor. Il numero ottimale di pod per worker nell'offerta OpenShift è simile al modo in cui si determina il numero di macchine virtuali che un hypervisor può gestire in funzione del numero di CPU virtuali disponibili. Dipende anche dal tipo di nodo worker che avete implementato.

Il numero massimo di pod per nodo (worker) è spesso configurato a 250, ma ciò deve essere [aggiustato in base alle esigenze specifiche dell'applicazione e alle risorse disponibili](https://docs.openshift.com/container-platform/4.16/nodes/nodes/nodes-nodes-managing-max-pods.html). Il parametro **podsPerCore** può essere utilizzato per definire il numero di pod che un nodo può eseguire in funzione del numero di core del processore. Ad esempio, se **podsPerCore** è impostato a 10 e il nodo ha 4 core, allora il massimo dei pod sarà 40.

Potete consultare [questa guida RedHat per avere i massimi di Openshift](https://docs.openshift.com/container-platform/4.16/scalability_and_performance/planning-your-environment-according-to-object-maximums.html).

## È possibile avere un ambiente di Test sull'offerta PaaS Openshift Cloud Temple?
Tempio della Nuvola non offre un test o laboratorio accessibile liberamente per la sua offerta PaaS OpenShift. Tuttavia, è possibile utilizzare [le piattaforme dedicate di RedHat](https://www.redhat.com/fr/technologies/cloud-computing/openshift/try-it) a questo scopo.

## Il Load Balancer integrato nella piattaforma PaaS Openshift può funzionare da WAF?

Sì, il bilanciatore di carico integrato nell'offerta PaaS OpenShift non è progettato per funzionare come un Web Application Firewall (WAF). Tuttavia, è prevista un'offerta di WAF come servizio (WAF as a Service) per il secondo semestre del 2025.