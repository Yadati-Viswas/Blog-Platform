package com.user.signup.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.user.signup.model.UserResource;

@Repository
public interface SignUpRepository extends JpaRepository<UserResource,Long>{

    UserResource findByEmail(String email);

}
