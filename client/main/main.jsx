require('../basestyle');
require('./main.less');
const React       = require('react');
const createClass = require('create-react-class');
const cx          = require('classnames');

const DefaultText = require('./default.text.js');

const {Title} = require('vitreum/headtags');

const Stats = require('./stats/stats.jsx');
const Footer = require('./footer/footer.jsx');
const Text = require('./text/text.jsx');


const TEXT_KEY = 'word-counter-text';
const TITLE_KEY = 'word-counter-title';


const Main = createClass({
	displayName : 'Main',
	getInitialState(){
		return {
			title : 'Your next mirco-rpg',
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
		return <div className='Main'>
			<Title>word.counter</Title>
			<Stats text={this.state.text} />

			<div className='container'>
				<Stats text={this.state.text} />
				<input
					className='title'
					type='text'
					value={this.state.title}
					onChange={this.updateTitle}
					placeholder='title' />
				<Text value={this.state.text} onChange={this.updateText} />
			</div>

			<Footer />
		</div>;
	}
});

module.exports = Main;