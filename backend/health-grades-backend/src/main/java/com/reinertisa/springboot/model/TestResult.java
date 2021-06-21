package com.reinertisa.springboot.model;

import java.util.Map;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data @NoArgsConstructor @AllArgsConstructor @Getter @Setter
public class TestResult {
	
	private String email;
	private Map<String, Double> testResult;

}
