function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var address = document.getElementById("address").value;
  var gender = document.getElementById("gender").value;
  var dob = document.getElementById("dob").value;
  var privacy = document.getElementById("privacy").checked;

  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("addressError").textContent = "";
  document.getElementById("genderError").textContent = "";
  document.getElementById("dobError").textContent = "";

  var isValid = true;

  if (name.length < 3) {
      document.getElementById("nameError").textContent = "Name must be at least 3 characters";
      isValid = false;
  }

  if (!email.includes("@") || !email.includes(".")) {
      document.getElementById("emailError").textContent = "Please enter a valid email address";
      isValid = false;
  }

  if (address.length < 5) {
      document.getElementById("addressError").textContent = "Address must be at least 5 characters";
      isValid = false;
  }

  if (gender === "") {
      document.getElementById("genderError").textContent = "Please select your gender";
      isValid = false;
  }

  var today = new Date();
  var dobDate = new Date(dob);
  if (dobDate >= today) {
      document.getElementById("dobError").textContent = "Please enter a valid date of birth";
      isValid = false;
  }

  if (!privacy) {
      alert("Please agree to the privacy policy");
      isValid = false;
  }

  if (isValid) {
      window.location.href = "index.html";
  }

  return false;
    }