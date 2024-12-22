---
title: Beispiel für Identitätsföderation mit Microsoft ADFS
---
Hier ist ein Beispiel für die Konfiguration des Authentifizierungsverzeichnisses einer Organisation namens Cloud Temple mit __Microsoft ADFS__.

Die Konfiguration Ihres Microsoft-Verzeichnisses auf der Ebene einer Cloud Temple-Organisation erleichtert die Authentifizierung Ihrer Benutzer in der Shiva-Konsole.
Dies verhindert eine Vielzahl von Authentifizierungsfaktoren und verringert die Angriffsfläche.
Wenn Ihre Benutzer bei ihrem Microsoft-Konto angemeldet sind, erfolgt die Anmeldung bei den Diensten der Shiva-Konsole transparent.

Hier sind die verschiedenen Schritte, um diese Konfiguration durchzuführen:


## Voraussetzungen
Ihr Microsoft ADFS-Server muss auf die folgende URL von Cloud Temple zugreifen können: https://keycloak-shiva.cloud-temple.com/auth/.

ADFS muss von Cloud Temple-Netzwerken aus erreichbar sein und __ein TLS-Zertifikat einer öffentlichen Zertifizierungsstelle__ bereitstellen.

Benutzer, die sich auf dem Portal anmelden möchten, müssen ihre E-Mail-Adresse, ihren Namen und Vornamen im Active Directory angeben.


## Schritt 2: Fordern Sie die SSO (Single Sign-On)-Konfiguration für Ihre Organisation an

Dieser Teil der Konfiguration wird auf Organisationsebene von Ihrem Cloud Temple-Team durchgeführt.

Geben Sie in der Konsole einen __Supportantrag__ ein, in dem Sie angeben, dass Sie Ihr Microsoft ADFS-Authentifizierungsverzeichnis konfigurieren möchten.

Bitte geben Sie die folgenden Informationen in der Anforderung an:

    Der Name Ihrer Organisation
    Der Name eines Kontakts mit E-Mail und Telefonnummer zur Fertigstellung der Konfiguration
    Öffentliche URL der AD-Ressourcen-Föderationsmetadaten (<Domänenname des ADFS>/FederationMetadata/2007-06/FederationMetadata.xml)
    (Beispiel: https://adfs.test.local/FederationMetadata/2007-06/FederationMetadata.xml)

Sobald die Konfiguration in der Shiva-Konsole abgeschlossen ist, wird der angegebene Kontakt informiert.

Das Cloud Temple-Supportteam sendet Ihnen eine URL, die wie folgt aussieht: https://keycloak-shiva.cloud-temple.com/auth/realms/companytest/broker/adfs_test/endpoint/descriptor

*Sie können die URL in einen Browser kopieren, um sie zu testen. Wenn sie korrekt funktioniert, sollten Sie ein XML sehen.*

## Schritt 3: Konfiguration von ADFS
### Konfiguration der Authentifizierungsföderation

#### Hinzufügen einer Vertrauenspartei-Zustimmung

Gehen Sie auf Ihrem ADFS-Server zu "Vertrauenspartei-Zustimmung hinzufügen".

![](images/sso_adfs_001.png)

### "Claims" konfigurieren
Claims ermöglichen es, Informationen an das Token zu liefern, das an die Cloud Temple-Konsole übertragen wird.

Sie geben die Informationen des angemeldeten Benutzers weiter, die für das reibungslose Funktionieren verschiedener Dienste erforderlich sind, wie z.B. seine E-Mail-Adresse, seinen Namen und Vornamen.

![](images/sso_adfs_002.png)

Wählen Sie "Dateien zu importieren, die online oder über ein lokales Netzwerk zur Vertrauenspartei gehören" und geben Sie die URL ein, die vom Cloud Temple-Support bereitgestellt wurde.

![](images/sso_adfs_003.png)

Sie können einen Namen und eine Beschreibung für die Vertrauenspartei angeben. Dieser Teil ist optional.

![](images/sso_adfs_004.png)

Standardmäßig genehmigen wir jeden, aber es ist möglich, __"Eine bestimmte Gruppe genehmigen"__ auszuwählen, um die Gruppe(n) auszuwählen, die über ADFS auf die Dienste der Shiva-Konsole zugreifen dürfen.

![](images/sso_adfs_005.png)

Nach Abschluss dieser Schritte ist die Konfiguration der Vertrauenspartei abgeschlossen.

![](images/sso_adfs_006.png)

Sie müssen dann die Ansprucherstellungsrichtlinie dieser neuen Vertrauenspartei bearbeiten.

![](images/sso_adfs_007.png)

Klicken Sie auf "Eine Regel hinzufügen" und wählen Sie das Modell "Eingehenden Anspruch transformieren".

![](images/sso_adfs_008.png)

Geben Sie die Informationen ein, wie in der folgenden Bildschirmaufnahme angegeben.

![](images/sso_adfs_009.png)

### Claims hinzufügen
Fügen Sie eine zweite Regel hinzu, diesmal mit dem Modell "LDAP-Attribute als Ansprüche senden".

![](images/sso_adfs_010.png)

Wählen Sie den Attributspeicher aus und fügen Sie die Attribute "E-Mail-Adressen, Vorname, Nachname und SAM-Account-Name" hinzu, wie in der folgenden Bildschirmaufnahme angegeben.

![](images/sso_adfs_011.png)

Nehmen Sie die Änderungen vor.

## Schritt 3: Abschluss

Sie können jetzt testen, indem Sie zur Shiva-Konsole gehen und auf die Schaltfläche klicken, die der ADFS-Client-Authentifizierung entspricht; in diesem Beispiel ist es __"ADFS Test"__.

![](images/sso_adfs_012.png)
