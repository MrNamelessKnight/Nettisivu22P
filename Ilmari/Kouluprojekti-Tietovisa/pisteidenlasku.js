const pelaajaNimi = document.getElementById("name").value;

let pisteet = 0;

function pisteidenLASKU(tehtäväluku, tehtävävastaus){
    const tehtävä = document.getElementById("kysymys" + tehtäväluku).value;

    if (tehtävä == tehtävävastaus){
        pisteet++;
    }
}
function näytäPISTEET(){
    document.getElementById("pisteet").innerHTML = pisteet;
}