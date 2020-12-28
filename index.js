#!/usr/bin/env node

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
const fs = require('fs')
const path = require('path')

if (!argv.file || !argv.file.length) {
    return console.log(`Usage: puppeteer-cli --file=./myfile.js`)
}

if (!fs.existsSync(argv.file)) {
    return console.log(`${argv.file} was not found`)
}

const fileAbs = path.resolve(argv.file)
// process.chdir('/tmp');
process.chdir(path.dirname(__filename))
console.log(__dirname)
// console.log(argv.file, path.resolve(argv.file))
require(fileAbs)