//challenge 1: your age in days
function ageinDays()
{
var birthyear = prompt('whats your birth year');
var ageinDayss = (2020 - birthyear)*365;
 var h1 = document.createElement('h1');
 var textarea = document.createTextNode("You are " + ageinDayss + "Days old");
h1.setAttribute("id", "ageinDays");
h1.appendChild(textarea);
document.getElementById('flex-box-result').appendChild(h1);
console.log(ageinDayss);
}

function reset(){

    //document.getElementById('flex-box-result').innerHTML = "";
    //or
    document.getElementById('ageinDays').remove();
}
//-2
function generateCat() {

    var image = document.createElement('img');
    var div = document.getElementById("flex-cat-gen");
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}

//-3
function rpsGame(youchoice){
    console.log(youchoice);
    console.log("My choice",youchoice.id);
    
    var humanchoice , botchoice;
   humanchoice = youchoice.id;
  botchoice= numberTochoice(randToEpsInt());
  console.log("Computer choice" , botchoice);
results = decideWinner(humanchoice ,botchoice);
console.log(results);
 message = finalMessage(results);// {"message":"you won","color":"green"}
console.log(message);
 rpsFrontEnd(youchoice.id ,botchoice , message);
}

function randToEpsInt(){

    return Math.floor(Math.random()*3);
}

function numberTochoice(number){

    return["rock","paper","scissors"][number]
}

function decideWinner(youchoice , botchoice){

    var rpsDatabase = {
         "rock": {"scissors":1,"rock":0.5, "paper":0},
         "paper": {"rock":1, "paper":0.5, "scissors":0},
         "scissors": {"paper":1, "scissors":0.5, "rock":0},

    }

    var yourscore = rpsDatabase[youchoice][botchoice];
  var computerScore = rpsDatabase[botchoice][youchoice];
  
  return [yourscore ,computerScore];

}

function finalMessage([yourscore, computerScore])
{
    if(yourscore === 0)
    {
        return {'message': "You lost" ,"color":"red"};
    } else if (yourscore === 0.5) {
        return {'message': "You tied" ,"color":"yellow"};
    } else {
        return {'message': "You won" ,"color":"green"};
    }
}

function rpsFrontEnd(humanImagechoice, botImagechoice, finalMessage){
    var imagesDatabase = {
        "rock": document.getElementById('rock').src,
        "paper": document.getElementById('paper').src,
        "scissors": document.getElementById('scissors').src
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
   
    var humanDiv =  document.createElement('div');
    var botDiv = document.createElement("div");
    var messageDiv = document.createElement('div');


humanDiv.innerHTML="<img src='" + imagesDatabase[humanImagechoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
botDiv.innerHTML="<img src='" + imagesDatabase[botImagechoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"
messageDiv.innerHTML ="<h1 style='color: " + finalMessage['color'] + "; font-size: 60 px ; padding: 30px; '>" + finalMessage['message'] + "</h1>"

document.getElementById('flex-box-rps-div').appendChild(humanDiv);
document.getElementById('flex-box-rps-div').appendChild(botDiv);
document.getElementById('flex-box-rps-div').appendChild(messageDiv);


}




