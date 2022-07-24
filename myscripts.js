



function myFunction() {
    document.getElementById('song').play();
}

function home() {
    var element = document.getElementById('terminal')
    element.classList.toggle('terminal')
}


const action = false
async function btn(action) {
   
    await ethereum.request({method: 'eth_requestAccounts'}).then(accounts => {
        account = accounts[0];
        console.log(account)
        const action = true
        
        
    });

    document.getElementById('class').classList.add('active')
    document.getElementById('class1').classList.add('active-line')
    document.getElementById("output").innerHTML = account
    document.getElementById('song').play();

    
}
function next() {
    document.getElementById('class2').classList.add('text_active')
    document.getElementById('class1').classList.add('click')
    document.getElementById('class1').classList.remove('active-line')
    document.getElementById('song').play();
    
    
}
function next2() {
    document.getElementById('class3').classList.add('text_active2')
    document.getElementById('class2').classList.add('click2')
    document.getElementById('class2').classList.remove('text_active')
    document.getElementById('class2').classList.add('text_active_2')
    document.getElementById('song').play();
    
    
}
function next3() {
    document.getElementById('class4').classList.add('active1')
    document.getElementById('class3').classList.add('click3')
    $(document).ready(function(){
        var theLetters = "abcdefghijklmnopqrstuvwxyz#%&^+=-"; //You can customize what letters it will cycle through
        var ctnt = account; // Your text goes here
        var speed = 6; // ms per frame
        var increment = 10; // frames per step. Must be >2
        console.log("help")
        
            
        var clen = ctnt.length;       
        var si = 0;
        var stri = 0;
        var block = "";
        var fixed = "";
        //Call self x times, whole function wrapped in setTimeout
        (function rustle (i) {          
        setTimeout(function () {
          if (--i){rustle(i);}
          nextFrame(i);
          si = si + 1;        
        }, speed);
        })(clen*increment+1); 
        function nextFrame(pos){
          for (var i=0; i<clen-stri; i++) {
            //Random number
            var num = Math.floor(theLetters.length * Math.random());
            //Get random letter
            var letter = theLetters.charAt(num);
            block = block + letter;
          }
          if (si == (increment-1)){
            stri++;
          }
          if (si == increment){
          // Add a letter; 
          // every speed*10 ms
          fixed = fixed +  ctnt.charAt(stri - 1);
          si = 0;
          }
          $("#output").html(fixed + block);
          block = "";
        }
        });
      
   
}

function scramble() {
    alert('MINTING HASNT STARTING U FUCKING DEGEN. GO TOUCH SOME GRASS')
}


var menuList = document.getElementById('menuList')

menuList.style.maxHeight = "0px";
function togglemenu() {
    if(menuList.style.maxHeight == "0px")
        {
            menuList.style.maxHeight = "130px";
            document.getElementById('hello').classList.add('sidebar_visible')
        }
    else
        {
            menuList.style.maxHeight = "0px";
        }

}
