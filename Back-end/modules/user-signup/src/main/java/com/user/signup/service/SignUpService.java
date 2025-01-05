package com.user.signup.service;

import java.time.LocalDateTime;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.user.signup.model.UserResource;
import com.user.signup.repository.SignUpRepository;

@Service
public class SignUpService {

    private static final Logger log = LoggerFactory.getLogger(SignUpService.class);

    @Autowired
    private SignUpRepository signUpRepository;

    public UserResource saveUser(UserResource userResource) {
        userResource.setCreatedon(LocalDateTime.now());
        userResource.setLastlogin(LocalDateTime.now());
        UserResource userSaved = signUpRepository.save(userResource);
        
        return userSaved;
    }

}
