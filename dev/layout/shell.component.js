(function() {
  'use strict';

  angular
    .module('portal')
    .controller('ShellController', ShellController)
    .component('appShell', {
      controller: 'ShellController',
      controllerAs: 'vm',
      templateUrl: 'layout/shell.html'
    });

  ShellController.$inject = [];
  function ShellController() {
    var vm = this;
    vm.shell_header = "New App";
  }
}());