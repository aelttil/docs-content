## Welche Ströme sind für den Betrieb der Appliance erforderlich?

Mehrere Ströme sind erforderlich, um den reibungslosen Betrieb der Bastion-Appliance zu gewährleisten.

### Das Bastion-Gateway
| Quelle | Ziel    | Protokoll |
|--------|---------|-----------|
|Appliance Bastion-Client|91.223.207.71 (botg.shiva.cloud-temple.com)| UDP/4242  |

### RDP-Verwaltungsstrom
| Quelle | Ziel                            | Protokoll |
|--------|---------------------------------|-----------|
|Appliance Bastion-Client|Die zu verwaltenden Instanzen| TCP/3389  |

### SSH-Verwaltungsstrom
| Quelle | Ziel                            | Protokoll |
|--------|---------------------------------|-----------|
|Appliance Bastion-Client|Die zu verwaltenden Instanzen| TCP/22    |
