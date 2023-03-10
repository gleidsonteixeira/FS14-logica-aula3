let dia = document.getElementById("dia");

for(let i = 1;i <= 31;i++){
    dia.innerHTML += "<option>"+i+"</option>";
}

let mes = document.getElementById("mes");
let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

for(let i = 0;i < meses.length;i++){
    mes.innerHTML += "<option>"+meses[i]+"</option>";
}

let ano = document.getElementById("ano");

for(let i = 2023;i > 1950;i--){
    ano.innerHTML += "<option>"+i+"</option>";
}
