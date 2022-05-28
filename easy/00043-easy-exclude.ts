// ============= Test Cases =============
import type { Equal, Expect } from "../test-utils";

type cases = [
  Expect<Equal<MyExclude<"a" | "b" | "c", "a">, Exclude<"a" | "b" | "c", "a">>>,
  Expect<
    Equal<
      MyExclude<"a" | "b" | "c", "a" | "b">,
      Exclude<"a" | "b" | "c", "a" | "b">
    >
  >,
  Expect<
    Equal<
      MyExclude<string | number | (() => void), Function>,
      Exclude<string | number | (() => void), Function>
    >
  >
];

// ============= Your Code Here =============

type MyExclude<All, Exclusions> = All extends Exclusions ? never : All;

type Check = MyExclude<"a" | "b" | "c", "a">;
