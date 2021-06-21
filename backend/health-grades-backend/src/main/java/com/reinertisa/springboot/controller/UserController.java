package com.reinertisa.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.reinertisa.springboot.model.TestResult;
import com.reinertisa.springboot.model.User;
import com.reinertisa.springboot.service.UserService;

@RestController("userController")
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

	@Autowired
	private UserService userService;
	
	@PostMapping(path = "/user", consumes = {MediaType.APPLICATION_JSON_VALUE})
	public ResponseEntity<String> createUser(@RequestBody User user){
		
		boolean isUserCreated = userService.createUser(user);		
		return isUserCreated ? ResponseEntity.status(HttpStatus.CREATED).body("User Created") : ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("User not Created");
	}
	
	@GetMapping(path = "/user", produces = {MediaType.APPLICATION_JSON_VALUE})
	public ResponseEntity<List<User>> getUsers(){
		List<User> users = userService.getUsers();
		return ResponseEntity.ok(users);
	}
	
	@GetMapping(path = "/user/test/{email}", produces = {MediaType.APPLICATION_JSON_VALUE})
	public ResponseEntity<TestResult> getTestResults(@PathVariable("email") String email){
		
	
		TestResult testResult = userService.getTestResults(email);
		
		return ResponseEntity.ok(testResult);
	}
	
}
