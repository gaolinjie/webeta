HOWTO deploy on Linode
======================

###Build Ubuntu 12.10 on Linode and access the server
	$ ssh root@106.187.37.xxx
	# ssh to server
	# if encounter 'Host key verification failed', just delete ~/.ssh/known_hosts file

###Install Mysql
	$ apt-get update
	$ apt-get install mysql-server mysql-client

###Installing tools and dependencies
	$ apt-get install python-setuptools 
	$ easy_install pip 
	$ apt-get install git 
	$ apt-get install nginx 
	$ pip install supervisor 

###Config Git
	$ ssh-keygen -t rsa -C "avati@gmail.com"
	$ cat ~/.ssh/id_rsa.pub
	# copy and paste the RSA key to the Deploy keys setting
	$ git config --global user.name "avati"  
	$ git config --global user.email avati@gmail.com  

###Make directories for your app
	$ mkdir ~/www

###Pull in source code
	$ cd ~/www/
	$ git clone git@github.com:gaolinjie/avati.git
	$ cd avati

###Install web app required modules
	$ pip install -r requirements.txt

###Install python mysql
	$ easy_install -U distribute
	$ apt-get install libmysqld-dev libmysqlclient-dev
    $ apt-get install python-dev
	$ pip install mysql-python
	$ apt-get install python-MySQLdb

###Install PIL
	$ apt-get build-dep python-imaging 
	$ apt-get install libjpeg8 libjpeg62-dev libfreetype6 libfreetype6-dev
	$ ln -s /usr/lib/x86_64-linux-gnu/libjpeg.so /usr/lib
	$ ln -s /usr/lib/x86_64-linux-gnu/libfreetype.so /usr/lib
	$ ln -s /usr/lib/x86_64-linux-gnu/libz.so /usr/lib
	$ pip install http://effbot.org/downloads/Imaging-1.1.7.tar.gz
	# pip install -U PIL	

###Install requests
	$ pip install requests

###Create database and then execute sql file in dbstructure/
	$ mysql -u root -p
	mysql> CREATE DATABASE avati;
	mysql> GRANT ALL PRIVILEGES ON avati.* TO 'avati'@'localhost' IDENTIFIED BY 'avati';
	mysql> exit
	$ mysql -u avati -p --database=avati < dbstructure/avati.sql
	$ mysql -u avati -p --database=avati < dbstructure/data.sql

###Install Torndb
    $ pip install torndb

###Install Qiniu sdk
    $ pip install qiniu

###Install ghost.py on mac osx
	# Install qt and pyside follow http://qt-project.org/wiki/PySide_Binaries_MacOSX
	# pip install --pre Ghost.py

###Install pyquery
    apt-get install libxml2-dev libxslt-dev
    apt-get install python-dev python-setuptools
    # 如果内存为512mb，安装pyquery会内存不够，解决方法为下：
    # http://stackoverflow.com/questions/18334366/out-of-memory-issue-in-installing-packages-on-ubuntu-server
    $ dd if=/dev/zero of=/swapfile bs=1024 count=1024k
    $ mkswap /swapfile
    $ swapon /swapfile
    pip install pyquery
    $ swapoff -v /swapfile
    $ rm /swapfile

###Create symbolic links to conf files
	$ cd /etc/nginx 
	$ rm nginx.conf
	$ ln -s ~/www/avati/conf/nginx.conf nginx.conf 
	$ cd
	$ ln -s ~/www/avati/conf/supervisord.conf supervisord.conf  

###Create nginx user
	$ adduser --system --no-create-home --disabled-login --disabled-password --group nginx 

###Create a logs directory:
	$ mkdir ~/logs 

###Start Supervisor and Nginx
	$ supervisord
	$ /etc/init.d/nginx start

###Visit your public IP address and enjoy!

###Update your web app
	$ cd ~/www/avati
	$ git pull


###Inspire from
    # quora.com
    # zhihu.com
    # segmentfault.com
    # coding.net
    # f2e.im
    # dgtle.com

