function entrada() {
    const a = parseInt(document.querySelector('#A').value);
    const b = parseInt(document.querySelector('#B').value);
    const c = parseInt(document.querySelector('#C').value);
    const d = parseInt(document.querySelector('#D').value);

    const num = [a,b,c,d];

    const numC = Object.values(num)
    numC.sort((a,b) => a - b)
    auxC = numC[0]-1;

    for (i in numC){
        if (auxC === numC[i]){
            return alert(`El número ${auxC} se encuentra repetido. Por favor cambielo.`);
        } else {
            auxC = numC[i];
        }
    }
    bigAndMin(numC)

}


function bigAndMin(numC) {
    bigN = numC[numC.length-1];
    minN = numC[0];

    document.querySelector('#total').style.display="block";
    document.querySelector('#num').innerHTML = `Los números ingresados son: ${numC}`
    document.querySelector('#bigN').innerHTML = `El número ${bigN} es el mayor.`
    document.querySelector('#minN').innerHTML = `El número ${minN} es el menor.`

}
