package com.user.login.service;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.user.login.exception.InvalidLoginException;
import com.user.signup.model.UserResource;
import com.user.signup.repository.SignUpRepository;

@Service
public class LoginUserService {

    @Autowired
    private SignUpRepository signUpRepository;

    public UserResource findByEmail(String email, String password) {
        UserResource userResource = signUpRepository.findByEmail(email);
        if (userResource == null) {
            throw new InvalidLoginException("Invalid email");
        }

        if (!userResource.getPassword().equals(password)) {
            throw new InvalidLoginException("Invalid password");
        }
        userResource.setLastlogin(LocalDateTime.now());
        signUpRepository.save(userResource);
        return userResource;
    }

}
