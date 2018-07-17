const fs =require('fs')
const cheerio = require('cheerio')


const getPlainTextOfHtml = (htmltext , cb) => {
  const verses = []
  const $ = cheerio.load(htmltext)
   $('.div-aya')
  .map((i ,aya) => {

    verses.push({
      contnent : $(aya).find('.p-aya > span').text(),
      tafsier : {
        ibnkther: $(aya).find(' .tafsier-ibnkther .tfs').text(),
        qortoby: $(aya).find(' .tafsier-qortoby .tfs').text(),
        saadi: $(aya).find('.tafsier-saadi .tfs').text(),
      }
    })
    if($('.div-aya').length === i)
    cb(verses)
  })
}


const getSouraText = (suraName , cb) => {
  fs.readFile(__dirname+'/htmlPages/Quran/'+suraName , 'utf-8' , (err , htmlText)=>{
    if(err) return cb(err)
    getPlainTextOfHtml(htmlText , (content)=>{

    const sura = {
      souraName: 'file' ,
      content  ,
      ayatLength : 'verses.length'
    }
    cb(undefined , sura)
  })
  })
}


module.exports=(cb)=>{
//   const souar = {}
//
//   const filesPath = __dirname+'/htmlPages/Quran/';
// fs.readdir(filesPath , (err , files)=>{
//   var SouraNames = files
//   .filter(file => file.split('.')[1] === 'html'|| file.split('.')[1] ===  'htm')
//   .reduce((quran , souraName)=>{
//
//
//
//
//   },[])
//
// })
getSouraText('Fatir.html' , cb)
}


/*

verses.push({
  contnent : $(aya).find('.p-aya span').text(),
  tafsier : {
    ibnkther: $(aya).find('.dropdown .const .tafsier-ibnkther .tfs').text(),
    qortoby: $(aya).find('.dropdown .const .tafsier-qortoby .tfs').text(),
    saadi: $(aya).find('.dropdown .const .tafsier-saadi .tfs').text(),
  }
})

*/
