/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50527
 Source Host           : localhost
 Source Database       : jtm.im

 Target Server Type    : MySQL
 Target Server Version : 50527
 File Encoding         : utf-8

 Date: 01/02/2014 18:26:36 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `email` text,
  `password` text,
  `username` text,
  `sign` text,
  `gender` text,
  `location` text,
  `business` text,
  `edu` text,
  `company` text,
  `website` text,
  `intro` text,
  `avatar` text,
  `cover` text,
  `weibo` text,
  `qzone` text,
  `douban` text,
  `renren` text,
  `followees` int(11) DEFAULT 0,
  `followers` int(11) DEFAULT 0,
  `questions` int(11) DEFAULT 0,
  `answers` int(11) DEFAULT 0,
  `posts` int(11) DEFAULT 0,
  `comments` int(11) DEFAULT 0,
  `up_num` int(11) DEFAULT 0,
  `down_num` int(11) DEFAULT 0,
  `thank_num` int(11) DEFAULT 0,
  `report_num` int(11) DEFAULT 0,
  `reputation` int(11) DEFAULT 0,
  `income` int(11) DEFAULT 2000,
  `expend` int(11) DEFAULT 0,
  `permission` int(11) DEFAULT 0,
  `created` datetime DEFAULT NULL,
  `updated` datetime DEFAULT NULL,
  `last_login` datetime DEFAULT NULL,
  `view_follow` datetime DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `balance`
-- ----------------------------
DROP TABLE IF EXISTS `balance`;
CREATE TABLE `balance` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `author_id` int(11) DEFAULT NULL,
  `balance_type` int(11) DEFAULT NULL,
  `amount` int(11) DEFAULT 0,
  `balance` int(11) DEFAULT 0,
  `post_id` int(11) DEFAULT NULL,
  `reply_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `balance_type`
-- ----------------------------
DROP TABLE IF EXISTS `balance_type`;
CREATE TABLE `balance_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type_name` text,
  `balance_text1` text,
  `balance_text2` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `avatar`
-- ----------------------------
DROP TABLE IF EXISTS `avatar`;
CREATE TABLE `avatar` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `avatar` text,
  `gender` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `permission`
-- ----------------------------
DROP TABLE IF EXISTS `permission`;
CREATE TABLE `permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `level` int(11) DEFAULT NULL,
  `role` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `reply`
-- ----------------------------
DROP TABLE IF EXISTS `reply`;
CREATE TABLE `reply` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `post_id` int(11) DEFAULT NULL,
  `content` text,
  `up_num` int(11) DEFAULT 0,
  `down_num` int(11) DEFAULT 0,
  `anon` int(11) DEFAULT 0,
  `author_id` int(11) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `post`
-- ----------------------------
DROP TABLE IF EXISTS `post`;
CREATE TABLE `post` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` text,
  `content` text,
  `post_type` text,
  `thumb` text,
  `up_num` int(11) DEFAULT 0,
  `down_num` int(11) DEFAULT 0,
  `reply_num` int(11) DEFAULT 0,
  `view_num` int(11) DEFAULT 0,
  `follow_num` int(11) DEFAULT 0,
  `anon` int(11) DEFAULT 0,
  `author_id` int(11) DEFAULT NULL,
  `updated` datetime DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `feed`
-- ----------------------------
DROP TABLE IF EXISTS `feed`;
CREATE TABLE `feed` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `tag_id` int(11) DEFAULT NULL,
  `post_id` int(11) DEFAULT NULL,
  `reply_id` int(11) DEFAULT NULL,
  `feed_type` int(11) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


-- ----------------------------
--  Table structure for `feed_type`
-- ----------------------------
DROP TABLE IF EXISTS `feed_type`;
CREATE TABLE `feed_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `feed_text` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


-- ----------------------------
--  Table structure for `vote`
-- ----------------------------
DROP TABLE IF EXISTS `vote`;
CREATE TABLE `vote` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `post_id` int(11) DEFAULT NULL,
  `reply_id` int(11) DEFAULT NULL,
  `up_down` text,
  `author_id` int(11) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;



-- ----------------------------
--  Table structure for `post_tag`
-- ----------------------------
DROP TABLE IF EXISTS `post_tag`;
CREATE TABLE `post_tag` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `post_id` int(11) DEFAULT NULL,
  `tag_id` int(11) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


-- ----------------------------
--  Table structure for `tag`
-- ----------------------------
DROP TABLE IF EXISTS `tag`;
CREATE TABLE `tag` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text,
  `thumb` text,
  `intro` text,
  `tag_type` int(11) DEFAULT 1,
  `category` int(11) DEFAULT 1,
  `question_num` int(11) DEFAULT 0,
  `post_num` int(11) DEFAULT 0,
  `follow_num` int(11) DEFAULT 0,
  `is_new` int(11) DEFAULT NULL,
  `post_add` int(11) DEFAULT NULL,
  `user_add` int(11) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `tag_parent`
-- ----------------------------
DROP TABLE IF EXISTS `tag_parent`;
CREATE TABLE `tag_parent` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tag_id` int(11) DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;



-- ----------------------------
--  Table structure for `category`
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text,
  `tag_num` int(11) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `tag_type`
-- ----------------------------
DROP TABLE IF EXISTS `tag_type`;
CREATE TABLE `tag_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text,
  `label` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `follow`;
CREATE TABLE `follow` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `author_id` int(11) DEFAULT NULL,
  `obj_id` int(11) DEFAULT NULL,
  `obj_type` text,
  `created` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


-- ----------------------------
--  Table structure for `thank`
-- ----------------------------
DROP TABLE IF EXISTS `thank`;
CREATE TABLE `thank` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `from_user` int(11) DEFAULT NULL,
  `to_user` int(11) DEFAULT NULL,
  `obj_id` int(11) DEFAULT NULL,
  `obj_type` text,
  `created` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


-- ----------------------------
--  Table structure for `report`
-- ----------------------------
DROP TABLE IF EXISTS `report`;
CREATE TABLE `report` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `from_user` int(11) DEFAULT NULL,
  `to_user` int(11) DEFAULT NULL,
  `obj_id` int(11) DEFAULT NULL,
  `obj_type` text,
  `report_type` int(11) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


-- ----------------------------
--  Table structure for `notice`
-- ----------------------------
DROP TABLE IF EXISTS `notice`;
CREATE TABLE `notice` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `author_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `post_id` int(11) DEFAULT NULL,
  `reply_id` int(11) DEFAULT NULL,
  `notice_type` int(11) DEFAULT NULL,
  `readed` int(11) DEFAULT 0,
  `created` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


-- ----------------------------
--  Table structure for `notice_type`
-- ----------------------------
DROP TABLE IF EXISTS `notice_type`;
CREATE TABLE `notice_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `notice_text` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `invite`
-- ----------------------------
DROP TABLE IF EXISTS `invite`;
CREATE TABLE `invite` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `from_user` int(11) DEFAULT NULL,
  `to_user` int(11) DEFAULT NULL,
  `post_id` int(11) DEFAULT NULL,
  `readed` int(11) DEFAULT 0,
  `created` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `icode`
-- ----------------------------
DROP TABLE IF EXISTS `icode`;
CREATE TABLE `icode` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` text,
  `used` int(11) DEFAULT 0,
  `user_created` int(11) DEFAULT NULL,
  `user_used` int(11) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `ads`
-- ----------------------------
DROP TABLE IF EXISTS `ads`;
CREATE TABLE `ads` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ad_type` int(11) DEFAULT NULL,
  `show` int(11) DEFAULT NULL,
  `img` text,
  `link` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `item`
-- ----------------------------
DROP TABLE IF EXISTS `item`;
CREATE TABLE `item` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sku` text,
  `name` text,
  `img` text,
  `price` text,
  `link` text,
  `cps_link` text,
  `vendor` text,
  `view_num` int(11) DEFAULT 0,
  `add_num` int(11) DEFAULT 0,
  `like_num` int(11) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `like_item`;
CREATE TABLE `like_item` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `author_id` int(11) DEFAULT NULL,
  `item_id` int(11) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;