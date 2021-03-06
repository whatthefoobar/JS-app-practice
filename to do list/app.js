const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input")

const generateTemplate = todo => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
      </li>
    `;
    list.innerHTML+= html;
} 

addForm.addEventListener("submit", e =>{
    e.preventDefault();
    const todo = addForm.add.value.trim();// .add from name="add" on input
    //.trim() trims out empty space from tab

    if (todo.length){
     generateTemplate(todo);
     addForm.reset();
    }

})
//delete todos
list.addEventListener("click", e => {

  if(e.target.classList.contains("delete")){
      e.target.parentElement.remove();
  };
})

const filterToDos = (term) =>{
  Array.from(list.children)
    .filter((todo) =>  !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("filtered"));

    //if a letter is removed for the term and now a li matches we want to remove class
    Array.from(list.children)
    .filter((todo) =>  todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
};

//keyup event
search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();

  filterToDos(term)
});