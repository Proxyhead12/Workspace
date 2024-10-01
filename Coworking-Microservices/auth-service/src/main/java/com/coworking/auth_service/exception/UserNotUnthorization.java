package com.coworking.auth_service.exception;

public class UserNotUnthorization extends RuntimeException{
    public UserNotUnthorization(String message) {
        super(message);
    }
}
