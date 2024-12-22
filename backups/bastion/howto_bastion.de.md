---
title: Tutorials
---

Diese Tutorials helfen Ihnen dabei, ein Bastion Cloud Temple über das Shiva-Portal zu implementieren und zu verwalten.

## Voraussetzungen
1. Ein Abonnement des Cloud Temple Angebots abgeschlossen haben (Bastion Appliance Abonnement).
2. Die zu verwaltenden Geräte müssen vom Netzwerk aus erreichbar sein, auf dem die Bastion Appliance eingesetzt ist.
3. Berechtigungen für das Bastion-Modul besitzen.
4. Im Falle der Implementierung einer Onpremise Appliance müssen die entsprechenden Datenflüsse geöffnet sein.

## Schnittstelle
Sobald Sie im Webportal Shiva angemeldet sind, besuchen Sie den Reiter "Bastion" im linken Menü.

![](images/sessions.png)

Der Reiter "Geräte" ermöglicht es Ihnen, die Liste Ihrer Geräte einzusehen. Ein Gerät entspricht einer Verbindungskonfiguration über eine Appliance Bastion. Für jedes Gerät sind der Name, die Tags, die Beschreibung, die zugehörige Appliance, der Verbindungstyp (SSH oder RDP), die IP des Hosts und schließlich die Tastaturkonfiguration angegeben.

Sie können die Liste Ihrer Geräte nach den ihnen zugewiesenen Tags filtern, und eine Suchfunktion ermöglicht es Ihnen, eine Sitzung anhand ihres Namens zu suchen.

![](images/sessions2.png)

Der Reiter "Appliances" liefert Ihnen eine Liste Ihrer Bastion-Appliances. Für jede Appliance sind der Name der Appliance und ihre Beschreibung angegeben.

Eine Suchfunktion steht Ihnen zur Verfügung, um eine Appliance anhand ihres Namens zu suchen.

![](images/appliances.png)

## Eine Appliance bereitstellen
Bevor Sie eine Appliance bereitstellen können, müssen Sie über einen Supportantrag ein Abonnement für eine Appliance anfordern.

## Öffnen eines Datenflusses zu einem Gerät
Im Reiter "Geräte" klicken Sie auf die Aktionsleiste des Appliances, das Sie öffnen möchten. Klicken Sie dann auf die Schaltfläche "Öffnen".

![](images/ouvrir_appliance.png)

Geben Sie anschließend die für die Verbindung erforderlichen Informationen ein:

    - Wahl des Protokolls (SSH oder RDP);
    - IP-Adresse des zu verwaltenden Hosts;
    - Anmeldeinformationen;
    - Tastaturlayout-Konfiguration.

Klicken Sie danach auf "Verbinden", um das Appliance zu öffnen. Die Konsole des zu verwaltenden virtuellen Geräts wird dann geöffnet.

## Ein Gerät registrieren
Um regelmäßig auf zu verwaltende Ausrüstung zuzugreifen, ist es angebracht, eine Ausrüstungskonfiguration zu erstellen, die nur Ihren Benutzernamen und Ihr Passwort bei jeder Verbindung erfordert.

Dafür besuchen Sie den Reiter "Ausrüstung" im Menü "Bastion" und klicken dann auf den Button "Neue Ausrüstung".

![](images/creer_session.png)


Geben Sie anschließend die notwendigen Informationen zur Erstellung Ihrer Ausrüstung ein:

    - Name der Ausrüstung;
    - Beschreibung;
    - Zugehöriges Gerät;
    - Art des Protokolls (SSH oder RDP);
    - IP-Adresse des Hosts;
    - Tastatursprache.

![](images/creer_session2.png)


Eine Benachrichtigung, die Ihnen die Erstellung Ihrer Ausrüstungskonfiguration mitteilt, sollte oben rechts auf der Seite erscheinen. Die Konfiguration wird dann der Liste Ihrer Ausrüstungen hinzugefügt.

Um eine neue Verbindung zu erstellen, können Sie auch über den Reiter "Appliances" gehen, indem Sie auf die Aktionsleiste des Geräts klicken, dem Sie eine Ausrüstungskonfiguration zuordnen möchten.

![](images/creer_session3.png)

## Mit einer Ausrüstung verbinden
Besuchen Sie die Registerkarte "Ausrüstung" im Abschnitt "Bastion". Klicken Sie auf die Aktionsleiste der Ausrüstung, die Sie öffnen möchten, und klicken Sie dann auf die Schaltfläche "Öffnen".

![](images/ouvrir_session.png)

Bei jeder Verbindung zur Ausrüstung müssen Sie nur Ihre Authentifizierungsinformationen eingeben.

![](images/ouvrir_session2.png)

Nach Eingabe Ihrer Anmeldeinformationen erscheint eine Benachrichtigung, die den Beginn der Sitzung bestätigt, und die Konsole zu Ihrer virtuellen Maschine wird geöffnet.

## Eine Ausrüstungskonfiguration ändern
Besuchen Sie die Registerkarte "Ausrüstungen" im Abschnitt "Bastion", klicken Sie auf die Aktionsleiste der Ausrüstung, die Sie ändern möchten, und klicken Sie auf die Schaltfläche "Bearbeiten".

![](images/modifier_session.png)

Danach können Sie den Namen der Ausrüstung, ihre Beschreibung, die zugehörige Appliance, das Protokoll (SSH oder RDP), die IP-Adresse des Hosts oder die Sprache der Tastatur ändern.

![](images/modifier_session2.png)

## Eine Ausrüstungskonfiguration löschen
Begeben Sie sich zum Tab "Ausrüstungen" im Abschnitt "Bastion", klicken Sie auf die Aktionsleiste der Ausrüstung, die Sie löschen möchten, und klicken Sie auf die Schaltfläche "Löschen".

![](images/supprimer_session.png)