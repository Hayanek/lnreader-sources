"use strict";var e=this&&this.__awaiter||function(e,t,a,l){return new(a||(a=Promise))((function(r,n){function i(e){try{o(l.next(e))}catch(e){n(e)}}function s(e){try{o(l.throw(e))}catch(e){n(e)}}function o(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(i,s)}o((l=l.apply(e,t||[])).next())}))},t=this&&this.__generator||function(e,t){var a,l,r,n,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return n={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(n[Symbol.iterator]=function(){return this}),n;function s(s){return function(o){return function(s){if(a)throw new TypeError("Generator is already executing.");for(;n&&(n=0,s[0]&&(i=0)),i;)try{if(a=1,l&&(r=2&s[0]?l.return:s[0]?l.throw||((r=l.return)&&r.call(l),0):l.next)&&!(r=r.call(l,s[1])).done)return r;switch(l=0,r&&(s=[2&s[0],r.value]),s[0]){case 0:case 1:r=s;break;case 4:return i.label++,{value:s[1],done:0};case 5:i.label++,l=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(r=i.trys,(r=r.length>0&&r[r.length-1])||6!==s[0]&&2!==s[0])){i=0;continue}if(3===s[0]&&(!r||s[1]>r[0]&&s[1]<r[3])){i.label=s[1];break}if(6===s[0]&&i.label<r[1]){i.label=r[1],r=s;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(s);break}r[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(e){s=[6,e],l=0}finally{a=r=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:1}}([s,o])}}};Object.defineProperty(exports,"__esModule",{value:1});var a=require("cheerio"),l=require("@libs/fetch"),r=require("@libs/novelStatus"),n=require("@libs/defaultCover"),i=new(function(){function i(e){this.fetchImage=l.fetchFile,this.id=e.id,this.name=e.sourceName,this.icon="multisrc/lightnovelwp/".concat(e.id,".png"),this.site=e.sourceSite,this.version="1.0.3",this.options=e.options,this.filters=e.filters}return i.prototype.getHostname=function(e){return e.split("/")[2]},i.prototype.getCheerio=function(r,n){return e(this,void 0,void 0,(function(){var e,i,s,o;return t(this,(function(t){switch(t.label){case 0:return[4,(0,l.fetchApi)(r)];case 1:if(!(e=t.sent()).ok&&1!=n)throw new Error("Could not reach site ("+e.status+") try to open in webview.");return s=a.load,[4,e.text()];case 2:if(i=s.apply(void 0,[t.sent()]),o=i("title").text().trim(),this.getHostname(r)!=this.getHostname(e.url)||"Bot Verification"==o||"You are being redirected..."==o||"Un instant..."==o||"Just a moment..."==o||"Redirecting..."==o)throw new Error("Captcha error, please open in webview");return[2,i]}}))}))},i.prototype.parseNovels=function(e){var t=this,a=[];return e("div.listupd > article").each((function(l,r){var i=e(r).find("h2").text(),s=e(r).find("img"),o=e(r).find("a").attr("href");o&&a.push({name:i,cover:s.attr("data-src")||s.attr("src")||n.defaultCover,path:o.replace(t.site,"")})})),a},i.prototype.popularNovels=function(a,l){var r=l.filters,n=l.showLatestNovels;return e(this,void 0,void 0,(function(){var e,l,i,s,o,u;return t(this,(function(t){switch(t.label){case 0:for(l in e=this.site+"/series/?page="+a,r||(r={}),n&&(e+="&order=latest"),r)if("object"==typeof r[l].value)for(i=0,s=r[l].value;i<s.length;i++)o=s[i],e+="&".concat(l,"=").concat(o);else r[l].value&&(e+="&".concat(l,"=").concat(r[l].value));return[4,this.getCheerio(e,0)];case 1:return u=t.sent(),[2,this.parseNovels(u)]}}))}))},i.prototype.parseNovel=function(a){var l,i;return e(this,void 0,void 0,(function(){var e,s,o,u,c,v,h,p=this;return t(this,(function(t){switch(t.label){case 0:return[4,this.getCheerio(this.site+a,0)];case 1:switch(e=t.sent(),(s={path:a.replace(this.site,""),name:"Untitled"}).name=e("h1.entry-title").text().trim(),o=e("img.wp-post-image"),s.cover=o.attr("data-src")||o.attr("src")||n.defaultCover,(null===(l=e("div.sertostat > span").attr("class"))||void 0===l?void 0:l.toLowerCase())||""){case"completed":s.status=r.NovelStatus.Completed;break;case"ongoing":s.status=r.NovelStatus.Ongoing;break;case"hiatus":s.status=r.NovelStatus.OnHiatus;break;default:s.status=r.NovelStatus.Unknown}return(u=e("div.serl")).length||(u=e("div.spe > span")),u.each((function(){var t=e(this).contents().first().text().replace(":","").trim().toLowerCase(),a=e(this).contents().last().text().trim().toLowerCase();switch(t){case"الكاتب":case"author":case"auteur":case"autor":case"yazar":s.author=a;break;case"الحالة":case"status":case"statut":case"estado":case"durum":switch(a){case"مكتملة":case"completed":case"complété":case"completo":case"completado":case"tamamlandı":s.status=r.NovelStatus.Completed;break;case"مستمرة":case"ongoing":case"en cours":case"em andamento":case"en progreso":case"devam ediyor":s.status=r.NovelStatus.Ongoing;break;case"متوقفة":case"hiatus":case"en pause":case"hiato":case"pausa":case"pausado":case"duraklatıldı":s.status=r.NovelStatus.OnHiatus;break;default:s.status=r.NovelStatus.Unknown}break;case"الفنان":case"artist":case"artiste":case"artista":case"çizer":s.artist=a}})),(c=e(".sertogenre")).length||(c=e(".genxed")),s.genres=c.children("a").map((function(t,a){return e(a).text()})).toArray().join(","),(v=e(".sersys > p").map((function(t,a){return e(a).text().trim()})).toArray()).length||(v=e(".entry-content > p").map((function(t,a){return e(a).text().trim()})).toArray()),s.summary=v.join("\n"),h=[],e(".eplister li").each((function(t,a){var l,r=e(a).find(".epl-num").text()+" "+e(a).find(".epl-title").text(),n=e(a).find("a").attr("href")||"",i=e(a).find(".epl-date").text().trim();switch(e(a).find(".epl-price").text().trim().toLowerCase()){case"free":case"gratuit":case"مجاني":case"livre":case"":l=1;break;default:l=0}l&&h.push({name:r,path:n.replace(p.site,""),releaseTime:i})})),(null===(i=this.options)||void 0===i?void 0:i.reverseChapters)&&h.length&&h.reverse(),s.chapters=h,[2,s]}}))}))},i.prototype.parseChapter=function(a){var l;return e(this,void 0,void 0,(function(){var e,r;return t(this,(function(t){switch(t.label){case 0:return[4,this.getCheerio(this.site+a,0)];case 1:return e=t.sent(),"kolnovel"==this.id&&((r=e("article > style").text().trim().split(",")).push.apply(r,(null===(l=r.pop())||void 0===l?void 0:l.match(/^\.\w+/))||[]),r.map((function(t){return e("p".concat(t)).remove()}))),[2,e(".epcontent p").map((function(t,a){return e(a)})).toArray().join("\n")||""]}}))}))},i.prototype.searchNovels=function(a,l){return e(this,void 0,void 0,(function(){var e,r;return t(this,(function(t){switch(t.label){case 0:return e=this.site+"page/"+l+"/?s="+a,[4,this.getCheerio(e,1)];case 1:return r=t.sent(),[2,this.parseNovels(r)]}}))}))},i}())({id:"lightnovelfr",sourceSite:"https://lightnovelfr.com/",sourceName:"Ligh Novel FR",options:{lang:"French",reverseChapters:1},filters:{"genre[]":{type:"Checkbox",label:"Genre",value:[],options:[{label:"action",value:"action"},{label:"alchimie",value:"alchimie"},{label:"Arts martiaux",value:"arts-martiaux"},{label:"Aventure",value:"aventure"},{label:"Célébrités",value:"celebrites"},{label:"chinese",value:"chinese"},{label:"Combat",value:"combat"},{label:"comedie",value:"comedie"},{label:"Cultivation",value:"cultivation"},{label:"dark fantasy",value:"dark-fantasy"},{label:"Demon",value:"demon"},{label:"Drame",value:"drame"},{label:"Fantasie",value:"fantasie"},{label:"Fantastique",value:"fantastique"},{label:"Guildes",value:"guildes"},{label:"harem",value:"harem"},{label:"Idole",value:"idole"},{label:"japan",value:"japan"},{label:"jeux vidéos",value:"jeux-videos"},{label:"Josei",value:"josei"},{label:"korean",value:"korean"},{label:"light Novel",value:"light-novel"},{label:"Magic",value:"magic"},{label:"mature",value:"mature"},{label:"Mystère",value:"mystere"},{label:"novel",value:"novel"},{label:"Renaissance",value:"renaissance"},{label:"Roman",value:"roman"},{label:"romance",value:"romance"},{label:"School life",value:"school-life"},{label:"Science-fiction",value:"science-fiction"},{label:"Seinen",value:"seinen"},{label:"Shonen",value:"shonen"},{label:"showbiz",value:"showbiz"},{label:"Surnaturel",value:"surnaturel"},{label:"système",value:"systeme"},{label:"Système de niveau",value:"systeme-de-niveau"},{label:"tranche de vie",value:"tranche-de-vie"},{label:"webnovel",value:"webnovel"},{label:"xp",value:"xp"},{label:"Xuanhuan",value:"xuanhuan"}]},"type[]":{type:"Checkbox",label:"Type",value:[],options:[{label:"Korean",value:"korean"},{label:"Light novel",value:"light-novel"},{label:"novel chinois",value:"novel-chinois"}]},status:{type:"Picker",label:"Statut",value:"",options:[{label:"Tout",value:""},{label:"Ongoing",value:"ongoing"},{label:"Hiatus",value:"hiatus"},{label:"Completed",value:"completed"}]},order:{type:"Picker",label:"Par ordre",value:"",options:[{label:"Par défaut",value:""},{label:"A-Z",value:"title"},{label:"Z-A",value:"titlereverse"},{label:"Dernier mise à jour",value:"update"},{label:"Derniers Ajouts",value:"latest"},{label:"Populaire",value:"popular"}]}}});exports.default=i;