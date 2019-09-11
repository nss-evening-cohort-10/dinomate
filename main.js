const employees = [
  {name: "Zoe", title: "Wizard", imageUrl: "https://images-na.ssl-images-amazon.com/images/I/81Mm7PSz8qL._SX425_.jpg"},
  {name: "Greg", title: "Lizard", imageUrl: "https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_960,f_auto/Pachycephalosaurus_right_mch8y6.jpg"},
  {name: "Michael", title: "Cool Kid", imageUrl: "https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/Archaeopteryx_hmie72.png"}
];

const printToDom = (divId, textToPrint) => {
  document.getElementById(divId).innerHTML = textToPrint;
};

const employeeStringBuilder = (ninjas)  => {
  let domString = '';
  for(let i = 0; i < ninjas.length; i++){
    let employee = ninjas[i];
    domString += `
      <div class="col-4">
        <div class="card">
          <img src=${employee.imageUrl} class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${employee.name}</h5>
            <p class="card-text">${employee.title}</p>
          </div>
        </div>
      </div>
    `;
  }
  printToDom('employees-zone', domString);
};

employeeStringBuilder(employees);