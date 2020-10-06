var ball, ballImg;
var paddle, paddleImg;

function preload() {
  /* preload your images here of the ball and the paddle */
  ballImg = loadImage("ball.png");
  paddleImg = loadImage("paddle.png");  
}

function setup() {
  createCanvas(400, 400);
   //ball and it's veloity
  ball = createSprite(50, 200, 30, 30);
  ball.addImage(ballImg);
  ball.velocityX = 9;
  
  //paddle
  paddle = createSprite(380, 200, 10, 70);
  paddle.addImage(paddleImg);

}

function draw() {
  background(205,153,0);
  //edges
  edges = createEdgeSprites() ;
  
  //ball bounces off the edges
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);

  //ball bouncing off the paddle
  ball.bounceOff(paddle, randomVelocity());
  
  
  /* Prevent the paddle from going out of the edges */ 
  
  //moving paddle with arrow keys
  if(keyDown(UP_ARROW))
  {
    paddle.y = paddle.y - 20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y = paddle.y + 20;
  }
  
  //making the paddle bounceoff the edges
  paddle.bounceOff(edges[2]);
  paddle.bounceOff(edges[3]);
  
  drawSprites();
  
}

function randomVelocity()
{
  if(ball.isTouching(paddle))
    {
      ball.velocityY = Math.round(random(5,15));
    }
}

