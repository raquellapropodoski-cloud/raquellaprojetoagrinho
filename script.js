let pontos = 0;

const bons = ["🌱","💧","🌿","🌾"];
const ruins = ["🔥","☠️","🛢️"];

function criarItem(){

  const item = document.createElement("div");
  item.classList.add("item");

  const bom = Math.random() > 0.4;

  item.innerHTML = bom
  ? bons[Math.floor(Math.random()*bons.length)]
  : ruins[Math.floor(Math.random()*ruins.length)];

  item.style.left =
  Math.random()*260 + "px";

  item.style.top =
  Math.random()*260 + "px";

  item.onclick = function(){

    if(bom){
      pontos += 10;
    }else{
      pontos -= 10;
    }

    document.getElementById("pontos").innerText = pontos;

    item.remove();
  }

  document
  .getElementById("areaJogo")
  .appendChild(item);

  setTimeout(()=>{
    item.remove();
  },2500);
}

function iniciarJogo(){

  pontos = 0;

  document.getElementById("pontos").innerText = pontos;

  document.getElementById("areaJogo").innerHTML = "";

  clearInterval(window.jogo);

  window.jogo = setInterval(criarItem,800);

  setTimeout(()=>{
    clearInterval(window.jogo);

    alert(
      "Fim de jogo! Sua pontuação foi: "
      + pontos
    );
  },30000);
}
iniciarJogo();
