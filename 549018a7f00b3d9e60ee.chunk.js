(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{154:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=f(n(152)),i=f(n(56)),a=f(n(59)),o=f(n(9)),u=f(n(4)),s=f(n(6)),r=f(n(5)),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(1));function f(e){return e&&e.__esModule?e:{default:e}}var d=function e(){(0,r.default)(this,e),this.visible=!1},p=function(e){function t(){(0,r.default)(this,t);var e=(0,u.default)(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments));return e.state=new d,e.showModal=function(){e.setState({visible:!0})},e.handleOk=function(t){e.setState({visible:!1})},e.handleCancel=function(t){e.setState({visible:!1})},e}return(0,s.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return c.createElement("div",{ref:"123"},c.createElement(i.default,{onClick:this.props.ApplicationAction.testAsync},"ttttest ",this.props.ApplicationStore.testValue),c.createElement(i.default,{type:"primary",onClick:this.showModal},"Open"),c.createElement(l.default,{title:"Basic Modal",visible:this.state.visible,onOk:this.handleOk,onCancel:this.handleCancel},c.createElement("p",null,"Some contents..."),c.createElement("p",null,"Some contents..."),c.createElement("p",null,"Some contents...")))}}]),t}(c.PureComponent);t.default=p,p.defaultProps=new function e(){(0,r.default)(this,e)}}}]);