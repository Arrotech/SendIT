function myFunction() {
    var txt;
    if (confirm("Customer name : Harun Gachanja\nParcel id : XH-008\nParcel name : Shoes\nTelephone : (+254)7 568 564")) {
        txt = "You pressed OK!";
    } else {
        txt = "You pressed Cancel!";
    }
    document.getElementById("demo").innerHTML = txt;
}