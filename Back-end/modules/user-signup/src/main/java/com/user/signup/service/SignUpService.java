package com.user.signup.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.user.signup.model.UserResource;
import com.user.signup.repository.SignUpRepository;

@Service
public class SignUpService {

    @Autowired
    private SignUpRepository signUpRepository;

    public UserResource saveUser(UserResource userResource) {
        UserResource userSaved = signUpRepository.save(userResource);
        return userSaved;
    }

}
