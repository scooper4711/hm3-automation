var fs = require('fs');
const manifest = JSON.parse(fs.readFileSync('module.json', 'utf8'));
const releaseVersion = process.argv[2].split('/').slice(-1)[0]; 
manifest.version = releaseVersion+"-beta";
manifest.manifest = "https://github.com/scooper4711/hm3-automation/releases/download/beta/module.json"
manifest.download = "https://github.com/scooper4711/hm3-automation/releases/download/beta/module.zip"
fs.writeFileSync('module.json', JSON.stringify(manifest, null, 2)); // pretty print JSON back to module.json
console.log("beta");
