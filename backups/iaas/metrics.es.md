---
title: Metrología IaaS
---

La metrología en la infraestructura __'IaaS'__ permite visualizar los gráficos de rendimiento, así como el consumo eléctrico.

Los conceptos asociados con [la metrología en la consola Cloud Temple están descritos aquí](../console/metrics.md).

Los datos están disponibles desde el panel de control y desde un nuevo menú llamado Salud.

![](images/shiva_metrics_home.png)

Un menú que permite visualizar el estado de salud de las máquinas virtuales a través de los datos de rendimiento.

![](images/shiva_metrics_health.png)

Visualice en detalle los datos de rendimiento

![](images/shiva_metrics_vm_graf.png)

Aunque ponemos a disposición paneles de control que permiten visualizar las métricas de rendimiento de nuestros productos, también proporcionamos un proxy para que pueda visualizar en sus herramientas.
Si desea utilizar su propio Grafana, puede hacerlo siguiendo este tutorial.
[Configurar una fuente de datos Grafana](../console/howto.md#etape-7--configurer-la-console-shiva-en-tant-que-datasource-dans-grafana)

__*Nota* :__

``` Se requiere el permiso metrics_read para acceder a las métricas```

``` Tenga en cuenta que es importante tener sus ESX actualizados a la última versión, de lo contrario, las métricas de consumo pueden ser incorrectas.```