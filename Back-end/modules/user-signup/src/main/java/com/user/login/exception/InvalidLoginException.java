package com.user.login.exception;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class InvalidLoginException extends RuntimeException {

    private static final Logger log = LoggerFactory.getLogger(InvalidLoginException.class);
    
    public InvalidLoginException( String messages) {
        super(messages);
    }

}
