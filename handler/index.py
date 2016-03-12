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
        self.render("index.html", **template_variables)

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

