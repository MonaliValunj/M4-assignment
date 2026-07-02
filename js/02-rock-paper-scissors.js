// The Rock, Paper, Scissors Game

// take the user input using prompt
userChoice = window.prompt("Enter your choice  (rock/paper/scissor) ") 
    document.write("user choice: "+ userChoice + "<br>") 
    //check if user enters valid input
    if( userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissor"){
        window.alert("Please enter a valid choice.")
    }

    // generate random num for computer's choice
    cc = Math.round(Math.random()*2) 
    console.log("computerChoice (random number): " + cc)
    //reset random num to a string value of rock, paper, or scissors i
    let computerChoice = " " 
    if(cc === 0 ){
        computerChoice = "rock" 
    }else if(cc === 1){
        computerChoice = "paper" 
    }else if(cc === 2){
        computerChoice = "scissor" 
    }
    document.write(" computer Choice : "+ computerChoice) 

    //check the user’s choice in relation to the computer’s choice 
    // and set the winner

    if(userChoice === "rock" && computerChoice === "scissor"){
        window.alert("You won!!") 
    }else if(userChoice === "paper" && computerChoice === "rock"){
        window.alert("You won!!") 
    }else if(userChoice === "scissor" && computerChoice === "paper"){
        window.alert("You won!!") 
    }else if(userChoice === "rock" && computerChoice === "paper"){
        window.alert("You lost!!") 
    }else if(userChoice === "paper" && computerChoice === "scissor"){
        window.alert("You lost!!") 
    }else if(userChoice === "scissor" && computerChoice === "rock"){
        window.alert("You lost!!") 
    }else if(userChoice === computerChoice){
        window.alert("tie")
    }