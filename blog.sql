/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50703
Source Host           : localhost:3306
Source Database       : blog

Target Server Type    : MYSQL
Target Server Version : 50703
File Encoding         : 65001

Date: 2017-09-18 17:32:40
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `article_table`
-- ----------------------------
DROP TABLE IF EXISTS `article_table`;
CREATE TABLE `article_table` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(32) NOT NULL,
  `content` text NOT NULL,
  `time` varchar(100) NOT NULL,
  `author` varchar(32) NOT NULL,
  `tag` varchar(10) DEFAULT NULL,
  `type` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of article_table
-- ----------------------------
INSERT INTO `article_table` VALUES ('1', '1', '1', '1', '1', '1', 'A');
INSERT INTO `article_table` VALUES ('2', '2', '2', '2017-09-14 15:59:37.361', '2', '1', 'A');
INSERT INTO `article_table` VALUES ('3', '3', '3', '2017-09-14 16:07:15.837', '3', '1', 'B');
INSERT INTO `article_table` VALUES ('4', '1', '1222222222222222221312312\r\n12312312312\r\n12312312\r\n123123\r\n12312312', '2017-09-14 16:12:26.496', '231', '1', 'B');
INSERT INTO `article_table` VALUES ('5', '富文本编辑器测试', '<p>富文本编辑器测试</p>\r\n\r\n<p><img alt=\"\" src=\"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3738933513,3308429827&amp;fm=173&amp;s=F984DA11C43747945810318D0300E0C0&amp;w=218&amp;h=146&amp;img.JPEG\" style=\"height:146px; width:218px\" /></p>\r\n', '2017-09-15 09:42:43.334', '', '1', 'C');
INSERT INTO `article_table` VALUES ('6', '111', '<p>1111</p>\r\n', '2017-09-15 11:10:56.065', '111', '1', 'C');
INSERT INTO `article_table` VALUES ('7', '12312', '<p>1231231</p>\r\n', '2017-09-18 13:37:59.683', '12312', null, 'A');
INSERT INTO `article_table` VALUES ('10', '213123', '<p>1231231231</p>\r\n', '2017-09-18 17:28:26.741', '213123', '12312312', 'A');
INSERT INTO `article_table` VALUES ('11', '213123123', '<p>12312312321</p>\r\n', '2017-09-18 17:28:36.678', '12312312', '12312312', 'C');

-- ----------------------------
-- Table structure for `type_table`
-- ----------------------------
DROP TABLE IF EXISTS `type_table`;
CREATE TABLE `type_table` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of type_table
-- ----------------------------
INSERT INTO `type_table` VALUES ('1', 'H5');
INSERT INTO `type_table` VALUES ('2', 'JavaScript');
INSERT INTO `type_table` VALUES ('3', 'Css');
INSERT INTO `type_table` VALUES ('4', 'NodeJs');
INSERT INTO `type_table` VALUES ('5', 'Vue');

-- ----------------------------
-- Table structure for `user_info`
-- ----------------------------
DROP TABLE IF EXISTS `user_info`;
CREATE TABLE `user_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `nick` varchar(255) DEFAULT NULL,
  `detail_info` longtext,
  `create_time` varchar(20) DEFAULT NULL,
  `modified_time` varchar(20) DEFAULT NULL,
  `times` varchar(32) DEFAULT NULL,
  `level` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_info
-- ----------------------------
INSERT INTO `user_info` VALUES ('1', 'admin001@example.com', 'bdb5362ca298ffc2f7068de675a43cfc', 'admin001', null, null, null, null, null, '9');
INSERT INTO `user_info` VALUES ('3', '12345678@qq.com', '602bd5770dfa761ab428d7d958e06c55', 'admin002', null, null, '1505719620501', null, null, '1');
INSERT INTO `user_info` VALUES ('4', '1234567s89o@qq.com', '602bd5770dfa761ab428d7d958e06c55', 'admin003', null, null, '1505727069053', null, null, '1');

-- ----------------------------
-- Table structure for `user_table`
-- ----------------------------
DROP TABLE IF EXISTS `user_table`;
CREATE TABLE `user_table` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_name` varchar(64) NOT NULL,
  `password` varchar(16) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_table
-- ----------------------------
INSERT INTO `user_table` VALUES ('1', 'admin', 'admin');

-- ----------------------------
-- Table structure for `_mysql_session_store`
-- ----------------------------
DROP TABLE IF EXISTS `_mysql_session_store`;
CREATE TABLE `_mysql_session_store` (
  `id` varchar(255) NOT NULL,
  `expires` bigint(20) DEFAULT NULL,
  `data` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of _mysql_session_store
-- ----------------------------
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:6P8M3MI8ESFlVuP22DQf-sLlkFnYkFuM', '1505525240816', '{\"isLogin\":true,\"userName\":\"admin002\",\"userId\":2}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:CO-X4aV_34o4dDPYcG0Ss00wBQdyrdVz', '1505813293011', '{\"isLogin\":true,\"userName\":\"admin002\",\"userId\":3}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:f1G85y3r_Xs81CaOfx3y7TNZL41LzM1P', '1505531469656', '{\"isLogin\":true,\"userName\":\"admin002\",\"userId\":2}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:HCX-BHXTPn8O_MaUpg5Rt9384pNxpmiD', '1505378197268', '{\"isLogin\":true,\"userName\":\"admin001\",\"userId\":1}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:q78sci31R5YMi1bkDmYmA79KHBCRFpOw', '1505798853425', '{\"isLogin\":true,\"userName\":\"admin002\",\"userId\":2}');
