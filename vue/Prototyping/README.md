# 快速原型开发(Instant Prototyping)

> https://cli.vuejs.org/guide/prototyping.html

使用 `vue serve` 和 `vue build` 命令针对单个`.vue`文件原型开发

## 前置条件
```bash
npm install -g @vue/cli-service-global
# or
yarn global add @vue/cli-service-global
```

## vue server
```bash
Usage: serve [options] [entry]

serve a .js or .vue file in development mode with zero config


Options:

  -o, --open  Open browser
  -c, --copy  Copy local url to clipboard
  -h, --help  output usage information
```

## vue build

```bash
Usage: build [options] [entry]

build a .js or .vue file in production mode with zero config


Options:

  -t, --target <target>  Build target (app | lib | wc | wc-async, default: app)
  -n, --name <name>      name for lib or web-component (default: entry filename)
  -d, --dest <dir>       output directory (default: dist)
  -h, --help             output usage information
```
