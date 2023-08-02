function getpin(){
    const pin = generatepin();
    const pinstring = pin +'';
    if(pinstring.length === 4){
        return pin;
    }
    else{
        return getpin();
    }
}

function generatepin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getpin();
    // console.log(pin);

    // display pin
    const displaypinfield = document.getElementById('display-pin');
    displaypinfield.value = pin;
})


document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typednumberfield = document.getElementById('typed-numbers');
    const previoustypednumber =  typednumberfield.value;
    if(isNaN(number)){
        // console.log(number);
        if(number === 'C'){
            typednumberfield.value = '';

        }
        else if (number === '<'){
            const digits = previoustypednumber.split('');
            digits.pop();
            const remainingdigits = digits.join('');
            typednumberfield.value = remainingdigits;

        }
    }
    else{
      
        const previoustypednumber =  typednumberfield.value;
        const newtypednumber = previoustypednumber + number;
        typednumberfield.value = newtypednumber;
    }
    // console.log()
})

document.getElementById('verify-pin').addEventListener('click', function(){
   const displaypinfield = document.getElementById('display-pin');
   const currentpin = displaypinfield.value;

   const typednumberfield = document.getElementById('typed-numbers');
   const typednumber = typednumberfield.value;

   const pinsuccessmessage = document.getElementById('pin-success');

   const pinfailuremessage = document.getElementById('pin-failure');

   if (typednumber=== currentpin){
    
    pinsuccessmessage.style.display = 'block';
    pinfailuremessage.style.display = 'none';
   }
   else{
   
    pinfailuremessage.style.display = 'block';
    pinsuccessmessage.style.display = 'none';
   }
})