// Mapped types transform every property of an existing type.

// Basic syntax
type ReadonlyAll<T> = {
  readonly [K in keyof T]: T[K];
};

interface User {
  name: string;
  age: number;
  email: string;
}
type LockedUser = ReadonlyAll<User>;

// The built-in utility types

// Make all fields optional:
type UserUpdate = Partial<User>;

// Make all fields required <remove ?>
type FullUser = Required<UserUpdate>;

// Make all field readonly
type FrosenUser = Readonly<User>;

// Pick specific keys:
type UserContact = Pick<User, "name" | "email">;

// Omit specific keys:
type PublicUser = Omit<User, "user">;

// Build a record (uniform values keyed by some union):
type Permissions = Record<"read" | "write" | "admin", boolean>;

// Pick Partial, Omit Record, Readonly Required.
type Mutable<T> = {
  -readonly [K in keyof T]: T[K]; //remove readonly
};

type Required2<T> = {
  // remove optional: this is how Required<T> strips ? from every property
  [K in keyof T]-?: T[K];
};

// Key remapping (TypeScript 4.1+)
// Transform the keys themselves:

type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

type UserGetters = Getters<User>;

// Filter properties by mapping unwanted keys to never:
// This is the canonical pattern for filtering properties by their value types
type StringProps<T> = {
  [K in keyof T as T[K] extends string ? K : never]: T[K];
};

type OnlyStrings = StringProps<User>;

// Building your own utilities
type RequiredAtLeaseOne<T> = {
  [K in keyof T]-?: Required<Pick<T, K>> & Partial<Omit<T, K>>;
}[keyof T];


type Login = RequiredAtLeaseOne<{email?: string; phone?: string; username?:string}>;