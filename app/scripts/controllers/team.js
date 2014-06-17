'use strict';

angular.module('hackeduApp')
  .controller('TeamCtrl', function ($scope) {
    $scope.team = [
      {
        name: 'Ankit Ranjan',
        title: 'Developer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt vel velit non vulputate. Aliquam.',
        icon: 'http://4.bp.blogspot.com/-zsbDeAUd8aY/US7F0ta5d9I/AAAAAAAAEKY/UL2AAhHj6J8/s1600/facebook-default-no-profile-pic.jpg'
      },
      {
        name: 'Julian Poyourow',
        title: 'Developer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt vel velit non vulputate. Aliquam.',
        icon: 'http://4.bp.blogspot.com/-zsbDeAUd8aY/US7F0ta5d9I/AAAAAAAAEKY/UL2AAhHj6J8/s1600/facebook-default-no-profile-pic.jpg'
      },
      {
        name: 'Zach Latta',
        title: 'Founder',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt vel velit non vulputate. Aliquam.',
        icon: 'http://4.bp.blogspot.com/-zsbDeAUd8aY/US7F0ta5d9I/AAAAAAAAEKY/UL2AAhHj6J8/s1600/facebook-default-no-profile-pic.jpg'
      },
    ];
  });
