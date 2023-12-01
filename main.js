const btn = document.querySelector(".button");
const results = document.querySelector(".result");
const speechRecog = window.speechRecognition || window.webkitSpeechRecognition;
const recog = new speechRecog();

recog.onstart = function () {
 console.log("You Can Speak Now");
};

recog.onresult = function (e) {
 var text = e.results[0][0].transcript;
 console.log(text);
 document.querySelector(".result").innerHTML = text;
};

function copy() {
 var range = document.createRange();
 range.selectNode(document.querySelector(".result"));
 window.getSelection().removeAllRanges();
 window.getSelection().addRange(range);
 document.execCommand("copy");
 window.getSelection().removeAllRanges();
 (function () {
  // data
  var clear;
  var msgDuration = 2000;
  var $msgSuccess = "Text Copied";
  var $msg = document.querySelector(".msg");
  var $btnSuccess = document.querySelector(".btn-success");

  // render message
  function render(message) {
   hide();

   switch (message) {
    case "success":
     $msg.classList.add("msg-success", "active");
     $msg.textContent = $msgSuccess;
     break;
   }
  }

  function timer() {
   clearTimeout(clear);
   clear = setTimeout(function () {
    hide();
   }, msgDuration);
  }

  function hide() {
   $msg.classList.remove("msg-success");
  }

  // bind events
  $btnSuccess.addEventListener("click", function () {
   render("success");
  });
  $msg.addEventListener("transitionend", timer);
 })();
}
