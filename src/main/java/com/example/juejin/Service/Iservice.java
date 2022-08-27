package com.example.juejin.Service;

import com.example.juejin.Mapper.mapper;
import com.example.juejin.entity.Article;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public interface Iservice {


    int add(Article article);

    int deleteById(int id);

    int update(Article article);

    Article findById(Integer id);

    List<Article> findAll();

    List<Article> findBySequence(Integer pageNum, Integer pageSize, Integer sort);
}
