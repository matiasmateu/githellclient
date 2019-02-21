export default class Player {
    constructor() {
      this.image = new Image()
      this.image.src = './assets/gitcat.gif'
      this.width = 65
      this.height = 65
      this.x = 250
      this.y = 600

      // Frames ?

      this.isJumping = 0
      this.isFalling = 0

      this.jumpSpeed = 0
      this.fallSpeed = 0

      this.isMoving = true
    }
    setPosition(x,y){
        this.x = x
        this.y = y
    }
    jump(){
        if (!this.isJumping&&!this.isFalling){
            this.fallSpeed = 0
            this.isJumping = true
            this.jumpSpeed = 22
            // ADD JUMP SOUND HERE
            // snd.play()
        }
    }
    checkJump(){
        if (this.y > 800*0.25){
            this.setPosition(this.x,this.y - this.jumpSpeed)
        }else{
            // POINTS LOGIC
            // MOVE BACKGROUND
            // CHANGE JUMP SPEED ACCORDING TO PLATFORMS
        }

        this.jumpSpeed--
        if (this.jumpSpeed===0){
            this.isJumping = false
            this.isFalling = true
            this.fallSpeed = 1
        }
    }

    checkFall(){
        if (this.y < 800 - this.height) {
            this.setPosition(this.x,this.y+this.fallSpeed)
            this.fallSpeed++
        }else{
            // IF THE GAME JUST STARTED FALL STOP
            // CHANGE THIS!!!!!! GAME OVER MUST BE IMPLEMENTED HERE
            this.fallStop()
        }
    }

    fallStop(){
        this.isFalling =false
        this.fallSpeed=0
        this.jump()
    }

    moveLeft(theX){
        if ((this.x>0)){
            this.setPosition(this.x-theX,this.y)
        }
    }

    moveRight(theX){
        if((this.x < 500)){
            this.setPosition(this.x+theX,this.Y)
        }
    }

    update(ctx){
        if (this.isJumping) {this.checkJump()} 
        if (this.isFalling) {this.checkFall()} 
        this.draw(ctx)
    }

    draw(ctx){
        try {
            ctx.fillRect(this.x,this.y,this.width,this.height)
            //ctx.drawImage(this.image, 0, this.height, this.width, this.height,
               // this.x, this.y, this.width, this.height);
        }catch(e){
            console.log(e)
        }

        // FRAMES LOGIC - REVIEW!!!!


    }


  }