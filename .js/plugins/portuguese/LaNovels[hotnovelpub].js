"use strict";var e=this&&this.__awaiter||function(e,t,a,n){return new(a||(a=Promise))((function(i,r){function o(e){try{l(n.next(e))}catch(e){r(e)}}function s(e){try{l(n.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(o,s)}l((n=n.apply(e,t||[])).next())}))},t=this&&this.__generator||function(e,t){var a,n,i,r,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(s){return function(l){return function(s){if(a)throw new TypeError("Generator is already executing.");for(;r&&(r=0,s[0]&&(o=0)),o;)try{if(a=1,n&&(i=2&s[0]?n.return:s[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,s[1])).done)return i;switch(n=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:0};case 5:o.label++,n=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],n=0}finally{a=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:1}}([s,l])}}};Object.defineProperty(exports,"__esModule",{value:1});var a=require("@libs/fetch"),n=require("@libs/filterInputs"),i=require("@libs/novelStatus"),r=require("cheerio"),o=new(function(){function n(e){var t;this.fetchImage=a.fetchFile,this.id=e.id,this.name=e.sourceName,this.icon="multisrc/hotnovelpub/icons/".concat(e.id,".png"),this.site=e.sourceSite,this.apiSite=e.sourceSite.replace("://","://api."),this.version="1.0.0",this.filters=e.filters,this.lang=(null===(t=e.options)||void 0===t?void 0:t.lang)||"en"}return n.prototype.popularNovels=function(n,i){var r,o,s,l=i.filters,u=i.showLatestNovels;return e(this,void 0,void 0,(function(){var e,i,c,h=this;return t(this,(function(t){switch(t.label){case 0:return e=this.apiSite+"/books/",e+=u?"new":(null===(r=null==l?void 0:l.sort)||void 0===r?void 0:r.value)||"hot",(null===(o=null==l?void 0:l.category)||void 0===o?void 0:o.value)&&(e=this.apiSite+"/category/"+l.category.value),e+="/?page="+(n-1)+"&limit=20",[4,(0,a.fetchApi)(e,{headers:{lang:this.lang}})];case 1:return[4,t.sent().json()];case 2:return i=t.sent(),c=[],i.status&&(null===(s=i.data.books.data)||void 0===s?void 0:s.length)&&i.data.books.data.forEach((function(e){return c.push({name:e.name,cover:h.site+e.image,path:"/"+e.slug})})),[2,c]}}))}))},n.prototype.parseNovel=function(n){var r,o;return e(this,void 0,void 0,(function(){var e,s,l;return t(this,(function(t){switch(t.label){case 0:return[4,(0,a.fetchApi)(this.apiSite+"/book"+n,{headers:{lang:this.lang}})];case 1:return[4,t.sent().json()];case 2:return e=t.sent(),s={name:e.data.book.name,path:n,cover:this.site+e.data.book.image,summary:e.data.book.authorize.description,author:e.data.book.authorize.name,status:"updating"===e.data.book.status?i.NovelStatus.Ongoing:i.NovelStatus.Completed},(null===(r=e.data.tags.tags_name)||void 0===r?void 0:r.length)&&(s.genres=e.data.tags.tags_name.join(",")),(null===(o=e.data.chapters)||void 0===o?void 0:o.length)&&(l=[],e.data.chapters.forEach((function(e,t){return l.push({name:e.title,path:"/"+e.slug,releaseTime:void 0,chapterNumber:(e.index||t)+1})})),s.chapters=l),[2,s]}}))}))},n.prototype.parseChapter=function(n){return e(this,void 0,void 0,(function(){var e,i,o,s;return t(this,(function(t){switch(t.label){case 0:return[4,(0,a.fetchApi)(this.site+n).then((function(e){return e.text()}))];case 1:return e=t.sent(),i=(0,r.load)(e),(o=i("#content-item").html()||"")?[4,(0,a.fetchApi)(this.site+"/server/getContent?slug="+n)]:[3,4];case 2:return[4,t.sent().json()];case 3:(s=t.sent()).data&&(o+=s.data.map((function(e){return"<p>"+e+"</p>"})).join("").replace(/\n/g,"</p><p>").replace(/\s/g," ")),t.label=4;case 4:return[2,o.replace(/\.copy right hot novel pub/g,"")]}}))}))},n.prototype.searchNovels=function(n,i){var r;return e(this,void 0,void 0,(function(){var e,i;return t(this,(function(t){switch(t.label){case 0:return[4,(0,a.fetchApi)(this.apiSite+"/search",{headers:{"Content-Type":"application/json;charset=utf-8",Referer:this.site,Origin:this.site,lang:this.lang},method:"POST",body:JSON.stringify({key_search:n})})];case 1:return[4,t.sent().json()];case 2:return e=t.sent(),i=[],e.status&&(null===(r=e.data.books)||void 0===r?void 0:r.length)&&e.data.books.forEach((function(e){return i.push({name:e.name,cover:void 0,path:"/"+e.slug})})),[2,i]}}))}))},n}())({id:"lanovels",sourceSite:"https://lanovels.com",sourceName:"LaNovels",filters:{sort:{type:n.FilterTypes.Picker,label:"Order",value:"hot",options:[{label:"História quente",value:"hot"},{label:"Nova estória",value:"new"},{label:"História completa",value:"full"}]},category:{type:n.FilterTypes.Picker,label:"Categoria",value:"",options:[{label:"NONE",value:""},{label:"Aventura",value:"aventura"},{label:"Erótico",value:"erotico"},{label:"Fantasia",value:"fantasia"},{label:"Ficção adolescente",value:"ficcao-adolescente"},{label:"Ficção científica",value:"ficcao-cientifica"},{label:"Lobisomens/Vampiros",value:"lobisomens-vampiros"},{label:"Mistério",value:"misterio"},{label:"Paranormal",value:"paranormal"},{label:"Romance",value:"romance"},{label:"Suspense/Terror",value:"suspense-terror"}]}},options:{lang:"pt"}});exports.default=o;