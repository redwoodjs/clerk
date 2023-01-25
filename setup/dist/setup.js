"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js/object/define-property");
var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault").default;
_Object$defineProperty(exports, "__esModule", {
  value: true
});
exports.builder = builder;
exports.description = exports.command = void 0;
exports.handler = handler;
var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/promise"));
var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/interopRequireWildcard"));
var _cliHelpers = require("@redwoodjs/cli-helpers");
const command = 'clerk';
exports.command = command;
const description = 'Generate an auth configuration for Clerk';
exports.description = description;
function builder(yargs) {
  return (0, _cliHelpers.standardAuthBuilder)(yargs);
}
async function handler(options) {
  const {
    handler
  } = await _promise.default.resolve().then(() => (0, _interopRequireWildcard2.default)(require('./setupHandler')));
  return handler(options);
}