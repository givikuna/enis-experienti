true;
false;
null;
10;
add$(10, 5);
expt(2, 7);
"Hello, World";
'atom';
listTo(4, 1);
listTil(5, 1);
list(1, 2, 3, 4, 5);
const n = 10;
let n2 = 10;
n2 = 12;
say(lower('HEY'))
if (or(equals$(n2, 10), equals$(n, 10))) { say('or') };
if (and(equals$(n2, 10), equals$(n, 12))) { say ('and') };
if (xor(equals$(n2, 10), equals$(n, 12))) { say('xor') };
const SayHi = () => { say('Hi') };
funcall(SayHi);
const SayHiTo = (name) => { say(`Hi ${name}`) };
SayHiTo('Steve');
funcall(SayHiTo, 'Steve');
function CoolerFunction(name) { say(`Hi ${name} you\'re cool!`) };
const CurriedAddition = curry$((a, b) => { return add$(a, b) });
const Addition = (a, b) => { return add$(a, b) };
const DifferentCurriedAddition = curry$(Addition);
const valueFromLambda = funcall(() => { return add$(10, 12) });
const anotherValueFromLambda = funcall(() => {
  return cond([moreThanOperator$(1, 2), 2], [moreThanOperator$(2, 1), 4], ['else', 10]);
});
const person = {
  Name: "Johnny",
  Country: "USA",
  Age: 20,
};
say(hashRef('Name', person));
function ReverseInteger(n) {
  return pipe(n, str, chars, rev, join(''), remove('-'), multiply$(Math.sign(n)));
}
const regexExample = 'haii'.replace(/i/g, '');
const names = list('Jack', 'John', 'Jimmy');
const firstLettersOfNames = mapcar(funcall((name) => { return listRef(chars(names), 0); }, names));
const lastLettersOfNames = mapcar(funcall((name) => { return listRef(chars(names), -1); }, names));
