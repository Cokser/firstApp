{
	function menu(){
		var click_button = document.getElementById('main_menu_button');
		click_button.addEventListener('click', function(){
			changeStyle(click_button);
		},false);
	}
	function changeStyle(){
		if ( document.getElementById('menu_list') ) {
			document.getElementById('menu_list').id = 'ul_opened';
		} else {
			document.getElementById('ul_opened').id = 'menu_list';		
		}
	}
}