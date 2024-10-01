package com.coworking.auth_service.presentation.controller;

import com.coworking.auth_service.presentation.dto.AuthRequest;
import com.coworking.auth_service.presentation.dto.UserDto;
import com.coworking.auth_service.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("api/v1/register")
@CrossOrigin("*")
@AllArgsConstructor
public class RegisterController {
    private  final UserService userService;
    @PostMapping
    public ResponseEntity<String> Firstregister(@RequestBody UserDto userDto){
        return new ResponseEntity<>(userService.registerUser(userDto), HttpStatus.CREATED);
    }
    @PostMapping("login")
    public ResponseEntity<Map<String,String>> Login(@RequestBody AuthRequest authRequest){
        Map<String,String> message = userService.authenticateUser(authRequest);
        return new ResponseEntity<>(message, HttpStatus.OK);
    }
}
