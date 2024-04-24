
        // Import the functions you need from the SDKs you need
        /*import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
        import { getDatabase, set , ref } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";
        import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";

        const firebaseConfig = {
          apiKey: "AIzaSyCQEExxqTg-a14xmn_kRFv493j1KcxkQeY",
          authDomain: "kodlabbet-ff322.firebaseapp.com",
          databaseURL: "https://kodlabbet-ff322-default-rtdb.europe-west1.firebasedatabase.app",
          projectId: "kodlabbet-ff322",
          storageBucket: "kodlabbet-ff322.appspot.com",
          messagingSenderId: "454506529486",
          appId: "1:454506529486:web:6ac3979e582d4fe1a7c69f",
          measurementId: "G-KQZ9HXV5HY"
        };
      
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        const db = getDatabase();
        const auth = getAuth(app);

    
       
 
    

        var createAccount = firebase.database().ref("createaccount");


        form.addeventlistener("submit", function(e))
        {
            valideralösen();
        }
        
        function valideralösen()
        {
            e.preventDefault();
            var numbers = /[0-9]/g;
            var lowerCaseLetters = /[a-z]/g;
            var upperletters = /[A-Z]/g;

            var input = document.getElementById("password");
            var bokstav = document.getElementById("bokstav");
            var storbkstv = document.getElementById("storbkstv");
            var nmr = document.getElementById("nmr");
            var längd = document.getElementById("längd");
            var maxlängd = document.getElementById("maxlängd");

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

            if (input.value.match(lowerCaseLetters))
            {
                bokstav.classList.remove("invalid");
                bokstav.classList.add("valid");
            }

            if(input.value.match(upperletters))
            {
                storbkstv.classList.remove("invalid");
                storbkstv.classList.add("valid");
            }
            else 
            {
                storbkstv.classList.remove("valid");
                storbkstv.classList.add("invalid");
            }

            if(input.value.match(numbers))
            {
                nmr.classList.remove("invalid");
                nmr.classList.add("valid");
            }
            else
            {
                nmr.classList.remove("valid");
                nmr.classList.add("invalid");
            }
            if(input.value.length > 20)
            {
                maxlängd.classList.remove("valid");
                maxlängd.classList.add("invalid");
            }


            
        }
    */