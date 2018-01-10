# webpack的简单使用
使用[webpack](https://doc.webpack-china.org/)首先需要安装[nodejs](https://nodejs.org/en/download/)，让后在本地电脑上配置webpack。使用`webpack`需要在本地安装`webpack`。
## 安装全局webpack
使用 npm 安装 webpack
> npm install webpack -g

将webpack安装到全局，此时可以使用`webpack -h`命令查看webpack的相关信息。
## 将webpack安装到实际的项目中
实际开发中我们会将`webpack`安装到实际的项目中，这样就可以使用项目本地版本的`webpack`。

> npm install webpack --save -dev

安装之前确保项目以及拥有`package.json`，如果没有使用`npm init`创建，或者自己手动创建。

## 安装指定版本的webpack
如果需要安装指定版本的`webpack`可以使用`npm info webpack`查看`webpack`的版本信息，在使用

> npm install webpack@2.7.0 --save -dev

上面的就是安装的2.7.0版本的webpack。

# webpack的使用
使用以下命令可以使用webpack打包一个文件

> webpack index.js bundle.js

上面的代码的意思是：把`index.js`及其所需要的依赖项打包到`bundle.js`。在实际使用的时候就是使用的`bundle.js`。

index.js没有内容的使用`bundle.js`也是有内容的，是一些webpack的基本配置。下面是webpack3.10.0这个版本的打包默认内容。
```javascript
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {



/***/ })
/******/ ]);
```
## 输出日志
打包时会有一些日志
```text
PS G:\webpack\demo1> webpack index.js bundle.js
Hash: 0bd4f09244f0e8c60354
Version: webpack 3.10.0
Time: 79ms
    Asset     Size  Chunks             Chunk Names
bundle.js  2.47 kB       0  [emitted]  main
   [0] ./index.js 0 bytes {0} [built]
```

其中：
- Hash：表示当前打包的一个记录名字
- Version：表示当前webpack的版本
- Time：表示打包所消耗的时间
- bundle.js：表示的是打包后的文件，下面的[0]-[n]表示的是需要打包的文件及其信息。

# webpack配置文件
在具体的项目中我们是不会这个做的。而是创建一个webpack的配置文件。将需要的东西直接放入配置文件中。

下面来看看`webpack`的配置文件

## 创建一个配置文件
在项目根目录下创建一个名字为`webpack.config.js`的js文件。
这个文件的基本结构如下：
```javascript
module.exports = {
	
}
```

这个文件是可以高度配置的，可以配置的有四个**核心**。
- 入口 entry
- 输出 output
- loader
- 插件 plugins

### 配置入口 entry
入口起点(entry point)指示 webpack 应该使用哪个模块，来作为构建其内部依赖图的开始。进入入口起点后，webpack 会找出有哪些模块和库是入口起点（直接和间接）依赖的。
简单的说就是那些文件是需要打包的。可以配置多个入口文件

**下面是单文件的配置**
```javascript
module.exports = {
	entry: "./index.js"
}
```

**如果是拥有多个文件可以使用数组或者是对象的方式**
```javascript
module.exports = {
	entry: ["./index1.js","./index2.js"]
}
```
或者对象：
```javascript
module.exports = {
	entry: {
		a: "index1.js",
		b: "index2.js"
	}
}
```
如果是使用的多个入口文件，则表示他们之间没有相互依赖。

### 配置出口 output
output 属性告诉 webpack 在哪里输出它所创建的 bundles，以及如何命名这些文件。

```javascript
module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    }
}
```
指定的`output.path`表示的输出目录的**绝对路径**，`output.filename`表示输出文件的名字。`__dirname`表示的是根目录

上面的都是单文件对应的入口与出口，如果是多文件则可以使用一下的代码：
```javascript
module.exports = {
    entry: {
        app: "./index.js",
        module1: "./js/module1.js"
    },
    output: {
        path: __dirname + "/public",
        filename: "[name].js"
    }
}
```
上面的代码的意思是：**有两个入口文件，一个是app，一个是module1**。在配置出口文件的时候`path`指定的是根目录下面的`public`文件夹。`filename`使用的是`[name].js`。这里的`[name]`表示的是`entry`中的每一项，即**app与mudule1**两个。所以最后生成的就是两个js文件。一个`app.js`一个`module1.js`。在最开始的时候我们看的每一次打包的时候都会有一个`hash`，所以在生成js文件的时候有的开发者也可能会使用这个`hash`来命名。如下：
```javascript
module.exports = {
    entry: {
        app: "./index.js",
        module1: "./js/module1.js"
    },
    output: {
        path: __dirname + "/public",
        filename: "[name]-[hash].js"
    }
}
```
之后生成的js文件的文件名就是`app-hash`的一个格式。**但是要注意不能只是用hash**。

当然，我们也可以利用这个`hash`创建一个文件夹。讲每一次的文件放在这和文件夹里面
module.exports = {
    entry: {
        app: "./index.js",
        module1: "./js/module1.js"
    },
    output: {
        path: __dirname + "/public/[hash]",
        filename: "[name].js"
    }
}
<span style="color:red;font-weight: 900;">可以看出，在这个配置文件里面如果需要使用一些"变量"可以用`[]`括起来</span>


配置了入口与出口后就可以使用这个文件了。在命令行使用`webpack`。这样也可以达到我们需要的目的。

为了方便。我们可以在`package.json`里面重新配置运行命令，下面我们把运行命令改为`npm start`。
```javascript
"scripts": {
    "test": "",
    "start": "webpack"
  }
```
将`package.json`中的`scripts`中添加一个`start`，后面的值表示这个`start`所表示的命令。

**以上就是关于输入与输出的配置**

### 配置loader
loader 用于对模块的源代码进行转换。loader 可以使你在`import`或"加载"模块时预处理文件。因此，loader 类似于其他构建工具中“任务(task)”，并提供了处理前端构建步骤的强大方法。loader 可以将文件从不同的语言（如 TypeScript）转换为 JavaScript，或将内联图像转换为 data URL。loader 甚至允许你直接在 JavaScript 模块中`import`CSS文件！
上面的是<a href="https://doc.webpack-china.org/concepts/loaders/" target="_blank">webpack官网</a>中的说法。简言之，就是使用loader把一些语法转换为现代浏览器支持的语法，并把他一起打包到你所需要的js文件里面。

使用最多的就是对css解析的loader，解析css需要安装两个loader：`style-loader`与`css-loader`
那首先需要安装两个loader

> npm install style-loader --save -dev
> npm install css-loader --save -dev

配置的时候
```javascript
module.exports = {
    entry: {
        app: "./app.js"
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test:/.css$/,
                use: [
                    {loader: "style-loader"},
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    }
                ]
            }
        ]
    }
}
```
`loader`需要放在`module`的`rules`里面，`rules`是一个数组，里面放着每一个需要匹配的东西
- text：表示的是需要匹配的文件，用正则匹配`.css`的文件
- use：是一个数组，放着匹配这类文件需要用到的`loader`。

更多的配置查看<a href="https://doc.webpack-china.org/configuration/module/" target="_blank">https://doc.webpack-china.org/configuration/module/</a>

这是放在了webpack的配置文件里面，还可以在导入每一个文件的时候使用
> require("style-loader!css-loader?./style.css")
> import Styles from 'style-loader!css-loader?modules!./styles.css';

或任何等效于 "import" 的方式中指定 loader。使用 ! 将资源中的 loader 分开。分开的每个部分都相对于当前目录解析。
**不过还是建议把loader的使用放在webpack的配置文件中，避免每一次都引用**。

常用的loader：
- style-loader，css-loader：一起使用解析css
- postcss-loader：css的兼容处理（兼容性前缀）
- url-loader，file-loader：限制图片的大小
- babel-loader，babel-preset-es2015，babel-preset-reace：js处理，js转码
- less-loader，sass-loader：处理样式
- json-loader：解析json格式文件

更多loader及说明查看：<a href="https://doc.webpack-china.org/loaders/" target=""_balnk>https://doc.webpack-china.org/loaders/</a>

### 配置插件（plugins）
插件是 wepback 的支柱功能。webpack 自身也是构建于，你在 webpack 配置中用到的相同的插件系统之上！

插件目的在于解决 loader 无法实现的其他事。

插件的配置也是在`webpack`的配置文件中，属性是`plugins`，值是一个数组。
每个插件的使用需要单独去了解。

由于插件可以携带参数/选项，你必须在 webpack 配置中，向 plugins 属性传入`new 实例`。

使用`html-webpack-plugin`
```javascript
// 引入插件
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        app: "./app.js"
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test:/.css$/,
                use: [
                    {loader: "style-loader"},
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./template/index.html"
        })
    ]
}
```
更多plugin及说明查看：<a href="https://doc.webpack-china.org/plugins/" target=""_balnk>https://doc.webpack-china.org/plugins/</a>

# 使用webpack-dev-server热更新
`webpack-dev-server`是一个独立的模块，须有单独使用npm安装。

> npm install webpack-dev-server --save -dev

让后在自己的`package.json`的`scripts`中添加
```javascript
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack",
    "dev": "webpack-dev-server --devtool eval-source-map --progress --colors --hot --inline --content-base ./dist"
  }
```
启用热更新须有使用`npm run dev`。后面的`./dist`表示热更新的文件目录。

更多`webpack-dev-server`的使用查看<a href="https://segmentfault.com/a/1190000006670084" target="_blank">https://segmentfault.com/a/1190000006670084</a>