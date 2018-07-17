


exports.ayahsPerSura = (surahName) => new Promise((resolve ,reject)=>{
  try{
    const surah = require(`../models/json/${surahName}`)
    resolve({surahName  , totalAyat: surah.length })
  }catch(e){
    reject(e)
  }
})
