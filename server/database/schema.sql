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
CREATE SCHEMA IF NOT EXISTS `studentmanager` DEFAULT CHARACTER SET utf8 ;
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
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `studentmanager`.`Students`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `studentmanager`.`Students` (
  `idStudents` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `gender` VARCHAR(45) NOT NULL,
  `phone` INT NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `attendance` VARCHAR(45) NOT NULL,
  `image` VARCHAR(500) NOT NULL,
  `teachers_idteacher` INT NOT NULL,
  PRIMARY KEY (`idStudents`),
  INDEX `fk_Stundents_teachers1_idx` (`teachers_idteacher` ASC) VISIBLE,
  CONSTRAINT `fk_Stundents_teachers1`
    FOREIGN KEY (`teachers_idteacher`)
    REFERENCES `studentmanager`.`teachers` (`idteacher`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `studentmanager`.`grades`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `studentmanager`.`grades` (
  `idgrades` INT NOT NULL AUTO_INCREMENT,
  `subject` VARCHAR(100) NOT NULL,
  `score` INT NOT NULL,
  `Stundents_idStundents` INT NOT NULL,
  PRIMARY KEY (`idgrades`),
  INDEX `fk_grades_Stundents_idx` (`Stundents_idStundents` ASC) VISIBLE,
  CONSTRAINT `fk_grades_Stundents`
    FOREIGN KEY (`Stundents_idStundents`)
    REFERENCES `studentmanager`.`Students` (`idStudents`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
