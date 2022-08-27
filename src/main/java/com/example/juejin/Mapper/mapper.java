package com.example.juejin.Mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.juejin.entity.Article;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface mapper extends BaseMapper<Article> {
}
