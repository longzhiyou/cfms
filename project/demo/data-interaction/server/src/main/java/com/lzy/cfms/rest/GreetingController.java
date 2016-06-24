package com.lzy.cfms.rest;

import java.util.concurrent.atomic.AtomicLong;

import static  com.lzy.cfms.common.Common.BASE_PATH;

import com.lzy.cfms.common.ResponseMessage;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;


@RestController
//@CrossOrigin()
@RequestMapping(BASE_PATH)
public class GreetingController {

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @RequestMapping("/greeting")
    public CustomUser greeting(@RequestParam(value="name", defaultValue="World") String name) {

        CustomUser customUser = new CustomUser();
        customUser.setName("lzy");
        customUser.setPassword("123456");
        return  customUser;

    }

    @RequestMapping("/person")
    public CustomPerson getPerson() {

        CustomPerson person = new CustomPerson(100,"longzhiyou");
        return  person;

    }


}
