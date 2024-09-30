package com.user.login.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.user.login.exception.InvalidLoginException;
import com.user.login.service.LoginUserService;
import com.user.signup.model.UserResource;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/auth")
public class LoginUserController {
    @Autowired
    private LoginUserService loginUserService;

    @PostMapping("/login")
    public ResponseEntity<String> findByEmail(@RequestBody Map<String, String> map) {
        String email = map.get("email");
        String password = map.get("password");
        try {
            UserResource userResource = loginUserService.findByEmail(email,password);
            return ResponseEntity.ok().build();
        } catch (InvalidLoginException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
