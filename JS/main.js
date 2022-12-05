/* Napisz funkcję, która przyjmuje jako parametr liczbę n.
Dowolną liczbę należy przekazać do parametru podczas wywoływania funkcji.

Funkcja ma sprawdzać, czy liczba n znajduje się w przedziale 100-200.
Jeżeli tak, w konsoli ma wyświetlić się napis "Liczba znajduje się w przedziale".
Jeżeli nie, w konsoli pojawi się "Liczba nie znajduje się w przedziale".

Plik wgraj do zdalnego repozytorium i podeślij link do sprawdzenia. */
 
let n = prompt('Podaj cyfrę');

function sprawdz_n(n){
if (n>=100 && n<=200){
console.log(n ," jest z przedział 100 - 200")
}else {
    console.log(n, " nie znajduje się w przedziale od 100 do 200")
} 
}
sprawdz_n(n);
/* console.log(n); */




