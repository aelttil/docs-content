---
title: API Management
---

## API Keys
The __API key__ serves to authenticate when you wish to make requests on the API. Generating an API key, also known as a __Personal Access Token (PAT)__, 
is a secure way of connecting to Shiva APIs without using a graphical interface. Each of these tokens is linked to a tenant and to the user who created it.

You create this token from your account. It is possible to generate several keys and to configure for each the authorizations within the limit of your rights.

To create an API key, simply __click on your profile__:

![](images/shiva_profil_001.png){:height="20%" width="20%"}

In the profile menu, click on __'Personal Access Token'__:

![](images/shiva_profil_003.png)

You will then see all the API keys that have been created for this user in this tenant on the screen. Click on __'New Personal Access Token'__:

![](images/shiva_profil_002.png){:height="50%" width="50%"}

You must then:

- Enter the name of this new token,
- Specify an expiration date (maximum 12 months of validity),
- Select the [permissions associated with the token](permissions.md).

The details concerning your token are then displayed. __Be aware that it is no longer possible to access them later on.__

If you do not note down this information, you will have to destroy and recreate the token.

![](images/shiva_profil_004.png){:height="50%" width="50%"}

For security reasons, it is recommended to create several tokens each with a specific purpose (one token for each application or each business process) rather than creating 1 token with all rights.

You will then see the newly created token and its future expiration date.

![](images/shiva_profil_005.png){:height="70%" width="70%"}

## Access to the API portal
The OpenAPI 3.0 (Swagger) documentation of the Cloud Temple console APIs is available directly in the application:

![](images/shiva_api_001.png){:height="70%" width="70%"}

Access to the APIs requires authentication. Once authenticated, all operations must have the __'Authorization'__ header with the bearer access token obtained during the authentication phase.

The URL of the access points is directly provided in __Swagger__ (in the "Servers" object of each API page).

## Activities
Tracking of write-type requests (POST, PUT, PATCH, DELETE) is ensured through activity management. Each request of this type automatically generates an associated activity. An HTTP status code of 201 confirms the successful creation of the activity. The unique identifier of this activity is returned in the response headers under the 'Location' key.

![](images/shiva_api_002.png)

Once the identifier has been retrieved, it is possible to access the details of the activity by using the Activity module's API:

![](images/shiva_api_003.png)

The content of the activity includes all the essential information to identify the operation, its execution date, as well as its progress state. Here is the model of an activity:

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

The **state** object can take different forms depending on the state of the activity, namely:

**waiting**, state before the operation has started:

    waiting: {}

**running**, state when the operation is in progress:

    running: {
    status: string;
    startDate: Date;
    progression: number;
    };

**failed**, state if the operation has failed:

    failed: {
    startDate: Date;
    stopDate: Date;
    reason: string;
    };

**completed**, state if the operation is completed:

    completed: {
    startDate: Date;
    stopDate: Date;
    result: string;
    };

**Note: The (UUIDv4) identifier of the created resource is available in the result of the activity once it is completed.**

## API Limits
### Why Set Limits?
The Cloud Temple console establishes __request volume ceilings__ that a user can make to the API over a set duration. The establishment of these rate limits is a common measure in API management, adopted for several essential reasons:

- **Prevention of abuse**: These limits contribute to the protection of the API’s integrity by preventing abusive or clumsy uses that could compromise its operation.
- **Quality of service assurance**: By regulating access to the API, we ensure a fair distribution of resources, thus allowing all users to benefit from a stable and high-performing experience.

Take, for instance, a poorly designed or inefficient script that attempts repetitive calls to the API, risking resource saturation and performance degradation. By establishing thresholds for requests, we prevent these situations and ensure the maintenance of __a smooth and uninterrupted service__ for all our clients.

### What are the rate limits for the Cloud Temple console API?
We apply quantitative restrictions to user interactions with the console for each product.

The limits are set in __requests per second (r/s) and per source IP__. Beyond the threshold, the system will respond with an HTTP 429 error code, indicating that the allowed request limit has been exceeded.

Here are the defined limits:

| Product               | Threshold Limit |
|-----------------------|-----------------|
| Cloud Temple Console  | 60 r/s          |
| Identity (IAM)        | 60 r/s          |
| IaaS - Compute        | 60 r/s          |
| IaaS - Storage        | 20 r/s          |
| IaaS - Backup         | 60 r/s          |
| PaaS - S3             | 60 r/s          |
| PaaS - Openshift      | 60 r/s          |
| Network               | 60 r/s          |
| Hosting               | 60 r/s          |

### How do rate limits work?
If the number of requests sent to an API endpoint exceeds the allowed limit, the endpoint will act by returning __an HTTP 429 response code__. This code indicates that the user has exceeded the permitted number of requests. When this occurs, the API endpoint will also provide a JSON object in response, which will contain detailed information about the applied rate limiting:

```
{
    "error": {
        "status": "429 Too Many Requests",
        "message": "Too Many Requests"
    }
}
```

### How to Avoid Making Too Many Requests?
It is recommended to limit the number of API calls made by your automation to stay below
the rate limit set for the endpoint.

This situation often occurs when multiple requests are executed in parallel,
using multiple processes or threads.

There are several ways to improve the efficiency of your automation, including using caching mechanisms
and setting up __a gradual backoff system__. This method involves
taking a short break when a rate limit error is encountered, then retrying the request.
If the request fails again, the duration of the break is gradually increased until the request succeeds
or until a maximum number of retries is reached.

This approach has many advantages:

- __Gradual backoff__ ensures that the initial attempts are made quickly, while planning longer delays in case of repeated failures.
- Adding __a random variation__ to the break time helps prevent all attempts from occurring simultaneously.

It is important to note that __unsuccessful requests do not affect your rate limit__.
However, constantly resending a request might not be a viable long-term solution,
as this behavior could be changed in the future. Therefore, we recommend not to rely exclusively on this mechanism.

The __[Backoff](https://pypi.org/project/backoff/)__ and __[Tenacity](https://pypi.org/project/tenacity/)__ libraries in Python
are good starting points for implementing backoff strategies.