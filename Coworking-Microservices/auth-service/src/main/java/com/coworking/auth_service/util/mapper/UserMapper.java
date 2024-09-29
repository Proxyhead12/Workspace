package com.coworking.auth_service.util.mapper;

import com.coworking.auth_service.persistence.entity.Role;
import com.coworking.auth_service.persistence.entity.User;
import com.coworking.auth_service.presentation.dto.UserDto;
import com.coworking.auth_service.util.enums.RoleName;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import java.util.Set;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface UserMapper {
    @Mapping(source = "roles", target = "roles", qualifiedByName = "mapRolesToString")
    UserDto toDTO(User user);
    @Mapping(source = "roles", target = "roles", qualifiedByName = "mapStringToRoles")
    User toEntity(UserDto userDto);
    @Named("mapRolesToString")
    default Set<RoleName> mapRolesToString(Set<Role> roles) {
        return roles.stream()
                .map(role -> role.getName())
                .collect(Collectors.toSet());
    }
    @Named("mapStringToRoles")
    default Set<Role> mapStringToRoles(Set<RoleName> roleNames) {
        return roleNames.stream().map(roleName -> {
            Role role = new Role();
            role.setName(roleName);
            return role;
        }).collect(Collectors.toSet());
    }
}
