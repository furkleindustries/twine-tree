export type TTwineParserErrorConstructor = new (message: any, expected: any, found: any, location: any) => Error;

export default TTwineParserErrorConstructor;