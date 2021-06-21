package com.reinertisa.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.reinertisa.springboot.model.Disease;

@Repository
public interface DiseaseRepository extends JpaRepository<Disease, Long>{

}
