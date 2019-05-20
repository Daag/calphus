'use strict';

module.exports = function (config) {
  const currentDal = config.dal.current;
  return require('../dal/' + currentDal + '/' + currentDal + 'Dal')(config.dal[currentDal]);
};
