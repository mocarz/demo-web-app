// 'use strict'

// var express = require('../../');

// var app = module.exports = express()

// app.get('/', function (req, res) {
//     res.send('Hello World');
// });

// /* istanbul ignore next */
// if (!module.parent) {
//     app.listen(3000);
//     console.log('Express started on port 3000');
// }

const express = require('express')
const app = express()
const port = 3000

const util = require('util');
const exec = util.promisify(require('child_process').exec);

// async function ls() {
//     const { stdout, stderr } = await exec('ls');
//     console.log('stdout:', stdout);
//     console.log('stderr:', stderr);
// }

app.get('/', async (req, res) => {
    // ls();
    const { stdout, stderr } = await exec('ec2-metadata --public-ipv4');
    const str = `stdout: ${stdout}<br>stderr: ${stderr}`
    res.send(str)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})