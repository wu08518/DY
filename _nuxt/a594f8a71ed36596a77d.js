(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{326:function(e,r,t){"use strict";var o=t(3),n=t(26),l=t(37),c=t(180),m=t(85),f=t(13),d=t(59).f,v=t(86).f,h=t(11).f,_=t(327).trim,F=o.Number,x=F,w=F.prototype,k="Number"==l(t(123)(w)),N="trim"in String.prototype,E=function(e){var r=m(e,!1);if("string"==typeof r&&r.length>2){var t,o,n,l=(r=N?r.trim():_(r,3)).charCodeAt(0);if(43===l||45===l){if(88===(t=r.charCodeAt(2))||120===t)return NaN}else if(48===l){switch(r.charCodeAt(1)){case 66:case 98:o=2,n=49;break;case 79:case 111:o=8,n=55;break;default:return+r}for(var code,c=r.slice(2),i=0,f=c.length;i<f;i++)if((code=c.charCodeAt(i))<48||code>n)return NaN;return parseInt(c,o)}}return+r};if(!F(" 0o1")||!F("0b1")||F("+0x1")){F=function(e){var r=arguments.length<1?0:e,t=this;return t instanceof F&&(k?f(function(){w.valueOf.call(t)}):"Number"!=l(t))?c(new x(E(r)),t,F):E(r)};for(var I,y=t(8)?d(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;y.length>S;S++)n(x,I=y[S])&&!n(F,I)&&h(F,I,v(x,I));F.prototype=w,w.constructor=F,t(15)(o,"Number",F)}},327:function(e,r,t){var o=t(7),n=t(36),l=t(13),c=t(328),m="["+c+"]",f=RegExp("^"+m+m+"*"),d=RegExp(m+m+"*$"),v=function(e,r,t){var n={},m=l(function(){return!!c[e]()||"​"!="​"[e]()}),f=n[e]=m?r(h):c[e];t&&(n[t]=f),o(o.P+o.F*m,"String",n)},h=v.trim=function(e,r){return e=String(n(e)),1&r&&(e=e.replace(f,"")),2&r&&(e=e.replace(d,"")),e};e.exports=v},328:function(e,r){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},329:function(e,r,t){var o=t(7);o(o.S,"Number",{isInteger:t(330)})},330:function(e,r,t){var o=t(14),n=Math.floor;e.exports=function(e){return!o(e)&&isFinite(e)&&n(e)===e}},336:function(e,r,t){var content=t(352);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(20).default)("22d471c1",content,!0,{sourceMap:!1})},351:function(e,r,t){"use strict";var o=t(336);t.n(o).a},352:function(e,r,t){(e.exports=t(19)(!1)).push([e.i,"@media (min-width:768px){.trialacre[data-v-fd125410]{height:7.5rem}.trialacre .welcomeHint[data-v-fd125410]{line-height:.4rem;padding:.2rem;font-weight:600;text-align:center}.trialacre .trialForm[data-v-fd125410]{box-shadow:0 0 10px #dcdcdc;padding:.2rem}.trialacre .trialForm .trialTitle[data-v-fd125410]{margin:.2rem 0}.trialacre .trialForm .signinHint[data-v-fd125410]{color:#e4a221;display:inline-block;padding:1px .1rem;border-bottom:1px solid #e4a221}.trialacre .applysuccess[data-v-fd125410]{margin:.6rem 0}.trialacre .applysuccess .applyStroreNumber[data-v-fd125410]{color:#e03030;font-size:.2rem}}@media (max-width:767px){.trialacre[data-v-fd125410]{height:5.5rem}.trialacre .welcomeHint[data-v-fd125410]{line-height:.4rem;padding:0 .2rem}.trialacre .trialForm[data-v-fd125410]{padding:.2rem}.trialacre .trialForm .trialTitle[data-v-fd125410]{margin:.2rem 0}.trialacre .applysuccess[data-v-fd125410]{margin:.5rem 0}.trialacre .applysuccess .applyStroreNumber[data-v-fd125410]{color:#e03030;font-size:.2rem}}",""])},362:function(e,r,t){"use strict";t.r(r);t(326),t(329);var o={data:function(){var e=this;return{identyValid:"http://47.98.115.10/Common/Valid",backStoreId:"",ruleForm2:{name:"",phone:"",pass:"",checkPass:"",verificat:""},rules2:{name:[{validator:function(e,r,t){if(!r)return t(new Error("姓名不能为空"));setTimeout(function(){r?2<r.length<18?t():t(new Error("请输入 2-18位 字母或中文")):t(new Error("请输入字母或中文"))},500)},trigger:"blur"}],phone:[{validator:function(e,r,t){if(!r)return t(new Error("手机号不能为空"));setTimeout(function(){Number.isInteger(r)?/^1[3|4|5|8|7|6|9][0-9]\d{4,8}$/.test(r)?t():t(new Error("请输入长度为11位的手机号")):t(new Error("请输入11位手机号"))},500)},trigger:"blur"}],pass:[{validator:function(r,t,o){""===t?o(new Error("请输入密码")):(""!==e.ruleForm2.checkPass&&e.$refs.ruleForm2.validateField("checkPass"),o())},trigger:"blur"}],checkPass:[{validator:function(r,t,o){""===t?o(new Error("请再次输入密码")):t!==e.ruleForm2.pass?o(new Error("两次输入密码不一致!")):o()},trigger:"blur"}],verificat:[{validator:function(e,r,t){""===r&&t(new Error("请输入验证码")),setTimeout(function(){4!==r.length?t(new Error("请输入4位验证码")):t()})},trigger:"blur"}]}}},methods:{submitForm:function(e){var r=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;console.log(r.ruleForm2),r.backStoreId="23"})},resetForm:function(e){this.$refs[e].resetFields()},navState:function(e){this.$store.commit("SET_CURNAV",e)},reloadValid:function(){var e=(new Date).getTime();this.identyValid="http://47.98.115.10/Common/Valid?".concat(e)}}},n=(t(351),t(9)),component=Object(n.a)(o,function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("section",[t("navbar"),e._v(" "),t("acre",{staticClass:"trialacre flx_column_mid_mid"},[t("el-row",[t("el-col",{staticClass:"welcomeHint",attrs:{xs:24,sm:12}},[t("p",[e._v("欢迎使用 — 登亿")])]),e._v(" "),t("el-col",{staticClass:"trialForm flx_column_mid_top",attrs:{xs:24,sm:10}},[t("div",{staticClass:"trialTitle"},[e._v(" 注册")]),e._v(" "),""===e.backStoreId?t("el-form",{ref:"ruleForm2",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm2,"status-icon":"",rules:e.rules2,"label-width":"auto"}},[t("el-form-item",{attrs:{label:"姓名",prop:"name"}},[t("el-input",{attrs:{type:"text",maxlength:10,placeholder:"请输入姓名"},model:{value:e.ruleForm2.name,callback:function(r){e.$set(e.ruleForm2,"name",r)},expression:"ruleForm2.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"手机号",prop:"phone"}},[t("el-input",{attrs:{type:"number","max-length":"11","auto-complete":"off",placeholder:"请输入手机号"},model:{value:e.ruleForm2.phone,callback:function(r){e.$set(e.ruleForm2,"phone",e._n(r))},expression:"ruleForm2.phone"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"密码",prop:"pass"}},[t("el-input",{attrs:{type:"password",maxlength:"30","auto-complete":"off",placeholder:"请输入密码"},model:{value:e.ruleForm2.pass,callback:function(r){e.$set(e.ruleForm2,"pass",r)},expression:"ruleForm2.pass"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"确认密码",prop:"checkPass"}},[t("el-input",{attrs:{type:"password",maxlength:"30","auto-complete":"off",placeholder:"请再次输入密码"},model:{value:e.ruleForm2.checkPass,callback:function(r){e.$set(e.ruleForm2,"checkPass",r)},expression:"ruleForm2.checkPass"}})],1),e._v(" "),t("el-row",[t("el-col",{attrs:{xs:14,sm:12}},[t("el-form-item",{attrs:{label:"验证码",prop:"verificat"}},[t("el-input",{staticClass:"input-with-select",attrs:{maxlength:"4","auto-complete":"off",placeholder:"请输入验证码"},model:{value:e.ruleForm2.verificat,callback:function(r){e.$set(e.ruleForm2,"verificat",r)},expression:"ruleForm2.verificat"}})],1)],1),e._v(" "),t("el-col",{staticClass:"flx_row_mid_mid",attrs:{xs:10,sm:12}},[t("img",{attrs:{src:e.identyValid,alt:"Valid"}}),e._v("    \n              "),t("span",{on:{click:e.reloadValid}},[e._v("刷新")])])],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.submitForm("ruleForm2")}}},[e._v("提交")]),e._v(" "),t("el-button",{on:{click:function(r){return e.resetForm("ruleForm2")}}},[e._v("重置")])],1)],1):e._e(),e._v(" "),""!==e.backStoreId?t("div",{staticClass:"applysuccess flx_column_mid_top"},[t("p",[e._v("恭喜您，门店编号申请成功。")]),e._v(" "),t("div",{staticClass:"applyStroreNumber"},[e._v(e._s(e.backStoreId))]),e._v(" "),t("p",[e._v("凭该门店编号。在系统上完成注册")])]):e._e(),e._v(" "),t("p",{on:{click:function(r){return e.navState("signin")}}},[e._v("\n          已有账号？\n          "),t("nuxt-link",{staticClass:"signinHint",attrs:{to:"/signin"}},[e._v(e._s(e.$t("m.home.nav.signIn")))])],1)],1)],1)],1),e._v(" "),t("footbar")],1)},[],!1,null,"fd125410",null);r.default=component.exports}}]);