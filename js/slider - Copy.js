
var buttons = document.getElementsByClassName('slider_nav_button');
var slider_id = document.getElementById('slider');
var button_id = document.getElementById('active_button');
setInterval( function(){
	var slider = document.getElementById("slider");
	var current_slide_id = slider.firstChild.nextSibling.id;
	switch ( current_slide_id ) {
		case "slide-1":
			document.getElementById("slide-1").id = "slide-2";
			button_id.id = ' ';
			button_id = buttons[1];
			slide_sync(button_id);
			break;
		case "slide-2":
			document.getElementById("slide-2").id = "slide-3";
			button_id.id = ' ';
			button_id = buttons[2];
			slide_sync(button_id);
			break;
		case "slide-3":
			document.getElementById("slide-3").id = "slide-4";
			button_id.id = ' ';
			button_id = buttons[3];
			slide_sync(button_id);
			break;
		case "slide-4":
			document.getElementById("slide-4").id = "slide-5";
			button_id.id = ' ';
			button_id = buttons[4];
			slide_sync(button_id);
			break;
		case "slide-5":
			document.getElementById("slide-5").id = "slide-1";
			button_id.id = ' ';
			button_id = buttons[0];
			slide_sync(button_id);
			break;
	}
}, 2500);
function slider_navigation(){
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener( 'click', function(){
			click_event();
		},false );
	}
}

function slide_sync(arg) {
	arg.id = 'active_button';
}
function click_event(){
	var clicked_button = event.target;
	slide_sync(clicked_button);
	
}

slider_navigation();