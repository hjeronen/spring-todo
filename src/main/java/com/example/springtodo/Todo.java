package com.example.springtodo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Todo {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String text;

    private boolean done;

    private Todo() {
    }

    public Todo(String todo) {
        this.text = todo;
        this.done = false;
    }

    public Integer getId() {
        return this.id;
    }

    public String getText() {
        return this.text;
    }

    public boolean getDone() {
        return this.done;
    }

    public void setDone(boolean value) {
        this.done = value;
    }
}
