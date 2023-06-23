function openNewWindow() {
    checkWin = window.open("Main.html", "", "width=300, height=300, status=no");
}

function fillTestResults() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var emailAddress = document.getElementById('emailAddress').value;

    testResults.innerHTML = firstName + " " + lastName + " " + emailAddress;
}

function clearTestResults() {
    testResults.innerHTML = "Test Results Appear Here";
}