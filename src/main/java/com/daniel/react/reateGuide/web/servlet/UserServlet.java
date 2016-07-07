package com.daniel.react.reateGuide.web.servlet;

import java.awt.print.Pageable;
import java.io.IOException;
import java.io.Writer;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.alibaba.fastjson.JSONObject;
import com.daniel.react.model.User;

/**
 * Servlet implementation class UserServlet
 */
public class UserServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public static Map<Long, User> userMap = new HashMap<Long, User>();
	
	static {
		
		userMap.put(1L, new User(1L,"Dai","Zhengmiao","987@qq.com"));
		userMap.put(2L, new User(2L,"Da2","Zhengmiao2","987@qq.com"));
		userMap.put(3L, new User(3L,"D3","Zhengmiao3","987@qq.com"));
		userMap.put(4L, new User(4L,"Dai4","Zhengmiao4","987@qq.com"));
		userMap.put(5L, new User(5L,"Dai5","Zhengmiao4","987@qq.com"));
	}
	

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		response.setCharacterEncoding("UTF-8");
		
		List<User> users = new ArrayList<User>();
		users.add(userMap.get(3L));
		users.add(userMap.get(4L));
	
		
		Map<String, Integer> pageData = new HashMap<String, Integer>();
		pageData.put("pageSize", 2);
		pageData.put("currPage", 2);
		pageData.put("countPage", 3);
		
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("users", users);
		jsonObject.put("pageData", pageData);
		
		String json = jsonObject.toJSONString();
		System.out.println(json);
		Writer out =response.getWriter();
		out.write(json);
		out.flush();
		out.close();
		
	}

}
