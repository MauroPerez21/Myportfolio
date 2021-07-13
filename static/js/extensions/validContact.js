class Message{
    constructor(user, email, phone, category,message){
        this.var0 = user;
        this.var1 = email;
        this.var2 = phone;
        this.var3 = category;
        this.var4 = message;
    }
}
class UM{
    send(){
		document.getElementById('form').action = '/';
	}
    message(message, type){
        const div = document.createElement('DIV');
        div.className = `alert alert-${type}`;
        div.appendChild(document.createTextNode(message));
        //Show in dom
        const parent = document.querySelector('.card-footer');
        const msg = document.querySelector('#errmsg');
        parent.insertBefore(div, msg);
        
        setTimeout(function(){
            document.querySelector('.alert').remove(); 
        }, 2000);
    }//end message 
    resetForm(){
        document.getElementById('form').reset();
    }
}

const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form');
const expressions = {
	
	user: /^[a-zA-ZÀ-ÿ\s]{3,20}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	phone: /^\d{7,14}$/, // 7 a 14 numeros.
	sms: /^[a-zA,-ZÀ?-ÿ-Z0-9_.+-\s]{12,1200}$/, // Letras, numeros, guion y guion_bajo
}
const message = {
	user: false,
    email: false,
    phone:false,
	sms: false
}
const formTrue = (e)=>{
	switch(e.target.name){
		case "user":
			fieldTrue(expressions.user, e.target, 'user');
		break;
		case "email":
			fieldTrue(expressions.email, e.target, 'email');
        break;
        case "phone":
			fieldTrue(expressions.phone, e.target, 'phone');
		break;
		case "sms":
			fieldTrue(expressions.sms, e.target, 'sms');
			
		break;
		
	}
}

const fieldTrue = (expression, input, field)=>{
	if(expression.test(input.value)){
		document.getElementById(`group-${field}`).classList.remove('form-group-wrong');
		document.getElementById(`group-${field}`).classList.add('form-group-right');
		//document.querySelector(`#group__${field} .form-err`).classList.remove('form-err-active');
		message[field] = true;
	}else{
		document.getElementById(`group-${field}`).classList.add('form-group-wrong');
		document.getElementById(`group-${field}`).classList.remove('form-group-right');
		//document.querySelector(`#group__${field} .form-err`).classList.add('form-err-active');
		message[field] = false;
	}
}

inputs.forEach((input)=>{
	input.addEventListener('keyup',formTrue);
	input.addEventListener('blur',formTrue);
});

form.addEventListener('submit', (e) => {
	const um = new UM();
			const conditions = document.getElementById('ok');
			const val0 = message.user;
			const val1 = message.email;
			const val2 = message.phone;
			const val3 = message.sms;
			const val4 = conditions.checked;
	if(val0 && val1 && val2 && val3 && val4){
		const user = document.getElementById('user').value;
		const email = document.getElementById('email').value;
		const phone = document.getElementById('phone').value;
		const category = document.getElementById('category').value;
		const message = document.getElementById('sms').value;

			//Class object calling
			const Msg = new Message(user, email, phone, category, message);
			console.log(Msg);
			//um.send();
			setTimeout(function(){
			um.message('Thank you'+ user +', I receive your message','success');
			}, 2000);	
			
	}else{
		e.preventDefault();
		if(!val4){	
		um.message('Accept terms and conditions','danger');
		//form.reset();
		setTimeout(function(){
            document.querySelector('.alert').remove(); 
        }, 2000);
		}
	}
});
document.getElementById('tandc').
addEventListener('click',
()=>{
	var state =
	document.getElementById('ok').checked = true;
	if(state == false){
		state.checked = true
	}
});
/*
gotohome = 
(req,res)=>{
    res.redirect('/home');
}
*/