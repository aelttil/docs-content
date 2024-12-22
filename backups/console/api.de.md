---
title: Steuerung über API
---

## API-Schlüssel
Der __API-Schlüssel__ ermöglicht es Ihnen, sich zu authentifizieren, wenn Sie Anfragen an die API stellen möchten. Das Generieren eines API-Schlüssels, auch bekannt als __Personal Access Token (PAT)__,
ist ein sicherer Weg, sich ohne grafische Benutzeroberfläche bei den Shiva-APIs anzumelden. Jeder dieser Tokens ist mit einem Tenant und dem Benutzer verbunden, der ihn erstellt hat.

Die Erstellung dieses Tokens erfolgt über Ihr Konto. Es ist möglich, mehrere Schlüssel zu generieren und für jeden einzelnen die Berechtigungen im Rahmen Ihrer Rechte zu konfigurieren.

Um einen API-Schlüssel zu erstellen, einfach __auf Ihr Profil klicken__:

![](images/shiva_profil_001.png){:height="20%" width="20%"}

Im Profilmenü auf __'Persönlicher Zugangstoken'__ klicken.

![](images/shiva_profil_003.png)

Daraufhin werden auf dem Bildschirm alle API-Schlüssel angezeigt, die für diesen Benutzer in diesem Tenant erstellt wurden. Klicken Sie auf __'Neuer persönlicher Zugangstoken'__.

![](images/shiva_profil_002.png){:height="50%" width="50%"}

Dann müssen Sie:

- Den Namen dieses neuen Tokens angeben,
- Ein Ablaufdatum angeben (maximal 12 Monate Gültigkeit),
- Die [mit dem Token verbundenen Berechtigungen](permissions.md) wählen.

Die Details Ihres Tokens werden dann angezeigt. __Achtung, es ist später nicht mehr möglich, darauf zuzugreifen.__

Wenn Sie diese Informationen nicht notieren, müssen Sie den Token zerstören und ihn neu erstellen.

![](images/shiva_profil_004.png){:height="50%" width="50%"}

Aus Sicherheitsgründen wird empfohlen, mehrere Tokens zu erstellen, von denen jeder eine spezifische Verwendung hat (ein Token für jede Anwendung oder jeden Geschäftsprozess), anstatt einen Token mit allen Rechten zu erstellen.

Danach sehen Sie den neu erstellten Token und sein zukünftiges Ablaufdatum.

![](images/shiva_profil_005.png){:height="70%" width="70%"}

## Zugang zum API-Portal
Die OpenAPI 3.0 (Swagger) Dokumentation der APIs der Cloud Temple Konsole ist direkt in der Anwendung verfügbar:

![](images/shiva_api_001.png){:height="70%" width="70%"}

Der Zugriff auf die APIs erfordert eine Authentifizierung. Sobald ein Benutzer authentifiziert ist, müssen alle Operationen den Header __'Authorization'__ mit dem Bearer Access Token enthalten, der während der Authentifizierungsphase erhalten wurde.

Die URL für den Zugriffspunkte ist direkt in __Swagger__ gegeben (im "Servers"-Objekt jeder API-Seite).

## Die Aktivitäten
Die Überwachung von Schreibanfragen (POST, PUT, PATCH, DELETE) erfolgt durch die Verwaltung von Aktivitäten. Jede Anfrage dieses Typs generiert automatisch eine zugeordnete Aktivität. Ein HTTP-Statuscode 201 bestätigt die erfolgreiche Erstellung der Aktivität. Die eindeutige Kennung dieser Aktivität wird in den Antwortköpfen unter dem Schlüssel 'Location' zurückgesendet.

![](images/shiva_api_002.png)

Sobald die Kennung abgerufen wurde, ist es möglich, auf die Details der Aktivität zuzugreifen, indem man die API des Activity-Moduls verwendet:

![](images/shiva_api_003.png)

Der Inhalt der Aktivität umfasst alle wesentlichen Informationen, um die Operation zu identifizieren, ihr Ausführungsdatum sowie ihren Fortschrittsstatus. Hier ist das Modell einer Aktivität:

    {
    "tenantId": "UUIDV4",
    "description": "STRING",
    "type": "ComputeActivity" | "BackupActivity" | "IAMActivity" | "TagActivity" | "RTMSActivity" | "BastionActivity" | "SupportActivity",
    "tags": "STRING[]",
    "initiator": "UUIDV4",
    "concernedItems": [
        {
        "type": "string",
        "id": "string"
        }
    ],
    "id": "UUIDV4",
    "creationDate": "DATE",
    "operationType": "read" | "write",
    "state": "CompletedState | RunningState | WaitingState | FailedState"
}

Das Objekt **state** kann je nach Zustand der Aktivität verschiedene Formen annehmen, nämlich:

**waiting**, Zustand bevor die Operation begonnen hat:

    waiting: {}

**running**, Zustand während die Operation im Gange ist:

    running: {
    status: string;
    startDate: Date;
    progression: number;
    };

**failed**, Zustand, wenn die Operation fehlgeschlagen ist:

    failed: {
    startDate: Date;
    stopDate: Date;
    reason: string;
    };

**completed**, Zustand, wenn die Operation abgeschlossen ist:

    completed: {
    startDate: Date;
    stopDate: Date;
    result: string;
    };

**Hinweis: Die Kennung (UUIDv4) der erstellten Ressource ist im Ergebnis der Aktivität verfügbar, sobald diese abgeschlossen ist.**

## API-Grenzen

### Warum gibt es Grenzen?
Die Cloud Temple Konsole definiert __Obergrenzen für das Volumen an Anfragen__, das ein Benutzer innerhalb eines bestimmten Zeitraums an die API stellen kann. Die Festlegung dieser Frequenzgrenzen ist eine gängige Maßnahme im API-Management, die aus mehreren grundlegenden Gründen angenommen wird:

- **Missbrauchsprävention**: Diese Limits tragen dazu bei, die Integrität der API zu schützen, indem sie Missbräuche oder ungeschickte Verwendungen verhindern, die deren Betrieb beeinträchtigen könnten.
- **Qualität der Dienstleistung sicherstellen**: Indem der Zugriff auf die API reguliert wird, sorgen wir für eine faire Verteilung der Ressourcen, was allen Benutzern eine stabile und leistungsfähige Erfahrung ermöglicht.

Betrachten wir das Beispiel eines schlecht konzipierten oder ineffizienten Skripts, das wiederholte Aufrufe an die API unternimmt und damit das Risiko birgt, die Ressourcen zu überlasten und die Leistung zu verschlechtern. Durch die Festlegung von Anfragegrenzen verhindern wir diese Situationen und gewährleisten die Aufrechterhaltung eines __flüssigen und unterbrechungsfreien Dienstes__ für unsere gesamte Kundschaft.

### Welche Ratenlimits gelten für die API der Cloud Temple Konsole?
Wir setzen quantitative Beschränkungen für die Interaktion der Benutzer mit der Konsole
für jedes Produkt fest.

Die Grenzen sind in __Anfragen pro Sekunde (r/s) und pro Quell-IP__ definiert. Bei Überschreitung der Schwellenwerte wird das System
mit einem HTTP-Fehlercode 429 antworten, was darauf hinweist, dass das zulässige Anfragelimit überschritten wurde.

Hier sind die festgelegten Grenzen:

| Produkt              | Schwellenwert |
|----------------------|---------------|
| Console Cloud Tempel | 60 r/s        |
| Identität (IAM)      | 60 r/s        |
| IaaS - Rechnung      | 60 r/s        |
| IaaS - Speicher      | 20 r/s        |
| IaaS - Sicherung     | 60 r/s        |
| PaaS - S3            | 60 r/s        |
| PaaS - Openshift     | 60 r/s        |
| Netzwerk             | 60 r/s        |
| Hosting              | 60 r/s        |

### Wie funktionieren die Ratenbegrenzungen?
Wenn die Anzahl der an einen API-Endpunkt gesendeten Anfragen das erlaubte Limit überschreitet, wird der API-Endpunkt reagieren, indem er __einen HTTP-Antwortcode 429__ zurückgibt. Dieser Code zeigt an, dass der Benutzer die zulässige Anzahl von Anfragen überschritten hat.
Wenn dies geschieht, wird der API-Endpunkt auch ein JSON-Objekt als Antwort bereitstellen,
welches detaillierte Informationen über die angewandte Begrenzung enthält:

    {
        "error": {
            "status": "429 Zu viele Anfragen",
            "message": "Zu viele Anfragen"
        }
    }

### Wie kann man vermeiden, zu viele Anfragen zu stellen?
Es wird empfohlen, die Anzahl der API-Aufrufe, die von Ihrer Automatisierung durchgeführt werden, zu begrenzen, um unter
dem festgelegten Rate-Limit für den Endpunkt zu bleiben.

Diese Situation tritt häufig auf, wenn mehrere Anfragen parallel ausgeführt werden,
mithilfe von mehreren Prozessen oder Threads.

Es gibt verschiedene Möglichkeiten, die Effizienz Ihrer Automatisierung zu verbessern, insbesondere durch Verwendung von Mechanismen
zur __Zwischenspeicherung__ und durch Einrichtung __eines exponentiellen Zurückweisungssystems mit Backoff__. Diese Methode besteht
darin, eine kurze Pause einzulegen, wenn ein Rate-Limit-Fehler auftritt, und dann die Anfrage erneut zu versuchen.
Scheitert die Anfrage wiederholt, wird die Pausendauer schrittweise erhöht, bis die Anfrage erfolgreich ist
oder bis die maximale Anzahl von Wiederholungen erreicht ist.

Dieser Ansatz hat viele Vorteile:

- __Das exponentielle Backoff__ stellt sicher, dass die ersten Versuche schnell ausgeführt werden, während längere Verzögerungen im Falle wiederholter Fehlschläge eingeplant werden.
- Die Hinzufügung einer __zufälligen Variation__ in die Pause trägt dazu bei, zu verhindern, dass alle Versuche gleichzeitig erfolgen.

Es ist wichtig zu beachten, dass __fehlgeschlagene Anfragen Ihr Rate-Limit nicht beeinflussen__.
Das wiederholte Senden einer Anfrage könnte jedoch langfristig keine tragfähige Lösung sein,
da dieses Verhalten in Zukunft geändert werden könnte. Wir empfehlen Ihnen daher, sich nicht ausschließlich auf diesen Mechanismus zu verlassen.

Die Bibliotheken __[Backoff](https://pypi.org/project/backoff/)__ und __[Tenacity](https://pypi.org/project/tenacity/)__ in Python
sind ein guter Ausgangspunkt, um Ausweichstrategien zu implementieren.