package com.coworking.auth_service.service;

import com.coworking.auth_service.presentation.dto.AuthRequest;
import com.coworking.auth_service.presentation.dto.UserDto;

import java.util.List;
import java.util.Map;


public interface UserService {
    UserDto createUser(UserDto userDto);
    UserDto getUserById(Long id);
    List<UserDto> getAllUsers();
    UserDto updateUser(Long id, UserDto userDto);
    void deleteUser(Long id);

    String registerUser(UserDto userDto);

    Map<String,String> authenticateUser(AuthRequest authRequest);
}