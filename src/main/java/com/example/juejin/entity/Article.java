package com.example.juejin.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;

import java.util.Date;

@Data
public class Article {
    @TableId(value = "id" ,type = IdType.AUTO)
    private int id;
    private String writer;
    private int writerNum;
    private int articleNum;
    private Date date;
    private String title;
    private String record;
    private String picture;// picture
    private int viewNum;
    private int prefer;
    private int comments;
    private int articleAdver;// guang gao shu
    private String article;

}
