/**
 *
 */
package com.example.demo.sample;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author nagom
 *
 */

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class SampleController {

	@Autowired
	JdbcTemplate jdbcTemplate;

	/*
	 * @GetMapping("/") public String index(Model model) throws
	 * JsonProcessingException { List<Map<String, Object>> list; list =
	 * jdbcTemplate.queryForList("select * from users"); model.addAttribute("users",
	 * list); // JSON変換用のクラス ObjectMapper mapper = new ObjectMapper(); String json =
	 * mapper.writeValueAsString(list); return json; }
	 */

	/*
	 * @GetMapping("/login") public String getUserName(Model model) throws
	 * JsonProcessingException { List<Map<String, Object>> list; list =
	 * jdbcTemplate.queryForList("select * from users"); // JSON変換用のクラス ObjectMapper
	 * mapper = new ObjectMapper(); String json = mapper.writeValueAsString(list);
	 * return json; }
	 */


	/*
	 * @PostMapping("/regist")
	 * 
	 * @ResponseBody public String getRegist(@RequestBody RegistInputData data) {
	 * Map<String, Object> id =
	 * jdbcTemplate.queryForMap("SELECT LAST_INSERT_ID() FROM usersequence");
	 * jdbcTemplate.
	 * update("INSERT INTO users(id, userid, name, email) VALUES(?, ?, ?, ?)",
	 * id.get("id"), data.getId(), data.getName(), data.getEmail());
	 * 
	 * return ""; }
	 */

}
