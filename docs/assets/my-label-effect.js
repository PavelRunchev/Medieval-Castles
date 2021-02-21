
document.querySelectorAll('.u-form-input')
.forEach(inp => inp.addEventListener('focus', focusLabelEffect));
document.querySelectorAll('.u-form-input')
	.forEach(inp => inp.addEventListener('blur', focusLabelEffectAfter));

function focusLabelEffect(e) {
	e.preventDefault();
	let label = this.parentNode.querySelector('.u-form-label');
	label.style["-moz-transform"] = "scale(0.85,0.85) rotate(0)skew(0,0) translate(-30px,-40px)";
	label.style["-webkit-transform"] = "scale(0.85,0.85) rotate(0)skew(0,0) translate(-30px,-40px)";
	label.style["transform"] = "scale(0.85,0.85) rotate(0)skew(0,0) translate(-30px,-40px)";
	label.style["color"] = "#D94B6B";
	label.style["font-weight"] = "normal";
}

function focusLabelEffectAfter(e) {
	e.preventDefault();
	let label = this.parentNode.querySelector('.u-form-label');

	if(e.target.value !== undefined && e.target.value !== '') {
		label.style["-moz-transform"] = "scale(0.85,0.85) rotate(0)skew(0,0) translate(-30px,-40px)";
		label.style["-webkit-transform"] = "scale(0.85,0.85) rotate(0)skew(0,0) translate(-30px,-40px)";
		label.style["transform"] = "scale(0.85,0.85) rotate(0)skew(0,0) translate(-30px,-40px)";
		label.style["color"] = "#FDFDFD";
		label.style["font-weight"] = "normal";
	} else {
		label.style["-moz-transform"] = "scale(1,1) rotate(0)skew(0,0) translate(0px,0px)";
		label.style["-webkit-transform"] = "scale(1,1) rotate(0)skew(0,0) translate(0px,0px)";
		label.style["transform"] = "scale(1,1) rotate(0)skew(0,0) translate(0px,0px)";
		label.style["color"] = "#FDFDFD";
		label.style["font-weight"] = "300";
	}
}