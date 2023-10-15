import type { LiteralUnion, SignInOptions, SignInAuthorizationParams, SignOutParams } from "next-auth/react";
import type { BuiltInProviderType, RedirectableProviderType } from "@auth/core/providers";
/**
 * Client-side method to initiate a signin flow
 * or send the user to the signin page listing all possible providers.
 * Automatically adds the CSRF token to the request.
 *
 * [Documentation](https://authjs.dev/reference/sveltekit/client#signin)
 */
export declare function signIn<P extends RedirectableProviderType | undefined = undefined>(providerId?: LiteralUnion<P extends RedirectableProviderType ? P | BuiltInProviderType : BuiltInProviderType>, options?: SignInOptions, authorizationParams?: SignInAuthorizationParams): Promise<Response | undefined>;
/**
 * Signs the user out, by removing the session cookie.
 * Automatically adds the CSRF token to the request.
 *
 * [Documentation](https://authjs.dev/reference/sveltekit/client#signout)
 */
export declare function signOut(options?: SignOutParams): Promise<void>;
