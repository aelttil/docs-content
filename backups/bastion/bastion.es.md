---
title: Vista general
---

## ¿Qué es el Bastion Cloud Temple?

El Bastion Cloud Temple es un servicio administrado que le brinda conectividad segura de RDP o SSH desde la consola Cloud Temple a sus infraestructuras físicas y virtuales, ya sea que estén en la Nube de confianza, en una Nube pública o en sus propias instalaciones. La solución Bastion permite administrar sus equipos sin exponerlos a Internet. 

![](images/bastion.svg)

## Ventajas
| Ventaja                 |                                                                              Descripción                                                                               |   
|------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Gestión centralizada    |                                              El Bastion Cloud Temple es accesible directamente desde el portal Shiva.                                               |   
| Seguridad               | Los equipos administrados a través del Bastion no están expuestos a Internet, lo que los protege especialmente del escaneo de puertos realizado por usuarios maliciosos. |  
| Infraestructura como Código |          Las APIs permiten administrar completamente el Bastion Cloud Temple "como código" (creación de sesión, conexión, modificación y eliminación de sesión).          |   

## Referencias (SKU)
| Referencia                          |   Unidad   |           SKU           |  
|------------------------------------|:---------:|:-----------------------:|
| ADMINISTRACIÓN - Bastion SSH & RDP | 1 Sesión | cmp:bastion:session:std | 

## Conceptos
### El Appliance Bastion

El Appliance Bastion es una máquina virtual desplegada en proximidad a sus equipos. Este Appliance permite establecer un flujo seguro y directo desde la plataforma Shiva a los equipos que se desean administrar, los cuales se encuentran en la misma red virtual. 

El flujo está cifrado y encapsulado en un túnel VPN. La solución no requiere abrir un flujo desde Internet hacia sus infraestructuras. Solo es necesario que el Appliance tenga acceso a la IP pública del módulo Shiva Bastion en el puerto 443.

Un Appliance se puede utilizar para establecer una conexión rápida con un equipo. En cada conexión, se debe especificar el protocolo deseado, la dirección IP de la máquina y sus credenciales. Para evitar tener que ingresar esta información en cada conexión, es posible crear sesiones asociadas a los equipos que se administran regularmente.

### Las Sesiones

Una sesión es una configuración de conexión a un equipo a través de un Bastion. Consiste en definir un equipo a administrar y el Appliance que se utilizará para que transite el flujo, lo que permite conectarse más rápidamente a dicho equipo. 

Esta solución es adecuada cuando se realiza una conexión regular a un equipo a administrar. La información esencial se guarda, solo se requieren las credenciales al momento de la conexión.
