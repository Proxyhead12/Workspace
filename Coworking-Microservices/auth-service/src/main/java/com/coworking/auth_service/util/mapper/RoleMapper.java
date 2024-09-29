package com.coworking.auth_service.util.mapper;

import com.coworking.auth_service.persistence.entity.Role;
import com.coworking.auth_service.presentation.dto.RoleDto;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface RoleMapper {

    RoleDto toDTO(Role role);
    Role toEntity(RoleDto roleDto);
}
