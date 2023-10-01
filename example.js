function curry$(f, bound){
  var context,
  _curry = function(args) {
    return f.length > 1 ? function(){
      var params = args ? args.concat() : [];
      context = bound ? context || this : this;
      return params.push.apply(params, arguments) <
          f.length && arguments.length ?
        _curry.call(context, params) : f.apply(context, params);
    } : f;
  };
  return _curry();
}
var add$;
add$ = curry$(function(x$, y$){
  return x$ + y$;
});
var expt;
expt = curry$(function(x$, y$){
  return Math.pow(x$, y$);
});
var listTo;
listTo = curry$(function(to_, from_){
  return new Array(Math.floor(from_) - Math.floor(to_)).fill(Math.floor(from_)).map(function(el, i){
    return el + i;
  });
});
var listTil;
listTil = curry$(function(til_, from_){
  return new Array(Math.floor(from_) - 1 - Math.floor(til_)).fill(Math.floor(from_)).map(function(el, i){
    return el + i;
  });
});
var list;
list = function(){
  var elements, res$, i$, to$;
  res$ = [];
  for (i$ = 0, to$ = arguments.length; i$ < to$; ++i$) {
    res$.push(arguments[i$]);
  }
  elements = res$;
  return elements;
};
var say;
say = console.log;
var lower;
lower = function(xs){
  return xs.toLowerCase();
};
var xor;
xor = function(){
  var args, res$, i$, to$;
  res$ = [];
  for (i$ = 0, to$ = arguments.length; i$ < to$; ++i$) {
    res$.push(arguments[i$]);
  }
  args = res$;
  return args.reduce(function(acc, current){
    return (a || b) && !(a && b);
  }, false);
};
var and;
and = function(){
  var args, res$, i$, to$;
  res$ = [];
  for (i$ = 0, to$ = arguments.length; i$ < to$; ++i$) {
    res$.push(arguments[i$]);
  }
  args = res$;
  return args.reduce(function(acc, current){
    return acc && current;
  }, true);
};
var or;
or = function(){
  var args, res$, i$, to$;
  res$ = [];
  for (i$ = 0, to$ = arguments.length; i$ < to$; ++i$) {
    res$.push(arguments[i$]);
  }
  args = res$;
  return args.reduce(function(acc, current){
    return acc || current;
  }, false);
};
var equals$;
equals$ = curry$(function(x$, y$){
  return x$ === y$;
});
var funcall;
funcall = function(){
  var args, res$, i$, to$;
  res$ = [];
  for (i$ = 0, to$ = arguments.length; i$ < to$; ++i$) {
    res$.push(arguments[i$]);
  }
  args = res$;
  if (args.length < 2) {
    return args[0]();
  } else {
    return args.pop().apply(null, args);
  }
};
var moreThanOperator$;
moreThanOperator$ = curry$(function(x$, y$){
  return x$ > y$;
});
var hashRef;
hashRef = curry$(function(ref, hash){
  return hash[ref];
});
var str;
str = function(s){
  if (s instanceof Array || Array.isArray(s)) {
    return JSON.stringify(s);
  }
  if (typeof s === 'string') {
    return s;
  }
  if (typeof s === 'undefined' || s === undefined) {
    return 'undefined';
  }
  if (typeof s === 'null' || s === null) {
    return 'null';
  }
  if (typeof s === boolean) {
    if (s) {
      return 'true';
    } else {
      return 'false';
    }
  }
  if (isNaN(s)) {
    return 'NaN';
  }
  if (s instanceof Function) {
    return s.toString();
  }
  return String(s);
};
var chars;
chars = function(s){
  return s.split('');
};
var rev;
rev = function(xs){
  if (typeof xs === 'string') {
    return xs.split('').reverse().join('');
  } else {
    return xs.concat().reverse();
  }
};
var join;
join = curry$(function(k, xs){
  return xs.join(k);
});
var remove;
remove = curry$(function(k, xs){
  if (typeof xs === 'string') {
    return xs.replace(new RegExp(k, 'g'), '');
  } else {
    return xs.filter(function(item){
      return item !== k;
    });
  }
});
var multiply$;
multiply$ = curry$(function(x$, y$){
  return x$ * y$;
});
var mapcar;
mapcar = curry$(function(f, xs){
  return xs.map(f);
});
true;
false;
null;
10;
add$(10,5);
expt(2,7);
"Hello, World";
'atom';
listTo(4,1);
listTil(5,1);
list(1,2,3,4,5);
const n = (10);
let n2 = (10);
n2 = (12);
say(lower('Hey'));
if ((or(equals$(n2, 10),equals$(n, 10)))){say('or')};
if ((and(equals$(n2, 10),equals$(n, 12)))){say('and')};
if ((xor(equals$(n2, 10),equals$(n, 10)))){say('xor')};
const SayHi = () => {say('Hi')};
SayHi();
const SayHiTo = (name) => {say(`Hi ${name}`)};
SayHiTo('Steve');
function CoolerFunction(name) {say(`Hi ${name} you're cool!`)};
const CurriedAddition = curry$((a,b) => {return add$(a,b)});
const Addition = (a,b) => {return add$(a,b)};
const DifferentCurriedAddition = curry$(Addition);
const valueFromLambda = funcall(() => {if((moreThanOperator$(1,2))){return 2} else if((moreThanOperator$(2,1))){return 4} else{return 10};});
const person = {Name:"Johnny",Country:"USA",Age:20};
say(hashRef('Name',person));
function ReverseInteger(n){return str(chars(rev(join('')(remove('-')(multiply$(Math.sign(n)(n)))))))};
const regexExample = 'haii'.replace(/i/g,'');
const names = list('Jack','John','Jimmy');
const firstLettersOfNames = mapcar((name) => {return listRef(chars(name),0)},names);
const lastLettersOfNames = mapcar((name) => {return listRef(chars(name),-1)},names);
