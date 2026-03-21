package com.example.tunehive.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.tunehive.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    User findByPhone(String phone);
}