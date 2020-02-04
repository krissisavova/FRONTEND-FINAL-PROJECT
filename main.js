
 
  function randomSite() {
 	var i = parseInt(Math.random() * quizzes.length);
 	location.href = quizzes[i];
 }


 var quizzes = [
 	'quizpage1.html',
 	'quizpage2.html',
 	'quizpage3.html'
 ]; 
 
 function validation() {
	var uname = document.loginForm.uname.value;
	var pswd = document.loginForm.pswd.value;
	
	if(uname=="" || pswd=="") {
		alert("None of the fields should be blank!");
		return;
	}
	if(pswd.length < 6 || pswd.length > 15) {
		alert("Your password characters should be between 6 and 15!");
		return;
	}

	var str=uname.slice(0,1);
	if (uname.slice(0,1)=="_" || uname.slice(0,1)=="%" || uname.slice(0,1)=="@" || str.match(/[0-9]/g)!=null) {
		alert("Your username should NOT start with _, %, @ or a number!");
		return;
	}
	else {
		window.location = "quizpage2.html";
		return false;
	}
 }
  

  function check() {
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	
	var count = 0;
	
	if(question1 == "b") {
		count++;
	}
	if(question2 == "c") {
		count++;
	}
	if(question3 == "a") {
		count++;
	}
	if(question4 == "b") {
		count++;
	}
	if(question5 == "c") {
		count++;
	}
	alert(" The END! You got " + count + " points! You can close this window now :) ");
 }