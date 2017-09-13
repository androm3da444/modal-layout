// Get modal element
var modal = document.getElementById('simpleModal');
// Get open modal button
var modalBtn = document.getElementById('modalBtn');
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for open click
modalBtn.addEventListener('click', openModal);

// Listen for close click
closeBtn.addEventListener('click', closeModal);

// Listen for click anywhere outside modal window
window.addEventListener('click', outsideClick);

// Open modal function
function openModal(){
	//console.log(123);
	modal.style.display = 'block';
}

// Close modal function
function closeModal(){
	//console.log(123);
	modal.style.display = 'none';
}

// Function to close modal if outside click
function outsideClick(e){
	if(e.target == modal){
		//console.log(123);
		modal.style.display = 'none';
	}
}