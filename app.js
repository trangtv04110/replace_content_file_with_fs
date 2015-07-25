var fs = require('fs');

var data = {
	'PHP': 'http://techmaster.vn/khoa-hoc/8229/lap-trinh-phalcon-php-2',
	'Node' : 'http://techmaster.vn/khoa-hoc/25480/nodejs-truc-tuyen'
};

function replace(txt, key, value) {

	var arr = txt.split(key);

	var repeat = arr.length - 1;

	var countReplace = Math.ceil(repeat * 30 / 100);

	console.log('Key ', key, ' found ', repeat, ' replace ', countReplace);

	var arr1 = [], arr2 = [];

	for(var i = 0; i < arr.length; i++) {

		i <= countReplace ? arr1.push(arr[i]) : arr2.push(arr[i]);

	}

	return arr1.join('<a href="' + value + '">' + key + '</a>') + key + arr2.join(key);

}

fs.readFile('demo.html', {encoding : 'utf8'}, function (err,result) {

	if(err) {

		return console.log(err);

	}

	result = replace(result, 'PHP', data.PHP);
	result = replace(result, 'Node', data.Node);

	//console.log(result);

	fs.writeFile('demo2.html', result, function(err) {

		err ? console.log(err) : console.log('Done: write file to demo2.html');

	});

})