/* function pattern(n){
    for(let i = n; i >= 1; i--){
        let row = "";

        for(let j = 1; j <=i; j++){
            row += "*";
        }
        console.log(row);
        
    }
}

pattern(5) */

function pyramid(n){
    for(let i = 1; i <= n; i++){
        let space =" ".repeat(n-i);
        let ptr = "*".repeat(2*i-1);

        console.log(space + ptr);
        
    }
}
pyramid(5)