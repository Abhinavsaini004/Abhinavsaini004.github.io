"use strict";

(function () {

    function DisplayHomePage() {
        console.log("Called DisplayHomePage()");

        // Redirect to the "about.html" page when the "About Us" button is clicked
        let AboutUsButton = document.getElementById("DisplayHomePage");
        AboutUsButton.addEventListener("click", function() {
            window.location.href = "about.html";
        });

        // Create a new paragraph element
        let MainParagraph = document.createElement("p");
        MainParagraph.setAttribute("id", "MainParagraph");
        MainParagraph.setAttribute("class", "mt-3");
        MainParagraph.textContent = "This is my paragraph";

        // Get the main content element
        let MainContent = document.querySelector("main");

        // Append the paragraph to the main content
        MainContent.appendChild(MainParagraph);

        let FirstString = "This is";
        let SecondString = `${FirstString} the main paragraph`;
        MainParagraph.textContent = SecondString;

        let DocumentBody = document.body;
        let Article = document.createElement("article");
        let ArticleParagraph = `<p id="ArticleParagraph" class="m-3">This is my article paragraph</p>`;
        Article.setAttribute("class", "container");
        Article.innerHTML = ArticleParagraph;
        DocumentBody.appendChild(Article);
    }

    function DisplayProductPage() {

        console.log("Called DisplayProductPage()");
    }

    function DisplayAboutUsPage() {

        console.log("Called DisplayAboutUsPage()");
    }

    function DisplayContactPage() {

        console.log("Called DisplayContactPage()");
    }

    function DisplayServicePage() {

        console.log("Called DisplayServicePage()");
    }

    function Start() {
        console.log("App Started");

        switch (document.title) {
            case "Home":
                DisplayHomePage();
                break;
            case "Our Products":
                DisplayProductPage();
                break;
            case "About Us":
                DisplayAboutUsPage();
                break;
            case "Our Services":
                DisplayServicePage();
                break;
            case "Contact Us":
                DisplayContactPage();
                break;
        }
    }

    window.addEventListener("load", Start);
})();