package com.lzy.cfms.rest;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

/**
 * User: longzhiyou
 * Date: 2016-06-08
 * Time: 11:25
 */
@JsonIgnoreProperties(ignoreUnknown = true)
@Data
public class Quote {

    private String type;
    private Value value;

}