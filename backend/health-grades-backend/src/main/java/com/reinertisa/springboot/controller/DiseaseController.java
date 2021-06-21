package com.reinertisa.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.reinertisa.springboot.model.Disease;
import com.reinertisa.springboot.service.DiseaseService;

@RestController("diseaseController")
@RequestMapping(path = "/api")
@CrossOrigin(origins = "http://localhost:3000")
public class DiseaseController {
	
	@Autowired
	private DiseaseService diseaseService;
	
	@PostMapping(path = "/disease", consumes = {MediaType.APPLICATION_JSON_VALUE})
	ResponseEntity<String> createDisease(@RequestBody Disease disease){
		
		boolean isDiseaseCreated = diseaseService.createDisease(disease);		
		return isDiseaseCreated ? ResponseEntity.status(HttpStatus.CREATED).body("Disease recorded") : ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Disease not recorded");		

	}
	
	@GetMapping(path = "/disease", produces = {MediaType.APPLICATION_JSON_VALUE})
	ResponseEntity<List<Disease>> getDiseases(){
		
		List<Disease> diseases = diseaseService.getDiseases();		
		return ResponseEntity.ok(diseases);
	}
	

}
