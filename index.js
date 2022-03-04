
 

window.onload = function() {
    document.getElementById("intro").style.display = "inline-block";
    document.getElementById("question1").style.display = "none";
    document.getElementById("question2").style.display = "none";
    document.getElementById("question3").style.display = "none";
    document.getElementById("question4").style.display = "none";
    document.getElementById("question5").style.display = "none";
}

/**
 * hides intro and show question 1
 * 
 */
 function intro(){
    document.getElementById("start").style.display = "inline-block";
 }
 function startQuiz() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("question1").style.display = "inline-block";
}

/**
 * hides question1 shows question 2
 */
function question2() {
    document.getElementById("question1").style.display = "none";
    document.getElementById("question2").style.display = "inline-block";
}

/**
 * hides question2 shows question 3
 */
function question3() {
    document.getElementById("question2").style.display = "none";
    document.getElementById("question3").style.display = "inline-block";
}

/**
 * hides question3 shows question 4
 */
function question4() {
    document.getElementById("question3").style.display = "none";
    document.getElementById("question4").style.display = "inline-block";
}

/**
 * hides question4 shows question5
 */
function question5() {
    document.getElementById("question4").style.display = "none";
    document.getElementById("question5").style.display = "inline-block";
}

/**
 * hides question 5 shows results
 */
function results() {
    calculateResults()
    document.getElementById("question5").style.display = "none";
    document.getElementById("results").style.display = "inline-block";
}

/**
 * calculates and displays the results
 */
function validateRadio() {
    //this function will validate whether the radio was clicked or not. 
    //if yes, the function will return true, and the calculateresults will be performed. 
    //if no, the function will return false, and change the DOM to say "oi select something" and refuse to move on. 
    return false;
}

function calculateResults() {
    const radio1 = document.querySelectorAll('input[name="ques1"]');
    let q1Value;
    for (const rb of radio1) {
        if (rb.checked) {
            q1Value = rb.value;
            break;
        }
    }
    
    const radio2 = document.querySelectorAll('input[name="ques2"]');
    let q2Value;
    for (const rb of radio2) {
        if (rb.checked) {
            q2Value = rb.value;
            break;
        }
    }
    const radio3 = document.querySelectorAll('input[name="ques3"]');
    let q3Value;
    for (const rb of radio3) {
        if (rb.checked) {
            q3Value = rb.value;
            break;
        }
    }
    const radio4 = document.querySelectorAll('input[name="ques4"]');
    let q4Value;
    for (const rb of radio4) {
        if (rb.checked) {
            q4Value = rb.value;
            break;
        }
    }
    const radio5 = document.querySelectorAll('input[name="ques5"]');
    let q5Value;
    for (const rb of radio5) {
        if (rb.checked) {
            q5Value = rb.value;
            break;
        }
    }


  
    let total = Number(q1Value) + Number(q2Value);
    result = total ;
    
    if (result === 10) {
      msg = "You speak American English!";
    } else if (result === 5) {
      msg = "You speak British English";
    } else {
      msg = "Based on your results, its likely that you are neither British nor American Naitive speaker.";
    }
  
    document.getElementById("result").innerHTML = msg
  
  }
  