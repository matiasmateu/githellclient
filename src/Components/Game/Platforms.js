export default class Platforms {
    constructor(x, y) {
        this.X = ~~x;
        this.Y = y;
        this.firstColor = '#FF8C00';
    }

    draw(ctx) {
        ctx.fillRect(this.X,this.Y,100,20);
    }
}

