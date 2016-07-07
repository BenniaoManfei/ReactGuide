package com.daniel.react.model;

import java.util.Arrays;

public class User {

	private long id;
	private String firstName;
	private String lastName;
	private String username;
	
	
	public User() {
		super();
	}

	public User(long id, String firstName, String lastName, String username) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.username = username;
	}

	private int[] opt = new int[]{1,2};

	public long getId() {
		return id;
	}

	public String getFirstName() {
		return firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public String getUsername() {
		return username;
	}

	public int[] getOpt() {
		return opt;
	}

	public void setId(long id) {
		this.id = id;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public void setOpt(int[] opt) {
		this.opt = opt;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", firstName=" + firstName + ", lastName="
				+ lastName + ", username=" + username + ", opt="
				+ Arrays.toString(opt) + "]";
	}
	
	
}
