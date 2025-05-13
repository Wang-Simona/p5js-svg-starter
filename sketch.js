const testo = "HAPPY";
const fontSize = 120;
const parti = 40;
const sfasamento = 4;

/** @type {Font} */
let font_ACTIONIS;

function preload() {
  font_ACTIONIS = loadFont("./fonts/ACTIONIS.TTF");
}

function setup() {
  createCanvas(400, 400, "svg");
  addDownloadButton();

  rectMode(CENTER);
  angleMode(DEGREES);

  frameRate(30); // 控制动画速度
}

function draw() {
  background(255); // 白色背景

  textFont(font_ACTIONIS);
  textLeading(fontSize);
  textSize(fontSize);

  const text_width = textWidth(testo);
  const h_parti = fontSize / parti;

  noStroke();

  for (let i = 0; i < parti; i++) {
    // 渐变色：用 HSB 模式更好控制
    colorMode(HSB, 360, 100, 100);
    fill((i * 360) / parti, 80, 80); // 渐变色彩虹风格
    colorMode(RGB, 255); // 恢复 RGB 模式

    push();
    translate(text_width / 2, 0);
    translate(
      random(-sfasamento, sfasamento),
      random(-sfasamento, sfasamento)
    );

    beginClip();
    rect(0, i * h_parti + h_parti / 2, text_width, h_parti);
    endClip();

    text(testo, -text_width / 2, fontSize);

    pop();
  }
}