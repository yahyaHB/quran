const fs =require('fs')
const { getSoura } = require('./scraper')
const filesPath = __dirname+'/../htmlPages/Quran'
const files = fs.readdirSync(filesPath).filter(file => file.split('.')[1] === 'html')
const prettyJson = jsonText => JSON.stringify(jsonText , null ,2)


const writeJsonfiles = (index) =>{
  const souraName = files[index]
  getSoura(souraName , (err , souraJson)=>{
    if(err) throw new Error(err.message)
    const custamizedName= __dirname+'/json/'+souraName.split('.')[0]+'.json'

    fs.writeFile(custamizedName, prettyJson(souraJson) ,'utf-8' ,(err)=>{
      if(err) throw new Error(err.message)

      console.log(index+'-Writing soura ',souraName);
      if(files.length -1 === index)
        console.log('------------Done Writing------------');
      else
        writeJsonfiles(++index)


    })

  })
}

// Run with npm to start transfaring
// writeJsonfiles(0)
module.exports = {
  writeJsonfiles
}
