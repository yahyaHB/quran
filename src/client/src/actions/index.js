export const apiRequest = ({url , page}) => new Promise( (resolve , reject)=>{

       fetch(`https://qurn.herokuapp.com/api/page/${page || 2 }` )
        .then( res => res.json())
        .then(({page}) =>resolve(page))
        .catch(err => reject(err.message))
})
