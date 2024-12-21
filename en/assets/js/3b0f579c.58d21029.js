"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["1848"],{3916:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>a,default:()=>u,assets:()=>o,toc:()=>d,frontMatter:()=>l});var t=JSON.parse('{"id":"console/api","title":"Pilotage par API","description":"Cl\xe9s API","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/console/api.md","sourceDirName":"console","slug":"/console/api","permalink":"/en/docs/console/api","draft":false,"unlisted":false,"editUrl":"https://github.com/aelttil/docs-content/docs/console/api.md","tags":[],"version":"current","frontMatter":{"title":"Pilotage par API"},"sidebar":"docSidebar","previous":{"title":"Comptes d\'acc\xe8s \xe0 la console Shiva","permalink":"/en/docs/console/accounts"},"next":{"title":"Pr\xe9sentation de la console","permalink":"/en/docs/console/"}}'),i=s("5893"),r=s("65");let l={title:"Pilotage par API"},a=void 0,o={},d=[{value:"Cl\xe9s API",id:"cl\xe9s-api",level:2},{value:"Acc\xe8s au portail API",id:"acc\xe8s-au-portail-api",level:2},{value:"Les activit\xe9s",id:"les-activit\xe9s",level:2},{value:"Limites API",id:"limites-api",level:2},{value:"Pourquoi des limites ?",id:"pourquoi-des-limites-",level:3},{value:"Quelles sont les limites de taux pour l&#39;API de la console Cloud Temple ?",id:"quelles-sont-les-limites-de-taux-pour-lapi-de-la-console-cloud-temple-",level:3},{value:"Comment fonctionnent les limites de taux ?",id:"comment-fonctionnent-les-limites-de-taux-",level:3},{value:"Comment \xe9viter d&#39;effectuer trop de requ\xeates ?",id:"comment-\xe9viter-deffectuer-trop-de-requ\xeates-",level:3}];function c(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"cl\xe9s-api",children:"Cl\xe9s API"}),"\n",(0,i.jsxs)(n.p,{children:["La ",(0,i.jsx)(n.strong,{children:"cl\xe9 API"})," permet de s'authentifier lorsque vous souhaitez faire des requ\xeates sur l'API. La g\xe9n\xe9ration d'une cl\xe9 API, aussi appel\xe9e ",(0,i.jsx)(n.strong,{children:"Personal Access Token (PAT)"}),",\nest une mani\xe8re s\xe9curis\xe9e de se connecter aux API Shiva sans passer par une interface graphique. Chacun de ces tokens est li\xe9 \xe0 un tenant et \xe0 l'utilisateur qui l'a cr\xe9\xe9."]}),"\n",(0,i.jsx)(n.p,{children:"La cr\xe9ation de ce token se fait depuis votre compte. Il est possible de g\xe9n\xe9rer plusieurs cl\xe9s et de configurer pour chacune les autorisations dans la limite de vos droits."}),"\n",(0,i.jsxs)(n.p,{children:["Pour cr\xe9er une clef API, il suffit de ",(0,i.jsx)(n.strong,{children:"cliquer sur votre profil"})," :"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(6099).Z+"",width:"284",height:"610"})}),"\n",(0,i.jsxs)(n.p,{children:["Dans le menu du profil, cliquer sur ",(0,i.jsx)(n.strong,{children:"'Jeton d'acc\xe8s personnel'"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(5168).Z+"",width:"3096",height:"776"})}),"\n",(0,i.jsxs)(n.p,{children:["Vous avez alors \xe0 l'\xe9cran l'ensemble des cl\xe9s API qui ont \xe9t\xe9 cr\xe9\xe9es pour cet utilisateur dans ce tenant. Cliquer sur ",(0,i.jsx)(n.strong,{children:"'Nouveau access token personnel'"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(5646).Z+"",width:"1410",height:"1840"})}),"\n",(0,i.jsx)(n.p,{children:"Vous devez alors :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Indiquer le nom de ce nouveau jeton,"}),"\n",(0,i.jsx)(n.li,{children:"Indiquer une date d'expiration (maximum 12 mois de validit\xe9),"}),"\n",(0,i.jsxs)(n.li,{children:["Choisir les ",(0,i.jsx)(n.a,{href:"/en/docs/console/permissions",children:"permissions associ\xe9es au jeton"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Les d\xe9tails concernant votre jeton sont alors affich\xe9s. ",(0,i.jsx)(n.strong,{children:"Attention, il n'est plus possible d'y acc\xe9der a posteriori."})]}),"\n",(0,i.jsx)(n.p,{children:"Si vous ne notez pas ces informations, vous devrez d\xe9truire et recr\xe9er le jeton."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(1289).Z+"",width:"1236",height:"684"})}),"\n",(0,i.jsx)(n.p,{children:"Pour une question de s\xe9curit\xe9, il est recommand\xe9 de cr\xe9er plusieurs tokens ayant chacun une utilit\xe9 sp\xe9cifique (un token pour chaque application ou chaque processus m\xe9tier) plut\xf4t que de cr\xe9er 1 token avec l'ensemble des droits."}),"\n",(0,i.jsx)(n.p,{children:"Vous voyez ensuite le nouveau jeton cr\xe9\xe9 et sa future date d'expiration."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(3593).Z+"",width:"3094",height:"892"})}),"\n",(0,i.jsx)(n.h2,{id:"acc\xe8s-au-portail-api",children:"Acc\xe8s au portail API"}),"\n",(0,i.jsx)(n.p,{children:"La documentation OpenAPI 3.0 (Swagger) des APIs de la console Cloud Temple est disponible directement dans l'application :"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(9970).Z+"",width:"3052",height:"2074"})}),"\n",(0,i.jsxs)(n.p,{children:["L'acc\xe8s aux APIs n\xe9cessite d'\xeatre authentifi\xe9. Une fois authentifi\xe9 toutes les op\xe9rations doivent avoir le header\n",(0,i.jsx)(n.strong,{children:"'Authorization'"})," avec le bearer access token obtenu lors de la phase d'authentification."]}),"\n",(0,i.jsxs)(n.p,{children:["L'URL des points d'acc\xe8s est directement donn\xe9e dans ",(0,i.jsx)(n.strong,{children:"Swagger"}),' (dans l\'objet "Servers" de chaque page APIs).']}),"\n",(0,i.jsx)(n.h2,{id:"les-activit\xe9s",children:"Les activit\xe9s"}),"\n",(0,i.jsx)(n.p,{children:"Le suivi des requ\xeates de type \xe9criture (POST, PUT, PATCH, DELETE) est assur\xe9 via la gestion des activit\xe9s. Chaque requ\xeate de ce type g\xe9n\xe8re automatiquement une activit\xe9 associ\xe9e. Un code de statut HTTP 201 confirme la cr\xe9ation r\xe9ussie de l'activit\xe9. L'identifiant unique de cette activit\xe9 est renvoy\xe9 dans les en-t\xeates de la r\xe9ponse, sous la cl\xe9 'Location'."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(6281).Z+"",width:"2812",height:"724"})}),"\n",(0,i.jsx)(n.p,{children:"Une fois l'identifiant r\xe9cup\xe9r\xe9, il est possible d'acc\xe9der aux d\xe9tails de l'activit\xe9 en utilisant l'API du module Activity :"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(6026).Z+"",width:"2198",height:"1772"})}),"\n",(0,i.jsx)(n.p,{children:"Le contenu de l'activit\xe9 inclut toutes les informations essentielles pour identifier l'op\xe9ration, sa date d'ex\xe9cution, ainsi que son \xe9tat d'avancement. Voici le mod\xe8le d'une activit\xe9 :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'    {\n    "tenantId": "UUIDV4",\n    "description": "STRING",\n    "type": "ComputeActivity" | "BackupActivity" | "IAMActivity" | "TagActivity" | "RTMSActivity" | "BastionActivity" | "SupportActivity",\n    "tags": "STRING[]",\n    "initiator": "UUIDV4",\n    "concernedItems": [\n        {\n        "type": "string",\n        "id": "string"\n        }\n    ],\n    "id": "UUIDV4",\n    "creationDate": "DATE",\n    "operationType": "read" | "write",\n    "state": "CompletedState | RunningState | WaitingState | FailedState"\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["L'objet ",(0,i.jsx)(n.strong,{children:"state"})," peut prendre diff\xe9rentes formes selon l'\xe9tat de l'activit\xe9, \xe0 savoir :"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"waiting"}),", \xe9tat avant que l'op\xe9ration n'ait commenc\xe9 :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    waiting: {}\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"running"}),", \xe9tat lorsque l'op\xe9ration est en cours :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    running: {\n    status: string;\n    startDate: Date;\n    progression: number;\n    };\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"failed"}),", \xe9tat si l'op\xe9ration a \xe9chou\xe9 :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    failed: {\n    startDate: Date;\n    stopDate: Date;\n    reason: string;\n    };\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"completed"}),", \xe9tat si l'op\xe9ration est termin\xe9e :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    completed: {\n    startDate: Date;\n    stopDate: Date;\n    result: string;\n    };\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Nota: l'Identifiant (UUIDv4) de la ressource cr\xe9\xe9e est disponible dans le r\xe9sultat de l'activit\xe9 une fois celle-ci compl\xe9t\xe9e."})}),"\n",(0,i.jsx)(n.h2,{id:"limites-api",children:"Limites API"}),"\n",(0,i.jsx)(n.h3,{id:"pourquoi-des-limites-",children:"Pourquoi des limites ?"}),"\n",(0,i.jsxs)(n.p,{children:["La console Cloud Temple d\xe9finit ",(0,i.jsx)(n.strong,{children:"des plafonds sur le volume de requ\xeates"})," qu'un utilisateur peut adresser\n\xe0 l'API sur une dur\xe9e d\xe9termin\xe9e. L'instauration de ces plafonds de fr\xe9quence est une mesure courante dans la gestion des API, adopt\xe9e pour plusieurs motifs essentiels :"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Pr\xe9vention des abus"})," : Ces limites contribuent \xe0 la sauvegarde de l'int\xe9grit\xe9 de l'API en pr\xe9venant les usages\nabusifs ou maladroits susceptibles de compromettre son fonctionnement."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Assurance de la qualit\xe9 de service"})," : En r\xe9gulant l'acc\xe8s \xe0 l'API, nous veillons \xe0 une distribution \xe9quitable\ndes ressources, permettant ainsi \xe0 tous les utilisateurs de b\xe9n\xe9ficier d'une exp\xe9rience stable et performante."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Prenons l'exemple d'un script mal con\xe7u ou inefficace qui tente des appels r\xe9p\xe9titifs \xe0 l'API,\nrisquant de saturer les ressources et de d\xe9grader les performances. En \xe9tablissant des seuils de requ\xeates,\nnous pr\xe9venons ces situations et assurons le maintien d'",(0,i.jsx)(n.strong,{children:"un service fluide et sans interruption"})," pour l'ensemble de notre client\xe8le."]}),"\n",(0,i.jsx)(n.h3,{id:"quelles-sont-les-limites-de-taux-pour-lapi-de-la-console-cloud-temple-",children:"Quelles sont les limites de taux pour l'API de la console Cloud Temple ?"}),"\n",(0,i.jsx)(n.p,{children:"Nous appliquons des restrictions quantitatives sur les interactions des utilisateurs avec la console\npour chaque produit."}),"\n",(0,i.jsxs)(n.p,{children:["Les limites sont d\xe9finies en ",(0,i.jsx)(n.strong,{children:"requ\xeates par secondes (r/s) et par IP source"}),". Au-del\xe0 du seuil limite, le syst\xe8me r\xe9pondra\npar un code d'erreur HTTP 429, signalant que la limite de requ\xeates autoris\xe9es a \xe9t\xe9 d\xe9pass\xe9e."]}),"\n",(0,i.jsx)(n.p,{children:"Voici les limites d\xe9finies :"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Produit"}),(0,i.jsx)(n.th,{children:"Seuil limite"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Console Cloud Temple"}),(0,i.jsx)(n.td,{children:"60 r/s"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Identit\xe9 (IAM)"}),(0,i.jsx)(n.td,{children:"60 r/s"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"IaaS - Calcul"}),(0,i.jsx)(n.td,{children:"60 r/s"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"IaaS - Stockage"}),(0,i.jsx)(n.td,{children:"20 r/s"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"IaaS - Sauvegarde"}),(0,i.jsx)(n.td,{children:"60 r/s"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"PaaS - S3"}),(0,i.jsx)(n.td,{children:"60 r/s"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"PaaS - Openshift"}),(0,i.jsx)(n.td,{children:"60 r/s"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"R\xe9seau"}),(0,i.jsx)(n.td,{children:"60 r/s"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"H\xe9bergement"}),(0,i.jsx)(n.td,{children:"60 r/s"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"comment-fonctionnent-les-limites-de-taux-",children:"Comment fonctionnent les limites de taux ?"}),"\n",(0,i.jsxs)(n.p,{children:["Si le nombre de requ\xeates envoy\xe9es \xe0 un point d'API exc\xe8de la limite autoris\xe9e, le point d'API r\xe9agira en retournant\n",(0,i.jsx)(n.strong,{children:"un code de r\xe9ponse HTTP 429"}),". Ce code indique que l'utilisateur a d\xe9pass\xe9 le nombre de requ\xeates permises.\nLorsque cela se produit, le point d'API fournira \xe9galement un objet JSON en guise de r\xe9ponse,\nlequel contiendra des informations d\xe9taill\xe9es sur la limitation appliqu\xe9e :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'    {\n        "error": {\n            "status": "429 Too Many Requests",\n            "message": "Too Many Requests"\n        }\n    }\n'})}),"\n",(0,i.jsx)(n.h3,{id:"comment-\xe9viter-deffectuer-trop-de-requ\xeates-",children:"Comment \xe9viter d'effectuer trop de requ\xeates ?"}),"\n",(0,i.jsx)(n.p,{children:"Il est recommand\xe9 de limiter le nombre d'appels d'API effectu\xe9s par votre automatisation afin de rester en de\xe7\xe0\nde la limite de taux fix\xe9e pour le point de terminaison."}),"\n",(0,i.jsx)(n.p,{children:"Cette situation survient souvent lorsque plusieurs requ\xeates sont ex\xe9cut\xe9es en parall\xe8le,\n\xe0 l'aide de plusieurs processus ou threads."}),"\n",(0,i.jsxs)(n.p,{children:["Il existe plusieurs moyens d'am\xe9liorer l'efficacit\xe9 de votre automatisation, notamment en utilisant des m\xe9canismes\nde ",(0,i.jsx)(n.strong,{children:"mise en cache"})," et en mettant en place ",(0,i.jsx)(n.strong,{children:"un syst\xe8me de rejeu avec att\xe9nuation progressive"}),". Cette m\xe9thode consiste\n\xe0 effectuer une courte pause lorsqu'une erreur de limite de taux est rencontr\xe9e, puis \xe0 r\xe9essayer la requ\xeate.\nSi la requ\xeate \xe9choue \xe0 nouveau, la dur\xe9e de la pause est augment\xe9e progressivement jusqu'\xe0 ce que la requ\xeate r\xe9ussisse\nou jusqu'\xe0 ce qu'un nombre maximum de r\xe9essais soit atteint."]}),"\n",(0,i.jsx)(n.p,{children:"Cette approche pr\xe9sente de nombreux avantages :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"L'att\xe9nuation progressive"})," garantit que les premieres tentatives sont jou\xe9es rapidement, tout en pr\xe9voyant des d\xe9lais plus longs en cas d'\xe9chec r\xe9p\xe9t\xe9."]}),"\n",(0,i.jsxs)(n.li,{children:["L'ajout d'",(0,i.jsx)(n.strong,{children:"une variation al\xe9atoire"})," \xe0 la pause contribue \xe0 \xe9viter que toutes les tentatives ne se produisent simultan\xe9ment."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Il est important de noter que ",(0,i.jsx)(n.strong,{children:"les requ\xeates infructueuses n'affectent pas votre limite de taux"}),".\nCependant, renvoyer continuellement une requ\xeate pourrait ne pas \xeatre une solution viable \xe0 long terme,\ncar ce comportement pourrait \xeatre modifi\xe9 \xe0 l'avenir. Nous vous recommandons donc de ne pas d\xe9pendre exclusivement de ce m\xe9canisme."]}),"\n",(0,i.jsxs)(n.p,{children:["Les biblioth\xe8ques ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://pypi.org/project/backoff/",children:"Backoff"})})," et ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://pypi.org/project/tenacity/",children:"Tenacity"})})," en Python\nsont des bons points de d\xe9part pour impl\xe9menter des strat\xe9gies d'attenuation."]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},9970:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/shiva_api_001-b558a5fdfea3526e46073d2b3612c713.png"},6281:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/shiva_api_002-55087bc498a97e8e831878bf0d13b9b3.png"},6026:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/shiva_api_003-eb37bdbbd53e99c68a8c15a2de84de7a.png"},6099:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/shiva_profil_001-b57aae7f80d02b491c28d6f28c841fe5.png"},5646:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/shiva_profil_002-ba0b519fdc7ded5a3cd56a48e10f4774.png"},5168:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/shiva_profil_003-c22cf40740fb0b42c2bfaa599024a0c4.png"},1289:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/shiva_profil_004-5fcbdd5dbb568bb1075c4a7586d0ca93.png"},3593:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/shiva_profil_005-1c918c3a4ada92a269fd28c20086cc3f.png"},65:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return l}});var t=s(7294);let i={},r=t.createContext(i);function l(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);