

function getFormvalue() {
    const name = document.getElementById('form1');
   for(let i=0; i<name.length; i++){
       if(name.elements[i].value !== 'Submit'){
           console.log(name.elements[i].value);
       }
   }
}