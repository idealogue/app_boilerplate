# Shiny Ditto

#### Like [Ditto](https://github.com/measured/ditto), but rarer. A single page app boilerplate running on Node.js.
> Ditto (Japanese: メタモン *Metamon*) is a Normal-type Pokémon that uses the move `Transform` to copy the opponent's moves, types, form, and non-HP stats.

![](http://cl.ly/image/2e1f2H0Q130G/shiny_ditto.gif)

## Features

- Gulp.js
  * gulp-sass (.scss)
  * Auto-prefixer
  * Express server with LiveReload
- Browserify module management

## Getting started
- Make sure you have gulp installed: `npm install -g gulp`
- After cloning the repository, `cd` into the folder and grab the node dependencies: `npm install`
- Do an initial build, watch for file changes and spin up a local server: `npm run dev`
- Ready to deploy? Build the project: `npm run build`

## Deployment

For rapid deployment, Ditto uses Amazon Web Services (AWS)
- Create an s3 bucket on your AWS account
- Create a `aws.json` file in the root folder
- Put the relevant details (name, keys, region etc.)
- `grunt s3` to deploy

**note:** The `aws.json` file is ignored by git so that you don't accidently publish your private aws keys to a public repo. That means if you're sharing a project you'll need to get each person to setup an `aws.json` file on their local machine.

Example `aws.json` file:

```json
{
  "accessKeyId": "short string of numbers and letters",
  "secretAccessKey": "long string of numbers and letters",
  "bucketName": "my.bucket.com",
  "bucketRegion": "ap-southeast-2"
}
```

## To do

Make some projects using this to figure out what should go in the boilerplate eg:
- basic routing
- responsive methods
- event guidelines
- etc...

## Authors
**David Hauser**
- [GitHub](http://github.com/haustraliaer)

**Ben Jennings**
- [GitHub](http://github.com/jenbennings)
