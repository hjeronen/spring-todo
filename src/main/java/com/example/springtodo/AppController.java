package com.example.springtodo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AppController {

    @RequestMapping(value = "/")
    public String redirect() {
        return "forward:/index.html";
    }
}
