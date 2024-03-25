# Spring Boot ToDo

A simple ToDo app for learning Spring Boot. Using Gradle as the build tool and PostgreSQL as the database.

## Running the app

#### Initializing the database

The app is configured to use PostgreSQL database. Install and start PostgreSQL server, and create a user role and a database for the app.

###### Open shell

`psql postgres`

###### Create new user:

`CREATE USER username WITH PASSWORD 'password';`

###### Add permissions to role/user:

`ALTER ROLE username CREATEDB;`

###### Create database:

`CREATE DATABASE databasename OWNER username;`

After copying the code, create an .env file at the root folder with the following contents:

```
DB_URL=jdbc:postgresql://localhost:5432/yourdatabasename
DB_USER=username
DB_PASSWORD=password
```

Write the name of your database to the end of database url.

#### Running the app

Once the database server is running, run `gradle build`. If the build is successful, try starting the app with `./gradlew bootRun`.

The app should start at http://localhost:8080. The saved todos should be visible at http://localhost:8080/todos.
