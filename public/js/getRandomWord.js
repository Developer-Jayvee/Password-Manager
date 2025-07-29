
const form = document.getElementById("passwordGenerateForm");
 let generatedPassword = document.querySelector('.password-body');
 const btn = form.querySelector('button');
btn.addEventListener('click' , function(e){
    btn.disabled = true;
    btn.style.backgroundColor = "#333";
    btn.querySelector('svg').style.animation = "spin_357 0.5s infinite linear";
    axios.get('/sendForm').then( ( result ) => {
        const generatedPass = result.data;
        setTimeout(() => {
            generatedPassword.innerText = generatedPass.toUpperCase();
            btn.querySelector('svg').style.animation = "none";
            btn.style.backgroundColor = "#222";
            btn.disabled = false;
        }, 1000);
    });
   
   


    // axios.get(`https://api.datamuse.com/words?sp=????`)
    // .then((result) => {
    //     const results = result.data;
    //     let randomIndex = Math.floor(Math.random() * results.length);

    //     if(results[randomIndex] != 'undefined'){
    //         let randomWord = results[randomIndex];
    //         generatedPassword.innerText = randomWord.word;
    //     }
        
    // })
    // .catch(error => alert('Error'));
});


