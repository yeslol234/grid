class Letter{
    constructor(char,x,_ctx){
      this.char = char;// the letter
      // measure the letter
      _ctx.fillText(this.char, x, _ctx, y);
      this.w = _ctx.measureText(this.char).width;
      //the position of the text
      this.pos = {}
      this.pos.y = y;
      this.pos.x = x;
      // the transparency of the letter
      this.alpha = 1;
    }
    show(){// draw the letter
      ctx.fillStyle = `rgba(0,0,0,${this.alpha})`;
      ctx.fillText(this.char, this.pos.x, this.pos.y);
    }
    update(){
      //change the transparency of the text
      if(this.alpha > 0){this.alpha -= 1/k;}
      if(this.alpha < 0){this.alpha = 0; index++}
    }
  }
  
  
  let x = 0;
  
  for(l=0; l<theText.length; l++){
    // a new letter object
  letters.push(new Letter(theText[l],x))
  //calculate the x position of the next letter
  x = letters.reduce( function(a, b){return a + b.w}, 0); 
  }
  
  // draw all the letters
  for(l=0; l<letters.length; l++){letters[l].show()}
  
  // the actual letter. 
  let index = 0;
  
  function Draw() {
  rid = window.requestAnimationFrame(Draw);
  ctx.clearRect(0,0,cw,ch);
  letters[index].update();//change the transparency of the actual letter
  // draw all the letters
  for(l=0; l<letters.length; l++){letters[l].show()}
  // if the last letter is fully transparent stop the animation
  if(letters[letters.length - 1].alpha <= 0){
    window.cancelAnimationFrame(rid);rid = null;
  }
  }
  