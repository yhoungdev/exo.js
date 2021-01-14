// Exo.js is a simple js library for easy form valiadtion
// its Open source
// created by Obiabo Immanuel 
// to solve  problem of form validation in both big and small scale app
// created 10 Dec 2020

//now start script
console.warn('Exo.js has been linked successfully')
const Exo=()=>{
    let {name ,  mail , password , site}={
        name:document.querySelector('.name'),
        mail:document.querySelector('.mail'),
        password:document.querySelector('.pswrd'),
        site:document.querySelector('.site')
    }
    //hold error messages
    let {mailErr , nameErr , pswrdErr , siteErr} = {
        mailErr:document.querySelector('.mailMsg'),
        nameErr:document.querySelector('.nameMsg'),
        pswrdErr:document.querySelector('.pswrdMsg'),
        siteErr:document.querySelector('.siteMsg')
    }
    //now set listener for each of them
    mail.addEventListener('keyup', e => {
        let val=e.target.value;
        const regex=^(\w+)+\@(\w+)+\.(\w+){2,10}/ig ;
            //test if the email matches the reg ex pattern 
            if (val.match(regex)) {
                mailErr.style.color='green';
                mailErr.textContent='valid email address ';
                
            } //now check if the field is empty
             else if (val === "" || val === null) {
                mailErr.style.color='red';
                mailErr.innerHTML=' the email field cant be empty '
            }
            else {
                mailErr.style.color='red';
                mailErr.innerHTML=' this is not a valid email address '
            }
            
    })
    //now validate the password field 
    name.addEventListener('keyup', e => {
        let val=e.target.value;
         const pattern=/^[a-zA-Z0-9]+$/
            //now test if it contains nums and int
           if(val.match(pattern)) {
                nameErr.style.color='green'
                nameErr.textContent='you are good to go'
           } //check if its empty
           else if (val === null || val ==='') {
            nameErr.style.color='red'
            nameErr.textContent='the name field cant be empty '
           }
           
           else {
                nameErr.style.color='red'
                nameErr.textContent='user name cant have symbols in it '
           }
    })
    //now check for password fielf
    password.addEventListener('keyup', e => {
        const val=e.target.value;
        const pattern=/[0-9a-zA-Z]{6}/
         //check if password is not upto 8 characters
            if (val.match(pattern)) {
                pswrdErr.style.color='rgb(224, 184, 3)'
                pswrdErr.textContent=' weak password '
            }//check if its empty
            else if (val === '' || val === null){
                pswrdErr.style.color='red'
                pswrdErr.textContent='password field must be filled '
            } 
            //test for a strong or more secured password
            else if (val.match(/^[a-zA-Z0-9]+\.\-/)){
                pswrdErr.style.color='green'
                pswrdErr.textContent='strong password  '
            }
            
            else {
                pswrdErr.style.color='red'
                pswrdErr.textContent='password must be greater than 6 characters '
            }
    })
    
    //mach for site 
    site.addEventListener('keyup', e => {
        const val=e.target.value;
        const pattern=/^www\.[a-zA-Z0-9]+\.com$/
        //test if it matches the www.siteUrl.com
            if(val.match(pattern)){
                siteErr.style.color='green'
                siteErr.textContent=' valid URl '
            }//now test match for www.siteUrl.com.ng
            else if( val.match(/^www\.[a-zA-Z0-9]+\.com\.ng/)){
                siteErr.style.color='green'
                siteErr.textContent=`valid URL `
            } 
            else {
                siteErr.style.color='red'
                siteErr.textContent=`this is not a valid URL`

            }
    })
    
}
window.addEventListener('load',Exo());
