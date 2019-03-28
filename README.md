# 第八元素塑料板小程序

## 这个文件中标明
> 本仓库所包含的软件的概要、
> 使用流程、
> 许可协议等信息

# Git Commit 提交规范
1、统一团队Git commit 日志风格
2、方便日后 Reviewing Code
3、帮助我们写好 Changelog
4、能很好的提升项目整体质量
业界比较推崇 Angular 的 commit 规范 http://suo.im/4rsYee
* type

提交 commit 的类型，包括以下几种

- feat: 新功能

- fix: 修复问题

- docs: 修改文档

- style: 修改代码格式，不影响代码逻辑

- refactor: 重构代码，理论上不影响现有功能

- perf: 提升性能

- test: 增加修改测试用例

- chore: 修改工具相关（包括但不限于文档、代码生成等）
- save：单纯地保存记录
- other：用于难以分类的类别（不建议使用，但一些如删除不必要的文件，更新.ignore之类的可以使用）

* scope

修改文件的范围，比如：视图层、控制层、docs、config, plugin

* subject

- subject 是 commit 目的的简短描述（用一句话清楚的描述这次提交做了什么），不超过50个字符

* body

- 补充 subject 添加详细说明，可以分成多行，适当增加原因、目的等相关因素，也可不写

* footer

- 当有非兼容修改(Breaking Change)时必须在这里描述清楚

- 关闭issue或是链接到相关文档，如 Closes #1, Closes #2, #3

> **Remind**
- 使用微信开发者工具新建项目，本地开发**选择 `dist` 目录**
- 微信开发者工具 -> 项目
  - **关闭** ES6 转 ES5
  - **关闭** 代码压缩上传
  - **关闭** 上传代码时样式文件自动补全
  - **开启** 开发环境不校验请求域名、TLS版本以及HTTPS证书

## What's Included

- `npm run dev`
  - Compile `.wpy` files to `.wxml` / `.js` / `.wxss` etc
  - Related NPM packages
  - Copy static files
  - Watch changes

- `npm run build`: Production ready build.
  - Compile `.wpy` files to `.wxml` / `.js` / `.wxss` etc
  - Related NPM packages
  - Minified JavaScript
  - Copy static files

## LICENSE

[LICENSE](https://github.com/Thunf/wepy-demo-bookmall/blob/master/LICENSE)

Please note that the open source protocol for this repository is **GPL**. This means that you have the freedom to run, copy, modify and distribute the software. However, this software your modified itself is bound by GPL.