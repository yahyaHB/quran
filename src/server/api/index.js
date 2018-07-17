const fs =require('fs')
const {getSoura, transfare} = require('../models/selfGenratedFunctions/scraper')
const {writeJsonfiles} = require('../models/selfGenratedFunctions/transferer')
const router = require('express').Router()
const modlesPath = __dirname+'/../models/json/'
const {ayahsPerSura} = require('./ayahs')
const { PageDetails } = require('./pages')


router.get('/' ,(req,res,next)=>{
  res.json({
    status : true ,
    message : 'here is your refreance for El Quran AL Kareem',
    usages : 'use the refrances in this api to fetch your verses for each soura by it\'s name\nExample : /api/soura/Ad-Duhaa will return soura Al Duhaa content',
    refrances : require('../models/selfGenratedFunctions/sourahList.json'),
    took : Date.now() - req.now,
    test:'sdfsdf'
  })

})

router.get('/fixed', (req ,res, next)=>{

  res.json({
    status : true ,
    message : 'here is your refreance for El Quran AL Kareem',
    usages : 'use the refrances in this api to fetch your verses for each soura by it\'s name\nExample : /api/soura/Ad-Duhaa will return soura Al Duhaa content',
    refrances : fs.readdirSync(modlesPath).map(file => file.split('.')[0]),
    took : Date.now() - req.now
  })

})

router.get('/soura/:souraName' ,(req ,res ,next)=>{
  const filePath = modlesPath+req.params.souraName+".json";
  fs.access(filePath ,fs.constants.R_OK, (err)=>{
    if(err) return res.json({ status :false , msg : 'Check soura Name'})

    const soura = require(filePath)
    res.json({status :true , soura , took : Date.now() - req.now})
  })
})


router.get('/ayaPerSurah/:surahName' , (req ,res ,next)=>{
  ayahsPerSura(req.params.surahName)
    .then(data=>{
      console.log(data);
      res.json({data})
    })
    .catch(data=>{
      console.log(data);
      res.json({data})
    })
})

router.get('/page/:page' , (req ,res ,next)=>{
  try{
    res.json({status : true ,page : require(`../models/json/pages/${req.params.page||2}`)})
  }catch(err){
    res.json({status : false , errorMessage : err.message})
  }

})
module.exports = router
