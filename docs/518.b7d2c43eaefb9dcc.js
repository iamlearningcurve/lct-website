"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[518],{3859:(m,b,c)=>{c.d(b,{P:()=>g});var a=c(5849),e=c(8645);let g=(()=>{class l{constructor(){this._config={ripple:!1,inputStyle:"outlined",menuMode:"static",colorScheme:"light",theme:"lara-light-indigo",scale:14},this.config=(0,a.tdS)(this._config),this.state={staticMenuDesktopInactive:!1,overlayMenuActive:!1,profileSidebarVisible:!1,configSidebarVisible:!1,staticMenuMobileActive:!1,menuHoverActive:!1},this.configUpdate=new e.x,this.overlayOpen=new e.x,this.configUpdate$=this.configUpdate.asObservable(),this.overlayOpen$=this.overlayOpen.asObservable(),(0,a.cEC)(()=>{const s=this.config();this.updateStyle(s)&&this.changeTheme(),this.changeScale(s.scale),this.onConfigUpdate()})}updateStyle(s){return s.theme!==this._config.theme||s.colorScheme!==this._config.colorScheme}onMenuToggle(){this.isOverlay()&&(this.state.overlayMenuActive=!this.state.overlayMenuActive,this.state.overlayMenuActive&&this.overlayOpen.next(null)),this.isDesktop()?this.state.staticMenuDesktopInactive=!this.state.staticMenuDesktopInactive:(this.state.staticMenuMobileActive=!this.state.staticMenuMobileActive,this.state.staticMenuMobileActive&&this.overlayOpen.next(null))}showProfileSidebar(){this.state.profileSidebarVisible=!this.state.profileSidebarVisible,this.state.profileSidebarVisible&&this.overlayOpen.next(null)}showConfigSidebar(){this.state.configSidebarVisible=!0}isOverlay(){return"overlay"===this.config().menuMode}isDesktop(){return window.innerWidth>991}isMobile(){return!this.isDesktop()}onConfigUpdate(){this._config={...this.config()},this.configUpdate.next(this.config())}changeTheme(){const s=this.config(),u=document.getElementById("theme-css").getAttribute("href").split("/").map(f=>f==this._config.theme?f=s.theme:f==`theme-${this._config.colorScheme}`?f=`theme-${s.colorScheme}`:f).join("/");this.replaceThemeLink(u)}replaceThemeLink(s){const d="theme-css";let r=document.getElementById(d);const u=r.cloneNode(!0);u.setAttribute("href",s),u.setAttribute("id",d+"-clone"),r.parentNode.insertBefore(u,r.nextSibling),u.addEventListener("load",()=>{r.remove(),u.setAttribute("id",d)})}changeScale(s){document.documentElement.style.fontSize=`${s}px`}static#e=this.\u0275fac=function(d){return new(d||l)};static#t=this.\u0275prov=a.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})()},8057:(m,b,c)=>{c.d(b,{XZ:()=>C,nD:()=>A});var a=c(6814),e=c(5849),g=c(95),l=c(5219),k=c(2591),s=c(2332);const d=["input"];function r(n,h){if(1&n&&e._UZ(0,"span",10),2&n){const t=e.oxw(3);e.Q6J("ngClass",t.checkboxIcon),e.uIk("data-pc-section","icon")}}function u(n,h){1&n&&e._UZ(0,"CheckIcon",11),2&n&&(e.Q6J("styleClass","p-checkbox-icon"),e.uIk("data-pc-section","icon"))}function f(n,h){if(1&n&&(e.ynx(0),e.YNc(1,r,1,2,"span",8)(2,u,1,2,"CheckIcon",9),e.BQk()),2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.checkboxIcon),e.xp6(1),e.Q6J("ngIf",!t.checkboxIcon)}}function v(n,h){}function x(n,h){1&n&&e.YNc(0,v,0,0,"ng-template")}function y(n,h){if(1&n&&(e.TgZ(0,"span",12),e.YNc(1,x,1,0,null,13),e.qZA()),2&n){const t=e.oxw(2);e.uIk("data-pc-section","icon"),e.xp6(1),e.Q6J("ngTemplateOutlet",t.checkboxIconTemplate)}}function I(n,h){if(1&n&&(e.ynx(0),e.YNc(1,f,3,2,"ng-container",5)(2,y,2,2,"span",7),e.BQk()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",!t.checkboxIconTemplate),e.xp6(1),e.Q6J("ngIf",t.checkboxIconTemplate)}}const M=(n,h,t)=>({"p-checkbox-label":!0,"p-checkbox-label-active":n,"p-disabled":h,"p-checkbox-label-focus":t});function T(n,h){if(1&n){const t=e.EpF();e.TgZ(0,"label",14),e.NdJ("click",function(i){e.CHM(t);const p=e.oxw();return e.KtG(p.onClick(i))}),e._uU(1),e.qZA()}if(2&n){const t=e.oxw();e.Tol(t.labelStyleClass),e.Q6J("ngClass",e.kEZ(6,M,t.checked(),t.disabled,t.focused)),e.uIk("for",t.inputId)("data-pc-section","label"),e.xp6(1),e.hij(" ",t.label,"")}}const E=(n,h,t)=>({"p-checkbox p-component":!0,"p-checkbox-checked":n,"p-checkbox-disabled":h,"p-checkbox-focused":t}),O=(n,h,t)=>({"p-highlight":n,"p-disabled":h,"p-focus":t}),D={provide:g.JU,useExisting:(0,e.Gpc)(()=>C),multi:!0};let C=(()=>{class n{cd;value;name;disabled;binary;label;ariaLabelledBy;ariaLabel;tabindex;inputId;style;styleClass;labelStyleClass;formControl;checkboxIcon;readonly;required;trueValue=!0;falseValue=!1;onChange=new e.vpe;onFocus=new e.vpe;onBlur=new e.vpe;inputViewChild;templates;checkboxIconTemplate;model;onModelChange=()=>{};onModelTouched=()=>{};focused=!1;constructor(t){this.cd=t}ngAfterContentInit(){this.templates.forEach(t=>{"icon"===t.getType()&&(this.checkboxIconTemplate=t.template)})}onClick(t){if(!this.disabled&&!this.readonly){let o;this.inputViewChild.nativeElement.focus(),this.binary?(o=this.checked()?this.falseValue:this.trueValue,this.model=o,this.onModelChange(o)):(o=this.checked()?this.model.filter(i=>!s.gb.equals(i,this.value)):this.model?[...this.model,this.value]:[this.value],this.onModelChange(o),this.model=o,this.formControl&&this.formControl.setValue(o)),this.onChange.emit({checked:o,originalEvent:t})}}onInputFocus(t){this.focused=!0,this.onFocus.emit(t)}onInputBlur(t){this.focused=!1,this.onModelTouched(),this.onBlur.emit(t)}writeValue(t){this.model=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}checked(){return this.binary?this.model===this.trueValue:s.gb.contains(this.value,this.model)}static \u0275fac=function(o){return new(o||n)(e.Y36(e.sBO))};static \u0275cmp=e.Xpm({type:n,selectors:[["p-checkbox"]],contentQueries:function(o,i,p){if(1&o&&e.Suo(p,l.jx,4),2&o){let _;e.iGM(_=e.CRH())&&(i.templates=_)}},viewQuery:function(o,i){if(1&o&&e.Gf(d,5),2&o){let p;e.iGM(p=e.CRH())&&(i.inputViewChild=p.first)}},hostAttrs:[1,"p-element"],inputs:{value:"value",name:"name",disabled:"disabled",binary:"binary",label:"label",ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:"tabindex",inputId:"inputId",style:"style",styleClass:"styleClass",labelStyleClass:"labelStyleClass",formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:"readonly",required:"required",trueValue:"trueValue",falseValue:"falseValue"},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},features:[e._Bn([D])],decls:7,vars:35,consts:[[3,"ngStyle","ngClass","click"],[1,"p-hidden-accessible"],["type","checkbox",3,"value","checked","disabled","readonly","focus","blur"],["input",""],[1,"p-checkbox-box",3,"ngClass"],[4,"ngIf"],[3,"class","ngClass","click",4,"ngIf"],["class","p-checkbox-icon",4,"ngIf"],["class","p-checkbox-icon",3,"ngClass",4,"ngIf"],[3,"styleClass",4,"ngIf"],[1,"p-checkbox-icon",3,"ngClass"],[3,"styleClass"],[1,"p-checkbox-icon"],[4,"ngTemplateOutlet"],[3,"ngClass","click"]],template:function(o,i){1&o&&(e.TgZ(0,"div",0),e.NdJ("click",function(_){return i.onClick(_)}),e.TgZ(1,"div",1)(2,"input",2,3),e.NdJ("focus",function(_){return i.onInputFocus(_)})("blur",function(_){return i.onInputBlur(_)}),e.qZA()(),e.TgZ(4,"div",4),e.YNc(5,I,3,2,"ng-container",5),e.qZA()(),e.YNc(6,T,2,10,"label",6)),2&o&&(e.Tol(i.styleClass),e.Q6J("ngStyle",i.style)("ngClass",e.kEZ(27,E,i.checked(),i.disabled,i.focused)),e.uIk("data-pc-name","checkbox")("data-pc-section","root"),e.xp6(1),e.uIk("data-pc-section","hiddenInputWrapper")("data-p-hidden-accessible",!0),e.xp6(1),e.Q6J("value",i.value)("checked",i.checked())("disabled",i.disabled)("readonly",i.readonly),e.uIk("id",i.inputId)("name",i.name)("tabindex",i.tabindex)("required",i.required)("aria-labelledby",i.ariaLabelledBy)("aria-label",i.ariaLabel)("aria-checked",i.checked())("data-pc-section","hiddenInput"),e.xp6(2),e.Q6J("ngClass",e.kEZ(31,O,i.checked(),i.disabled,i.focused)),e.uIk("data-p-highlight",i.checked())("data-p-disabled",i.disabled)("data-p-focused",i.focused)("data-pc-section","input"),e.xp6(1),e.Q6J("ngIf",i.checked()),e.xp6(1),e.Q6J("ngIf",i.label))},dependencies:()=>[a.mk,a.O5,a.tP,a.PC,k.n],styles:["@layer primeng{.p-checkbox{display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;vertical-align:bottom;position:relative}.p-checkbox-disabled{cursor:default!important;pointer-events:none}.p-checkbox-box{display:flex;justify-content:center;align-items:center}p-checkbox{display:inline-flex;vertical-align:bottom;align-items:center}.p-checkbox-label{line-height:1}}\n"],encapsulation:2,changeDetection:0})}return n})(),A=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=e.oAB({type:n});static \u0275inj=e.cJS({imports:[a.ez,k.n,l.m8]})}return n})()},2591:(m,b,c)=>{c.d(b,{n:()=>g});var a=c(5849),e=c(4713);let g=(()=>{class l extends e.s{static \u0275fac=(()=>{let s;return function(r){return(s||(s=a.n5z(l)))(r||l)}})();static \u0275cmp=a.Xpm({type:l,selectors:[["CheckIcon"]],standalone:!0,features:[a.qOj,a.jDz],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z","fill","currentColor"]],template:function(d,r){1&d&&(a.O4$(),a.TgZ(0,"svg",0),a._UZ(1,"path",1),a.qZA()),2&d&&(a.Tol(r.getClassNames()),a.uIk("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role))},encapsulation:2})}return l})()}}]);