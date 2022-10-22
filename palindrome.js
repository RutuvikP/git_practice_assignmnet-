let str="naman";
let sum="";
let N=str.length;
   
     for(let i=0; i<=N-1;i++){
         sum+=(str[i]);
         
     }
    
  let bag="";
    
    for(let i=N-1;i>=0;i--){
       bag+=(str[i]);
       
    }
    
    if(sum !== bag){
        console.log("Yes");
    }else{
        console.log("No");
    }
