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

    @GetMapping("/index")
    public String index() {
        return "index";
    }

    // 2️⃣ After phone submit → go to login (OTP page)
    @PostMapping("/send-otp")
    public String sendOtp(@RequestParam("phone") String phone,
            @RequestParam(value = "agree", required = false) boolean agreed,
            Model model,
            HttpSession session) {

        // Save phone number in DB
        service.saveUser(phone, agreed);

        // Store phone in session
        session.setAttribute("phone", phone);

        // Send phone to login page
        model.addAttribute("phone", phone);

        return "login";
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
    public String account(Model model, HttpSession session) {
        model.addAttribute("username", "Yazhini");
        model.addAttribute("email", "yazh31@gmail.com");
        model.addAttribute("planName", session.getAttribute("planName"));
        model.addAttribute("nextDate", session.getAttribute("nextDate"));
        return "account";
    }

    @GetMapping("/home")
    public String homePage() {
        return "home"; // home.html
    }

    @PostMapping("/subscribe")
    public String subscribe(
            @RequestParam String planName,
            @RequestParam String billingType,
            @RequestParam String amount,
            @RequestParam String nextDate,
            Model model,
            HttpSession session) {

        model.addAttribute("planName", planName);
        model.addAttribute("billingType", billingType);
        model.addAttribute("amount", amount);
        model.addAttribute("nextDate", nextDate);

        // ✅ store in session for account page
        session.setAttribute("planName", planName);
        session.setAttribute("nextDate", nextDate);

        return "success";
    }

    @GetMapping("/payment")
    public String showPaymentPage(
            @RequestParam(required = false) String planName,
            @RequestParam(required = false) String billingType,
            @RequestParam(required = false) String amount,
            @RequestParam(required = false) String nextDate,
            Model model) {

        model.addAttribute("planName", planName);
        model.addAttribute("billingType", billingType);
        model.addAttribute("amount", amount);
        model.addAttribute("nextDate", nextDate);

        return "payment";
    }

    @GetMapping("/plans")
    public String showPlans() {
        return "plans"; // returns plans.html
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