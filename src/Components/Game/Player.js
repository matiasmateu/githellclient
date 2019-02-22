

export default class Player {
    constructor(x,y,w,h,img) {
      this.image = new Image()
      this.image.src = img
      this.width = w
      this.height = h
      this.x = x
      this.y = y

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
                this.setPosition(this.x,this.y - this.jumpSpeed)
       

        this.jumpSpeed--
        if (this.jumpSpeed===0){
            this.isJumping = false
            this.isFalling = true
            this.fallSpeed = 1
        }
    }

    checkFall(){
        if (this.y < 660 - this.height) {
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
        if ((this.x<401)){
            this.setPosition(this.x+theX,this.y)
        }

    }

    update(ctx){
        if (this.isJumping) {this.checkJump()} 
        if (this.isFalling) {this.checkFall()} 
        this.draw(ctx)
    }

    draw(ctx){
        try {
            //ctx.fillRect(this.x,this.y,this.width,this.height)
            ctx.drawImage(this.image,this.x,this.y)
        }catch(e){
            console.log(e)
        }

        // FRAMES LOGIC - REVIEW!!!!


    }


  }