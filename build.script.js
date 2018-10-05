const build = require('vitreum/build');
const fs = require('fs');

String.prototype.replaceAll = function (find, replace) {
	const str = this;
	return str.replace(new RegExp(find, 'g'), replace);
};

build().then(()=>{
//build(null, {prod : true}).then(()=>{
	const render = require('./docs/main/render.js');

	fs.writeFileSync('./docs/index.html', render()
		.replace('/libs.js', 'libs.js')
		.replace('.hydrate(', '.render(')
		.replaceAll('/main/bundle', 'main/bundle')
		.replaceAll('/assets', 'assets')
	);
	fs.writeFileSync('./docs/main/bundle.css', fs.readFileSync('./docs/main/bundle.css', 'utf8')
		.replaceAll('/assets', '../assets')
	);
	console.log('Built index.html');
});