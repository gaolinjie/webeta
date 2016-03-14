#!/usr/bin/env python
# coding=utf-8
#
# Copyright 2016 webeta

from lib.query import Query

class AdModel(Query):
    def __init__(self, db):
        self.db = db
        self.table_name = "ad"
        super(AdModel, self).__init__()

    def add_new_ad(self, ad_info):
        return self.data(ad_info).add()

    def get_ad_by_ad_uuid(self, ad_uuid):
        where = "ad.ad_uuid = '%s'" % ad_uuid
        return self.where(where).find()

    def get_ads_by_author_id(self):
        order = "ad.updated DESC, ad.id DESC"
        return self.order(order).select()

    def update_ad_by_ad_uuid(self, uuid, ad_info):
        where = "ad.ad_uuid = %s" % ad_uuid
        return self.where(where).data(ad_info).save()

    def delete_ad_by_ad_uuid(self, ad_uuid):
        where = "ad.ad_uuid = %s" % ad_uuid
        return self.where(where).delete()
