package com.coworking.auth_service.persistence.repository;

import com.coworking.auth_service.persistence.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RolRepository extends JpaRepository<Role,Long> {
}
