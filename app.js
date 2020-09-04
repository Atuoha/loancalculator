// -------------------  LOAN CALCULATOR           -----------------   
const form = document.querySelector('#loan-form');
const amount_input = document.querySelector('#amount');
const interest_input =  document.querySelector('#interest');
const years = document.querySelector('#years');
const month_payment =  document.querySelector('#monthly-payment');
const total_payment	= document.querySelector('#total-payment')
const total_interest = document.querySelector('#total-interest');

loadallFunction();


function loadallFunction(){
form.addEventListener('submit',calc);
	
}

function calc(e){
	e.preventDefault();   

	const principal = parseFloat(amount_input.value);
	const calInterest = parseFloat(interest.value)/100/12;
	const calPayment = parseFloat(years.value) * 12;

	const x =  Math.pow(1 + calInterest, calPayment);
	const monthly = (principal*x*calInterest)/(x-1);;

	if(isFinite(monthly)){
		month_payment.value = monthly.toFixed(2);
		total_payment.value = (monthly*calPayment).toFixed(2) ;
		total_interest.value = ((monthly*calPayment) - principal).toFixed(2);
		document.querySelector('#results').style.display = 'none';
		document.querySelector('#loading').style.display = 'block';
		setTimeout(removeSpin,1000);
	}else{
		showError('Opps! There is an error somewhere');
	}
}

function showError(error){
	
	document.querySelector('#results').style.display = 'none';
	
	const Errordiv = document.createElement('div');
	const heading = document.querySelector('.heading');
	const card = document.querySelector('.card');

	Errordiv.appendChild(document.createTextNode(error));
	Errordiv.className = 'alert alert-danger';

	card.insertBefore(Errordiv,heading);

	setTimeout(removeError,3000);
}

function removeError(){
	document.querySelector('.alert').remove();
}

function removeSpin(){
	document.querySelector('#loading').style.display = 'none';
	document.querySelector('#results').style.display = 'block';

	
}




// -------------------  LOAN CALCULATOR           -----------------   
