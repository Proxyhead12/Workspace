package com.coworking.auth_service.presentation.dto;

import com.coworking.auth_service.util.enums.RoleName;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RoleDto {
    private Long id;
    private RoleName name;
    private String description;
}