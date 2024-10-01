import "./style.css";




    const taskBtn = document.querySelector("#addTask");

    taskBtn.addEventListener("click", () => {
        todoForm();
    })


function todoForm() {
    const formContainer = document.querySelector(".todo-container");
    const formdiv = document.createElement("div");
    formdiv.classList.add("form-div");
    formdiv.innerHTML = `
        <form>
        <h1>hello</h1>
        </form>`;
    formContainer.appendChild(formdiv)    
}

