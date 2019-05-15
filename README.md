# antd 引入

按需加载 先安装 babel-plugins-import

> 1 在 package.json 中直接添加 如下代码

```
"babel": {
    "presets": [
      "react-app"
    ],
    "plugins": [
      ["import",
        {
          "libraryName": "antd",
          "libraryDirectory": "es",
          "style": "css"
        }
      ]
    ]
  }
```

> 2 先使用 `npm run eject` 打开配置文件（在`eject`之前先添加`git`，不然会报错） ,然后在 config/webpack.config.js 中添加如下代码:

```
// Process application JS with Babel.
// The preset includes JSX, Flow, TypeScript, and some ESnext features.
{
  test: /\.(js|mjs|jsx|ts|tsx)$/,
  include: paths.appSrc,
  loader: require.resolve('babel-loader'),
  options: {
    customize: require.resolve(
      'babel-preset-react-app/webpack-overrides'
    ),

    plugins: [
      [
        require.resolve('babel-plugin-named-asset-import'),
        {
          loaderMap: {
            svg: {
              ReactComponent: '@svgr/webpack?-svgo![path]',
            },
          },
        },
      ],
      // .babelrc or babel-loader option


      ["import", {
        "libraryName": "antd",
        "libraryDirectory": "es",
        "style": "css" // `style: true` 会加载 less 文件
      }],


    ],
    // This is a feature of `babel-loader` for webpack (not Babel itself).
    // It enables caching results in ./node_modules/.cache/babel-loader/
    // directory for faster rebuilds.
    cacheDirectory: true,
    cacheCompression: isEnvProduction,
    compact: isEnvProduction,
  },
},
```

添加配置之后需要重启服务哦！
