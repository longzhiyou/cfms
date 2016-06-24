package com.lzy.cfms.rest;

import com.lzy.cfms.common.ResponseMessage;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

/**
 * User: longzhiyou
 * Date: 2016-06-23
 * Time: 20:20
 */
@RestController
@RequestMapping("/api")
public class CustomerRestController {


    @RequestMapping(value = "/users",method = RequestMethod.POST)
    public ResponseMessage addUser(@Valid CustomUser user, BindingResult result, HttpServletResponse response) throws Exception {

        if (result.hasErrors()) {
            throw new Exception("HttpMessageNotReadableException");
        }
        return new ResponseMessage().success("form input is ok");
    }

    @RequestMapping(value = "/usersJson",method = RequestMethod.POST)
    public ResponseMessage addUserJson(@RequestBody CustomUser json) throws Exception {


        return new ResponseMessage().success(json);
    }

}