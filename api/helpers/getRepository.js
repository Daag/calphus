'use strict';

module.exports = function (config) {
  const currentRepository = config.repository.current;
  return require('../repositories/' + currentRepository + '/' + currentRepository + 'Repository')(config.repository[currentRepository]);
};
