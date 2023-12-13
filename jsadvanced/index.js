const addProduct = () => {
    const ul = document.querySelector("ul");
    inputValue = document.querySelector("input").value;
    if (inputValue) {
      const li = document.createElement("li");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      li.textContent = inputValue;
      li.appendChild(checkbox);
      ul.appendChild(li);
    } else {
      alert("inserisci una Task");
    }
  };