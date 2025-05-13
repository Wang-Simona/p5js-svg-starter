/** @type {Font} */
let font;

function preload() {
  font = loadFont("./fonts/Adobe-Jenson-Pro-Bold-Caption.ttf");
}

function setup() {
  createCanvas(400, 400, "svg");
  addDownloadButton();

  rectMode(CENTER);
  angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100)
  //noLoop(); // Opzionale
}

function draw() {
  clear(); // Non cancellare!
  background("black");

  //小球
  push();
  //frameRate(5)
  for (let i = 0; i < 10; i++) {
    let x = random(0, width);
    let y = random(0,height);
    noStroke();
    fill(random(0, 80), 100, 100);
    ellipse(x, y, 100);
  }
  pop();

  // testo

  let testo = "HAPPY";
  let testo_x = width*0.1;
  let testo_y = height/2;
  let font_size = 90;

  textFont(font);
  textSize(font_size);
  // text(testo, testo_x, testo_y);

  let points = font.textToPoints(testo, testo_x, testo_y, font_size, {
  sampleFactor: 0.2,
  });
  
  noFill();
 // stroke("white");
  colorMode(HSB, 360, 100, 100);
  strokeWeight(2); 

for (let i = 0; i < points.length; i++) {
  let p = points[i];
  // 更强烈的彩虹流动（乘以倍数），也可以调整 3 为更高值
  let hue = (map(i, 0, points.length, 0, 360) + frameCount * 3) % 360;
  stroke(hue, 100, 100);

  push();
  translate(p.x, p.y);
  ellipse(0,0,sin(frameCount)*10);
  pop();


 // for (let p of points) {
 //   push()
 //   translate(p.x, p.y)
 //   ellipse(0, 0, sin(frameCount)*10)
 //   pop()
 }




}
