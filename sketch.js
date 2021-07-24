var form;
var bg;
var continueButton;
var femaleCop,maleCop;
var fCop_Img,mCop_Img;
var police;
var zombiesGroup,zombiesACGroup;
var points=0;
var arrow;
var game=0;
function preload(){
  bg=loadImage("bg.png");
  fCop_Img=loadImage("policeFemale.png");
  mCop_Img=loadImage("policeMan.png");
  

}
function setup() {
  createCanvas(displayWidth,displayHeight);
  form=new Form();
  police=createSprite(300,200);
  police.debug=true;
  police.setCollider("rectangle",0,0,50,200);
  police.visible=false;
  zombiesGroup=createGroup();
  zombiesACGroup=createGroup();
  //arrow=createSprite(displayWidth/2,displayHeight/2);

}

function draw() {
  background(255);  
    
    form.display();
    console.log(game);
    if(game===1){
      police.visible=true;
      police.addImage(fCop_Img);
      textSize(20);
      fill("white");
      text("points : "+points,100,30);
      police.y=mouseY;
       zombies();
       zombiesAC();
      if(police.isTouching(zombiesGroup)){
          zombiesGroup.destroyEach();
          points+=1;
      }
      if(police.isTouching(zombiesACGroup)){
        zombiesACGroup.destroyEach();
        points+=2;
    }
    }

    
      if(game===2){
        police.visible=true;
        police.addImage(fCop_Img);
        textSize(20);
        fill("white");
        text("points : "+points,100,30);
        police.y=mouseY;
         zombies();
        if(police.isTouching(zombiesGroup)){
            zombiesGroup.destroyEach();
            points+=1;
        }
    }

    
          drawSprites();
        
}

function zombies(){
  if(frameCount%140==0){
    var zombies=createSprite(displayWidth,300);
    zombies.debug=true;
    zombies.shapeColor="green";
    zombies.y=Math.round(random(300,800));
    zombies.velocityX=-5;
    zombies.lifetime=500;
    zombiesGroup.add(zombies);

    }
}
function zombiesAC(){
  if(frameCount%49==0){
    var zombiesAC=createSprite(displayWidth,300);
    zombiesAC.shapeColor="yellow";
    zombiesAC.y=Math.round(random(300,800));
    zombiesAC.velocityX=-5;
    zombiesAC.lifetime=500;
    zombiesACGroup.add(zombiesAC);

    }
  }