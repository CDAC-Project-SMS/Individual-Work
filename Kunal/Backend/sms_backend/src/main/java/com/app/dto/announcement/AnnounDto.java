package com.app.dto.announcement;

import java.sql.Timestamp;

import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Data;

@Data
public class AnnounDto {
	@JsonProperty(access = Access.READ_ONLY)
	private long announId;
	private String announType;
	private String announContent;
	private Timestamp announTimestamp;
	@NotNull
	private long orgId;
}
