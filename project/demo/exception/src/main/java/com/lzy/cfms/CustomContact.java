package com.lzy.cfms;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import org.hibernate.validator.constraints.NotEmpty;

import javax.validation.constraints.Size;

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
