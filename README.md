## What is this?

这是Javascript学习过程的Demo库，每一个小的知识点建立一个文件夹，都是独立的小练习。

## showcase List

[http://sialvsic.me/javascript-demo/](http://sialvsic.me/javascript-demo/)

Include:


## Note

所有的的示例上传到gh-pages,注意在上传的时候，记得同时push to master 和 gh-pages

## Problem

如何上传到gh-pages上，很简单，follow the bellow step:

1.新建一个名字为`gh-pages`的分支

```
$ git checkout -b gh-pages
```

2.push代码到这个新的分支上即可

```
$ git push origin gh-pages
```

那么demo可以按照以下的方式找到

https://sialvsic.github.io/(repe-name)/(submodule-name)/index.html

eg:

[https://sialvsic.github.io/css-demo/modal/index.html](https://sialvsic.github.io/css-demo/modal/index.html)

因为我对sialvsic.github.io做了域名的重定向，所以实际上跳转到

[http://sialvsic.me/css-demo/modal/index.html](http://sialvsic.me/css-demo/modal/index.html)

## Push flow

Step 1
```
$ (master)  git add
```

Step 2

```
$ (master)  git commit
```

Step 3

```
$ (master)  git push origin master
```

Step 4

```
$ (master)  git checkout gh-pages
```

Step 5

```
$ (gh-pages)  git merge master
```

Step 6

```
$ (gh-pages)  git push origin gh-pages
```



