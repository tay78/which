let color = document.querySelector('.color');
let character = document.querySelector('.character');
let activity = document.querySelector('.activity');
let trait = document.querySelector(".trait");
let buttons = document.querySelector(".buttons");
let text = document.querySelector("h4");
//let input = document.querySelector(".answer");

let answer1 = document.querySelector('.answer1');
let answer2 = document.querySelector('.answer2');
let answer3 = document.querySelector('.answer3');
let answer4 = document.querySelector('.answer4');
//let answer = input.value;
let score1 = 0;
let score2 = 0;
let score3 = 0;
let score4 = 0;
let score5 = 0;
activity.style.display = "block";
color.style.display = "none";
character.style.display = "none";
trait.style.display = "none";

activity.addEventListener('click', function () {
    //activity = activity.value;
    trait.style.display = "none";
    color.style.display = "block";
    activity.style.display = "none";
    if (buttons === answer1) {
        score1 = score1 + 1;
    }
    else if (buttons === answer2) {
        score2 = score2 + 1;
        
    } else if (buttons === answer3) {
        score3 = score3 + 1;

    } else if (buttons === answer4) {
        score4 = score4 + 1;

    } else {
        score5 = score5 + 1;

    }
    color.style.display = "block";
    console.log(score1);
    console.log(score2);
    console.log(score3);
    console.log(score4);
    console.log(score5);
});

color.addEventListener('click', function () {
    //  activity = activity.value;
    color.style.display = "none";
    activity.style.display = "none";
    trait.style.display = "block";
    if (buttons === answer1) {
        score1 = score1 + 1;
    }
    else if (buttons === answer2) {
        score2 = score2 + 1;
        
    } else if (buttons === answer3) {
        score3 = score3 + 1;

    } else if (buttons === answer4) {
        score4 = score4 + 1;

    } else {
        score5 = score5 + 1;

    }


    console.log(score1);
    console.log(score2);
    console.log(score3);
    console.log(score4);
    console.log(score5);
});
trait.addEventListener('keydown', function () {
    //  activity = activity.value;
    trait.style.display = "block";
    if (event.keyCode == 13) {
        let answer = document.querySelector("input").value;
        if (answer === "knowledge") {
            score1 = score1 + 1;
        }
        else if (answer === "humor") {
            score2 = score2 + 1;
    
        } else if (answer === "resourcefulness") {
            score3 = score3 + 1;
    
        } else if (answer === "looks") {
            score4 = score4 + 1;
    
        } else {
            score5 = score5 + 1;
    
        }
        console.log(answer);
        console.log(score1);
        console.log(score2);
        console.log(score3);
        console.log(score4);
        console.log(score5);
        trait.style.display = "block";
    color.style.display = "none";
    character.style.display = "block";
    trait.style.display = "none";

       if (score1 >= score2 && score1 >= score3 && score1 >= score4 && score1 >= score5) {

            text.innerHTML = "percy";
        }
        if (score2 >= score1 && score2 >= score3 && score2 >= score4 && score2 >= score5) {

            text.innerHTML = "nico";


        } if (score3 >= score2 && score3 >= score1 && score3 >= score4 && score3 >= score5) {

           text.innerHTML = "grover";


       } if (score4 >= score2 && score4 >= score3 && score4 >= score1 && score4 >= score5) {

            text.innerHTML = "annabeth";

       } if (score5 >= score2 && score5 >= score3 && score5 >= score4 && score5 >= score1) {

            text.innerHTML = "luke";

       }
}
});

