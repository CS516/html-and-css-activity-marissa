/* Plain Old JavaScript */
window.onload = function() {
	
	// Paragraph listeners
	var paras = document.getElementsByTagName("p");
	for(var i = 0; i < paras.length; i++) {
		paras[i].onmouseover = function() {
			this.style.color = "red";
		}
		paras[i].onmouseleave = function() {
			this.style.color = "blue";
		}
	}
	
	// Section listeners for collapse/uncollapse
	var sections = document.getElementsByTagName('section');

	for (var i = 0; i < sections.length; i++) {
		sections[i].addEventListener("click", function() {
			//var content = this.getElementsByTagName('p')[0];
			//var footer = this.querySelector('footer');
			var children = this.querySelectorAll(":not(:first-child)");
			for(var j = 0; j < children.length; j++) {
				if(children[j].style.display == 'none') {
					children[j].style.display = 'block';
				} else {
					children[j].style.display = 'none';
				}
			}
		});
	}
};

/* jQuery */
// $(document).ready(function() {
// 	$('section').click(function() {
// 		$(this).children().not("h3").toggle();
// 	});
// });
