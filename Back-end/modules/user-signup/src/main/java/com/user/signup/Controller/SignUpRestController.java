package com.user.signup.Controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.user.signup.model.UserResource;
import com.user.signup.service.SignUpService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/user")
public class SignUpRestController {

    private static final Logger log = LoggerFactory.getLogger(SignUpRestController.class);

    @Autowired
    private SignUpService signUpService;

    @PostMapping("/save")
    public ResponseEntity<UserResource> saveUser(@RequestBody UserResource userResource) {
        UserResource savedUser = signUpService.saveUser(userResource);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }

}
