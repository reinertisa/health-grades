package com.reinertisa.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.reinertisa.springboot.model.Disease;
import com.reinertisa.springboot.repository.DiseaseRepository;

@Service("diseaseService")
public class DiseaseService {
	
	@Autowired
	DiseaseRepository diseaseRepository;
	
	
	public boolean createDisease(Disease disease) {
		return diseaseRepository.save(disease) != null;
	}

	public List<Disease> getDiseases(){		
		return diseaseRepository.findAll();
	}
}
