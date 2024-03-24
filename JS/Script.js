document.getElementById("Concatenation").onclick = function () {
  let number1 = "20";
  let number2 = "10";
  let result = number1 + number2;
  document.getElementById("input").innerHTML = ' "20" + "10" ';
  document.getElementById("output").innerHTML = result;
};
document.getElementById("clearStatement").onclick = function () {
  document.getElementById("input").innerHTML = "";
};

document.getElementById("clearOutput").onclick = function () {
  document.getElementById("output").innerHTML = "";
};

document.getElementById("user").onclick = function () {
  let FirstName = prompt("Enter Your First Name");
  let LastName = prompt("Enter Your Last Name");
  let FullName = FirstName + " " + LastName;
  document.getElementById("input").innerHTML =
    "First Name = " + FirstName + " " + "Last Name = " + LastName;
  document.getElementById("output").innerHTML = FullName;
};

document.getElementById("clearStatement").onclick = function () {
  document.getElementById("input").innerHTML = "";
};

document.getElementById("clearOutput").onclick = function () {
  document.getElementById("output").innerHTML = "";
};

document.getElementById("Comparison").onclick = function () {
  let Number1 = prompt("Enter First Number");
  let Number2 = prompt("Enter Second Number ");
  if (Number1 === Number2) {
    document.getElementById("input").innerHTML = "Number1 == Number2";
    document.getElementById("output").innerHTML =
      "<span class=' text-success'> Condition is true Number Are  Equal &#128522 </span>";
  } else {
    document.getElementById("input").innerHTML = "Number1 != Number2";
    document.getElementById("output").innerHTML =
      "<span class='text-danger'>Condition is false Number Are Not Equal  &#128554;</span>";
  }
};

document.getElementById("clearStatement").onclick = function () {
  document.getElementById("input").innerHTML = "";
};

document.getElementById("clearOutput").onclick = function () {
  document.getElementById("output").innerHTML = "";
};

document.getElementById("ifelseif").onclick = function () {
  let Marks = prompt("Enter Your Marks");
  if (Marks >= 90) {
    document.getElementById("input").innerHTML = "";
    document.getElementById("output").innerHTML =
      " <span class='text-success'> Congratulations You are pass....!!!<br> you got A+ Grade </span>";
  } else if (Marks >= 80) {
    document.getElementById("input").innerHTML = "";
    document.getElementById("output").innerHTML =
      " <span class='text-success'> Congratulations You are pass....!!!<br> you got A Grade</span>";
  } else if (Marks >= 65) {
    document.getElementById("input").innerHTML = "";
    document.getElementById("output").innerHTML =
      " <span class='text-success'> Congratulations You are pass....!!!<br> you got B Grade </span>";
  } else if (Marks >= 55) {
    document.getElementById("input").innerHTML = "";
   
    document.getElementById("input").innerHTML =
      " <span class='text-success'> Congratulations You are pass....!!!<br> you got C Grade </span>";
  } else if (Marks <= 40) {
    document.getElementById("input").innerHTML = "";
    document.getElementById("output").innerHTML =
      "<span class='text-danger'>You are Fail ....!!! <br> Better luck next time </span>";
      
    }
    
};

document.getElementById("clearStatement").onclick = function () {
  document.getElementById("input").innerHTML = "";
};

document.getElementById("clearOutput").onclick = function () {
  document.getElementById("output").innerHTML = "";
};

document.getElementById("set").onclick = function () {
  let age = prompt("Enter Your Age");
  let weight = prompt("Enter Your Weight");
  if (age <= 12 && weight <= 30) {
    document.getElementById("output").innerHTML = " <span class='text-success'>You Are Baby </span>";
  } else if (age <= 19 && weight <= 50) {
    document.getElementById("output").innerHTML = " <span class='text-success'> You Are TeenAger And Fit </span> ";
  } else if (age <= 35 && weight <= 65) {
    document.getElementById("output").innerHTML = " <span class='text-success'> You Are Yong And Healthy </span> ";
  } else if (age <= 50 && weight <= 75) {
    document.getElementById("output").innerHTML = " <span class='text-success'> You Are Adult And Fatty </span> ";
  } else if (age <= 60 && weight > 80) {
    document.getElementById("output").innerHTML = " <span class='text-success'> You Are Old And Fatty </span> ";
  } else {
    document.getElementById("output").innerHTML =
      "you are a Senior Citizen and fatty";
  }
};

document.getElementById("clearStatement").onclick = function () {
  document.getElementById("input").innerHTML = "";
};

document.getElementById("clearOutput").onclick = function () {
  document.getElementById("output").innerHTML = "";
};

document.getElementById("Nested").onclick = function () {
  let username = prompt("Enter Your username");
  if (username === "admin") {
    let Password = prompt("Enter Your Passward");
    if (Password === "123") {
      document.getElementById("output").innerHTML =
        "<span class='text-success'> You are Logged In </span>";
    } else {
      document.getElementById("output").innerHTML =
        "<span class='text-danger'>Wrong Password</span>";
    }
  } else {
    document.getElementById("output").innerHTML =
      "<span class='text-danger'>Wrong username</span>";
  }
};

document.getElementById("login").onclick = function () {
  let username = prompt("Enter Your Username");
  let password = prompt("Enter Your Password");
  if (username === "admin") {
    if (password === "123") {
      document.getElementById("output").innerHTML =
        "<span class='text-success'> You are Logged In </span>";
    } else {
      document.getElementById("output").innerHTML =
        " <span class='text-danger'> incorrect username </span> ";
    }
  } else {
    document.getElementById("output").innerHTML =
      " <span class='text-danger'> invailed username or password </span>";
  }
};

document.getElementById("clearStatement").onclick = function () {
  document.getElementById("input").innerHTML = "";
};

document.getElementById("clearOutput").onclick = function () {
  document.getElementById("output").innerHTML = "";
};

// const  = () => {
//   document.getElementById("input").innerHTML = "";
//   document.getElementById("output").innerHTML = "";
// };
