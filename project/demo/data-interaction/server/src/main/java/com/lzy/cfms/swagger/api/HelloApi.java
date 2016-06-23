package com.lzy.cfms.swagger.api;

import com.lzy.cfms.swagger.model.HelloWorldResponse;
import io.swagger.annotations.*;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@Controller
@RequestMapping(value = "/hello", produces = {APPLICATION_JSON_VALUE})
@Api(value = "/hello", description = "the hello API")
@javax.annotation.Generated(value = "class io.swagger.codegen.languages.SpringBootServerCodegen", date = "2016-06-10T08:08:39.833Z")
public class HelloApi {

  @ApiOperation(value = "", notes = "Returns 'Hello' to the caller", response = HelloWorldResponse.class)
  @ApiResponses(value = { 
    @ApiResponse(code = 200, message = "Success", response = HelloWorldResponse.class),
    @ApiResponse(code = 200, message = "Error", response = HelloWorldResponse.class) })
  @RequestMapping(value = "",
    produces = { "application/json" }, 
    method = RequestMethod.GET)
  public ResponseEntity<HelloWorldResponse> hello(@ApiParam(value = "The name of the person to whom to say hello") @RequestParam(value = "name", required = false) String name


)
      throws NotFoundException {
      // do some magic!
      return new ResponseEntity<HelloWorldResponse>(HttpStatus.OK);
  }

}
