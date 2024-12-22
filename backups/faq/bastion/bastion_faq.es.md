## ¿Cuáles son los flujos necesarios para el funcionamiento del appliance?

Varios flujos son necesarios para el correcto funcionamiento del appliance Bastion.

### La pasarela bastión
| Fuente | Destino                     | Protocolo |
| ------ | --------------------------- | --------- |
| Appliance bastión cliente | 91.223.207.71 (botg.shiva.cloud-temple.com) | UDP/4242  |

### Flujo de administración RDP
| Fuente | Destino                     | Protocolo |
| ------ | --------------------------- | --------- |
| Appliance bastión cliente | Les instances à administrer               | TCP/3389  |

### Flujo de administración SSH
| Fuente | Destino                     | Protocolo |
| ------ | --------------------------- | --------- |
| Appliance bastión cliente | Les instances à administrer               | TCP/22    |
