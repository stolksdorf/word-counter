(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.main = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){

},{}],3:[function(require,module,exports){

},{}],4:[function(require,module,exports){

},{}],5:[function(require,module,exports){
require("./index.less");

},{"./index.less":6}],6:[function(require,module,exports){
require("C:\\Dropbox\\root\\Programming\\Javascript\\word-counter\\client\\basestyle\\reset.less"),require("C:\\Dropbox\\root\\Programming\\Javascript\\word-counter\\client\\basestyle\\variables.less"),require("C:\\Dropbox\\root\\Programming\\Javascript\\word-counter\\client\\basestyle\\colors.less"),require("C:\\Dropbox\\root\\Programming\\Javascript\\word-counter\\client\\basestyle\\animations.less"),require("C:\\Dropbox\\root\\Programming\\Javascript\\word-counter\\client\\basestyle\\typography.less"),require("C:\\Dropbox\\root\\Programming\\Javascript\\word-counter\\client\\basestyle\\elements.less"),require("C:\\Dropbox\\root\\Programming\\Javascript\\word-counter\\client\\basestyle\\transitions.less"),require("C:\\Dropbox\\root\\Programming\\Javascript\\word-counter\\client\\basestyle\\fa.less");

},{"C:\\Dropbox\\root\\Programming\\Javascript\\word-counter\\client\\basestyle\\animations.less":1,"C:\\Dropbox\\root\\Programming\\Javascript\\word-counter\\client\\basestyle\\colors.less":2,"C:\\Dropbox\\root\\Programming\\Javascript\\word-counter\\client\\basestyle\\elements.less":3,"C:\\Dropbox\\root\\Programming\\Javascript\\word-counter\\client\\basestyle\\fa.less":4,"C:\\Dropbox\\root\\Programming\\Javascript\\word-counter\\client\\basestyle\\reset.less":7,"C:\\Dropbox\\root\\Programming\\Javascript\\word-counter\\client\\basestyle\\transitions.less":8,"C:\\Dropbox\\root\\Programming\\Javascript\\word-counter\\client\\basestyle\\typography.less":9,"C:\\Dropbox\\root\\Programming\\Javascript\\word-counter\\client\\basestyle\\variables.less":10}],7:[function(require,module,exports){

},{}],8:[function(require,module,exports){

},{}],9:[function(require,module,exports){

},{}],10:[function(require,module,exports){

},{}],11:[function(require,module,exports){
module.exports="this is the default text";

},{}],12:[function(require,module,exports){
module.exports="/assets/main/favicon-sort-alpha-asc.ico";

},{}],13:[function(require,module,exports){
require("./footer.less");const React=require("react"),createClass=require("create-react-class"),cx=require("classnames"),Footer=createClass({displayName:"Footer",getDefaultProps:()=>({}),render:()=>React.createElement("footer",null,"Footer Component Ready.")});module.exports=Footer;

},{"./footer.less":14,"classnames":undefined,"create-react-class":undefined,"react":undefined}],14:[function(require,module,exports){

},{}],"C:\\Dropbox\\root\\Programming\\Javascript\\word-counter\\client\\main\\main.jsx":[function(require,module,exports){
require("../basestyle"),require("./main.less");const React=require("react"),createClass=require("create-react-class"),cx=require("classnames"),DefaultText=require("./default.text.js"),{Title:Title,Favicon:Favicon}=require("vitreum/headtags"),favicon=require("./favicon-sort-alpha-asc.ico"),Stats=require("./stats/stats.jsx"),Footer=require("./footer/footer.jsx"),Text=require("./text/text.jsx"),KEY="word-counter",Main=createClass({displayName:"Main",getInitialState:()=>({text:DefaultText}),componentDidMount(){const e=localStorage.getItem(KEY);e&&this.setState({text:e})},update(e){this.setState({text:e}),localStorage.setItem(KEY,e)},render(){return React.createElement("div",{className:"Main"},React.createElement(Title,null,"Word Counter"),React.createElement(Favicon,{href:favicon}),React.createElement(Stats,{text:this.state.text}),React.createElement(Text,{value:this.state.text,onChange:this.update}),React.createElement(Footer,null))}});module.exports=Main;

},{"../basestyle":5,"./default.text.js":11,"./favicon-sort-alpha-asc.ico":12,"./footer/footer.jsx":13,"./main.less":15,"./stats/stats.jsx":16,"./text/text.jsx":18,"classnames":undefined,"create-react-class":undefined,"react":undefined,"vitreum/headtags":undefined}],15:[function(require,module,exports){

},{}],16:[function(require,module,exports){
require("./stats.less");const React=require("react"),createClass=require("create-react-class"),cx=require("classnames"),wordCountRegex=new RegExp("[0-9]+[0-9,.]*|[&0-9a-zA-ZÀ-ÿ]+[-']?[0-9a-zA-ZÀ-ÿ]*","g"),wordCount=e=>(e.match(wordCountRegex)||[]).length,Stats=createClass({displayName:"Stats",getDefaultProps:()=>({text:""}),render(){return React.createElement("div",{className:"Stats"},React.createElement("div",{className:"wordCount"},wordCount(this.props.text)))}});module.exports=Stats;

},{"./stats.less":17,"classnames":undefined,"create-react-class":undefined,"react":undefined}],17:[function(require,module,exports){

},{}],18:[function(require,module,exports){
require("./text.less");const React=require("react"),createClass=require("create-react-class"),cx=require("classnames"),Text=createClass({displayName:"Text",getDefaultProps:()=>({value:"",onChange:()=>{}}),update(e){this.props.onChange(e.target.value)},render(){return React.createElement("div",{className:"Text"},React.createElement("textarea",{value:this.props.value,onChange:this.update,ref:this.textarea}),React.createElement("div",null,this.props.value+"\n"))}});module.exports=Text;

},{"./text.less":19,"classnames":undefined,"create-react-class":undefined,"react":undefined}],19:[function(require,module,exports){

},{}]},{},[])("C:\\Dropbox\\root\\Programming\\Javascript\\word-counter\\client\\main\\main.jsx")
});
