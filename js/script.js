$(document).ready(function () {

    var magic8Ball = {}; //tells it an object
    $("#answer").hide(); //hide answer on load

    magic8Ball.listOfAnwsers = ["It is certain", "Without a doubt", "Yes – definitely", "You may rely on it", "Most likely", "Outlook good", "Signs says yes", "Reply hazy", "Try Again", "Ask again later", "I'll never Tell", "Cannot predict now", "Give another Try", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"]; /// my array of answers

    magic8Ball.askQuestion = function (question) //find the answer
    {
        var randomNumber = Math.random();
        var randomListItem = randomNumber * this.listOfAnwsers.length;
        var randomIndex = Math.floor(randomListItem);
        var answer = this.listOfAnwsers[randomIndex];
        $("#answer").text(answer);

        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
        console.log(question);
        console.log(answer);
    };

    ///click event code

    var askQuestion = function () {

        $("#answer").hide();
        $("#answer").fadeIn(3000);
        setTimeout(
            function () {
                var question = prompt("ASK A YES/NO QUESTION!");
                magic8Ball.askQuestion(question);
                $("#8ball").effect("shake");
            }, 500);
    };
    $("#questionButton").click(askQuestion);
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
});