const Connection = require("../db/db_config_mysql");
const mysql = require('mysql');

class EnquiryDb extends Connection{
    constructor(connection){
        super(connection);
        this.db = this.connection;
    }

    addEnquiry(req){
        try{
            let sql = 'insert into tbl_enquiry set created_on = now() ';
            let error = {}
                , retArr = {};
            if(req.body.name){
                sql+= ' , name = '+mysql.escape(req.body.name)+' ';
            }if(req.body.email){
                sql+= ' , email = '+mysql.escape(req.body.email)+' ';
            }if(req.body.mobile){
                sql+= ' , mobile = '+mysql.escacpe(req.body.mobile)+' ';
            }if(req.body.text){
                sql+= ' , text = '+mysql.escape(req.body.texxt)+' ';
            }
            console.log(sql);
            this.db.query(sql,(err)=>{
                if(err){
                    error.status = 1;
                    error.errMsg = 'error while query';
                    error.errorQuery = err;
                    retArr.error = error;
                    return retArr;
                }else{
                    error.status = 0;
                    error.errMsg = 'Success';
                    error.errorQuery = '';
                    retArr.error = error;
                    return retArr;
                }
            })
        }catch(err){
            res.json(err);
        }
       
    }
}

module.exports = new EnquiryDb();