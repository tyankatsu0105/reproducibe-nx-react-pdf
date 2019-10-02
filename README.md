# 解決策

nrwl/nxではwebpackのoverrideが可能(workspace.jsonで指定)なので、overrideを用意して、  
```js
config.node = {
    module: 'empty',
    dgram: 'empty',
    dns: 'mock',
    fs: 'empty',
    http2: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  };
```
を追加。

参照
[https://webpack.js.org/configuration/node/](https://webpack.js.org/configuration/node/)