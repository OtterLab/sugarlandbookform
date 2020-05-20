// checkbox toggle
function travchbox() {
    var checkBox = document.getElementById("trav_ckbox");
    var text = document.getElementById("tr_office");
    if (checkBox.checked == true) {
        text.style.display = "grid";
    } 
    else {
        text.style.display = "none";
    }
}

function extchbox() {
    var checkBox = document.getElementById("ext_ckbox");
    var text = document.getElementById("ext_office");
    if (checkBox.checked == true) {
        text.style.display = "grid";
    } 
    else {
        text.style.display = "none";
    }
}

// video on hover
var helpVideo = document.getElementById("overlay");
var help = document.getElementById("helpvideo");

help.addEventListener('mouseenter', function(){
    helpVideo.play();
});

help.addEventListener('mouseleave', function(){
    helpVideo.load();
});

//set listener to submit buttom
var submit = document.getElementById('send_message');
submit.addEventListener("click", function (event) {
	event.preventDefault();
	//check Validity of all the required input
	var requiredInput = document.querySelectorAll("*[required]");
	console.log(requiredInput);

	for (var i = 0; i < requiredInput.length; i++) {
	  //if checkValidity === true, hide the error message next to the element
	  if (requiredInput[i].checkValidity()) {
	    requiredInput[i].nextElementSibling.classList.add('hidden');
	    //if checkValidity === false, show the error message next to the element
	  } else {
	    requiredInput[i].nextElementSibling.classList.remove('hidden');
	  }
	}
});