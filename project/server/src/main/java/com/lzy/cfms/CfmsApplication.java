package com.lzy.cfms;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class CfmsApplication {

	public static void main(String[] args) {
		SpringApplication.run(CfmsApplication.class, args);
	}
}
