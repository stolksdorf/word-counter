require('../basestyle');
require('./main.less');
const React       = require('react');
const createClass = require('create-react-class');
const cx          = require('classnames');

const DefaultText = require('./default.text.js');

const {Title} = require('vitreum/headtags');

const Footer = require('./footer/footer.jsx');
const Text = require('./text/text.jsx');
const DynamicFavicon = require('./dynamicFavicon.jsx');


const wordCountRegex = new RegExp(`[0-9]+[0-9,\.]*|[&0-9a-zA-Z\xC0-\xFF]+[-']?[0-9a-zA-Z\xC0-\xFF]*`, 'g');
const wordCount = (text)=>(text.match(wordCountRegex) || []).length;


const TEXT_KEY = 'word-counter-text';
const TITLE_KEY = 'word-counter-title';


const Main = createClass({
	displayName : 'Main',
	getInitialState(){
		return {
			title : 'Your next micro-rpg',
			text : DefaultText
		}
	},
	componentDidMount(){
		this.setState({
			text  : localStorage.getItem(TEXT_KEY) || this.state.text,
			title : localStorage.getItem(TITLE_KEY) || this.state.title,
		});
	},
	updateTitle(evt){
		this.setState({title : evt.target.value});
		localStorage.setItem(TITLE_KEY, evt.target.value);
	},
	updateText(text){
		this.setState({text});
		localStorage.setItem(TEXT_KEY, text);
	},
	render(){
		const count = wordCount(this.state.text);

		return <div className='Main'>
			<Title>{this.state.title || 'word.counter'}</Title>
			<DynamicFavicon wordCount={count} />

			<div className='container'>
				<input
					className='title'
					type='text'
					value={this.state.title}
					onChange={this.updateTitle}
					placeholder='title' />
				<div className='wordCount'>{count}</div>
				<Text value={this.state.text} onChange={this.updateText} />
			</div>

			<Footer />
		</div>;
	}
});

module.exports = Main;