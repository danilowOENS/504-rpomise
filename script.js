let diaSemana = "sextou";

let batatinhaFritaDoMc = (resolve, reject) =>{
    if(diaSemana == "sextou"){
        resolve("Acerto mizeravi");
        }

    else{
        reject("errrouu");
    }
}

let promessa = new Promise(batatinhaFritaDoMc);

promessa
 .then(console.log)
 .catch(console.error)