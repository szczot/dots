(window.webpackChunk=window.webpackChunk||[]).push([[457],{94061:(e,n,t)=>{"use strict";t.r(n),t.d(n,{PremiumChangePlanPopup:()=>c});var a=t(27378),r=t(19106),o=t(1620),l=t(24606),i=t(22667),s=t(12187),p=t(1642);class c extends a.Component{constructor(){super(...arguments),this.cancel=()=>{r.J.premiumChangePlanPremiumChangePlanPopupClose(),this.props.close()},this.continue=()=>{r.J.premiumChangePlanPremiumChangePlanCTAButtonClick("g button"),this.props.continueChangePlanToAnnual(),this.props.close()}}componentDidMount(){r.J.premiumChangePlanPremiumChangePlanPopupShow()}get savePercentage(){return"MONTHLY"===this.props.changeFromPlan?"60%":"40%"}render(){return a.createElement("div",Object.assign({},(0,s.Sh)(p.premiumChangePlan,this.props.isFlipped&&p.flipped)),a.createElement("div",{className:p.close},a.createElement(o.P,{onClick:this.cancel})),a.createElement(i.K,{className:p.logoIcon}),a.createElement("div",null,a.createElement("p",{className:p.text},"Your writing looks great with Grammarly Premium! Keep up the great work!"),a.createElement(l.z,{kind:"primary",onClick:this.continue},"Switch to Annual Plan",a.createElement("span",{style:{fontWeight:"normal"}}," · Save ",this.savePercentage))))}}},1642:e=>{e.exports={premiumChangePlan:"KqB6j",showWrapper:"_3MXWI",flipped:"_3QEwt",logoIcon:"_3oHG_",text:"LGarC",close:"_1ygtX"}}}]);