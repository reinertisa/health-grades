package com.reinertisa.springboot.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "diseases_tb")
@Data @NoArgsConstructor @AllArgsConstructor @Getter @Setter
public class Disease {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long did;
	private String fever;
	private String breath;
	private String cough;
	private String headache;
	
	@JsonBackReference
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "email")
	private User user;

}
