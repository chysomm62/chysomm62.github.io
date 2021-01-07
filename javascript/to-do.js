   //javascript code for TO DO LIST
     //     BY CHYSOMM
     // INSPECT, COMMEND AND COMMENT


        
//page loader to get the page all together before execution 



document.addEventListener("DOMContentLoaded", () => {

    //alert("ToDoList version1.1 \n First update of many \n thank you sir David Carroll for your corrections, analysis, suggestions, modifications, etc \n and thank you Everyone for your wonderful opinions \n am super greatful")

    const signin = document.getElementById('signin');
    const form2 = document.getElementById('form2');
    const coverpage = document.getElementById('coverpage');
    const signup = document.getElementById('signup');
    const form1 = document.getElementById('form1');
    const signupform = document.getElementById('signupform');
    const loginbutton = document.getElementById('loginbutton');
    const dashboard = document.getElementById('dashboard');

        
        signin.addEventListener('click', ()=> {
            form2.style.display = "block";
            coverpage.style.display = "none"
        })

        signup.addEventListener('click', () => {
            form1.style.display = "block";
            coverpage.style.display = "none";
        })

        signupform.addEventListener('click', () => {
            dashboard.style.display = "block";
            form1.style.display = "none";
        })

        loginbutton.addEventListener('click', () => {
            dashboard.style.display = "block";
                form2.style.display = "none";
        })



    const closeclick = document.getElementsByClassName('close');
    const creatingToDo = document.getElementById('create_button');
    
    

    creatingToDo.addEventListener('click', () => {
        
        const the_input = document.getElementById('the_input');
        const theinputValue = the_input.value;
        const ul_forToDo = document.getElementById('ul_forToDo');
        const li = document.createElement('li');
        const textNode = document.createTextNode(theinputValue);
        const theSpanTag = document.createElement('SPAN');
        const sometext = document.createTextNode('\u00D7');
        li.appendChild(textNode);

        if(theinputValue === ''){
            alert("you have no input!")
        }else{
            ul_forToDo.appendChild(li);
        }
         the_input.value = "";
        theSpanTag.className = "close";
                theSpanTag.appendChild(sometext);
                li.appendChild(theSpanTag);
        for(i =0; i<closeclick.length; i++){
                    closeclick[i].onclick = function(){
                        const forDiv = this.parentElement;
                        forDiv.style.display = 'none';
                    }
                }
        })


    const myUlDiv = document.getElementById("ulDiv");
    const unorderedlist = myUlDiv.querySelector("ul");

    unorderedlist.addEventListener('click', function(event){
        
        if(event.target.tagName === "LI"){
            event.target.classList.toggle('checked');
        }
    });


    const listItems = document.getElementsByTagName('li');
    var index;

        for (index = 0; index < unorderedlist.length; index++){
            const aspan = document.createElement('SPAN');
            const inputSomeText = document.createTextNode('\u00D7');
            aspan.className = 'close';
            aspan.appendChild(inputSomeText);
            unorderedlist[index].appendChild(aspan);
        }


        for(i =0; i < closeclick.length; i++){
                closeclick[i].onclick = function(){
                    const forDiv = this.parentElement;
                    forDiv.style.display = 'none';
                }
            }


        })