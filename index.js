let inputdir = { x: 0, y: 0 };
const foodsound = new Audio('food.mp3');
const gameoversound = new Audio('gameover.wav');
const movesound = new Audio('move.wav');
const backgroundsound = new Audio('background.wav');
let speed = 5;
let temp =1;
let score = localStorage.getItem("someVarKey");
let Hboard = document.getElementById('Hboard');
Hboard.innerText = 'High Score : '+ score;
let lastpainttime = 0;
let food = {x: 7,y: 5 };
let snakeArr = [
    { x: 9, y: 9 }
]
let lastPress="";
function main(ctime) {
    window.requestAnimationFrame(main);
    // console.log(ctime);
    if ((ctime - lastpainttime) / 1000 < 1 / speed) {
        return;
    }
    lastpainttime = ctime;
    backgroundsound.play();
    gameEngine();
}
function iscollied(snake){
    for(let i=1;i<snake.length;i++){
        if(snake[0].x === snake[i].x && snake[0].y === snake[i].y)
        {
              
        //   if(i == 1)
        //   {
        //     return true;
        //   }
            return true;
        }
    }
        if(snake[0].x >=18 || snake[0].x <=0)
        {
            return true;
        }
        if(snake[0].y >=18 || snake[0].y <=0)
        {
            return true;
        }
        return false;
    
}
function gameEngine() {
if(iscollied(snakeArr)){
   hscore();
    gameoversound.play();
    backgroundsound.pause();
    inputdir = {x:0,y:1};
    // speed=5;
    alert("game over. press any key");
    snakeArr = [{x:9,y:9}];
    speed = 5;
    backgroundsound.play();
    
}
function hscore(){
    if(snakeArr.length>score)
    {
        score = snakeArr.length-1;
        let Hboard = document.getElementById('Hboard');
        Hboard.innerText = 'High Score : '+ score;
        // var someVarName = "value";
        localStorage.setItem("someVarKey", score);
    }
  
}
if(snakeArr[0].x === food.x && snakeArr[0].y === food.y)
{
    foodsound.play();
    
    // snakeArr.unshift({x: snakeArr[0].x + inputdir.x, y: snakeArr[0].y + inputdir.y});
    snakeArr.unshift({x: snakeArr[0].x , y: snakeArr[0].y});
    if(snakeArr.length === 4*temp)
    {
        speed++;
        temp++;
    }
    // snakeArr.unshift({x: snakeArr[0].x , y: snakeArr[0].y});
    // let a = 2;
    // let b = 16;
    // food = {x : Math.round(a+(b-a)* Math.random()), y: Math.round(a=(b-a)*Math.random())};
    food = {x : Math.floor(Math.random() * 16) + 2, y: Math.floor(Math.random()*16) + 2};
   
}
for(let i = snakeArr.length-2;i>=0;i--)
{
    
    snakeArr[i+1]= {...snakeArr[i]};

}
snakeArr[0].x += inputdir.x;
snakeArr[0].y += inputdir.y;

    Board = document.getElementById('board');
    Board.innerHTML = "";
    snakeArr.forEach((e, index) => {
        snakeelement = document.createElement('div');
        snakeelement.style.gridRowStart = e.y;
        snakeelement.style.gridColumnStart = e.x;
        if (index === 0) {
            snakeelement.classList.add('head');
        }
        else {
            snakeelement.classList.add('snake');
        }

        Board.appendChild(snakeelement);

    })
    foodelement = document.createElement('div');
    foodelement.style.gridRowStart = food.y;
    foodelement.style.gridColumnStart = food.x;

    foodelement.classList.add('food');
    Board.appendChild(foodelement);

}
window.requestAnimationFrame(main);
window.addEventListener('keydown', e => {
    // inputdir = { x: 0, y: 1 };
    movesound.play();
  if(e.key == "ArrowUp")
  {
    
    if(lastPress == "ArrowDown"){
        inputdir.x =0;
        inputdir.y=1;
    }
    else
    {
        inputdir.x = 0;
        // if(snakeArr[0].y-1 === snakeArr[0+1].y)
        // {
            inputdir.y = -1;
            lastPress = "ArrowUp";
    }
    
    // }
    // else{
    //     inputdir.y = 1;
    // }
       
  }
  if(e.key == "ArrowDown")
  {
    if(lastPress == "ArrowUp"){
        inputdir.x =0;
        inputdir.y=-1;
    }
    else{
    inputdir.x = 0;
    // if(iscollied()=="False")
    // {
        inputdir.y = 1;
    // }        
    // else{
    //     inputdir.y = -1
    // }
    lastPress = e.key;
    }
    
  }
  if(e.key == "ArrowLeft")
  {
    if(lastPress == "ArrowRight")
    {
        inputdir.x = 1;
        // }
        // else
        // {
        //     inputdir.x = -1;
        // }
        
                
                
                inputdir.y = 0;
    }
    // if(iscollied()=="False")
    // {
      else
      {

       inputdir.x = -1;
       
              
    inputdir.y = 0;
    lastPress = "ArrowLeft";
      }
  }
  if(e.key == "ArrowRight")
  {
    if(lastPress == "ArrowLeft")
    {
        inputdir.x = -1;
       
              
        inputdir.y = 0;
    }
    // if(iscollied()=="False")
    // {
       else
       {

        inputdir.x = 1;
    // }
    // else
    // {
    //     inputdir.x = -1;
    // }
    
            
            
            inputdir.y = 0;
               lastPress = "ArrowRight";
        }}
   // switch (e.key) {
    //     case "ArrowUp":
    //         // console.log("up");
    //       inputdir.x = 0;

    //         inputdir.y = -1;          
    //         break;
    //     case "ArrowDown":
    //         // console.log("down");
    //         inputdir.x = 0;
            
    //             inputdir.y = 1
            
    //         break;
    //     case "ArrowLeft":
    //                             inputdir.x = -1;
                
              
    //         inputdir.y = 0;
    //         break;
    //     case "ArrowRight":
    //         // console.log("right");
            
    //             inputdir.x = 1;
            
            
    //         inputdir.y = 0;
    //         break;
    //     default:
    //         break;
    // }

})