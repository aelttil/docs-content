---
title: Questions fréquentes concernant l'offre PaaS Openshift
---

## Le provider Terraform Cloud Temple couvre-t-il l'offre Openshift ?

Non, l'API d'OpenShift est ouverte, ce qui permet une grande flexibilité et intégration avec divers outils et services. Il est recommandé d'utiliser le provider officiel d'OpenShift pour assurer une compatibilité et un support optimal. En utilisant le provider Terraform officiel, vous pouvez automatiser et gérer efficacement les ressources OpenShift, y compris les clusters, les projets, les rôles, les autorisations, etc.

## Si les composants matériels au niveau de la plateforme en tant que service (PaaS) deviennent obsolètes et qu'une migration vers de nouvelles ressources de calcul est nécessaire, quelles sont les procédures à suivre et qui est responsable de cette migration ?

La migration est prise en charge par Cloud Temple sans coût supplémentaire pour le client et sans interruption de service (zéro temps d'arrêt).

## Quel est le nombre moyen de pods par nœud worker dans un cluster OpenShift ?

Globalement, vous pouvez faire un parallèle avec le nombre de machines virtuelles et de CPU virtuels sur un hyperviseur. Le nombre optimal de pods par worker dans l'offre OpenShift est similaire à la manière dont on détermine le nombre de machines virtuelles qu'un hyperviseur peut gérer en fonction du nombre de CPU virtuels disponibles. Il dépend aussi du type de nœud worker que vous avez déployé.

Le nombre maximum de pods par node (worker) est souvent configuré à 250, mais cela est à [ajuster en fonction des besoins spécifiques de l'application et des ressources disponibles](https://docs.openshift.com/container-platform/4.16/nodes/nodes/nodes-nodes-managing-max-pods.html). Le paramètre **podsPerCore** peut être utilisé pour définir le nombre de pods qu'un nœud peut exécuter en fonction du nombre de cœurs de processeur. Par exemple, si **podsPerCore** est fixé à 10 et que le nœud a 4 cœurs, alors le maximum de pods sera 40​. 

Vous pouvez consulter [ce guide RedHat pour avoir les maximums d'Openshift](https://docs.openshift.com/container-platform/4.16/scalability_and_performance/planning-your-environment-according-to-object-maximums.html).

## Est il possible d'avoir un environnement de Test sur l'offre PaaS Openshift Cloud Temple ?

Cloud Temple ne propose pas d'offre de test ou de laboratoire en libre accès pour son offre PaaS OpenShift. Cependant, il est possible d'utiliser [les plateformes dédiées de RedHat](https://www.redhat.com/fr/technologies/cloud-computing/openshift/try-it) à cette fin.

## Le Load Balancer intégré à la plateforme PaaS Openshift peut il servir de WAF?

Non, le load balancer intégré à l'offre PaaS OpenShift n'est pas conçu pour fonctionner comme un Web Application Firewall (WAF). Cependant, une offre de WAF en tant que service (WAF as a Service) est prévue pour le second semestre 2025.