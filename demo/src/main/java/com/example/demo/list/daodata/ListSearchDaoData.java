/**
 * 
 */
package com.example.demo.list.daodata;

import org.springframework.stereotype.Repository;

/**
 * @author nagom
 *
 */
@Repository
public class ListSearchDaoData {

	/** 日付 */
	private String date;
	
	/** 件名 */
	private String kenmei;
	
	/** 作者 */
	private String creater;

	/**
	 * @return date
	 */
	public String getDate() {
		return date;
	}

	/**
	 * @param date セットする date
	 */
	public void setDate(String date) {
		this.date = date;
	}

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

	/**
	 * @return creater
	 */
	public String getCreater() {
		return creater;
	}

	/**
	 * @param creater セットする creater
	 */
	public void setCreater(String creater) {
		this.creater = creater;
	}
	
	
}
