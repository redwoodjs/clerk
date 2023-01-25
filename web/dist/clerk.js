"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js/object/define-property");
var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault").default;
_Object$defineProperty(exports, "__esModule", {
  value: true
});
exports.createAuth = createAuth;
var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/promise"));
var _auth = require("@redwoodjs/auth");
function createAuth(customProviderHooks) {
  const authImplementation = createAuthImplementation();
  return (0, _auth.createAuthentication)(authImplementation, customProviderHooks);
}
function createAuthImplementation() {
  return {
    type: 'clerk',
    client: window.Clerk,
    login: async options => {
      const clerk = window.Clerk;
      clerk?.openSignIn(options || {});
    },
    logout: async (callbackOrOptions, options) => {
      const clerk = window.Clerk;
      return clerk?.signOut(callbackOrOptions, options);
    },
    signup: async options => {
      const clerk = window.Clerk;
      clerk?.openSignUp(options || {});
    },
    restoreAuthState: async () => {
      const clerk = window.Clerk;
      if (!clerk) {
        // If clerk is null, we can't restore state or listen for it to
        // happen. This behavior is somewhat undefined, which is why we
        // instruct the user to wrap the auth provider in <ClerkLoaded> to
        // prevent it. For now we'll just return.

        if (process.env.NODE_ENV === 'development') {
          console.log('Please wrap your auth provider with `<ClerkLoaded>`');
        }
        return;
      }

      // NOTE: Clerk's API docs says session will be undefined if loading (null
      // if loaded and confirmed unset).
      if (!clerk || clerk.session !== undefined) {
        return new _promise.default(resolve => {
          clerk.addListener(msg => {
            if (msg.session !== undefined && msg.client) {
              resolve();
            }
          });
        });
      } else {
        // In this case, we assume everything has been restored already.
        return;
      }
    },
    getToken: async options => {
      const clerk = window.Clerk;
      let token;
      try {
        token = await clerk?.session?.getToken(options);
      } catch {
        token = null;
      }
      return token || null;
    },
    getUserMetadata: async () => {
      const clerk = window.Clerk;
      return clerk?.user;
    }
  };
}