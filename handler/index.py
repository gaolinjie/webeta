#!/usr/bin/env python
# coding=utf-8
#
# Copyright 2014 avati

import uuid
import hashlib
import Image
import StringIO
import time
import json
import re
import urllib2
import tornado.web
import lib.jsonp
import pprint
import math
import datetime
import os
import requests

from base import *
from lib.sendmail import send
from lib.variables import *
from lib.variables import gen_random
from lib.xss import XssCleaner
from lib.utils import find_mentions
from lib.reddit import hot
from lib.utils import pretty_date
from pyquery import PyQuery as pyq

from lib.mobile import is_mobile_browser
from form.post import *

from qiniu import Auth
from qiniu import BucketManager
from qiniu import put_data

import xml.etree.ElementTree as ET
import commands

class IndexHandler(BaseHandler):
    def get(self, template_variables = {}):
        user_info = self.current_user
        template_variables["user_info"] = user_info
        default_ad = self.ad_model.get_ad_by_ad_uuid(user_info.default_ad)
        template_variables["default_ad"] = default_ad
        ads = self.ad_model.get_ads_by_author_id()
        template_variables["ads"] = ads

        self.render("index.html", **template_variables)

class ShareItHandler(BaseHandler):
    def get(self, template_variables = {}):
        print 'asdf'

    def post(self):
        user_info = self.current_user
        data = json.loads(self.request.body)
        link_text = data["link_text"]
        ad_uuid = data["ad_uuid"]

        doc=pyq(link_text)
        title = doc('#activity-name').text()
        content = doc('.rich_media_content')

        topic_uuid = "%s" % uuid.uuid1()
        self.topic_model.add_new_topic({
                "topic_uuid": topic_uuid,
                "ad_uuid": ad_uuid,
                "title": title,
                "content": content,
                "author_id": user_info.wx_id,
                "created": time.strftime('%Y-%m-%d %H:%M:%S'),
            })

        self.write(lib.jsonp.print_JSON({
                    "success": 1,
                    "topic_url": "/t/"+topic_uuid
                }))

class AddAdHandler(BaseHandler):
    def get(self, template_variables = {}):
        print 'asdf'

    def post(self):
        user_info = self.current_user
        data = json.loads(self.request.body)
        ad_name = data["ad_name"]
        ad_type = data["ad_type"]
        ad_text = data["ad_text"]
        ad_link = data["ad_link"]

        if ad_type == '纯文本广告':
            ad_type = 'only_text'
        elif ad_type == '纯图片广告':
            ad_type = 'only_img'
        elif ad_type == '文本加图片广告':
            ad_type = 'text_and_img'

        ad_uuid = "%s" % uuid.uuid1()
        self.ad_model.add_new_ad({
                "ad_uuid": ad_uuid,
                "ad_name": ad_name,
                "ad_type": ad_type,
                "ad_text": ad_text,
                "ad_link": ad_link,
                "author_id": user_info.wx_id,
                "updated": time.strftime('%Y-%m-%d %H:%M:%S'),
                "created": time.strftime('%Y-%m-%d %H:%M:%S'),
            })

        self.write(lib.jsonp.print_JSON({
                    "success": 1,
                }))

class TopicHandler(BaseHandler):
    def get(self, topic_uuid, template_variables = {}):
        topic = self.topic_model.get_topic_by_topic_uuid(topic_uuid)
        template_variables["topic"] = topic
        ad = self.ad_model.get_ad_by_ad_uuid(topic.ad_uuid)
        template_variables["ad"] = ad
        self.render("topic.html", **template_variables)

# for weixin test
class WeixinHandler(BaseHandler):
    def get(self, template_variables = {}):
        print 'ddddddddddddddddd'
        #获取微信公众平台发送的验证参数
        signature = self.get_argument('signature', '')
        timestamp = self.get_argument('timestamp', '')
        nonce = self.get_argument('nonce', '')
        echostr = self.get_argument('echostr', '')
        #定义token，需要和Web页面上填写的一致
        token = 'webeta'
        #将参数放入列表中，并排序
        list=[token,timestamp,nonce]
        list.sort()
        #加密列表中的参数
        sha1=hashlib.sha1()
        map(sha1.update,list)
        #比较加密结果
        hashcode=sha1.hexdigest()
        if hashcode == signature:
            wx = MenuManager()
            accessToken = wx.getAccessToken()
            print 'eeeeeeeeeeeeeeeeee'
            wx.createMenu(accessToken)
            #wx.getMenu(accessToken)

            self.write(echostr)
        else:
            self.write('error,code 403')

    def post(self):
        print 'dddddddddddddd'
        self.write("")
        '''
        body = self.request.body
        data = ET.fromstring(body)
        tousername = data.find('ToUserName').text
        fromusername = data.find('FromUserName').text
        createtime = data.find('CreateTime').text
        msgtype = data.find('MsgType').text
        content = data.find('Content').text
        msgid = data.find('MsgId').text

        if content.strip() in ('ls','pwd','w','uptime'):
            result = commands.getoutput(content)
        else:
            result = '不可以哦!!!'
        textTpl = """<xml>
                        <ToUserName><![CDATA[%s]]></ToUserName>
                        <FromUserName><![CDATA[%s]]></FromUserName>
                        <CreateTime>%s</CreateTime>
                        <MsgType><![CDATA[%s]]></MsgType>
                        <Content><![CDATA[%s]]></Content>
                    </xml>"""
        out = textTpl % (fromusername, tousername, str(int(time.time())), msgtype, result)
        self.write(out)
        '''

class MenuManager:
    accessUrl = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx9f6b9870de292bb7&secret=970ad300582a06480202fbebd942f801"
    delMenuUrl = "https://api.weixin.qq.com/cgi-bin/menu/delete?access_token="
    createUrl = "https://api.weixin.qq.com/cgi-bin/menu/create?access_token="
    getMenuUri="https://api.weixin.qq.com/cgi-bin/menu/get?access_token="
    def getAccessToken(self):
        f = urllib2.urlopen(self.accessUrl)
        accessT = f.read().decode("utf-8")
        jsonT = json.loads(accessT)
        print accessT
        print jsonT
        return jsonT["access_token"]
    def delMenu(self, accessToken):
        html = urllib2.urlopen(self.delMenuUrl + accessToken)
        result = json.loads(html.read().decode("utf-8"))
        print result["errcode"]
        return result["errcode"]
    def createMenu(self, accessToken):
        menu = '''{
                    "button":[
                        {
                            "type":"view",
                            "name":"WeBeta",
                            "url":"http://webeta.ngrok.io/"
                        },
                    ]
                }'''
        html = urllib2.urlopen(self.createUrl + accessToken, menu.encode("utf-8"))
        result = json.loads(html.read().decode("utf-8"))
        print result
        return result["errcode"]
    def getMenu(self, accessToken):
        html = urllib2.urlopen(self.getMenuUri + accessToken)
        print(html.read().decode("utf-8"))
