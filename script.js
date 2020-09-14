function Memefy() {
    let final_text = '';
    let input_text = document.getElementById("textinput").value.concat(" HuRrdUrR");
    for (let i = 0; i < input_text.length; i++){
        if (i%2 == 0){
            final_text = final_text.concat(input_text[i].toLowerCase())
        }
        else {
            final_text = final_text.concat(input_text[i].toUpperCase())
        }
    }

    document.getElementById("memetext").innerHTML = final_text
}