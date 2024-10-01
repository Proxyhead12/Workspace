package com.coworking.auth_service.presentation.advice;

import com.coworking.auth_service.exception.RoleNotFoundException;
import com.coworking.auth_service.exception.UserNotFoundException;
import com.coworking.auth_service.exception.UserNotUnthorization;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
@Configuration
public class ControllerAdvice {

    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<String> handleUserNotFoundException(UserNotFoundException ex) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleGlobalException(Exception ex) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An unexpected error occurred FATALXD: " + ex.getMessage());
    }
    @ExceptionHandler(RoleNotFoundException.class)
    public ResponseEntity<String> handleRoleNotFoundException(RoleNotFoundException ex) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
    }
    @ExceptionHandler(UserNotUnthorization.class)
    public ResponseEntity<String> handleUserNotUnthorization(UserNotUnthorization userNotUnthorization) {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(userNotUnthorization.getMessage());
    }
}
