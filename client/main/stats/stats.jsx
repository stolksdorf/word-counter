require('./stats.less');
const React       = require('react');
const createClass = require('create-react-class');
const cx          = require('classnames');

const wordCountRegex = new RegExp(`[0-9]+[0-9,\.]*|[&0-9a-zA-Z\xC0-\xFF]+[-']?[0-9a-zA-Z\xC0-\xFF]*`, 'g');
const wordCount = (text)=>(text.match(wordCountRegex) || []).length;



const Stats = createClass({
	displayName : 'Stats',
	getDefaultProps(){
		return {
			text : ''
		};
	},
	render(){
		return <div className='Stats'>

			<div className='wordCount'>{wordCount(this.props.text)}</div>

		</div>;
	}
});

module.exports = Stats;