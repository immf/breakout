/* esse é o jogo breakout que utiliza a biblioteca p5 e p5.play*/
var caixa1;
var caixa2;
var caixa3;
var caixa4;
var caixa5;
var caixa6;
var caixa7;
var caixa8;
var caixa9;
var caixa10;
var caixa11;
var caixa12;
var caixa13;
var caixa14;
var caixa15;
var caixa16;
var caixa;
var retangulo;
var pontuacao;
var estadojogo;
var parede1;
var parede2;
var parede3;
function setup(){
createCanvas(400,400);
caixa1 = new Sprite(25,75,50,50); 
caixa1.color = "blue";
caixa2 = new Sprite(75,75,50,50);
caixa2.color = "red";
caixa3 = new Sprite(125,75,50,50);
caixa3.color = "blue";
caixa4 = new Sprite(175,75,50,50);
caixa4.color = "red"
caixa5 = new Sprite(225,75,50,50);
caixa5.color = "blue"
caixa6 = new Sprite(275,75,50,50);
caixa6.color = "red"
caixa7 = new Sprite(325,75,50,50);
caixa7.color = "blue"
caixa8 = new Sprite(375,75,50,50);
caixa8.color = "red"
caixa9 = new Sprite(25,125,50,50); 
caixa9.color = "red";
caixa10 = new Sprite(75,125,50,50);
caixa10.color = "blue";
caixa11 = new Sprite(125,125,50,50);
caixa11.color = "red";
caixa12 = new Sprite(175,125,50,50);
caixa12.color = "blue"
caixa13 = new Sprite(225,125,50,50);
caixa13.color = "red"
caixa14 = new Sprite(275,125,50,50); 
caixa14.color = "blue";
caixa15 = new Sprite(325,125,50,50);
caixa15.color = "red";
caixa16 = new Sprite(375,125,50,50);
caixa16.color = "blue";
caixa = new Sprite(200,220,20,20);
caixa.color = "green";
retangulo = new Sprite(200,380,100,20);
retangulo.color = "yellow";
pontuacao = 0;
estadojogo = "inicio";
retangulo.collider="k";
caixa1.collider="s";
caixa2.collider="s";
caixa3.collider="s";
caixa4.collider="s";
caixa5.collider="s";
caixa6.collider="s";
caixa7.collider="s";
caixa8.collider="s";
caixa9.collider="s";
caixa10.collider="s";
caixa11.collider="s";
caixa12.collider="s";
caixa13.collider="s";
caixa14.collider="s";
caixa15.collider="s";
caixa16.collider="s";
caixa.bounciness=1;
parede1 = new Sprite(0,200,1,400);
parede1.collider = "s";
parede2 = new Sprite(400,200,1,400);
parede2.collider = "s";
parede3 = new Sprite(200,0,400,1);
parede3.collider = "s";
caixa.rotationLock=true;
}
function draw(){
    background("#1ef79c");
    textSize(13);
    stroke("yellow");
    text("Pontuação:"+pontuacao,310,30); 
    if(estadojogo=="inicio"){
        textSize(16);
        stroke("black");
        text("Bem vindo. Pressione Enter para começar o jogo",20,200);
        if(kb.presses("ENTER")){
            caixa.vel.x = 2;
            caixa.vel.y = 3;
            estadojogo = "jogar"; 
        }
    }
if(estadojogo=="jogar"){
 if(mouse.x>50 && mouse.x<350){
   retangulo.x=mouse.x;
 }  
if(caixa.y>400){
   estadojogo = "fim";
}
if(pontuacao==16){
   estadojogo = "fim";
}

 if(caixa.collides(retangulo)){
  if(caixa.x>retangulo.x){
   caixa.vel.x = 2;
   caixa.vel.y = -3;
  }
  if(caixa.x<retangulo.x){
   caixa.vel.x = -2;
   caixa.vel.y =  -3;
  }
  }
 if(caixa.collides(parede1)){
   caixa.vel.x=2;
   caixa.vel.y=3;
 } 
 if(caixa.collides(parede2)){
   caixa.vel.x=-2;
   caixa.vel.y=-3;
 }
 if(caixa.collides(parede3)){
   caixa.vel.y=3;
 }
 if(caixa.collides(caixa1)){
    caixa1.y=500;
    pontuacao=pontuacao+1;
 }
 if(caixa.collides(caixa2)){
    caixa2.y=500;
    pontuacao=pontuacao+1;    
 }
 if(caixa.collides(caixa3)){
    caixa3.y=500;
    pontuacao=pontuacao+1;     
 }      
 if(caixa.collides(caixa4)){
    caixa4.y=500;
    pontuacao=pontuacao+1;     
 } 
 if(caixa.collides(caixa5)){
    caixa5.y=500;
    pontuacao=pontuacao+1;     
 }
 if(caixa.collides(caixa6)){
    caixa6.y=500;
    pontuacao=pontuacao+1;     
 }
 if(caixa.collides(caixa7)){
    caixa7.y=500;
    pontuacao=pontuacao+1;     
 } 
 if(caixa.collides(caixa8)){
    caixa8.y=500;
    pontuacao=pontuacao+1;     
 } 
 if(caixa.collides(caixa9)){
    caixa9.y=500;
    pontuacao=pontuacao+1;     
 }     
 if(caixa.collides(caixa10)){
    caixa10.y=500;
    pontuacao=pontuacao+1;     
 } 
 if(caixa.collides(caixa11)){
    caixa11.y=500;
    pontuacao=pontuacao+1;     
 }  
 if(caixa.collides(caixa12)){
    caixa12.y=500;
    pontuacao=pontuacao+1;     
 }    
 if(caixa.collides(caixa13)){
    caixa13.y=500;
    pontuacao=pontuacao+1;     
 }  
 if(caixa.collides(caixa14)){
    caixa14.y=500;
    pontuacao=pontuacao+1;     
 }      
 if(caixa.collides(caixa15)){
    caixa15.y=500;
    pontuacao=pontuacao+1;     
 }
 if(caixa.collides(caixa16)){
    caixa16.y=500;
    pontuacao=pontuacao+1;                                            
 }
    

}

if(estadojogo=="fim"){
   caixa.vel.x=0;
   caixa.vel.y=0;
   textSize(50);
if(pontuacao==16){
   stroke("green");
   fill("green")
   text("Você ganhou",57,200);
   textSize(20);
   stroke("black");
   fill("black")
   text("Pressione espaço para reiniciar o jogo",30,300);  
  
}
else{stroke("red");
fill("red")
text("Você perdeu",57,200); 
textSize(20); 
stroke("black");
fill("black")
text("Pressione espaço para reiniciar o jogo",30,300);  
}

  if(kb.presses("space")){
   estadojogo="inicio";
   caixa1.y=75;
   caixa2.y=75;
   caixa3.y=75;
   caixa4.y=75;
   caixa5.y=75;
   caixa6.y=75;
   caixa7.y=75;
   caixa8.y=75;
   caixa9.y=125;
   caixa10.y=125;
   caixa11.y=125;
   caixa12.y=125;
   caixa13.y=125;
   caixa14.y=125;
   caixa15.y=125;
   caixa16.y=125;
   retangulo.x=200;
   caixa.x=200;
   caixa.y=220;
   pontuacao=0;
  }
}

 
}