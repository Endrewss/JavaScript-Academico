var agora = new Date()
var hora = agora.getHours()
console.log(`agora são extamente ${hora} horas.`)
if (hora <= 6) {
    console.log("Boa Madrugada!")
} else if (hora < 12) {
    console.log("Bom Dia!")
 }else if (hora <= 18) {
    console.log("Boa Tarde!")
} else if (hora > 18){
    console.log("Boa Noite!")
} 