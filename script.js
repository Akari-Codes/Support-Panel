const authvault = [{"code":"240869"},{"code":"696969"}]
  function authorise() {
    var accesscode = document.getElementById("accesscode").value;
    var authveri = false
    if(accesscode == authvault[0]["code"]) {var authveri = true};
    if(accesscode == authvault[1]["code"]) {var authveri = true}
    if(authveri == true) {document.getElementById("startup").style.display = "none";document.getElementById("messanger").style.display = "block";} else{
        document.getElementById("accesserror").innerText = "Failed to authenticate code, Is your Access Code Invalid or Incorrect!"
    }

  };