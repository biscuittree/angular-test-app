import angular from 'angular'
import userListPage from './user-list.component'

const userListModule = angular.module('app.user-list', [])

userListModule.component('userListPage', userListPage)

export default userListModule