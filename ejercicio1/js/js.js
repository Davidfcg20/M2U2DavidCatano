function entrada() {
    const nameE = document.querySelector('#nameE').value;
    const quantity = document.querySelector('#quantity').value;
    const courseV = document.querySelector('#courseV').value;
    const documentE = document.querySelector('#documentE').checked;
    const card = document.querySelector('#card').checked;
    let documentEV= 0, cardV= 0;

    documentEV = documentE ? documentEV=20000 : documentEV=0; 
    cardV = card ? cardV=8000 : cardV=0; 
    
    procedurespepe(nameE, quantity, courseV, documentEV, cardV)

}

function procedurespepe(NE, Q, CV, DE, C) {
    const courseVT = (Q*CV);
    const deduction = (courseVT*0.2)
    const add = (DE+C)
    const totalP = (deduction + add)
    total(NE, courseVT, deduction, add, totalP);

}

function total(NE, CVT, D, A, T){
    document.querySelector('#total').style.display="block";
    document.querySelector('#nameET').innerHTML = `Bienvenido ${NE} el total a pagar es:`
    document.querySelector('#courseVT').innerHTML = `Asignaturas matriculdas: $${CVT}`
    document.querySelector('#deduction').innerHTML = `Descuento aplicado del 20%: $${D}`
    document.querySelector('#add').innerHTML = `Costos fijos: $${A}`
    document.querySelector('#totalP').innerHTML = `TOTAL A PAGAR: $${T}`


}