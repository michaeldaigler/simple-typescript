type SomeType = string;

type MyConditionalType = SomeType extends string ? string : null;

function someFunction<T>(value: T) {
  type A = T extends boolean
    ? "TYPE A"
    : T extends string
    ? "TYPE B"
    : T extends number
    ? "TYPE C"
    : "TYPE D";
  const someOtherFunction = (
    someArg: T extends boolean ? "TYPE A" : "TYPE B"
  ) => {
    const a: "TYPE A" | "TYPE B" = someArg;
  };
  return someOtherFunction;
}

const result = someFunction(true);


type StringOrNot<T> = T extends string ? string : never;

type AUnion = string | boolean | never;


// type Exclude<T, U> = T extends U ? never: T;
type ResultType = Exclude<'a' | 'b' | 'c', 'a' | 'b'>

/**
 'a' extends 'a' | 'b' ? never : 'a' => never
 'b' extends 'a' | 'b' ? never : 'b' => never
 'c' extends 'a' | 'b' ? never : 'c' => 'c'

 */

// type MyType<T> = (() => T) extends () => string | number ? T : never;
// type MyResultType = MyType<string | number>

type MyType<T> = [T] extends [string | number] ? T : never;
type MyResultType = MyType<string | number>

type InferSomething<T> = T extends infer U ? U : any;
type Inferred = InferSomething<'I am a string'>

type InferSomething2<T> = T extends { a: infer A, b: infer B } ? A & B: any;
type Inferred2 = InferSomething2<{ a: { someAProp: 1 }, b: { someBProp: 'B' } }>;

type MyFuncReturnValue = ReturnType<() => true>

