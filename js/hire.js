// google form submit to google sheets ======================>
document.querySelector("#googleFormSub").classList.remove("active")
// Open google form event listener ==========> 
let openForm = document.querySelector("#openForm").addEventListener("click", () => {
    document.querySelector("#googleFormSub").classList.add("active")
    
})

// Close google form event listener ==========> 
let closeForm = document.querySelector("#closeForm").addEventListener("click", () => {
    document.querySelector("#googleFormSub").classList.remove("active")
    
})


// google form submit to google sheets ======================>
document.querySelector("#whatApp").classList.remove("active")
// Open google form event listener ==========> 
let openChat = document.querySelector("#openChat").addEventListener("click", () => {
    document.querySelector("#whatApp").classList.add("active")
    
})

// Close google form event listener ==========> 
let closeChat = document.querySelector("#closeChat").addEventListener("click", () => {
    document.querySelector("#whatApp").classList.remove("active")
    
})










window.addEventListener("DOMContentLoaded", function () {
    // get the form elements defined in your form HTML above
  
    var form = document.getElementById("my-form");
    // var button = document.getElementById("my-form-button");
    var status = document.getElementById("status");
  
    // Success and Error functions for after the form is submitted
  
    function success() {
      form.reset();
      status.classList.add("success");
      status.innerHTML = "Thanks!";
    }
  
    function error() {
      status.classList.add("error");
      status.innerHTML = "Oops! There was a problem.";
    }
  
    // handle the form submission event
  
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request
  
  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }
  