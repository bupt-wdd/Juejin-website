package com.example.juejin.Controller;

import com.example.juejin.entity.Article;
import com.example.juejin.entity.ResultInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.WebRequest;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@RestController
public class controller {
    @Autowired
    com.example.juejin.Service.service service;

    @InitBinder
    public void initBinder(WebDataBinder binder, WebRequest request) {
        //转换日期
        DateFormat dateFormat=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        binder.registerCustomEditor(Date.class, new CustomDateEditor(dateFormat, true));// CustomDateEditor为自定义日期编辑器
    }

    @CrossOrigin
    @GetMapping("/findById")
    public ResponseEntity<ResultInfo<Article>> findById(@RequestParam Integer id){
        Article article = service.findById(id);
        if (article == null) {
            ResultInfo<Article> resultInfo = new ResultInfo<>(false, null);
            return new ResponseEntity<>(resultInfo, HttpStatus.OK);
        }else {
            ResultInfo<Article> resultInfo = new ResultInfo<>(true, article);
            return new ResponseEntity<>(resultInfo, HttpStatus.OK);
        }
    }

    @CrossOrigin
    @GetMapping("/findAll")
    public ResponseEntity<ResultInfo<List<Article>>> findAll(){
        List<Article> list = service.findAll();
        ResultInfo<List<Article>> resultInfo = new ResultInfo<>(true, list);
        return new ResponseEntity<>(resultInfo, HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping("/findBySequence")
    public ResponseEntity<ResultInfo<List<Article>>> findBySequence(@RequestParam int pageNum, @RequestParam int pageSize, @RequestParam int sort){
        List<Article> list = service.findBySequence(pageNum, pageSize, sort);
        ResultInfo<List<Article>> resultInfo = new ResultInfo<>(true, list);
        return new ResponseEntity<>(resultInfo, HttpStatus.OK);
    }
}
