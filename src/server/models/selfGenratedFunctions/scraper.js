const fs =require('fs')
const cheerio = require('cheerio')



const getSoura = (souraName , cb)=>{
  const ayaObj = {}
  const versies = []
  const filesPath = __dirname+'/htmlPages/Quran'
  const files = fs.readdirSync(filesPath).filter(file => file.split('.')[1] === 'html')


fs.readFile(filesPath+'/'+souraName ,'utf-8', (err , htmlText)=>{
  const $ = cheerio.load(htmlText)
  $('.div-aya').map((i ,aya) => {
    versies.push({
      id : i ,
      versesNumber : i+1 ,
      souraName,
      contnent : $(aya).find('.p-aya > span').text(),
      tafsier : {
        ibnkther: $(aya).find(' .tafsier-ibnkther .tfs').text(),
        qortoby: $(aya).find(' .tafsier-qortoby .tfs').text(),
        saadi: $(aya).find('.tafsier-saadi .tfs').text(),
      }
    })
  })
  cb(null ,  versies)
})



}

const transfare = (cb)=>{
  const filesPath = __dirname+'/htmlPages/Quran'
  const files = fs.readdirSync(filesPath).filter(file => file.split('.')[1] === 'html')

  const prettyJson = jsonText => JSON.stringify(jsonText , null ,2)
  const filename = 'Ad-Duhaa.html'
  const took = Date.now()
  files.map(filename => {
    const custamizedName= __dirname+'/json/'+filename.split('.')[0]+'.json'
    console.log(custamizedName);
    getSoura(filename , (err ,res)=>{
      fs.writeFileSync(custamizedName, prettyJson() ,'utf-8')
    })
  })
}
module.exports = {
  transfare,
  getSoura
}

/*

versies.push({
  contnent : $(aya).find('.p-aya span').text(),
  tafsier : {
    ibnkther: $(aya).find('.dropdown .const .tafsier-ibnkther .tfs').text(),
    qortoby: $(aya).find('.dropdown .const .tafsier-qortoby .tfs').text(),
    saadi: $(aya).find('.dropdown .const .tafsier-saadi .tfs').text(),
  }
})

*/
