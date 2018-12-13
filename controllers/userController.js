const Connection = require("../db/db_config_mysql");
const mysql = require('mysql');
class UsersDB extends Connection {
  constructor(connection) {
    super(connection); //call the parent method with super
    this.db = this.connection;
  }
 
  addUser(req){
    let sql = 'insert into tbl_user_master set ';
    let userObject = {};
    if(req.body.rno){
        sql+= ' , ';
        sql+= ' roll_no = '+req.body.rno+' ';
        userObject.roll_no = req.body.rno;
    }if(req.body.name){
        sql+= ' , ';
        sql+= ' name = '+mysql.escape(req.body.name)+' ';
        userObject.name = req.body.name;
    }if(req.body.address){
        sql+= ' , ';
        sql+= ' address = '+mysql.escape(req.body.address)+' ';
        userObject.address = req.body.address;
    }if(req.body.contact){
        sql+= ' , ';
        sql+= ' contact = '+mysql.escape(req.body.contact)+' ';
        userObject.contact = req.body.contact;
    }if(req.body.father){
        sql+= ' , ';
        sql+= ' father = '+mysql.escape(req.body.father)+' ';
        userObject.father = req.body.father;
    }if(req.body.fatherContact){
        sql+= ' , ';
        sql+= ' fatherContact = '+mysql.escape(req.body.fatherContact)+' ';
        userObject.fatherContact = req.body.fatherContact;
    }if(req.body.class){
        sql+= ' , ';
        sql+= ' class = '+mysql.escape(req.body.class)+' ';
        userObject.class = req.body.class;
    }if(req.body.user_type){
        sql+= ' , ';
        sql+= ' user_type = '+req.body.user_type+' '
        userObject.user_type = req.body.user_type;;
    }if(req.body.joinin_date){
        sql+= ' , ';
        sql+= ' joinin_date = '+mysql.escape(req.body.joinin_date)+' ';
        userObject.joinin_date = req.body.joinin_date;
    }
    this.db.query(sql,(err,rows)=>{
      if(err){
        return null;
      }else{
        return rows;
      }
    });
  }

  getUser(req){
    let searchCondition = '';
    let filterCondition = '';
    let error = {}
    , retArr = {};
    
    // condition for search user bby name 
    if(req.body.str){
      searchCondition+= ' and name like %'+req.body.str+'%';
    }

    // filter condition 
    if(req.body.utype){
      filterCondition = ' and user_type = '+req.body.utype+' ';
    }if(req.body.class){
      filterCondition = ' and class = '+req.body.class+' ';
    }

    let sql = ' select \n\
                  * \n\
                from \n\
                  tbl_user_master \n\
                where \n\
                  active_flag = 1';
    this.db.query(sql,(err,rows)=>{
      if(err){
        error.status = 1;
        error.ErrMsg = 'error in query';
        retArr.error = error;
        return retArr;
      }else{
        error.status = 0;
        error.ErrMsg = 'success';
        retArr.error = error;
        retArr.result = rows;
        return retArr;
      }
    });
  }


}

module.exports = new UsersDB();