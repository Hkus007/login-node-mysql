create database db_querencia;

CREATE TABLE `db_querencia`.`tbl_enquiry` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `mobile` BIGINT(20) NULL,
  `text` TEXT(500) NULL,
  `created_on` DATETIME NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_swedish_ci
COMMENT = 'database to store enquiry.';


