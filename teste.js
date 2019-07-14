var solver = require("./node_modules/javascript-lp-solver/src/solver");

// var model = [
//     "min: 2300 D1 1400 D2 ",
//     "80 D1 215 D2 = 1000",
//     "100 D1 108 D2 = 1500",
//     "102 D1 68 D2 = 1200",
//     "int D1",
//     "int D2"
// ];

// model = solver.ReformatLP(model);
// // solver.Solve(model);
// console.log(solver.Solve(model));

var model = {
    optimize: "cost",
    opType: "min",
    constraints: {
        1: { min: 1000 },
        2: { min: 1500 },
        3: { min: 1200 }
    },
    variables: {
        d1: { 1: 80, 2: 100, 3: 102, cost: 2300 },
        d2: { 1: 215, 2: 108, 3: 68, cost: 1400 }
    },
    ints: { d1: 1, d2: 1 }
};

console.log(solver.Solve(model));
