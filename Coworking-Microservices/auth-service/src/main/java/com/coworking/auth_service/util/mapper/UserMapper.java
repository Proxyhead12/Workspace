package com.coworking.auth_service.util.mapper;

import com.coworking.auth_service.persistence.entity.Role;
import com.coworking.auth_service.persistence.entity.User;
import com.coworking.auth_service.persistence.repository.UserRepository;
import com.coworking.auth_service.presentation.dto.RoleDto;
import com.coworking.auth_service.presentation.dto.UserDto;
import org.springframework.stereotype.Component;

import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

@Component
public class UserMapper {
    private final RoleMapper roleMapper;
    private final UserRepository userRepository;
    public UserMapper(RoleMapper roleMapper, UserRepository userRepository) {
        this.roleMapper = roleMapper;
        this.userRepository = userRepository;
    }

    public UserDto toDTO(User user) {
        if (user == null) {
            return null;
        }
        Set<Role> roles = user.getRoles();
        Set<RoleDto>  roleDtos=new HashSet<RoleDto>();
        for(Role role:roles){
            roleDtos.add(roleMapper.toDTO(role));
        }
        return UserDto.builder()
                .id(user.getId())
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .email(user.getEmail())
                .roles(roleDtos)
                .build();
    }

    public User toEntity(UserDto userDto) {
        User user = new User();
        user.setId(userDto.getId());
        user.setFirstName(userDto.getFirstName());
        user.setLastName(userDto.getLastName());
        user.setEmail(userDto.getEmail());
        user.setPassword(userDto.getPassword());
        return user;
    }
}

