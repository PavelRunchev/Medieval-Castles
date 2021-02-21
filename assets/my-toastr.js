
document.querySelector('.c-sign-up-btn').addEventListener('click', myToastrSignUp);
document.querySelector('.c-sign-in-btn').addEventListener('click', myToastrSignIn);


function myToastrSignUp(e) {
	e.preventDefault();
	let name = this.parentNode.parentNode.querySelector('.u-form-content input[name="name"]');
	let username = this.parentNode.parentNode.querySelector('.u-form-content input[name="your-username"]');
	let email = this.parentNode.parentNode.querySelector('.u-form-content input[name="email"]');
	let password = this.parentNode.parentNode.querySelector('.u-form-content input[name="password"]');
	let repeatPassword = this.parentNode.parentNode.querySelector('.u-form-content input[name="password2"]');
	let isAgree = this.parentNode.parentNode.querySelector('.u-form-content .form-check-input');
	let errorArray = [];

	if(name.value === undefined || name.value === '') errorArray.push('Name field is empty!');
	if(username.value === undefined || username.value === '') errorArray.push('Username field is empty');
	if(email.value === undefined || email.value === '') errorArray.push('Email field is empty!');
	if(password.value === undefined || password.value === '') errorArray.push('Password field is empty!');
	if(repeatPassword.value === undefined || repeatPassword.value === '') errorArray.push('Repeat password is empty!');

	if(password.value !== repeatPassword.value) errorArray.push('Passwords is not match!');
	if(isAgree.checked === false) errorArray.push("You aren't agree to the terms!");

	toastrAnimation();

	if(errorArray.length === 0) {
		document.querySelector('.c-toastr-title').style["background"] = "linear-gradient(rgba(0,183,74, 0.25), rgba(0, 183, 74, 0.1))";
		document.querySelector('.c-toastr-body').style["background"] = "linear-gradient(rgba(0, 183, 74, 0.1), rgba(0,183,74, 0))";
		document.querySelector('.c-toastr-title h3').textContent = "You have been registered Successfully!";
		document.querySelector('.c-toastr-title h3').style["font-weight"] = "300";
		document.querySelector('.fa-check-circle').style["display"] = "block";
		document.querySelector('.fa-check-circle').style["color"] = "#00B74A";
		document.querySelector('.fa-times-circle').style["display"] = "none";

		errorArray = [];
		name.value = "", username.value = "", email.value = "", password.value = "", repeatPassword.value = "";
	} else {
		document.querySelector('.c-toastr-title').style["background"] = "linear-gradient(rgba(217,75,107, 0.65), rgba(217, 75, 107, 0.35))";
		document.querySelector('.c-toastr-body').style["background"] = "linear-gradient(rgba(217, 75, 107, 0.35), rgba(217,75,107, 0))";
		document.querySelector('.c-toastr-title h3').textContent = "Sign up is failed!";
		document.querySelector('.c-toastr-title h3').style["font-weight"] = "bold";
		document.querySelector('.fa-times-circle').style["display"] = "block";
		document.querySelector('.fa-times-circle').style["color"] = "#D94B6B";
		document.querySelector('.fa-check-circle').style["display"] = "none";
	}
}

function myToastrSignIn(e) {
	e.preventDefault();
	let username = this.parentNode.parentNode.querySelector('.u-form-content input[name="username"]');
	let password = this.parentNode.parentNode.querySelector('.u-form-content input[name="password1"]');
	let loadSpinner = document.querySelector('.fa-spinner');
	let errorArray = [];
	loadSpinner.style["opacity"] = "1";

	if(username.value === undefined || username.value === '') errorArray.push('field username is empty!');
	if(password.value === undefined || password.value === '') errorArray.push('field password is empty!');

	setTimeout(function() {
		toastrAnimation();
		if(errorArray.length === 0) {
			document.querySelector('.u-form-btn-dissmis').click();
			document.querySelector('.c-toastr-title').style["background"] = "linear-gradient(rgba(0,183,74, 0.25), rgba(0, 183, 74, 0.1))";
			document.querySelector('.c-toastr-body').style["background"] = "linear-gradient(rgba(0, 183, 74, 0.1), rgba(0,183,74, 0))";
			document.querySelector('.c-toastr-title h3').textContent = "You login Successfully!";
			document.querySelector('.c-toastr-title h3').style["font-weight"] = "300";
			document.querySelector('.fa-check-circle').style["display"] = "block";
			document.querySelector('.fa-check-circle').style["color"] = "#00B74A";
			document.querySelector('.fa-times-circle').style["display"] = "none";
		
			errorArray = [];
			username.value = "", password.value = "";
		} else {
			document.querySelector('.c-toastr-title').style["background"] = "linear-gradient(rgba(217,75,107, 0.65), rgba(217, 75, 107, 0.35))";
			document.querySelector('.c-toastr-body').style["background"] = "linear-gradient(rgba(217, 75, 107, 0.35), rgba(217,75,107, 0))";
			document.querySelector('.c-toastr-title h3').textContent = "You login is failed!";
			document.querySelector('.c-toastr-title h3').style["font-weight"] = "bold";
			document.querySelector('.fa-times-circle').style["display"] = "block";
			document.querySelector('.fa-times-circle').style["color"] = "#D94B6B";
			document.querySelector('.fa-check-circle').style["display"] = "none";
		}

		loadSpinner.style["opacity"] = "0";
	}, 2500);
}

function toastrAnimation() {
	let toastr = document.querySelector('.c-toastr');
	toastr.style["display"] = "block";
	toastr.animate([
		{ opacity: '0' },
		{ opacity: '0.5' },
		{ opacity: '1' },
		{ opacity: '1' },
		{ opacity: '1' },
		{ opacity: '1' },
		{ opacity: '1' },
		{ opacity: '1' },
		{ opacity: '1' },
		{ opacity: '0.5' },
		{ opacity: '0',
		 	display: 'none' }
		], {
			duration: 5000,
			easeing: "ease-out",
			delay: 300,
			fill: "forwards",
	});
}

