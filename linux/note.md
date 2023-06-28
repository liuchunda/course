#
1.linux严格区分大小写
2.linux中的所有内容以文件形式保存，包括硬件和用户文件
3.linux不靠扩展名区分文件类型，是靠权限来区分，但是有一些约定的扩展名，是给管理员看的，机器不需要。
压缩包 .gz .bz2 .bar.bz2 .tgz
二进制文件.rpm
网页文件 .html .php
脚本文件 .sh
配置文件 .conf
window下的程序不能直接在liunx中安装运行
linunx更多的使用字符界面，占用系统资源更少
减少了出错和被攻击的可能性，会让系统更稳定

### 版本
kernel
各个厂商会制作自己的发行版本
centos
ubuntu

### 虚拟机
可以虚拟一个pc

### 缩写
lib Library 
bin binaries 二进制文件 编译后的程序
etc etcetera 附加物
rc run command 运行命令 rc常用作脚本的后缀
tty teletype n. [通信] 电传打字机；电传打字设备
dev physical devices n. 装置，仪器；炸弹，爆炸装置；（产生特定效果的）方法，手法；诡计（device 的复数）


### liunx
cd / 进入根目录  .代表当前目录 ..代表上级目录
cd ～ 进入当前用户的家目录
/根目录
/boot 启动目录，启动相关文件
/dev 设备文件
/etc 配置文件
/home 普通用户的家目录，可以操作 //useradd *** sudo useradd ** 创建用户
/lib 系统库保存目录
/mnt 移动设备挂载目录
/media 光盘挂载目录
/misc 磁带机挂载目录
/root 超级用户的根目录，可以操作
/tmp 临时文件 可以操作
/proc 正在运行的内核信息映射，主要输出进程信息，内存资源信息和磁盘分区信息
/sys 硬件设备的驱动程序信息
/var 变量
/bin 普通用户的基本命令，如ls chmod等，一般的用户也都可以使用
/sbin 基本的系统命令，如shutdown reboot 用于启动系统，修复系统 只有管理员才可以运行 super
/usr/bin 是用户在后期安装的一些软件的运行脚本  usr：系统资源 unix system resource
/usr/sbin 配置一些用户安装的系统管理的必备程序


[parallels@localhost /]  parallels用户名，localhost主机名，/当前目录
～ 代表当前用户的家目录

pwd 当前目录的路径  p：print w：work d：directory

su liu  切换用户
#是超级用户 $是普通用户

sudo su 将当前用户更改为root用户，但是环境变量不变，它允许具有权限的用户以超级用户的身份执行命令

sudo -i -u username 切换用户

sudo + 一个命令时，用的是root的身份执行的。例如sudo touch 一个文件，此时这个文件的创建者和所有者都是root，其他用户有r权限，没有w权限（因为是一个文本文件 所有都没有执行权限）。此时要改的话可以两种方式，1.sudo vi 1.txt 2. sudo vi 1.txt 退出时加感叹号:x! 第2种操作后，此时文件的所有者和所在组会变成当前用户了。
### 命令 
ls 查询文件或者目录
  -a 显示所有文件，包括隐藏文件。 在mac和linux中以点开头的文件是隐藏文件，通过这个命令可以看到
  -l 显示详细信息  long
  -d 查看目录本身的属性而非自文件  ls -d test 查看test文件本身的属性
  -h 人性化显示文件大小
  -i 显示inode，也就是每个i节点，每个节点都有id号

  可以复合用


  mkdir 创建目录
  mkdir -p test1/ss 创建多层目录
  mkdir -p opt/soft && cd $_ 创建多个目录并且进入到创建的目录
  touch 1.txt 创建文件
  
  1、linux删除文件夹命令 在用Linux的时候，有时候要删除一个文件夹，往往会提示次此文件非空，没法删除，这个时候，就必须使用rm -rf命令。 
  2、linux删除文件夹实例： rm -rf /var/log/httpd/access 将会删除/var/log/httpd/access目录以及其下所有文件、文件夹 
  3、linux删除文件实例： rm -f /var/log/httpd/access.log 将会强制删除/var/log/httpd/access.log这个文件 -r 就是向下递归，不管有多少级目录，一并删除 -f 就是直接强行删除，不作任何提示的意思 -i 进行交互式删除。 提示：使用rm命令要小心。因为一旦文件被删除，它是不能被恢复的。了防止这种情况的发生，可以使用i选项来逐个确认要删除的文件。如果用户输入y，文件将被删除。如果输入任何其他东西，文件则不会删除。 使用这个rm -rf删除文件的时候一定要格外小心，linux没有回收站的


  rm -rf * 删除当前文件夹下所有文件，递归删除，忽略提示

  recursion 递归
  force 暴力 强制


  1、ls命令
　　ls是list的缩写，常用命令为ls(显示出当前目录列表)，
ls -l（详细显示当前目录列表），
ls -lh(人性化的详细显示当前目录列表)，
ls -a(显示出当前目录列表，包含隐藏文件)
2、cd 命令
　　cd是change directory的缩写，常用命令为 cd 目录，cd ..为返回上级目录，cd - 返回上次所在目录
3、pwd命令
　　常用命令为pwd 显示当前所在目录
4、mkdir命令
　　mkdir命令为创建空目录命令，通常用法为mkdir 目录名，mkdir -p 目录名/目录名 可以递归创建多个不存在的目录
5、rm命令
　　rm为删除命令remove，rm 文件，谨慎操作
6、rmdir命令
　　rm为删除命令remove directory，rm 目录，谨慎操作
7、mv命令
　　mv命令move，移动剪切命令，mv 文件 目录，mv 文件 文件（会覆盖）
8、cp命令
　　cp命令为copy命令，复制文件或目录到别的目录里面,cp 文件/目录 目录/文件
9、touch命令
　　touch命令创建空文件，比如touch xx.txt,touch 目录 文件
10、cat命令
　　cat命令查看当前文件内容，cat fi.txt f2.txt > f3.txt合并文件内容，cat -n 对所有行进行编号
11、nl命令
　　nl命令 为文件加入显示行号，nl 文件名，nl -b a 文件名，将空行也加如行号
12、more 命令
　　more命令 按页显示文件内容，more 文件名,more -2 文件名 每2行显示一页
13、less命令
　　less命令查看文件内容，可以上下翻页，less 文件名
14、head命令
　　head命令可以查看文件前几行内容，head -n 2 文件名
15、tail命令
　　tail命令可以查看文件后几行内容，tail -n 2 文件名
16、which命令
　　which 可以执行文件名称，显示路径
17、whereis命令
　　whereis -m svn 查出说明文档路径，whereis -s svn 找source源文件。
18、locate命令
　　locate /etc/m 搜索ect目录下所有m开头的文件
19、find 命令
　　find . -name "*.log"根据关键字查找
20、find exec命令
　　ls -l命令放在find命令的-exec选项中 find . -type f -exec ls -l {} ;
21、find xargs命令
　　find . -type f -print | xargs file查找系统中的每一个普通文件，然后使用xargs命令来测试它们分别属于哪类文件
22、ls -lih命令
　　详细的文件属性
23、zmodem


drwxr-xr-x. 2 parallels parallels 6 6月 14 10:35 公共
drwxr-xr-x 文件类型和权限。权限：所有组权限 所有者权限 其他人权限
.ACL权限   如果前边的权限满足不了需求了，用这个赋予一些特殊的权限。
2 硬链接引用数
parallels 所有者
parallels 所属组
6 文件大小（字节）
6月 14 10:35 最后修改时间
公共 文件名


r（read）：可以读取文件的实际内容，比如读取文本文件的文字内容

w（write）：可以新增、编辑或者修改文件中的内容（不包括删除文件）

x（execute）：使文件具有被文件系统执行的权限。

r （read contents in directory）：表示具有读取目录结构清单的权限，所以如果你具有读取一个目录的权限时，就代表你可以查询目录下的文件，所以你就可以使用 ls 将目录的内容显示出来。

w（modify contents of directory）：写入权限表示你具有对文件目录和目录中的文件进行修改的操作，主要包括

删除已经存在的文件和目录。

创建新的文件和目录。

将已存在的文件或目录进行改名。

移动目录内文件、目录位置。

x（access directory）：这执行权限有啥用？总不能目录也能够被执行吧？其实并不是这样，执行权限表示着你有没有权限进入到指定目录下，也就是 cd(change directory) 。

https://mp.weixin.qq.com/s?__biz=MzU0OTE4MzYzMw==&mid=2247533442&idx=5&sn=e74e5b1013933c03ad9d517d65759e09&chksm=fbb1ca7cccc6436a569fca64d0d7c1a2255210985b2e0937722e6ff995099925069d06dd1d8b&scene=27


mkdir make directory
# mkdir -p 递归创建


# rmdir 删除目录 remove empty directory

# cp copy
-r 复制目录
-p 连带文件属性一块复制
-d 若源文件是链接，则复制链接属性
-a 相当于 -rpd
cp -r opt1 vue 把opt1和opt1中的文件一同拷贝到vue下面。拷贝目录要加 -r
cp opt1/* vue 把ot1下的文件全部拷贝到vue下面

# mv 移动文件或者改名
mv 【源文件或者目录】 【目标文件】

# ln 链接命令，生产链接文件
ln 【源文件】 【目标文件】 创建硬链接
ln -s 【源文件】 【目标文件】
-s 创建软
硬链接：拥有相同的i节点和存储block块，可以看作是同一个文件。
可以通过i节点访问，不能跨分区，不能针对目录使用，一般不使用。
源文件删除后，硬链接还可以继续使用。修改源文件，链接文件i节点不会改变，链接文件内容跟着改变。

软链接：类似windows的快捷方式，软链接拥有自己的i节点和block块，但是数据块中只保存源文件名和i节点号，并没有实际的文件数据。lrwxrwxrwx l软链接 软链接的文件权限（所有者，所有组，其他）都是777（可读可写可执行）。修改任意一个文件，另一个文件都会改变，删除源文件，软链接不能继续使用，软链接文件必须是绝对路径。，链接文件i节点不会改变，链接文件内容跟着改变。删除软链接源文件后，软链接文件失效，不能继续使用，此时再创建一个同名的源文件，会自动关联之前的软链接，并且会清空之前软链接中的内容，此时软链接和源文件的i节点不同，但是内容相互关联。硬链接不会自动链接。

软链接，硬链接，源文件，修改其中的任意一个文件，另外两个文件的内容均跟着改变。

# locate 搜索命令
在后台数据库按文件名搜索，速度比较快。
ll /val/lib/mlocate 查看后台数据库
数据保存在/val/lib/mlocate后台数据库，每天更新一次，里边有一个mlocate.db文件
# updatedb 更新数据库命令
可以用updatedb命令立刻更新数据库，如果搜不到的时候，可以更新一下数据库，再去搜索。
只能搜索文件名
/ect/updatedb.conf 建立索引的配置文件 数据库的配置文件
<!-- updatedb.conf配置文件的内容 -->
```
<!-- yes是开启搜索限制，no是忽略搜索限制 -->
PRUNE_BIND_MOUNTS = "yes"
<!-- 这些文件系统不参与搜索-->
PRUNEFS = "9p afs anon_inodefs auto autofs bdev binfmt_misc cgroup cifs coda configfs cpuset debugfs devpts ecryptfs exofs fuse fuse.sshfs fusectl gfs gfs2 gpfs hugetlbfs inotifyfs iso9660 jffs2 lustre mqueue ncpfs nfs nfs4 nfsd pipefs proc ramfs rootfs rpc_pipefs securityfs selinuxfs sfs sockfs sysfs tmpfs ubifs udf usbfs ceph fuse.ceph" 
<!-- 相关前缀后缀的文件不加入搜索 -->
PRUNENAMES = ".git .hg .svn .bzr .arch-ids {arch} CVS" 
<!-- 忽略的路径 -->
PRUNEPATHS = "/afs /media /mnt /net /sfs /tmp /udev /var/cache/ccache /var/lib/yum/yumdb /var/lib/dnf/yumdb /var/spool/cups /var/spool/squid /var/tmp /var/lib/ceph /var/lib/mock /sysroot/ostree/deploy"
```

# whereis
搜索命令的执行文件所在路径以及帮助文档所在位置
-b 只查找可执行文件
-m 只查找帮助文档
whereis ls 查看ls这个命令的文件在什么位置。

ls: /usr/bin/ls /usr/share/man/man1/ls.1.gz /usr/share/man/man1p/ls.1p.gz
/usr/bin/ls 这个命令的文件位置
/usr/share/man/man1/ls.1.gz /usr/share/man/man1p/ls.1p.gz 这两个文件是这个命令的帮助文档

# which
可以看到命令的别名。
看到的都是外部安装的命令，无法查看shell自带的命令
which ls
alias ls='ls --color=auto' //默认加上了显示颜色
	/usr/bin/ls

# 环境变量 环境变量是用来定义执行命令的搜索路径，比如输入一个ls，会按环境变量的路径顺序，一个一个找这个ls命令的执行文件，然后执行
# echo $PATH 查看系统搜索命令的路径
/root/.local/bin:/root/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin
先从/root/.local/bin 找，没有从/root/bin找，再没有从/usr/local/sbin找，以此类推
# 环境变量的设置
window下设置环境变量 
set p=1 
echo %p% =>1

linux下设置环境变量
export p=1
echo $p =>1

修改环境变量
1. export PATH=$PATH:newpath
2. cd /root 下面有一个.bashrc文件 或者.bash_profile
#User specific environment and startup programs
PATH=$PATH:$HOME?bin

nvm的安装

wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

加完后要执行一下这个脚本 让这个脚本生效
. /root/.bashrc
source /root/.bashrc


export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

echo $NVM_DIR 执行完这个脚本，环境变量就生效了，就可以执行nvm了



# find 【搜索范围】 【搜索条件】 查找
find /root -name testfind.txt 会查找这个硬盘的这个目录下的所有文件
https://blog.csdn.net/outman_1921/article/details/106140356
 -通配符 *：零到多个字符 ？：一个字符
find . -name "*.txt" 搜索当前文件夹下，名字是任意字符，.txt结尾的文件
find /home/lcd/ -name "?.txt" 查找前边一个字符带.txt结尾的文件
find /home/lcd/ -name "?.txt" 查找前边一个字符带.txt结尾的文件
find /home/lcd/ -name "m[iyz]*.txt" 查找名字是m开头，后边一个字符是iyz中的一个后边跟任意字符，结尾是.txt
的文件

-name 指定文件名
-iname 指定文件名 忽略大小写 ignore case
-user 按所有者进行搜索
-mtime +5
  atime 文件访问时间 a access
  mtime 修改文件内容 m modify
  ctime 改变文件属性 c change
  -5 5天内修改的文件，小于5天改的，0-4天
  5 第五天前修改的
  +5 5天前修改的文件
-size 按大小搜 
  k小写
  M大写
  find -size -8k 小于8k
-inum 按i节点搜索

-a 条件连接符 并且
-o 条件连接符 或者

# grep 在文件中查找符合条件的字符串  缩写来自Globally search a Regular Expression and Print
例
  grep "abc" ./mine.txt 搜索./mine.txt文件中 包含abc关键字的内容并且打印出来
  cat ./mine.txt | grep "abc" 和上边那个一样
  grep a[bs] ./mine.txt 也支持通配符查找
-i 忽略大小写
-v 排除指定字符串 取反


# cat /etc/group 查看所有用户组

# less /etc/passwd cat /etc/passwd 列出所有用户

从命令less /etc/passwd的输出中可以看到，每行有七个用冒号分隔的字段，其中包含以下信息。

用户名。加密的密码，x表示密码存储在/etc/shadow文件中。用户ID号，UID。

用户的组ID号 GID。用户的全名 GECOS。用户的主目录。登录shell，默认是/bin/bash。

# groupadd tgroup
#添加需要试验的用户和用户组，省略设定密码的过程

# gpasswd -a user1 users //把user1 加入到user组
# gpasswd -d user1 users //把user2 退出user组


# chown root:tgroup /project/
#改变/project目录的属主和属组

# chmod 770 /project/
chmod u+x hello.sh 给所有者加一个执行权限

# getfacl project
#查看/prpject目录的ACL权限


# setfacl -m g:tgroup2:rwx project/ 为组tgroup2纷配ACL权限，使用"g:组名:权限"格式

#  setfacl -m u:st:rx /project/  
# setfacl -m d:u:st:rx /project/ 格式设定默认ACL权限  原先的 abc 和 d1 还是没有 ACL 权限，因为默认 ACL 权限是针对新建立的文件生效的。
# setfacl -m u:st:rx -R/project/ 递归 ACL 权限
给用户st赋予r-x权限，使用"u:用户名：权限" 格式

# setfacl -x u:st /project/ 删除指定用户和用户组的ACL权限

# setfacl -b project/  #会删除文件的所有ACL权限
 
 ## 最大有效权限mask 大家可以这么理解：用户和用户组所设定的权限必须在 mask 权限设定的范围之内才能生效，mask权限就是最大有效权限。所有者还是拥有所有wrx权限。
 # setfacl -m m:rx project/  修改最大有效权限的命令

### vi编辑器
# 操作模式
  1.命令模式

  2.输入模式
  3.末行模式
    :w 把写入保存到硬盘中
    :q 退出当前vi编辑器打开的文件 q! 强行退出不保存
    :! 强制保存
    :数字 快速定位到当前文件的第几行
    /xxx 从光标位置搜索xxx
    ？xxx 从光标位置开始向前搜索
      n 下一个
      N 上一个
    ctrl+f 向下翻页
    ctrl+b 向下翻页
    ctrl+d 向下翻半页
    ctrl+u 向上翻半页
    -插入类
      i 在当前光标插入
      a在光标右侧插入
      A在光标右侧行末插入
      o 在光标下一行插入并切换到输入模式
      O 在光标的所在行的上方插入一行
      s 删除当前光标位置 并插入
    -删除类
      x
      dw从当前光标位置删除到单字的末尾 包括空格
      de 从当前光标的位删除到单子的末尾，但是包含空格
      d$ 从当前光标位置删除到当前的末行
    -行删除类
      dd 删除光标所在的行
      2dd 删除光标两行
    -撤销
      u 撤销最后执行的一次命令
      U恢复该行的原始状态
      ctrl+r恢复重做命令
    -剪切类
    dd 删除光标所在行
    yy 复制光标所在行
    p在光标所在行的下方粘贴
    P在光标所在行的上方粘贴
    - 替换类
    r 替换当前位置的字符
    cw修改单词
    c$修改这一行

# shell基础
shell是一个命令解释器，shell是解释执行的脚步语言，可以直接调用linux系统命令。

# echo hello 输出命令
# echo -e "11/r/n22"
# echo -e "\e[1;31m warning \e[0m" 输出颜色

## 编写执行shell
# sh 文件名

# alias 别名
# 给一个命令起一个别名 alias ls = "ls -l"
服务器重启就没有了

要想一直生效，要加到环境变量中
# vi ~/.bashrc 去修改
修改完要执行一下这个脚本才能生效 sh ～/.bashrc

# unalias  alias ls 删掉这个别名

# 执行一个命令的优先级顺序，先找指定的位置，然后再找别名，再找内部命令，再找环境变量（从左到右的路径找），然后再报错

# 命令快捷键
# ctrl+
  c强制终止
  l清屏
  a光标移动到命令行尾
  u从光标位置删除首行
  z把命令放入后台。fg 取回命令
  r再历史命令中搜索

# history 查看历史命令
  -c 清空历史命令
  -w 把缓存中的命令写入历史命令(写入到了～/.bash_history文件中)

# cat /etc/peofile historysize查看存放多少条历史命令(可以修改)

# !2 执行历史记录里的第二条任务
# !! 执行上一条任务

# 输入输出
  设备  设备文件      文件描述    类型
  键盘 /dev/stdin     0         标准输入
  显示器 /devstdout   1         标准输出
  显示器 /dev/stderr   2        标准错误输出

# 标准输出重定向 
  命令>文件 把这个命令的标准输出写到这个文件里（覆盖） 
  命令>>文件 把这个命令的标准输出写到这个文件中（追加的方式）
  cd xxxx >error.txt 2>&1 把错误输出写到标准输出中

# 输入重定向
  wc <2.txt  统计指定文件中的行数，字数，字节数，并将统计结果显示到控制台

# 管道符 
  # 多行命令执行符
  命令1;命令2  echo 1; echo 2
  命令1 && 命令2  当第一个命令执行成功了 会执行第二个。如果第一个命令失败了，第二个命令就不执行了。
  命令1 || 命令2 第一个命令如果执行成功了，第二个命令就不执行了
  ls && echo yes || echo no

  命令1的正确输出会作为命令2的操作对象
  命令1 ｜ 命令2
  ls /etc |more 把ls的内容传给more 分页显示

# 通配符
？匹配一个任意字符
*匹配0个或任意个字符
[]匹配中括号中任意一个字符
[-]匹配中括号中任意一个字符，代表范围，例如[a-z]
[^]匹配不是中括号中的一个字符



# 其他符号
  `命令`反引号括起来的是系统命令，执行里边命令。作为值
  $()和反引号一样
 '' 单引号里所有的特殊符号如$和`都没有特殊的含义
 "" 双引号中特殊符号没有特殊含义，但是$,\例外，拥有调用系统变量，引用命令和转义的功能。
  #井号在shell脚本中代表注释的意思
  $用于调用变量的值
  \转义符号

  # a = 'ls' 定义一个变量
  # echo $a 输出a变量
  # b ="$a 10"
  # b = "`ls`"

# 变量类型
  字符串
  整形
  浮点型
  日期

# 用户自定义的变量
  这些变量的值是自己定义的
  变量名不能为数字开头
  等号左右两边不能有空格

# 变量输出 echo $变量名

# 查看系统变量
# set 命令可以直接查看环境变量名 
  set ｜more 分页查看环境变量名
  set | grep PATH 过滤PATH字符的字段
# 删除变量
  unset a 删除变量a

# 环境变量是全局的，自定义变量是局部的
自定义的变量只在当前的shell终端有效，新开的shell是没有的
环境变量主要保存的是系统操作环境相关的数据
变量可以自定义，但是对系统生效的环境变量名和变量作用是固定的


# bash 进入到子shell里 exit 退出子shell

# export zname="zhufeng" 通过export定义的变量属于系统环境变量
  在当前的shell中和子shell中都能拿到这个变量，但是关闭控制台 再重新打开就没了

# env 查看的是环境变量，而看不到本地变量

1 doto https://blog.csdn.net/weixin_45129599/article/details/128802440 修改保护，把一个文件的软链接写入到环境变量，从而达到直接执行这个命令
# PATH=$PATH:/Users/liuchunda/Desktop/个人/前端/linux/test 临时生效,关闭终端后失效

永久生效写配置文件

~/.zshrc mac的环境变量配置文件


# echo $PS1
%(?:%{%}➜ :%{%}➜ ) %{$fg[cyan]%}%c%{$reset_color%} $(git_prompt_info)
这个环境变量可以改

# linux不支持中文显示的，支持中文显示的是shell终端，或者一些终端工具

# 位置参数变量
这种变量主要是用来向脚本当中传递参数或数据的，变量名不能自定义，变量作用是固定的
  $n n为数字，$0代表命令本身，$1-$9代表第1个到弟9个参数，10以上的参数需要用大括号包含，如${10}
  $*这个变量代表命中中的所有参数，$*把所有参数看成一个整体
  $@也代表命令行中所有参数，不过$@把每个参数进行区分
  $#这个变量代表命中行中参数的个数

###
  #!/bin/bash
  num1=$1
  num2=$2
  sum=$((num1+num2))
  echo "\033[32m \$*:$* \033[0m"
  echo "\033[32m \$@:$@ \033[0m"
  echo "\033[32m \$#:$# \033[0m"
  echo "${num1}+${num2}=$sum"



# sh -x 显示运行过程

# read 
  -p 提示信息，在等待read输入时，输出提示信息
  
  #!/bin/bash
  read -p "请输入你的用户名" -t 10 username
  echo "\n"
  read -p "请输入你的性别[m/f]" -n 1 gender
  echo "\n"
  read -p "请输入密码" -s password
  echo "\n"
  echo "你的用户名是${username},你的性别是${gender},你的密码是${password}"

# declare -i c 声明变量c是一个整型
  -给变量设定类型属性
  +取消变量的类型属性
  -a将变量声明为数组类型
  -i将变量声明为整数类型
  -x将变量声明为环境变量
  -r将变量声明为只读类型
  -p显示指定变量的被声明的类型

https://www.cnblogs.com/wcxia1985/p/16740397.html
vi编辑器中:wq 、:wq!、:x、:q、:q!的详细区别
下面的命令只是在vi编辑命令中使用
`:wq`和`:wq!`的区别如下：
`:x` 和 `:wq`的区别如下：
`:q` 和 `:q!`的区别如下：
 

下面的命令只是在vi编辑命令中使用
:wq：表示保存退出
:wq!：表示强制保存退出
:x：表示保存退出
:q：在vim中表示退出
:q!：表示强制不保存退出，不对文件进行保存

:wq和:wq!的区别如下：
有些文件设置了只读，一般不是修改文件的，但是如果你是文件的owner或者root的话，通过:wq!还是能保存文件退出

如果文件设置为只读了的话，用 :wq命令是不能保存并退出的，但是最高权限者可通过wq!来进行文件的保存并退出文件。

已设定选项 ‘readonly’ (请加 ! 强制执行)

文件所有者通过 wq! 可以保存只读文件

!是强制执行
如果不带!碰上只读文件，会给提示会是只读文件，带了！忽略只读强制写入

:x 和 :wq的区别如下：
(1) :wq 强制性写入文件并退出（存盘并退出 write and quite）。即使文件没有被修改也强制写入，并更新文件的修改时间。

(2) :x 写入文件并退出。仅当文件被修改时才写入，并更新文件修改时间；否则不会更新文件修改时间。

这两者一般情况下没什么不一样，但是在编程方面，对编辑源文件可能会产生重要影响。因为文件即使没有修改，":wq" 强制更新文件的修改时间，

这样会让 make 编译整个项目时以为文件被修改过了，然后就得重新编译链接生成可执行文件。这可能会产生让人误解的后果，当然也产生了不必要的系统资源花销。不过像是版本控制的软件一般首选还是比较文件内容，修改时间一般不加以理会。

:q 和 :q!的区别如下：
如果文件有修改，:q 会提示有修改，是否退出，输入y退出
如果文件有修改，:q! 会强制直接退出，并且不对文件进行保留









# acl权限 Access Control List
http://c.biancheng.net/view/863.html

# man ls 查看ls的说明

# zip 1.txt.zip 1.txt 压缩1.txt文件
  -r 默认只能压缩文件，-r可以压缩目录
  zip -r book.zip book
# unzip  解压缩
  unzip book.zip 
# gzip 高压 只能压缩文件 源文件会消失掉
  gzip 1.txt =》1.txt.gz
# gzip -d 1.txt.gz
# gzip -c 1.txt > 1.txt.gz 保留源文件压缩

# gzip -r book 不是压缩的这个目录，是压缩的book目录下所有的文件
# gzip -rd book 解压目录

# bzip2  1.txt gzip用法相同，解压方法也相同，只能压缩文件

# tar 打包，只打包不压缩
 -c 打包
 -v 显示过程
 -f 指定打包后的文件名
# tar -xvf book.bar 解压
# tar -zcvf book.tar.gz book 打包完后直接压缩成gzip文件


# shoutdown 关机
# shoudown -r 6:00 指定关机时间
# init 0 立刻关机
# init 6 重启

# w 查看用户信息
 18:23:28 up 0 min,  1 user,  load average: 3.93, 1.01, 0.34
USER     TTY        LOGIN@   IDLE   JCPU   PCPU WHAT
lcd      tty2      18:23   34.00s  0.04s  0.04s /usr/libexec/gnome-session-bina

 18:23:28 up 【开机时间】 0 min【使用时长】,  1 user,  load average: 3.93, 1.01, 0.34
USER（用户名）     TTY（登陆的终端）       LOGIN@ （登陆的时间）  IDLE（空闲时间） JCPU（终端占用cpu时间） PCPU（进程占用cpu时间） WHAT（当前用户执行的命令）
lcd               tty2                 18:23               34.00s          0.04s                   0.04s             /usr/libexec/gnome-session-bina

# who 查看登陆历史

# df 磁盘管理
  -h 人性化显示
  -H 按g
# du 查看文件目录大小
  -h 人性化显示


userdel命令可以用于删除用户帐号及相关档案。
语法：userdel [-r] 用户名
参数：-r 用于彻底删除，用户HOME目录下的档案会被移除，在其他位置上的档案也将一一找出并删除，比如路径/var/mail/用户名 下的邮件。
警告：userdel不允许你移除正在线上的使用者帐号。你必须kill此帐号现在在系统上执行的程序才能进行帐号删除。
用法示例：
彻底删除名为zhidao的用户：
$ userdel -r zhidao

# passwd 为当前用户修改密码
# passwd user 为这个用户修改密码 只有root才能指定用户





wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
