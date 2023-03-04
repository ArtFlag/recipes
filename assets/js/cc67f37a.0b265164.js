"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9982],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=l,k=m["".concat(i,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(k,u(u({ref:t},c),{},{components:n})):r.createElement(k,u({ref:t},c))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,u=new Array(a);u[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[m]="string"==typeof e?e:l,u[1]=o;for(var s=2;s<a;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(7294),l=n(6010),a={tabItem:"tabItem_Ymn6"};function u(e){var t=e.children,n=e.hidden,u=e.className;return r.createElement("div",{role:"tabpanel",className:(0,l.Z)(a.tabItem,u),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return w}});var r=n(7462),l=n(7294),a=n(6010),u=n(2466),o=n(6550),i=n(1980),s=n(7392),c=n(12);function m(e){return function(e){return l.Children.map(e,(function(e){if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,n=e.children;return(0,l.useMemo)((function(){var e=null!=t?t:m(n);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function k(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,a=(0,o.k6)(),u=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,i._X)(u),(0,l.useCallback)((function(e){if(u){var t=new URLSearchParams(a.location.search);t.set(u,e),a.replace(Object.assign({},a.location,{search:t.toString()}))}}),[u,a])]}function g(e){var t,n,r,a,u=e.defaultValue,o=e.queryString,i=void 0!==o&&o,s=e.groupId,m=p(e),g=(0,l.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var l=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:u,tabValues:m})})),f=g[0],h=g[1],b=k({queryString:i,groupId:s}),v=b[0],y=b[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),n=(0,c.Nk)(t),r=n[0],a=n[1],[r,(0,l.useCallback)((function(e){t&&a.set(e)}),[t,a])]),T=w[0],x=w[1],N=function(){var e=null!=v?v:T;return d({value:e,tabValues:m})?e:null}();return(0,l.useLayoutEffect)((function(){N&&h(N)}),[N]),{selectedValue:f,selectValue:(0,l.useCallback)((function(e){if(!d({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);h(e),y(e),x(e)}),[y,x,m]),tabValues:m}}var f=n(2389),h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){var t=e.className,n=e.block,o=e.selectedValue,i=e.selectValue,s=e.tabValues,c=[],m=(0,u.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==o&&(m(t),i(r))},d=function(e){var t,n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var r,l=c.indexOf(e.currentTarget)+1;n=null!=(r=c[l])?r:c[0];break;case"ArrowLeft":var a,u=c.indexOf(e.currentTarget)-1;n=null!=(a=c[u])?a:c[c.length-1]}null==(t=n)||t.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t)},s.map((function(e){var t=e.value,n=e.label,u=e.attributes;return l.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:function(e){return c.push(e)},onKeyDown:d,onClick:p},u,{className:(0,a.Z)("tabs__item",h.tabItem,null==u?void 0:u.className,{"tabs__item--active":o===t})}),null!=n?n:t)})))}function v(e){var t=e.lazy,n=e.children,r=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var a=n.find((function(e){return e.props.value===r}));return a?(0,l.cloneElement)(a,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function y(e){var t=g(e);return l.createElement("div",{className:(0,a.Z)("tabs-container",h.tabList)},l.createElement(b,(0,r.Z)({},e,t)),l.createElement(v,(0,r.Z)({},e,t)))}function w(e){var t=(0,f.Z)();return l.createElement(y,(0,r.Z)({key:String(t)},e))}},9131:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294),l=n.p+"assets/images/fan-141c3433a6a6b6bc6893781dc858cb69.png",a=n.p+"assets/images/thermometer-8d9a18bf6afdc634ad76d2a1ca812395.png",u=n.p+"assets/images/clock-2fa3557a2ac7f21be69d0c2584c30041.png",o="cooking_BpaW",i=function(e){var t=e.time,n=e.temp,i=e.preheat,s=void 0===i||i,c=e.fan,m=void 0!==c&&c;return r.createElement(r.Fragment,null,r.createElement("span",{className:o},r.createElement("img",{src:a}),r.createElement("strong",null,n),"\xb0 ",s?r.createElement("strong",null,"preheated"):""," ",r.createElement("img",{src:u})," ",r.createElement("strong",null,t),".",m?r.createElement("img",{src:l}):""))}},4212:function(e,t,n){n.r(t),n.d(t,{BrownSugar:function(){return k},Butter:function(){return g},ButterDough:function(){return v},Cinnamon:function(){return f},Flour:function(){return h},FlourSourDough:function(){return b},Milk:function(){return w},MilkSourDough:function(){return T},SugarDough:function(){return y},assets:function(){return d},contentTitle:function(){return m},default:function(){return S},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return x}});var r=n(7462),l=n(3366),a=(n(7294),n(3905)),u=n(9131),o=n(4866),i=n(5162),s=["components"],c={title:"Cinnamon buns"},m=void 0,p={unversionedId:"bread/cinnamon-buns",id:"bread/cinnamon-buns",title:"Cinnamon buns",description:"Ingredients",source:"@site/docs/bread/cinnamon-buns.mdx",sourceDirName:"bread",slug:"/bread/cinnamon-buns",permalink:"/recipes/docs/bread/cinnamon-buns",draft:!1,editUrl:"https://github.com/artflag/recipes/edit/master/docs/bread/cinnamon-buns.mdx",tags:[],version:"current",frontMatter:{title:"Cinnamon buns"},sidebar:"bread",previous:{title:"Ciabatta",permalink:"/recipes/docs/bread/ciabatta"},next:{title:"Cornbread",permalink:"/recipes/docs/bread/cornbread"}},d={},k=function(){return(0,a.kt)("span",null,"180g")},g=function(){return(0,a.kt)("span",null,"70g")},f=function(){return(0,a.kt)("span",null,"17g")},h=function(){return(0,a.kt)("span",null,"580g")},b=function(){return(0,a.kt)("span",null,"530g")},v=function(){return(0,a.kt)("span",null,"80g")},y=function(){return(0,a.kt)("span",null,"110g")},w=function(){return(0,a.kt)("span",null,"230g")},T=function(){return(0,a.kt)("span",null,"180g")},x=[{value:"Ingredients",id:"ingredients",level:2},{value:"Glazing",id:"glazing",level:3},{value:"Instructions",id:"instructions",level:2},{value:"Buns",id:"buns",level:3},{value:"Next day",id:"next-day",level:3},{value:"Glazing",id:"glazing-1",level:4}],N={BrownSugar:k,Butter:g,Cinnamon:f,Flour:h,FlourSourDough:b,ButterDough:v,SugarDough:y,Milk:w,MilkSourDough:T,toc:x},E="wrapper";function S(e){var t=e.components,n=(0,l.Z)(e,s);return(0,a.kt)(E,(0,r.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"ingredients"},"Ingredients"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Sourdough"),(0,a.kt)("th",null,"Yeast"),(0,a.kt)("th",null,"Filling"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("ul",null,(0,a.kt)("li",null,"All-purpose flour: ",(0,a.kt)(b,{mdxType:"FlourSourDough"})),(0,a.kt)("li",null,"Butter (softened): ",(0,a.kt)(v,{mdxType:"ButterDough"})),(0,a.kt)("li",null,"Egg yolk: 1"),(0,a.kt)("li",null,"Eggs: 2"),(0,a.kt)("li",null,"Fine sea salt: 6g"),(0,a.kt)("li",null,"Granulated sugar: ",(0,a.kt)(y,{mdxType:"SugarDough"})),(0,a.kt)("li",null,"Lukewarm whole milk: ",(0,a.kt)(T,{mdxType:"MilkSourDough"})),(0,a.kt)("li",null,"Sourdough starter: 100g"))),(0,a.kt)("td",null,(0,a.kt)("ul",null,(0,a.kt)("li",null,"All-purpose flour: ",(0,a.kt)(h,{mdxType:"Flour"})),(0,a.kt)("li",null,"Butter (softened): ",(0,a.kt)(v,{mdxType:"ButterDough"})),(0,a.kt)("li",null,"Egg yolk: 1"),(0,a.kt)("li",null,"Eggs: 2"),(0,a.kt)("li",null,"Fine sea salt: 6g"),(0,a.kt)("li",null,"Granulated sugar: ",(0,a.kt)(y,{mdxType:"SugarDough"})),(0,a.kt)("li",null,"Lukewarm whole milk: ",(0,a.kt)(w,{mdxType:"Milk"})),(0,a.kt)("li",null,"Instant yeast: 7g"))),(0,a.kt)("td",null,(0,a.kt)("ul",null,(0,a.kt)("li",null,"Brown sugar: ",(0,a.kt)(k,{mdxType:"BrownSugar"})),(0,a.kt)("li",null,"Butter (softened): ",(0,a.kt)(g,{mdxType:"Butter"})),(0,a.kt)("li",null,"Cinnamon: ",(0,a.kt)(f,{mdxType:"Cinnamon"}))))))),(0,a.kt)("h3",{id:"glazing"},"Glazing"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Cream cheese: 115g"),(0,a.kt)("li",{parentName:"ul"},"Cups powdered sugar: 80g"),(0,a.kt)("li",{parentName:"ul"},"Vanilla bean: 1"),(0,a.kt)("li",{parentName:"ul"},"Whole milk: 3 Tbsp (45ml)")),(0,a.kt)("h2",{id:"instructions"},"Instructions"),(0,a.kt)("h3",{id:"buns"},"Buns"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In a stand mixer bowl, whisk together:"),(0,a.kt)(o.Z,{className:"small",groupId:"group1",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"yeast",label:"Yeast",mdxType:"TabItem"},(0,a.kt)("ul",null,(0,a.kt)("li",null,"Flour: ",(0,a.kt)(h,{mdxType:"Flour"})),(0,a.kt)("li",null,"Granulated sugar: ",(0,a.kt)(y,{mdxType:"SugarDough"})),(0,a.kt)("li",null,"Fine sea salt: 6g."))),(0,a.kt)(i.Z,{value:"sourdough",label:"Sourdough",mdxType:"TabItem"},(0,a.kt)("ul",null,(0,a.kt)("li",null,"Flour: ",(0,a.kt)(b,{mdxType:"FlourSourDough"})),(0,a.kt)("li",null,"Granulated sugar: ",(0,a.kt)(y,{mdxType:"SugarDough"})),(0,a.kt)("li",null,"Fine sea salt: 6g."))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add in softened unsalted butter: ",(0,a.kt)(v,{mdxType:"ButterDough"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In a separate container, mix:"),(0,a.kt)(o.Z,{className:"small",groupId:"group1",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"yeast",label:"Yeast",mdxType:"TabItem"},(0,a.kt)("ul",null,(0,a.kt)("li",null,"Milk: ",(0,a.kt)(w,{mdxType:"Milk"})),(0,a.kt)("li",null,"Yeast: 7g"))),(0,a.kt)(i.Z,{value:"sourdough",label:"Sourdough",mdxType:"TabItem"},(0,a.kt)("ul",null,(0,a.kt)("li",null,"Milk: ",(0,a.kt)(T,{mdxType:"MilkSourDough"})),(0,a.kt)("li",null,"Sourdough starter: 100g"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Using the dough hook attachment set on medium-low speed, add:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Starter/yeast mixture"),(0,a.kt)("li",{parentName:"ul"},"Whole eggs"),(0,a.kt)("li",{parentName:"ul"},"Egg yolk."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Mix for 5-10 minutes.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Develop gluten:"),(0,a.kt)(o.Z,{className:"small",groupId:"group1",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"yeast",label:"Yeast",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",null,"On a lightly floured work surface and knead for 30-60 seconds. Plop into a greased bowl and cover with plastic wrap, let rise for 1h30 / 2 hours."),(0,a.kt)("li",null,"Keep in fridge overnight."))),(0,a.kt)(i.Z,{value:"sourdough",label:"Sourdough",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",null,"Perform stretches and folds over the next 2 hours."),(0,a.kt)("li",null,"Let rise until puffy then boule and keep in the fridge overnight.")))))),(0,a.kt)("h3",{id:"next-day"},"Next day"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Mix",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Brown sugar: ",(0,a.kt)(k,{mdxType:"BrownSugar"})),(0,a.kt)("li",{parentName:"ul"},"Cinnamon: ",(0,a.kt)(f,{mdxType:"Cinnamon"})))),(0,a.kt)("li",{parentName:"ol"},"Flatten into ",(0,a.kt)("strong",{parentName:"li"},"40x60cm")," on a floured surface. Long side near you."),(0,a.kt)("li",{parentName:"ol"},"Spread softened unsalted butter (",(0,a.kt)(g,{mdxType:"Butter"}),") across the whole rectangle."),(0,a.kt)("li",{parentName:"ol"},"Sprinkle the cinnamon sugar evenly across the whole dough."),(0,a.kt)("li",{parentName:"ol"},"Tightly roll from the bottom all the way to the top."),(0,a.kt)("li",{parentName:"ol"},"Slice into ",(0,a.kt)("strong",{parentName:"li"},"5cm-thick")," (2in) segments."),(0,a.kt)("li",{parentName:"ol"},"Grease a ",(0,a.kt)("strong",{parentName:"li"},"22x33cm")," (9x13in) baking dish, line the bottom of the pan the rolls, put rolls with tails facing to another."),(0,a.kt)("li",{parentName:"ol"},"Cover with plastic wrap."),(0,a.kt)("li",{parentName:"ol"},"Let rise at room temperature until 1.5x bigger."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)(u.Z,{temp:"190",time:"15-25 minutes",mdxType:"CookingStep"})),(0,a.kt)("li",{parentName:"ol"},"Let cool in the container for 15 minutes.")),(0,a.kt)("h4",{id:"glazing-1"},"Glazing"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Beat together cream cheese then blend in powdered sugar until smooth."),(0,a.kt)("li",{parentName:"ol"},"Whisk in whole milk until smooth then add in half scraped vanilla bean and whisk together."),(0,a.kt)("li",{parentName:"ol"},"Drizzle the glaze on top of the cinnamon rolls and serve.")))}S.isMDXComponent=!0}}]);