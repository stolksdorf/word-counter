require('../basestyle');
require('./main.less');
const React       = require('react');
const createClass = require('create-react-class');
const cx          = require('classnames');

const DefaultText = require('./default.text.js');

const {Title, Favicon} = require('vitreum/headtags');
const favicon = require('./favicon-sort-alpha-asc.ico');

const Stats = require('./stats/stats.jsx');
const Footer = require('./footer/footer.jsx');
const Text = require('./text/text.jsx');



const KEY = 'word-counter';


const Main = createClass({
	displayName : 'Main',
	getInitialState(){
		return { text : DefaultText }
	},
	componentDidMount(){
		const storedText = localStorage.getItem(KEY);
		if(storedText) this.setState({text : storedText});
	},
	update(text){
		this.setState({text});
		localStorage.setItem(KEY, text);
	},
	render(){
		return <div className='Main'>
			<Title>word.counter</Title>
			<Favicon href={favicon} />
			<div className='container'>
				<Stats text={this.state.text} />
				<Text value={this.state.text} onChange={this.update} />
			</div>

			<Footer />
		</div>;
	}
});

module.exports = Main;