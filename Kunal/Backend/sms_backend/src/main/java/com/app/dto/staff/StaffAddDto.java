package com.app.dto.staff;

import com.app.entities.primary.Organization;
import com.app.entities.secondary.Address;

import lombok.Data;

@Data
public class StaffAddDto {
	private String staffFName;
	private String staffMName;
	private String staffLName;
	private String staffMobNo;
	private Address staffAddress;
	private String staffQualif;
	private String staffCategory;
	private String email;
	private String password;
	private long orgId;
}