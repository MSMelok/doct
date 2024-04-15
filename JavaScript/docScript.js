//              بِسْم اللَّه الرَّحْمن الرَّحِيم
//  وَعَلَّمَكَ مَا لَمْ تَكُن تَعْلَمُ ۚ وَكَانَ فَضْلُ ٱللَّهِ عَلَيْكَ عَظِيمًۭا

var sentenceParts = [];

function updateSentence() {
    document.getElementById('sentence').value = sentenceParts.join(' ').trim();
}

// =============Head Title Href JS=============

document.getElementById('headSubject').addEventListener('click', function () {
    window.location.href = './index.html';
});




// =============Custom User Input JS=============

function updateSentenceWithUserInput() {
    var userInput = document.getElementById('userInput').value;

    // Remove the user input from sentenceParts if it's already there
    var userInputIndex = sentenceParts.indexOf(userInput);
    if (userInputIndex !== -1) {
        sentenceParts.splice(userInputIndex, 1);
    }

    // Add the user input to sentenceParts with space, hyphen, and space
    sentenceParts.push(userInput + ' - ');

    updateSentence();
}

// Function to clear the user input
function clearUserInput() {
    var userInput = document.getElementById('userInput');
    userInput.value = '';
    updateSentence();
}

// Rest of your existing code for checkboxes and textarea

// Add an event listener to the user input element
document.getElementById("userInput").addEventListener("input", updateSentence);

// Add event listeners to checkboxes
var checkboxes = document.getElementsByName("checkbox");
for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("change", updateSentence);
}

// Add an event listener to the clear button
document.getElementById("clearButton").addEventListener("click", clearUserInput);




// =============Alert JS=============

$(document).ready(function () {
    function hideAlert() {
        $(".alert").fadeOut();
    }

    setTimeout(hideAlert, 15000); // 30 seconds
});


// =============iFrame JS=============

function toggleIframe() { //chatbot iframe
    var iframeContainer = document.getElementById('iframeContainer2');
    iframeContainer.style.display = (iframeContainer.style.display === 'none' || iframeContainer.style.display === '') ? 'block' : 'none';
}

// =============the main two buttons and the alert message JS=============

function reloadPage() {
    window.location.reload();
}

function copyToClipboard() {
    var textarea = document.getElementById('sentence');
    textarea.select();
    document.execCommand('copy');
    alertFunction(); // Call the alertFunction to display the alert
}

function alertFunction() {
    var x = document.getElementById("alertMessage");
    x.className = "show";
    setTimeout(function () {
        x.className = x.className.replace("show", "");
    }, 3000);
}


//MAIN BOX(ES) FUNCTIONS BELOW //

// MAIN BOX 01 FUNCTION [Call Info]
function togglemainCheckbox01Options() {
    var mainCheckbox01Checkbox = document.getElementById('mainCheckbox01');
    var mainCheckbox01Options = document.getElementById('mainCheckbox01Options');

    if (mainCheckbox01Checkbox.checked) {
        mainCheckbox01Options.style.display = 'block';
    } else {
        mainCheckbox01Options.style.display = 'none';
    }
    updateSentence();
}


// MAIN BOX 02 FUNCTION [Call Flow]
function togglemainCheckbox02Options() {
    var mainCheckbox02Checkbox = document.getElementById('mainCheckbox02');
    var mainCheckbox02Options = document.getElementById('mainCheckbox02Options');

    if (mainCheckbox02Checkbox.checked) {
        mainCheckbox02Options.style.display = 'block';
    } else {
        mainCheckbox02Options.style.display = 'none';
    }
    updateSentence();
}

// MAIN BOX 03 FUNCTION [C.O.S Actions]
function togglemainCheckbox03Options() {
    var mainCheckbox03Checkbox = document.getElementById('mainCheckbox03');
    var mainCheckbox03Options = document.getElementById('mainCheckbox03Options');

    if (mainCheckbox03Checkbox.checked) {
        mainCheckbox03Options.style.display = 'block';
    } else {
        mainCheckbox03Options.style.display = 'none';
    }
    updateSentence();
}

// MAIN BOX 04 FUNCTION [Credit Added]
function togglemainCheckbox04Options() {
    var mainCheckbox04Checkbox = document.getElementById('mainCheckbox04');
    var mainCheckbox04Options = document.getElementById('mainCheckbox04Options');

    if (mainCheckbox04Checkbox.checked) {
        mainCheckbox04Options.style.display = 'block';
    } else {
        mainCheckbox04Options.style.display = 'none';
    }
    updateSentence();
}

// MAIN BOX 05 FUNCTION [Payment Collected]
function togglemainCheckbox05Options() {
    var mainCheckbox05Checkbox = document.getElementById('mainCheckbox05');
    var mainCheckbox05Options = document.getElementById('mainCheckbox05Options');

    if (mainCheckbox05Checkbox.checked) {
        mainCheckbox05Options.style.display = 'block';
    } else {
        mainCheckbox05Options.style.display = 'none';
    }
    updateSentence();
}

// MAIN BOX 06 FUNCTION [Service Restoration Options]
function togglemainCheckbox06Options() {
    var mainCheckbox06Checkbox = document.getElementById('mainCheckbox06');
    var mainCheckbox06Options = document.getElementById('mainCheckbox06Options');

    if (mainCheckbox06Checkbox.checked) {
        mainCheckbox06Options.style.display = 'block';
    } else {
        mainCheckbox06Options.style.display = 'none';
    }
    updateSentence();
}

// MAIN BOX 07 FUNCTION [Optimum ID Actions]
function togglemainCheckbox07Options() {
    var mainCheckbox07Checkbox = document.getElementById('mainCheckbox07');
    var mainCheckbox07Options = document.getElementById('mainCheckbox07Options');

    if (mainCheckbox07Checkbox.checked) {
        mainCheckbox07Options.style.display = 'block';
    } else {
        mainCheckbox07Options.style.display = 'none';
    }
    updateSentence();
}

// MAIN BOX 08 FUNCTION [Transfer for Resolution]
function togglemainCheckbox08Options() {
    var mainCheckbox08Checkbox = document.getElementById('mainCheckbox08');
    var mainCheckbox08Options = document.getElementById('mainCheckbox08Options');

    if (mainCheckbox08Checkbox.checked) {
        mainCheckbox08Options.style.display = 'block';
    } else {
        mainCheckbox08Options.style.display = 'none';
    }
    updateSentence();
}

// MAIN BOX 09 FUNCTION [Dropped Call Actions]
function togglemainCheckbox09Options() {
    var mainCheckbox09Checkbox = document.getElementById('mainCheckbox09');
    var mainCheckbox09Options = document.getElementById('mainCheckbox09Options');

    if (mainCheckbox09Checkbox.checked) {
        mainCheckbox09Options.style.display = 'block';
    } else {
        mainCheckbox09Options.style.display = 'none';
    }
    updateSentence();
}



// SUB-OPTIONS FUNCTIONS BELOW//

// [C.O.S Ations] SUB-OPTIONS 03 BELOW//
// SUB-BOX 0For03 FUNCTION [Price Reduction]
function togglesubMainCheckbox0For03Options() {
    var subMainCheckbox0For03Checkbox = document.getElementById('subMainCheckbox0For03');
    var subMainCheckbox0For03Options = document.getElementById('subMainCheckbox0For03Options');

    if (subMainCheckbox0For03Checkbox.checked) {
        subMainCheckbox0For03Options.style.display = 'block';
    } else {
        subMainCheckbox0For03Options.style.display = 'none';
    }
    updateSentence();
}

// SUB-BOX 1For03 FUNCTION [TV Package Upgrade]
function togglesubMainCheckbox1For03Options() {
    var subMainCheckbox1For03Checkbox = document.getElementById('subMainCheckbox1For03');
    var subMainCheckbox1For03Options = document.getElementById('subMainCheckbox1For03Options');

    if (subMainCheckbox1For03Checkbox.checked) {
        subMainCheckbox1For03Options.style.display = 'block';
    } else {
        subMainCheckbox1For03Options.style.display = 'none';
    }
    updateSentence();
}

// SUB-BOX 2For03 FUNCTION [TV Package Downgrade]
function togglesubMainCheckbox2For03Options() {
    var subMainCheckbox2For03Checkbox = document.getElementById('subMainCheckbox2For03');
    var subMainCheckbox2For03Options = document.getElementById('subMainCheckbox2For03Options');

    if (subMainCheckbox2For03Checkbox.checked) {
        subMainCheckbox2For03Options.style.display = 'block';
    } else {
        subMainCheckbox2For03Options.style.display = 'none';
    }
    updateSentence();
}

// SUB-BOX 3For03 FUNCTION [OOL Package Upgrade]
function togglesubMainCheckbox3For03Options() {
    var subMainCheckbox3For03Checkbox = document.getElementById('subMainCheckbox3For03');
    var subMainCheckbox3For03Options = document.getElementById('subMainCheckbox3For03Options');

    if (subMainCheckbox3For03Checkbox.checked) {
        subMainCheckbox3For03Options.style.display = 'block';
    } else {
        subMainCheckbox3For03Options.style.display = 'none';
    }
    updateSentence();
}

// SUB-BOX 4For03 FUNCTION [OOL Package Downgrade]
function togglesubMainCheckbox4For03Options() {
    var subMainCheckbox4For03Checkbox = document.getElementById('subMainCheckbox4For03');
    var subMainCheckbox4For03Options = document.getElementById('subMainCheckbox4For03Options');

    if (subMainCheckbox4For03Checkbox.checked) {
        subMainCheckbox4For03Options.style.display = 'block';
    } else {
        subMainCheckbox4For03Options.style.display = 'none';
    }
    updateSentence();
}

//============================================================

// [Credit Added] SUB-OPTIONS 04 BELOW//
// SUB-BOX 0For04 FUNCTION [Appreciation Credit]
function togglesubMainCheckbox0For04Options() {
    var subMainCheckbox0For04Checkbox = document.getElementById('subMainCheckbox0For04');
    var subMainCheckbox0For04Options = document.getElementById('subMainCheckbox0For04Options');

    if (subMainCheckbox0For04Checkbox.checked) {
        subMainCheckbox0For04Options.style.display = 'block';
    } else {
        subMainCheckbox0For04Options.style.display = 'none';
    }
    updateSentence();
}

// SUB-BOX 1For04 FUNCTION [Collections Charges]
function togglesubMainCheckbox1For04Options() {
    var subMainCheckbox1For04Checkbox = document.getElementById('subMainCheckbox1For04');
    var subMainCheckbox1For04Options = document.getElementById('subMainCheckbox1For04Options');

    if (subMainCheckbox1For04Checkbox.checked) {
        subMainCheckbox1For04Options.style.display = 'block';
    } else {
        subMainCheckbox1For04Options.style.display = 'none';
    }
    updateSentence();
}

// SUB-BOX 2For04 FUNCTION [Late Fee]
function togglesubMainCheckbox2For04Options() {
    var subMainCheckbox2For04Checkbox = document.getElementById('subMainCheckbox2For04');
    var subMainCheckbox2For04Options = document.getElementById('subMainCheckbox2For04Options');

    if (subMainCheckbox2For04Checkbox.checked) {
        subMainCheckbox2For04Options.style.display = 'block';
    } else {
        subMainCheckbox2For04Options.style.display = 'none';
    }
    updateSentence();
}

// SUB-BOX 3For04 FUNCTION [Restore Fee]
function togglesubMainCheckbox3For04Options() {
    var subMainCheckbox3For04Checkbox = document.getElementById('subMainCheckbox3For04');
    var subMainCheckbox3For04Options = document.getElementById('subMainCheckbox3For04Options');

    if (subMainCheckbox3For04Checkbox.checked) {
        subMainCheckbox3For04Options.style.display = 'block';
    } else {
        subMainCheckbox3For04Options.style.display = 'none';
    }
    updateSentence();
}









// SUB BOX 0-8 FUNCTION 
function togglesubMainCheckbox0of8Options() {
    var subMainCheckbox0Checkbox = document.getElementById('subMainCheckbox0');
    var subMainCheckbox0Options = document.getElementById('subMainCheckbox0Options');

    if (subMainCheckbox0Checkbox.checked) {
        subMainCheckbox0Options.style.display = 'block';
    } else {
        subMainCheckbox0Options.style.display = 'none';
    }
    updateSentence();
}
// SUB BOX 1-8 FUNCTION
function togglesubMainCheckbox1of8Options() {
    var subMainCheckbox1Checkbox = document.getElementById('subMainCheckbox1');
    var subMainCheckbox1Options = document.getElementById('subMainCheckbox1Options');

    if (subMainCheckbox1Checkbox.checked) {
        subMainCheckbox1Options.style.display = 'block';
    } else {
        subMainCheckbox1Options.style.display = 'none';
    }
    updateSentence();
}

// SUB BOX 2-8 FUNCTION
function togglesubMainCheckbox2of8Options() {
    var subMainCheckbox2Checkbox = document.getElementById('subMainCheckbox2');
    var subMainCheckbox2Options = document.getElementById('subMainCheckbox2Options');

    if (subMainCheckbox2Checkbox.checked) {
        subMainCheckbox2Options.style.display = 'block';
    } else {
        subMainCheckbox2Options.style.display = 'none';
    }
    updateSentence();
}

// SUB BOX 3-8 FUNCTION
function togglesubMainCheckbox3of8Options() {
    var subMainCheckbox3Checkbox = document.getElementById('subMainCheckbox3');
    var subMainCheckbox3Options = document.getElementById('subMainCheckbox3Options');

    if (subMainCheckbox3Checkbox.checked) {
        subMainCheckbox3Options.style.display = 'block';
    } else {
        subMainCheckbox3Options.style.display = 'none';
    }
    updateSentence();
}

// SUB BOX 4-8 FUNCTION
function togglesubMainCheckbox4of8Options() {
    var subMainCheckbox4Checkbox = document.getElementById('subMainCheckbox4');
    var subMainCheckbox4Options = document.getElementById('subMainCheckbox4Options');

    if (subMainCheckbox4Checkbox.checked) {
        subMainCheckbox4Options.style.display = 'block';
    } else {
        subMainCheckbox4Options.style.display = 'none';
    }
    updateSentence();
}

// SUB BOX 5-8 FUNCTION
// function togglesubMainCheckbox5of8Options() {
//     var subMainCheckbox5Checkbox = document.getElementById('subMainCheckbox5');
//     var subMainCheckbox5Options = document.getElementById('subMainCheckbox5Options');

//     if (subMainCheckbox5Checkbox.checked) {
//         subMainCheckbox5Options.style.display = 'block';
//     } else {
//         subMainCheckbox5Options.style.display = 'none';
//     }
//     updateSentence();
// }

// SUBs ABOVE=======================================================================


//=============================================

window.onload = function () {
    var checkboxes = document.getElementsByName('checkbox');
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].addEventListener('change', handleCheckboxChange);
    }
}


function handleCheckboxChange(event) {
    var checkbox = event.target;
    if (checkbox.checked) {
        if (sentenceParts.indexOf(checkbox.value) === -1) {
            sentenceParts.push(checkbox.value);
        }
    } else {
        var index = sentenceParts.indexOf(checkbox.value);
        if (index !== -1) {
            sentenceParts.splice(index, 1);
        }
    }
    updateSentence();
}