package com.coworking.auth_service.presentation.dto;

import com.coworking.auth_service.util.enums.RoleName;
import jakarta.persistence.CascadeType;
import jakarta.persistence.OneToMany;
import lombok.*;

import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RoleDto {
    private Long id;
    private RoleName name;
    private String description;
}