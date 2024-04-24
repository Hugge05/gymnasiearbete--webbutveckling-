

/*
document.querySelector(".starsidaLogo").addEventListener("scroll", function()
{
    document.querySelector(".startLogo").classList.toggle("active");
    document.querySelector(".startsidaLogo").classList.toggle("active");
    document.querySelector(" .startsidaLogo div")[0].classList.toggle("active");
}); */
// Header sida 2 

// Header sida 3
//document.querySelector(".meny").addEventListener("click", function()
{
    document.querySelector(".block").classList.toggle("active");
    document.querySelector(".meny").classList.toggle("active");
    document.querySelectorAll('.meny span')[0].classList.toggle("active");
//});

// Inloggning och skapa konto system



/*document.addEventListener("DOMContentLoaded", ()=> 
{
   const loginForm = document.querySelector("#login");
   //const createAccountForm = document.querySelector("#skapaKonto");

   document.querySelector("#linkCreateAccount").addEventListener("click", e =>
   {
    e.preventDefault();
   // loginForm.classList.add("form--hidden");
    createAccountForm.classList.remove("form-hidden");
   } )
   document.querySelector("#linkLoggain").addEventListener("click", e =>
   {
    e.preventDefault();
    loginForm.classList.remove("form--hidden");
    createAccountForm.classList.add("form-hidden");
   } )

   loginForm.addEventListener("submit", e => 
   {
    e.preventDefault();

    setFormMessage(loginForm, "error", "fel användarnamn eller Lösemnords kombo!");
   })
});

/*form = document.getElementById("form");
var inputEmail = document.getElementById("email");
var inputpassword = document.getElementById("password");
var bokstav = document.getElementById("bokstav");
var storbkstv = document.getElementById("storbkstv");
var nmr = document.getElementById("nmr");
var längd = document.getElementById("längd");
var maxlängd = document.getElementById("maxlängd");

form.addEventListener("submit", (event) =>
{
valideralösen();
validateEmail();

})

   

function valideralösen()
{
    event.preventDefault();
    var numbers = /[0-9]/g;

    if (input.value.length < 8 )
    {
        längd.classList.remove("valid");
        längd.classList.add("invalid");
    }
    else
    {
        längd.classList.remove("invalid");
        längd.classList.add("valid");
    }

    var lowerCaseLetters = /[a-z]/g;
    if (input.value.match(lowerCaseLetters))
    {
        bokstav.classList.remove("invalid");
        bokstav.classList.add("valid");
    }
    else
    {
        bokstav.classList.remove("valid");
        bokstav.classList.add("invalid");
    }
    var upperCaseLetters = /[A-Z]/g;

    if (input.value.match(upperCaseLetters))
    {
        storbkstv.classList.remove("invalid");
        storbkstv.classList.add("valid");
    }
    else
    {
        storbkstv.classList.remove("valid");
        storbkstv.classList.add("invalid");
    }
    if (input.value.match(numbers))
    {
        nmr.classList.remove("invalid");
        nmr.classList.add("valid");
    }
    else
    {
        nmr.classList.remove("valid");
        nmr.classList.add("invalid");
    }

    if (input.value.length > 20)
    {
        maxlängd.classList.remove("valid");
        maxlängd.classList.add("invalid");
    }
    else if (input.value.length < 20)
    {
        maxlängd.classList.remove("invalid");
        maxlängd.classList.add("valid");
    }
   
   
    if (input.Length >= 0)
    {
        event.preventDefault();
    }
    if (bokstav.classList.contains("valid") && storbkstv.classList.contains("valid") && nmr.classList.contains("valid") && längd.classList.contains("valid") && maxlängd.classList.contains("valid"))
    {
        document.querySelector(".korrektmeddelande").innerHTML = "Korrekt";
        document.querySelector(".felmeddelande").innerHTML = ""; 
        
        event.preventDefault();
    }
    else
    {
        document.querySelector(".felmeddelande").innerHTML = "Inkorrekt";
        document.querySelector(".korrektmeddelande").innerHTML = "";
    }
}    
} 

*/}