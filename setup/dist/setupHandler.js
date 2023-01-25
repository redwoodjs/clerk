"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js/object/define-property");
var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault").default;
_Object$defineProperty(exports, "__esModule", {
  value: true
});
exports.handler = void 0;
var _fs = _interopRequireDefault(require("fs"));
var _path = _interopRequireDefault(require("path"));
var _cliHelpers = require("@redwoodjs/cli-helpers");
const {
  version
} = JSON.parse(_fs.default.readFileSync(_path.default.resolve(__dirname, '../package.json'), 'utf-8'));
const handler = async ({
  force: forceArg
}) => {
  (0, _cliHelpers.standardAuthHandler)({
    basedir: __dirname,
    forceArg,
    authDecoderImport: `import { authDecoder } from '@redwoodjs/auth-clerk-api'`,
    provider: 'clerk',
    webPackages: ['@clerk/clerk-react', `@redwoodjs/auth-clerk-web@${version}`],
    apiPackages: [`@redwoodjs/auth-clerk-api@${version}`],
    notes: ['You will need to add three environment variables with your Clerk URL, API key and JWT key.', 'Check out web/src/auth.{js,tsx} for the variables you need to add.', 'See also: https://redwoodjs.com/docs/authentication#clerk']
  });
};
exports.handler = handler;