class Inimigo extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade, delay) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)

    // this.velocidade = 8;
    this.velocidade = velocidade;
    this.delay = delay;
    this.x = width + this.delay;
  }

  move() {
    this.x = this.x - this.velocidade;

    // if (this.x < -this.largura - this.delay) {
    if (this.x < -this.largura) {
      this.x = width;
    }
  }
}