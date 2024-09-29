package com.coworking.auth_service.service.impl;

import com.coworking.auth_service.persistence.entity.User;
import com.coworking.auth_service.persistence.repository.UserRepository;
import com.coworking.auth_service.presentation.dto.UserDto;
import com.coworking.auth_service.service.UserService;
import com.coworking.auth_service.util.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final UserMapper userMapper;

    @Autowired
    public UserServiceImpl(UserRepository userRepository, UserMapper userMapper) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
    }

    @Override
    public UserDto getById(Long id) {
        Optional<User> user = userRepository.findById(id);
        return user.map(userMapper::toDTO).orElse(null);
    }

    @Override
    public List<UserDto> getAll() {
        return userRepository.findAll().stream()
                .map(userMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public UserDto save(UserDto userDTO) {
        User user = userMapper.toEntity(userDTO);
        User savedUser = userRepository.save(user);
        return userMapper.toDTO(savedUser);
    }

    @Override
    public UserDto update(UserDto entity, Long id) {
        if (!userRepository.existsById(id)) {
            return null;
        }
        User user = userMapper.toEntity(entity);
        user.setId(id);
        User updatedUser = userRepository.save(user);
        return userMapper.toDTO(updatedUser);
    }

    @Override
    public String delete(Long id) {
        if (userRepository.existsById(id)) {
            userRepository.deleteById(id);
            return "User deleted successfully";
        }
        return "User not found";
    }
}