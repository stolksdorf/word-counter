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
				<div className='left'>
					<h3>About</h3>
					<p>
						This page built to be used with <a href='https://itch.io/jam/micro-rpg-jam'>Micro-RPG Jam</a>,  <a href='https://200wordrpg.github.io/'>200 Word RPG Challenge</a>, and other things like that.
					</p>
					<p>
						<a target='_blank' href='https://github.com/stolksdorf/word-counter' className='repo'>
							<i className='fab fa-github' />
							&nbsp; Issue, bug, suggestion, wanna see the code? Click here to check out the repo.
						</a>
					</p>
					<p>
						made with <i className='fa fa-heart' />.
					</p>
				</div>

				<div className='right'>
					<h3>Features</h3>
					<ul>
						<li>Simple and clean</li>
						<li>Smart word counting</li>
						<li>Tables and ASCII Art are not counted</li>
						<li>Tab icon and title updates automatically</li>
						<li>Autosaves content to your browser</li>
					</ul>
				</div>

			</div>
		</footer>;
	}
});

module.exports = Footer;