// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [Expect<Equal<DeepReadonly<X>, Expected>>];

type X = {
  a: () => 22;
  b: string;
  c: {
    d: boolean;
    e: {
      g: {
        h: {
          i: true;
          j: "string";
        };
        k: "hello";
      };
      l: [
        "hi",
        {
          m: ["hey"];
        }
      ];
    };
  };
};

type Expected = {
  readonly a: () => 22;
  readonly b: string;
  readonly c: {
    readonly d: boolean;
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true;
          readonly j: "string";
        };
        readonly k: "hello";
      };
      readonly l: readonly [
        "hi",
        {
          readonly m: readonly ["hey"];
        }
      ];
    };
  };
};

// ============= Your Code Here =============
type Check = DeepReadonly<X>;

type DeepReadonly<T extends object> = {
  readonly [key in keyof T]: T[key] extends Function
    ? T[key]
    : T[key] extends object
    ? DeepReadonly<T[key]>
    : T[key];
};
