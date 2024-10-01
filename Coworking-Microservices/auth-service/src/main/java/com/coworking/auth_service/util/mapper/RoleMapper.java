package com.coworking.auth_service.util.mapper;

import com.coworking.auth_service.persistence.entity.Role;
import com.coworking.auth_service.presentation.dto.RoleDto;
import org.springframework.stereotype.Component;

@Component
public class RoleMapper {

    public RoleDto toDTO(Role role) {
        if (role == null) {
            return null;
        }
        return RoleDto.builder()
                .id(role.getId())
                .name(role.getName())
                .description(role.getDescription())
                .build();
    }

    public Role toEntity(RoleDto roleDto) {
        if (roleDto == null) {
            return null;
        }
        return Role.builder()
                .id(roleDto.getId())
                .name(roleDto.getName())
                .description(roleDto.getDescription())
                .build();
    }
}
