/* Custom scripts go here */

//IIFE - Immediately Invoked Function Expression
//AKA: Anonymous Self-Executing Function
(function()
{
    function Start()
    {
        console.log("App Started...");
       let clickMeButton = document.getElementById("clickMeButton");
       clickMeButton.addEventListener("click", ()=>
       {
           console.log("Click me button was clicked!");
       });
    }

    //Start();
    window.addEventListener("load", Start);
    
})();




