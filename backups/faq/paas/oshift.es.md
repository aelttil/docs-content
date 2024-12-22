---
título: Preguntas frecuentes sobre la oferta PaaS Openshift
---

## ¿El proveedor Terraform Cloud Temple cubre la oferta Openshift?
No, la API de OpenShift es abierta, lo que permite una gran flexibilidad e integración con diversos herramientas y servicios. Se recomienda utilizar el proveedor oficial de OpenShift para asegurar una compatibilidad y soporte óptimo. Al utilizar el proveedor oficial de Terraform, puede automatizar y gestionar eficazmente los recursos de OpenShift, incluidos los clústeres, los proyectos, los roles, los permisos, etc.

## Si los componentes de hardware a nivel de la plataforma como servicio (PaaS) se vuelven obsoletos y es necesario migrar hacia nuevos recursos de cómputo, ¿cuáles son los procedimientos a seguir y quién es responsable de esta migración?
La migración está gestionada por Cloud Temple sin costo adicional para el cliente y sin interrupción de servicio (cero tiempo de inactividad).

## ¿Cuál es la cantidad promedio de pods por nodo de trabajo en un clúster OpenShift?


En general, puede trazar un paralelo con el número de máquinas virtuales y de CPU virtuales en un hipervisor. El número óptimo de pods por trabajador en la oferta de OpenShift es similar a cómo se determina el número de máquinas virtuales que un hipervisor puede manejar en función del número de CPU virtuales disponibles. También depende del tipo de nodo trabajador que haya implementado.

El número máximo de pods por nodo (trabajador) a menudo se configura en 250, pero esto debe [ajustarse de acuerdo con las necesidades específicas de la aplicación y los recursos disponibles](https://docs.openshift.com/container-platform/4.16/nodes/nodes/nodes-nodes-managing-max-pods.html). El parámetro **podsPerCore** se puede usar para definir el número de pods que un nodo puede ejecutar en función del número de núcleos del procesador. Por ejemplo, si **podsPerCore** está fijado en 10 y el nodo tiene 4 núcleos, entonces el máximo de pods será 40.

Puede consultar [esta guía de RedHat para conocer los máximos de Openshift](https://docs.openshift.com/container-platform/4.16/scalability_and_performance/planning-your-environment-according-to-object-maximums.html).

## ¿Es posible tener un entorno de Prueba en la oferta PaaS Openshift de Cloud Temple?

Cloud Temple no ofrece pruebas gratuitas o laboratorio de acceso público para su oferta PaaS OpenShift. Sin embargo, es posible utilizar [las plataformas dedicadas de RedHat](https://www.redhat.com/fr/technologies/cloud-computing/openshift/try-it) para este propósito.

## ¿El Load Balancer integrado en la plataforma PaaS OpenShift puede funcionar como un WAF?
No, el balanceador de carga integrado en la oferta PaaS OpenShift no está diseñado para funcionar como un Firewall de Aplicaciones Web (WAF, por sus siglas en inglés). Sin embargo, se espera una oferta de WAF como servicio (WAF as a Service) para el segundo semestre de 2025.