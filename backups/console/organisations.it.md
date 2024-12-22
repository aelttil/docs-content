---
title: Organizzazioni
---
L'organizzazione è legata al tuo __account sponsor__ e al __contratto associato a Cloud Temple__. Rappresenta la tua entità (azienda, dipartimento, team, ...) che porta la relazione contrattuale tra Cloud Temple e te.

## Principio di un'organizzazione

L'organizzazione ha quattro ruoli principali:

- Rappresenta l'__entità contrattuale__ per gli aspetti di monitoraggio e fatturazione,
- Definisce __la configurazione globale del meccanismo di autenticazione__ : l'autenticazione può essere locale nel Shiva Console o remota tramite un servizio di federazione delle identità,
- Contiene tutti gli __account utente__,
- __Unisce gli inquilini__ (Produzione, Preproduzione, Dev, Applicazione 1, Applicazione 2, ...) che hai definito per le esigenze della tua architettura Cloud.

I ruoli (diritti/permessi) degli utenti possono essere configurati per ogni inquilino definito nella tua organizzazione. Ad esempio, un account può essere autorizzato a ordinare risorse in un inquilino, ma non in un altro.

## Meccanismi di autenticazione

La Shiva Console consente di configurare, a livello di organizzazione, __il meccanismo di autenticazione__. Puoi utilizzare il repository di autenticazione locale della Shiva Console o connettere la tua organizzazione a uno dei tuoi repository di autenticazione.

I seguenti repository esterni sono supportati:

- Repository compatibili con __OpenID Connect__,
- Repository compatibili con __SAML__,
- __Microsoft ADFS__,
- __Microsoft EnterpriseID__ (Microsoft Azure Active Directory),
- Amazon AWS Cognito,
- Okta,
- Auth0,
- KeyCloak.

## Per saperne di più

- Esempio di [federazione delle identità con Microsoft ADFS](iam/sso_adfs.md)
- Esempio di [federazione delle identità con Microsoft EnterpriseID (Azure Active Directory)](iam/sso_aad.md)
