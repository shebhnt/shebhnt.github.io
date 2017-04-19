// JavaScript Document
function openedVault(y, x) {
	if (y === '12345') {
		x.text('you opened the vault');
	} else {
		x.text('incorrect password');
	}
}