/**
 * 
 */
package com.example.demo.list.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.list.controller.ListSearchController;
import com.example.demo.list.data.ListSearchInputData;
import com.example.demo.list.data.ListSearchOutputData;

/**
 * @author nagom
 *
 */
@CrossOrigin(origins = "http://localhost:4200")
@Controller
public class ListSearchService {

	@Autowired
	protected ListSearchController controller;
	
	/**
	 * 
	 * @param inputData
	 * @return
	 */
	
	@RequestMapping(path = "/list", method = RequestMethod.POST)
	@ResponseBody
	public ListSearchOutputData listSearchService(@RequestBody ListSearchInputData inputData) {
		ListSearchOutputData result = controller.execute(inputData);
		return result;
	}
}
