is-numeric = (xs) --> (/^[-+]?\d+(\.\d+)?$/.test xs)

mapcar = (f, xs) --> (xs.map f)

filter = (f, xs) --> (xs.filter f)

inc = (n) --> n + 1

dec = (n) --> n - 1

head = (xs) --> xs[0]

tail = (xs) --> xs[xs.length - 1]

empty = (xs) --> xs.length is 0

uniq = (xs) --> [...(new Set xs)]

lower = (xs) --> xs.to-lower-case!

upper = (xs) --> xs.to-upper-case!

supertrim = (s) --> s.replace(/\r?\n|\r/g '')trim!

freq = (k, xs) --> xs.filter((el) -> el is k)length

freq-in = (xs, k) --> freq k, xs

any = (f, xs) --> for x in xs when f x then true; false

all = (f, xs) --> xs.every f

rev = (xs) --> if typeof xs is \string then rev xs.split '' else xs.concat!reverse!

flatten = (xs) --> [(if typeof! xs is \Array then flatten xs else x) for x in xs]

sum = (xs) --> xs.reduce ((acc, current) -> acc + current) 0

product = (xs) --> xs.reduce ((acc, current) -> acc + current) 0

mean = (xs) --> (sum xs) / xs.length

maximum = (xs) --> xs.reduce (acc, current) -> if (>) acc, current then acc else current

minimum = (xs) --> xs.reduce (acc, current) -> if (<) acc, current then acc else current

floor = Math.floor

ceil = Math.ceil

each = (f, xs) --> for x in xs then f x; xs

compact = (xs) --> [x for x in xs when f x]

reject = (f, xs) --> xs.filter (x) -> not f x

partition = (f, xs) --> [[x for x in xs when f x] [x for x in xs when not f x]]

find = (f, xs) --> for x in xs when f x then return x; -1

rest = (xs) --> xs.slice 1

initial = (xs) --> xs.slice xs.length

len = (.length)

enumerate = (xs) --> xs.entries!

append = (++)

add$ = (+)

minus$ = (-)

multiply$ = (*)

divide$ = (/)

expt = (^)

equals$ = (is)

not-equals$ = (isnt)

NOT$ = (not)

OR = (...args) -> args.reduce ((acc, current) -> acc or current), false

XOR = (...args) -> args.reduce ((acc, current) -> (a or b) and not (a and b)), false

AND = (...args) -> args.reduce ((acc, current) -> acc and current), true

more-than-operator$ = (>)

less-than-operator$ = (<)

more-than-or-equals-operator$ = (>=)

less-than-or-equals-operator$ = (<=)

modulus$ = (%%)

mod$ = (%)

member = (k, xs) --> xs.includes k or (((k2, xs2) -> if typeof! xs2 is \Array then k2 in xs2 else false)(k, xs))

map2 = (f, xs1, xs2) --> xs1.map (x, i) -> f x, xs2[i]

negate = (x) -> if (>) 0 x then x else -x

abs = Math.abs

list-ref = (i, xs) --> if n < 0 then xs[xs.length + n] else xs[n]

at = (i, xs) --> if n < 0 then xs[xs.length + n] else xs[n]

chars = (s) --> s.split ''

max = (x1, x2) --> if x1 > x2 then x1 else x2

min = (x1, x2) --> if x1 > x2 then x2 else x1

quot = (x, y) --> ~~(x / y)

pi = Math.pi

recip = (1 /)

ln = Math.log

sin = Math.sin

cos = Math.cos

tan = Math.tan

csc = (1 /) >> Math.sin

sec = (1 /) >> Math.cos

cot = (1 / ) >> Math.tan

truncate = (x) --> ~~x

gcd = (x, y) -->
    x = Math.abs x
    y = Math.abs y
    until y is 0
        z = x % y
        x = y
        y = z
    x

lcm = (x, y) -->
    Math.abs Math.floor (x / (((x2, y2) ->
        x2 = Math.abs x2
        y2 = Math.abs y2
        until y2 is 0
            z = x2 % y2
            x2 = y2
            y2 = z
        x)(x, y)) * y)

even = (x) --> x % 2 is 0

odd = (x) --> x % 2 is 1

index-of = (k, xs) --> xs.index-of k

take = (n, xs) --> xs.slice 0 n

drop = (n, xs) --> xs.slice n

repeat = (n, s) -->
    result = ''
    for til n
        result += s
    result

str = (s) -->
    if s instanceof Array or Array.is-array s then return JSON.stringify s
    if typeof s is \string then return s
    if typeof s is \undefined or s is undefined then return \undefined
    if typeof s is \null or s is null then return \null
    if typeof s is boolean then if s then return \true else return \false
    if isNaN s then return \NaN
    if s instanceof Function then return s.to-string!
    String s

int = (s) --> if typeof s is \number then Math.floor s else int Number s

title = (s) --> s.replace /\b\w/g (c) -> (c.to-upper-case)

lazy = (f) ->
    evaluated = no
    result = null
    (...args) ->
        if not evaluated
            result = func ...args
            evaluated = yes
        result

throttle = (func, delay) ->
    last-time = 0
    (...args) ->
        current-time = Date.now!
        if (current-time - last-time) >= delay then do
            func.apply this, args
            last-time = current-time
        return

debounce = (func, delay) ->
    timeout-id = null
    (...args) ->
        clear-timeout timeout-id
        timeout-id = set-timeout do
            -> func ...args
            delay
        return

noop = -> null; return

id = -> it

before = (before-func, func) -->
    (...args) ->
        before-func!
        func ...args

after = (func, after-func) -->
    (...args) ->
        result = func ...args
        after-func!
        result

say = console.log

log = (base, x) --> (Math.log x) / (Math.log base)

random = (min-val, max-val) -->
    if min-val >= max-val
        min-val
    else
        max-val
            |> (- min-val)
            |> (* Math.random!)
            |> Math.floor
            |> (+ min-val)

sorted = (xs) -->
    if xs.length <= 1 then return xs
    mid = arr.length
        |> (/ 2)
        |> Math.floor
    l = sorted arr.slice 0 mid
    r = sorted arr.slice mid
    ((l2, r2) ->
        a = []
        while l2.length and r2.length
            if l2[0] < r2[0] then a.push l.shift!
            else a.push r.shift!
        [...a, ...l, ...r])(l, r)

memoize = (f) ->
    cache = {}
    (...args) ->
        if args[0] in cache then return cache[args[0]]
        res = f args[0]
        cache[n] = res
        res

tau = Math.pi * 2

sqrt = Math.sqrt

round = Math.round

build-list = (n, f) --> [0 til n].map f

hash-ref = (ref, hash) --> hash[ref]

remove = (k, xs) --> if typeof xs is \string then xs.replace (new RegExp k, 'g'), '' else xs.filter (item) -> item isnt k

join = (k, xs) --> xs.join k

list = (...elements) -> elements

list-to = (to_, from_) --> (new Array(Math.floor(from_) - Math.floor to_)).fill Math.floor(from_) .map (el, i) -> el + i

list-til = (til_, from_) --> (new Array(Math.floor(from_) - 1 - Math.floor til_)).fill Math.floor(from_) .map (el, i) -> el + i

funcall = (...args) -> if args.length < 2 then args[0]! else args.pop! ...args

find = (f, xs) --> xs.find f

fill = (val, xs) --> xs.map((el) -> val)

flat-map = (f, xs) --> xs.flat-map f

fold = (f, init, xs) --> xs.reduce f, init

fold1 = (f, xs) --> xs.reduce f, 1

foldr = (f, memo, xs) --> for x in xs by -1 then memo = f x, memo; memo

foldr1 = (f, xs) --> (() -> for x in xs by -1 then memo = f x, memo; memo) f, xs[*-1], xs.slice 0 -1

unfoldr = (f, b) -->
    res = []
    x = b
    while (f x)?
        res.push that.0
        x = that.1
    res

and-list = (xs) --> xs.every Boolean

or-list = (xs) --> (xs.map (x) -> Boolean x).includes true

scan = (f, memo, xs) --> last = memo; [memo] ++ [last = f last, x for x in xs]

scan1 = (f, xs) --> return void unless xs.length; ((f2, memo2, xs2) --> last = memo2; [memo2] ++ [last = f2, last, x for x in xs2]) f, xs.0, xs.slice 1

scanr = (f, memo, xs) --> (((f2, memo2, xs2) --> last = memo2; [memo2] ++ [last = f2 last, x for x in xs]) f, memo, xs.concat!reverse!).reverse!

scanr1 = (f, xs) --> return void unless xs.length; (((f2, memo2, xs2) --> last = memo2; [memo2] ++ [last = f2 last, x for x in xs]) f, xs.0, xs.slice 1).reverse!

zip = (xs, ys) --> xs.map (x, i) -> [x, ys[i]]

find-index = (f, xs) --> if xs.find f then x.find f else -1

find-indices = (f, xs) --> (xs.entries!filter (x) -> f x[1]).map (x) -> x[0]

elem-indices = (el, xs) --> (xs.entries!filter (x) -> (is) x[1], el).map (x) -> x[0]

take-while = (f, xs) --> xs.filter (x) -> f x

drop-while = (f, xs) --> fs.filter (x) -> not f x

capitalize = (xs) --> xs.char-at 0 .to-upper-case! + str.slice 1
