let cuentas = [
    {nombre:"Mali", saldo: 200},
    {nombre:"Gera", saldo: 290},
    {nombre:"Maui", saldo: 67}
];

let saldo1 = cuentas[0].saldo
let saldo2 = cuentas[1].saldo
let saldo3 = cuentas[2].saldo

function menuMali(){
    location.href ='mali index.html' 
}
function menuGera(){
    location.href ='gera index.html'
}
function menuMaui(){
    location.href ='maui index.html'
}


function login(){
    let pass = parseInt(prompt('Ingresar Contraseña'))
    if (pass === 369){
        menuMali()
    } else if(pass === 135){
        menuGera()
    } else if (pass === 690){
        menuMaui()
    } else{
        alert("El usuario o contraseña ingresados son incorrectos")
    }
}

function consultarMali(){
    alert(`Saldo actual ${saldo1}`)
}
function consultarGera(){
    alert(`Saldo actual ${saldo2}`)
}
function consultarMaui(){
    alert(`Saldo actual ${saldo3}`)
}

function ingresarMali(){
    let a = parseInt(prompt('ingresar valor'))
    let total1 = saldo1 + a
    alert(`Valor ingresado ${a}
Nuevo saldo ${total1}`)
    
    if(total1 < 990){
        console.log('La cuenta cumple con la regla establecida')
    } else if(total1 >=991){
        console.log('La cuenta no cumple con la regla establecida')
    }
}

function retirarMali(){
    let b = parseInt(prompt('ingresar valor'))
    let total2 = saldo1 - b
    alert(`Valor ingresado ${b}
Nuevo saldo ${total2}`)
    if(total2 > 10){
        console.log('La cuenta cumple con la regla establecida')
    } else if(total2 <= 10){
        console.log('La cuenta no cumple con la regla establecida')
    }
}

function ingresarGera(){
    let a = parseInt(prompt('ingresar valor'))
    let total1 = saldo2 + a
    alert(`Valor ingresado ${a}
Nuevo saldo ${total1}`)
    if(total1 < 990){
        console.log('La cuenta cumple con la regla establecida')
    } else if(total1 >=991){
        console.log('La cuenta no cumple con la regla establecida')
    }
}

function retirarGera(){
    let b = parseInt(prompt('ingresar valor'))
    let total2 = saldo2 - b
    alert(`Valor ingresado ${b}
    Nuevo saldo ${total2}`)
    if(total2 > 10){
        console.log('La cuenta cumple con la regla establecida')
    } else if(total2 <= 10){
        console.log('La cuenta no cumple con la regla establecida')
    }
}

function ingresarMaiu(){
    let a = parseInt(prompt('ingresar valor'))
    let total1 = saldo3 + a
    alert(`Valor ingresado ${a}
Nuevo saldo ${total1}`)
    if(total1 < 990){
        console.log('La cuenta cumple con la regla establecida')
    } else if(total1 >=991){
        console.log('La cuenta no cumple con la regla establecida')
    }
}

function retirarMaiu(){
    let b = parseInt(prompt('ingresar valor'))
    let total2 = saldo3 - b
    alert(`Valor ingresado ${b}
Nuevo saldo ${total2}`)
    if(total2 > 10){
        console.log('La cuenta cumple con la regla establecida')
    } else if(total2 <= 10){
        console.log('La cuenta no cumple con la regla establecida')
    }
}