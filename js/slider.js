{
	var buttons = document.getElementsByClassName('slider_nav_button');
	var slider_id = document.getElementById('slider');
	var timer;
	function slider() {
		timer = setInterval( function(){
			var button_id = document.getElementById('active_button');
			for (var i = 0; i < buttons.length; i++) {
				if (button_id == buttons[i]) {
					slideSync(buttons[i]);
				}
			}
		}, 2000);
	}

	function sliderNavigation(){
		for (var i = 0; i < buttons.length; i++) {
			buttons[i].addEventListener( 'click', function(){
				clickEvent();
			},false );
		}
	}

	function slideSync(arg) {
		var slides_arr = ["slide-1", "slide-2", "slide-3", "slide-4", "slide-5"];
		var slider = document.getElementById("slider");
		var current_slide_id = slider.firstChild.nextSibling.id;
		for (var i = 0; i < buttons.length; i++) {
			if (buttons[i] == arg ) {
				for (var j = 0; j < slides_arr.length; j++) {
					if ( i == j ) {
						if ( current_slide_id != slides_arr[j] ) {
							slider.firstChild.nextSibling.id = slides_arr[j];
							document.getElementById(slides_arr[j]).id = slides_arr[j];
							arg.id = ' ';
							buttons[i].id = 'active_button';
							break;
						}
						if (buttons[i] != buttons[buttons.length-1]) {
							document.getElementById(slides_arr[j]).id = slides_arr[j+1];
							arg.id = ' ';

							buttons[i+1].id = 'active_button';
						} else {
							document.getElementById(slides_arr[j]).id = slides_arr[0];
							arg.id = ' ';
							buttons[0].id = 'active_button';
						}
						break;
					}
				}
			}
		}
	}

	function clickEvent(){
		var clicked_button = event.target;
		for (var i = 0; i < buttons.length; i++) {
			if ( clicked_button == buttons[i] ) {
				clearInterval(timer);
				slider();
				document.getElementById('active_button').id = ' ';
				slideSync( buttons[i] );
			}
		}
	}
	slider();
	sliderNavigation();
}