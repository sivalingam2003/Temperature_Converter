function CtoF(){
    var num = document.getElementById('CELCIUS').value;
    var ans = (num*(9/5))+32;
    document.getElementById('result').innerText = ans + " °F";

}