## jiuto_axios

默认导出一个封装好的axios

默认配置：

axios.defaults.timeout = 10000;

axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";

### API

#### baseGet

baseGet(url, config = {}) 封装的get请求，接受url和额外的request配置

#### basePost

basePost(url, data, config = {}) 封装的post请求，接受url、data和额外的request配置

#### basePut

basePut(url, data, config = {}) 封装的put请求，接受url、data和额外的request配置

#### baseDelete(url, config = {})

baseDelete(url, config = {}) 封装的delete请求，接受url、data和额外的request配置

#### base

base(config) 请求基础配置，接受一个config，可用于拓展其他基础请求

示例：
```javaScript
basePut = (url, data, config = {}) => {
    config.method = "put";
    config.url = url;
    config.data = data;
    return base(config);
};
```

### 使用

`npm i jiuto_axios`

`import { baseGet, basePost, basePut, baseDelete } from "jiuto_axios";`
