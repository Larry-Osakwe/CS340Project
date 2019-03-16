-- MySQL dump 10.16  Distrib 10.1.37-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: lol
-- ------------------------------------------------------
-- Server version	10.1.37-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `lol_player`
--

DROP TABLE IF EXISTS `lol_player`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lol_player` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `gamertag` varchar(255) NOT NULL,
  `fname` varchar(255) NOT NULL,
  `lname` varchar(255) NOT NULL,
  `region` varchar(255) NOT NULL,
  `teamid` int(11) NOT NULL,
  `positionid` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `lol_player_1` FOREIGN KEY (`teamid`) REFERENCES `lol_team` (`id`),
  CONSTRAINT `lol_player_2` FOREIGN KEY (`positionid`) REFERENCES `lol_position` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lol_player`
--

LOCK TABLES `lol_player` WRITE;
/*!40000 ALTER TABLE `lol_player` DISABLE KEYS */;
INSERT INTO `lol_player` 
VALUES (1,'Bjergsen', 'Soren', 'Bjerg', 'North America', '1', '3'),
(2,'DoubleLift', 'Peter', 'Peng', 'North America', '2', '4'),
(3,'Rekkles', 'Martin', 'Larsson', 'Europe', '3', '2'),
(4,'Faker', 'Lee', 'Sang-hyeok', 'Korea', '4', '1');
/*!40000 ALTER TABLE `lol_player` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lol_team`
--

DROP TABLE IF EXISTS `lol_team`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lol_team` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `TeamName` varchar(255) NOT NULL,
  `side` varchar(255) NOT NULL,
  `wins` int(11) NOT NULL,
  `losses` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lol_team`
--

LOCK TABLES `lol_team` WRITE;
/*!40000 ALTER TABLE `lol_team` DISABLE KEYS */;
INSERT INTO `lol_team` 
VALUES (1,'TSM', 'Blue', '2', '3'),
(2,'C9', 'Red', '4', '1'),
(3,'TL', 'Blue', '5', '0'),
(4,'CLG', 'Red', '3', '2');
/*!40000 ALTER TABLE `lol_team` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lol_position`
--

DROP TABLE IF EXISTS `lol_position`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lol_position` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `position_name` varchar(255) NOT NULL,
  `lane` varchar(255) NOT NULL,
  `position_type` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lol_position`
--

LOCK TABLES `lol_position` WRITE;
/*!40000 ALTER TABLE `lol_position` DISABLE KEYS */;
INSERT INTO `lol_position` 
VALUES (1,'Marksman', 'Bottom', 'AD'),
(2,'Support', 'Bottom', 'AP'),
(3,'Mage', 'Middle', 'AP'),
(4,'Bruiser', 'Top', 'AD');
/*!40000 ALTER TABLE `lol_position` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lol_position`
--

DROP TABLE IF EXISTS `lol_champion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lol_champion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `archetype` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lol_champion`
--

LOCK TABLES `lol_champion` WRITE;
/*!40000 ALTER TABLE `lol_champion` DISABLE KEYS */;
INSERT INTO `lol_champion` 
VALUES (1,'Aatrox', 'Male', 'Runeterra'),
(2,'Akali', 'Female', 'Ionia'),
(3,'Draven', 'Male', 'Noxus'),
(4,'Xin Zhao', 'Male', 'Demacia');
/*!40000 ALTER TABLE `lol_champion` ENABLE KEYS */;
UNLOCK TABLES;


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-02-03  0:38:33
