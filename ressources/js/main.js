
window.addEventListener('load',()=>{
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");
    
    let tasks = [];
    const todosJson = window.localStorage.getItem('todos');
   
    if(todosJson){
        JSON.parse(todosJson);
    }


form.addEventListener('submit',(e) => { 
    e.preventDefault();    
   
    console.log("submit form")     // envoie le message "submit form" à la console   
    const task =input.value; 

    
    tasks.push(task);
    localStorage.setItem('todos', JSON.stringify(tasks));
    


    if (!task){
        alert("Please fill out the task");      // Envoie du message "Fill the task" quand on n'insere aucune tâche

        return ;
    {
            
        }

    }


    const task_el= document.createElement("div");     // crée une div en lien avec la div "task" dans le html
    task_el.classList.add("task");   

    const task_content_el= document.createElement("div");
    task_content_el.classList.add("content");     

    task_el.appendChild(task_content_el);

    const task_input_el=document.createElement("input");
    task_input_el.classList.add("text");
    task_input_el.type="text";
    task_input_el.value=task;
    task_input_el.setAttribute("readonly", "readonly");     // lecture seulement

    task_content_el.appendChild(task_input_el);


    const task_actions_el=document.createElement("div");
    task_actions_el.classList.add("actions");

    const task_edit_el=document.createElement("button");
    task_edit_el.classList.add("edit");
    task_edit_el.innerHTML="Edit";

    const task_delete_el=document.createElement("button");
    task_delete_el.classList.add("delete");
    task_delete_el.innerHTML="Delete";

    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_delete_el);

    task_el.appendChild(task_actions_el);

    list_el.appendChild(task_el);

    input.value="";





   

    // lorsque qu'on clique sur edit d'une tache
    task_edit_el.addEventListener('click',()=> { // configure la fonction à chaque fois qu'on l'appelle=> qu'on clique dessus
        if (task_edit_el.innerText.toLocaleLowerCase()==
        "edit"){
            task_input_el.removeAttribute("readonly");
            task_input_el.focus();
            task_edit_el.innerText ="Save"; // quand on clique sur edit le bouton se transforme en Save

        } else {
            task_input_el.setAttribute("readonly", "readonly");    // on veut revenir à la normale donc on remet la tache en mode lecture seulement et le bouton se remet en edit
            task_edit_el.innerText="Edit";
        }
    });

    task_delete_el.addEventListener('click',()=>{     // quand on clique => retire la tâche concernée
        list_el.removeChild(task_el);

    });

   

    



}); //  paranthèses du submit




 }); // paranthèses de l'ensemble donc quand on charge la page



 


