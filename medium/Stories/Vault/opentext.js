// JavaScript Document
function openedVault(y, x) {
	if (y === '46321') {
		x.text('You open the vault and escape. You set out to catch up to the one who stabbed you in the back. There will be hell to pay!');
	} else {
		x.text('incorrect password');
	}
}