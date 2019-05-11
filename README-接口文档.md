接口地址: localhost:4000

## 登录

  请求方式: POST
  接口地址: localhost:4000/login

  | 参数 | 类型 | 是否必须 | 说明 |
  | :-- | :-- | :-- | :-- |
  | username | str | 是 | 用户名 |
  | password | str | 是 | 密码

## 注册

  请求方式: POST
  接口地址: localhost:4000/register

  | 参数 | 类型 | 是否必须 | 说明 |
  | :-- | :-- | :-- | :-- |
  | username | str | 是 | 用户名 |
  | password | str | 是 | 密码 |
  | captcha | number | 是 | 验证码 |
  | phone | number | 是 | 手机号码 |

## 用户列表

接口地址: localhost:4000/user/userslist
  | 请求类型 | 功能 |
  | :-- | :-- |
  | GET | 获取用户列表 |
  | put | 修改用户列表 |
  | delete | 删除用户列表 |
  | post | 添加用户列表 |

