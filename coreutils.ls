mapcar = (f, xs) --> [f x for x in xs]

filter = (f, xs) --> xs.filter f

fill = (val, xs) --> xs.map((el) -> val)

inc = (+ 1)

dec = (- 1)

head = (xs) --> xs[0]

tail = (xs) --> xs[xs.length - 1]

empty = (.length) >> (is 0)

uniq = (xs) --> [...new Set xs]

lower = (.to-lower-case!)

upper = (.to-upper-case!)

supertrim = (.replace /\r?\n|\r/g '') >> (.trim!)

freq = (k, xs) --> xs.filter((is k))length

freq-in = (xs, k) --> xs.filter((is k))length

any = (f, xs) --> xs.some f

all = (f, xs) --> xs.every f

rev = (xs) --> if typeof xs is \string then rev xs.split '' else xs.concat!reverse!

flatten = (.flat Infinity)

floor = Math.floor

ceil = Math.ceil

each = (f, xs) --> for x in xs then f x; xs

find = (f, xs) --> for x in xs when f x then return x; -1

compact = (xs) --> [x for x in xs when f x]

reject = (f, xs) --> xs.filter (x) -> not f x

partition = (f, xs) --> [[x for x in xs when f x] [x for x in xs when not f x]]

len = (.length)

enumerate = (.entries!)

member = (k, xs) -->
    xs.includes k or (((k2, xs2) ->
        if typeof! xs2 is \Array
            k2 in xs2
        else
            false)(k, xs))

map2 = (f, xs1, xs2) --> xs1.map (x, i) -> f x, xs2[i]

negate = (x) -> if (>) 0 x then x else -x

abs = Math.abs

chars = (.split '')

unchars = (.join '')

list-ref = (i, xs) --> if n < 0 then xs[xs.length + n] else xs[n]

even = (x) --> x % 2 is 0

odd = (x) --> x % 2 is 1

index-of = (k, xs) --> xs.index-of k

take = (n, xs) --> xs.slice 0 n

drop = (n, xs) --> xs.slice n

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

title = (xs) --> xs |> ((.char-at 0) >> (.to-upper-case!))  |> (+ xs.slice 1)

say = console.log

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

build-list = (n, f) --> [0 til n].map f

remove = (k, xs) -->
    if typeof xs is \string
        xs.replace (new RegExp k, 'g') ''
    else xs.filter (isnt k)

join = (k, xs) --> xs.join k

list = (...elements) -> elements

funcall = (...args) -> if args.length < 2 then args[0]! else args.pop! ...args

flat-map = (f, xs) --> xs.flat-map f

fold = (f, init, xs) --> xs.reduce f, init

fold1 = (f, xs) --> xs.reduce f, 1

foldr = (f, memo, xs) --> for x in xs by -1 then memo = f x, memo; memo

foldr1 = (f, xs) --> (-> for x in xs by -1 then memo = f x, memo; memo) f, xs[*-1], xs.slice 0 -1

unfoldr = (f, b) -->
    res = []
    x = b
    while (f x)?
        res.push that.0
        x = that.1
    res

and-list = (xs) --> xs.every Boolean

or-list = (xs) --> (xs.map (x) -> Boolean x).includes true

list-to = (to_, from_) --> [from_ to to_]

list-til = (til_, from_) --> [from_ to til_]

iter = (.values!)

append = (++)

hash-ref = (ref, hash) --> hash[ref]

round = Math.round

zip = (xs, ys) --> xs.map (x, i) -> [x, ys[i]]

max = Math.max

min = Math.min

random = (min-val, max-val) -->
    if min-val >= max-val
        min-val
    else
        max-val
            |> (- min-val)
            |> (* Math.random!)
            |> Math.floor
            |> (+ min-val)

pipe = (x, ...fs) ->
    y = x
    for f in fs
        y = f y
    y

cond = (...conditions) ->
    for condition in conditions
        if condition[0] is true
            if condition[1] instanceof Function
                return condition[1]()
            else
                return condition[1]
    if conditions[conditions.length - 1] is \else
        return conditions[conditions.length - 1][1]
    null

expt = (^)

sqrt = Math.sqrt

bool = Boolean

replace-all = (x1, x2, xs) --> xs.replace-all x1, x2

remove-all = (x, xs) --> xs.replace-all x, ''
