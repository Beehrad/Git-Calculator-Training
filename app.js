(function(){
  let mosavi = document.querySelector("#mosavi");
  let buttons = document.querySelectorAll(".btn");
  let display = document.querySelector(".display")
  let clear = document.querySelector("#AC")
  
        buttons.forEach((button)=>{
          button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
  
            display.value += value
  
          })
        });
        
        mosavi.addEventListener('click', function(e){
          if(display.value === ''){
            display.value = 'Please Enter a Value';
          } else {
            let answer = eval(display.value);
            display.value = answer;
          }
        })
        
        clear.addEventListener('click', function(e){
          display.value = '';
        });

})();

