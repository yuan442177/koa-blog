/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50703
Source Host           : localhost:3306
Source Database       : blog

Target Server Type    : MYSQL
Target Server Version : 50703
File Encoding         : 65001

Date: 2017-09-19 17:37:49
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
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of article_table
-- ----------------------------
INSERT INTO `article_table` VALUES ('2', '1', '<p>23123123123</p>\r\n', '2017-09-19 14:32:30.881', '2', '1', 'A');
INSERT INTO `article_table` VALUES ('3', '3', '3', '2017-09-14 16:07:15.837', '3', '1', 'B');
INSERT INTO `article_table` VALUES ('4', '1', '1222222222222222221312312\r\n12312312312\r\n12312312\r\n123123\r\n12312312', '2017-09-14 16:12:26.496', '231', '1', 'B');
INSERT INTO `article_table` VALUES ('5', '富文本编辑器测试', '<p>1111111富文本编辑器测试1<img alt=\"\" src=\"http://img2.imgtn.bdimg.com/it/u=2974104803,1439396293&amp;fm=200&amp;gp=0.jpg\" style=\"height:375px; width:500px\" /></p>\r\n', '2017-09-19 14:32:20.498', '1', '1', 'A');
INSERT INTO `article_table` VALUES ('10', '213123', '<p>1231231231</p>\r\n', '2017-09-18 17:28:26.741', '213123', '12312312', 'A');
INSERT INTO `article_table` VALUES ('11', '213123123', '<p>12312312321</p>\r\n', '2017-09-18 17:28:36.678', '12312312', '12312312', 'C');
INSERT INTO `article_table` VALUES ('12', '2131', '<p>12312</p>\r\n', '2017-09-19 09:30:15.200', '123', '123', 'A');
INSERT INTO `article_table` VALUES ('13', '撒打算打算', '<p>21312</p>\r\n', '2017-09-19 09:30:24.861', '12312', '123', 'C');
INSERT INTO `article_table` VALUES ('14', '撒打算打算2222', '<p>21312</p>\r\n', '2017-09-19 09:31:03.615', '12312', '123', 'A');
INSERT INTO `article_table` VALUES ('15', '32423@###', '<p>2131222222</p>\r\n', '2017-09-19 09:31:17.673', '12312', '123', 'A');
INSERT INTO `article_table` VALUES ('16', '123345431', '<p>112312312312</p>\r\n', '2017-09-19 09:33:46.697', '12312', '111', 'A');
INSERT INTO `article_table` VALUES ('17', '1233', '<p>123123</p>\r\n', '2017-09-19 10:26:02.036', '213123', '12', 'A');
INSERT INTO `article_table` VALUES ('18', '123', '<p>123</p>\r\n', '2017-09-19 10:26:11.113', '123', '213', 'A');
INSERT INTO `article_table` VALUES ('20', '13212', '<p>213123</p>\r\n', '2017-09-19 13:19:36.463', '12312', '12312', 'A');
INSERT INTO `article_table` VALUES ('21', '12312', '<p>123123</p>\r\n', '2017-09-19 13:19:46.434', '123', '12312', 'A');
INSERT INTO `article_table` VALUES ('22', '凄凄切切', '<p>12</p>\r\n', '2017-09-19 13:19:59.602', '123', '123', 'A');
INSERT INTO `article_table` VALUES ('23', '123', '<p><img alt=\"\" src=\"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3738933513,3308429827&amp;fm=173&amp;s=F984DA11C43747945810318D0300E0C0&amp;w=218&amp;h=146&amp;img.JPEG\" style=\"height:146px; width:218px\" /></p>\r\n', '2017-09-19 13:22:42.289', '213', '321', 'A');
INSERT INTO `article_table` VALUES ('24', '3额2312', '<p>12312312<img alt=\"\" src=\"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3738933513,3308429827&amp;fm=173&amp;s=F984DA11C43747945810318D0300E0C0&amp;w=218&amp;h=146&amp;img.JPEG\" style=\"height:146px; width:218px\" /></p>\r\n\r\n<p><img alt=\"\" src=\"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3738933513,3308429827&amp;fm=173&amp;s=F984DA11C43747945810318D0300E0C0&amp;w=218&amp;h=146&amp;img.JPEG\" style=\"height:146px; width:218px\" /></p>\r\n\r\n<p><img alt=\"\" src=\"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3738933513,3308429827&amp;fm=173&amp;s=F984DA11C43747945810318D0300E0C0&amp;w=218&amp;h=146&amp;img.JPEG\" style=\"height:146px; width:218px\" /></p>\r\n', '2017-09-19 13:23:10.040', '2131', '12312', 'A');
INSERT INTO `article_table` VALUES ('25', '23123', '<p>1231222222222222223123<img alt=\"\" src=\"https://www.baidu.com/img/baidu_jgylogo3.gif\" style=\"height:38px; width:117px\" />122222222222222</p>\r\n', '2017-09-19 13:46:20.036', '12312', '1231231', 'A');
INSERT INTO `article_table` VALUES ('26', '2888', '<p><img alt=\"\" src=\"https://www.baidu.com/img/baidu_jgylogo3.gif\" style=\"height:38px; width:117px\" /></p>\r\n', '2017-09-19 13:58:18.666', '1', '1', 'B');
INSERT INTO `article_table` VALUES ('27', '', '', '2017-09-19 13:59:32.112', '', '', 'A');
INSERT INTO `article_table` VALUES ('28', '', '', '2017-09-19 13:59:41.249', '', '', 'A');
INSERT INTO `article_table` VALUES ('29', '2888', '<p>1111<img alt=\"\" src=\"https://www.baidu.com/img/baidu_jgylogo3.gif\" style=\"height:38px; width:117px\" />111111</p>\r\n', '2017-09-19 14:08:13.460', '1', '1', 'A');
INSERT INTO `article_table` VALUES ('30', '2888', '<p>1111<img alt=\"\" src=\"https://www.baidu.com/img/baidu_jgylogo3.gif\" style=\"height:38px; width:117px\" />111111</p>\r\n', '2017-09-19 14:09:19.724', '1', '1', 'A');
INSERT INTO `article_table` VALUES ('31', '2888', '<p>1111<img alt=\"\" src=\"https://www.baidu.com/img/baidu_jgylogo3.gif\" style=\"height:38px; width:117px\" />111111</p>\r\n', '2017-09-19 14:10:46.675', '1', '1', 'A');
INSERT INTO `article_table` VALUES ('32', '22222222222222888', '<p>1111<img alt=\"\" src=\"https://www.baidu.com/img/baidu_jgylogo3.gif\" style=\"height:38px; width:117px\" />111111</p>\r\n', '2017-09-19 14:12:18.005', '1', '1', 'A');
INSERT INTO `article_table` VALUES ('33', 'the last one', '<p>1</p>\r\n', '2017-09-19 14:18:17.642', '1', '1', 'A');

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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_info
-- ----------------------------
INSERT INTO `user_info` VALUES ('1', 'admin001@example.com', '15c87914e46be84751e402102170f857', 'admin001', null, null, null, null, null, '9');
INSERT INTO `user_info` VALUES ('5', '1234567s89oss@qq.com', '602bd5770dfa761ab428d7d958e06c55', 'admin004', null, null, '1505804885957', null, null, '2');

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
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:5gZ_1pVvEHY0Rrvh3v4jI7TPoMsYUUji', '1505874689302', '{\"isLogin\":true,\"userName\":\"admin002\",\"userId\":3}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:6P8M3MI8ESFlVuP22DQf-sLlkFnYkFuM', '1505525240816', '{\"isLogin\":true,\"userName\":\"admin002\",\"userId\":2}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:6_fC3xi_zGFWCq-f-1JadrUJU9ibJ-Yf', '1505874961796', '{\"isLogin\":true,\"userName\":\"admin002\",\"userId\":3}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:CO-X4aV_34o4dDPYcG0Ss00wBQdyrdVz', '1505813293011', '{\"isLogin\":true,\"userName\":\"admin002\",\"userId\":3}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:f1G85y3r_Xs81CaOfx3y7TNZL41LzM1P', '1505531469656', '{\"isLogin\":true,\"userName\":\"admin002\",\"userId\":2}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:HCX-BHXTPn8O_MaUpg5Rt9384pNxpmiD', '1505378197268', '{\"isLogin\":true,\"userName\":\"admin001\",\"userId\":1}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:nUhDh0wV0mcDSM0M8QwKYJeSMTP3yqJa', '1505871009573', '{\"isLogin\":true,\"userName\":\"admin002\",\"userId\":3}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:q78sci31R5YMi1bkDmYmA79KHBCRFpOw', '1505798853425', '{\"isLogin\":true,\"userName\":\"admin002\",\"userId\":2}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:TCc0OyAPyQdE89tQ3NqiIkLY8uzwVDRG', '1505891293782', '{\"isLogin\":true,\"userName\":\"admin004\",\"userId\":5}');
