{
	function menu(){
		var clickButton = document.getElementById('main-menu-button');
		clickButton.addEventListener('click', function(){
			changeStyle(clickButton);
		},false);
	}
	function changeStyle(){
		if ( document.getElementById('menu-list') ) {
			document.getElementById('menu-list').id = 'ul-opened';
		} else {
			document.getElementById('ul-opened').id = 'menu-list';		
		}
	}
}