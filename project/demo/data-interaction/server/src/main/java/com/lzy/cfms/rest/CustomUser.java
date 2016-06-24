package com.lzy.cfms.rest;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import org.hibernate.validator.constraints.NotEmpty;

/**
 * User: longzhiyou
 * Date: 2016-06-23
 * Time: 16:03
 */

@JsonIgnoreProperties(ignoreUnknown = true)
@Data
public class CustomUser {

    private  long id;
    @NotEmpty
    private  String name;
//    @NotEmpty(message = "Please enter your password.")
//    @Size(min = 6, max = 15, message = "Your password must between 6 and 15 characters")
//    @JsonIgnore
    private String password;

    private CustomContact contact;



}
