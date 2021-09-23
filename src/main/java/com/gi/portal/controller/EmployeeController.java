package com.gi.portal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gi.portal.entity.Employee;
import com.gi.portal.service.EmployeeService;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/employees")
@Slf4j
public class EmployeeController {
	
	@Autowired
	private EmployeeService employeeService;
	
	@GetMapping("/")
    public List<Employee> getAllEmployees() {
        return employeeService.getAllEmployees();
    }
	
	@PostMapping("/")
	public Employee saveEmployee(@RequestBody Employee employee) {
		return employeeService.saveEmployee(employee);
	}
	
	@GetMapping("/{id}")
    public Employee findByEmployeeId(@PathVariable("id") Long employeeId) {
        return employeeService.findByEmployeeId(employeeId);
    }
	
	@PutMapping("/")
	public Employee updateDepartment(@RequestBody Employee employee) {
		return employeeService.saveEmployee(employee);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Long> deleteDepartment(@PathVariable("id") Long employeeId) {
		Employee employee = employeeService.findByEmployeeId(employeeId);
		if(employee != null) {
			employeeService.deleteByEmployeeId(employeeId);
		}else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
        return new ResponseEntity<>(employeeId, HttpStatus.OK);
    }

}
