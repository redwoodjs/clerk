/// <reference types="react" />
import { Clerk as ClerkClient } from '@clerk/types';
import { CurrentUser } from '@redwoodjs/auth';
export declare function createAuth(customProviderHooks?: {
    useCurrentUser?: () => Promise<Record<string, unknown>>;
    useHasRole?: (currentUser: CurrentUser | null) => (rolesToCheck: string | string[]) => boolean;
}): {
    AuthContext: import("react").Context<import("@redwoodjs/auth").AuthContextInterface<import("@clerk/types").UserResource | undefined, void, void | undefined, void, unknown, unknown, unknown, ClerkClient | null> | undefined>;
    AuthProvider: ({ children, skipFetchCurrentUser, }: import("@redwoodjs/auth/dist/AuthProvider/AuthProvider").AuthProviderProps) => JSX.Element;
    useAuth: () => import("@redwoodjs/auth").AuthContextInterface<import("@clerk/types").UserResource | undefined, void, void | undefined, void, unknown, unknown, unknown, ClerkClient | null>;
};
//# sourceMappingURL=clerk.d.ts.map