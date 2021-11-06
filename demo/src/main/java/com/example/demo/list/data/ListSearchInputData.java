/**
 * 
 */
package com.example.demo.list.data;

import org.springframework.stereotype.Repository;

/**
 * @author nagom
 *
 */
@Repository
public class ListSearchInputData {
	
	/** 件名 */
	private String kenmei;

	/**
	 * @return kenmei
	 */
	public String getKenmei() {
		return kenmei;
	}

	/**
	 * @param kenmei セットする kenmei
	 */
	public void setKenmei(String kenmei) {
		this.kenmei = kenmei;
	}
	
	

}
