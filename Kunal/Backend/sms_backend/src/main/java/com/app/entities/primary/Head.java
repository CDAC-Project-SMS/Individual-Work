package com.app.entities.primary;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="Head")
@Data
@NoArgsConstructor
public class Head {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="head_id")
	private long headId;
	
	@Column(name="f_name",length = 50)
	private String headFName;
	
	@Column(name="m_name",length = 50)
	private String headMName;
	
	@Column(name="l_name",length = 50)
	private String headLName;
	
	@Column(name="mob_no",length = 15)
	private String headMobNo;
	
	@Column(name="address")
	private String headAddress;
	
	@Column(name="qualification",length = 50)
	private String headQualif;
	
	@Column(length = 60)
	private String email;
	
	@Column(length = 90)
	private String password;
	
	@OneToOne
	@JoinColumn(name = "org_id",nullable = false)
	private Organization organization;
}
