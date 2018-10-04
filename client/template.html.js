module.exports = (head, body, tail)=>{
	return `<!-- Doctype HTML5 -->

<!DOCTYPE html>
<html lang='en'>
	<head>
		<meta charset='utf-8'>
		<meta name='viewport' content='width=device-width, initial-scale=1'>

		<link href="//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
		<link href="//fonts.googleapis.com/css?family=Lato:400,300,600,700" rel="stylesheet" type="text/css">

		${head}
	</head>
	<body>${body}</body>
	${tail}
</html>`;
};