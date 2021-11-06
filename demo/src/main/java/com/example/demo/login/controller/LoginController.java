/**
 * 
 */
package com.example.demo.login.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import com.example.demo.login.data.LoginInputData;
import com.example.demo.login.data.LoginOutputData;

/**
 * @author nagom
 *
 */
@Service
public class LoginController {
	
	@Autowired
	JdbcTemplate jdbcTemplate;
	
	public LoginOutputData execute(LoginInputData inputData) {
		LoginOutputData outputData = new LoginOutputData();
		//outputData.setLoginId("test");
		//outputData.setLoginNm("tesetNm");
		String sql = ""
				+ "SELECT "
				+ "id loginId, "
				+ "name loginNm, "
				+ "email "
				+ "FROM "
				+ "users "
				+ "WHERE "
				+ "id = ? ";
		RowMapper<LoginOutputData> rowMapper = new BeanPropertyRowMapper<LoginOutputData>(LoginOutputData.class);
		outputData = jdbcTemplate.queryForObject(sql, rowMapper, inputData.getLoginId());
		
		return outputData;
	}

}
