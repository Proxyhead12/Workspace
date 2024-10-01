package com.coworking.auth_service.presentation.controller;

import com.coworking.auth_service.presentation.dto.RoleDto;
import com.coworking.auth_service.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/roles")
public class RoleController {
/*
    private final RoleService roleService;
    @Autowired
    public RoleController(RoleService roleService) {
        this.roleService = roleService;
    }
    @GetMapping("/{id}")
    public ResponseEntity<RoleDto> getById(@PathVariable Long id) {
        RoleDto roleDto = roleService.getById(id);
        return ResponseEntity.ok(roleDto);
    }

    @GetMapping
    public ResponseEntity<List<RoleDto>> getAll() {
        List<RoleDto> roles = roleService.getAll();
        return ResponseEntity.ok(roles);
    }

    @PostMapping
    public ResponseEntity<RoleDto> createRole(@RequestBody RoleDto roleDto) {
        RoleDto savedRole = roleService.save(roleDto);
        return new ResponseEntity<>(savedRole, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<RoleDto> updateRole(@RequestBody RoleDto roleDto, @PathVariable Long id) {
        RoleDto updatedRole = roleService.update(roleDto, id);
        return ResponseEntity.ok(updatedRole);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteRole(@PathVariable Long id) {
        String response = roleService.delete(id);
        return ResponseEntity.ok(response);
    }

 */
}
