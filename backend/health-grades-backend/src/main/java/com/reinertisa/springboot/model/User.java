package com.reinertisa.springboot.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "users_tb")
@Data @AllArgsConstructor @NoArgsConstructor @Getter @Setter
public class User {
	
	@Id
	private String email;
	
	@Column(name = "first_name")
	private String firstName;
	@Column(name = "last_name")	
	private String lastName;

	private String age;

	@JsonManagedReference //Prevents recursion in retrieve requests
	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private List<Disease> diseases = new ArrayList<>();
	
}
