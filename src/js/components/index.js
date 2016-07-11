import angular from 'angular';

let componentsModule = angular.module('app.components', []);

import ListErrors from './list-errors.component';

componentsModule.component('listErrors', ListErrors);

import ShowAuthed from './show-auth.directive.js';
componentsModule.directive('showAuthed', ShowAuthed);

export default componentsModule;
