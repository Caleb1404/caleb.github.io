package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

    @GetMapping("/hello")
    public String hello(){
        return "Hello, welcome to this API";
    }

    @GetMapping("/getStudent")
    public student getStudent(){
        return  new student("John",25);
    }
}
