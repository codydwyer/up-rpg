const gulp = require("gulp");
const gutil = require("gulp-util");
const clean = require("gulp-clean");
const babel = require("gulp-babel");

function defaultTask(cb) {
  // place code for your default task here
  cb();
}

exports.default = defaultTask
