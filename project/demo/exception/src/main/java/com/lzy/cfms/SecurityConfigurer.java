package com.lzy.cfms;

import org.springframework.context.annotation.Configuration;

/**
 *
 * Created by longzhiyou on 2015-08-24.
 */
@Configuration
public class SecurityConfigurer{

}
//public class SecurityConfigurer extends WebSecurityConfigurerAdapter {
//
//
//
//    @Autowired
//    public void globalUserDetails(AuthenticationManagerBuilder auth) throws Exception {
//        auth.inMemoryAuthentication()
//                .withUser("user").password("password").roles("USER")
//                .and()
//                .withUser("admin").password("admin").roles("USER", "ADMIN", "READER", "WRITER")
//                .and()
//                .withUser("audit").password("audit").roles("USER", "ADMIN", "READER");
//    }
//
//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//        http.csrf().disable();
//        http
//                .authorizeRequests()
//                .antMatchers("/api/**").permitAll()
//                .anyRequest().authenticated()
//                .and()
//                .formLogin()
//                    .permitAll()
//                .and()
//                .httpBasic();
//    }
//
//
//}
