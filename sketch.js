var canvas, backgroundImage;

var questions;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(800,800);
  database = firebase.database();
  quiz = new Quiz();
  quiz.start();
}


function draw(){
  background("cyan");

}
