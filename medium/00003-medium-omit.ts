// ============= Test Cases =============
import type { Equal, Expect } from "../test-utils";

type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, "description">>>,
  Expect<Equal<Expected2, MyOmit<Todo, "description" | "completed">>>
];

// @ts-expect-error
type error = MyOmit<Todo, "description" | "invalid">;

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
  completed: boolean;
}

interface Expected2 {
  title: string;
}

// ============= Your Code Here =============
type ExcludeKeys<AllKeys, Exclusions> = AllKeys extends Exclusions
  ? never
  : AllKeys;

type PickProps<ObjectType, Key extends keyof ObjectType> = {
  [key in Key]: ObjectType[key];
};

type MyOmit<T, K extends keyof T> = PickProps<T, ExcludeKeys<keyof T, K>>;
