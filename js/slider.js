{
var buttons = document.getElementsByClassName('slider_nav_button');
var slider_id = document.getElementById('slider');
var timer;
function slider() {
	timer = setInterval( function(){
		var button_id = document.getElementById('active_button');
		switch ( button_id ) {
			case buttons[0]:
				slide_sync(button_id);
				break;
			case buttons[1]:
				slide_sync(button_id);
				break;
			case buttons[2]:
				slide_sync(button_id);
				break;
			case buttons[3]:
				slide_sync(button_id);
				break;
			case buttons[4]:
				slide_sync(button_id);
				break;
		}
	}, 7500);
}

function slider_navigation(){
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener( 'click', function(){
			click_event();
		},false );
	}
}

function slide_sync(arg) {
	var slider = document.getElementById("slider");
	var current_slide_id = slider.firstChild.nextSibling.id;
	switch ( arg ) {
	case buttons[0]:
		if (current_slide_id != "slide-1") {
			slider.firstChild.nextSibling.id = "slide-1";
			document.getElementById("slide-1").id = "slide-1";
			arg.id = ' ';
			buttons[0].id = 'active_button';
			break;
		}
		document.getElementById("slide-1").id = "slide-2";
		arg.id = ' ';
		buttons[1].id = 'active_button';
		break;
	case buttons[1]:
		if (current_slide_id != "slide-2") {
			slider.firstChild.nextSibling.id = "slide-2";
			document.getElementById("slide-2").id = "slide-2";
			arg.id = ' ';
			buttons[1].id = 'active_button';
			break;
		}
		document.getElementById("slide-2").id = "slide-3";
		arg.id = ' ';
		buttons[2].id = 'active_button';
		break;
	case buttons[2]:
		if (current_slide_id != "slide-3") {
			slider.firstChild.nextSibling.id = "slide-3";
			document.getElementById("slide-3").id = "slide-3";
			arg.id = ' ';
			buttons[2].id = 'active_button';
			break;
		}
		document.getElementById("slide-3").id = "slide-4";
		arg.id = ' ';
		buttons[3].id = 'active_button';
		break;
	case buttons[3]:
		if (current_slide_id != "slide-4") {
			slider.firstChild.nextSibling.id = "slide-4";
			document.getElementById("slide-4").id = "slide-4";
			arg.id = ' ';
			buttons[3].id = 'active_button';
			break;
		}
		document.getElementById("slide-4").id = "slide-5";
		arg.id = ' ';
		buttons[4].id = 'active_button';
		break;
	case buttons[4]:
		if (current_slide_id != "slide-5") {
			slider.firstChild.nextSibling.id ="slide-5";
			document.getElementById("slide-5").id = "slide-5";
			arg.id = ' ';
			buttons[4].id = 'active_button';
			break;
		}
		document.getElementById("slide-5").id = "slide-1";
		arg.id = ' ';
		buttons[0].id = 'active_button';
		break;
	}
}

function click_event(){
	var clicked_button = event.target;
	for (var i = 0; i < buttons.length; i++) {
		if ( clicked_button == buttons[i] ) {
			clearInterval(timer);
			slider();
			document.getElementById('active_button').id = ' ';
			slide_sync( buttons[i] );
		}
	}
}
slider();
slider_navigation();
}