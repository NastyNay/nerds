var submit = document.querySelector(".submit");
var popup = document.querySelector(".modal-login");
var close = document.querySelector(".modal-close");
var username = popup.querySelector(".user-name-field");
var useremail = popup.querySelector(".user-email-field");
var form = popup.querySelector(".write-to-us-form");
var usermessage = popup.querySelector("textarea")

var isStorageSupport = true; 
var storage = "";

try {
  storage = localStorage.getItem("username");
} catch (err) {
  isStorageSupport = false;
}


submit.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    if (storage) {
      username.value = storage;
      useremail.focus();
    } else {
      username.focus();
    }
    // if (storage) {
    //   useremail.value = storage;
    //   usermessage.focus();
    // } else {
    //   useremail.focus();
    // }
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
  });

  form.addEventListener("submit", function (evt) { 
    if (!username.value || !useremail.value) {
    evt.preventDefault();
    popup.classList.add("modal-error");
  } else { if (isStorageSupport) {
    localStorage.setItem("username", username.value);
    localStorage.setItem("useremail", useremail.value);
    }
   }
  });

