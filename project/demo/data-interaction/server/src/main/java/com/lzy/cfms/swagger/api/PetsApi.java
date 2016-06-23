package com.lzy.cfms.swagger.api;

import com.lzy.cfms.swagger.model.NewPet;
import com.lzy.cfms.swagger.model.Pet;
import io.swagger.annotations.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@RestController
@RequestMapping(value = "/pets",produces = {APPLICATION_JSON_VALUE})
@Api(value = "/pets", description = "the pets API")
@javax.annotation.Generated(value = "class io.swagger.codegen.languages.SpringBootServerCodegen", date = "2016-06-10T01:51:03.768Z")
public class PetsApi {

  @ApiOperation(value = "", notes = "Returns all pets from the system that the user has access to", response = Pet.class, responseContainer = "List")
  @ApiResponses(value = {
    @ApiResponse(code = 200, message = "pet response", response = Pet.class),
    @ApiResponse(code = 200, message = "unexpected error", response = Pet.class) })
  @RequestMapping(value = "",
          produces = { "application/json", "application/xml", "text/xml", "text/html" },
    method = RequestMethod.GET)
  public List<Pet> findPets(@ApiParam(value = "tags to filter by") @RequestParam(value = "tags", required = false) List<String> tags


,
                                            @ApiParam(value = "maximum number of results to return") @RequestParam(value = "limit", required = false) Integer limit


)
      throws NotFoundException {
      // do some magic!
    List<Pet> pets = new ArrayList<>();
    Pet pet = new Pet();
    pet.setId(2L);
    pet.setName("中文");
    pets.add(pet);

      return pets;
  }

}
