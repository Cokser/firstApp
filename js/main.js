{
	function menu(){
		var click_button = document.getElementById('main_menu_button');
		click_button.addEventListener('click', function(){
			changeStyle(click_button);
		},false);
	}
	function changeStyle(){
		if ( document.getElementsByClassName('menu_list')[0] ) {
			document.getElementsByClassName('menu_list')[0].className = 'ul_opened';
		} else {
			document.getElementsByClassName('ul_opened')[0].className = 'menu_list';		
		}
	}
	menu();
}