package com.lzy.cfms.rest;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

/**
 * User: longzhiyou
 * Date: 2016-06-23
 * Time: 16:03
 */

@JsonIgnoreProperties(ignoreUnknown = true)
@Data
public class CustomContact {

    private String email;


}
