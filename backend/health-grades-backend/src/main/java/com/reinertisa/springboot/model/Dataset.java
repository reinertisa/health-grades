package com.reinertisa.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "dataset_tb")
@Data @NoArgsConstructor @AllArgsConstructor @Getter @Setter
public class Dataset {
	
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    
    @Column(name = "sick_name")
    private String sickName;
    private String fever;
    private String breath;
    private String cough;
    private String headache;
    
}

