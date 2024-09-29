package com.coworking.auth_service.presentation.dto;

import com.coworking.auth_service.util.enums.RoleName;
import lombok.*;

import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private Set<RoleName> roles;
}