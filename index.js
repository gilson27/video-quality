/**
  @file Main module file which exports all functions
        provided by the package
  @date 13 Oct, 2016
  @author Gilson Varghese<gilsonvarghese@outlook.com>
*/

/**
  Import modules
*/

var psnr = require("./lib/psnr");
var ssim = require("./lib/ssim");

/**
  Exports functions to global namespace
*/

module.exports = {
  psnr: psnr,
  ssim: ssim
};