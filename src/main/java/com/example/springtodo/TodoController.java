package com.example.springtodo;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TodoController {

    private final TodoRepository todoRepository;

    public TodoController(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    @GetMapping("/todos")
    public Iterable<Todo> getAll() {
        return this.todoRepository.findAll();
    }

    @PostMapping("/todos")
    public Todo addTodo(@RequestBody Todo todo) {
        return this.todoRepository.save(todo);
    }

    @PutMapping("/todos")
    public Todo updateTodo(@RequestBody Todo todo) {
        return this.todoRepository.save(todo);
    }

    @DeleteMapping("/todos")
    public void deleteTodo(@RequestBody Todo todo) {
        this.todoRepository.delete(todo);
    }
}
