(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"4dcf":function(t,e,n){"use strict";n.r(e),n.d(e,"SetupModule",(function(){return k}));var o=n("ofXK"),c=n("3Pt+"),a=n("tyNb"),r=n("FpXt"),s=n("7of8"),i=n("fXoL"),p=n("2Vo4"),l=n("kmnG"),b=n("qFsG");let u=(()=>{class t{constructor(t){this.fb=t,this.completed=new i.n,this.form=this.fb.group({org:["",c.k.required]})}ngOnInit(){}next(){this.completed.emit()}}return t.\u0275fac=function(e){return new(e||t)(i.Lb(c.b))},t.\u0275cmp=i.Fb({type:t,selectors:[["app-setup-form-org"]],outputs:{completed:"completed"},decls:10,vars:1,consts:[[3,"formGroup"],["appearance","fill"],["formControlName","org","matInput","","placeholder","Placeholder"],["type","button",1,"button","is-primary",3,"click"]],template:function(t,e){1&t&&(i.Qb(0,"form",0),i.Qb(1,"h2"),i.pc(2,"Enter a name for your organization"),i.Pb(),i.Qb(3,"mat-form-field",1),i.Qb(4,"mat-label"),i.pc(5,"Organization"),i.Pb(),i.Mb(6,"input",2),i.Pb(),i.Qb(7,"div"),i.Qb(8,"button",3),i.Xb("click",(function(){return e.next()})),i.pc(9,"Next"),i.Pb(),i.Pb(),i.Pb()),2&t&&i.ec("formGroup",e.form)},directives:[c.l,c.h,c.d,l.b,l.e,c.a,b.a,c.g,c.c],encapsulation:2,changeDetection:0}),t})();const f=(()=>{var t;const e=(null===(t=navigator.languages)||void 0===t?void 0:t.length)?navigator.languages[0]:navigator.language,n=new Date;n.setDate(n.getDate()-n.getDay());const[o,c,a]=[n.getFullYear(),n.getMonth(),n.getDate()],r={weekday:"short"};return Array.from(Array(7)).map((t,n)=>new Date(o,c,a+n).toLocaleDateString(e,r))})();var m=n("d3UM"),g=n("jaxi"),d=n("FKr1");function h(t,e){if(1&t&&(i.Qb(0,"mat-option",6),i.pc(1),i.Pb()),2&t){const t=e.$implicit;i.Ab(1),i.qc(t)}}function y(t,e){if(1&t&&(i.Qb(0,"mat-button-toggle",7),i.pc(1),i.Pb()),2&t){const t=e.$implicit;i.ec("value",t),i.Ab(1),i.qc(t)}}let w=(()=>{class t{constructor(t){this.fb=t,this.completed=new i.n,this.weekDays=f,this.form=this.fb.group({weekStartDate:["",c.k.required],daysOpen:[["Mon","Fri"]]})}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(i.Lb(c.b))},t.\u0275cmp=i.Fb({type:t,selectors:[["app-setup-form-schedule"]],outputs:{completed:"completed"},decls:10,vars:3,consts:[[3,"formGroup"],["appearance","fill"],["formControlName","weekStartDate"],["value","value",4,"ngFor","ngForOf"],["multiple","true","name","openDays","aria-label","Days Open","formControlName","daysOpen"],[3,"value",4,"ngFor","ngForOf"],["value","value"],[3,"value"]],template:function(t,e){1&t&&(i.Qb(0,"form",0),i.Qb(1,"h2"),i.pc(2,"Choose week start day."),i.Pb(),i.Qb(3,"mat-form-field",1),i.Qb(4,"mat-label"),i.pc(5,"Week Start Day"),i.Pb(),i.Qb(6,"mat-select",2),i.oc(7,h,2,1,"mat-option",3),i.Pb(),i.Pb(),i.Qb(8,"mat-button-toggle-group",4),i.oc(9,y,2,2,"mat-button-toggle",5),i.Pb(),i.Pb()),2&t&&(i.ec("formGroup",e.form),i.Ab(7),i.ec("ngForOf",e.weekDays),i.Ab(2),i.ec("ngForOf",e.weekDays))},directives:[c.l,c.h,c.d,l.b,l.e,m.a,c.g,c.c,o.j,g.b,d.f,g.a],styles:[""],changeDetection:0}),t})();function v(t,e){if(1&t){const t=i.Rb();i.Qb(0,"app-setup-form-org",2),i.Xb("completed",(function(){return i.ic(t),i.Zb().nextStep()})),i.Pb()}}function P(t,e){if(1&t){const t=i.Rb();i.Qb(0,"app-setup-form-schedule",2),i.Xb("completed",(function(){return i.ic(t),i.Zb().nextStep()})),i.Pb()}}let Q=(()=>{class t{constructor(){this.step$=new p.a(0)}nextStep(){this.step$.next(this.step$.getValue()+1)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Fb({type:t,selectors:[["app-setup-form-container"]],decls:4,vars:5,consts:[[1,"box",3,"ngSwitch"],[3,"completed",4,"ngSwitchCase"],[3,"completed"]],template:function(t,e){1&t&&(i.Qb(0,"div",0),i.ac(1,"async"),i.oc(2,v,1,0,"app-setup-form-org",1),i.oc(3,P,1,0,"app-setup-form-schedule",1),i.Pb()),2&t&&(i.ec("ngSwitch",i.bc(1,3,e.step$)),i.Ab(2),i.ec("ngSwitchCase",0),i.Ab(1),i.ec("ngSwitchCase",1))},directives:[o.l,o.m,u,w],pipes:[o.b],styles:["[_nghost-%COMP%] {\n      display: block;\n      max-width: 520px;\n    }\n    form[_ngcontent-%COMP%] {\n      display: grid;\n      grid-gap: 12px;\n    }"],changeDetection:0}),t})();const D=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Fb({type:t,selectors:[["app-setup-page"]],decls:6,vars:0,consts:[[1,"hero","is-fullheight"],[1,"hero-body"],[1,"container"],[1,"title"]],template:function(t,e){1&t&&(i.Qb(0,"section",0),i.Qb(1,"div",1),i.Qb(2,"div",2),i.Qb(3,"p",3),i.pc(4,"Hey, this is a title"),i.Pb(),i.Mb(5,"app-setup-form-container"),i.Pb(),i.Pb(),i.Pb())},directives:[Q],styles:["[_nghost-%COMP%] {\n      display: block;\n      height: 100%;\n    }"],changeDetection:0}),t})()}];let k=(()=>{class t{}return t.\u0275mod=i.Jb({type:t}),t.\u0275inj=i.Ib({factory:function(e){return new(e||t)},imports:[[o.c,r.a,s.a,c.j,a.f.forChild(D)]]}),t})()}}]);
//# sourceMappingURL=setup-setup-module.78b76261ce8fb5d0034a.js.map