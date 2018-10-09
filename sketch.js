


var myColor1 = [
'#424242',
  '#585858'

]

var myColor2 = [
  '#2E2E2E',
  '#6E6E6E',

]

function setup() {
  // put setup code here
  createCanvas(400, 400);
  background(0);
  angleMode(DEGREES);
  frameRate(3);

}

function draw() {
  // put drawing code here


noFill();
strokeWeight(1);

if(random()<0.8)
{
  stroke(color(random(myColor1)));

} else {
  stroke(color(random(myColor2)));

}


rotate(45);


//horizontal

  for (var x1 = 15; x1 <= 800; x1+=35) {
  for (var y1 = -300; y1 <= -280; y1+=5) {

push();
translate(0, frameCount*60);
arc(x1, y1, 30, 10, 0, 180, PI);
ellipse(x1-15, y1, 1.5, 1.5);
ellipse(x1+15, y1, 1.5, 1.5);
pop();




//vertical

  for (var x2 = -350; x2 <= -325; x2+=5) {
  for (var y2 = -256;  y2 <= 800; y2+=60) {



push();
translate(frameCount*35, 0);
arc(x2, y2, 10, 30, -90, 90, PI);
ellipse(x2, y2-15, 1.5, 1.5);
ellipse(x2, y2+15, 1.5, 1.5);
pop();


}
}
}
}
}
