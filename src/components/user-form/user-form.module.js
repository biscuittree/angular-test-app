import angular from 'angular'
import userForm from './user-form.component'

const userFormModule = angular.module('app.user-form', [])

userFormModule.component('userForm', userForm)

export default userFormModule
