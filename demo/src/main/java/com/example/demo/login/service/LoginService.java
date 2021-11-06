/**
 * 
 */
package com.example.demo.login.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.login.controller.LoginController;
import com.example.demo.login.data.LoginInputData;
import com.example.demo.login.data.LoginOutputData;

/**
 * @author nagom
 *
 */
/**
 * ログインのサービスクラス
 * @author nagom
 *
 */
@CrossOrigin(origins = "http://localhost:4200")
@Controller
public class LoginService {
	
	@Autowired
	protected LoginController controller;

	/**
	 * ログイン処理のサービスメソッド
	 * @param loginId
	 * @return
	 */
	@RequestMapping(path = "/login", method = RequestMethod.POST)
	@ResponseBody
	public LoginOutputData loginService(@RequestBody LoginInputData inputData) {
		// コントローラを呼び出す
		LoginOutputData result = controller.execute(inputData);
		return result;
	}
}
