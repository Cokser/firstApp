function menu(){
	var click_button = document.getElementById('main_menu_button');
	click_button.addEventListener('click', function(){
		// change_style(click_button);
		document.getElementsByClassName('menu_list').className = 'ul_opened';
	},false);
}
// function change_style(click_button){
// 	var menu_class = document.getElementsByClassName('menu_list');
// 	menu_class.className = 'ul_opened';
// 	console.log(menu_class);

// 	// } else {
// 	// 	clicked === 1;
// 	// 	document.getElementsByClassName('ul_opened').className = 'menu_list';
// 	// }
// }
menu();