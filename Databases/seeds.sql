INSERT INTO department (dept_name)
VALUES ("Software"),
       ("Hardware"),
       ("Accounting"),
       ("Management");

INSERT INTO roles (title, salary, department_id)
VALUES ("Software Engineer", 60000, 1),
       ("Full Stack Developer", 70000, 1),
       ("Guy who builds thing", 40000, 2),
       ("Nerd", 100000, 3),
       ("Manager", 40, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("James", "Reilly", 5, 1),
       ("Tom", "Morello", 1, 1),
       ("Dan", "Avidan", 2, 1),
       ("Jeff", "DeRosalia", 3, 1),
       ("David", "Lee Roth", 4, 1);