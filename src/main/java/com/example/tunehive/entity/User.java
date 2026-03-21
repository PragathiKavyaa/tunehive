package com.example.tunehive.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String phone;
    private String otp;

    public String getOtp() {
        return otp;
    }

    public void setOtp(String otp) {
        this.otp = otp;
    }

    private boolean agreed;

    public Long getId() {
        return id;
    }

    public String getPhone() {
        return phone;
    }

    public boolean isAgreed() {
        return agreed;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public void setAgreed(boolean agreed) {
        this.agreed = agreed;
    }

    // getters & setters
}