# linux 文档
* 首先对于大多数人来说的话，使用的电脑任然是我们的 windows 系统
* 只有在后面进行实习或者说上班后才会有公司分配的mac 电脑
* 但是为了模拟我们的linux 操作，这里推荐两个虚拟环境吧
  * 一个就是我们的 ubuntu (适合于大多数初学者进行操作使用)
  * 一个就是我们的 centos | centos-stream (对于有一定基础的人来进行使用吧)

## 操作系统概念
* 我们的操作系统中具备的核心概念含有
  * `进程（线程）`: 这个是我们的操作系统操作 CPU 的核心抽象名称吧
  * `虚拟内存（地址内存）`: 操作系统对物理内存的抽象吧
  * `文件系统`: 操作系统对磁盘的抽象吧
  * `shell`: 这个就是我们的操作系统的命令行吧
  * `GUI`: 这个就是我们的图形化用户界面吧
  * 当然还有很多很多其他的概念，可以自行了解一下计算机系统吧

## 进程和线程
### 进程是什么呢？？
* 在我们的操作系统中最为核心的就是我们的进程了吧，进程是我们的一个程序可以被运行的基础吧
* `进程也是我们的一个正在运行的程序的抽象吧，是系统进行资源分配和调用的基本单元`
* `操作系统的其他的内容都是基于进程来开展的呐，负责执行我们的进程任务的是 CPU`

### 线程是什么呐？？
* `线程是我们的操作系统能够进行运算调度的最小单元吧，属于是进程中的一个小的执行单元吧，负责是进程中的某个功能的执行吧`
* `一个进程中至少含有一个线程，一个进程中可以运行多个线程吧，这些线程共享的是同一块内存空间，线程之间是存在我们的共享资源的特性`
  * 因为线程之间是具备我们的共享一个进程之间的资源的关系，所以说这个时候就需要进行对我们的线程加锁，从而解决数据产生的冲突以及保证数据保持同步吧
* 这里需要进行区分的概念含有
  * `一个进程中并不是线程越多，工作效率就越高，因为不管如何，他们所占用的CPU 始终是处于一个 CPU 中的或者说多核 CPU 中的`
* 进程中的线程执行原理
  * `多线程从宏观上来说的话是一个并行的，但是微观上进行观测的话实际上是切换串行的`
  * `多线程中常见的最大的问题点就是我们的数据共享，需要进行避免我们的数据冲突问题吧`

### 总结
> * `本质区别`: 进程是操作系统资源分配的单位，线程是进程中某个功能的执行和调度的基本单位吧
> * `开销方面`: 每个进程拥有独立的`CPU 空间（独立代码和数据空间（程序上下文））`，`程序之间在进行切换的时候会有较大的开销`
>   * 线程的话是一个轻量级的进程吧，在同一个进程中线程，共享该进程中的代码和数据空间
>   * `每个线程拥有自己独立的运行栈和程序计数器（PC），所以说线程的开销相对较小`
> * `所处环境`: 在一个操作系统中可以实现的是运行多个进程（程序），同一个进程中可以有多个线程（通过CPU调度进程，每个对应的时间切片中只有一个线程处于运行状态）
> * `内存分配问题`: 系统在运行的时候会给每个进程分配不同的内存空间，但是线程的话内存是不会对其进行分配内存的，线程组之间只能通过共享进程中的资源
> * `关系`: 没有线程的进程可以被看作为我们的单线程，如果我们的一个进程中含有多个线程，那么执行调度就不在是一条线了，而是由多个线程进行执行的呐

## Linux shell 命令
### shell 是什么呐？？？
* `shell` 是由我们的 C 语言实现编写的一个工具，实现的是帮助用户使用 linux 的桥梁吧，shell 是一个命令语言，也是我们的一个程序设计语言吧
* `shell` 连接了用户和linux 内核，让用户可以实现的是更加高效安全底层本的操作我们的 linux 内核吧，就是一个软件吧，类似于 QQ，微信吧
* `sheel` 主要的作用就是为了接收用户输入的命令吧，并且对用户输入的命令进行处理，处理完毕后将信息反馈给用户，shell 命令后缀名 `.sh`
```shell
#!/usr/bin/env bash

# 执行生命体
ls 
echo "hello world"
```
* `#!/usr/bin/env bash` 指定我们使用的脚本 shell 类型是 `Bash`
* ls 就是我们的一个常用的 linux 操作的命令吧 ，echo 就是我们的一个输出命令
* 上面的 shell 命令实现的就是我们的: 打印出当前目录下的文件列表，同时屏幕上输出 `hello world`

### shell 的种类
* linux 系统中的 shell 脚本的种类居多，都能够给我们的用户提供对应的命令行环境和程序吧
  * `Bourne shell（sh）`: 这是我们的最原始的 shell 脚本，被安装在几乎所有发源于 Unix 的操作系统上的呐
  * `Bourne Again shell（bash）`: 是我们的 sh 的一个进阶吧，比 sh 更加的优秀好用，bash 是目前大多数 linux 发行版以及 macOS 系统默认安装的 shell
  * `C Shell（csh）`: 语法类似于 C 的一个 shell 吧
  * `TENEXT shell（tcsh）`: 是 csh 的一个优化版本吧
  * `Korn shell（ksh）`: 收费的 Unix 中出现的一个 shell 吧（当然没用过，有开源的当然用开源的啦，哈哈哈）
  * `Z shell（zsh）`: 是一个非常优秀的 shell 吧，继承了 `Bash` | `ksh` | `tcsh` 的一些特性

### 常用的 shell 命令
* `ls` 查看当前目录的所有文件信息，只有文件名
* `ll` 查看当前目录的所有文件信息，包括文件名、权限、大小、修改时间等
* `cd` 切换工作目录的 shell 命令
* `pwd` 显示当前工作目录的 shell 命令
* `mkdir` 创建目录的 shell 命令
* `rm` 删除文件的 shell 命令
* `rmdir` 删除目录的 shell 命令
* `cp` 复制文件的 shell 命令
* `mv` 移动文件的 shell 命令
* `cat` 显示文件的内容
* `head` 显示文件的前几行内容
* `tail` 显示文件的后几行内容
* `du` 显示目录的大小
* `su` 切换用户
* `chmod` 修改文件权限
* `chown` 修改文件所有者

### shell 命令编写
* shell 中是不具备我们的数据类型的概念的呐，所有的变量的值都是字符串，该字符串中可以保存的含有我们的 一个数字，一个字符，一个字符串等等
* 访问变量的形式是: `${variable_name}` 或者 `$variable_name`
```shell
#!/usr/bin/env bash
word="hello world"
echo "word: ${word}"
echo "word: $word" 
# output: word: hello world
# output: word: hello world
```
* shell 中的条件命令的话，使用的是我们的 if...then...else...fi，
  * 如果表达式为真，就是执行的是处理 then-else 的内容，如果表达式为假，就是执行的是处理 else-fi 的内容
```shell
#!/usr/bin/env bash
if [[ 1 -eq 1 ]]; then
  echo "1 is equal to 1"
else
  echo "1 is not equal to 1"
fi  
```
* shell 中的循环命令，使用的是 for...in...do...done，
```shell
#! /usr/bin/env bash
for i in 1 2 3 4 5; do
  echo "i is equal to ${i}"
  if [[ ${i} -eq 3 ]]; then
    break
  else
    continue
  fi 
  echo "i is not equal to 3" 
```

## Linux 用户管理
### 用户管理是什么？？
* 我们的 linux 是一个多用户的操作系统，这一点的话是和我们的windows系统最大的一个不同点吧
* linux 系统是允许我们的拥有不同权限的用户进行登录该系统的呐，实现我们的多用户进行操作主机上的资源吧
* 既然我们的 linux 是以一个多用户操作系统，这个时候最重要的就是我们的用户权限问题了，从而实现不同的用户拥有操作一台主机上的对应的资源的权限吧
* 这个就是为什么现在的企业选择 linux 进行办公的原因之一了吧

### 用户和用户组
* 就是我们的用户和用户组之间吧，一个用户属于某个用户组，每个用户组之间拥有操作某个资源的权限，用户具备操作该用户组中的资源权限吧
  * 文件所有者
  * 用户组成员
  * 其他人
* 每一个对象对某个文件的持有权限是不尽相同的呐

### 文件所有者
* 当一个用户进行创建了某个文件的时候，那么该用户就是该文件的所有者
* 文件所有者对于该文件拥有最高执行权限吧，只有当该文件被公开了，否则其他是无法进行对文件的任何操作的呐

### 用户组
* 如果我们的一个文件所有者希望对组织内部的部分人开通文件的访问权限，这个时候就需要对部分人任然保持私有，部分人公开
* 这个时候就需要进行的是我们的将这部分的用户与文件所有者划分为一个用户组吧

### 用户和用户组之间的关系是什么呐？？
* 一对一关系: 某个用户是某个用户组中的唯一成员
* 多对一关系: 多个用户是某个唯一组的成员，不归属于其他用户组
* 一对多关系: 某个用户可以是多个用户组成员
* 多对多关系: 多个用户是多个用户组中的成员
> * 当我们使用 ll 命令实现查看当前目录文件的时候展示信息
>   * `drwxr-xr-x`
>     * `d` 表示的是文件类型
>     * `rwxr-xr-x` 表示的是文件权限
> * 展示信息规格
>   * `文件类型文件权限 硬链接数目 文件所有者 用户组 文件大小 文件修改时间 文件名`
>   * 文件权限分为三组，每个组包含3个字符
>     * 第一组是: `文件所有者`具备的操作该文件的权限
>     * 第二组是: `所有者所在用户组的其他成员`的操作权限
>     * 第二组是: `操作系统中其他用户`的操作权限吧
> * 每一组包含的三个权限关系
>   * `r` -- 读权限
>   * `w` -- 写权限
>   * `x` -- 执行权限

### 新增用户操作
* 就是使用的是我们的 `useradd` 的操作了吧
  * `useradd [options] [username]`
* 这里再进行科普一点吧，就是在创建进行创建一个用户的时候，话用户就具备了属于自己的用户组吧
  * 也就是说，一个用户既具备操作自己的用户身份，还具备自身的用户组管理员身份吧
* 来几个比较实际的例子吧
```shell
#!/usr/bin/env bash

useradd juwenzhang # 创建一个用户名为 juwenzhang 的用户，同时会创建一个同名的用户组 juwenzhang

useradd -g root juwenzhang # 添加了一个用户 juwenzhang 到用户组 root 中吧

useradd -r juwenzhang # 创建了一个系统用户，系统用户不能够登录主机，只能够通过 sudo 进行操作

useradd -m -s /bin/bash juwenzhang # 创建了一个用户名为 juwenzhang 的用户，同时会创建一个同名的用户组 juwenzhang，并且设置该用户的默认登录 shell 为 /bin/bash
```

### 设置用户密码
* 就是使用的我们的 `passwd` 的操作吧
* `passwd [options] [username]`
  * `-d` -- 删除用户的密码
  * `-f` -- 强制修改密码
  * `-l` -- 锁定用户的密码
  * `-u` -- 解锁用户的密码
  * `-S` -- 显示用户的密码状态
  * `-g` -- 修改群主密码
```shell
#!/usr/bin/env bash
passwd juwenzhang # 修改用户 juwenzhang 的密码
passwd -d juwenzhang # 删除用户 juwenzhang 的密码
passwd -f juwenzhang # 强制修改用户 juwenzhang 的密码
passwd -l juwenzhang # 锁定用户 juwenzhang 的密码
```

### 修改用户密码过期时间
* 就是使用的我们的 `chage` 的操作吧
* `chage [options] [username]`
  * `-d` -- 设置密码过期时间
  * `-E` -- 设置密码过期时间
  * `-I` -- 设置密码锁定时间
  * `-M` -- 设置密码保持有效的最大天数
  * `-m` -- 设置密码保持有效的最小天数

### 删除用户操作
* 就是使用的我们的 `userdel` 的操作吧
* `userdel [options] [username]`
  * `-r` -- 删除用户对应的用户组

### 新增用户组
* 就是使用的我们的 `groupadd` 的操作吧
* `groupadd [options] [groupname]`
  * `-g` -- 设置用户组 ID
  * `-r` -- 设置系统用户组
  * `-K` -- 覆盖配置文件
  * `-o` -- 设置用户组属性
  * `-f` -- 设置用户组属性

### 其他操作
* `usermod` -- 修改用户信息
* `groupmod` -- 修改用户组信息
* `groupdel` -- 删除用户组
* `su` -- 切换用户进行登录
* `sudo` -- 使用管理员身份运行

## Linux 文件操作
> * 我们的文件系统的话，就是一个树结构的数据管理吧，文件系统结构的话从一个根目录进行往下专研的
> * 根目录下面可以有任意多个文件和子目录，子目录又可以含有多个文件和子目录吧

### ls 命令
* 实现的就是我们的显示当前目录下所具有的文件名以及子目录
* `ls [options] [path]`
  * `-a` -- 显示所有文件，包括隐藏文件
  * `-l` -- 显示文件详细信息
  * `-d` -- 仅仅列出目录信息吧
```shell
#!/usr/bin/env bash
ls -l # 显示当前目录下所有文件详细信息
ls -a # 显示当前目录下所有文件，包括隐藏文件
ls -d # 仅仅列出目录信息
ls -lad / # 列出根目录下所有目录信息
```

### cd 命令
* 实现的就是我们的切换目录操作
```shell
#!/usr/bin/env bash
cd / # 切换到根目录
cd /home/juwenzhang # 切换到用户 juwenzhang 的家目录
cd /home/juwenzhang/Documents # 切换到用户 juwenzhang 的文档目录
```

### pwd 命令
* 实现的就是我们的显示当前目录的操作 Print Working Directory
```shell
#!/usr/bin/env bash
pwd
```

### mkdir 命令
* 实现的就是我们的创建目录的操作
* `mkdir [options] [path]`
  * `-m` -- 设置目录权限
  * `-p` -- 递归创建目录
```shell
#!/usr/bin/env bash
mkdir /home/juwenzhang/Documents/test # 创建一个名为 test 的目录
```

### rmdir 命令
* 实现的就是我们的删除空目录的操作
* `rmdir [options] [path]`
```shell
#!/usr/bin/env bash
rmdir /home/juwenzhang/Documents/test # 删除一个名为 test 的目录
```

### cp 命令
* 实现的就是我们的复制文件或者目录的操作
* `cp [options] [source] [destination]`
  * `-r` -- 递归复制文件或者目录
```shell
#!/usr/bin/env bash
cp /home/juwenzhang/Documents/test /home/juwenzhang/Documents/test2
```

### rm 命令
* 实现的就是我们的删除文件或者目录的操作
* `rm [options] [path]`
  * `-f` -- 强制删除文件
  * `-i` -- 删除文件之前进行询问
  * `-r` -- 递归删除文件或者目录
```shell
#!/usr/bin/env bash
rm /home/juwenzhang/Documents/test2
rm -r /home/juwenzhang/Documents/test2
rm -rf /home/juwenzhang/Documents/test2
```

### mv 命令
* 实现的就是我们的移动文件或者目录的操作
* `mv [options] [source] [destination]`
  * `-f` -- 强制移动文件
  * `-i` -- 移动文件之前进行询问
  * `-u` -- 若文件已经存在，则更新

### ln 命令
* 首先我们的文件系统的话是具备软连接和硬连接的概念的呐
* 创建硬连接的方式: `ln fileName linkName`
  * 如果两个文件之间进行的硬连接，那么我们进行修改随意一个文件的内容，另一个也是会被跟着修改的呐
  * 这个时候我们的两个文件的话指向的是同一片内存单元吧，所以说就有了上面描述的效果了
  * 同时硬连接来说的话，删除任意一个文件，另一个文件也不会被删除的呐
  * 结合自身所学习的引用类型数据来结合记忆吧
* 创建软连接的方式: `ln -s fileName linkName`
  * 软连接就是从原本的文件基础上创建了一个快捷方式罢了，本质上软连接出来的文件的话指向的是我们的原本的文件了吧
  * 在这里的话我们删除文件的时候，一定要把每个文件的软连接文件删除干净，然后进行删除本身文件
  * 如果不这样进行的话，导致的效果就是软连接出来的文件就成了操作系统中的一个类似于野指针的文件了吧

## Linux 文件查看
### cat 命令
* 实现的就是我们的查看文件内容操作
* `cat [options] [path]`
  * `-b` -- 显示空格前的行号
  * `-n` -- 显示行号
```shell
#!/usr/bin/env bash
cat /etc/passwd
```

### less 命令
* 实现的就是我们的查看文件内容操作
* `less [options] [path]`
  * 实现的效果就是我们的一页一页的阅读我们的文件内容吧
  * `/` -- 进行搜索
  * `q` -- 退出
  * `h` -- 查看帮助
```shell
#!/usr/bin/env bash
less /etc/passwd
cat /etc/passwd | less # 显示所有文件内容
cat /etc/passwd | less -N 
cat /etc/passwd | less -N -b 
cat /etc/passwd | less -N -b -r
cat /etc/passwd | less -N -b -r -S
```

### head 命令
* 实现的就是我们的查看文件内容操作
* `head [options] [path]`
  * 获取文件的前面几行内容
```shell
#!/usr/bin/env bash
head /etc/passwd
head -n 10 /etc/passwd
head -c 10 /etc/passwd
```

### tail 命令
* 实现的就是我们的查看文件内容操作
* `tail [options] [path]`
  * 获取的是文件后面几行内容吧
```shell
#!/usr/bin/env bash
tail /etc/passwd
tail -n 10 /etc/passwd
tail -c 10 /etc/passwd
tail -f /var/log/syslog
```

## Linux vim操作
### vim 是什么呐
* 是一个我们的 linux 系统中编辑文件的工具吧，和 vi 是等价的

### vim 的使用
* vim 具备三种模式吧
  * 命令模式 Command Mode
  * 插入模式 Insert Mode
  * 底线命令模式: Last Line Mode
* vi|vim filename
  * 首先进入的就是我们的`命令模式`
  * 输入了 i | a | o 就实现了进入我们的`输入模式`吧
  * esc 实现的就是`退出输入模式`
  * 输入了 `:` 实现的就是进入我们的`底线命令模式`
  * 输入了 `wq` 实现的就是退出我们的`底线命令模式` 以及退出本次编辑吧
* 对于 linux 操作的话还有很多的其他的操作
  * 上面的是我平时使用得比较多的一些 linux 命令了吧
  * 自己还可以进行额外的拓展吧

## 远程连接
* 为了方便我们的平时的操作，我们是可以进行的是我们的为虚拟机安装一个服务: sshd 的
  * `sudo dnf install openssh-server`
  * `sudo systemctl enable sshd`
  * `sudo systemctl start sshd`
* 同时我们需要做的还有就是重新配置虚拟机的网络配置吧