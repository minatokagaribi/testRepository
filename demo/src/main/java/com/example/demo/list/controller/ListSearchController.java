/**
 * 
 */
package com.example.demo.list.controller;

import org.springframework.stereotype.Service;

import com.example.demo.list.data.ListSearchInputData;
import com.example.demo.list.data.ListSearchOutputData;

/**
 * @author nagom
 *
 */
@Service
public class ListSearchController {

	public ListSearchOutputData execute(ListSearchInputData inputData) {
		ListSearchOutputData outputData = new ListSearchOutputData();
		
		return outputData;
	}
}
