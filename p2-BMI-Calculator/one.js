// const height = document.querySelector('.height')             //this usecase will give empty value, so better take it inside form
// const weight = document.querySelector('.weight')

const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault()            //this will prevent it from sending or posting any link b/c we dont want the submit button to send any value


    const height = parseInt(document.querySelector('#height').value);       // .value se hume value mil jati h, aur wo string me milti h isiliye hum use int me change krenge 
    const weight = parseInt(document.querySelector('#weight').value);
    const results =document.querySelector('#results');

    if(height<=0 || isNaN(height) || height===' '){
        results.innerHTML = `Please give valid height = ${height}`
    }
    else if(weight<=0 || isNaN(weight) || weight===' '){
        results.innerHTML = `Please give valid weight = ${weight}`
    } else{
        const bmi =(weight/((height* height)/10000)).toFixed(2)
        results.innerHTML = `<span> ${bmi} </span> `
    }

})