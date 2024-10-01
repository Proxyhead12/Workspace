package com.coworking.auth_service.service.impl;

import com.coworking.auth_service.configuration.jwt.filter.JwtTokenProvider;
import com.coworking.auth_service.exception.UserNotFoundException;
import com.coworking.auth_service.exception.UserNotUnthorization;
import com.coworking.auth_service.persistence.entity.Role;
import com.coworking.auth_service.persistence.entity.User;
import com.coworking.auth_service.persistence.repository.RoleRepository;
import com.coworking.auth_service.persistence.repository.UserRepository;
import com.coworking.auth_service.presentation.dto.AuthRequest;
import com.coworking.auth_service.presentation.dto.UserDto;
import com.coworking.auth_service.util.enums.RoleName;
import com.coworking.auth_service.util.mapper.RoleMapper;
import com.coworking.auth_service.util.mapper.UserMapper;
import com.coworking.auth_service.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;
import java.util.stream.Collectors;

@Service
@Transactional
@AllArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final RoleMapper roleMapper;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider jwtTokenProvider;

    @Override
    public UserDto createUser(UserDto userDto) {
        User user = userMapper.toEntity(userDto);
        User savedUser = userRepository.save(user);
        return userMapper.toDTO(savedUser);
    }

    @Override
    public UserDto getUserById(Long id) {
        return userRepository.findById(id)
                .map(userMapper::toDTO)
                .orElseThrow(() -> new IllegalArgumentException("User not found"));
    }

    @Override
    public List<UserDto> getAllUsers() {
        return userRepository.findAll().stream()
                .map(userMapper::toDTO)
                .toList();
    }

    @Override
    public UserDto updateUser(Long id, UserDto userDto) {
        User existingUser = userRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("User not found"));

        existingUser.setFirstName(userDto.getFirstName());
        existingUser.setLastName(userDto.getLastName());
        existingUser.setEmail(userDto.getEmail());
        existingUser.setPassword(userDto.getPassword());
        /*existingUser.setRoles(userDto.getRoles().stream()
                .map(roleMapper::toEntity)
                .collect(Collectors.toSet()));


         */
        return userMapper.toDTO(userRepository.save(existingUser));
    }

    @Override
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    @Override
    public String registerUser(UserDto userDto) {
        try{
            User user = User.builder()
                    .lastName(userDto.getLastName())
                    .firstName(userDto.getFirstName())
                    .email(userDto.getEmail())
                    .password(passwordEncoder.encode(userDto.getPassword()))
                    .build();
            System.out.println(":::::::::::::=>>>  "+RoleName.USER.name());
            Role userRole = roleRepository.findByName(RoleName.USER);
            user.setRoles(Set.of(userRole));
            userRepository.save(user);
            return "User registered successfully with role USER";
        }catch (Exception e){
            return "Failed to register user";
        }
    }

    @Override
    public Map<String, String> authenticateUser(AuthRequest authRequest) {
        Optional<User> userOptional= this.userRepository.findByEmail(authRequest.getEmail());
        if (userOptional.isEmpty()){
            throw new UserNotFoundException();
        }
        User user = userOptional.get();
         Authentication authentication= authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authRequest.getEmail(), authRequest.getPassword())
        );
         if(!authentication.isAuthenticated()){
             throw new UserNotUnthorization("Invalid email or password");
         }
        final String jwt = jwtTokenProvider.generateToken(authentication);
        Map<String, String> response=new HashMap<String, String>();
        response.put("jwt", jwt);
        response.put("firstName", user.getFirstName());
        response.put("lastName", user.getLastName());
        response.put("email", user.getEmail());
        response.put("roles", user.getRoles().stream()
                .map(role -> role.getName().toString())
                .collect(Collectors.joining(", ")));
        return response;
    }
}
