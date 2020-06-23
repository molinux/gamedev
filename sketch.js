let imagemCenario;
let imagemPersonagem;
let cenario;
let somDoJogo;
let personagem;

function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
}

function setup() {
  // createCanvas(400, 400);
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
  personagem = new Personagem(imagemPersonagem);
  frameRate(40);
  // somDoJogo.play();
  // somDoJogo.loop();
}

function draw() {
  // circle(mouseX, mouseY, 200);
  // background(220);
  // background(255,250,255);
  // background(imagemCenario, -50, 0, width, height);
  cenario.exibe();
  cenario.move();
  personagem.exibe()
  
}

