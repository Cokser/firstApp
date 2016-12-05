{
	function Slider() {
		this.currentSlide = document.getElementById('active_slide');
		this.slides = document.getElementsByClassName('slide');
		this.currentButton = document.getElementById('active_button');
		this.buttons = document.getElementsByClassName('slider_nav_button');
	}

	function initSlider(){
		var bombitSlider = new Slider();
		setButtonEvents( bombitSlider );
		startSliderTimer(bombitSlider);
		bombitSlider.getCurrentValues();
		bombitSlider.showCurrentSlide();
	}

	function startSliderTimer(bombitSlider) {
		bombitSlider.sliderTimer = setInterval(function() {
			bombitSlider.coverCurrentSlide();
			bombitSlider.getCurrentValues();
			bombitSlider.swithcSlide();
			bombitSlider.showCurrentSlide();
		}, 2500);
	}
	Slider.prototype.getCurrentValues = function() {
		this.currentSlide = document.getElementById('active_slide');
		this.currentButton = document.getElementById('active_button');
		var slidesArray = this.slides;
		var buttonsArray = this.buttons;
		for (var i = 0; i < slidesArray.length; i++) {
			if( slidesArray[i] == this.currentSlide && buttonsArray[i] == this.currentButton ) {
				this.currentSlide = slidesArray[i];
				this.currentButton = buttonsArray[i];
			}
		}
	}

	Slider.prototype.showCurrentSlide = function(){
		this.currentSlide.style.display = 'block';
	}

	Slider.prototype.coverCurrentSlide = function(){
		this.currentSlide.style.display = 'none';
	}


	Slider.prototype.swithcSlide = function(){
		var slidesArray = this.slides;
		var buttonsArray = this.buttons;

		for (var i = 0; i < buttonsArray.length; i++) {
			if ( buttonsArray[i] == this.currentButton) {
				if ( this.currentSlide.id != slidesArray[i].id ) {
					this.currentSlide.id = ' ';
					this.currentButton.id = ' ';
					this.currentSlide = slidesArray[i];
					this.currentButton = buttonsArray[i];
					this.currentSlide.id = 'active_slide';
					this.currentButton.id = 'active_button';
					break;
				} 
				else if( buttonsArray[i] != buttonsArray[buttonsArray.length-1] ) {
					this.currentSlide.id = ' ';
					this.currentButton.id = ' ';
					this.currentSlide = slidesArray[i+1];
					this.currentButton = buttonsArray[i+1];
					this.currentSlide.id = 'active_slide';
					this.currentButton.id = 'active_button';
					break;
				}
				if ( this.currentButton == buttonsArray[buttonsArray.length-1] ) {
					this.currentSlide.id = ' ';
					this.currentButton.id = ' ';
					this.currentSlide = slidesArray[0];
					this.currentButton = buttonsArray[0];
					this.currentSlide.id = 'active_slide';
					this.currentButton.id = 'active_button';
					break;
				}
			}
		}
	}
	function setButtonEvents( bombitSlider ) {
		for (var i = 0; i < bombitSlider.buttons.length; i++) {
			bombitSlider.buttons[i].addEventListener( 'click', function(){
				clickEvent( bombitSlider );
			},false );
		}
	}

	function clickEvent( bombitSlider ){
		bombitSlider.currentButton = event.target;
		document.getElementById('active_button').id = ' ';
		clearInterval(bombitSlider.sliderTimer);
		bombitSlider.coverCurrentSlide();
		bombitSlider.swithcSlide();
		bombitSlider.getCurrentValues();
		bombitSlider.showCurrentSlide();
		startSliderTimer( bombitSlider );
	}
}