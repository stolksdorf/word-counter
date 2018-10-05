(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.main = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"dup":1}],3:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"dup":1}],4:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"dup":1}],5:[function(require,module,exports){
require('./index.less');
},{"./index.less":6}],6:[function(require,module,exports){
require('C:\\Dropbox\\root\\Programming\\Javascript\\word-counter\\client\\basestyle\\reset.less');
require('C:\\Dropbox\\root\\Programming\\Javascript\\word-counter\\client\\basestyle\\variables.less');
require('C:\\Dropbox\\root\\Programming\\Javascript\\word-counter\\client\\basestyle\\colors.less');
require('C:\\Dropbox\\root\\Programming\\Javascript\\word-counter\\client\\basestyle\\animations.less');
require('C:\\Dropbox\\root\\Programming\\Javascript\\word-counter\\client\\basestyle\\typography.less');
require('C:\\Dropbox\\root\\Programming\\Javascript\\word-counter\\client\\basestyle\\elements.less');
require('C:\\Dropbox\\root\\Programming\\Javascript\\word-counter\\client\\basestyle\\transitions.less');
require('C:\\Dropbox\\root\\Programming\\Javascript\\word-counter\\client\\basestyle\\fa.less');
},{"C:\\Dropbox\\root\\Programming\\Javascript\\word-counter\\client\\basestyle\\animations.less":1,"C:\\Dropbox\\root\\Programming\\Javascript\\word-counter\\client\\basestyle\\colors.less":2,"C:\\Dropbox\\root\\Programming\\Javascript\\word-counter\\client\\basestyle\\elements.less":3,"C:\\Dropbox\\root\\Programming\\Javascript\\word-counter\\client\\basestyle\\fa.less":4,"C:\\Dropbox\\root\\Programming\\Javascript\\word-counter\\client\\basestyle\\reset.less":7,"C:\\Dropbox\\root\\Programming\\Javascript\\word-counter\\client\\basestyle\\transitions.less":8,"C:\\Dropbox\\root\\Programming\\Javascript\\word-counter\\client\\basestyle\\typography.less":9,"C:\\Dropbox\\root\\Programming\\Javascript\\word-counter\\client\\basestyle\\variables.less":10}],7:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"dup":1}],8:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"dup":1}],9:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"dup":1}],10:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"dup":1}],11:[function(require,module,exports){
module.exports = `this is the default text`;
},{}],12:[function(require,module,exports){
module.exports='/assets/main/favicon-sort-alpha-asc.ico';
},{}],13:[function(require,module,exports){
require('./footer.less');

const React = require('react');

const createClass = require('create-react-class');

const cx = require('classnames');

const Footer = createClass({
  displayName: 'Footer',

  getDefaultProps() {
    return {};
  },

  render() {
    return React.createElement("footer", null, React.createElement("div", {
      className: "bg"
    }), React.createElement("div", {
      className: "container"
    }, React.createElement("a", {
      href: "https://github.com/stolksdorf/word-counter"
    }, React.createElement("i", {
      className: "fab fa-github"
    }))));
  }

});
module.exports = Footer;
},{"./footer.less":14,"classnames":undefined,"create-react-class":undefined,"react":undefined}],14:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"dup":1}],"C:\\Dropbox\\root\\Programming\\Javascript\\word-counter\\client\\main\\main.jsx":[function(require,module,exports){
require('../basestyle');

require('./main.less');

const React = require('react');

const createClass = require('create-react-class');

const cx = require('classnames');

const DefaultText = require('./default.text.js');

const {
  Title,
  Favicon
} = require('vitreum/headtags');

const favicon = require('./favicon-sort-alpha-asc.ico');

const Stats = require('./stats/stats.jsx');

const Footer = require('./footer/footer.jsx');

const Text = require('./text/text.jsx');

const KEY = 'word-counter';
const Main = createClass({
  displayName: 'Main',

  getInitialState() {
    return {
      text: DefaultText
    };
  },

  componentDidMount() {
    const storedText = localStorage.getItem(KEY);
    if (storedText) this.setState({
      text: storedText
    });
  },

  update(text) {
    this.setState({
      text
    });
    localStorage.setItem(KEY, text);
  },

  render() {
    return React.createElement("div", {
      className: "Main"
    }, React.createElement(Title, null, "word.counter"), React.createElement(Favicon, {
      href: favicon
    }), React.createElement("div", {
      className: "container"
    }, React.createElement(Stats, {
      text: this.state.text
    }), React.createElement(Text, {
      value: this.state.text,
      onChange: this.update
    })), React.createElement(Footer, null));
  }

});
module.exports = Main;
},{"../basestyle":5,"./default.text.js":11,"./favicon-sort-alpha-asc.ico":12,"./footer/footer.jsx":13,"./main.less":15,"./stats/stats.jsx":16,"./text/text.jsx":18,"classnames":undefined,"create-react-class":undefined,"react":undefined,"vitreum/headtags":undefined}],15:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"dup":1}],16:[function(require,module,exports){
require('./stats.less');

const React = require('react');

const createClass = require('create-react-class');

const cx = require('classnames');

const wordCountRegex = new RegExp(`[0-9]+[0-9,\.]*|[&0-9a-zA-Z\xC0-\xFF]+[-']?[0-9a-zA-Z\xC0-\xFF]*`, 'g');

const wordCount = text => (text.match(wordCountRegex) || []).length;

const Stats = createClass({
  displayName: 'Stats',

  getDefaultProps() {
    return {
      text: ''
    };
  },

  render() {
    return React.createElement("div", {
      className: "Stats"
    }, React.createElement("div", {
      className: "wordCount"
    }, wordCount(this.props.text)));
  }

});
module.exports = Stats;
},{"./stats.less":17,"classnames":undefined,"create-react-class":undefined,"react":undefined}],17:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"dup":1}],18:[function(require,module,exports){
require('./text.less');

const React = require('react');

const createClass = require('create-react-class');

const cx = require('classnames');

const Text = createClass({
  displayName: 'Text',

  getDefaultProps() {
    return {
      value: '',
      onChange: () => {}
    };
  },

  update(evt) {
    this.props.onChange(evt.target.value);
  },

  render() {
    return React.createElement("div", {
      className: "Text"
    }, React.createElement("textarea", {
      value: this.props.value,
      onChange: this.update,
      placeholder: "temp placeholder",
      ref: this.textarea
    }), React.createElement("div", null, this.props.value + '\n'));
  }

});
module.exports = Text;
},{"./text.less":19,"classnames":undefined,"create-react-class":undefined,"react":undefined}],19:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"dup":1}]},{},[])("C:\\Dropbox\\root\\Programming\\Javascript\\word-counter\\client\\main\\main.jsx")
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjbGllbnQvYmFzZXN0eWxlL2FuaW1hdGlvbnMubGVzcyIsImNsaWVudC9iYXNlc3R5bGUvaW5kZXguanMiLCJjbGllbnQvYmFzZXN0eWxlL2luZGV4Lmxlc3MiLCJjbGllbnQvbWFpbi9kZWZhdWx0LnRleHQuanMiLCJjbGllbnQvbWFpbi9mYXZpY29uLXNvcnQtYWxwaGEtYXNjLmljbyIsImNsaWVudC9tYWluL2Zvb3Rlci9mb290ZXIuanN4IiwiY2xpZW50L21haW4vbWFpbi5qc3giLCJjbGllbnQvbWFpbi9zdGF0cy9zdGF0cy5qc3giLCJjbGllbnQvbWFpbi90ZXh0L3RleHQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7Ozs7Ozs7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1BBOztBQ0FBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDakVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIiLCJyZXF1aXJlKCcuL2luZGV4Lmxlc3MnKTsiLCJyZXF1aXJlKCdDOlxcXFxEcm9wYm94XFxcXHJvb3RcXFxcUHJvZ3JhbW1pbmdcXFxcSmF2YXNjcmlwdFxcXFx3b3JkLWNvdW50ZXJcXFxcY2xpZW50XFxcXGJhc2VzdHlsZVxcXFxyZXNldC5sZXNzJyk7XG5yZXF1aXJlKCdDOlxcXFxEcm9wYm94XFxcXHJvb3RcXFxcUHJvZ3JhbW1pbmdcXFxcSmF2YXNjcmlwdFxcXFx3b3JkLWNvdW50ZXJcXFxcY2xpZW50XFxcXGJhc2VzdHlsZVxcXFx2YXJpYWJsZXMubGVzcycpO1xucmVxdWlyZSgnQzpcXFxcRHJvcGJveFxcXFxyb290XFxcXFByb2dyYW1taW5nXFxcXEphdmFzY3JpcHRcXFxcd29yZC1jb3VudGVyXFxcXGNsaWVudFxcXFxiYXNlc3R5bGVcXFxcY29sb3JzLmxlc3MnKTtcbnJlcXVpcmUoJ0M6XFxcXERyb3Bib3hcXFxccm9vdFxcXFxQcm9ncmFtbWluZ1xcXFxKYXZhc2NyaXB0XFxcXHdvcmQtY291bnRlclxcXFxjbGllbnRcXFxcYmFzZXN0eWxlXFxcXGFuaW1hdGlvbnMubGVzcycpO1xucmVxdWlyZSgnQzpcXFxcRHJvcGJveFxcXFxyb290XFxcXFByb2dyYW1taW5nXFxcXEphdmFzY3JpcHRcXFxcd29yZC1jb3VudGVyXFxcXGNsaWVudFxcXFxiYXNlc3R5bGVcXFxcdHlwb2dyYXBoeS5sZXNzJyk7XG5yZXF1aXJlKCdDOlxcXFxEcm9wYm94XFxcXHJvb3RcXFxcUHJvZ3JhbW1pbmdcXFxcSmF2YXNjcmlwdFxcXFx3b3JkLWNvdW50ZXJcXFxcY2xpZW50XFxcXGJhc2VzdHlsZVxcXFxlbGVtZW50cy5sZXNzJyk7XG5yZXF1aXJlKCdDOlxcXFxEcm9wYm94XFxcXHJvb3RcXFxcUHJvZ3JhbW1pbmdcXFxcSmF2YXNjcmlwdFxcXFx3b3JkLWNvdW50ZXJcXFxcY2xpZW50XFxcXGJhc2VzdHlsZVxcXFx0cmFuc2l0aW9ucy5sZXNzJyk7XG5yZXF1aXJlKCdDOlxcXFxEcm9wYm94XFxcXHJvb3RcXFxcUHJvZ3JhbW1pbmdcXFxcSmF2YXNjcmlwdFxcXFx3b3JkLWNvdW50ZXJcXFxcY2xpZW50XFxcXGJhc2VzdHlsZVxcXFxmYS5sZXNzJyk7IiwibW9kdWxlLmV4cG9ydHMgPSBgdGhpcyBpcyB0aGUgZGVmYXVsdCB0ZXh0YDsiLCJtb2R1bGUuZXhwb3J0cz0nL2Fzc2V0cy9tYWluL2Zhdmljb24tc29ydC1hbHBoYS1hc2MuaWNvJzsiLCJyZXF1aXJlKCcuL2Zvb3Rlci5sZXNzJyk7XG5cbmNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuY29uc3QgY3JlYXRlQ2xhc3MgPSByZXF1aXJlKCdjcmVhdGUtcmVhY3QtY2xhc3MnKTtcblxuY29uc3QgY3ggPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbmNvbnN0IEZvb3RlciA9IGNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdGb290ZXInLFxuXG4gIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge307XG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcImJnXCJcbiAgICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiY29udGFpbmVyXCJcbiAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7XG4gICAgICBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9zdG9sa3Nkb3JmL3dvcmQtY291bnRlclwiXG4gICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImlcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcImZhYiBmYS1naXRodWJcIlxuICAgIH0pKSkpO1xuICB9XG5cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBGb290ZXI7IiwicmVxdWlyZSgnLi4vYmFzZXN0eWxlJyk7XG5cbnJlcXVpcmUoJy4vbWFpbi5sZXNzJyk7XG5cbmNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuY29uc3QgY3JlYXRlQ2xhc3MgPSByZXF1aXJlKCdjcmVhdGUtcmVhY3QtY2xhc3MnKTtcblxuY29uc3QgY3ggPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbmNvbnN0IERlZmF1bHRUZXh0ID0gcmVxdWlyZSgnLi9kZWZhdWx0LnRleHQuanMnKTtcblxuY29uc3Qge1xuICBUaXRsZSxcbiAgRmF2aWNvblxufSA9IHJlcXVpcmUoJ3ZpdHJldW0vaGVhZHRhZ3MnKTtcblxuY29uc3QgZmF2aWNvbiA9IHJlcXVpcmUoJy4vZmF2aWNvbi1zb3J0LWFscGhhLWFzYy5pY28nKTtcblxuY29uc3QgU3RhdHMgPSByZXF1aXJlKCcuL3N0YXRzL3N0YXRzLmpzeCcpO1xuXG5jb25zdCBGb290ZXIgPSByZXF1aXJlKCcuL2Zvb3Rlci9mb290ZXIuanN4Jyk7XG5cbmNvbnN0IFRleHQgPSByZXF1aXJlKCcuL3RleHQvdGV4dC5qc3gnKTtcblxuY29uc3QgS0VZID0gJ3dvcmQtY291bnRlcic7XG5jb25zdCBNYWluID0gY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ01haW4nLFxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGV4dDogRGVmYXVsdFRleHRcbiAgICB9O1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHN0b3JlZFRleHQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShLRVkpO1xuICAgIGlmIChzdG9yZWRUZXh0KSB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRleHQ6IHN0b3JlZFRleHRcbiAgICB9KTtcbiAgfSxcblxuICB1cGRhdGUodGV4dCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdGV4dFxuICAgIH0pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKEtFWSwgdGV4dCk7XG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJNYWluXCJcbiAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFRpdGxlLCBudWxsLCBcIndvcmQuY291bnRlclwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChGYXZpY29uLCB7XG4gICAgICBocmVmOiBmYXZpY29uXG4gICAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcImNvbnRhaW5lclwiXG4gICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChTdGF0cywge1xuICAgICAgdGV4dDogdGhpcy5zdGF0ZS50ZXh0XG4gICAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dCwge1xuICAgICAgdmFsdWU6IHRoaXMuc3RhdGUudGV4dCxcbiAgICAgIG9uQ2hhbmdlOiB0aGlzLnVwZGF0ZVxuICAgIH0pKSwgUmVhY3QuY3JlYXRlRWxlbWVudChGb290ZXIsIG51bGwpKTtcbiAgfVxuXG59KTtcbm1vZHVsZS5leHBvcnRzID0gTWFpbjsiLCJyZXF1aXJlKCcuL3N0YXRzLmxlc3MnKTtcblxuY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5jb25zdCBjcmVhdGVDbGFzcyA9IHJlcXVpcmUoJ2NyZWF0ZS1yZWFjdC1jbGFzcycpO1xuXG5jb25zdCBjeCA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxuY29uc3Qgd29yZENvdW50UmVnZXggPSBuZXcgUmVnRXhwKGBbMC05XStbMC05LFxcLl0qfFsmMC05YS16QS1aXFx4QzAtXFx4RkZdK1stJ10/WzAtOWEtekEtWlxceEMwLVxceEZGXSpgLCAnZycpO1xuXG5jb25zdCB3b3JkQ291bnQgPSB0ZXh0ID0+ICh0ZXh0Lm1hdGNoKHdvcmRDb3VudFJlZ2V4KSB8fCBbXSkubGVuZ3RoO1xuXG5jb25zdCBTdGF0cyA9IGNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdTdGF0cycsXG5cbiAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0OiAnJ1xuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJTdGF0c1wiXG4gICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwid29yZENvdW50XCJcbiAgICB9LCB3b3JkQ291bnQodGhpcy5wcm9wcy50ZXh0KSkpO1xuICB9XG5cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBTdGF0czsiLCJyZXF1aXJlKCcuL3RleHQubGVzcycpO1xuXG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbmNvbnN0IGNyZWF0ZUNsYXNzID0gcmVxdWlyZSgnY3JlYXRlLXJlYWN0LWNsYXNzJyk7XG5cbmNvbnN0IGN4ID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG5jb25zdCBUZXh0ID0gY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1RleHQnLFxuXG4gIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6ICcnLFxuICAgICAgb25DaGFuZ2U6ICgpID0+IHt9XG4gICAgfTtcbiAgfSxcblxuICB1cGRhdGUoZXZ0KSB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShldnQudGFyZ2V0LnZhbHVlKTtcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcIlRleHRcIlxuICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICB2YWx1ZTogdGhpcy5wcm9wcy52YWx1ZSxcbiAgICAgIG9uQ2hhbmdlOiB0aGlzLnVwZGF0ZSxcbiAgICAgIHBsYWNlaG9sZGVyOiBcInRlbXAgcGxhY2Vob2xkZXJcIixcbiAgICAgIHJlZjogdGhpcy50ZXh0YXJlYVxuICAgIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIHRoaXMucHJvcHMudmFsdWUgKyAnXFxuJykpO1xuICB9XG5cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBUZXh0OyJdfQ==
