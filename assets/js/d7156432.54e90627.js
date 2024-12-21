"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["2860"],{3628:function(e,s,n){n.r(s),n.d(s,{metadata:()=>t,contentTitle:()=>c,default:()=>u,assets:()=>o,toc:()=>d,frontMatter:()=>l});var t=JSON.parse('{"id":"paas/s3","title":"Stockage objet S3","description":"Caract\xe9ristiques techniques g\xe9n\xe9rales","source":"@site/docs/paas/s3.md","sourceDirName":"paas","slug":"/paas/s3","permalink":"/docs/paas/s3","draft":false,"unlisted":false,"editUrl":"https://github.com/aelttil/docs-content/docs/paas/s3.md","tags":[],"version":"current","frontMatter":{"title":"Stockage objet S3"},"sidebar":"docSidebar","previous":{"title":"Redhat Openshift","permalink":"/docs/paas/openshift"},"next":{"title":"privacy","permalink":"/docs/privacy"}}'),i=n("5893"),r=n("65");let l={title:"Stockage objet S3"},c=void 0,o={},d=[{value:"Caract\xe9ristiques techniques g\xe9n\xe9rales",id:"caract\xe9ristiques-techniques-g\xe9n\xe9rales",level:2},{value:"Solution bas\xe9e sur Dell ECS",id:"solution-bas\xe9e-sur-dell-ecs",level:3},{value:"Produit de type r\xe9gion",id:"produit-de-type-r\xe9gion",level:3},{value:"Conformit\xe9 et certification",id:"conformit\xe9-et-certification",level:3},{value:"Chiffrement natif",id:"chiffrement-natif",level:3},{value:"Niveaux de service",id:"niveaux-de-service",level:3},{value:"Notion de &quot;bucket&quot; dans l&#39;\xe9cosyst\xe8me du stockage objet",id:"notion-de-bucket-dans-l\xe9cosyst\xe8me-du-stockage-objet",level:2},{value:"Lister l&#39;ensemble des bucket S3 de votre tenant",id:"lister-lensemble-des-bucket-s3-de-votre-tenant",level:2},{value:"Cr\xe9ation d&#39;un nouveau compte de stockage",id:"cr\xe9ation-dun-nouveau-compte-de-stockage",level:2},{value:"Cr\xe9ation d&#39;un bucket S3",id:"cr\xe9ation-dun-bucket-s3",level:2},{value:"Association d&#39;un compte de stockage \xe0 un bucket",id:"association-dun-compte-de-stockage-\xe0-un-bucket",level:2},{value:"Parcourir un bucket S3",id:"parcourir-un-bucket-s3",level:2},{value:"Limitations des acc\xe8s \xe0 vos bucket S3",id:"limitations-des-acc\xe8s-\xe0-vos-bucket-s3",level:2},{value:"Suppression d&#39;un bucket S3",id:"suppression-dun-bucket-s3",level:2},{value:"FAQ",id:"faq",level:2},{value:"Quelle est la taille maximale de fichier pouvant \xeatre manipul\xe9 avec la console web ?",id:"quelle-est-la-taille-maximale-de-fichier-pouvant-\xeatre-manipul\xe9-avec-la-console-web-",level:3},{value:"Quel client S3 puis-je utiliser pour g\xe9rer mes fichiers ?",id:"quel-client-s3-puis-je-utiliser-pour-g\xe9rer-mes-fichiers-",level:3},{value:"MINIO",id:"minio",level:4},{value:"Cloud Berry Explorer",id:"cloud-berry-explorer",level:4},{value:"WINSCP 6.3.x",id:"winscp-63x",level:4},{value:"L&#39;offre S3 Cloud Temple utilise-t-elle la m\xe9thode &#39;PathStyle&#39; ou &#39;UrlStyle&#39; ?",id:"loffre-s3-cloud-temple-utilise-t-elle-la-m\xe9thode-pathstyle-ou-urlstyle-",level:3},{value:"Quel est le nombre maximum de buckets par tenant ?",id:"quel-est-le-nombre-maximum-de-buckets-par-tenant-",level:3},{value:"Comment ajouter le HASH d&#39;un fichier lors de l&#39;upload d&#39;un objet?",id:"comment-ajouter-le-hash-dun-fichier-lors-de-lupload-dun-objet",level:3},{value:"Comment est factur\xe9 l&#39;offre S3 de Cloud Temple ?",id:"comment-est-factur\xe9-loffre-s3-de-cloud-temple-",level:3},{value:"Prochains jalons",id:"prochains-jalons",level:2}];function a(e){let s={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h2,{id:"caract\xe9ristiques-techniques-g\xe9n\xe9rales",children:"Caract\xe9ristiques techniques g\xe9n\xe9rales"}),"\n",(0,i.jsx)(s.h3,{id:"solution-bas\xe9e-sur-dell-ecs",children:"Solution bas\xe9e sur Dell ECS"}),"\n",(0,i.jsxs)(s.p,{children:["La solution ",(0,i.jsx)(s.strong,{children:"Elastic Cloud Storage (ECS)"})," de Dell est \xe0 la base de l'offre de stockage objet Cloud Temple. Elle se distingue comme une r\xe9f\xe9rence sur le march\xe9 du stockage cloud.\nCette offre se caract\xe9rise par sa haute performance et son adh\xe9rence aux normes industrielles, assurant une\ncompatibilit\xe9 de 97% avec le protocole de stockage objet d'Amazon AWS S3."]}),"\n",(0,i.jsx)(s.p,{children:"Sa conception standardis\xe9e et r\xe9versible garantit une int\xe9gration et une transition fluides pour les utilisateurs,\nsoulignant la flexibilit\xe9 et la convivialit\xe9 du service."}),"\n",(0,i.jsx)(s.h3,{id:"produit-de-type-r\xe9gion",children:"Produit de type r\xe9gion"}),"\n",(0,i.jsxs)(s.p,{children:["Le stockage S3 Cloud Temple stocke les donn\xe9es de mani\xe8re native sur ",(0,i.jsx)(s.strong,{children:"trois zones de disponibilit\xe9 distinctes"})," au sein d'une m\xeame r\xe9gion Cloud Temple. Cette architecture est con\xe7ue pour offrir une haute disponibilit\xe9 et une r\xe9silience maximale face aux pannes mat\xe9rielles ou logicielles :"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Erasure Coding (EC) : Nous utilisons par d\xe9faut un sch\xe9ma EC 12+4, qui divise les donn\xe9es en 12 segments de donn\xe9es et 4 segments de parit\xe9. Cette technique permet de reconstruire les donn\xe9es m\xeame en cas de perte de plusieurs segments."}),"\n",(0,i.jsx)(s.li,{children:"Distribution des donn\xe9es : Les segments EC sont r\xe9partis sur diff\xe9rents n\u0153uds et racks, assurant une protection contre les pannes de disques, de n\u0153uds et m\xeame de racks entiers."}),"\n",(0,i.jsx)(s.li,{children:"R\xe9plication g\xe9ographique : Pour une protection suppl\xe9mentaire, les donn\xe9es sont r\xe9pliqu\xe9es sur 3 zones de disponibilit\xe9s, offrant une r\xe9silience face aux sinistres locaux."}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Cette r\xe9plication assure que m\xeame en cas de d\xe9faillance d'une zone, les donn\xe9es restent accessibles et intactes,\ncontribuant ainsi \xe0 une infrastructure de stockage hautement r\xe9siliente."}),"\n",(0,i.jsx)(s.h3,{id:"conformit\xe9-et-certification",children:"Conformit\xe9 et certification"}),"\n",(0,i.jsx)(s.p,{children:"Notre infrastructure de stockage objet S3 est con\xe7ue pour r\xe9pondre aux normes les plus strictes en mati\xe8re de protection des donn\xe9es et de conformit\xe9 r\xe9glementaire. Voici un aper\xe7u de nos certifications, normes de conformit\xe9, et processus d'audit :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Qualification SecNumCloud : Notre infrastructure est certifi\xe9e SecNumCloud, le r\xe9f\xe9rentiel de s\xe9curit\xe9 de l'ANSSI pour les services de cloud computing. Cette qualification garantit un niveau \xe9lev\xe9 de s\xe9curit\xe9 et de souverainet\xe9 des donn\xe9es, sp\xe9cifiquement adapt\xe9 aux exigences fran\xe7aises et europ\xe9ennes."}),"\n",(0,i.jsx)(s.li,{children:"Certification HDS (H\xe9bergement de Donn\xe9es de Sant\xe9) : Notre infrastructure est con\xe7ue pour r\xe9pondre aux exigences de l'h\xe9bergement de donn\xe9es de sant\xe9, offrant un niveau de s\xe9curit\xe9 adapt\xe9 aux donn\xe9es m\xe9dicales sensibles."}),"\n",(0,i.jsx)(s.li,{children:"Certification ISO 27001 : Nous suivons les meilleures pratiques d\xe9finies par la norme ISO 27001 pour la gestion de la s\xe9curit\xe9 de l'information."}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"chiffrement-natif",children:"Chiffrement natif"}),"\n",(0,i.jsx)(s.p,{children:"Le chiffrement est syst\xe9matiquement appliqu\xe9 sur les donn\xe9es stock\xe9es, utilisant des m\xe9thodes et des algorithmes sp\xe9cifiques pour s\xe9curiser\nles donn\xe9es. Durant le transfert, le protocole TLS 1.3 assure la protection des donn\xe9es."}),"\n",(0,i.jsx)(s.p,{children:"Pour les donn\xe9es stock\xe9es, plusieurs options sont disponibles :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["le ",(0,i.jsx)(s.strong,{children:"chiffrement c\xf4t\xe9 client"}),", o\xf9 l'utilisateur contr\xf4le les cl\xe9s et le processus,"]}),"\n",(0,i.jsxs)(s.li,{children:["le ",(0,i.jsx)(s.strong,{children:"chiffrement c\xf4t\xe9 serveur"}),", o\xf9 diff\xe9rentes cl\xe9s peuvent \xeatre utilis\xe9es, telles que celles g\xe9r\xe9es par Cloud Temple ou celles fournies par le client."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Voici un tableau qui r\xe9sume les diff\xe9rents mod\xe8les de chiffrement propos\xe9s par le stockage S3 Cloud Temple,\nainsi que leurs avantages et inconv\xe9nients, y compris les protocoles utilis\xe9s :"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Mod\xe8le de Chiffrement"}),(0,i.jsx)(s.th,{children:"Protocole Utilis\xe9"}),(0,i.jsx)(s.th,{children:"Avantages"}),(0,i.jsx)(s.th,{children:"Inconv\xe9nients"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"Chiffrement c\xf4t\xe9 serveur avec cl\xe9s g\xe9r\xe9es par S3 (SSE-ECS)"})}),(0,i.jsx)(s.td,{children:"AES-256"}),(0,i.jsx)(s.td,{children:"- Gestion simplifi\xe9e des cl\xe9s  - Transparence pour l'utilisateur"}),(0,i.jsx)(s.td,{children:"- Moins de contr\xf4le pour l'utilisateur sur les cl\xe9s de chiffrement"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"Chiffrement c\xf4t\xe9 serveur avec cl\xe9s g\xe9r\xe9es par le client (SSE-C)"})}),(0,i.jsx)(s.td,{children:"AES-256"}),(0,i.jsx)(s.td,{children:"- Contr\xf4le total sur les cl\xe9s de chiffrement  - S\xe9curit\xe9 renforc\xe9e"}),(0,i.jsx)(s.td,{children:"- N\xe9cessite une gestion des cl\xe9s c\xf4t\xe9 client  - Complexit\xe9 op\xe9rationnelle accrue"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"Chiffrement c\xf4t\xe9 client (CSE)"})}),(0,i.jsx)(s.td,{children:"D\xe9pend de l'impl\xe9mentation c\xf4t\xe9 client"}),(0,i.jsx)(s.td,{children:"- Contr\xf4le maximal sur la s\xe9curit\xe9 des donn\xe9es  - Les donn\xe9es sont chiffr\xe9es avant de quitter le p\xe9rim\xe8tre de l'entreprise"}),(0,i.jsx)(s.td,{children:"- Gestion complexe des cl\xe9s  - Performance potentiellement impact\xe9e par le processus de chiffrement/d\xe9chiffrement c\xf4t\xe9 client"})]})]})]}),"\n",(0,i.jsx)(s.p,{children:"Voici quelques explications sur ce tableau :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"SSE-ECS (Server-Side Encryption with ECS managed keys)"})," : Dans ce mod\xe8le, le stockage S3 Cloud Temple s'occupe du chiffrement et de la gestion des cl\xe9s.\nLes donn\xe9es sont chiffr\xe9es automatiquement lorsqu'elles sont stock\xe9es sur le disque. Cela offre une approche simplifi\xe9e du chiffrement, sans effort suppl\xe9mentaire pour les clients."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"SSE-C (Server-Side Encryption with Customer provided keys)"})," : Ce mod\xe8le permet aux clients de fournir leurs propres cl\xe9s\nde chiffrement pour une s\xe9curit\xe9 renforc\xe9e. Le stockage S3 Cloud Temple utilise ces cl\xe9s pour chiffrer les donn\xe9es avant leur stockage.\nCela offre un contr\xf4le accru, mais n\xe9cessite une gestion s\xe9curis\xe9e des cl\xe9s de chiffrement c\xf4t\xe9 client."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"CSE (Client-Side Encryption)"})," : Le chiffrement c\xf4t\xe9 client implique que les donn\xe9es soient chiffr\xe9es par le client\navant d'\xeatre envoy\xe9es au stockage S3 Cloud Temple. Cela assure que les donn\xe9es sont s\xe9curis\xe9es tout au long de leur transfert et stockage,\nmais requiert une gestion de cl\xe9s et un processus de chiffrement/d\xe9chiffrement du c\xf4t\xe9 du client."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"niveaux-de-service",children:"Niveaux de service"}),"\n",(0,i.jsx)(s.p,{children:"Voici les principaux niveaux de services de l'offre S3 Cloud Temple :"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Engagement"}),(0,i.jsx)(s.th,{children:"Cible"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Disponibilit\xe9 de la plateforme Stockage Objet Cloud Temple"}),(0,i.jsx)(s.td,{children:"99.99% mesur\xe9 mensuellement plage de maintenance incluse"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Durabilit\xe9 des donn\xe9es"}),(0,i.jsx)(s.td,{children:"99,99999999%"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Bande passante r\xe9seau garantie"}),(0,i.jsx)(s.td,{children:"1 Gbp/seconde"})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"notion-de-bucket-dans-l\xe9cosyst\xe8me-du-stockage-objet",children:'Notion de "bucket" dans l\'\xe9cosyst\xe8me du stockage objet'}),"\n",(0,i.jsxs)(s.p,{children:["Un bucket S3, popularis\xe9 par le service Amazon Simple Storage Service (Amazon S3), est ",(0,i.jsx)(s.strong,{children:"un conteneur de stockage public"})," dans le cloud con\xe7u pour conserver une quantit\xe9 illimit\xe9e de donn\xe9es de mani\xe8re s\xe9curis\xe9e, fiable et hautement disponible. Chaque bucket S3 peut stocker des fichiers (appel\xe9s \"objets\" dans S3), allant de documents et images \xe0 de grandes bases de donn\xe9es ou fichiers vid\xe9o. Les buckets sont utilis\xe9s pour organiser l\u2019espace de stockage de mani\xe8re logique au sein du stockage objet Cloud Temple, et chaque bucket est identifi\xe9 par un nom unique fourni par l'utilisateur. Les buckets S3 offrent des fonctionnalit\xe9s avanc\xe9es, comme la gestion des versions, la s\xe9curisation des donn\xe9es via des politiques de contr\xf4le d'acc\xe8s, et la possibilit\xe9 d'immutabilit\xe9."]}),"\n",(0,i.jsx)(s.h2,{id:"lister-lensemble-des-bucket-s3-de-votre-tenant",children:"Lister l'ensemble des bucket S3 de votre tenant"}),"\n",(0,i.jsxs)(s.p,{children:["Vous pouvez acc\xe9der \xe0 l'ensemble de vos buckets via le menu '",(0,i.jsx)(s.strong,{children:"Stockage Objet"}),"' de la console Cloud Temple :"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(8836).Z+"",width:"1914",height:"953"})}),"\n",(0,i.jsxs)(s.p,{children:["Vous pouvez voir tous les comptes cr\xe9\xe9s sur votre tenant et autoris\xe9 \xe0 acc\xe9der au service S3 via l'onglet '",(0,i.jsx)(s.strong,{children:"Comptes de stockage"}),"'."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(1480).Z+"",width:"1920",height:"958"})}),"\n",(0,i.jsx)(s.h2,{id:"cr\xe9ation-dun-nouveau-compte-de-stockage",children:"Cr\xe9ation d'un nouveau compte de stockage"}),"\n",(0,i.jsxs)(s.p,{children:["La cr\xe9ation d'un compte de stockage sur votre tenant se fait en appuyant sur le bouton '",(0,i.jsx)(s.strong,{children:"Nouveau compte de stockage"}),"' en haut \xe0 droite, dans l'onglet '",(0,i.jsx)(s.strong,{children:"Comptes de stockage"}),"' :"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(916).Z+"",width:"1658",height:"592"})}),"\n",(0,i.jsx)(s.p,{children:"La plateforme vous donne alors la clef d'acc\xe8s et la clef secr\xe8te de votre bucket :"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(4969).Z+"",width:"1500",height:"856"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"ATTENTION :"})," Les cl\xe9s secr\xe8te et d'acc\xe8s sont pr\xe9sent\xe9es une seule fois. Apr\xe8s cette premi\xe8re apparition, il devient impossible de consulter \xe0 nouveau la cl\xe9 secr\xe8te. Il est donc essentiel de noter ces informations imm\xe9diatement ; faute de quoi, il vous sera n\xe9cessaire de g\xe9n\xe9rer une nouvelle paire de cl\xe9s."]}),"\n",(0,i.jsx)(s.p,{children:"La regeneration se fait au niveau des options de la clefs en choisissant l'option \"R\xe9initialiser cl\xe9 d'acc\xe8s\"."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(8544).Z+"",width:"2906",height:"422"})}),"\n",(0,i.jsx)(s.h2,{id:"cr\xe9ation-dun-bucket-s3",children:"Cr\xe9ation d'un bucket S3"}),"\n",(0,i.jsxs)(s.p,{children:["La cr\xe9ation de nouveau bucket se fait en cliquant sur le bouton '",(0,i.jsx)(s.strong,{children:"Nouveau bucket"}),"' en haut \xe0 droite de l'\xe9cran :"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(7974).Z+"",width:"1640",height:"211"})}),"\n",(0,i.jsx)(s.p,{children:"Une fen\xeatre s'affiche alors et vous devez renseigner :"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["La ",(0,i.jsx)(s.strong,{children:"r\xe9gion"})," de cr\xe9ation de votre bucket,"]}),"\n",(0,i.jsxs)(s.li,{children:["Le ",(0,i.jsx)(s.strong,{children:"type"})," de bucket : performant ou archivage,"]}),"\n",(0,i.jsxs)(s.li,{children:["Le ",(0,i.jsx)(s.strong,{children:"nom"})," de votre bucket (il doit \xeatre unique)."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(344).Z+"",width:"1554",height:"726"})}),"\n",(0,i.jsxs)(s.p,{children:["Au 3 Avril 2024, la r\xe9gion disponible est ",(0,i.jsx)(s.strong,{children:"FR1"})," (Paris) et seul le type performant est disponible."]}),"\n",(0,i.jsx)(s.p,{children:"Vous devez aussi choisir qui peut acc\xe9der \xe0 votre bucket :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Acc\xe8s ",(0,i.jsx)(s.strong,{children:"Priv\xe9"})," : Par d\xe9faut, l'acc\xe8s est limit\xe9 aux adresses IP sp\xe9cifiques de Cloud Temple."]}),"\n",(0,i.jsxs)(s.li,{children:["Acc\xe8s ",(0,i.jsx)(s.strong,{children:"Public"})," : L'acc\xe8s est ouvert \xe0 toutes les adresses Internet (notamment via la r\xe8gle 0.0.0.0/0). Nous d\xe9conseillons cette configuration en raison de ses implications en termes de s\xe9curit\xe9."]}),"\n",(0,i.jsxs)(s.li,{children:["Acc\xe8s ",(0,i.jsx)(s.strong,{children:"Personnalis\xe9"})," : Cette option vous permet de sp\xe9cifier les adresses IPv4 ou les plages de sous-r\xe9seaux que vous souhaitez autoriser."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"association-dun-compte-de-stockage-\xe0-un-bucket",children:"Association d'un compte de stockage \xe0 un bucket"}),"\n",(0,i.jsxs)(s.p,{children:["Les associations de compte aux buckets sont r\xe9alis\xe9es dans l'onglet '",(0,i.jsx)(s.strong,{children:"Politiques"}),"'"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(8633).Z+"",width:"1920",height:"958"})}),"\n",(0,i.jsx)(s.p,{children:"Cette association permet de donner l'acc\xe8s du compte de stockage au bucket. Il y trois r\xf4le :"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Maintener"})," : Les droits lecture, ecriture, gestion des droits et gestion de la politique"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Lecteur"})," : Lire les fichiers dans les buckets et les t\xe9l\xe9charger."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Ecrivain"})," : Lire et \xe9diter, modifier, supprimer les fichiers dans les buckets."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(5854).Z+"",width:"1670",height:"602"})}),"\n",(0,i.jsx)(s.h2,{id:"parcourir-un-bucket-s3",children:"Parcourir un bucket S3"}),"\n",(0,i.jsxs)(s.p,{children:["Lorsque vous cliquez sur le nom d'un bucket, vous avez acc\xe8s en premier \xe0 l'onglet '",(0,i.jsx)(s.strong,{children:"Fichiers"}),"' pour voir son contenu :"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(2790).Z+"",width:"1920",height:"957"})}),"\n",(0,i.jsxs)(s.p,{children:["Dans l'onglet '",(0,i.jsx)(s.strong,{children:"Param\xe8tres"}),"' vous pouvez voir le d\xe9tail des informations de votre bucket S3 :"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(3472).Z+"",width:"1920",height:"958"})}),"\n",(0,i.jsx)(s.p,{children:"Vous avez alors :"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsx)(s.li,{children:"Le nom du bucket S3,"}),"\n",(0,i.jsx)(s.li,{children:"Sa r\xe9gion"}),"\n",(0,i.jsx)(s.li,{children:"Le nombre d'objet qu'il contient et la taille en octets du bucket,"}),"\n",(0,i.jsx)(s.li,{children:"Son point de terminaison,"}),"\n",(0,i.jsxs)(s.li,{children:["Les param\xe8tres de cycle de vie qui d\xe9finissent notamment l'expiration des objets du bucket. '",(0,i.jsx)(s.strong,{children:"0"}),"' correspond \xe0 une r\xe9tention infinie."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Vous pouvez modifier le param\xe8tre de r\xe9tention via le bouton '",(0,i.jsx)(s.strong,{children:"Modifier"}),"' du cycle de vie :"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(8473).Z+"",width:"436",height:"301"})}),"\n",(0,i.jsx)(s.p,{children:"Enfin, vous pouvez modifier sa typologie d'acc\xe8s."}),"\n",(0,i.jsx)(s.h2,{id:"limitations-des-acc\xe8s-\xe0-vos-bucket-s3",children:"Limitations des acc\xe8s \xe0 vos bucket S3"}),"\n",(0,i.jsx)(s.p,{children:"Il est tr\xe8s simple de configurer les restrictions d'acc\xe8s \xe0 vos buckets S3. Lors de la cr\xe9ation d'un bucket, vous avez le choix entre trois configurations d'acc\xe8s :"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(344).Z+"",width:"1554",height:"726"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Acc\xe8s ",(0,i.jsx)(s.strong,{children:"Priv\xe9"})," : Par d\xe9faut, l'acc\xe8s est limit\xe9 aux adresses IP sp\xe9cifiques de Cloud Temple."]}),"\n",(0,i.jsxs)(s.li,{children:["Acc\xe8s ",(0,i.jsx)(s.strong,{children:"Public"})," : L'acc\xe8s est ouvert \xe0 toutes les adresses Internet (notamment via la r\xe8gle 0.0.0.0/0). Nous d\xe9conseillons cette configuration en raison de ses implications en termes de s\xe9curit\xe9."]}),"\n",(0,i.jsxs)(s.li,{children:["Acc\xe8s ",(0,i.jsx)(s.strong,{children:"Personnalis\xe9"})," : Cette option vous permet de sp\xe9cifier les adresses IPv4 ou les plages de sous-r\xe9seaux que vous souhaitez autoriser:"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(409).Z+"",width:"1542",height:"906"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.em,{children:"Le support IPv6 est pr\xe9vu pour le premier semestre 2025."})}),"\n",(0,i.jsx)(s.h2,{id:"suppression-dun-bucket-s3",children:"Suppression d'un bucket S3"}),"\n",(0,i.jsxs)(s.p,{children:["La suppression d'un bucket se fait dans les actions associ\xe9es au bucket en choisissant l'option ",(0,i.jsx)(s.strong,{children:"'Supprimer'"}),"."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(6028).Z+"",width:"1566",height:"417"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.em,{children:(0,i.jsx)(s.strong,{children:"ATTENTION : La suppression est d\xe9finitive et il n'existe aucun moyen de r\xe9cup\xe9rer les donn\xe9es."})})}),"\n",(0,i.jsx)(s.h2,{id:"faq",children:"FAQ"}),"\n",(0,i.jsx)(s.h3,{id:"quelle-est-la-taille-maximale-de-fichier-pouvant-\xeatre-manipul\xe9-avec-la-console-web-",children:"Quelle est la taille maximale de fichier pouvant \xeatre manipul\xe9 avec la console web ?"}),"\n",(0,i.jsx)(s.p,{children:"La limite en web est de 40Mo par fichier. Au del\xe0, il faut utiliser un client natif S3 avec l'API."}),"\n",(0,i.jsx)(s.h3,{id:"quel-client-s3-puis-je-utiliser-pour-g\xe9rer-mes-fichiers-",children:"Quel client S3 puis-je utiliser pour g\xe9rer mes fichiers ?"}),"\n",(0,i.jsx)(s.h4,{id:"minio",children:"MINIO"}),"\n",(0,i.jsx)(s.p,{children:"Vous pouvez utiliser le client minio par exemple :"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://min.io/docs/minio/linux/reference/minio-mc.html",children:"https://min.io/docs/minio/linux/reference/minio-mc.html"})}),"\n",(0,i.jsx)(s.p,{children:"Par exemple :"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"    mc alias set <alias_name> https://reks2ee2b1.s3.fr1.cloud-temple.com <access_key> <secret_key>\n"})}),"\n",(0,i.jsx)(s.p,{children:"Pousser un fichier :"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"    mc cp test.txt <alias_name>/<bucket_name>\n"})}),"\n",(0,i.jsx)(s.p,{children:"R\xe9cup\xe9rer un fichier :"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"    mc ls <alias_name>/<bucket_name>\n"})}),"\n",(0,i.jsx)(s.h4,{id:"cloud-berry-explorer",children:"Cloud Berry Explorer"}),"\n",(0,i.jsxs)(s.p,{children:["vous pouvez aussi utiliser ",(0,i.jsx)(s.a,{href:"https://www.msp360.com/explorer/",children:"Cloud Berry Explorer"}),"."]}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsx)(s.li,{children:"Connectez vous en utilisant votre endpoint et votre clef :"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(7994).Z+"",width:"353",height:"344"})}),"\n",(0,i.jsxs)(s.ol,{start:"2",children:["\n",(0,i.jsx)(s.li,{children:"Une fois connect\xe9, saisissez le nom du bucket dans la barre de navigation:"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(6207).Z+"",width:"896",height:"171"})}),"\n",(0,i.jsxs)(s.ol,{start:"3",children:["\n",(0,i.jsx)(s.li,{children:"Vous pourrez alors utiliser le bucket normalement :"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(7836).Z+"",width:"875",height:"191"})}),"\n",(0,i.jsx)(s.h4,{id:"winscp-63x",children:"WINSCP 6.3.x"}),"\n",(0,i.jsxs)(s.p,{children:["Vous pouvez utiliser ",(0,i.jsx)(s.a,{href:"https://winscp.net/eng/download.php",children:"Winscp"})," :"]}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsx)(s.li,{children:"Connectez vous en utilisant votre endpoint, votre clef d'acc\xe8s et votre clef secrete :"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(161).Z+"",width:"634",height:"417"})}),"\n",(0,i.jsxs)(s.ol,{start:"2",children:["\n",(0,i.jsx)(s.li,{children:"Une fois connect\xe9, utilisez WINSCP normalement comme un site FTP ou SCP :"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(8382).Z+"",width:"1074",height:"684"})}),"\n",(0,i.jsx)(s.h3,{id:"loffre-s3-cloud-temple-utilise-t-elle-la-m\xe9thode-pathstyle-ou-urlstyle-",children:"L'offre S3 Cloud Temple utilise-t-elle la m\xe9thode 'PathStyle' ou 'UrlStyle' ?"}),"\n",(0,i.jsxs)(s.p,{children:["De part les contraintes associ\xe9es \xe0 la qualification SecNumCloud, \xe0 cet instant, l'offre est pr\xe9vue pour utiliser la m\xe9thode '",(0,i.jsx)(s.strong,{children:"PathStyle"}),"'. Nous travaillons \xe0 ce que la m\xe9thode '",(0,i.jsx)(s.strong,{children:"UrlStyle"}),"' soit disponible S1 2025."]}),"\n",(0,i.jsx)(s.h3,{id:"quel-est-le-nombre-maximum-de-buckets-par-tenant-",children:"Quel est le nombre maximum de buckets par tenant ?"}),"\n",(0,i.jsx)(s.p,{children:"Le nombre maximum de buckets pour 1 tenant est de 999."}),"\n",(0,i.jsx)(s.h3,{id:"comment-ajouter-le-hash-dun-fichier-lors-de-lupload-dun-objet",children:"Comment ajouter le HASH d'un fichier lors de l'upload d'un objet?"}),"\n",(0,i.jsx)(s.p,{children:"Globalement, le HASH des fichiers est support\xe9 sur notre stockage objet via les metadatas. Certains clients permettent de calculer \xe0 la vol\xe9e un HASH et de l'ajouter en metadata (minio-mc avec md5 par exemple), pour d'autre, il faut pr\xe9ciser la donn\xe9e en metadata directement."}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Cas de l'ajout d'un HASH avec le client minio-mc : ce client supporte le calcul \xe0 la vol\xe9e d'un hash MD5 et le stockage dans les metadatas"}),"\n",(0,i.jsxs)(s.p,{children:["\u2570\u2500\u27A4  cat test.txt",(0,i.jsx)(s.br,{}),"\n","Ceci est un test\n\u2570\u2500\u27A4  md5 test.txt",(0,i.jsx)(s.br,{}),"\n","MD5 (test.txt) = 8b34b2754802a46e3475998dfcf76f83\n\u2570\u2500\u27A4  mc cp -md5 test.txt CLR-PUB/CLR-PUB\n...lesur/Downloads/test.txt: 18 B / 18 B  \u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593  111 B/s 0s\n\u2570\u2500\u27A4  mc stat CLR-PUB/CLR-PUB/test.txt\nName      : test.txt\nDate      : 2024-06-08 10:21:31 CEST\nSize      : 18 B",(0,i.jsx)(s.br,{}),"\n","ETag      : 8b34b2754802a46e3475998dfcf76f83\nType      : file\nEncryption: SSE-S3\nMetadata  :\nContent-Type: text/plain"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:'Exemple d\'ajout un sha256 "manuellement" : pour ce faire on utilise les attributs S3 du fichier.'}),"\n",(0,i.jsxs)(s.p,{children:["\u2570\u2500\u27A4  cat test.txt\nCeci est un test\n\u2570\u2500\u27A4  shasum -a 256 test.txt",(0,i.jsx)(s.br,{}),"\n","2c5165a6a9af06b197b63b924d7ebaa0448bc6aebf8d2e8e3f58ff0597f12682  test.txt\n\u2570\u2500\u27A4  mc cp -md5 test.txt CLR-PUB/CLR-PUB -attr \"checksum-sha256=$(shasum -a 256 test.txt | cut -f1 -d' ')\"\n...lesur/Downloads/test.txt: 18 B / 18 B  \u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593  141 B/s 0s\n\u2570\u2500\u27A4  mc stat CLR-PUB/CLR-PUB/test.txt",(0,i.jsx)(s.br,{}),"\n","Name      : test.txt\nDate      : 2024-06-08 10:41:17 CEST\nSize      : 18 B",(0,i.jsx)(s.br,{}),"\n","ETag      : 8b34b2754802a46e3475998dfcf76f83\nType      : file\nEncryption: SSE-S3\nMetadata  :\nX-Amz-Meta-Checksum-Sha256: 2c5165a6a9af06b197b63b924d7ebaa0448bc6aebf8d2e8e3f58ff0597f12682\nContent-Type              : text/plain"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"comment-est-factur\xe9-loffre-s3-de-cloud-temple-",children:"Comment est factur\xe9 l'offre S3 de Cloud Temple ?"}),"\n",(0,i.jsx)(s.p,{children:"Le prix est un prix mensuel, au Gio de stockage, factur\xe9 mensuellement. Cependant, la plateforme comptabilise l'usage \xe0 l'heure et r\xe9alise la facturation sur une base mensuelle de 720 heures."}),"\n",(0,i.jsxs)(s.p,{children:["Par exemple, si vous consommez dans le mois 30 Gio pendant 1h puis rien, puis quelques jours plus tard 30Gio pendants 2h, la facture mensuelle sera de ",(0,i.jsx)(s.em,{children:"( Prix (1 x 30Gio) + 2 x Prix (30Gio) ) / 720"})," sur le mois consid\xe9r\xe9. La facturation est terme \xe9chue."]}),"\n",(0,i.jsx)(s.h2,{id:"prochains-jalons",children:"Prochains jalons"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsxs)(s.em,{children:[(0,i.jsx)(s.strong,{children:"Les URL Pr\xe9sign\xe9es"})," seront disponible fin Q4 2024"]})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsxs)(s.em,{children:[(0,i.jsx)(s.strong,{children:"L'immutabilit\xe9"})," d'un bucket S3 est pr\xe9vue pour S2 2024."]})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsxs)(s.em,{children:[(0,i.jsx)(s.strong,{children:"S3 Glacier"})," est pr\xe9vu pour fin S1 2025"]})}),"\n"]})]})}function u(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},5854:function(e,s,n){n.d(s,{Z:function(){return t}});let t=n.p+"assets/images/S3_account_access-8513a1352c5c333d27df44240d529f29.png"},8633:function(e,s,n){n.d(s,{Z:function(){return t}});let t=n.p+"assets/images/S3_account_assign-2a5f83c096a82f7f49b3b4b8e44151ce.png"},1480:function(e,s,n){n.d(s,{Z:function(){return t}});let t=n.p+"assets/images/S3_accounts-41a1aca16bed7e1b8fe98e5ed31f3c64.png"},7994:function(e,s,n){n.d(s,{Z:function(){return t}});let t=n.p+"assets/images/S3_cloudberry_001-db91dad9823d7762885bd7bfc8c578ee.png"},6207:function(e,s,n){n.d(s,{Z:function(){return t}});let t=n.p+"assets/images/S3_cloudberry_002-88c2a1cd9e3a7501af83e78a6a78c356.png"},7836:function(e,s,n){n.d(s,{Z:function(){return t}});let t=n.p+"assets/images/S3_cloudberry_003-409de16a9b4936d86157d6b9ac9e468d.png"},7974:function(e,s,n){n.d(s,{Z:function(){return t}});let t=n.p+"assets/images/S3_create-a45b0b43f43972fde4f8a64b9b2f6200.png"},916:function(e,s,n){n.d(s,{Z:function(){return t}});let t=n.p+"assets/images/S3_create_account-f7e00ef245df8659c671e3429f971591.png"},344:function(e,s,n){n.d(s,{Z:function(){return t}});let t=n.p+"assets/images/S3_create_popup_001-3942bb7bc5c1c6a4bf73f41d7b70a45e.png"},409:function(e,s,n){n.d(s,{Z:function(){return t}});let t=n.p+"assets/images/S3_create_popup_002-2954e58f6a24b068b165cb7047f42a67.png"},6028:function(e,s,n){n.d(s,{Z:function(){return t}});let t=n.p+"assets/images/S3_delete-29dd8dc802308c074e7ea80fcd3fb36c.png"},2790:function(e,s,n){n.d(s,{Z:function(){return t}});let t=n.p+"assets/images/S3_files-0dfc93bde306eab07d163d7b9239dbbd.png"},8544:function(e,s,n){n.d(s,{Z:function(){return t}});let t=n.p+"assets/images/S3_keyregen-180948c2a4690f62526f77c9271a4295.png"},8473:function(e,s,n){n.d(s,{Z:function(){return t}});let t=n.p+"assets/images/S3_lifecycle-f05d36e745edda3d202d57f17ff31c0f.png"},8836:function(e,s,n){n.d(s,{Z:function(){return t}});let t=n.p+"assets/images/S3_list_bucket-5e012ab794be8ba4bd0df3fb88675804.png"},3472:function(e,s,n){n.d(s,{Z:function(){return t}});let t=n.p+"assets/images/S3_params-3bd5f14111d1e0aef41d7e81fb74d20e.png"},4969:function(e,s,n){n.d(s,{Z:function(){return t}});let t=n.p+"assets/images/S3_storage_keys-a98eac9eb2db6b45b0228f1803f96024.png"},161:function(e,s,n){n.d(s,{Z:function(){return t}});let t=n.p+"assets/images/S3_winscp_001-b11a4d200795aa4eb3ce1721b6f14eb6.png"},8382:function(e,s,n){n.d(s,{Z:function(){return t}});let t=n.p+"assets/images/S3_winscp_002-53a1260e2e8c1bdf5a71d6fdde6f605e.png"},65:function(e,s,n){n.d(s,{Z:function(){return c},a:function(){return l}});var t=n(7294);let i={},r=t.createContext(i);function l(e){let s=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);