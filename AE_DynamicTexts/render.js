//Windows: \Program Files\Adobe\Adobe After Effects CC\Support Files
//Mac OS: /Applications/Adobe After Effects CC

var spawn = require('child_process').spawn;

const { execSync } = require('child_process');

/*
var ae = spawn('C:/Program Files/Adobe/Adobe After Effects CC 2018/Support Files/aerender.exe',[
'-project', 'C:/workspace/AE_DynamicTexts/test.aep',
'-comp', 'text_comp',
'-output', 'C:/workspace/AE_DynamicTexts/out.png',
'-OMtemplate', 'h264'
]);

ae.stderr.on('data', function (data) {
// Error occured
console.log('stderr: ' + data);
});

ae.on('close', function (code) {
// Video has rendered
});
*/

try
{
	const cmd = `"C:/Program Files/Adobe/Adobe After Effects CC 2018/Support Files/aerender.exe" -project "C:/workspace/AE_DynamicTexts/test.aep" -comp text_comp -s 0 -e 0 -OMtemplate "png" -output "C:/workspace/AE_DynamicTexts/frames[####].png"`
	console.log(
		execSync(cmd).toString(),
		
	)
}
catch(e)
{
	console.log(e)
}