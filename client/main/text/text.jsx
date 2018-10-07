require('./text.less');
const React       = require('react');
const createClass = require('create-react-class');
const cx          = require('classnames');

const Text = createClass({
	displayName : 'Text',
	getDefaultProps(){
		return {
			value :'',
			onChange : ()=>{}
		};
	},
	textarea : React.createRef(),
	componentDidMount(){
		this.textarea.current.focus();
	},
	update(evt){
		this.props.onChange(evt.target.value);
	},
	render(){
		return <div className='Text'>
			<textarea
				value={this.props.value}
				onChange={this.update}
				placeholder='temp placeholder'
				ref={this.textarea} />
			<div>{this.props.value + '\n'}</div>
		</div>;
	}
});

module.exports = Text;