document.addEventListener("DOMContentLoaded", () => {
  const display = document.querySelector(".bg-gray-300");
  const buttons = document.querySelectorAll("button");

  let currentInput = "";

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      let style = button.className
      button.className = 'bg-blue-100'
      handleButtonClick(button.innerText)
      setTimeout(() => {
        button.className = style
      }, 100);
    });
  });

  document.addEventListener("keydown", (event) => {
    const keyMap = {
        "*": "×",
        "/": "÷",
        "Enter": "=",
        "Backspace": "←"
    };

    const key = keyMap[event.key] || event.key;

    const button = [...buttons].find(b => b.innerText === key);
    if (button) button.click();
});

  function handleButtonClick(value) {
      if (value === "=") {
          try {
              currentInput = eval(currentInput.replace("×", "*").replace("÷", "/"));
          } catch {
              currentInput = "Error";
          }
      } else if (value === "CE" || value === "C") {
          currentInput = "";
      } else if (value === "←") {
          currentInput = currentInput.toString().slice(0, -1);
      } else {
          currentInput += value;
      }
      
      display.value = currentInput || "0";
  }

  function handle(value) {
    if (value === "=") {
        try {
            currentInput = eval(currentInput.replace("×", "*").replace("÷", "/"));
        } catch {
            currentInput = "Error";
        }
    } else if (value === "CE" || value === "C") {
        currentInput = "";
    } else if (value === "←") {
        currentInput = currentInput.toString().slice(0, -1);
    } else {
        currentInput += value;
    }
    
    display.value = currentInput || "0";
}
});

  