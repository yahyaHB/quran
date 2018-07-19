const request = require('request');
const fs = require('fs');
const OurFahras = require('./sourahList.json')

const took = Date.now()
const PageDetails = (currentProcessedPage = 0,accumulator )=>{
  const quranApiPath = `http://api.alquran.cloud/page/${currentProcessedPage}`,
        startPage = 2,
        endPage =604;
  let pageDetails={};

  request(quranApiPath, (err , res, body)=>{
    body = JSON.parse(body)
    // console.log(`${currentProcessedPage} - Error:\t${err}\tcode:\t${body.code}`);
    if(currentProcessedPage > endPage){
      // console.log('========',JSON.stringify(accumulator , null ,2));
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
      console.log('spended time :',Date.now() - took , 'ms');

       process.exit(0)
    }

    if(err || body.code !== 200)
      return PageDetails(currentProcessedPage ,accumulator)

      body.data.ayahs = body.data.ayahs.map(ayah => {
        ayah.tafsier = getAyahTafsir(ayah.numberInSurah , ayah.surah.number).tafsier
        ayah.originalText = getAyahTafsir(ayah.numberInSurah , ayah.surah.number).contnent
        return ayah
      })

      pageDetails = {
        number:body.data.number,
        ayahsNumber :body.data.ayahs.length,
        // surahsNumber:body.data.surahs,
        ayahs :  body.data.ayahs
      }

    savePageToFile(pageDetails , (err , doneMessage)=>{
      if(err) return PageDetails(currentProcessedPage , accumulator)
      console.log(doneMessage);
      return PageDetails(++currentProcessedPage , accumulator )
    })
    // accumulator.push(pageDetails)
    // if(currentProcessedPage !== endPage)
    //   return PageDetails(++currentProcessedPage , accumulator )

  })
}


function getAyahTafsir (ayahNumber , surahNumber){
  const suraOriginalName = OurFahras.filter(surah => +(surah.number) === surahNumber)[0].surahNameEn
  const {tafsier ,contnent }= require('../json/'+suraOriginalName+'.json').filter(ayah => ayah.versesNumber === ayahNumber )[0]

  return {tafsier ,contnent }
}

function savePageToFile(pageContent , done){
  const filePath = `${__dirname}/../json/pages/${pageContent.number}.json`
  fs.writeFile(filePath,JSON.stringify(pageContent,null,2),'utf-8', (err , isWriten)=>{
    if(err) return done(err)
    done(null , `Page ${pageContent.number} have been justified & writen to a file successfully`)
  })
}
PageDetails(2 , [])
