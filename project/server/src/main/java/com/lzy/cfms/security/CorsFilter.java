package com.lzy.cfms.security;

import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * CrosFilter : 跨域资源共享过滤器, 该过滤器设置response header, 解决跨域ajax请求报错
 *
 * @author arccode
 * @since 2014-12-07 22:04
 */
@Component
@Order(Ordered.HIGHEST_PRECEDENCE)
public class CorsFilter implements Filter {

    static final String ORIGIN = "Origin";

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {

        HttpServletResponse response = (HttpServletResponse)res;
        HttpServletRequest request = (HttpServletRequest)req;
        String origin = request.getHeader(ORIGIN);
        if (origin!=null) {



            /**
             *如果要发送Cookie，Access-Control-Allow-Origin就不能设为星号，
             * 必须指定明确的、与请求网页一致的域名。
             * 同时，Cookie依然遵循同源政策，只有用服务器域名设置的Cookie才会上传，其他域名的Cookie并不会上传
             * [2016-06-08 add by longzhiyou]
             */
            // 允许对应的域进行访问
            response.setHeader("Access-Control-Allow-Origin", origin);
            response.setHeader("Access-Control-Allow-Credentials", "true");

            // 允许的方法
            response.setHeader("Access-Control-Allow-Methods", "GET,POST,DELETE,OPTIONS");
            response.setHeader("Access-Control-Allow-Headers", request.getHeader("Access-Control-Request-Headers"));

            response.setHeader("Access-Control-Max-Age", "3600");
//            response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Cache-Control");
        }

//        if (request.getMethod().equals("OPTIONS")) {
//
//        }
        chain.doFilter(req, res);
    }

    @Override
    public void destroy() {

    }
}
