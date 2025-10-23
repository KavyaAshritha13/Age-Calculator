document.getElementById("jsForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const dob = new Date(document.getElementById("dob").value);
    if (!dob) {
        alert("Please select a valid date!");
        return;
    }

    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    alert("Your age is: " + age + " years.");
});
