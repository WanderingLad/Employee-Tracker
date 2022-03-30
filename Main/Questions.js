const toDo = function ()
{
    return toDoQuestion = 
        {
            type: 'list',
            message: "What would you like to do?",
            choices: ['View All Employees', 'Add an Employee', 'Update an Employee Role', 'View All Roles', 'Add a Role', 'View All Departments', 'Add a Department', 'Quit'],
            name: 'choice',
            validate: function (answer)
            {
                if(answer)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
        };
};

const addDepartment = function ()
{
    return employeeQuestion = 
        {
            type: 'input',
            message: "What is the name of the department?",
            name: 'departmentName',
        }
};

const addRole = function ()
{
    return roleQuestions = 
    [
        {
            type: 'input',
            message: "What is the name of the role?",
            name: 'roleName',
        },
        {
            type: 'input',
            message: "What is the role's salary?",
            name: 'roleSalary',
        },
        {
            type: 'input',
            message: "What is the department for this role?",
            name: 'roleDepartment',
        },
        
    ];
};

const addEmployee = function ()
{
    return employeeQuestions = 
    [
        {
            type: 'input',
            message: "What is the employee's first name?",
            name: 'employeeFirstName',
        },
        {
            type: 'input',
            message: "What is the employee's last name?",
            name: 'employeeLastName',
        },
        {
            type: 'input',
            message: "What is the employee's role id?",
            name: 'employeeRoleID',
        },
        {
            type: 'input',
            message: "Who is the employee's manager's id?",
            name: 'employeeManagerID',
        },
        
    ];
};

const updateEmployee = function ()
{
    return employeeQuestions = 
    [
        {
            type: 'list',
            message: "Chose an Employee",
            choices:[],
            name: 'employeeToUpdate',
        },
        {
            type: 'input',
            message: "What is the employee's new role?",
            name: 'employeeNewRole',
        }
        
    ];
};

module.exports =  { toDo, addDepartment, addRole, addEmployee, updateEmployee };