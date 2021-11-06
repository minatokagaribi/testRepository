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
public class LoginOutputData {
	
	/** ログインID */
	private String loginId;
	
	/** ログイン名 */
	private String loginNm;

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
	 * @return loginNm
	 */
	public String getLoginNm() {
		return loginNm;
	}

	/**
	 * @param loginNm セットする loginNm
	 */
	public void setLoginNm(String loginNm) {
		this.loginNm = loginNm;
	}
	
	

}
