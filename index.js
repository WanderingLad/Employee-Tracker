const mysql = require('mysql2');
const quest = require('./Main/Questions');
const inquirer = require("inquirer");
const table = require("console.table");

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'alphabetsoup',
    database: 'employee_db'
  },
  console.log(`Connected to the employee_db database.`)
);

async function init()
{
    let stop = false;
    
    try
    {  
         do
        {
          let ans = await inquirer.prompt(quest.toDo());

            switch(ans.choice)
            {   
                case "View All Employees":
                  db.query(
                    'SELECT * FROM employee ORDER BY id ASC',
                    function(err, rows) 
                    {
                      if(err)
                      {
                        console.log(err);
                      }
                      else
                      {
                        console.table(rows);
                      }
                    }
                  );
                  break;
                
                case "Add an Employee":
                  let {employeeFirstName, employeeLastName, employeeRoleID, employeeManagerID} = await inquirer.prompt(quest.addEmployee());
                  db.query(
                    `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
                    ("${employeeFirstName}", "${employeeLastName}", ${employeeRoleID}, ${employeeManagerID})`,
                    function(err, rows) 
                    {
                      if(err)
                      {
                        console.log(err);
                      }
                      else
                      {
                        console.table(rows);
                      }
                    }
                  );
                  break;

                case "Update an Employee Role":
                    break;

                case "View All Roles":
                    break;

                case "Add a Role":
                    break;

                case "View All Departments":
                    break;

                case "Add a Department":
                    break;
                
                case "Quit":
                    stop = true;
            }
            
        }while(!stop);
    }
    catch (error) 
    {
        console.log("error: " + error);
    }
}

init();