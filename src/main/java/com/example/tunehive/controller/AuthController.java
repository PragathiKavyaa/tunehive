package com.example.tunehive.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import com.example.tunehive.service.UserService;

import jakarta.servlet.http.HttpSession;

@Controller
public class AuthController {

    @Autowired
    private UserService service;

    // 1️⃣ Welcome page
    @GetMapping("/")
    public String welcome() {
        return "welcome"; // welcome.html
    }

    @GetMapping("/login")
    public String login() {
        return "login";
    }

    // 2️⃣ After phone submit → go to login (OTP page)
    @PostMapping("/send-otp")
    public String sendOtp(@RequestParam String phone, HttpSession session) {

        // Save phone in database or send OTP
        service.saveUser(phone, false);

        // ✅ Store phone in session
        session.setAttribute("phone", phone);

        // Redirect to OTP page
        return "login"; // login.html (OTP page)
    }

    // 3️⃣ After OTP submit → go to index page
    @PostMapping("/verify-otp")
    public String verifyOtp(@RequestParam String otp, HttpSession session) {

        // ✅ Retrieve phone from session
        String phone = (String) session.getAttribute("phone");

        // Verify OTP using your service
        if (service.verifyOtp(phone, otp)) {
            return "index"; // success page
        } else {
            return "login"; // back to OTP page if wrong
        }
    }

    @GetMapping("/account")
    public String account(Model model) {
        model.addAttribute("username", "Yazhini");
        model.addAttribute("email", "yazh31@gmail.com");
        return "account";
    }

    @GetMapping("/home")
    public String homePage() {
        return "home"; // home.html
    }

    @PostMapping("/subscribe")
    public String subscribe(Model model) {

        model.addAttribute("planName", "Pro Individual");
        model.addAttribute("billingType", "Monthly");
        model.addAttribute("amount", "₹9.00");
        model.addAttribute("nextDate", "Jan 31, 2026");

        return "success";
    }

    @PostMapping("/payment")
    public String handlePayment(
            @RequestParam String email,
            @RequestParam String cardNumber,
            @RequestParam String cardName,
            @RequestParam String expiry,
            @RequestParam String cvv,
            @RequestParam String country) {

        System.out.println("Email: " + email);
        System.out.println("Card: " + cardNumber);

        // TODO: payment logic (or redirect)

        return "success"; // success.html page
    }

    @GetMapping("/plans")
    public String showPlans() {
        return "plans"; // returns plans.html
    }

    @GetMapping("/payment")
    public String showPaymentPage() {
        return "payment"; // returns payment.html
    }

    @GetMapping("/player")
    public String showPlayer() {
        return "player"; // returns player.html
    }

    @GetMapping("/logout")

    public String logout(HttpSession session) {
        session.invalidate();
        return "loggedout";
    }

}