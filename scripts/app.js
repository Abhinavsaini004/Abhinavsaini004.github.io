"use strict";
"use strict";


(function (){

    function DisplayHomePage(){

        console.log("Called DisplayHomePage()");
        let AboutUsButton = document.getElementById("AboutUsBtn")
        AboutUsButton.addEventListener("click", function (){
            location.href="about.html";
        })

        MainParagraph.setAttribute("id", "MainParagraph");
        MainParagraph.setAttribute("class", "mt-3");
        MainParagraph.TextContent="This is my paragraph";
        MainContent.appendChild(MainParagraph);

        let FirstString = " This is";
        let SecondString = `${FirstString} the main paragraph`;
        MainParagraph.textContent = SecondString;
        MainContent.appendChild(MainParagraph);

        let DocumentBody = document.body;
        let Article = document.createElement("article");
        let ArticleParagraph =`<p id="ArticleParagraph" class="m-3"> This is my article paragraph</p>`;
        Article.setAttribute("class","container");
        Article.innerHTML = ArticleParagraph ;
        DocumentBody.appendChild(Article);


    }
    function DisplayProductPage(){

        console.log("Called DisplayProductPage()");
    }
    function DisplayAboutUsPage(){

        console.log("Called DisplayAboutUsPage()");
    }
    function DisplayContactPage(){

        console.log("Called DisplayContactPage()");
    }
    function DisplayServicePage(){

        console.log("Called DisplayServicePage()");
    }
    function Start(){
        console.log("App Started");

        switch (document.title){
            case "Home":
                DisplayHomePage
                break;
            case "Our Products":
                DisplayProductPage
                break;
            case "About Us":
                DisplayAboutUsPage
                break;
            case "Our Services":
                DisplayServicePagePage
                break;
            case "Contact Us":
                break;
        }
    }
    window.addEventListener("load", Start);
})()