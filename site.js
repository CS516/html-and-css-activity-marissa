
// window.onload = function () {


// 	document.getElementById("page-header").onclick = function() {
// 		this.innerHTML = "Hello";
// 	}

// 	var paras = document.getElementsByTagName("p");

// 	for(var i = 0; i < paras.length; i++) {
// 		paras[i].onmouseover = function() {
// 			this.style.color = "red";
// 		}
// 		paras[i].onmouseleave = function() {
// 			this.style.color = "blue";
// 		}

// 	}
	
// }



/* Plain Old JavaScript */
// window.onload = function() {

// 	// get all sections as array
// 	var sections = document.getElementsByTagName('section');

// 	// go through all sections
// 	for (var i = 0; i < sections.length; i++) {

// 		// add click listener to each section
// 		sections[i].addEventListener("click", function() {

// 			console.log(this);
// 			// find all but first child
// 			var children = this.querySelectorAll(":not(:first-child)");
// 			for(var j = 0; j < children.length; j++) {
// 				if(children[j].style.display == 'none') {
// 					children[j].style.display = 'block';
// 				} else {
// 					children[j].style.display = 'none';
// 				}
// 			}

// 		});
// 	}
// };

			//var content = this.getElementsByTagName('p')[0];
			//var footer = this.querySelector('footer');

/* jQuery */
$(document).ready(function() {
	$('section').click(function() {
		$(this).children().not("h3").toggle();
	});
});









