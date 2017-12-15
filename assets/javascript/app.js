

var questionNum = 0;
var answersRight = 0;
var answersWrong = 0;
var clockRunning = false;

var time = 60;

var intervalId;

var answer1;
var answer2;
var answer3;
var answer4;



$("#start").on("click", startTimer);
$("#submit").on("click",checkAnswers);


//console.log(check);

//console.log($("#buttonList"+$(":checked")[0].id).text());

//console.log($("input:checked").val());




function timeUp(){
	clearInterval(intervalId);
	$("#display").text("Time is up!");
	//disable the questions
	$("#questions").children().attr("disabled","disabled");
	checkAnswers;


};


function checkAnswers(){


console.log($("input[name='buttonList']:checked").val());
console.log($("input[name='buttonList2']:checked").val());

//console.log($("input[name='buttonList2']:checked").val());

//$("#label"+$(":checked")[0].id).text()("input[type='radio")
//console.log($("input[type='radio'][name='buttonList']:checked").val());

//console.log($("input[type='radio'][name='buttonList2']:checked").val());	

	answer1 = $("input[name=buttonList]:checked").val();
	answer2 = $("input[name=buttonList2]:checked").val();
	answer3 = $("input[name=buttonList3]:checked").val();
	answer4 = $("input[name=buttonList4]:checked").val();


	answersWrong=4;

	if (answer1=="Luke") {
		answersRight++;
		answersWrong--;
	};

	if (answer2=="Hook") {
		answersRight++;
		answersWrong--;
	};

	if (answer3=="Vadim") {
		answersRight++;
		answersWrong--;
	};	

	if (answer4=="Batman") {
		answersRight++;
		answersWrong--;
	};		

	//console.log($("input[name=buttonList4]:checked").val());


	$("#correct").text("Correct Answers: " + answersRight);
	$("#incorrect").text("Incorrect Answers: " + answersWrong);	

	$("#questions").empty();


};




function clearContainer(){
  	$(".container").empty()

};


function timer(){

	time--;
	$("#display").text(time);

};



function startTimer() {

$("#questions").children().attr("enabled","enabled");

// DONE: Use setInterval to start the count here and set the clock to running.
	if (!clockRunning) {
		$("#display").text(time);
		setTimeout(timeUp, 1000 * 60);
	    intervalId = setInterval(timer, 1000);
	    clockRunning = true;
	};
};












