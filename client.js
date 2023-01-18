// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

function selectIndividualEmployees (employees) {
for (let i = 0; i < employees.length; i++) {
  calculateIndividualEmployeeBonus (employees[i]);
  console.log(employees[i].name);
}
}
selectIndividualEmployees(employees);

// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( employee ) {  
  // your logic here
  let baseBonus = employee.reviewRating * employee.annualSalary
  let yearAdjustment = if employee.employeeNumber.length >= 4 {
    employee.annualSalary * employees.reviewRating + 0.05
  let incomeAdjustment =  if employee.annualSalary > 65000 {
    newBonus = baseBonus * 0.01
  }
  baseBonus > 0.13 || < 0 
  }


  // function getBaseBonus (rating) {
  //   switch (rating) {
  //     case 2:
  //       return 0;
  //       break;
  //     case 3:
  //       return  employee.annualSalary * 0.04
  //       break;
  //       case 4:
  //       return employee.annualSalary * 0.06
  //       break;
  //       case 5 

  //     default:
  //       break;
    }
  if rating < 2 {
    return bonus = 0;
  } else if {
    rating = 3 {
      return bonus = employee.annualSalary * 0.04
    } else if {
      rating = 4 {
        return bonus = employee.annualSalary * 0.06
      } else if {
        rating = 5 {
          return bonus = employee.annualSalary * 0.1
        }
      }
    }
  }
}

  
  }

  function baseBonusCalculation (rating){
    let basePercent;
    return 
  }
  
  function yearAdjustment (employeeNumber) {

  }

  function incomeAdjustment (annualSalary) {

  }

  return newEmployeeObject (name, bonusPercentage, totalCompensation, totalBonus)
 
  // return newObject
  //name
  //bonusPercentage
  //totalCompensation
  //totalBonus

  
  // return new object with bonus results
