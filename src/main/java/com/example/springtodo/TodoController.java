package com.example.springtodo;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = { "http://localhost:5173" })
@RestController
@RequestMapping("/todos")
public class TodoController {

    private final TodoRepository todoRepository;

    public TodoController(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    @GetMapping
    public Iterable<Todo> getAll() {
        return this.todoRepository.findAll();
    }

    @PostMapping
    public Todo addTodo(@RequestBody Todo todo) {
        return this.todoRepository.save(todo);
    }

    @PutMapping("{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable Integer id, @RequestBody Todo todo) {
        Todo updatedTodo = this.todoRepository.findById(id).get();
        updatedTodo.setDone(todo.getDone());
        this.todoRepository.save(updatedTodo);
        return ResponseEntity.ok(updatedTodo);
    }

    @DeleteMapping("{id}")
    public void deleteTodo(@PathVariable("id") Integer id) {
        Todo deletedTodo = this.todoRepository.findById(id).get();
        this.todoRepository.delete(deletedTodo);
    }
}
