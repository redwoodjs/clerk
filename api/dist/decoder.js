"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js/object/define-property");
var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault").default;
_Object$defineProperty(exports, "__esModule", {
  value: true
});
exports.authDecoder = void 0;
var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/promise"));
var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/interopRequireWildcard"));
const authDecoder = async (token, type) => {
  if (type !== 'clerk') {
    return null;
  }
  if (!process.env.CLERK_JWT_KEY) {
    console.error('CLERK_JWT_KEY env var is not set.');
    throw new Error('CLERK_JWT_KEY env var is not set.');
  }
  const {
    users,
    default: clerk
  } = await _promise.default.resolve().then(() => (0, _interopRequireWildcard2.default)(require('@clerk/clerk-sdk-node')));
  try {
    const jwtPayload = await clerk.base.verifySessionToken(token);
    if (!jwtPayload.sub) {
      return _promise.default.reject(new Error('Session invalid'));
    }
    const user = await users.getUser(jwtPayload.sub);
    return {
      ...user,
      roles: user.publicMetadata['roles'] ?? []
    };
  } catch (error) {
    console.error(error);
    return _promise.default.reject(error);
  }
};
exports.authDecoder = authDecoder;