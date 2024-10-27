package com.user.signup.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.user.signup.model.UserResource;

@Repository
public interface SignUpRepository extends CrudRepository<UserResource,Long>{

}
