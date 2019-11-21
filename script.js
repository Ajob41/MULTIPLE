




       let mathDigits = document.querySelector(".mathDigits");

       mathDigits.addEventListener("click",function(e){
         console.log(e.target.id)
       })


       let results = document.querySelector(".results");

          results.addEventListener("click",function(e){
            console.log(e.target.id)
          })


       



  document.addEventListener("DOMContentLoaded",function(e){

       let mathDigits = document.querySelector(".mathDigits");

       Array.from(mathDigits.children).forEach(function(digit){
               parseInt(digit.textContent)
              

               digit.textContent = Math.floor(Math.random() * 10);

            
       });
       
      
  
       
      
  })



  let btn = document.getElementById("btn");
  let rem = document.getElementById("rem")
  let rem2 = document.getElementById("rem2")

   

  btn.addEventListener("click",function(e){

  

     
    let one = parseInt(mathDigits.children[0].textContent);
    let two = parseInt(mathDigits.children[1].textContent);
    let three = parseInt(mathDigits.children[2].textContent);
    let four = parseInt(mathDigits.children[3].textContent);
    let five = parseInt(mathDigits.children[4].textContent);
    let six = parseInt(mathDigits.children[5].textContent);

    console.log(three)

    


    
    

        
        let s1 = parseInt(results.children[0].textContent)
        let s2 = parseInt(results.children[1].textContent)
        let s3 = parseInt(results.children[2].textContent)

          

           

        
        // Addition starts here

        let span3 = document.getElementById("s3");
      

            span3.textContent = three + six;

            


      

        let span2 = document.getElementById("s2");

            
              span2.textContent = two + five;
          

           


        let span1 = document.getElementById("s1")

            span1.textContent = one + four;
         if(span3.textContent > 9){
             let total = span3.textContent.split("");
             console.log(total)
              span3.textContent = parseInt(total[1]);
              rem.textContent = parseInt(total[0])
              span2.textContent = two + five + parseInt(rem.textContent);
            

              
         }if(span2.textContent > 9){
            let total2 = span2.textContent.split("");
            span2.textContent = parseInt(total2[1]);
            rem2.textContent = parseInt(total2[0])

            span1.textContent = one + four + parseInt(rem2.textContent)+",";

            
            
         }
           
        
  })
