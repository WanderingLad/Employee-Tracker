DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE deparment (
  id INT NOT NULL AUTO_INCREMENT,
  dept_name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  deparment_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (deparment_id)
  REFERENCES deparment(id)
);

CREATE TABLE employee (
  id INT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY role_id 
  REFERENCES roles(id),
  FOREIGN KEY manager_id
  REFERENCES employee(id)
);