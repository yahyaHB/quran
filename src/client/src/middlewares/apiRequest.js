export  default ({ url , method = 'get' , payload = {} }) => new Promise((resolve , reject)=>{
    const RequestOptions = method.toLowerCase === 'post' && {
      method ,
      credentials: "same-origin",
      mode: "cors",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body : JSON.stringify(payload),
    }


       fetch(url , RequestOptions )
        .then( res => res.json())
        .then(response =>resolve(response))
        .catch(err => reject(err))
})
