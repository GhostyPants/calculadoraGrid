btnUno.click( (e) => {
    resultado[0].innerHTML += e.target.value;
    console.log(resultado[0]);
})
btnDos.click( (e) => {
    resultado[0].innerHTML += e.target.value;
})
btnTres.click( (e) => {
    resultado[0].innerHTML += e.target.value;
})
btnCuatro.click( (e) => {
    resultado[0].innerHTML += e.target.value;
})
btnCinco.click( (e) => {
    resultado[0].innerHTML += e.target.value;
})
btnSeis.click( (e) => {
    resultado[0].innerHTML += e.target.value;
})
btnSiete.click( (e) => {
    resultado[0].innerHTML += e.target.value;
})
btnOcho.click( (e) => {
    resultado[0].innerHTML += e.target.value;
})
btnNueve.click( (e) => {
    resultado[0].innerHTML += e.target.value;
})
btnCero.click( (e) => {
    resultado[0].innerHTML += e.target.value;
})
btnSuma.click( (e) => {
    resultado[0].innerHTML += e.target.value;
})
btnResta.click( (e) => {
    resultado[0].innerHTML += e.target.value;
})
btnMult.click( (e) => {
    resultado[0].innerHTML += e.target.value;
})
btnDiv.click( (e) => {
    resultado[0].innerHTML += e.target.value;
})
btnBorrar.click( (e) => {
    resultado[0].innerHTML = e.target.value;
})
btnPunto.click( (e) => {
    resultado[0].innerHTML += e.target.value;
})
btnIgual.click( () => {

    const pasados = $('#resultadosPasados');
    let d = new Date();
    
    if (resultado[0].innerText == '') {
        resultado[0].innerText = 0;
    } else {
        try {
            resultado[0].innerText = eval(resultado[0].innerText);
        } catch (e) {
            let resultado = $('#resultadoContainer');
            resultado.addClass('error');
            setTimeout(() => {
                resultado.removeClass('error');
              }, 600);
        }
    }

    if(pasados[0].innerHTML == false){
        pasados[0].innerHTML = '<h1>Hola</h1>';
    }else {
        console.log(pasados)
        pasados[0].innerHTML += '<h1>Hola</h1>';
    }
});

//Borra un elemento del resultado
$("#btnNum").click(() => {
    let cambioRes = resultado[0].innerText;
    cambioRes = cambioRes.split("");
    cambioRes.pop();
    cambioRes = cambioRes.join("")
    resultado[0].innerText = cambioRes
    console.log(cambioRes);
});