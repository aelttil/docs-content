"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["1856"],{808:function(e,n,s){s.r(n),s.d(n,{metadata:()=>i,contentTitle:()=>d,default:()=>c,assets:()=>o,toc:()=>l,frontMatter:()=>a});var i=JSON.parse('{"id":"network/private_network","title":"R\xe9seaux Priv\xe9s","description":"Architecture R\xe9seau Cloud Temple","source":"@site/docs/network/private_network.md","sourceDirName":"network","slug":"/network/private_network","permalink":"/docs-content/docs/network/private_network","draft":false,"unlisted":false,"editUrl":"https://github.com/aelttil/docs-content/docs/network/private_network.md","tags":[],"version":"current","frontMatter":{"title":"R\xe9seaux Priv\xe9s"},"sidebar":"docSidebar","previous":{"title":"Connectivit\xe9 Internet","permalink":"/docs-content/docs/network/internet"},"next":{"title":"D\xe9ployer un firewall opensource pfSense","permalink":"/docs-content/docs/network/quickstart_network"}}'),t=s("5893"),r=s("65");let a={title:"R\xe9seaux Priv\xe9s"},d=void 0,o={},l=[{value:"Architecture R\xe9seau Cloud Temple",id:"architecture-r\xe9seau-cloud-temple",level:2},{value:"La technologie VPLS",id:"la-technologie-vpls",level:3},{value:"Le r\xe9seau dans l&#39;offre de virtualisation VMware",id:"le-r\xe9seau-dans-loffre-de-virtualisation-vmware",level:3},{value:"R\xe9seaux priv\xe9s r\xe9gionaux",id:"r\xe9seaux-priv\xe9s-r\xe9gionaux",level:2},{value:"Au sein d&#39;un tenant",id:"au-sein-dun-tenant",level:3},{value:"Visualisation de la propagation de vos r\xe9seaux",id:"visualisation-de-la-propagation-de-vos-r\xe9seaux",level:4},{value:"Modification de la propagation",id:"modification-de-la-propagation",level:4},{value:"Suppression d&#39;un r\xe9seau",id:"suppression-dun-r\xe9seau",level:4},{value:"Partage de r\xe9seau entre tenants",id:"partage-de-r\xe9seau-entre-tenants",level:3},{value:"Connectivit\xe9 priv\xe9 externe",id:"connectivit\xe9-priv\xe9-externe",level:2},{value:"Circuits d\xe9di\xe9s",id:"circuits-d\xe9di\xe9s",level:2},{value:"Aller plus loin",id:"aller-plus-loin",level:2}];function u(e){let n={a:"a",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"architecture-r\xe9seau-cloud-temple",children:"Architecture R\xe9seau Cloud Temple"}),"\n",(0,t.jsxs)(n.p,{children:["L'offre ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"Private Network"})})," permet une connectivit\xe9 r\xe9seau de niveau 2 priv\xe9e entre vos services. La capacit\xe9 d\u2019\xe9change de chaque zone de disponibilit\xe9 est de plusieurs centaines de gigabits et nous ajoutons r\xe9guli\xe8rement de la capacit\xe9 en fonction de nos besoins. Nous \xe9clairons nous m\xeame notre r\xe9seau optique."]}),"\n",(0,t.jsx)(n.h3,{id:"la-technologie-vpls",children:"La technologie VPLS"}),"\n",(0,t.jsxs)(n.p,{children:["Le r\xe9seau global Cloud Temple utilise la technologie ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://fr.wikipedia.org/wiki/Virtual_Private_LAN_Service",children:"VPLS"})}),".\n",(0,t.jsx)(n.strong,{children:"VPLS"})," est un VPN de couche 2 point-\xe0-multipoint bas\xe9 sur Ethernet. Il permet de connecter des sites g\xe9ographiquement\ndispers\xe9s les uns aux autres \xe0 travers un r\xe9seau MPLS. Pour les clients, tous les sites semblent \xeatre dans le m\xeame\nLAN Ethernet, m\xeame si le trafic est transport\xe9 par le r\xe9seau Cloud Temple."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VPLS"}),", dans son impl\xe9mentation et sa configuration, a beaucoup en commun avec un VPN de couche 2. Dans VPLS, un paquet qui provient\nd'un r\xe9seau client est d'abord envoy\xe9 \xe0 un dispositif client (CE) (par exemple, un routeur ou un commutateur Ethernet).\nIl est ensuite envoy\xe9 \xe0 un routeur de bord de fournisseur (PE) au sein du r\xe9seau du fournisseur de services.\nLe paquet traverse le r\xe9seau du fournisseur de services sur un chemin \xe0 commutation d'\xe9tiquettes MPLS (LSP).\nIl arrive au routeur PE de sortie, qui transf\xe8re ensuite le trafic vers le dispositif CE sur le site client de destination.\nLa diff\xe9rence r\xe9side dans le fait que, pour ",(0,t.jsx)(n.strong,{children:"VPLS"}),", les paquets peuvent traverser le r\xe9seau du fournisseur de\nservices de mani\xe8re point-\xe0-multipoint, ce qui signifie qu'un paquet provenant d'un dispositif CE peut \xeatre\ndiffus\xe9 \xe0 tous les routeurs PE participant \xe0 une instance de routage ",(0,t.jsx)(n.strong,{children:"VPLS"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Le circuit ",(0,t.jsx)(n.strong,{children:"VPLS"})," d'un client peut \xeatre ",(0,t.jsx)(n.strong,{children:"\xe9tendu entre toutes les zones de disponibilit\xe9 d'une r\xe9gion"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Le protocole ",(0,t.jsx)(n.strong,{children:"VPLS"})," est ",(0,t.jsx)(n.strong,{children:"totalement transparent"})," pour les clients qui ne voient que les diff\xe9rents VLANs sur leurs zones de disponibilit\xe9."]}),"\n",(0,t.jsx)(n.h3,{id:"le-r\xe9seau-dans-loffre-de-virtualisation-vmware",children:"Le r\xe9seau dans l'offre de virtualisation VMware"}),"\n",(0,t.jsxs)(n.p,{children:["Les r\xe9seaux virtuels (vlan) de l'offre de virtualisation VMware sont des r\xe9seaux de types ",(0,t.jsx)(n.strong,{children:"'DVPortgroup'"}),". Un ",(0,t.jsx)(n.strong,{children:"'dvPortGroup'"}),",\nou ",(0,t.jsx)(n.strong,{children:"'Distributed Virtual Port Group'"}),", est un concept sp\xe9cifique \xe0 VMware. Un dvPortGroup est une entit\xe9 qui\nregroupe plusieurs ports virtuels (vPorts) dans un environnement de r\xe9seau virtuel distribu\xe9 pour faciliter leur utilisation."]}),"\n",(0,t.jsxs)(n.p,{children:["Localis\xe9e au sein d'un ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"/docs-content/docs/console/tenants",children:"tenant"})}),', ils peuvent \xeatre \xe9tendus entre les zones de disponibilit\xe9s\nvous permettant ainsi de construire des architectures "actif / actif" avec quorum.']}),"\n",(0,t.jsx)(n.p,{children:"La bande passante maximale utilisable d\xe9pend principalement du mod\xe8le de lame utilis\xe9 (10Gbps converg\xe9s ou 25 Gbps converg\xe9s) et des capacit\xe9s des machines virtuelles."}),"\n",(0,t.jsx)(n.p,{children:"Il est possible d'attendre une bande passante de 10Gbps."}),"\n",(0,t.jsx)(n.p,{children:"Les configurations disponibles sur la console Cloud Temple dans le cadre de l'offre de virtualisation VMware sont les suivantes :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Vlan tagging"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Trunk"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"port mirror"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Nota"})})," :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsxs)(n.em,{children:["Le choix de l'adressage IP au sein de ces r\xe9seaux est ",(0,t.jsx)(n.strong,{children:"libre."})]})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsxs)(n.em,{children:[(0,t.jsx)(n.strong,{children:"SRV-IO"})," n'est pas disponible dans l'offre r\xe9seau associ\xe9e \xe0 la virtualisation VMware."]})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsxs)(n.em,{children:[(0,t.jsx)(n.strong,{children:"QinQ"})," est support\xe9 sur l'architecture Cloud Temple. QinQ, \xe9galement connu sous le nom de \"VLAN stacking\" ou de 802.1ad, est\nun protocole r\xe9seau qui permet l'encapsulation de plusieurs \xe9tiquettes VLAN (Virtual Local Area Network) dans une seule trame Ethernet."]})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"r\xe9seaux-priv\xe9s-r\xe9gionaux",children:"R\xe9seaux priv\xe9s r\xe9gionaux"}),"\n",(0,t.jsx)(n.p,{children:"La commande des r\xe9seaux priv\xe9s au sein d'une r\xe9gion se r\xe9alise directement dans la console Cloud Temple."}),"\n",(0,t.jsx)(n.h3,{id:"au-sein-dun-tenant",children:"Au sein d'un tenant"}),"\n",(0,t.jsxs)(n.p,{children:["La cr\xe9ation d'un r\xe9seau virtuel se fait dans le menu ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"Network"})})," sur le bandeau vert \xe0 gauche de l'\xe9cran."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(7153).Z+"",width:"3016",height:"1092"})}),"\n",(0,t.jsxs)(n.p,{children:["Cliquer ensuite sur le bouton ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"Nouveau r\xe9seau"})})]}),"\n",(0,t.jsxs)(n.p,{children:["Vous devez sp\xe9cifier le nom de votre r\xe9seau qui sera affich\xe9. Par d\xe9faut, l'ensemble de vos clusters acc\xe9deront \xe0 votre nouveau r\xe9seau.\nCependant, dans le sous menu ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"Options Avanc\xe9es"})}),", vous pouvez sp\xe9cifier plus finement l'\xe9tendue de propagation au sein du tenant entre vos diff\xe9rents clusters."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(9458).Z+"",width:"1568",height:"1286"})}),"\n",(0,t.jsxs)(n.p,{children:["L'ensemble des actions possibles sur vos r\xe9seaux se trouve dans le menu ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"Actions"})})," de chacun d'eux :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"L'activation du partage d'un r\xe9seau entre tenant d'une meme organisation."}),"\n",(0,t.jsx)(n.li,{children:"La d\xe9sactivation du partage d'un r\xe9seau entre tenant d'une meme organisation."}),"\n",(0,t.jsx)(n.li,{children:"L'ajout d'un partage d'un r\xe9seau entre tenant d'une meme organisation."}),"\n",(0,t.jsx)(n.li,{children:"La suppression d'un partage d'un r\xe9seau entre tenant d'une meme organisation."}),"\n",(0,t.jsx)(n.li,{children:"La visualisation graphique de la propagation d'un r\xe9seau sur l'ensemble de vos clusters et de vos hyperviseurs au sein d'un tenant."}),"\n",(0,t.jsx)(n.li,{children:"La suppression d'une propagation au sein d'un tenant."}),"\n",(0,t.jsx)(n.li,{children:"La modification d'une propagation au sein d'un tenant."}),"\n",(0,t.jsx)(n.li,{children:"La suppression d'un r\xe9seau."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(8413).Z+"",width:"2266",height:"1068"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"Remarque :"})})," ",(0,t.jsx)(n.em,{children:"Il n'est pas possible de choisir l'ID de vlan 802.1q."})]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"R\xe9f\xe9rence"}),(0,t.jsx)(n.th,{children:"Unit\xe9"}),(0,t.jsx)(n.th,{children:"SKU"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"RESEAU - R\xe9gion FR1 - VLAN priv\xe9 inter AZ"}),(0,t.jsx)(n.td,{children:"1 vlan"}),(0,t.jsxs)(n.td,{children:["csp:(region):network:vlan",":v1"]})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"visualisation-de-la-propagation-de-vos-r\xe9seaux",children:"Visualisation de la propagation de vos r\xe9seaux"}),"\n",(0,t.jsxs)(n.p,{children:["Vous pouvez facilement dans le menu ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"Actions"})})," visualiser pour un r\xe9seau sa propagation vers vos diff\xe9rents clusters au sein d'un m\xeame tenant.\nChoisissez l'option ",(0,t.jsx)(n.em,{children:'"Visualiser la propagation"'})," :"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(5675).Z+"",width:"1760",height:"1192"})}),"\n",(0,t.jsx)(n.h4,{id:"modification-de-la-propagation",children:"Modification de la propagation"}),"\n",(0,t.jsxs)(n.p,{children:["La modification d'une propagation au sein d'un tenant est r\xe9alis\xe9e par l'option ",(0,t.jsx)(n.em,{children:'"Propager"'})," :\nchoisissez ensuite les clusters devant \xeatre int\xe9gr\xe9s \xe0 cette propagation."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(8664).Z+"",width:"1166",height:"820"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"Remarque :"})})," ",(0,t.jsx)(n.em,{children:"La modification de propagation est limit\xe9e \xe0 20 r\xe9seaux par action."})]}),"\n",(0,t.jsx)(n.h4,{id:"suppression-dun-r\xe9seau",children:"Suppression d'un r\xe9seau"}),"\n",(0,t.jsxs)(n.p,{children:["La suppression d'un r\xe9seau au sein d'un tenant est r\xe9alis\xe9e par l'option ",(0,t.jsx)(n.em,{children:'"Supprimer le r\xe9seau"'})," :"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(839).Z+"",width:"1162",height:"318"})}),"\n",(0,t.jsx)(n.h3,{id:"partage-de-r\xe9seau-entre-tenants",children:"Partage de r\xe9seau entre tenants"}),"\n",(0,t.jsxs)(n.p,{children:["Par d\xe9faut, ",(0,t.jsx)(n.strong,{children:"les r\xe9seaux sont uniquement disponibles au sein d'un tenant"}),". Vous pouvez choisir de ",(0,t.jsx)(n.strong,{children:"partager un r\xe9seau entre plusieurs tenants"})," pour des raisons techniques ou des raisons de connectivit\xe9.\nIl est ainsi possible de partager un r\xe9seau entre vos ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"/docs-content/docs/console/tenants",children:"tenants"})})," au sein d'une m\xeame organisation."]}),"\n",(0,t.jsx)(n.p,{children:"Il suffit pour cela d'activer le partage comme ci-dessous."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(8975).Z+"",width:"2220",height:"600"})}),"\n",(0,t.jsx)(n.p,{children:"Une fois l'activation du partage effectu\xe9, il vous suffit d'ajouter un partage comme ci-dessous."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(4639).Z+"",width:"522",height:"390"})}),"\n",(0,t.jsx)(n.p,{children:"Puis, s\xe9lectionner le tenant cible. Attention, la liste des tenants est dynamique.\nElle d\xe9pend de votre organisation et de vos droits."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(1587).Z+"",width:"1024",height:"556"})}),"\n",(0,t.jsx)(n.p,{children:"Une fois le r\xe9seau partag\xe9, il sera visible dans l'onglet 'R\xe9seaux partag\xe9s' depuis votre second tenant."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(8962).Z+"",width:"2282",height:"810"})}),"\n",(0,t.jsx)(n.h2,{id:"connectivit\xe9-priv\xe9-externe",children:"Connectivit\xe9 priv\xe9 externe"}),"\n",(0,t.jsx)(n.p,{children:"L'offre de r\xe9seau Cloud Temple permet aux clients de connecter leurs propres infrastructures IPSEC, MPLS ou Fibre \xe0 leurs tenants."}),"\n",(0,t.jsx)(n.p,{children:"Cloud Temple propose \xe0 cet effet :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"La possibilit\xe9 d'h\xe9berger un \xe9quipement r\xe9seau en zone commune (non qualifi\xe9e Secnumcloud),"}),"\n",(0,t.jsx)(n.li,{children:"Des ports de connectivit\xe9 1Gbps ou 10Gbps."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"La cr\xe9ation d'une connectivit\xe9 externe est r\xe9alis\xe9e par une demande de service indiquant :"}),"\n",(0,t.jsx)(n.p,{children:"Le nom de votre Organisation\nLe nom d'un contact avec son mail et n\xb0 de t\xe9l\xe9phone pour finaliser la configuration\nLe nom du tenant\nLa zone de disponibilit\xe9 ou \xe0 d\xe9faut le site physique souhait\xe9 pour cette connectivit\xe9\nLe nombre et pour chacun, le type de port de connectivit\xe9 attendu (fibre, cuivre, 1Gbps, 10Gbps, ...)\nLe r\xe9seau de votre tenant devant accueillir cette connectivit\xe9\nLe nombre de 'U' eventuelle d'h\xe9bergement souhait\xe9"}),"\n",(0,t.jsx)(n.h2,{id:"circuits-d\xe9di\xe9s",children:"Circuits d\xe9di\xe9s"}),"\n",(0,t.jsx)(n.p,{children:"Cloud Temple offre la possibilit\xe9 de b\xe9n\xe9ficier d'une fibre d\xe9di\xe9e entre deux infrastructures d'h\xe9bergement d\xe9di\xe9 (rack)."}),"\n",(0,t.jsx)(n.p,{children:"Ce service est typiquement utilis\xe9 lorsque vous souhaitez h\xe9berger 2 infrastructures non-cloud (par exemple deux IBM AS/400), dans deux racks distincts sur deux datacenters physiques distincts.\nVous pouvez souhaiter relier directement ces deux racks en priv\xe9 sans passer par l'infrastructure backbone Cloud Temple et n'utiliser que le backbone de transmission optique."}),"\n",(0,t.jsx)(n.p,{children:"Dans ce contexte, nous pouvons livrer une connectivit\xe9 fibre optique entre vos deux racks. La livraison est syst\xe9matiquement sur deux chemins optiques diversifi\xe9s."}),"\n",(0,t.jsx)(n.p,{children:"Voici les diff\xe9rents types de livraison possibles :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Ethernet fibre 1Gbps"}),"\n",(0,t.jsx)(n.li,{children:"Ethernet fibre 10Gbps"}),"\n",(0,t.jsx)(n.li,{children:"Fiber Channel 8Gbps"}),"\n",(0,t.jsx)(n.li,{children:"Fiber Channel 16Gbps"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"La cr\xe9ation d'une connectivit\xe9 d\xe9di\xe9e est r\xe9alis\xe9e par une demande de service indiquant :"}),"\n",(0,t.jsx)(n.p,{children:"Le nom de votre Organisation\nLe nom d'un contact avec son mail et n\xb0 de t\xe9l\xe9phone pour finaliser la configuration\nLe nom du tenants\nLes identifiants des deux rack d\xe9di\xe9s\nLa bande passante souhait\xe9e\nLe r\xe9seau de votre tenant devant accueillir cette connectivit\xe9"}),"\n",(0,t.jsx)(n.p,{children:"Vous serez contact\xe9 par le support pour affiner votre demande."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"R\xe9f\xe9rence"}),(0,t.jsx)(n.th,{children:"Unit\xe9"}),(0,t.jsx)(n.th,{children:"SKU"}),(0,t.jsx)(n.th,{children:"Engagement"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"RESEAU - Lien d\xe9di\xe9 inter AZ 1G ethernet (deux liens via deux chemins diversifi\xe9s)"}),(0,t.jsx)(n.td,{children:"1 forfait"}),(0,t.jsxs)(n.td,{children:["csp:(region):network:epl:1g",":v1"]}),(0,t.jsx)(n.td,{children:"36 mois"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"RESEAU - Lien d\xe9di\xe9 inter AZ 10G ethernet (deux liens via deux chemins diversifi\xe9s)"}),(0,t.jsx)(n.td,{children:"1 forfait"}),(0,t.jsxs)(n.td,{children:["csp:(region):network:epl:10g",":v1"]}),(0,t.jsx)(n.td,{children:"36 mois"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"RESEAU - Lien d\xe9di\xe9 inter AZ 8G fiber-channel (deux liens via deux chemins diversifi\xe9s)"}),(0,t.jsx)(n.td,{children:"1 forfait"}),(0,t.jsxs)(n.td,{children:["csp:(region):network:fcpl:8g",":v1"]}),(0,t.jsx)(n.td,{children:"36 mois"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"RESEAU - Lien d\xe9di\xe9 inter AZ 16G fiber-channel (deux liens via deux chemins diversifi\xe9s)"}),(0,t.jsx)(n.td,{children:"1 forfait"}),(0,t.jsxs)(n.td,{children:["csp:(region):network:fcpl:16g",":v1"]}),(0,t.jsx)(n.td,{children:"36 mois"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"aller-plus-loin",children:"Aller plus loin"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs-content/docs/network/quickstart_network#d%C3%A9ployer-un-firewall-opensource-pfsense-",children:"D\xe9ployer un firewall virtuel open source"})}),"\n"]})]})}function c(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},7153:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/shiva_network_001-137728a7d072683454ffa3c548cac5bb.jpg"},9458:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/shiva_network_002-d97285340c7d9172c7a7e27ec590dd7d.jpg"},8413:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/shiva_network_003-8d22d6529da363e86629d442d845e1ca.jpg"},5675:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/shiva_network_004-167dc24c2a4035b50fc8145cf62e1185.jpg"},8664:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/shiva_network_005-53b82e141ca78cbbc1c4c6449aff3e04.jpg"},839:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/shiva_network_006-7d42685e19bae434559e42442f6e851b.jpg"},8975:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/shiva_network_vn_share_enabled-93a1fc2bd64b9a07c9b78b477f06d2bb.png"},4639:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/shiva_network_vn_shared-2aa13c04499e22256313a1f531e48fc8.png"},1587:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/shiva_network_vn_shared_tenant-03594428d64defc25d72f964c8fbe311.png"},8962:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/shiva_network_vn_shared_with_me-7b695edfde2779f733f8feca7fcf9cea.png"},65:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return a}});var i=s(7294);let t={},r=i.createContext(t);function a(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);