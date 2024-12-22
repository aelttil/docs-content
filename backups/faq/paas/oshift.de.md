---
title: Häufig gestellte Fragen zum PaaS-Angebot Openshift
---

## Deckt der Terraform Cloud Temple-Provider das Openshift-Angebot ab?
Nein, die OpenShift-API ist offen, was eine große Flexibilität und Integration mit verschiedenen Tools und Diensten ermöglicht. Es wird empfohlen, den offiziellen OpenShift-Provider zu verwenden, um eine optimale Kompatibilität und Unterstützung zu gewährleisten. Durch die Verwendung des offiziellen Terraform-Providers können Sie OpenShift-Ressourcen, einschließlich Cluster, Projekte, Rollen, Berechtigungen usw., effektiv automatisieren und verwalten.

## Wenn die Hardwarekomponenten auf der Plattform als Service-Ebene (PaaS) veraltet sind und eine Migration zu neuen Rechnerressourcen erforderlich ist, was sind die zu befolgenden Verfahren und wer ist für diese Migration verantwortlich?
Die Migration wird von Cloud Temple ohne zusätzliche Kosten für den Kunden und ohne Serviceunterbrechung (Null Ausfallzeit) übernommen.

## Wie viele Pods sind im Durchschnitt pro Worker-Knoten in einem OpenShift-Cluster vorhanden?
Generell kann eine Parallele zu der Anzahl an virtuellen Maschinen und virtuellen CPUs auf einem Hypervisor gezogen werden. Die optimale Anzahl an Pods pro Worker in der OpenShift-Plattform ist ähnlich zu ermitteln wie die Anzahl der virtuellen Maschinen, die ein Hypervisor abhängig von der Anzahl verfügbarer virtueller CPUs verwalten kann. Es hängt auch von der Art des Worker-Knotens ab, den Sie eingesetzt haben.

Die maximale Anzahl an Pods pro Knoten (Worker) wird oft auf 250 eingestellt, aber dies muss [je nach den spezifischen Anforderungen der Anwendung und den verfügbaren Ressourcen angepasst werden](https://docs.openshift.com/container-platform/4.16/nodes/nodes/nodes-nodes-managing-max-pods.html). Der Parameter **podsPerCore** kann verwendet werden, um die Anzahl der Pods, die ein Knoten ausführen kann, basierend auf der Anzahl der Prozessorkerne festzulegen. Wenn zum Beispiel **podsPerCore** auf 10 gesetzt wird, und der Knoten 4 Kerne hat, dann wäre das Maximum an Pods 40.

Sie können [diesen RedHat-Leitfaden konsultieren um die Maxima von Openshift zu erfahren](https://docs.openshift.com/container-platform/4.16/scalability_and_performance/planning-your-environment-according-to-object-maximums.html).

## Ist es möglich, eine Testumgebung auf der PaaS-Angebot OpenShift Cloud Temple zu haben?

Cloud Temple bietet kein kostenloses Test- oder Lab-Zugangsangebot für seine PaaS OpenShift-Lösung an. Es ist jedoch möglich, [die dedizierten Plattformen von RedHat](https://www.redhat.com/fr/technologies/cloud-computing/openshift/try-it) zu diesem Zweck zu nutzen.

## Kann der in die PaaS Openshift-Plattform integrierte Load Balancer als WAF dienen?
Nein, der in das PaaS-Angebot von OpenShift integrierte Lastausgleich ist nicht dafür konzipiert, als Web Application Firewall (WAF) zu funktionieren. Allerdings ist ein Angebot für einen WAF als Dienst (WAF as a Service) für das zweite Halbjahr 2025 geplant.