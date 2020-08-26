function fnFirst() {
    console.log("hi i'm from external file")
}

function fnCheckToVote() {
    // accept name
    var name = prompt("Enter Your Name");
    // accept age
    var age = parseInt(prompt("Enter your age"));
    // check if age > 18

    if (age > 18) {
      // console.log("You are eligible to vote Mr/Mrs/Ms", name);
    //   document.write("You are eligible to vote Mr/Mrs/Ms", name)
        __mydiv = document.getElementById("mydiv")
        __mydiv.innerHTML = "<h2> You are eligible to vote Mr/Mrs/Ms " + name +  "</h2>"; 

    } else {
      console.log(
        "sorry you have to wait for ",
        18 - age,
        " years Mr/Ms: ",
        name
      );

      window.location.assign("https://eci.gov.in/");
    }
  }


  function fnTotalNumbers() {
    var result =0; 
    do{
      var value = parseInt(prompt("Enter a values ", "0"))
      result = result + value
    }while(value !=0); 

    console.log("Result is " , result);

  }


  function fnTotalNumbers1() {
    var result =0; 
    do{
      var value = parseInt(prompt("Enter a values ", "0"))
      result = result + value
    }while(confirm("Do you wante to continue")); 

    console.log("Result is " , result);
  }

  function fnConfirm() {
    console.log(confirm("Are you sure"));
  }