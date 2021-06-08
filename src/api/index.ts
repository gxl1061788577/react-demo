const axios  = require('http/index')

const getData = () => {
    return axios.post('www.baidu.com');
}

export {
    getData
}
