console.log("Java scrip conectado correctamente");

const txtOp1 = document.getElementById("op1");
const txtOp2 = document.getElementById("op2");
const operador = document.getElementById("operador");
const calcular = document.getElementById("calcular");
const pResultado = document.getElementById("resultado");

calcular.addEventListener("click", Calcular);

function Calcular() {
    const op = operador.value;
    const op1 = parseFloat(txtOp1.value);
    const op2 = parseFloat(txtOp2.value);

    if ((op == "+" || op == "-" || op == "/" || op == "*") && !isNaN(op1) && !isNaN(op2)) {
        let resultado;
        switch (op) {
            case "+":
                resultado = op1 + op2;
                break;
            case "*":
                resultado = op1 * op2;
                break;
            case "/":
                resultado = op1 / op2;
                break;
            case "-":
                resultado = op1 - op2;
                break;
        }
        pResultado.innerText = "Resultado: " + resultado;
    } else {
        resultado.innerText = "Calculo Imposible, escriba una operacion marcada";
    }
}
