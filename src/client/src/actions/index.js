export const apiRequest = ({url , page}) => new Promise( (resolve , reject)=>{

       fetch(`/api/page/${page || 7 }` )
        .then( res => res.json())
        .then(({page}) =>resolve(page))
        .catch(err => reject(err.message))
})
