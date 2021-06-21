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

import com.reinertisa.springboot.model.Dataset;
import com.reinertisa.springboot.service.DatasetService;

@RestController
@RequestMapping(path = "/api")
@CrossOrigin(origins = "http://localhost:3000")
public class DatasetController {
	
	@Autowired
	private DatasetService datasetService;
	
	@PostMapping(path = "/dataset", consumes = {MediaType.APPLICATION_JSON_VALUE})
	ResponseEntity<String> createDataset(@RequestBody Dataset dataset){
		boolean isDatasetCreated = datasetService.createDataset(dataset);
		return isDatasetCreated ? ResponseEntity.status(HttpStatus.CREATED).body("Dataset created") : ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Dataset not created");
	}
	
	@GetMapping(path = "/dataset", produces = {MediaType.APPLICATION_JSON_VALUE})
	ResponseEntity<List<Dataset>> getDataset(){
		List<Dataset> dataset = datasetService.getDataset();
		return ResponseEntity.ok(dataset);
	}
	

}
