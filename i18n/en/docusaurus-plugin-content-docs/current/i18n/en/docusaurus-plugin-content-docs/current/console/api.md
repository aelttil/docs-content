---
title: API Documentation 
---

## API Keys

The __API key__ allows authentication when you want to make requests to the API. The generation of an API key, also called __Personal Access Token (PAT)__, 
is a secure way to connect to Shiva APIs without going through a graphical interface. Each of these tokens is linked to a tenant and the user who created it.

The creation of this token is done from your account. It is possible to generate multiple keys and configure permissions for each one within the limits of your rights.

To create an API key, simply __click on your profile__:

![](images/shiva_profil_001.png)

In the profile menu, click on __'Personal Access Token'__

![](images/shiva_profil_003.png)

You will then see all the API keys that have been created for this user in this tenant. Click on __'New Personal Access Token'__

![](images/shiva_profil_002.png)

You must then:
- Specify the name of this new token,
- Set an expiration date (maximum validity of 12 months),
- Choose the [permissions associated with the token](permissions.md).

The details of your token are then displayed. __Be careful, it is no longer possible to access them later.__

If you do not note down these details, you will have to destroy and recreate the token.

![](images/shiva_profil_004.png)

For security reasons, it is recommended to create multiple tokens each with a specific purpose (one token for each application or business process) rather than creating 1 token with all rights.

You will then see the newly created token and its future expiration date.

![](images/shiva_profil_005.png)

## Access to the API portal

The OpenAPI 3.0 (Swagger) documentation of the APIs for the Cloud Temple console is directly available in the application:

![](images/shiva_api_001.png)

Access to APIs requires authentication. Once authenticated, all operations must have the __'Authorization'__ header with the bearer access token obtained during the authentication phase.

The URL of the endpoints is directly given in __Swagger__ (in the "Servers" object of each API page).

## Activities

The tracking of write-type requests (POST, PUT, PATCH, DELETE) is ensured through activity management. Each request of this type automatically generates an associated activity. An HTTP 201 status code confirms the successful creation of the activity. The unique identifier of this activity is returned in the response headers, under the 'Location' key.

![](images/shiva_api_002.png)

Once the identifier is retrieved, it is possible to access the details of the activity using the Activity module's API:

![](images/shiva_api_003.png)
The activity content includes all the essential information to identify the operation, its execution date, as well as its progress status. Here is the model of an activity:

```
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
```

The **state** object can take different forms depending on the state of the activity, namely:

**waiting**, state before the operation has started:
```
    waiting: {}
```
**running**, state when the operation is in progress:
```
    running: {
    status: string;
    startDate: Date;

    progress: number;
    };
```
**failed**, state if the operation has failed:
```
    failed: {
    startDate: Date;
    stopDate: Date;
    reason: string;
    };
```
**completed**, state if the operation is completed:
```
    completed: {
    startDate: Date;
    stopDate: Date;
    result: string;
    };
```
**Note: The Identifier (UUIDv4) of the created resource is available in the result of the activity once it is completed.**

## API Limits

### Why limits?

The Cloud Temple console sets __ceilings on the volume of requests__ that a user can send
to the API over a certain period. The establishment of these frequency ceilings is a common measure in API management, adopted for several essential reasons:

- **Prevention of abuse**: These limits help to safeguard the integrity of the API by preventing abusive or clumsy uses that could compromise its operation.
- **Quality of Service Assurance**: By regulating access to the API, we ensure a fair distribution of resources, allowing all users to benefit from a stable and high-performing experience.

Consider the example of a poorly designed or inefficient script that attempts repetitive calls to the API, risking resource saturation and performance degradation. By establishing request thresholds, we prevent these situations and ensure the maintenance of __a smooth and uninterrupted service__ for all our customers.

### What are the rate limits for the Cloud Temple console API?

We apply quantitative restrictions on user interactions with the console for each product.

The limits are defined in __requests per second (r/s) and by source IP__. Beyond the limit threshold, the system will respond with an HTTP 429 error code, indicating that the allowed request limit has been exceeded.
Here are the defined limits:

| Product              | Limit Threshold |
|----------------------|-----------------|
| Cloud Temple Console | 60 r/s          |
| Identity (IAM)       | 60 r/s          |
| IaaS - Compute       | 60 r/s          |
| IaaS - Storage       | 20 r/s          |
| IaaS - Backup        | 60 r/s          |
| PaaS - S3            | 60 r/s          |
| PaaS - Openshift     | 60 r/s          |
| Network              | 60 r/s          |
| Hosting              | 60 r/s          |

### How do rate limits work?

If the number of requests sent to an API endpoint exceeds the allowed limit, the API endpoint will respond by returning __an HTTP 429 response code__. This code indicates that the user has exceeded the number of permitted requests. When this happens, the API endpoint will also provide a JSON object as a response, which will contain detailed information about the applied limitation:
```
    {
        "error": {
            "status": "429 Too Many Requests",

```json
    "message": "Too Many Requests"
}
```
### How to avoid making too many requests?

It is recommended to limit the number of API calls made by your automation in order to stay below the rate limit set for the endpoint.

This situation often occurs when multiple requests are executed in parallel, using multiple processes or threads.

There are several ways to improve the efficiency of your automation, including using __caching mechanisms__ and implementing __a retry system with exponential backoff__. This method involves taking a short pause when a rate limit error is encountered, then retrying the request. If the request fails again, the duration of the pause is gradually increased until the request succeeds or until a maximum number of retries is reached.

This approach has many advantages:
- __Exponential backoff__ ensures that initial attempts are executed quickly, while planning for longer delays in case of repeated failure.
- Adding __random jitter__ to the pause helps prevent all attempts from occurring simultaneously.

It is important to note that __unsuccessful requests do not affect your rate limit__.
However, continuously resending a request might not be a viable long-term solution,
as this behavior could be modified in the future. Therefore, we recommend not relying solely on this mechanism.

The Python libraries __[Backoff](https://pypi.org/project/backoff/)__ and __[Tenacity](https://pypi.org/project/tenacity/)__ 
are good starting points for implementing backoff strategies.