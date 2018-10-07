const React       = require('react');
const createClass = require('create-react-class');

const {Title, Favicon} = require('vitreum/headtags');
const favicon = require('./favicon-sort-alpha-asc.ico');

const DynamicFavicon = createClass({
	displayName : 'DynamicFavicon',
	getDefaultProps(){
		return {
			wordCount : 0
		}
	},
	componentDidMount(){
		this.canvas = document.createElement('canvas');
		this.ctx = this.canvas.getContext('2d');
		this.canvas.height = this.canvas.width = 16;
	},
	getDataUrl(){
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.ctx.font = '15px bold "monospace"';
		this.ctx.fillStyle = '#000';
		this.ctx.fillText(this.props.wordCount, 0, 12);
		return this.canvas.toDataURL('image/png');
	},
	render(){
		if(!this.canvas) return <Favicon href={favicon} />;
		return <Favicon href={this.getDataUrl()} />;
	}
});

module.exports = DynamicFavicon;