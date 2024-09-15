package com.CoworkingApp.CoworkingApp.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
@RequestMapping("api/v1/coworking")
public class HelloController {
    @GetMapping
    public String hello(){
        return "Hello from CoworkingApp!, by Anthony ";
    }
}
