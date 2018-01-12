const fs = require('fs');
const spawn = require('child_process').spawn;
const path = require('path')

/*
process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});
*/

const theFile = process.argv[2];
const triggerTime = process.argv[3];
const theBatFile = process.argv[4];



if(theFile && triggerTime)
{
	const stats = fs.statSync(theFile);
	//var mtime = new Date(util.inspect(stats.mtime));
	const deltaTime = Date.now() - stats.mtime.getTime(); 
	
	if(deltaTime >= triggerTime && theBatFile)
	{
		switch(path.extname(theBatFile))
		{
			case ".bat":
			runBatFile(theBatFile);
			break;
			
			case ".js":
			runNodeFile(theBatFile);
			break;
		}
	}
}
else
{
	const helpText = `
Compare  last modified time of the File and exec script file if given Timestamp exceed
	node watcher.js [File] [Timestamp (ms)] [Batch/JS script file]
	`;
	console.log(helpText);
}

function runChildProcess(theFile, isBatch)
{
	const bat = isBatch ? spawn('cmd.exe', ['/c', theFile]) : spawn('node.exe', [theFile]);
	
	// Handle normal output
	bat.stdout.on('data', (data) => {
		// As said before, convert the Uint8Array to a readable string.
		var str = String.fromCharCode.apply(null, data);
		console.info(str);
	});

	// Handle error output
	bat.stderr.on('data', (data) => {
		// As said before, convert the Uint8Array to a readable string.
		var str = String.fromCharCode.apply(null, data);
		console.error(str);
	});	
}

function runBatFile(batFile){
	runChildProcess(batFile, true)
}

function runNodeFile(jsFile){
	runChildProcess(jsFile, false);
}