package com.example.tunehive.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.tunehive.entity.User;
import com.example.tunehive.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository repo;

    // Save user (after phone input)
    public User saveUser(String phone, boolean agreed) {
        User user = new User();
        user.setPhone(phone);
        user.setAgreed(agreed);

        // dummy OTP (for now)
        user.setOtp("1234");

        return repo.save(user);
    }

    // Get user by phone
    public User getUserByPhone(String phone) {
        return repo.findByPhone(phone);
    }

    // ✅ Verify OTP method (ADD THIS)
    public boolean verifyOtp(String phone, String otp) {
        User user = repo.findByPhone(phone);

        if (user != null && user.getOtp().equals(otp)) {
            return true;
        }

        return false;
    }
}