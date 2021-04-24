function createLogger() {
    return {
        history: [],
        call: function(func, ...params) {
            debugger;
            if (typeof func !== "function") {
                throw Error(`First parameter: '${func}' is not a function`);
            }

            const result = func.call(this, ...params);
            
            this.history.push({
                "name": func.name,
                "in": params,
                "out": result
            });

            return result;
        },
        print: function() { return this.history; }
    }
}

const returnIdentity = n => n;
const sum = (a, b) => a + b;
const returnNothing = () => {};

const logger1 = createLogger();
console.log(logger1.call(returnIdentity, 1)); // 1
console.log(logger1.call(sum, 1, 2)); // 3
console.log(logger1.print()); // [ { name: 'returnIdentity', in: [ 1 ], out: 1 }, { name: 'sum', in: [ 1, 2 ], out: 3 } ]

const logger2 = createLogger();
console.log(logger2.call(sum, 3, 4)); // 7
console.log(logger2.call(returnIdentity, 9)); // 9
console.log(logger2.call(returnNothing)); // undefined
console.log(logger2.print()); // [ { name: 'sum', in: [ 3, 4 ], out: 7 }, { name: 'returnIdentity', in: [ 9 ], out: 9 }, { name: 'returnNothing', in: [], out: undefined } 