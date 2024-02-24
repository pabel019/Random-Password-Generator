const passwordBox = document.querySelector(".passwordField");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "!@#$%^&*()+={}[]|<>/?";
const allCharacter = upperCase + lowerCase + number + symbols;

const createPassword = () => {
	let pass = "";
	pass = pass + upperCase[Math.floor(Math.random() * upperCase.length)];
	pass = pass + lowerCase[Math.floor(Math.random() * lowerCase.length)];
	pass = pass + number[Math.floor(Math.random() * number.length)];
	pass = pass + symbols[Math.floor(Math.random() * symbols.length)];

	while (length > pass.length) {
		pass = pass + allCharacter[Math.floor(Math.random() * allCharacter.length)];
	}
	passwordBox.value = pass;
	openPopup_1();
};
// ---------------------------------------------------------
const copyPass = () => {
	passwordBox.select();
	// document.execCommand("copy");
	navigator.clipboard.writeText(passwordBox.value);

	document.querySelector(".popUp_2").classList.add("open-popUp");
	console.log("add open-popup");
};
// --------------------------------------------------------
const popUp_1 = document.querySelector(".popUp_1");
const openPopup_1 = () => {
	popUp_1.classList.add("open-popUp");
};
//---------------------------------------------------------
const closePopup_1 = () => {
	popUp_1.classList.remove("open-popUp");
};
// ----------------------------------------------------------
const popUp_2 = document.querySelector(".popUp_2");
const closePopup_2 = () => {
	popUp_2.classList.remove("open-popUp");
};
