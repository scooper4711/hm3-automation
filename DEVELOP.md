# Overview
This workflow leverages [gitflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow).
If you follow the gitflow process, then it will create release zip files automatically for you.
This is based on the excellent work done by [janssen-io](https://github.com/janssen-io/foundry-github-workflow)

You can create beta test versions which can be installed via a manifest download.
Beta test versions can be updated as often as needed and your beta testers will
be able to update their versions.

Version releases will reference the tagged artifacts, allowing users to downgrade
their installs if needed.

# Initial Setup
To install:
```
brew install git-flow
```
To initialize a repo:
```
git flow init
```
Make sure for the tag prefix that you type 'v' to prefix all version tags with v, e.g. v1.0.0


# Working on a Feature
You want to start working on an issue and test in your local instance.
````
git flow feature start <name>
git flow feature publish <name> (optional)
git flow feature finish <name> 
````
This will merge into develop branch. Publish those changes with:
```
git push
```

# Prepare a Release
You are preparing to release and want beta testers. 
```
git flow release start <version>
```
update module.json to have the new version number. Do not do the ```-beta``` 
suffix, the release process will take care of that for you.
```
git add module.json
git commit -m 'Prepare for release <version>'
```
## Publish a beta version prior to final release
If you want to invite others to test, then publish the release.
This will kick off the [beta release](.github/workflows/beta-release.yml) process.
It will create/update a ```beta``` tag/release and mark it as ```pre-release```
so that it doesn't interfere with the main release train for users.

Testers will have to uninstall and re-install your module using the
beta module.json.
```
git flow release publish <version>
```
Note that you can only have one active beta release at a time.

## Release the version
After all beta testers have signed off and you want to release the software.
This will prompt you for a tag commit message. This message will become
your release notes. 
The last step of pushing tags will kick off the [release process](.github/workflows/release.yml).
The manifest file will be automatically update version numbers and URLs in the
artifacts. Note that the manifest artifact will be different from what is committed.
````
git flow  release finish <version>
git push --all 
git push --tags
````
This will update the ```latest``` tag and ```Latest``` release as well as
tagging your release with the version number.

Beta testers will be able to update to the latest release, as long as you
don't start a new beta test before they update.

