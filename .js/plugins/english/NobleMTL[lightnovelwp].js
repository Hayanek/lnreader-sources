"use strict";var e=this&&this.__awaiter||function(e,a,l,t){return new(l||(l=Promise))((function(n,r){function i(e){try{o(t.next(e))}catch(e){r(e)}}function s(e){try{o(t.throw(e))}catch(e){r(e)}}function o(e){var a;e.done?n(e.value):(a=e.value,a instanceof l?a:new l((function(e){e(a)}))).then(i,s)}o((t=t.apply(e,a||[])).next())}))},a=this&&this.__generator||function(e,a){var l,t,n,r,i={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(s){return function(o){return function(s){if(l)throw new TypeError("Generator is already executing.");for(;r&&(r=0,s[0]&&(i=0)),i;)try{if(l=1,t&&(n=2&s[0]?t.return:s[0]?t.throw||((n=t.return)&&n.call(t),0):t.next)&&!(n=n.call(t,s[1])).done)return n;switch(t=0,n&&(s=[2&s[0],n.value]),s[0]){case 0:case 1:n=s;break;case 4:return i.label++,{value:s[1],done:0};case 5:i.label++,t=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(n=i.trys,(n=n.length>0&&n[n.length-1])||6!==s[0]&&2!==s[0])){i=0;continue}if(3===s[0]&&(!n||s[1]>n[0]&&s[1]<n[3])){i.label=s[1];break}if(6===s[0]&&i.label<n[1]){i.label=n[1],n=s;break}if(n&&i.label<n[2]){i.label=n[2],i.ops.push(s);break}n[2]&&i.ops.pop(),i.trys.pop();continue}s=a.call(e,i)}catch(e){s=[6,e],t=0}finally{l=n=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:1}}([s,o])}}};Object.defineProperty(exports,"__esModule",{value:1});var l=require("cheerio"),t=require("@libs/fetch"),n=require("@libs/novelStatus"),r=require("@libs/defaultCover"),i=new(function(){function i(e){this.fetchImage=t.fetchFile,this.id=e.id,this.name=e.sourceName,this.icon="multisrc/lightnovelwp/".concat(e.id,".png"),this.site=e.sourceSite,this.version="1.0.3",this.options=e.options,this.filters=e.filters}return i.prototype.getHostname=function(e){return e.split("/")[2]},i.prototype.getCheerio=function(n,r){return e(this,void 0,void 0,(function(){var e,i,s,o;return a(this,(function(a){switch(a.label){case 0:return[4,(0,t.fetchApi)(n)];case 1:if(!(e=a.sent()).ok&&1!=r)throw new Error("Could not reach site ("+e.status+") try to open in webview.");return s=l.load,[4,e.text()];case 2:if(i=s.apply(void 0,[a.sent()]),o=i("title").text().trim(),this.getHostname(n)!=this.getHostname(e.url)||"Bot Verification"==o||"You are being redirected..."==o||"Un instant..."==o||"Just a moment..."==o||"Redirecting..."==o)throw new Error("Captcha error, please open in webview");return[2,i]}}))}))},i.prototype.parseNovels=function(e){var a=this,l=[];return e("div.listupd > article").each((function(t,n){var i=e(n).find("h2").text(),s=e(n).find("img"),o=e(n).find("a").attr("href");o&&l.push({name:i,cover:s.attr("data-src")||s.attr("src")||r.defaultCover,path:o.replace(a.site,"")})})),l},i.prototype.popularNovels=function(l,t){var n=t.filters,r=t.showLatestNovels;return e(this,void 0,void 0,(function(){var e,t,i,s,o,u;return a(this,(function(a){switch(a.label){case 0:for(t in e=this.site+"/series/?page="+l,n||(n={}),r&&(e+="&order=latest"),n)if("object"==typeof n[t].value)for(i=0,s=n[t].value;i<s.length;i++)o=s[i],e+="&".concat(t,"=").concat(o);else n[t].value&&(e+="&".concat(t,"=").concat(n[t].value));return[4,this.getCheerio(e,0)];case 1:return u=a.sent(),[2,this.parseNovels(u)]}}))}))},i.prototype.parseNovel=function(l){var t,i;return e(this,void 0,void 0,(function(){var e,s,o,u,c,v,b,h=this;return a(this,(function(a){switch(a.label){case 0:return[4,this.getCheerio(this.site+l,0)];case 1:switch(e=a.sent(),(s={path:l.replace(this.site,""),name:"Untitled"}).name=e("h1.entry-title").text().trim(),o=e("img.wp-post-image"),s.cover=o.attr("data-src")||o.attr("src")||r.defaultCover,(null===(t=e("div.sertostat > span").attr("class"))||void 0===t?void 0:t.toLowerCase())||""){case"completed":s.status=n.NovelStatus.Completed;break;case"ongoing":s.status=n.NovelStatus.Ongoing;break;case"hiatus":s.status=n.NovelStatus.OnHiatus;break;default:s.status=n.NovelStatus.Unknown}return(u=e("div.serl")).length||(u=e("div.spe > span")),u.each((function(){var a=e(this).contents().first().text().replace(":","").trim().toLowerCase(),l=e(this).contents().last().text().trim().toLowerCase();switch(a){case"الكاتب":case"author":case"auteur":case"autor":case"yazar":s.author=l;break;case"الحالة":case"status":case"statut":case"estado":case"durum":switch(l){case"مكتملة":case"completed":case"complété":case"completo":case"completado":case"tamamlandı":s.status=n.NovelStatus.Completed;break;case"مستمرة":case"ongoing":case"en cours":case"em andamento":case"en progreso":case"devam ediyor":s.status=n.NovelStatus.Ongoing;break;case"متوقفة":case"hiatus":case"en pause":case"hiato":case"pausa":case"pausado":case"duraklatıldı":s.status=n.NovelStatus.OnHiatus;break;default:s.status=n.NovelStatus.Unknown}break;case"الفنان":case"artist":case"artiste":case"artista":case"çizer":s.artist=l}})),(c=e(".sertogenre")).length||(c=e(".genxed")),s.genres=c.children("a").map((function(a,l){return e(l).text()})).toArray().join(","),(v=e(".sersys > p").map((function(a,l){return e(l).text().trim()})).toArray()).length||(v=e(".entry-content > p").map((function(a,l){return e(l).text().trim()})).toArray()),s.summary=v.join("\n"),b=[],e(".eplister li").each((function(a,l){var t,n=e(l).find(".epl-num").text()+" "+e(l).find(".epl-title").text(),r=e(l).find("a").attr("href")||"",i=e(l).find(".epl-date").text().trim();switch(e(l).find(".epl-price").text().trim().toLowerCase()){case"free":case"gratuit":case"مجاني":case"livre":case"":t=1;break;default:t=0}t&&b.push({name:n,path:r.replace(h.site,""),releaseTime:i})})),(null===(i=this.options)||void 0===i?void 0:i.reverseChapters)&&b.length&&b.reverse(),s.chapters=b,[2,s]}}))}))},i.prototype.parseChapter=function(l){var t;return e(this,void 0,void 0,(function(){var e,n;return a(this,(function(a){switch(a.label){case 0:return[4,this.getCheerio(this.site+l,0)];case 1:return e=a.sent(),"kolnovel"==this.id&&((n=e("article > style").text().trim().split(",")).push.apply(n,(null===(t=n.pop())||void 0===t?void 0:t.match(/^\.\w+/))||[]),n.map((function(a){return e("p".concat(a)).remove()}))),[2,e(".epcontent p").map((function(a,l){return e(l)})).toArray().join("\n")||""]}}))}))},i.prototype.searchNovels=function(l,t){return e(this,void 0,void 0,(function(){var e,n;return a(this,(function(a){switch(a.label){case 0:return e=this.site+"page/"+t+"/?s="+l,[4,this.getCheerio(e,1)];case 1:return n=a.sent(),[2,this.parseNovels(n)]}}))}))},i}())({id:"noblemtl",sourceSite:"https://noblemtl.com/",sourceName:"NobleMTL",options:{lang:"English",reverseChapters:1},filters:{"genre[]":{type:"Checkbox",label:"Genre",value:[],options:[{label:"A.I",value:"a-i"},{label:"Academy",value:"academy"},{label:"Action",value:"action"},{label:"Adult",value:"adult"},{label:"Adventure",value:"adventure"},{label:"Alternative History",value:"alternative-history"},{label:"Another World",value:"another-world"},{label:"Apocalypse",value:"apocalypse"},{label:"Bromance",value:"bromance"},{label:"Comedy",value:"comedy"},{label:"Cthulhu",value:"cthulhu"},{label:"Dark fantasy",value:"dark-fantasy"},{label:"Demons",value:"demons"},{label:"Drama",value:"drama"},{label:"Dystopia",value:"dystopia"},{label:"Ecchi",value:"ecchi"},{label:"Entertainment",value:"entertainment"},{label:"Exhaustion",value:"exhaustion"},{label:"Fanfiction",value:"fanfiction"},{label:"fantasy",value:"fantasy"},{label:"finance",value:"finance"},{label:"For men",value:"for-men"},{label:"Full color",value:"full-color"},{label:"fusion",value:"fusion"},{label:"gacha",value:"gacha"},{label:"Gallery",value:"gallery"},{label:"Game",value:"game"},{label:"Gender Bender",value:"gender-bender"},{label:"Genius",value:"genius"},{label:"Harem",value:"harem"},{label:"Healing",value:"healing"},{label:"Hero",value:"hero"},{label:"Historical",value:"historical"},{label:"Hunter",value:"hunter"},{label:"korean novel",value:"korean-novel"},{label:"Light Novel",value:"light-novel"},{label:"List Adventure Manga Genres",value:"list-adventure-manga-genres"},{label:"Long Strip",value:"long-strip"},{label:"Love comedy",value:"love-comedy"},{label:"magic",value:"magic"},{label:"Manhua",value:"manhua"},{label:"Martial Arts",value:"martial-arts"},{label:"Mature",value:"mature"},{label:"Medieval",value:"medieval"},{label:"Middle Ages",value:"middle-ages"},{label:"Misunderstanding",value:"misunderstanding"},{label:"Modern",value:"modern"},{label:"modern fantasy",value:"modern-fantasy"},{label:"Munchkin",value:"munchkin"},{label:"music",value:"music"},{label:"Mystery",value:"mystery"},{label:"Necromancy",value:"necromancy"},{label:"No Romance",value:"no-romance"},{label:"NTL",value:"ntl"},{label:"o",value:"o"},{label:"Obsession",value:"obsession"},{label:"Politics",value:"politics"},{label:"Possession",value:"possession"},{label:"Programming",value:"programming"},{label:"Psychological",value:"psychological"},{label:"Pure Love",value:"pure-love"},{label:"reasoning",value:"reasoning"},{label:"Redemption",value:"redemption"},{label:"Regression",value:"regression"},{label:"Regret",value:"regret"},{label:"Reincarnation",value:"reincarnation"},{label:"Return",value:"return"},{label:"Revenge",value:"revenge"},{label:"Reversal",value:"reversal"},{label:"Romance",value:"romance"},{label:"Romance Fanrasy",value:"romance-fanrasy"},{label:"Salvation",value:"salvation"},{label:"School Life",value:"school-life"},{label:"Sci-fi",value:"sci-fi"},{label:"Science fiction",value:"science-fiction"},{label:"Seinen",value:"seinen"},{label:"Shounen",value:"shounen"},{label:"Slice of Life",value:"slice-of-life"},{label:"Soft yandere",value:"soft-yandere"},{label:"Space opera",value:"space-opera"},{label:"Sports",value:"sports"},{label:"Supernatural",value:"supernatural"},{label:"Survival",value:"survival"},{label:"system",value:"system"},{label:"Time limit",value:"time-limit"},{label:"Tragedy",value:"tragedy"},{label:"Transmigration",value:"transmigration"},{label:"TRPG",value:"trpg"},{label:"TS",value:"ts"},{label:"Tsundere",value:"tsundere"},{label:"Unique",value:"unique"},{label:"Urban",value:"urban"},{label:"Villain",value:"villain"},{label:"Wholesome",value:"wholesome"},{label:"Wisdom",value:"wisdom"},{label:"Wuxia",value:"wuxia"},{label:"Xuanhuan",value:"xuanhuan"},{label:"Yandere",value:"yandere"},{label:"Yuri",value:"yuri"}]},"type[]":{type:"Checkbox",label:"Type",value:[],options:[{label:"Chinese novel",value:"chinese-novel"},{label:"habyeol",value:"habyeol"},{label:"korean novel",value:"korean-novel"},{label:"Web Novel",value:"web-novel"},{label:"삼심",value:"삼심"},{label:"호곡",value:"호곡"}]},status:{type:"Picker",label:"Status",value:"",options:[{label:"All",value:""},{label:"Ongoing",value:"ongoing"},{label:"Hiatus",value:"hiatus"},{label:"Completed",value:"completed"}]},order:{type:"Picker",label:"Order by",value:"",options:[{label:"Default",value:""},{label:"A-Z",value:"title"},{label:"Z-A",value:"titlereverse"},{label:"Latest Update",value:"update"},{label:"Latest Added",value:"latest"},{label:"Popular",value:"popular"}]}}});exports.default=i;