const input = document.querySelector ("#todoInput") // questa punta a input
const btn = document.querySelector('button')  // questa punta a bottone

function getValue (){
    const value = input.value
    input.value = " "
    console.log(value);
}

btn.addEventListener('click', getValue);



const ul = document.querySelector(".list");

function getValue() {
    const value = input.value;

    if (value !== "") {
        const li = document.createElement("li");
        li.textContent = value;
        ul.appendChild(li);
    } else {
        alert("Inserisci una Task");
    }

    input.value = ""; 
}

btn.addEventListener("click", getValue);


const button = document.querySelector ('#reset_btn')

function reset (){
    const bottone = ul.children(li).value
    ul.children(li).value = " "
    console.log(bottone);
}

button.addEventListener('click', reset);