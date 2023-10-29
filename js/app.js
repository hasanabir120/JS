let increment = document.querySelector('#increment');
let decrement = document.querySelector('#decrement');
let cart = document.querySelector('#cart');


//Increment

increment.addEventListener('click', ()=>{
     let cartvalue = Number(cart.value);
    cart.value = ++cartvalue;

});

//Decrement

decrement.addEventListener('click', ()=>{
   let cartvalue =  Number(cart.value);
   cart.value = --cartvalue ;
   if(cartvalue >1){
    cart.value = --cartvalue;
   }

});


//Password toggle

let password_btn = document.querySelector('.password_box .btn');
let password_input = document.querySelector('.password_box .password');

password_btn.addEventListener('click', ()=>{
    
    password_input.type === 'password'? password_input.type ='text': password_input.type ='password';
});


let range = document.querySelector('#customRange1');
range.addEventListener('input', ()=>{
        document.querySelector('h2').innerHTML = range.value;
});
    setInterval(()=>{
        let date = new Date();
        document. querySelector('h2').innerHTML = date},1000);
        

   

