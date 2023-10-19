## 非对称加密

[图文彻底搞懂非对称加密（公钥密钥） - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/436455172)

非对称加密是一种可以使用 `公钥加密 私钥解密` 的加密方式

在 https 中使用非对称加密的目的是用加密的方式生成并传递 对称加密的会话秘钥

具体流程是：

1. 服务端准备私钥和公钥，并将公钥与 `服务端证书` 一起发送给客户端
2. 客户端拿到证书后基于`CA`验证证书可信，取出公钥
3. 客户端生成一个新的`会话秘钥`，并用公钥加密，然后将加密后的密文发送给服务端
4. 服务端使用自己的私钥进行解密，取出会话秘钥，这样就完成了会话秘钥的传递
5. 后续的会话内容使用会话秘钥进行对称加密，有效防止中间人抓包读取或者修改信息

<br/>

<br/>

## 抓包

中间人抓包的流程如下：

1. 客户端向服务端请求服务器证书
2. 中间人拦截，并代替客户端向服务端请求证书
3. 中间人将自己的服务器证书，携带自己的公钥发送给客户端
4. 客户端生成会话秘钥，使用中间人的公钥加密并发送给“服务器”
5. 中间人拦截后使用自己的私钥解密拿到会话秘钥，使用服务器公钥加密后发给服务器
6. 服务器拿到密文后用服务器私钥解密，拿到会话秘钥
7. 此时中间人就获得了会话秘钥，并取得双方新人，双方的通讯都可以由中间人代理

出现这样问题的关键在第四步，客户端轻易信任了伪造的服务器证书
