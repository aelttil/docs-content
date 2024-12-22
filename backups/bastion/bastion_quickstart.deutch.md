---
title: Schnellstart
---

Dieser Schnellstart-Leitfaden zeigt Ihnen, wie Sie die Erstellung einer Appliance anfordern und wie Sie eine neue Sitzung registrieren und sich daran anmelden.

## Voraussetzungen
1. Ein Abonnement des Cloud Temple Angebots muss vorliegen (Appliance Bastion-Abonnement).
2. Die zu verwaltenden Geräte müssen vom Netzwerk aus zugänglich sein, in dem die Bastion Appliance implementiert ist.
3. Sie müssen über die Berechtigungen für das Bastion-Modul verfügen.
4. Im Falle einer On-Premise-Implementierung der Appliance müssen die entsprechenden Datenflüsse freigeschaltet werden.

## Die Erstellung einer Appliance anfordern
Bevor Sie ein Appliance bereitstellen können, müssen Sie eine Appliance-Abonnementanfrage über eine Support-Anfrage stellen.
Der Support ist in der Shiva-Konsole über das Bojen-Symbol in der oberen rechten Ecke des Fensters zugänglich.

![](images/shiva_support.png)

## Ein Gerät registrieren

Um regelmäßig auf eine zu verwaltende Ausrüstung zuzugreifen, ist es besser, eine Sitzung zu erstellen, die bei jeder Verbindung nur Ihren Benutzernamen und Ihr Passwort verlangt.

Dazu gehen Sie zum Tab "Geräte" im Menü "Bollwerk" und klicken Sie dann auf den Button "Neues Gerät".

![](images/creer_session.png)

Geben Sie dann die zur Erstellung Ihres Geräts erforderlichen Informationen ein:

    - Name des Geräts;
    - Beschreibung;
    - Zugeordnete Appliance;
    - Typ des Protokolls (SSH oder RDP);
    - IP-Adresse des Hosts;
    - Tastaturkonfiguration.

![](images/creer_session2.png)


Eine Benachrichtigung, die Ihnen die Erstellung des Geräts anzeigt, sollte oben rechts auf der Seite erscheinen. Die Sitzung wird dann der Liste Ihrer Geräte hinzugefügt.

Um ein neues Gerät zu erstellen, können Sie auch über den Tab "Appliances" gehen, indem Sie auf die Aktionsleiste der Appliance klicken, mit der Sie ein Gerät verknüpfen möchten.

![](images/creer_session3.png)

## Sich an einem Gerät anmelden
Besuchen Sie die Registerkarte "Ausrüstung" im Abschnitt "Bastion". Klicken Sie auf die Aktionsleiste der Ausrüstung, die Sie öffnen möchten, und klicken Sie auf die Schaltfläche "Öffnen".

![](images/ouvrir_session.png)

Bei jeder Anmeldung an der Ausrüstung müssen Sie nur Ihre Authentifizierungsinformationen eingeben.

![](images/ouvrir_session2.png)

Nach Eingabe Ihrer Anmeldeinformationen erscheint eine Benachrichtigung, die den Beginn der Verbindung zu Ihrer Ausrüstung bestätigt, und das Konsolenfenster zu Ihrer virtuellen Maschine öffnet sich.