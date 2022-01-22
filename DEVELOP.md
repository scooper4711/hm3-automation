# Overview
This workflow leverages [gitflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow).
If you follow the gitflow process, then it will create release zip files automatically for you.

# Working on a Feature
You want to start working on an issue and test in your local instance.
````
git flow feature start <name>
git flow feature publish (optional)
git flow feature finish <name> 
````
This will merge into develop branch. Publish those changes with:
```
git push
```

# Publish a Beta Release
You are preparing to release and want beta testers. 
```
git flow release start <version>
```
update module.json to have the new version number. Do not do the ```-beta``` 
suffix, the release process will take care of that for you.
```
git add module.json
git commit -m 'Prepare for release <version>'
git flow release publish
```
This will create a beta release that testers can install.

Note that you can only have one active beta release at a time.

# release the version
All Beta testers have signed off and you want to release the software.
````
git flow  release finish <version>
git push --all 
git push --tags
````
This will update the ```latest``` tag and ```Latest``` release as well as
tagging your release with the version number.