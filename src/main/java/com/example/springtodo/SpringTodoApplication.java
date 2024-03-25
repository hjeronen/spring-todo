package com.example.springtodo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class SpringTodoApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringTodoApplication.class, args);
	}

	@GetMapping("/")
	public String index() {
		return "This is a ToDo app.";
	}

}
