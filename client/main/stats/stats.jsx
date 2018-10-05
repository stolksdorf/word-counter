require('./stats.less');
const React       = require('react');
const createClass = require('create-react-class');
const cx          = require('classnames');

const DynamicFavicon = require('./dynamicFavicon.jsx');

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
		const count = wordCount(this.props.text);
		return <div className='Stats'>
			<DynamicFavicon wordCount={count} />
			<div className='wordCount'>{count}</div>
		</div>;
	}
});

module.exports = Stats;