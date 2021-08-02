let check = document.getElementById('switchTheme');


function themeCheckboxChange() {
	if (check.checked === true) {
		setSetting(2,'color','data-color-mode','dark');
	}
	else {
		setSetting(2,'color','data-color-mode','light');
	}
}