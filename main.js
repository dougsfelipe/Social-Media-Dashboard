console.log("selecionou");

const teste = document.querySelector("#checktoogle");
const cards = document.querySelectorAll(".card");
const cardsOverview = document.querySelectorAll(".card-overview");
const h1 = document.querySelector("h1");
const h4 = document.querySelector("h4");
const h2 = document.querySelectorAll("h2");
const h3 = document.querySelectorAll("h3");
const user = document.querySelectorAll(".user"); 
const userOverview = document.querySelectorAll(".user-overview-top");
const userOverviewNumber = document.querySelectorAll(".user-overview-down"); 
const attribution = document.querySelector(".attribution"); 

teste.onchange = () => {
    changetheme();
};

function changetheme() {

    if (document.body.style.backgroundColor == "rgb(30, 32, 42)") { //light theme

        document.body.style.backgroundColor = "hsl(0, 0%, 100%)";
        for (var i = 0; i < cards.length; i++) {
            cards[i].style.backgroundColor = "hsl(227, 47%, 96%)";
        }
        for (var i = 0; i < cardsOverview.length; i++) {
            cardsOverview[i].style.backgroundColor = "hsl(227, 47%, 96%)";
        }

        for (var i = 0; i < h2.length; i++) {
            h2[i].style.color = "black";
        }

        for (var i = 0; i < h3.length; i++) {
            h3[i].style.color = "grey";
        }

        for (var i = 0; i < user.length; i++) {
            user[i].style.color = "grey";
        }

        for (var i = 0; i < userOverview.length; i++) {
            userOverview[i].style.color = "grey";
        }

        for (var i = 0; i < userOverviewNumber.length; i++) {
            userOverviewNumber[i].style.color = "black";
        }

        h1.style.color = "black";
        h4.style.color = "grey";
        attribution.style.color = "black";

        document.querySelector('head').innerHTML += '<style>body::after{background-color: #F8F9FE !important;}</style>';



    } else { //dark theme

        document.body.style.backgroundColor = "hsl(230, 17%, 14%)";
        h1.style.color = "white";
        h4.style.color = "#AEB2C9";

        for (var i = 0; i < cards.length; i++) {
            cards[i].style.backgroundColor = "hsl(228, 28%, 20%)";
        }

        for (var i = 0; i < cardsOverview.length; i++) {
            cardsOverview[i].style.backgroundColor = "hsl(228, 28%, 20%)";
        }

        for (var i = 0; i < h2.length; i++) {
            h2[i].style.color = "white";
        }

        for (var i = 0; i < h3.length; i++) {
            h3[i].style.color = "#AEB2C9";
        }

        for (var i = 0; i < user.length; i++) {
            user[i].style.color = "#AEB2C9";
        }

        for (var i = 0; i < userOverview.length; i++) {
            userOverview[i].style.color = "#AEB2C9";
        }

        for (var i = 0; i < userOverviewNumber.length; i++) {
            userOverviewNumber[i].style.color = "white";
        }

        attribution.style.color = "white";
        

        document.querySelector('head').innerHTML += '<style>body::after{background-color: #20222F !important;}</style>';

    }
    console.log(document.body.style.backgroundColor)
}