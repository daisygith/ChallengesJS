let hrefE = document.getElementById('w3r').href;
let hrefFlangE = document.getElementById('w3r').hreflang;
let relE = document.getElementById('w3r').rel;
let targetE = document.getElementById('w3r').target;
let typeE = document.getElementById('w3r').type;

function getAttributes(){
    console.log(hrefE);
    alert("href is " + hrefE);
    console.log(hrefFlangE);
    console.log(relE);
    console.log(targetE);
    console.log(typeE);
}