---
title: Automatisierung mit Terraform
---

Dieser Leitfaden ermöglicht es Ihnen, Ihre ersten Instanzen in weniger als 5 Minuten in der Trusted Cloud bereitzustellen.


## __Voraussetzungen__
1. Abonnement für die Cloud Temple (Abonnement für die IaaS-Offerte)
2. Berechtigungen für den IaaS-Objekttreiber aktiviert haben

## Bereitstellung einer virtuellen Maschine mit Terraform
In diesem Abschnitt werden wir sehen, wie Sie in wenigen Minuten eine virtuelle Maschine in der Trusted Cloud über den Terraform Cloud Temple Provider bereitstellen können. 
Falls Sie den Cloud Temple Provider noch nicht verwendet haben, folgen Sie den Anweisungen unter folgender Adresse, um ihn zu installieren und sich bei Ihrem Tenant anzumelden:

    https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest/docs.

Wir werden damit beginnen, eine .tf-Datei zu erstellen, die die zu bereitende Instanz beschreibt.
Das folgende Skript ermöglicht es Ihnen, eine virtuelle Maschine von Grund auf bereitzustellen. 


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

Die in diesem Skript verwendeten Parameter sind wie folgt:

    - datacenter_id (erforderlich): Datacenter, in dem die virtuelle Maschine bereitgestellt wird
    - host_cluster_id (erforderlich): Cluster, in dem die virtuelle Maschine bereitgestellt wird
    - name (erforderlich) : Name der Maschine
    - memory: Der Maschine zugewiesener RAM-Speicher
    - cpu: Anzahl der der Maschine zugewiesenen vCPUs
    - num_cores_per_socket: Anzahl der Kerne pro Socket
    - datastore_cluster_id: Datastore, mit dem die Maschine verbunden ist
    - guest_operating_system_moref: Betriebssystem der Maschine

Weitere Parameter können bei der Bereitstellung einer virtuellen Maschine angewendet werden. Eine vollständige Liste dieser Parameter finden Sie auf der folgenden Terraform-Dokumentationsseite: 

    https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest/docs/resources/compute_virtual_machine


Nachdem Sie die .tf-Datei erstellt und gespeichert haben, führen Sie den folgenden Befehl aus, um Ihren Code zu überprüfen:

    terraform validate

Planen Sie dann die Bereitstellung und überprüfen Sie, ob der Plan Ihren Anforderungen entspricht:

    terraform plan

Schließlich können Sie die virtuelle Maschine mit dem folgenden Befehl bereitstellen:

    terraform apply

##Verwenden von cloud-init zur Konfiguration einer virtuellen Maschine, die mithilfe des Terraform Providers bereitgestellt wurde

Das Tool __'cloud-init'__ ermöglicht die Anpassung einer virtuellen Maschine oder einer Cloud-Instanz beim ersten Start. Es handelt sich um einen Standard, der weit verbreitet ist.
Weitere Informationen finden Sie in der Dokumentation: https://cloudinit.readthedocs.io/en/latest/

###Kompatibilität

Um mithilfe von cloud-init eine virtuelle Maschine zu konfigurieren, die mithilfe des Terraform Cloud Temple-Providers bereitgestellt wurde, muss das **OVF** (Open Virtualization Format), das für die Bereitstellung verwendet wird, mit **cloud-init** kompatibel sein.

Überprüfen Sie mit dem folgenden Befehl, ob Ihre virtuelle Maschine mit cloud-init kompatibel ist:

`systemctl status cloud-init.service`

Wenn cloud-init ordnungsgemäß auf der Maschine installiert ist, sehen Sie eine Antwort wie diese. (Siehe untenstehende Screenshots)

![img](images/status_cloud_init.png)

Wenn erforderlich, können Sie cloud-init-kompatible Abbilder im Internet finden (z.B. [Ubuntu Cloud Image](https://cloud-images.ubuntu.com/)) oder cloud-init vor der Konvertierung in ein OVF auf Ihrer Maschine installieren.


###Bereitstellung

Nun, da Sie sicher sind, dass das bereitgestellte OVF mit cloud-init kompatibel ist, finden Sie hier ein Beispiel für eine Terraform-Datei (.tf), die Sie verwenden können, um Ihre virtuelle Maschine zu konfigurieren.
Hinweis: Alle hier gezeigten Beispiele finden Sie im `examples`-Ordner des Terraform Cloud Temple-Provider-Repositories hier: https://github.com/Cloud-Temple/terraform-provider-cloudtemple/tree/main/examples

####`main.tf`

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

####`network-config.yml`
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

####`user-data.yml`
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

Das interessante Element hier ist das Vorhandensein der cloud-init-Eigenschaft, die aus zwei Untereigenschaften besteht: **network-config** und **user-data**.

Diese gehören zu einer Gruppe von 7 Eigenschaften, die Sie verwenden können, um Ihre virtuelle Maschine mit cloud-init zu konfigurieren.

* **user-data**: Dieser Wert muss in Base64 codiert sein und enthält unter anderem Konfigurationsinformationen für Benutzerkonten der virtuellen Maschine. Sie können auch Skripte hinzufügen, um Pakete zu installieren oder zu aktualisieren.
* **network-config**: Dieser Wert muss in Base64 codiert sein und enthält insbesondere Netzwerkkonfigurationsinformationen für die virtuelle Maschine.
* **public-keys**: Gibt an, dass die Instanz die 'authorized_keys' des Standardbenutzers mit diesem Wert füllen soll.
* **instance-id**: Ermöglicht die Festlegung einer eindeutigen Instanz-ID für cloud-init.
* **password**: Wenn definiert, wird das Standardbenutzerpasswort auf diesen Wert festgelegt, um eine passwortbasierte Verbindung zu ermöglichen. Das Passwort ist nur für eine Verbindung gültig. Wenn der Wert 'RANDOM' ist, wird ein zufälliges Passwort generiert und auf der Konsole angezeigt.
* **hostname**: Gibt einen Hostnamen für die bereitgestellte Instanz an.
* **seedfrom**: Legt eine URL fest, auf der cloud-init die zu verwendenden Konfigurationsdateien abrufen soll.
Für weitere Informationen zur Funktionsweise von cloud-init lesen Sie bitte die offizielle Dokumentation. https://cloudinit.readthedocs.io/en/latest/

###Ausführung

Um die erfolgreiche Ausführung von cloud-init zu überprüfen, sollten Sie sich mit dem Benutzer anmelden können, den Sie in der `user-data.yml`-Datei konfiguriert haben, oder der Hostname sollte zu dem festgelegt werden, den Sie in `hostname` angegeben haben.

Bei Problemen können Sie die cloud-init-Protokolle über den folgenden Befehl überprüfen:

`sudo cat /var/log/cloud-init-output.log`

Sie sollten verschiedene Informationen zur Ausführung von cloud-init sehen. Im folgenden Screenshot können Sie sehen, dass die Netzwerkkonfiguration erfolgreich durchgeführt wurde.

![](images/cloud-init-output.png)
