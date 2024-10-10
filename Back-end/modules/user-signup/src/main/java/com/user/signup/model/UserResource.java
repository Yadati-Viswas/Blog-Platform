package com.user.signup.model;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class UserResource {

    @Id
    @GeneratedValue
    private int Id;
    private String email;
    private String firstname;
    private String lastname;
    private String username;
    private String mobilenumber;
    private String gender;
    private String Password;
    private String confirmpassword;
    private LocalDateTime lastlogin;
    private LocalDateTime createdon;

    //private String userpermission;
    

    public int getId() {
        return this.Id;
    }

    public void setId(int Id) {
        this.Id = Id;
    }

    public String getConfirmpassword() {
        return this.confirmpassword;
    }

    public void setConfirmpassword(String confirmpassword) {
        this.confirmpassword = confirmpassword;
    } 

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getFirstname() {
        return this.firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return this.lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return this.Password;
    }

    public void setPassword(String Password) {
        this.Password = Password;
    }

    public String getGender() {
        return this.gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getMobilenumber() {
        return this.mobilenumber;
    }

    public void setMobilenumber(String mobilenumber) {
        this.mobilenumber = mobilenumber;
    }

    public LocalDateTime getLastlogin() {
        return this.lastlogin;
    }

    public void setLastlogin(LocalDateTime localDateTime) {
        this.lastlogin = localDateTime;
    }

    public LocalDateTime getCreatedon() {
        return this.createdon;
    }

    public void setCreatedon(LocalDateTime createdon) {
        this.createdon = createdon;
    }

    // public String getUserpermission() {
    //     return this.userpermission;
    // }

    // public void setUserpermission(String userpermission) {
    //     this.userpermission = userpermission;
    // }
    

}
