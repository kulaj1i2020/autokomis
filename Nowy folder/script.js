marka=document.querySelector("#marka");
model=document.querySelector("#model");
rok=document.querySelector("#rok");
kolor=document.querySelector("#kolor");
przebieg=document.querySelector("#przebieg");

display1=document.querySelector(".display1");


btn1=document.querySelector("#btn1");
btn2=document.querySelector("#btn2");
btn3=document.querySelector("#btn3");

let samochodyArr=[];
btn1.addEventListener("click", function(evt){
    evt.preventDefault();

const samochod=
{
s_klucz:self.crypto.randomUUID(),
s_marka:marka.value,
s_model:model.value,
s_rok:rok.value,
s_kolor:kolor.value,
s_przebieg:przebieg.value
}

console.log(samochod);

samochodyArr.push(samochod);

const elem=document.createElement("fieldset")
elem.innerHTML= `<b> ${samochod.s_marka}</b><br> model: ${samochod.s_model}, kolor: ${samochod.s_kolor}, rok produkcji: ${samochod.s_rok}, przebieg: ${samochod.s_przebieg} <button>Usuń</button>`
display1.appendChild(elem);
})