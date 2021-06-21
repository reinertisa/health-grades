package com.reinertisa.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.reinertisa.springboot.model.Dataset;
import com.reinertisa.springboot.repository.DatasetRepository;

@Service("datasetService")
public class DatasetService {

	@Autowired
	DatasetRepository datasetRepository;
	
	public boolean createDataset(Dataset dataset) {		
		return datasetRepository.save(dataset) != null;
	}
	
	public List<Dataset> getDataset(){
		return datasetRepository.findAll();
	}
	
}
