class Form{
    constructor(){
        //this.title=createElement("h2");
        this.input=createInput("Name");
        this.button=createButton("Let's Begin");
        this.greetings=createElement("h1");
        this.buttonPlay=createButton("CONTINUE");

    }
    
    hide(){
        //this.title.hide();
        this.input.hide();
        this.button.hide();
        this.greetings.hide();
    }

    display(){
        //this.title.html("Zombie Apocalpse");
        //this.title.position(400,150);
        image(bg,0,0,displayWidth,displayHeight);
        this.input.position(450,250);

        this.button.position(550,300);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            
            var name=this.input.value();
            this.greetings.html("Welcome To The New World Of Zombies, " +name);
            this.greetings.position(180,220);
            this.buttonPlay.position(displayWidth/2,displayHeight/2);


            
            this.buttonPlay.mousePressed(()=>{
            
                var title=createElement("h1");
                title.html("SELECT ONE");
                title.position(displayWidth/2,200);

                femaleCop=createButton("FEMALE COP");
                femaleCop.position(displayWidth/4,displayHeight/2);

                //femaleCop.addImage(fCop_Img);
                //femaleCop.scale=1.2;
                maleCop=createButton("MALE COP");
                maleCop.position(3*displayWidth/4,displayHeight/2);

                this.greetings.hide();
                this.buttonPlay.hide();

                femaleCop.mousePressed(()=>{
                    game=1;
                    femaleCop.hide();
                    maleCop.hide();
                    title.hide();
                   
                    
                });
                maleCop.mousePressed(()=>{
                    game=2;
                    femaleCop.hide();
                    maleCop.hide();
                    title.hide();
                    
                });
            })

        })

        drawSprites();

    }
    
    
}
