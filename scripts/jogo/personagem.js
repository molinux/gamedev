class Personagem extends Animacao {
  constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite) {
    super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite)

    this.yInicial = height - this.altura;
    this.y = this.yInicial;

    this.velocidadeDoPulo = 0;
    this.gravidade = 3;
  }

  pula() {
    console.log('Jump around !')
    this.velocidadeDoPulo = - 30;
  }

  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

    if (this.y > this.yInicial) {
      this.y = this.yInicial;
    }
  }

  estaColidindo() {
    // noFill()
    // rect(this.x, this.y, this.altura, this.largura);
    // rect(inimigo.x, inimigo.y, inimigo.largura, inimigo.altura);
    const precisao = .7;
    const colisao = collideRectRect(
      this.x, 
      this.y, 
      this.largura * precisao, 
      this.altura * precisao, 
      inimigo.x, 
      inimigo.y, 
      inimigo.largura, 
      inimigo.altura
    )

    return colisao;
    // return false;
  }
}