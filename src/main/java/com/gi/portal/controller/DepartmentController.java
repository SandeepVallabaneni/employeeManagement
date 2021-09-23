package com.gi.portal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.*;

import com.gi.portal.entity.Department;
import com.gi.portal.service.DepartmentService;

import lombok.extern.slf4j.Slf4j;


@RestController
@RequestMapping("/departments")
@Slf4j
public class DepartmentController {

	@Autowired
	private DepartmentService departmentService;
	
	@GetMapping("/")
	public List<Department> getAllDepartments(){
		return departmentService.getAllDepartments();
	}
	
	@PostMapping("/")
	public Department saveDepartment(@RequestBody Department department) {
		return departmentService.saveDepartment(department);
	}
	
	@GetMapping("/{id}")
    public Department findByDepartmentId(@PathVariable("id") Long departmentId) {
        return departmentService.findByDepartmentId(departmentId);
    }

}
