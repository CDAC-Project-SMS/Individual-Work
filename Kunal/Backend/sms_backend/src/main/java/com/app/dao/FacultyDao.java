package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.primary.Faculty;

public interface FacultyDao extends JpaRepository<Faculty, Long>{}
