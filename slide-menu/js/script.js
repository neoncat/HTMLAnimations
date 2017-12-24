/*(function(){
    alert("Deu certo!");
})(); */

function slideMenu(){
    var mIn = document.getElementById("menu-in");
    var mOut = document.getElementById("menu-out");
    
    if(mOut.checked){
        mIn.checked = true;
    }else{
        mOut.checked = true;
    }
}