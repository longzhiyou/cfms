package com.lzy.cfms.rest;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(value = { "name","content" })
public class Greeting {

    private final long id;
    private final String content;

//    @JsonIgnore
    private final String name;

    public String getName() {
        return name;
    }

    public Greeting(long id, String content, String name) {
        this.id = id;
        this.content = content;
        this.name = name;
    }

    public long getId() {
        return id;
    }

    public String getContent() {
        return content;
    }
}
