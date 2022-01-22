var fs = require('fs');
const manifest = JSON.parse(fs.readFileSync('module.json', 'utf8'));
// first argument is node, second is the filename of the script, third is the version we pass in our workflow.
// expected tag format is 'refs/release/{major}.{minor}.{patch}"
const releaseVersion = process.argv[2].split('/').slice(-1)[0]; 
manifest.version = releaseVersion;
manifest.download = "https://github.com/scooper4711/hm3-automation/releases/download/"+releaseVersion+"/module.zip"
fs.writeFileSync('module.json', JSON.stringify(manifest, null, 2)); // pretty print JSON back to module.json
console.log(tagVersion);
