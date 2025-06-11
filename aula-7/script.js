function alerta() {
  console.log("Alerta");//executa o código depois de um determinado tempo
}
setTimeout(alerta, 3000);

setTimeout(() => {
  console.log("Alerta em callback");
}, 4000);

function alerta2(){
    console.log("Alerta num intervalo de tempo") //executa o código num intervalo de tempo
}
setInterval(alerta2,5000)

setInterval(()=>{
    console.log("Alerta num intervalo de tempo dentro de callback")
},4000)

