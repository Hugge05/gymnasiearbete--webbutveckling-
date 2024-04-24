<?php

if ($_POST['question1'] == "// Det här är en enkelrads kommentar" or "//Det här är en enkelrads kommentar")
{
    echo "Du hade rätt!";   

   header("Location: tutorial1.html");
}
else if ($_POST['question1'] == "// Det här är en enkelrads kommentar" or "//Det här är en enkelrads kommentar")
{
    echo "Du hade fel!";
    header("Location: tutorial1.html");
}

?>