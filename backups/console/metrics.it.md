---
title: Metrologia generale
---

## Concetto
La maggior parte dei clienti __Cloud Temple__ dispone di strumenti per la visualizzazione, il monitoraggio e la misurazione per il seguimento delle loro operazioni.

La filosofia della console Shiva consiste nell'offrire accesso ai dati per integrarsi in questi strumenti tramite un proxy prometheus integrato.

Questo proxy vi permette di interrogare e manipolare i dati da uno strumento di visualizzazione come [Grafana](https://grafana.com).

Tuttavia, è possibile visualizzare alcune informazioni sulle prestazioni delle vostre risorse Cloud nell'interfaccia web della console Shiva.

*__Nota:__ La filosofia di __Cloud Temple__ non è quella di integrare molti grafici nell'interfaccia web, bensì di fornire il massimo delle informazioni accessibili tramite l'API*

## Quadro comandi integrato nell'interfaccia web
*__Nota :__ Per accedere a queste dashboard, è necessario disporre del diritto __'metric_read'__*

### Monitoraggio delle emissioni di carbonio per il calcolo

Il cruscotto della console Shiva include di default un grafico per il monitoraggio del consumo elettrico del vostro calcolo e la stima delle emissioni di carbonio associate.

È direttamente accessibile nella pagina iniziale dell'interfaccia web della console Cloud Temple, cliccando su __'Metric'__:

![](../metrics/images/metrics_hypervisors_co2.png)

### Panoramica sulla salute delle macchine virtuali
La sintesi dello stato delle macchine virtuali è accessibile nel menu __'IaaS'__ sulla sinistra del vostro schermo, nel sottomenu __'Salute'__ e poi __'Macchine virtuali'__

Questa sintesi fornisce, per l'intervallo di tempo selezionato in __'Filtri'__:

- il numero di CPU e la __media dell'utilizzo CPU__,
- il numero di Go di memoria e la __media dell'utilizzo della memoria__,
- Le medie di __latenza di accesso allo storage__ in lettura e in scrittura,
- Il __'CPU Ready'__ medio della macchina virtuale (che corrisponde al tempo medio di attesa della disponibilità di un core fisico da parte della macchina virtuale).

![](images/shiva_metric_000.png)

Per ogni VM, potete accedere alla cronologia delle sue prestazioni cliccando sull'icona verde __'Cronologia'__ della macchina virtuale nella colonna azione.:

![](images/shiva_metric_003.png)

Avrete allora accesso alla pagina di visualizzazione grafica dei dati storici, inclusa una vista __performance ambientale__:

![](images/shiva_metric_001.png)

![](images/shiva_metric_002.png)

## Utilizzo con __Grafana__
È possibile per la console Shiva di servire da __datasource__ per la vostra infrastruttura [Grafana](https://grafana.com).

Qui potrete trovare un esempio di configurazione [di una datasource Grafana dalla console Shiva](howto.md#etape-7--configurer-la-console-shiva-en-tant-que-datasource-dans-grafana).

Potrete trovare una serie di __esempi di configurazione per Grafana__ qui:

https://github.com/Cloud-Temple/console-grafana-iaas

![](images/grafana_dashboards_003.png){:height="50%" width="50%"} e

![](images/grafana_dashboards_004.png){:height="50%" width="50%"} 

![](images/grafana_dashboards_002.png){:height="50%" width="50%"}
