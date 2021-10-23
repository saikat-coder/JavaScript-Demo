//PROJECT-1: Age in days

function myFunction(){
  let birthYear=prompt('What year you bron? my friend!');
  let ageInDayes=(2021-birthYear)*365;
  document.getElementById('age-indayes').innerHTML="You are "+ ageInDayes+" dayes old";
 }


function reset(){
  document.getElementById('age-indayes').remove();
}

// PROJECT-2:Cat generator
function genaretCat(){
  let image=document.createElement('img');
  let div=document.getElementById('flex-cat-gen');
  image.src="http://thecatapi.com/api/images/get?format=src&type=gif";
  div.appendChild(image);
}

//PROJECT-3:ROCK,Pepper,Scisseor

function rpsGame(yourChoice){
  let humanChoice,botChoice;
  
  humanChoice=yourChoice.id;
  
  botChoice=numberToChoice(randToRpsInt());
  
  result=decideWinner(humanChoice,botChoice); //[1,0];[.5,.5];[0,1]
  
  message=finalMessage(result); //'you won','you tide','you lost'(As String)
  
  rpsFontEnd(yourChoice.id,botChoice,message);
 }


function randToRpsInt(){
  return Math.floor(Math.random() * 3);
}

function numberToChoice(number){
  return ['rock','pepper','scisseor'] [number];
}

function decideWinner(yourChoice,computerChoice){
let  rpsDatabase={
  'rock': {'scisseor':1,'rock':0.5,'pepper':0},
  'pepper': {'rock':1,'pepper':0.5,'scisseor':0},
  'scisseor': {'pepper':1,'scisseor':0.5,'rock':0}
  };
  
  let yourScore=rpsDatabase[yourChoice][computerChoice];
  let computerScore=rpsDatabase[computerChoice][yourChoice];
  
  return [yourScore,computerScore];
}

function finalMessage([yourScore,computerScore]) {
  if(yourScore===0){
    return {'message':'You lost!' , 'color':'red'};
  }
  else if(yourScore===0.5){
    return {'message':'You tied!' , 'color':'yellow'};
  }
  else{
    return {'message':'You won!' , 'color':'green'};
  }
}

function rpsFontEnd(humanImageChoice,botImageChoice,finalMessage){
  let imageDtabase={
    'rock':document.getElementById('rock').src,
    'pepper':document.getElementById('pepper').src,
    'scisseor':document.getElementById('scisseor').src
  };
  //let's remove all the images
  document.getElementById('rock').remove();
  document.getElementById('pepper').remove();
  document.getElementById('scisseor').remove();
  
  //create div 
  let humanDiv=document.createElement("div");
  let messageDiv=document.createElement("div");
  let botDiv=document.createElement("div");
  
  humanDiv.innerHTML="<img src='" + imageDtabase[humanImageChoice] + "' height=150 width=150>"
  
  messageDiv.innerHTML="<h1 style='color: " + finalMessage['color'] +";font-size:30px; padding:10px;'>" + finalMessage['message'] + "</h1>";
  
  botDiv.innerHTML="<img src='" + imageDtabase[botImageChoice] + "' height=150 width=150>";
  
  document.getElementById('flex-box-rps-div').appendChild(humanDiv);
 document.getElementById('flex-box-rps-div').appendChild(messageDiv);
  document.getElementById('flex-box-rps-div').appendChild(botDiv);
  }



