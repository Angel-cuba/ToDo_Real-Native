CREATE DATABASE IF NOT EXISTS taskdb;

USE taskdb;

CREATE TABLE IF NOT EXISTS tasks(
     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
     tittle VARCHAR(100) NOT NULL,
     description TEXT
);

INSERT INTO tasks (tittle, description) VALUES 
          ('task1 ', 'some description 1')
          ('task 2', 'some description 2');

