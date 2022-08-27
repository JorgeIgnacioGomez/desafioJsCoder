var num = parseInt(prompt("Ingrese un numero"));

var total = 1;

for (let i = 1; i<=num; i++){
    total = total * i;
    }

    alert("El factorial de: "+num + " es: " + total );