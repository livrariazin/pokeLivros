var total = 0;
var clicar = 1;
var precoUpgrade1 = 30;
var precoUpgrade2 = 300;

function aumentar() {
  total += clicar;
  document.getElementById("riqueza").innerHTML = total;
  updAumentarPS();
}

function updAumentarPS() {
  PerSecond = total;
  document.getElementById("riqueza").innerHTML = total;
  document.title = total + " - pokeclick";
}

//

let flag = 1;

window.setInterval(function () {
  if (total >= 1000 && flag === 1) {
    flag = 0;
    document.querySelector("#conquistaTESTE").style.visibility = "visible";
  }
}, 1000);

// seletor de pokebolas

function pokebola() {
  document.querySelector("#pokeball").src = "img/pokebolas/pokeball.webp";
  document.querySelector("#container-pokeball").style.background =
    "rgba(214, 9, 9, 0.3)";
  clicar = 1;
}

function great() {
  document.querySelector("#pokeball").src = "img/pokebolas/greatball.png";
  document.querySelector("#container-pokeball").style.background =
    "rgba(17, 118, 222, 0.3)";
  clicar = 10;
}

function ultra() {
  document.querySelector("#pokeball").src = "img/pokebolas/ultraball.webp";
  document.querySelector("#container-pokeball").style.background =
    "rgba(250, 250, 14, 0.3)";
  clicar = 50;
}

function monster() {
  document.querySelector("#pokeball").src = "img/pokebolas/beastball.png";
  document.querySelector("#container-pokeball").style.background =
    "rgba(54, 5, 92, 0.3)";
  clicar = 250;
}

function master() {
  document.querySelector("#pokeball").src = "img/pokebolas/masterball.webp";
  document.querySelector("#container-pokeball").style.background =
    "rgba(54, 45, 92, 0.3)";
  clicar = 1000;
}

function balloff() {
  if (document.querySelector("#galeria-pokeballs").style.display != "none") {
    document.querySelector("#galeria-pokeballs").style.display = "none";
  } else {
    document.querySelector("#galeria-pokeballs").style.display = "flex";
  }
}

function pokeoff() {
  if (document.querySelector("#fullPokeGame").style.display != "none") {
    document.querySelector("#fullPokeGame").style.display = "none";
  } else {
    document.querySelector("#fullPokeGame").style.display = "flex";
    document.querySelector("#fullPokeGame").style.flexDirection = "column";
  }
}

function menuBall() {
  if (document.querySelector("#menuPokeballs").style.display != "none") {
    document.querySelector("#menuPokeballs").style.display = "none";
  } else {
    document.querySelector("#menuPokeballs").style.display = "block";
  }
}

// salvar

function save() {
  var gameSave = {
    total: total,
  };
  localStorage.setItem("gameSave", JSON.stringify(gameSave));
}

document.addEventListener(
  "keydown",
  function (event) {
    if (event.ctrlKey && event.which == 83) {
      event.preventDefault();
      save();
    }
  },
  false
);

// carregar

function load() {
  var savedGame = JSON.parse(localStorage.getItem("gameSave"));
  if (typeof savedGame.total !== "undefined") total = savedGame.total;
}

//resetar

function reset() {
  if (confirm("quer mesmo resetar?")) {
    var gameSave = {};
    localStorage.setItem("gameSave", JSON.stringify(gameSave));
    location.reload();
  }
}

//atualizar coisas importantes onload

window.onload = function () {
  load();
  updAumentarPS();
};

//bolsa abrindo

function bolsa() {
  if (document.querySelector("#containerBolsa").style.display != "none") {
    document.querySelector("#containerBolsa").style.display = "none";
  } else {
    document.querySelector("#containerBolsa").style.display = "block";
  }
}
