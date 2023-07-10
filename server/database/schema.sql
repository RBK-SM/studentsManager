-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema studentmanager
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema studentmanager
-- -----------------------------------------------------
drop database studentmanager;
CREATE SCHEMA IF NOT EXISTS `studentmanager` DEFAULT CHARACTER SET utf8mb3 ;
USE `studentmanager` ;

-- -----------------------------------------------------
-- Table `studentmanager`.`teachers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `studentmanager`.`teachers` (
  `idteacher` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `password` VARCHAR(300) NOT NULL,
  PRIMARY KEY (`idteacher`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `studentmanager`.`students`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `studentmanager`.`students` (
  `idstudents` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `gender` VARCHAR(45) NOT NULL,
  `phone` INT NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `attendance` VARCHAR(45) NOT NULL,
  `image` VARCHAR(500) NOT NULL,
  `teachers_idteacher` INT NOT NULL,
  PRIMARY KEY (`idstudents`))
  
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `studentmanager`.`grades`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `studentmanager`.`grades` (
  `idgrades` INT NOT NULL AUTO_INCREMENT,
  `subject` VARCHAR(100) NOT NULL,
  `score` INT NOT NULL,
  `students_idstudents` INT NOT NULL,
  PRIMARY KEY (`idgrades`),
  INDEX `fk_grades_students1_idx` (`students_idstudents` ASC) VISIBLE,
  CONSTRAINT `fk_grades_students1`
    FOREIGN KEY (`students_idstudents`)
    REFERENCES `studentmanager`.`students` (`idstudents`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
