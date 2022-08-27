package com.example.juejin.Service;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.example.juejin.entity.Article;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class service implements Iservice{
    @Autowired
    com.example.juejin.Mapper.mapper mapper;

    @Override
    public int add(Article article){
        return mapper.insert(article);
    }

    @Override
    public int deleteById(int id){
        return mapper.deleteById(id);
    }

    @Override
    public int update(Article article){
        UpdateWrapper<Article> wrapper = new UpdateWrapper<>();
        wrapper.eq("id", article.getId());
        return mapper.update(article, wrapper);
    }

    @Override
    public Article findById(Integer id){
        return mapper.selectById(id);
    }

    @Override
    public List<Article> findAll(){
        return mapper.selectList(null);
    }

    @Override
    public List<Article> findBySequence(Integer pageNum, Integer pageSize, Integer sort){
        int count = mapper.selectCount(null);
        if (Math.ceil((double)count / pageSize) < pageNum){
            return null;
        }
        Page<Article> page = new Page<>(pageNum, pageSize);
        QueryWrapper wrapper = new QueryWrapper<>();
        if (sort == 1){
            wrapper.orderByDesc("view_num", "prefer", "comments");
        }else if (sort == 2){
            wrapper.orderByDesc("date");
        }
        IPage<Article> ipage = mapper.selectPage(page, wrapper);// wrapper
        return ipage.getRecords();
    }

}
