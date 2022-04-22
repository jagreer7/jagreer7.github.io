//Problem 1
const Employee1 = {
  firstName: 'Sam',
  department: 'Tech',
  designation: 'Manager',
  salary: 40000,
  raiseEligible: true
};

const Employee2 = {
  firstName: 'Mary',
  department: 'Finance',
  designation: 'Trainee',
  salary: 18500,
  raiseEligible: true
};
const Employee3 = {
  firstName: 'Bill',
  department: 'HR',
  designation: 'Executive',
  salary: 21200,
  raiseEligible: false
};
console.log(Employee1);
console.log(Employee2);
console.log(Employee3);
console.log('Problem 1 Done');

 //Problem 2
let Company = {
  companyName: 'Tech Stars',
  website: 'www.techstars.site',
  employees: [Employee1, Employee2, Employee3],
};
console.log(Company);
console.log('Problem 2 Done');

//Problem 3
const newEmployee = {
  firstName: 'Anna',
  department: 'Tech',
  designation: 'Executive',
  salary: 25600,
  raiseEligible: false
};
Company['employees'].push(newEmployee);
console.log(Company['employees'][3]); //Shouldnt work if employee wasnt added correctly
console.log('Problem 3 Done');

//Problem 4
function calculateTotalSalary(obj){
  let total = 0;
  for(let i = 0; i < obj['employees'].length; i++){
    total = total + obj['employees'][i]['salary'];
  }
  console.log(`The total of the salaries is ${total}`);
}
calculateTotalSalary(Company);
console.log('Problem 4 Done');

//Problem 5
function giveRaises(obj){
  for(let i = 0; i < obj['employees'].length; i++){
    if (obj['employees'][i]['raiseEligible'] === true){
      const oldSalary = obj['employees'][i]['salary'];
      obj['employees'][i]['salary'] = (obj['employees'][i]['salary'] + obj['employees'][i]['salary'] * 0.1);
      obj['employees'][i]['raiseEligible'] = false;
      console.log(`${obj['employees'][i]['firstName']}'s Salary changed from ${oldSalary} to ${obj['employees'][i]['salary']}`);
    }
  }
}
giveRaises(Company);
calculateTotalSalary(Company);
console.log('Problem 5 Done');

//Problem 6
const wfhNames = ['Anna', 'Sam'];

function checkNames(name, wfhNames){ //Helper function to see if a given name is one of the WFH names
  for (let i = 0; i < wfhNames.length; i++){
    if (name === wfhNames[i]){
      return true;
    }
  }
  return false;
}

function workFromHome(obj){
  for(let i = 0; i < obj['employees'].length; i++){
    if (checkNames(obj['employees'][i]['firstName'], wfhNames) === true){
      obj['employees'][i]['wfh'] = true;
      console.log(`${obj['employees'][i]['firstName']} is working from home!`);
    }
    else{
      obj['employees'][i]['wfh'] = false;
      console.log(`${obj['employees'][i]['firstName']} is not working from home!`);
    }
  }
}
workFromHome(Company);
console.log('Problem 6 Done');

// PRINTER FUNCTIONS
function populateHeader(x){
  const header = document.querySelector('header');
  const myH1 = document.createElement('h1');

  myH1.textContent = x['companyName'];
  header.appendChild(myH1);

  const myPara = document.createElement('p');
  myPara.textContent = x['website'];

  header.appendChild(myPara);
}

populateHeader(Company);


function populateEmployees(obj) {
  const section = document.querySelector('section');
  const employees = obj['employees'];

  for (const employee of employees)
  {
    const myArticle = document.createElement('article');
    const myH2 = document.createElement('h2'); //Name
    const myPara1 = document.createElement('p'); //Department
    const myPara2 = document.createElement('p'); //Designation
    const myPara3 = document.createElement('p'); //Salary
    const myPara4 = document.createElement('p'); //Raise Eligible
    const myPara5 = document.createElement('p'); //WFH


    myH2.textContent = employee.firstName;
    myPara1.textContent = `Department: ${employee.department}`;
    myPara2.textContent = `Designation: ${employee.designation}`;
    myPara3.textContent = `Salary: ${employee.salary}`;
    myPara4.textContent = `Raise Eligible: ${employee.raiseEligible}`;
    myPara4.textContent = `Working From Home: ${employee.wfh}`;


    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myPara4);
    myArticle.appendChild(myPara5);

    section.appendChild(myArticle);
  }
}

populateEmployees(Company);
