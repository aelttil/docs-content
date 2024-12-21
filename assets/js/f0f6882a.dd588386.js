"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["7770"],{1482:function(e,n,s){s.r(n),s.d(n,{metadata:()=>i,contentTitle:()=>u,default:()=>c,assets:()=>a,toc:()=>o,frontMatter:()=>l});var i=JSON.parse('{"id":"iaas/tutorials_iaas","title":"Comment faire pour ?","description":"Dans ces guides, vous allez apprendre \xe0 piloter vos ressources IaaS du Cloud de Confiance.","source":"@site/docs/iaas/tutorials_iaas.md","sourceDirName":"iaas","slug":"/iaas/tutorials_iaas","permalink":"/docs-content/docs/iaas/tutorials_iaas","draft":false,"unlisted":false,"editUrl":"https://github.com/aelttil/docs-content/docs/iaas/tutorials_iaas.md","tags":[],"version":"current","frontMatter":{"title":"Comment faire pour ?"},"sidebar":"docSidebar","previous":{"title":"Stockage","permalink":"/docs-content/docs/iaas/storage"},"next":{"title":"Housing","permalink":"/docs-content/docs/category/housing"}}'),r=s("5893"),t=s("65");let l={title:"Comment faire pour ?"},u=void 0,a={},o=[{value:"D\xe9ployer une machine virtuelle depuis un Template",id:"d\xe9ployer-une-machine-virtuelle-depuis-un-template",level:2},{value:"Importer un Template personnel dans le catalogue priv\xe9",id:"importer-un-template-personnel-dans-le-catalogue-priv\xe9",level:3},{value:"Importer un Template depuis le catalogue public",id:"importer-un-template-depuis-le-catalogue-public",level:3},{value:"D\xe9ployer le Template",id:"d\xe9ployer-le-template",level:3},{value:"Cr\xe9er une machine virtuelle \xe0 partir de z\xe9ro",id:"cr\xe9er-une-machine-virtuelle-\xe0-partir-de-z\xe9ro",level:2},{value:"Disques virtuels",id:"disques-virtuels",level:2},{value:"Cr\xe9er un nouveau disque virtuel",id:"cr\xe9er-un-nouveau-disque-virtuel",level:3},{value:"Ajouter un disque virtuel existant \xe0 une machine virtuelle",id:"ajouter-un-disque-virtuel-existant-\xe0-une-machine-virtuelle",level:3},{value:"Modifier un disque virtuel",id:"modifier-un-disque-virtuel",level:3},{value:"D\xe9monter ou supprimer un disque virtuel",id:"d\xe9monter-ou-supprimer-un-disque-virtuel",level:3},{value:"Snapshots",id:"snapshots",level:2},{value:"Prendre un snapshot",id:"prendre-un-snapshot",level:3},{value:"Restaurer un snapshot",id:"restaurer-un-snapshot",level:3},{value:"R\xe9seaux",id:"r\xe9seaux",level:2},{value:"Cr\xe9er un vLAN",id:"cr\xe9er-un-vlan",level:3},{value:"Connecter une machine virtuelle \xe0 un r\xe9seau",id:"connecter-une-machine-virtuelle-\xe0-un-r\xe9seau",level:3},{value:"D\xe9connecter ou supprimer un adaptateur r\xe9seau",id:"d\xe9connecter-ou-supprimer-un-adaptateur-r\xe9seau",level:3}];function d(e){let n={a:"a",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Dans ces guides, vous allez apprendre \xe0 piloter vos ressources IaaS du Cloud de Confiance."}),"\n",(0,r.jsx)(n.h2,{id:"d\xe9ployer-une-machine-virtuelle-depuis-un-template",children:"D\xe9ployer une machine virtuelle depuis un Template"}),"\n",(0,r.jsx)(n.p,{children:"Ce guide vous montre \xe9tape par \xe9tape comment d\xe9ployer une machine virtuelle depuis un Template dans la console Shiva."}),"\n",(0,r.jsxs)(n.p,{children:["Sur le portail Shiva, rendez-vous dans l'onglet ",(0,r.jsx)(n.strong,{children:"'IaaS'"}),", puis ",(0,r.jsx)(n.strong,{children:"'Catalogues'"}),". Avant de pouvoir d\xe9ployer un Template, celui-ci doit \xeatre charg\xe9 dans votre catalogue priv\xe9, dans l'onglet ",(0,r.jsx)(n.strong,{children:"'Mon catalogue'"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Pour cela, vous avez deux possibilit\xe9s :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.em,{children:"importer votre propre Template directement dans votre catalogue priv\xe9,"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.em,{children:"importer un mod\xe8le depuis le catalogue public de Cloud Temple."})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"importer-un-template-personnel-dans-le-catalogue-priv\xe9",children:"Importer un Template personnel dans le catalogue priv\xe9"}),"\n",(0,r.jsxs)(n.p,{children:["Dans l'onglet ",(0,r.jsx)(n.strong,{children:"'Mon catalogue'"}),", cliquez sur ",(0,r.jsx)(n.strong,{children:"'Publier des fichiers'"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(8).Z+"",width:"2846",height:"1324"})}),"\n",(0,r.jsx)(n.p,{children:"Suivez ensuite les \xe9tapes de publication du template, en renseignant son nom et une description, et en choisissant son emplacement dans une librairie."}),"\n",(0,r.jsx)(n.p,{children:"Le Template doit ensuite appara\xeetre dans votre catalogue priv\xe9."}),"\n",(0,r.jsx)(n.h3,{id:"importer-un-template-depuis-le-catalogue-public",children:"Importer un Template depuis le catalogue public"}),"\n",(0,r.jsxs)(n.p,{children:["Dans l'onglet ",(0,r.jsx)(n.strong,{children:"'Catalogue public'"}),", cliquez sur le bouton ",(0,r.jsx)(n.strong,{children:"'Ajouter \xe0 mon catalogue'"})," du Template de votre choix pour l'importer dans votre catalogue priv\xe9. Celui-ci doit ensuite appara\xeetre dans votre catalogue priv\xe9."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(6373).Z+"",width:"2854",height:"1286"})}),"\n",(0,r.jsx)(n.h3,{id:"d\xe9ployer-le-template",children:"D\xe9ployer le Template"}),"\n",(0,r.jsxs)(n.p,{children:["Une fois le Template import\xe9 dans votre catalogue priv\xe9, vous pouvez le d\xe9ployer en cliquant sur ",(0,r.jsx)(n.strong,{children:"'D\xe9ployer'"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(9221).Z+"",width:"2844",height:"1296"})}),"\n",(0,r.jsx)(n.p,{children:"Suivez ensuite les diff\xe9rentes \xe9tapes de d\xe9ploiement de la ressource, en s\xe9lectionnant son emplacement physique (datacenter, cluster de calcul, datastore) et autres param\xe8tres de configuration optionnels."}),"\n",(0,r.jsx)(n.h2,{id:"cr\xe9er-une-machine-virtuelle-\xe0-partir-de-z\xe9ro",children:"Cr\xe9er une machine virtuelle \xe0 partir de z\xe9ro"}),"\n",(0,r.jsxs)(n.p,{children:["Dans la section ",(0,r.jsx)(n.strong,{children:"'IaaS'"})," puis ",(0,r.jsx)(n.strong,{children:"'Machines virtuelles'"}),", cliquez sur le bouton ",(0,r.jsx)(n.strong,{children:"'Nouvelle machine virtuelle'"})," et suivez les diff\xe9rentes \xe9tapes de cr\xe9ation de la machine."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Informations g\xe9n\xe9rales"})," :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["S\xe9lectionner l\u2019option ",(0,r.jsx)(n.em,{children:"'Cr\xe9er une machine virtuelle'"})," ;"]}),"\n",(0,r.jsx)(n.li,{children:"S\xe9lectionner le vCenter ;"}),"\n",(0,r.jsx)(n.li,{children:"Nommer la machine virtuelle."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Choisir l'emplacement de la machine virtuelle"})," :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Le datacenter ;"}),"\n",(0,r.jsx)(n.li,{children:"Le cluster de calcul ;"}),"\n",(0,r.jsx)(n.li,{children:"Le datastore."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Configuration de la machine virtuelle"})," :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Syst\xe8me d'exploitation ;"}),"\n",(0,r.jsx)(n.li,{children:"vCPU ;"}),"\n",(0,r.jsx)(n.li,{children:"RAM."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Options avanc\xe9es"})," :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Disques virtuels ;"}),"\n",(0,r.jsx)(n.li,{children:"Contr\xf4leurs ;"}),"\n",(0,r.jsx)(n.li,{children:"Adaptateurs r\xe9seaux."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(4810).Z+"",width:"784",height:"565"})}),"\n",(0,r.jsx)(n.h2,{id:"disques-virtuels",children:"Disques virtuels"}),"\n",(0,r.jsx)(n.h3,{id:"cr\xe9er-un-nouveau-disque-virtuel",children:"Cr\xe9er un nouveau disque virtuel"}),"\n",(0,r.jsxs)(n.p,{children:["Dans le menu d\u2019une machine virtuelle, cliquez sur l\u2019onglet ",(0,r.jsx)(n.strong,{children:"'P\xe9riph\xe9riques'"})," pour acc\xe9der \xe0 la liste des disques virtuels et des contr\xf4leurs de votre machine virtuelle.\nDans la section ",(0,r.jsx)(n.strong,{children:"'Disques virtuels'"}),", cliquez sur ",(0,r.jsx)(n.strong,{children:"'Nouveau disque virtuel'"})," pour ajouter un nouveau disque \xe0 votre machine, puis s\xe9lectionnez l'option ",(0,r.jsx)(n.strong,{children:"'Nouveau disque'"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(8502).Z+"",width:"2702",height:"1004"})}),"\n",(0,r.jsx)(n.p,{children:"Lorsque vous cr\xe9ez un nouveau disque, vous devez suivre les \xe9tapes suivantes :"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Choix de l'emplacement du disque (datastore)."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Capacit\xe9 du disque."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Type de provisionnement :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Statique mis en z\xe9ro diff\xe9r\xe9"})," (c'est le mode recommand\xe9),"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Statique imm\xe9diatement mis \xe0 z\xe9ro"}),","]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Dynamique"})," (*)"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Mode :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Persistant"})," (les modifications sont imm\xe9diatement et d\xe9finitivement \xe9crites sur le disque virtuel). ",(0,r.jsx)(n.strong,{children:"C'est le mode recommand\xe9."})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Ind\xe9pendant non-persistant"})," (les modifications apport\xe9es au disque virtuel sont consign\xe9es dans un nouveau log et supprim\xe9es \xe0 la mise hors tension, et ne sont pas affect\xe9es par les snapshots). ",(0,r.jsx)(n.strong,{children:"Ce mode n'est pas pris en charge par la sauvegarde."})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Ind\xe9pendant persistant"})," (les modifications sont imm\xe9diatement et d\xe9finitivement \xe9crites sur le disque virtuel, et ne sont pas affect\xe9es par les snapshots). ",(0,r.jsx)(n.strong,{children:"Ce mode n'est pas pris en charge par la sauvegarde."})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Contr\xf4leur automatique ou manuel (IDE 0, IDE1, SCSI controller 0)."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["(*) ",(0,r.jsxs)(n.em,{children:["Le mode dynamique facilite l'attribution progressive d'espace disque dans le datastore \xe0 mesure que la machine virtuelle utilise davantage d'espace. Cependant, ",(0,r.jsx)(n.strong,{children:"cette m\xe9thode peut entra\xeener le blocage de la machine virtuelle si l'espace requis n'est pas disponible dans le datastore, ce qui peut mener \xe0 la corruption de la machine"}),". Opter pour cette option exige donc une analyse pr\xe9cise et d\xe9taill\xe9e de vos environnements."]})]}),"\n",(0,r.jsx)(n.h3,{id:"ajouter-un-disque-virtuel-existant-\xe0-une-machine-virtuelle",children:"Ajouter un disque virtuel existant \xe0 une machine virtuelle"}),"\n",(0,r.jsxs)(n.p,{children:["Dans le menu d\u2019une machine virtuelle, cliquez sur l\u2019onglet ",(0,r.jsx)(n.strong,{children:"'P\xe9riph\xe9riques'"}),", cliquez sur ",(0,r.jsx)(n.strong,{children:"'Nouveau disque virtuel'"})," et s\xe9lectionnez l'option ",(0,r.jsx)(n.strong,{children:"'disque existant'"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"modifier-un-disque-virtuel",children:"Modifier un disque virtuel"}),"\n",(0,r.jsxs)(n.p,{children:["Dans le menu d'une machine virtuelle, cliquez sur l'onglet ",(0,r.jsx)(n.strong,{children:"'P\xe9riph\xe9riques'"})," puis cliquez sur le disque virtuel que vous souhaitez modifier. Dans la fen\xeatre qui s'ouvre, vous pouvez modifier la capacit\xe9 du disque et/ou son mode de provisionnement."]}),"\n",(0,r.jsx)(n.h3,{id:"d\xe9monter-ou-supprimer-un-disque-virtuel",children:"D\xe9monter ou supprimer un disque virtuel"}),"\n",(0,r.jsxs)(n.p,{children:["Cliquez sur la barre d'actions du disque virtuel souhait\xe9. Pour le supprimer, cliquez sur ",(0,r.jsx)(n.strong,{children:"'Supprimer'"}),", et pour le d\xe9monter, cliquez sur ",(0,r.jsx)(n.strong,{children:"'D\xe9monter'"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Notez que ",(0,r.jsx)(n.strong,{children:"pour supprimer un disque d\u2019une machine virtuelle, celle-ci doit \xeatre \xe9teinte"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(1778).Z+"",width:"1092",height:"512"})}),"\n",(0,r.jsx)(n.h2,{id:"snapshots",children:"Snapshots"}),"\n",(0,r.jsx)(n.h3,{id:"prendre-un-snapshot",children:"Prendre un snapshot"}),"\n",(0,r.jsxs)(n.p,{children:["Rendez-vous dans l'onglet ",(0,r.jsx)(n.strong,{children:"'Snapshots'"})," d'une machine virtuelle. Cette section donne la liste des snapshots de cette machine virtuelle, indiquant \xe0 chaque fois leur date et l'activation ou non du quiescing."]}),"\n",(0,r.jsxs)(n.p,{children:["Pour prendre un nouveau snapshot, cliquez sur le bouton ",(0,r.jsx)(n.strong,{children:"'Nouveau snapshot'"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(8485).Z+"",width:"2702",height:"982"})}),"\n",(0,r.jsx)(n.p,{children:"Vous pouvez alors nommer votre snapshots et indiquer notamment si :"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Vous souhaitez capturer la m\xe9moire : Cela permet notamment de revenir \xe0 l'\xe9tat complet de la machine avec les processus qui \xe9taient en execution au moment du snapshot. **C'est l'option recommand\xe9e. **"}),"\n",(0,r.jsx)(n.li,{children:"Vous ne souhaitez pas capturer la m\xe9moire : dans ce cas, la machine sera simplement red\xe9marr\xe9e si un retour arri\xe8re est demande sur le snapshot. c'est l'option la plus rapide \xe0 executer."}),"\n",(0,r.jsx)(n.li,{children:"Si vous souhaitez pr\xe9venir, via les vmware-tools, le syst\xe8me d'exploitation du d\xe9clenchement du snapshot pour lui permettre de vider les tampons d'\xe9criture."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(3131).Z+"",width:"1062",height:"545"})}),"\n",(0,r.jsx)(n.h3,{id:"restaurer-un-snapshot",children:"Restaurer un snapshot"}),"\n",(0,r.jsxs)(n.p,{children:["Pour restaurer un snapshot, cliquez sur la barre d'actions correspondant au snapshot que vous souhaitez restaurer. Puis, cliquez sur ",(0,r.jsx)(n.strong,{children:"'Restaurer \xe0'"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Cette barre d'actions vous permet \xe9galement de renommer le snapshot en cliquant sur ",(0,r.jsx)(n.strong,{children:"'Modifier'"}),", ou de le supprimer en cliquant sur ",(0,r.jsx)(n.strong,{children:"'Supprimer'"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(918).Z+"",width:"2694",height:"982"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"ATTENTION :"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsxs)(n.em,{children:["Cette action est ",(0,r.jsx)(n.strong,{children:"destructive"}),". Toutes les donn\xe9es depuis le snapshots sont perdues."]})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsxs)(n.em,{children:["Attention ",(0,r.jsx)(n.strong,{children:"aux disques ind\xe9pendants"}),", ils ne doivent pas faire partie d'une grappe LVM par exemple, sous peine de geler la machine virtuelle."]})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"r\xe9seaux",children:"R\xe9seaux"}),"\n",(0,r.jsxs)(n.p,{children:["Dans la section ",(0,r.jsx)(n.strong,{children:"'IaaS'"})," du menu de la console Cloud Temple, rendez-vous dans la partie ",(0,r.jsx)(n.a,{href:"/docs-content/docs/network/private_network#le-r%C3%A9seau-dans-loffre-de-virtualisation-vmware",children:(0,r.jsx)(n.strong,{children:"R\xe9seaux"})}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Vous y trouverez la liste de vos r\xe9seaux virtuels priv\xe9s d\xe9ploy\xe9s dans vos tenants."}),"\n",(0,r.jsx)(n.h3,{id:"cr\xe9er-un-vlan",children:"Cr\xe9er un vLAN"}),"\n",(0,r.jsxs)(n.p,{children:["Pour cr\xe9er un nouveau r\xe9seau virtuel priv\xe9, rendez-vous dans la partie ",(0,r.jsx)(n.a,{href:"/docs-content/docs/network/private_network#le-r%C3%A9seau-dans-loffre-de-virtualisation-vmware",children:(0,r.jsx)(n.strong,{children:"R\xe9seaux"})}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(7153).Z+"",width:"3016",height:"1092"})}),"\n",(0,r.jsx)(n.h3,{id:"connecter-une-machine-virtuelle-\xe0-un-r\xe9seau",children:"Connecter une machine virtuelle \xe0 un r\xe9seau"}),"\n",(0,r.jsxs)(n.p,{children:["Rendez-vous dans l'onglet ",(0,r.jsx)(n.strong,{children:"'R\xe9seaux'"})," de votre machine virtuelle. Vous y trouverez la liste des adaptateurs r\xe9seaux de votre machine virtuelle. Cliquez sur le bouton ",(0,r.jsx)(n.strong,{children:"'Nouvel adaptateur r\xe9seau'"})," et s\xe9lectionnez le r\xe9seau souhait\xe9."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(1225).Z+"",width:"2698",height:"994"})}),"\n",(0,r.jsx)(n.p,{children:"Vous devez ensuite s\xe9lectionner le type d'adaptateur ainsi que le choix de g\xe9n\xe9ration de l'adresse MAC (automatique ou manuel)."}),"\n",(0,r.jsx)(n.h3,{id:"d\xe9connecter-ou-supprimer-un-adaptateur-r\xe9seau",children:"D\xe9connecter ou supprimer un adaptateur r\xe9seau"}),"\n",(0,r.jsxs)(n.p,{children:["Cliquez sur la barre d'actions du p\xe9riph\xe9rique r\xe9seau que vous souhaitez d\xe9connecter ou supprimer.\nCliquez sur ",(0,r.jsx)(n.strong,{children:"'D\xe9connecter'"})," pour d\xe9connecter l'adaptateur r\xe9seau. Si vous souhaitez supprimer l'adaptateur r\xe9seau, vous devez d'abord le d\xe9connecter, puis vous pouvez le supprimer en cliquant sur ",(0,r.jsx)(n.strong,{children:"'Supprimer'"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(411).Z+"",width:"2698",height:"970"})})]})}function c(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},6373:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/shiva_catalogs_ajout-de16dc73110dd032bcfda13e19e73ad8.png"},8:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/shiva_catalogs_charger-42d7c97d9651c3ad43ffd1b95a0c5223.png"},9221:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/shiva_catalogs_deployer-9bb502f2f5e19062bfdd16bc7c762381.png"},4810:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/shiva_vm_deploy-dbb798b5dcdf170f77cdf511937dc0a2.png"},8502:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/shiva_vm_disques_virtuels-546826142fdc31e271d6cbe98fa2940f.png"},1778:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/shiva_vm_disques_virtuels_supprimer-069bcb8cbe3b11dce7029808d73f393b.png"},8485:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/shiva_vm_prendre_snapshot-a3bc3ed525d3e369a550ed39d5e00847.png"},1225:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/shiva_vm_reseau-781f77fa53116d2ee40c3c21fd8585ab.png"},411:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/shiva_vm_reseau_deconnecter-e9a71bb4aafbc6c37fcd85bdac26b83f.png"},3131:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/shiva_vm_snap_type-59351e58e039b44b68a31e88f366b7a6.png"},918:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/shiva_vm_snapshot_restaurer-597cfb9df7ac1716a2f139258f2d0ea9.png"},7153:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/shiva_network_001-137728a7d072683454ffa3c548cac5bb.jpg"},65:function(e,n,s){s.d(n,{Z:function(){return u},a:function(){return l}});var i=s(7294);let r={},t=i.createContext(r);function l(e){let n=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);