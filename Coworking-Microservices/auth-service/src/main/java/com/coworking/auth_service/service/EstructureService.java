package com.coworking.auth_service.service;

import java.util.List;

public interface EstructureService<T> {
    public T getById(Long id);
    public List<T> getAll();
    public T save(T entity);
    public T update(T entity, Long id);
    public String delete(Long id);
}
