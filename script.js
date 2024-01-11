

function generateNumber() {

    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)
    let p = document.querySelector("p")

    if(min > max) {

        p.innerHTML = "Falha, tente novamente"
        
    }
     else {

        const result = Math.floor(Math.random() * (max - min + 1)) + min;

        p.innerHTML = result
     }   
}