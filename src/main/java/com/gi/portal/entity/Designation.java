package com.gi.portal.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Designation {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long designationId;
	
	private String designationName;
	
	private String designationCode;
	
	private String description;

	public Long getId() {
		return designationId;
	}

	public void setId(Long id) {
		this.designationId = id;
	}

	public String getDesignationName() {
		return designationName;
	}

	public void getDesignationName(String designationName) {
		this.designationName = designationName;
	}

	public String getDesignationCode() {
		return designationCode;
	}

	public void getDesignationCode(String designationCode) {
		this.designationCode = designationCode;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public String toString() {
		return "Designatoin [id=" + designationId + ", designationName=" + designationName + ", designationCode=" + designationCode
				+ ", description=" + description + "]";
	}
	
	
	
	

}
