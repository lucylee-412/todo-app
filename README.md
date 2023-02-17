### Frontend repository can be found [here](https://github.com/lucylee-412/todo-app-react).

PSQL was used to create the database.
- The configuration can be found [here](db.js).  
- The SQL dump file can be found [here](todo.sql).

### Steps to create the database in PSQL using the dump file:
1) Run SQL shell (psql) and create the database `tasks`. (If you would like to rename it something else, make sure to change the database specified in the `db.js` config.)
2) Run cmd on adminstrator.
3) `cd` to your PSQL bin folder. The file path should look something like this: `C:\Program Files\PostgreSQL\14\bin`.
4) Restore the dump file in the database you created in step 1 by running the following command in cmd:
```
psql DATABASE_NAME_HERE < todo.sql
```
![image](https://user-images.githubusercontent.com/5422566/219656582-c6a9cf2f-55e8-486f-a50b-1caa47deda1c.png)

Make sure you have the latest version of Express and Node installed.  

`npm install`  
After connecting to the PSQL server, use `npm run dev` to run the API.

```
CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  description VARCHAR (100) UNIQUE NOT NULL
);

CREATE TYPE status AS ENUM ('in-progress', 'completed');
ALTER TABLE tasks
ADD COLUMN status status;

CREATE TYPE priority AS ENUM ('low', 'medium', 'high');
ALTER TABLE tasks
ADD COLUMN priority priority;

```

![image](https://user-images.githubusercontent.com/5422566/219547125-d22af965-43d0-43ca-b10d-9d4165d62973.png)  
![image](https://user-images.githubusercontent.com/5422566/219547162-46493ffc-b0b4-49c3-aae8-015cd576722f.png)

###### If I'd had more time, I would've also created Sequelize models and a seed script.

_________________________________________________________________________________________

##### Getting a single to-do
- User is able to make a GET request for a task specified by its ID, using `getTaskById`.

_________________________________________________________________________________________

##### Getting multiple to-do's
- User is able to make a GET request for all tasks found in the database, using `getTasks`.
- User is able to make a GET request for filtered tasks by completion status (i.e., in-progress or completed) using `getTasksByStatus`, or by priority level (i.e., low, medium, or high) using `getTasksByPriority`.

_________________________________________________________________________________________

##### Adding a single to-do
- User is able to make a POST request for a task using `addTask`.

_________________________________________________________________________________________

##### Editing a single to-do
- User is able to make a PUT request for a task specified by its ID, using `updateDescription`, `updateStatus`, and/or `updatePriority`.

_________________________________________________________________________________________

##### Deleting a to-do
- User is able to make a DELETE request for a task specified by its ID, using `deleteTask`.

_________________________________________________________________________________________
