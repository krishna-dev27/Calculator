function appendToDisplay(value) {
            let display = document.querySelector("input");
            display.value = display.value + value;
        }
        function clearDisplay() {
            document.querySelector("input").value = "";
        }
        function deleteLast() {
            let display = document.querySelector("input");
            display.value = display.value.slice(0, -1);
        }
        function calculate() {
            let display = document.querySelector("input");
            display.value = eval(display.value);
        }