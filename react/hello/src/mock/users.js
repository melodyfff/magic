import Mock from 'mockjs'

Mock.mock('/mock/usermsg', 'get', {
    code: '0',
    msg: 'success',
    'list|5': [{ name: '@name', age: '@integer(18, 25)'}]
})

export default Mock.mock('/api/v1/dataSourcesers','get',{
    success: true,
    message: '@cparagraph',
    'list|5': [{ name: '@name', age: '@integer(18, 25)'}]
})