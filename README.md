# Spring Boot ToDo

A simple ToDo app for learning Spring Boot. Using Gradle as the build tool and PostgreSQL as the database.

<img width="900" alt="ToDo app" src="https://github.com/hjeronen/spring-todo/assets/73843204/741613cb-6cce-4a9b-b172-7601af3fc46e">

The color palette was copied from [here](https://colorhunt.co/palette/3630624d4c7df99417f5f5f5).

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

## Notes

### CORS

GET and POST methods are allowed by default in Spring Boot, but DELETE caused the following error:

```
Access to XMLHttpRequest at 'http://localhost:8080/todos/155' from origin 'http://localhost:5173' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```

The CORS instructions given in Spring Boot tutorial did not work. This [StackOverflow posting](https://stackoverflow.com/a/57185323) had a working solution, with some modifications from [here](https://docs.spring.io/spring-security/reference/reactive/integrations/cors.html) - define a bean for CORS Filter configurations:

```
@Bean
	public FilterRegistrationBean<CorsFilter> simpleCorsFilter() {
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		CorsConfiguration config = new CorsConfiguration();
		config.setAllowCredentials(true);
		config.setAllowedOrigins(Arrays.asList("http://localhost:5173"));
		config.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE"));
		config.setAllowedHeaders(Arrays.asList("*"));
		source.registerCorsConfiguration("/**", config);
		FilterRegistrationBean<CorsFilter> bean = new FilterRegistrationBean<>(new CorsFilter(source));
		bean.setOrder(Ordered.HIGHEST_PRECEDENCE);
		return bean;
	}
```

There might be conflicting settings between the installed plugins and the approach in [Spring Boot CORS tutorial](https://spring.io/guides/gs/rest-service-cors#controller-method-cors-configuration).
