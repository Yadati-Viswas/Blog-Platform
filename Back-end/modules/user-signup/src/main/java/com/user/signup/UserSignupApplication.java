package com.user.signup;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"com.user.signup", "com.user.login"})
public class UserSignupApplication {

	public static void main(String[] args) {
		SpringApplication.run(UserSignupApplication.class, args);
	}

}
