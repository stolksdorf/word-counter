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
			<div className='bg' />
			<div className='container'>


				<a href='https://github.com/stolksdorf/word-counter'>
					<i className='fab fa-github' />
				</a>
			</div>
		</footer>;
	}
});

module.exports = Footer;