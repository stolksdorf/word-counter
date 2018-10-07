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
module.exports = `Type in here to get a live word count.

It's smart, so symbol separated words get counted properly

people+trying*to%cheat-by|using_symbols=to*split#words is 7 words


But ASCII art or tables are fine

| d4 | Result |
---------------
| 1  | Sock   |
| 2  | Shoe   |
| 3  | Pants  |
| 4  | Hat    |

is only 10 words`;
},{}],12:[function(require,module,exports){
const React = require('react');

const createClass = require('create-react-class');

const {
  Title,
  Favicon
} = require('vitreum/headtags');

const favicon = require('./favicon-sort-alpha-asc.ico');

const DynamicFavicon = createClass({
  displayName: 'DynamicFavicon',

  getDefaultProps() {
    return {
      wordCount: 0
    };
  },

  componentDidMount() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.height = this.canvas.width = 16;
  },

  getDataUrl() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.font = '15px bold "monospace"';
    this.ctx.fillStyle = '#000';
    this.ctx.fillText(this.props.wordCount, 0, 12);
    return this.canvas.toDataURL('image/png');
  },

  render() {
    if (!this.canvas) return React.createElement(Favicon, {
      href: favicon
    });
    return React.createElement(Favicon, {
      href: this.getDataUrl()
    });
  }

});
module.exports = DynamicFavicon;
},{"./favicon-sort-alpha-asc.ico":13,"create-react-class":undefined,"react":undefined,"vitreum/headtags":undefined}],13:[function(require,module,exports){
module.exports='/assets/main/favicon-sort-alpha-asc.ico';
},{}],14:[function(require,module,exports){
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
    }, React.createElement("div", {
      className: "left"
    }, React.createElement("h3", null, "About"), React.createElement("p", null, "This page built to be used with ", React.createElement("a", {
      href: "https://itch.io/jam/micro-rpg-jam"
    }, "Micro-RPG Jam"), ",  ", React.createElement("a", {
      href: "https://200wordrpg.github.io/"
    }, "200 Word RPG Challenge"), ", and other things like that."), React.createElement("p", null, React.createElement("a", {
      target: "_blank",
      href: "https://github.com/stolksdorf/word-counter",
      className: "repo"
    }, React.createElement("i", {
      className: "fab fa-github"
    }), "\xA0 Issue, bug, suggestion, wanna see the code? Click here to check out the repo.")), React.createElement("p", null, "made with ", React.createElement("i", {
      className: "fa fa-heart"
    }), ".")), React.createElement("div", {
      className: "right"
    }, React.createElement("h3", null, "Features"), React.createElement("ul", null, React.createElement("li", null, "Simple and clean"), React.createElement("li", null, "Smart word counting"), React.createElement("li", null, "Tables and ASCII Art are not counted"), React.createElement("li", null, "Tab icon and title updates automatically"), React.createElement("li", null, "Autosaves content to your browser")))));
  }

});
module.exports = Footer;
},{"./footer.less":15,"classnames":undefined,"create-react-class":undefined,"react":undefined}],15:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"dup":1}],"C:\\Dropbox\\root\\Programming\\Javascript\\word-counter\\client\\main\\main.jsx":[function(require,module,exports){
require('../basestyle');

require('./main.less');

const React = require('react');

const createClass = require('create-react-class');

const cx = require('classnames');

const DefaultText = require('./default.text.js');

const {
  Title
} = require('vitreum/headtags');

const Footer = require('./footer/footer.jsx');

const Text = require('./text/text.jsx');

const DynamicFavicon = require('./dynamicFavicon.jsx');

const wordCountRegex = new RegExp(`[0-9]+[0-9,\.]*|[&0-9a-zA-Z\xC0-\xFF]+[-']?[0-9a-zA-Z\xC0-\xFF]*`, 'g');

const wordCount = text => (text.match(wordCountRegex) || []).length;

const TEXT_KEY = 'word-counter-text';
const TITLE_KEY = 'word-counter-title';
const Main = createClass({
  displayName: 'Main',

  getInitialState() {
    return {
      title: 'Your next micro-rpg',
      text: DefaultText
    };
  },

  componentDidMount() {
    this.setState({
      text: localStorage.getItem(TEXT_KEY) || this.state.text,
      title: localStorage.getItem(TITLE_KEY) || this.state.title
    });
  },

  updateTitle(evt) {
    this.setState({
      title: evt.target.value
    });
    localStorage.setItem(TITLE_KEY, evt.target.value);
  },

  updateText(text) {
    this.setState({
      text
    });
    localStorage.setItem(TEXT_KEY, text);
  },

  render() {
    const count = wordCount(this.state.text);
    return React.createElement("div", {
      className: "Main"
    }, React.createElement(Title, null, this.state.title || 'word.counter'), React.createElement(DynamicFavicon, {
      wordCount: count
    }), React.createElement("div", {
      className: "container"
    }, React.createElement("input", {
      className: "title",
      type: "text",
      value: this.state.title,
      onChange: this.updateTitle,
      placeholder: "title"
    }), React.createElement("div", {
      className: "wordCount"
    }, count), React.createElement(Text, {
      value: this.state.text,
      onChange: this.updateText
    })), React.createElement(Footer, null));
  }

});
module.exports = Main;
},{"../basestyle":5,"./default.text.js":11,"./dynamicFavicon.jsx":12,"./footer/footer.jsx":14,"./main.less":16,"./text/text.jsx":17,"classnames":undefined,"create-react-class":undefined,"react":undefined,"vitreum/headtags":undefined}],16:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"dup":1}],17:[function(require,module,exports){
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

  textarea: React.createRef(),

  componentDidMount() {
    this.textarea.current.focus();
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
},{"./text.less":18,"classnames":undefined,"create-react-class":undefined,"react":undefined}],18:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"dup":1}]},{},[])("C:\\Dropbox\\root\\Programming\\Javascript\\word-counter\\client\\main\\main.jsx")
});
