// Type definitions for [~THE LIBRARY NAME~] [~OPTIONAL VERSION NUMBER~]
// Project: [~THE PROJECT NAME~]
// Definitions by: [~YOUR NAME~] <[~A URL FOR YOU~]>

/*~ This is the module template file. You should rename it to index.d.ts
 *~ and place it in a folder with the same name as the module.
 *~ For example, if you were writing a file for "super-greeter", this
 *~ file should be 'super-greeter/index.d.ts'
 */

/*~ If this module is a UMD module that exposes a global variable 'myLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */
export as namespace SimpleSQL;

/*~ If this module has methods, declare them as functions like so.
 */
export function newDatabase(token?: string): Promise<string>;
export function command(database: string, command: string, token?: string): Promise<Object>;
export function listDatabases(token: string): Promise<[string]>;
export function newToken(token: string): Promise<string>;
export function listTokens(token: string): Promise<[string]>;

/*~ You can declare types that are available via importing the module */

/*~ You can declare properties of the module using const, let, or var */
export const baseUrl: 'https://simplesql.redbeardlab.com';

/*~ If there are types, properties, or methods inside dotted names
 *~ of the module, declare them inside a 'namespace'.
 */
