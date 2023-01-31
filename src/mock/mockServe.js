import Mock from 'mockjs'
import token from './token.json'

Mock.mock("/mock/token", { code: 200, data: token })
