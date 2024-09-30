package com.user.login.exception;

public class InvalidLoginException extends RuntimeException {
    
    public InvalidLoginException( String messages) {
        super(messages);
    }

}
