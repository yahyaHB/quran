
const getPage =(page, cb)=>{
  try{
    cb(null , require(`../models/json/pages/${page||2}`))
  }catch(err){
    cb(err)
  }
}


const processPageDetails = page => {

}

const getAllPages = pagesCb => {
  const pagesFetchersFuncs = []
  for(let i=0 ; i <= 604 ; i++){
    pagesFetchersFuncs.push((i)=>{console.log(i);})
  }
  async.parallel(pagesFetchersFuncs)

}


module.exports = {
  getPage,
  processPageDetails,
  getAllPages
}
