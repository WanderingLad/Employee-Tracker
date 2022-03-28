const mysql = require('mysql2');
const quest = require('./Main/Questions');

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
        let man = await inquirer.prompt(Questions.getManager());
        let manager = new Manager(man.name, man.id, man.email, man.officeNumber);
        employees = [...employees, manager];

        do
        {
            let ans = await inquirer.prompt(Questions.getIntro());

            switch(ans.employeeType)
            {                
                case "Engineer":
                    let eng = await inquirer.prompt(Questions.getEngineer());
                    let engi = new Engineer(eng.name, eng.id, eng.email, eng.github);
                    employees = [...employees, engi];
                    break;
                
                case "Intern":
                    let int = await inquirer.prompt(Questions.getIntern());
                    let inte = new Intern(int.name, int.id, int.email, int.school);
                    employees = [...employees, inte];
                    break;

                default:
                    console.log("That's All folks!");
                    stop = true;
                    ht.fileCreation(employees);
            }

            if(ans.employeeType === 'No more employees!')
            {
                stop = true;
            }
            
        }while(!stop);
    }
    catch (error) 
    {
        console.log("error: " + error);
    }
}

init()

// Create a movie
app.post('/api/new-movie', ({ body }, res) => {
  const sql = `INSERT INTO movies (movie_name)
    VALUES (?)`;
  const params = [body.movie_name];
  
  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: body
    });
  });
});
