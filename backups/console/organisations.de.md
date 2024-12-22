---
title: Organisationen
---
Die Organisation ist mit Ihrem __Sponsor-Konto__ und dem zugehörigen __Cloud Temple Vertrag__ verbunden. Sie repräsentiert Ihre Einheit (Unternehmen, Abteilung, Team, ...), die die Vertragsbeziehung zwischen Cloud Temple und Ihnen trägt.

## Konzept einer Organisation

Die Organisation hat vier Hauptrollen:

- Sie repräsentiert die __vertragliche Einheit__ für Überwachungs- und Abrechnungsaspekte,
- Sie definiert die __globale Konfiguration des Authentifizierungsmechanismus__: Die Authentifizierung kann lokal auf der Shiva-Konsole oder remote über einen Identitätsföderationsdienst erfolgen,
- Sie verwaltet alle __Benutzerkonten__,
- Sie __verbindet die Tenants__ (Produktion, Vorproduktion, Entwurf, Anwendung 1, Anwendung 2, ...), die Sie für Ihre Cloud-Architektur festlegen.

Die Rollen (Rechte/Berechtigungen) der Benutzer können für jeden in Ihrer Organisation definierten Tenant konfiguriert werden. Zum Beispiel kann ein Konto berechtigt sein, Ressourcen in einem Tenant zu bestellen, aber nicht in einem anderen.

## Authentifizierungsmechanismen

Die Shiva-Konsole ermöglicht es Ihnen, auf Organisationsebene den __Authentifizierungsmechanismus__ zu konfigurieren. Sie können entweder das lokale Authentifizierungsrepository der Shiva-Konsole verwenden oder Ihre Organisation mit einem Ihrer Authentifizierungsrepositorys koppeln.

Folgende externe Repositorys werden unterstützt:

- __OpenID Connect__-kompatible Repositorys,
- __SAML__-kompatible Repositorys,
- __Microsoft ADFS__,
- __Microsoft EntraID__ (Microsoft Azure Active Directory),
- Amazon AWS Cognito,
- Okta,
- Auth0,
- KeyCloak.

## Weitere Informationen

- Beispiel für die [Identitätsföderation mit Microsoft ADFS](iam/sso_adfs.md)
- Beispiel für die [Identitätsföderation mit Microsoft EntraID (Azure Active Directory)](iam/sso_aad.md)
