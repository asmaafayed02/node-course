const chalk = require('chalk');
require('chalk');
console.log(chalk.green.bgBlue.bold('Success!'))

const Notes =require('./notes.js')
// const load = getNote()
// console.log(load)
//var fs = require('fs');
// //fs.writeFileSync('notes.txt', 'this file created by node js with asmaa')
// fs.appendFileSync('notes.txt',' my name is asmaa and iam 22')
const yargs = require('yargs');
const { demandOption } = require('yargs');
yargs.command({
    command: 'list',
    describe: 'adding alist',
    builder: {
        title:{
            describe: 'list title',
            demandOption : true,
            type: 'string'
        },
        body:{
            describe : 'list content',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
        Notes.addNotes(argv.title, argv.body)
        
    }
})
yargs.command({
    command : 'read',
    describe : 'read the content',
    builder: {
        title:{
            describe: 'read title',
            demandOption: true,
            type : 'string'
        }
    },
    handler(argv){
        Notes.readNotes(argv.title)
        
    }
})
yargs.command({
    command : 'remove',
    describe : 'remove item',
    builder : {
        title:{
            describe : 'our title',
            demandOption : 'true',
            type : 'string'
        }
    },
    handler(argv){
        Notes.removeNotes(argv.title)
    }
})
yargs.parse()