window.addEventListener('load',()=>{
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");


form.addEventListener('submit',(e) => { 
    e.preventDefault();    // empêche de recharger la page et retour à 0 quand on appuie sur submit

    
    console.log("submit form")     // envoie le message "submit form" à la console 
    const task =input.value;

    if (!task){
        alert("Please fill out the task");     // si tu rempli pas de tache et t'appuie sur submit il va t'envoie le message "Fill the task"

        return;
    }
    

    const task_el= document.createElement("div");     // crée une div en lien avec la div "task" dans le html
    task_el.classList.add("task");   // ajoute du le contenu de "task" donc une tache entrée dans la barre

    const task_content_el= document.createElement("div");
    task_content_el.classList.add("content");     // ajoute du le contenu de "contenu" donc une nouvelle tache
    task_content_el.innerText=task;     // le contenu de tas_element est egal à task donc est égal à la tache qu'on a rentré dans la barre


    task_el.appendChild(task_content_el);
    list_el.appendChild(task_el);


})

})



