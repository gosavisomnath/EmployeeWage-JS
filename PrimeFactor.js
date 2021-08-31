function primeFactors(n) 
{ 
    while (n % 2 == 0) 
    { 
        document.write(2 + " "); 
        n = Math.floor(n/2); 
    } 
  
    for (let i = 3; i <= Math.sqrt(n); i = i + 2) 
    { 
       
        while (n % i == 0) 
        { 
            document.write(i + " "); 
            n = Math.floor(n/i); 
        } 
    } 
  
    if (n > 2) 
        document.write(n + " "); 
} 
   
    let n = 315; 
    primeFactors(n); 