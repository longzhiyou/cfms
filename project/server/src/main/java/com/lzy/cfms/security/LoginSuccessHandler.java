package com.lzy.cfms.security;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.OutputStream;

/**
 *
 * 登陆成功处理
 * Created by bukeyan on 2016/4/24.
 */
@Component
public class LoginSuccessHandler implements AuthenticationSuccessHandler {
    private static final Logger log = LoggerFactory.getLogger(LoginFailureHandler.class);
    static final String ORIGIN = "Origin";

    @Autowired
    private ObjectMapper customObjectMapper;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {

        UserDetails user = (UserDetails) authentication.getPrincipal();

        log.debug("onAuthenticationSuccess");

//        if (request.getHeader("Access-Control-Allow-Origin")==null) {
//            response.setHeader("Access-Control-Allow-Origin", "*");//* or origin as u prefer
//            response.setHeader("Access-Control-Allow-Credentials", "true");
//            response.setHeader("Access-Control-Allow-Headers",
//                    request.getHeader("Access-Control-Request-Headers"));
//        }

        try (OutputStream out = response.getOutputStream()) {
            customObjectMapper.writeValue(out, user);
        }

    }
}
