// function szamol() {
//     const penz = parseFloat(document.querySelector('#penz').valeue);
//     const crypto = parseFloat(document. querySelector('#crypto').value);
//     const bitcoin = 100
//     const ossz = penz * crypto
// }
function szamol() {
    const aoldal = parseFloat(document.querySelector('#aoldal').value);
    const boldal = parseFloat(document.querySelector('#boldal').value);

    const terulet = aoldal * boldal
   
    console.log("A téglalap területe: " + terulet);

    const eredmeny = document.querySelector('#eredmeny');
    eredmeny.innerHTML = "<p>Ez  " + terulet + " kriptónak felel meg.</p>";


}