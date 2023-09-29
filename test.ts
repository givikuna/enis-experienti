function curry$(targetFunction: Function, ...existingArguments: any[]) {
    return function(...args: any[]) {
        const totalArgs: any[] = [...existingArguments, ...args];
        if (totalArgs.length >= targetFunction.length) {
            return targetFunction(...totalArgs);
        }
        return curry$(targetFunction, ...totalArgs)
    }
}

function add(a: number, b: number): number {
    return a + b;
}

const curriedAdd = curry$(add);

console.log(curriedAdd(1)(2));
console.log(curriedAdd(1,2));

const curriedTest = curry$(curriedAdd)();

console.log(curriedTest(1, 2))
console.log(curriedTest(1)(2))
