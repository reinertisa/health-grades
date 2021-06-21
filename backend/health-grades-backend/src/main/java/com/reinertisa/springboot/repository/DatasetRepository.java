package com.reinertisa.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.reinertisa.springboot.model.Dataset;

public interface DatasetRepository extends JpaRepository<Dataset, Integer>{

}
