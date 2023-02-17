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

PSQL was used to create the database. The configuration can be found [here](db.js).
