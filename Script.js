function login() {
  let name = document.getElementById("username").value;

  if (name === "") {
    alert("Please enter your name");
    return;
  }

  // STRING MESSAGE
  let message = "😎 We hacked successfully, " + name;

  document.getElementById("popupText").innerText = message;
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

