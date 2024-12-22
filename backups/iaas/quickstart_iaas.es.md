---
title: Automatización con Terraform
---

Esta guía le permitirá implementar sus primeras instancias en la Nube de Confianza en menos de 5 minutos.


## __Requisitos previos__
1. Haber suscrito a la oferta Cloud Temple (suscripción a la oferta IaaS).
2. Tener los permisos activados para el controlador de objetos __'IaaS'__.

## Implementar una máquina virtual con Terraform
En esta sección, aprenderemos cómo implementar una máquina virtual en la Nube de Confianza utilizando el proveedor Terraform Cloud Temple. 
Si aún no has utilizado el proveedor Cloud Temple, sigue las instrucciones que se encuentran en la siguiente dirección para instalarlo y autenticarte en tu inquilino:
 
    https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest/docs.

Comencemos por crear un archivo .tf que describa la instancia que deseamos implementar.
El siguiente script permite implementar una máquina virtual desde cero.


    data "cloudtemple_compute_virtual_datacenter" "dc" {
      name = "DC-EQX6"
    }

    data "cloudtemple_compute_host_cluster" "flo" {
      name = "clu002-ucs01_FLO"
    }

    data "cloudtemple_compute_datastore_cluster" "koukou" {
      name = "sdrs001-LIVE_KOUKOU"
    }

    resource "cloudtemple_compute_virtual_machine" "scratch" {
      name = "from-scratch"

      memory                 = 8 * 1024 * 1024 * 1024
      cpu                    = 2
      num_cores_per_socket   = 1
      cpu_hot_add_enabled    = true
      cpu_hot_remove_enabled = true
      memory_hot_add_enabled = true

      datacenter_id                = data.cloudtemple_compute_virtual_datacenter.dc.id
      host_cluster_id              = data.cloudtemple_compute_host_cluster.flo.id
      datastore_cluster_id         = data.cloudtemple_compute_datastore_cluster.koukou.id
      guest_operating_system_moref = "amazonlinux2_64Guest"
 
      tags = {
        created_by = "Terraform"
      }
    }

Los parámetros utilizados en este script son los siguientes:

    - datacenter_id (obligatorio): datacenter donde se implementa la máquina virtual
    - host_cluster_id (obligatorio): clúster donde se implementa la máquina virtual
    - name (obligatorio): nombre de la máquina
    - memory: RAM asignada inicialmente a la máquina
    - cpu: número de vCPU asignadas inicialmente a la máquina
    - num_cores_per_socket: número de núcleos por socket
    - datastore_cluster_id: datastore al que está vinculada la máquina
    - guest_operating_system_moref: sistema operativo invitado de la máquina

Se pueden aplicar otros parámetros a una máquina virtual durante su implementación. Puede encontrar todos estos parámetros en la siguiente página de la documentación de Terraform:

    https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest/docs/resources/compute_virtual_machine

Una vez que haya creado y guardado el archivo .tf, ejecute el siguiente comando para validar su código:

    terraform validate

Luego, planifique la implementación y verifique que el plan coincida con lo que desea realizar:

    terraform plan

Finalmente, implemente la máquina virtual ejecutando el siguiente comando:

    terraform apply

## Utilizar cloud-init para configurar una máquina virtual implementada desde el proveedor Terraform

La herramienta __'cloud-init'__ permite personalizar una máquina virtual o una instancia en la nube durante su primer inicio. Es un estándar ampliamente utilizado.
Para obtener más información, consulte la documentación: https://cloudinit.readthedocs.io/en/latest/

### Compatibilidad

Para poder configurar una máquina virtual implementada desde el proveedor Terraform Cloud Temple a través de cloud-init, la **OVF** utilizada para implementarla debe ser **compatible** con **cloud-init**.

Para verificar la compatibilidad de su máquina virtual con cloud-init, ejecute el siguiente comando:

`systemctl status cloud-init.service`

Si cloud-init está instalado correctamente en la máquina, debería ver una respuesta como esta. (Consulte la captura de pantalla a continuación)

![img](images/status_cloud_init.png)

Si es necesario, puede encontrar imágenes compatibles con cloud-init en Internet (por ejemplo, [Ubuntu Cloud Image](https://cloud-images.ubuntu.com/)) o instalarlo usted mismo en su máquina antes de convertirla en OVF.


### Implementación

Ahora que estás seguro de que la OVF implementada es compatible con cloud-init, aquí tienes un ejemplo de archivo terraform (.tf) que puedes usar para configurar tu máquina virtual.
NOTA: Todos los ejemplos mostrados aquí se pueden encontrar en la carpeta "examples" del repositorio del proveedor Terraform Cloud Temple aquí: https://github.com/Cloud-Temple/terraform-provider-cloudtemple/tree/main/examples

#### `main.tf`

```HCL
resource "cloudtemple_compute_virtual_machine" "ubuntu-cloud-init" {
  name = "ubuntu-cloud-init"

  memory                 = 8 * 1024 * 1024 * 1024
  cpu                    = 2
  num_cores_per_socket   = 1
  cpu_hot_add_enabled    = true
  cpu_hot_remove_enabled = true
  memory_hot_add_enabled = true

  datacenter_id   = data.cloudtemple_compute_virtual_datacenter.TH3S.id
  host_cluster_id = data.cloudtemple_compute_host_cluster.CLU001.id
  datastore_id    = data.cloudtemple_compute_datastore.DS003.id

  content_library_id      = data.cloudtemple_compute_content_library.local.id
  content_library_item_id = data.cloudtemple_compute_content_library_item.ubuntu-cloudimg.id

  power_state = "on"

  backup_sla_policies = [
    data.cloudtemple_backup_sla_policy.sla001-daily-par7s.id,
    data.cloudtemple_backup_sla_policy.sla001-weekly-par7s.id,
  ]

  cloud_init = {
    network-config = filebase64("./cloud-init/network-config.yml")
    user-data      = filebase64("./cloud-init/user-data.yml")
  }
}
```

#### `network-config.yml`
```YAML
#cloud-config
network:
  version: 2
  ethernets:
    eth0:
      dhcp4: false
      addresses:
        - 172.16.100.192/24
      gateway4: 172.16.100.1
      nameservers:
        addresses:
          - 172.16.11.4
```

#### `user-data.yml`
```YAML
#cloud-config
users:
  - default
  - name: terraform
    primary_group: users
    shell: /bin/bash
    sudo: ['ALL=(ALL) NOPASSWD:ALL']
    groups: sudo
    lock_passwd: false  
    plain_text_passwd: password
```

Lo interesante aquí es la presencia de la propiedad cloud-init, que consta de dos sub-propiedades: **network-config** y **user-data**.

Estas hacen parte de un conjunto de 7 propiedades que puedes utilizar para configurar tu máquina virtual con cloud-init.

* **user-data**: Este valor debe codificarse en base64 y contiene información de configuración para las cuentas de usuario de la máquina virtual. También puedes agregar scripts para instalar o actualizar paquetes.
* **network-config**: Este valor debe codificarse en base64 y contiene información de configuración de red para la máquina virtual.
* **public-keys**: Indica que la instancia debe completar las 'authorized_keys' del usuario predeterminado con este valor.
* **instance-id**: Permite definir un identificador único de la instancia para cloud-init.
* **password**: Si se define, la contraseña del usuario predeterminado se establecerá en este valor para permitir la autenticación basada en contraseña. La contraseña solo será válida para una única conexión. Si el valor es 'RANDOM', se generará y mostrará una contraseña aleatoria en la consola.
* **hostname**: Especifica un nombre de host para la instancia implementada.
* **seedfrom**: Permite definir una URL donde cloud-init buscará los archivos de configuración que debe utilizar.
Para obtener más información sobre cómo funciona cloud-init, consulte la documentación oficial: https://cloudinit.readthedocs.io/en/latest/

### Ejecución

Para verificar que cloud-init se haya ejecutado correctamente, deberías poder iniciar sesión con el usuario que configuraste en el archivo user-data.yml o el nombre de host debería cambiar según el valor que especificaste en 'hostname'.

Si tienes problemas, puedes verificar los registros de cloud-init utilizando el siguiente comando:

`sudo cat /var/log/cloud-init-output.log`

Deberías ver varias información sobre la ejecución de cloud-init. En la siguiente captura de pantalla, se puede observar que la configuración de red se realizó correctamente.

![](images/cloud-init-output.png)
