document.addEventListener("DOMContentLoaded", () => {
  const display = document.querySelector(".bg-gray-300");
  const buttons = document.querySelectorAll("button");

  let currentInput = ""; 

  // Agrega eventos de clic a cada botón
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      let style = button.className; // Guarda la clase original del botón
      button.className = 'bg-blue-100'; 
      handleButtonClick(button.innerText); // Maneja la acción del botón
      setTimeout(() => {
        button.className = style; // Restaura la clase original 
      }, 100);
    });
  });

  document.addEventListener("keydown", (event) => {
    // Mapa de teclas para convertir algunas teclas en símbolos adecuados
    const keyMap = {
        "*": "×",
        "/": "÷",
        "Enter": "=",
        "Backspace": "←"
    };

    const key = keyMap[event.key] || event.key; // Obtiene la tecla mapeada o el valor original

    // Encuentra el botón correspondiente a la tecla presionada
    const button = [...buttons].find(b => b.innerText === key);
    if (button) button.click(); 
  });

  function handleButtonClick(value) {
      if (value === "=") {
          try {
              // Evalúa la expresión matemática, reemplazando los símbolos adecuados
              currentInput = eval(currentInput.replace("×", "*").replace("÷", "/"));
          } catch {
              currentInput = "Error"; 
          }
      } else if (value === "CE" || value === "C") {
          currentInput = ""; 
      } else if (value === "←") {
          currentInput = currentInput.toString().slice(0, -1); // Borra el último carácter
      } else {
          currentInput += value; 
      }
      
      display.value = currentInput || "0";
  }
});
  