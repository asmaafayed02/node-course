console.log('notes.js')
const chalk = require('chalk');
const fs = require('fs')
const getNotes = ()=> 'notes is ....';

const addNotes = function (title, body){
    const notes = loadNotes()
    const dataFilter = notes.filter((note)=> note.title === title)
    debugger
    if(dataFilter.length === 0){
        notes.push({
            title: title,
            body : body
        })
        saveNotes(notes)
        console.log('data added')
       
    }else{
        console.log('no data added')
    }
   
}
const readNotes = (title)=>{
    const notes = loadNotes();
    const note = notes.find((note)=> note.title === title)
    if(note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }else{
        console.log(chalk.red.inverse('not matches'))
    }

}
const removeNotes = (title) =>{
    const notes = loadNotes()
    const dataFilter = notes.filter((note)=>note.title !== title)
    if(dataFilter.length < notes.length){
        saveNotes(dataFilter)
        console.log(chalk.green.bold('note found'))
    }else{
         console.log(chalk.blue.bold('note not found'))
    }
    
}
const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJson)
}
const loadNotes = ()=>{
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    }catch(e){
        return[]
    }
}
module.exports = {
    getNotes : getNotes,
    addNotes : addNotes,
    readNotes : readNotes,
    removeNotes : removeNotes
}