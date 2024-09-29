package com.coworking.auth_service.service.impl;

import com.coworking.auth_service.exception.RoleNotFoundException;
import com.coworking.auth_service.persistence.entity.Role;
import com.coworking.auth_service.persistence.repository.RolRepository;
import com.coworking.auth_service.presentation.dto.RoleDto;
import com.coworking.auth_service.service.RoleService;
import com.coworking.auth_service.util.mapper.RoleMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class RoleServiceImpl implements RoleService {

    private final RolRepository rolRepository;
    private final RoleMapper roleMapper;

    @Autowired
    public RoleServiceImpl(RolRepository rolRepository, RoleMapper roleMapper) {
        this.rolRepository = rolRepository;
        this.roleMapper = roleMapper;
    }

    @Override
    public RoleDto getById(Long id) {
        Optional<Role> role = rolRepository.findById(id);
        return role.map(roleMapper::toDTO)
                .orElseThrow(() -> new RoleNotFoundException(id));
    }


    @Override
    public List<RoleDto> getAll() {
        return rolRepository.findAll().stream()
                .map(roleMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public RoleDto save(RoleDto roleDto) {
        Role role = roleMapper.toEntity(roleDto);
        Role savedRole = rolRepository.save(role);
        return roleMapper.toDTO(savedRole);
    }

    @Override
    public RoleDto update(RoleDto roleDto, Long id) {
        if (!rolRepository.existsById(id)) {
            throw new RoleNotFoundException(id);
        }
        Role role = roleMapper.toEntity(roleDto);
        role.setId(id);
        Role updatedRole = rolRepository.save(role);
        return roleMapper.toDTO(updatedRole);
    }

    @Override
    public String delete(Long id) {
        if (rolRepository.existsById(id)) {
            rolRepository.deleteById(id);
            return "Role deleted successfully";
        } else {
            throw new RoleNotFoundException(id);
        }
    }
}
