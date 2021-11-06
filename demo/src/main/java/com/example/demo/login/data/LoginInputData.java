/**
 * 
 */
package com.example.demo.login.data;

import org.springframework.stereotype.Repository;

/**
 * @author nagom
 *
 */
@Repository
public class LoginInputData {
	
	/** ログインID */
	private String loginId;
	
	/** パスワード */
	private String password;

	/**
	 * @return loginId
	 */
	public String getLoginId() {
		return loginId;
	}

	/**
	 * @param loginId セットする loginId
	 */
	public void setLoginId(String loginId) {
		this.loginId = loginId;
	}

	/**
	 * @return password
	 */
	public String getPassword() {
		return password;
	}

	/**
	 * @param password セットする password
	 */
	public void setPassword(String password) {
		this.password = password;
	}
	
	

}
