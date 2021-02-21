
// footer subscribe form
document.querySelector('.c-footer-subscribe-btn').addEventListener('click', function() {
	const subscribeEmail = document.querySelector('.c-footer-input');

	if(subscribeEmail.value == '') {
		document.querySelector('.c-footer-subscribe-modal-title').textContent = 'You subscribe is failed!';
		document.querySelector('.c-footer-subscribe-modal-body').textContent = 'Field is empty!';
	} else if(!subscribeEmail.value.match('^[A-Za-z0-9._-]+@[a-z0-9.-]+.[a-z]{2,4}$')) {
		document.querySelector('.c-footer-subscribe-modal-title').textContent = 'You subscribe is failed!';
		document.querySelector('.c-footer-subscribe-modal-body').textContent = 'This is not valid email!';
	} else {
		document.querySelector('.c-footer-subscribe-modal-title').textContent = 'You subscribe is successfully!';
		document.querySelector('.c-footer-subscribe-modal-body').textContent = subscribeEmail.value;
	}

	subscribeEmail.value = "";
});


// Vote section
document.querySelectorAll('.c-vote-btn')
	.forEach(ev => ev.addEventListener('click', checkFavoriteCastle));


function checkFavoriteCastle(e) {
	e.preventDefault();
	let isChecked = false;
	let content = [];
	let checkboxes = this.parentNode.querySelectorAll('.form-check-input');
	for (let input of checkboxes) {
		if(input.checked) {
			isChecked = true;
			content.push(input.value);
		}

		input.checked = false;
	}

	if(isChecked) {
		document.querySelector('.c-vote-modal-title').textContent = 'You vote successfully!';
		document.querySelector('.c-vote-modal-body').innerHTML = content.map(c => c = `<p>${c}</p>`).join('\n');
	}	else {
		document.querySelector('.c-vote-modal-title').textContent = 'You vote is failed!';
		document.querySelector('.c-vote-modal-body').textContent = "You haven't voted!";
	}
}