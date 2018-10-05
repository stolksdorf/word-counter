require('./footer.less');
const React       = require('react');
const createClass = require('create-react-class');
const cx          = require('classnames');


const Footer = createClass({
	displayName : 'Footer',
	getDefaultProps(){
		return {
		};
	},
	render(){
		return <footer>
			Footer Component Ready.
		</footer>;
	}
});

module.exports = Footer;