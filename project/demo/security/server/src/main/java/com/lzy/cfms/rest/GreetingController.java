package com.lzy.cfms.rest;

import java.util.concurrent.atomic.AtomicLong;

import static  com.lzy.cfms.common.Common.BASE_PATH;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;



@RestController
//@CrossOrigin()
@RequestMapping(BASE_PATH)
public class GreetingController {

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @RequestMapping("/greeting")
    public Greeting greeting(@RequestParam(value="name", defaultValue="World") String name) {
        return new Greeting(counter.incrementAndGet(),
                            String.format(template, name), name);
    }
}
