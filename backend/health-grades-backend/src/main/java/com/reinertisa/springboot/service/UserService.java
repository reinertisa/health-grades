package com.reinertisa.springboot.service;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.reinertisa.springboot.model.Dataset;
import com.reinertisa.springboot.model.Disease;
import com.reinertisa.springboot.model.TestResult;
import com.reinertisa.springboot.model.User;
import com.reinertisa.springboot.repository.DatasetRepository;
import com.reinertisa.springboot.repository.DiseaseRepository;
import com.reinertisa.springboot.repository.UserRepository;

@Service("userService")
public class UserService {
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	DiseaseRepository diseaseRepository;
	
	@Autowired
	DatasetRepository datasetRepository;
	
	public boolean createUser(User user) {		
		return userRepository.save(user) != null;		
	}
	
	public List<User> getUsers(){
		return userRepository.findAll();
	}
	
	public TestResult getTestResults(String email) {
		
		User user = userRepository.findByEmail(email);
		
		List<Dataset> dataset = datasetRepository.findAll();	
		
		TestResult testResult = new TestResult();
		testResult.setEmail(email);
		testResult.setTestResult(new HashMap<>());
		
		List<Disease> diseases = user.getDiseases();
		
		for(Disease disease : diseases) {
			int score = 0;
			for(Dataset set : dataset) {
				
				score = disease.getFever() == set.getFever() ? score + 1 : score;
				score = disease.getBreath() == set.getBreath() ? score + 1 : score;
				score = disease.getCough() == set.getCough() ? score + 1 : score;
				score = disease.getHeadache() == set.getHeadache() ? score + 1 : score;
				
				testResult.getTestResult().put(set.getSickName(), (double)score / 4);
				score = 0;
			}
			
		}
			
		return testResult;
	}

}
