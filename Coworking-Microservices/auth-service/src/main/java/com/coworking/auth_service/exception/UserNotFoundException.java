package com.coworking.auth_service.exception;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(Long id) {
        super("User not found with ID: " + id);
    }
    public UserNotFoundException() {
        super("User not found  ERROR :(");
    }

}