---
título: Desplegar un firewall de código abierto pfSense
---
Esta guía le ayudará a desplegar su __firewall de código abierto pfSense__ en el Cloud de Confianza en solo unos minutos.

## Prerrequisitos
Los requisitos para esta guía son los siguientes:

1. Haber suscrito a la oferta Cloud Temple: debe contar con su organización, su tenant y sus accesos,
2. Tener los derechos sobre el módulo compute.

Este documento describe los pasos a seguir para desplegar un firewall virtual pfSense.

## Desplegar un firewall opensource pfSense
[pfSense](https://www.pfsense.org) es un proyecto de código abierto basado en freeBSD que permite establecer un firewall virtual.

Un firewall pfSense se administra a través de una interfaz web, por lo tanto, es necesario disponer de una segunda máquina con una interfaz gráfica que tenga una dirección IP en la misma red LAN que el firewall para poder configurarlo.

Necesitaremos un conjunto de dos VM:

- la primera será la máquina en la cual vamos a desplegar el firewall
- la segunda será la máquina desde la cual vamos a administrar el firewall.

### Solicitar una entrega de acceso a internet
La primera etapa consiste en recuperar [las informaciones de acceso a internet aquí](https://docs.cloud-temple.com/network/internet/#gestion-de-vos-connectivites-internet). Usted debe tener la siguiente información:

- prefijo público
- prefijo de interconexión
- gateway anycast
- rango IP
- AS local
- AS de Cloud Temple
- temporizadores de keepalive y el temporizador hold-time
- las direcciones de los route servers

### Instalación y configuración de red de las interfaces
Puede luego desplegar su máquina virtual pfSense:

1. __Instalación del firewall__ desde la plantilla de pfSense en shiva:
    - [(Desplegar a través de la consola)](../iaas/quickstart_iaas_template.md#déployer-une-machine-virtuelle-depuis-un-template)
    - [(Desplegar vía Terraform)](../iaas/quickstart_iaas.md#déployer-une-machine-virtuelle-via-terraform).
2. __Configuración de las interfaces LAN y WAN__ del firewall: la interfaz WAN debe estar en su vLAN de internet, su dirección IP será asignada dentro del rango de direcciones IP que le ha sido comunicado por el CDS, así como la GW por defecto.
3. __Instalación de la segunda máquina__ de administración.
4. __Configuración de la interfaz__ de la máquina virtual de administración: esta máquina debe estar en la misma red que la que se configuró la interfaz LAN del firewall.

### Acceso al Firewall
Una vez que las dos VM estén correctamente instaladas, el segundo paso consiste en acceder al firewall para comenzar su configuración.

- acceder a la interfaz web del firewall desde la vm de gestión:

![](images/pfsense/pfsense_webui.png)
- inicio de sesión por defecto:
    - nombre de usuario : *admin*
    - contraseña : *pfsense* (recuerde cambiar la contraseña por defecto)
  
![](images/pfsense/pfsense_home_page.png)
### Configuración del firewall
Esta etapa implica configurar los vecinos BGP del FW.

- en primer lugar, piensen en permitir el Flujo BGP en TCP 179 en __'Firewall > Reglas'__:

![](images/pfsense/pfsense_bgp_rule.png)

- Vayan a __'servicios > FRR BGP'__ para comenzar la configuración de su sesión BGP:

![](images/pfsense/pfsense_frr_package.png)

- Marquen las dos primeras casillas e indiquen el número de su AS local y los tiempos tal como se les ha comunicado por el CDS.

![](images/pfsense/pfsense_general_conf.png)

### Configuración de los vecinos BGP

En Neighbors, haga clic en +Add para comenzar a crear sus vecinos BGP.

- Para cada vecino: ingrese su dirección IP en __'Opciones Generales > Nombre/dirección'__

![](images/pfsense/pfsense_neighbor_conf.png)

  - ingrese el AS remoto (correspondiente al número de AS de cloud temple) en opciones básicas como sigue:

![](images/pfsense/bgp_basic_options.png)

  - y finalmente en la opción Avanzada, haga lo siguiente:

![](images/pfsense/ebgp_conf.png)

  - marque la casilla que define el tipo de su vecino. En nuestro caso, es ``un servidor de rutas``:

![](images/pfsense/route_server_neighbor.png)

  - al final, no olvide guardar sus cambios haciendo clic en __'save'__:
  
![](images/pfsense/neighbors_overview.png)

### Verificación del estado de la sesión BGP con los vecinos
En Status, puede ver el estado de la sesión BGP que acaba de configurar

![](images/pfsense/pfsense_bgp_status.png)

Asegúrese de que el __Estado BGP__ esté en __established__.

### Anunciar su prefijo público
Para anunciar su prefijo público, puede crear rutas en /32 y realizar la redistribución de forma estática:

- en __*System > Routing > Static Routes*__ : cree sus rutas estáticas en /32 colocando la Puerta de enlace en Null4 - 127.0.0.1
- en __*Services > FRR package > BGP > Network Distribution*__ : active la ``redistribución`` local seleccionando IPV4 en ``Redistribute`` FRR static routes.