let table = document.getElementById('sampleTable');

function insert_Row(){
    let row = table.insertRow(-1);

    let c2 = row.insertCell(-1);
    let c1 = row.insertCell(0);

    c1.innerText="Row 3 cell1";
    c2.innerText="Row 3 cell2";
}