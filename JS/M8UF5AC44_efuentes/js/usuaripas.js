function comprova(x,y,z) {
    if(x.value == "Ibai" && y.value == z.value) {
        if(y.value == 1234) {
            alert("Perfecte");
        } else {
            alert("No coincideix");
        }
    } else if(x.value == "Ibai" && y.value != z.value) {
        alert("No coincideixen");
    } else if(x.value != "Ibai") {
        alert("Incorrecte");
    }
}