const miPromise = async (): Promise<string> => {
    return await new Promise((res, _rej) => {
        setTimeout(() =>{
            res('Hola desde la Promesa')
        },2000)
    })    
}

miPromise().then((r)=> console.log(r))