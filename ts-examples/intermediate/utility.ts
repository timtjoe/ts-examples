//* TypeScript ships with a bunch of utility types - generic types that transform other types.

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

//* Partial<T> - every field becomes optional
type UserUpdate = Partial<User>;
// {id?: number; name?: string...}

//* Required<T> - every field becomes readonly
//* Pick<T, K> - keep only listed keys:
type _UserPublic = Pick<User, "id" | "name" | "email">;
//* Omit<T, K> - remove listed keys:
type UserPublic = Omit<User, "password">;
//* Record<K, V> - object with given key/value types - maps object keys to values
type Status = "active" | "archived" | "pending";
type StatusCounts = Record<Status, number>;

type Role = "admin" | "user" | "guest";
const permission: Record<Role, number> = {
  admin: 5,
  user: 3,
  guest: 1,
};

interface UserInfo {
  name: string;
  age: number;
}

type UserRoles = "manager" | "developer";

const team: Record<UserRoles, UserInfo> = {
  manager: { name: "Alice", age: 40 },
  developer: { name: "Bob", age: 25 },
};

//* ReturnType<F> - the return type of a function:
function getUser() {
  return { id: 1, name: "Ada" };
}

type NewUser = ReturnType<typeof getUser>; // {id: number, name: string}

//* Parameters<F> - tuple of a function's parameter types
type NewTuple = Parameters<typeof getUser>
//* Awaited<T> - unwrap a promise.