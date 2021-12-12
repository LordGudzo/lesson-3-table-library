/* Main function creates table according to values from config and data variables */
function DataTable(config, data) {
  let userTable = document.querySelector(config.parent)
  let table = document.createElement('table');
  let thead = createHeaderForTable(config);
  let tBody = createBodyForTable(config, data);
  
  table.append(thead);
  table.append(tBody);
  userTable.appendChild(table);
}
/* Creates header for the table according to value from config1 object */
function createHeaderForTable(config) {
  let thead = document.createElement('thead');  
  let trForThead = document.createElement('tr');
  thead.append(trForThead);
  let id = document.createElement('th');  
  for (let i = 0; i < config.columns.length; i++){
    let th = document.createElement('th');
    th.innerHTML = config.columns[i].title;
    trForThead.append(th);
  }
  return thead;
}

/* Creates the body of the table accoring to value from config1 variable and datas from user variable*/
function createBodyForTable(config, data) {
  let tBody = document.createElement('tbody');
  /* Scroll array with users objects */
  for (let i = 0; i < data.length; i++){
    let tr = document.createElement('tr');
    /* Scrolls values from config1 columns and checks them against the value value from objects with data
     variable */   
    Object.values(config.columns).map((e) => {
     let td = document.createElement('td');
     if (data[i].hasOwnProperty(e.value)){
      td.innerHTML = data[i][e.value];  
     } else {
       td.innerHTML = ' ';
     }
     tr.append(td)
    })    
    tBody.append(tr);
  }
  return tBody;
}

/* Object with values for header of table */
const config1 = {
 parent: '#usersTable',
 columns: [
   {title: '#', value: 'id'},
   {title: 'Имя', value: 'name'},
   {title: 'Фамилия', value: 'surname'},
   {title: 'Возраст', value: 'age'},
 ]
};

/* Array with objects with values */
const users = [
  {id: 30050, name: 'Вася', surname: 'Петров', age: 12},
  {id: 30051, name: 'Вася', surname: 'Васечкин', age: 15},
  {name: 'Петя', surname: 'Васечкин', id: 30052, age: 32},
  {id: 30053, name: 'Коля', age: 45},
  {name: 'Степа', surname: 'Савелич', title: 'Описание'},
  {},
  {id: 0001, surname: 'Чимбарев', name: 'Дмитрий'}
];

DataTable(config1, users);


