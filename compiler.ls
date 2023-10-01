require! {
    "./lib": {memoize,freq}
}

LiveScript = require \LiveScript

main-macros = [
    {
        name: \mapcar
        code: "mapcar = (f, xs) --> (xs.map f)"
    }
    {
        name: \filter
        code: "filter = (f, xs) --> (xs.filter f)"
    }
    {
        name: \len
        code: "len = (.length)"
    }
    {
        name: \append
        code: "append = (++)"
    }
    {
        name: '+'
        code: "add$ = (+)"
    }
    {
        name: '-'
        code: "minus$ = (-)"
    }
    {
        name: '*'
        code: "multiply$ = (*)"
    }
    {
        name: '/'
        code: "divide$ = (/)"
    }
    {
        name: \expt
        code: "expt = (^)"
    }
    {
        name: '!='
        code: "not-equals$ = (isnt)"
    }
    {
        name: '='
        code: 'NOT$ = (not)'
    }
    {
        name: \or
        code: "OR = (...args) -> args.reduce ((acc, current) -> acc or current), false"
    }
    {
        name: \xor
        code: "XOR = (...args) -> args.reduce ((acc, current) -> (a or b) and not (a and b)), false"
    }
    {
        name: \and
        code: "AND = (...args) -> args.reduce ((acc, current) -> acc and current), true"
    }
    {
        name: '>'
        code: "more-than-operator$ = (>)"
    }
    {
        name: '<'
        code: "less-than-operator$ = (<)"
    }
    {
        name: '>='
        code: "more-than-or-equals-operator$ = (>=)"
    }
    {
        name: '<='
        code: "less-than-or-equals-operator$ = (<=)"
    }
    {
        name: '%%'
        code: "modulus$ = (%%)"
    }
    {
        name: '%%'
        code: "mod$ = (%)"
    }
    {
        name: \member?
        code: "member = (k, xs) --> xs.includes k or (((k2, xs2) -> if typeof! xs2 is \\Array then k2 in xs2 else false)(k, xs))"
    }
    {
        name: \list-ref
        code: "list-ref = (i, xs) --> if n < 0 then xs[xs.length + n] else xs[n]"
    }
    {
        name: \index-of
        code: "index-of = (k, xs) --> xs.index-of k"
    }
    {
        name: \list
        code: "list = (...elements) -> elements"
    }
    {
        name: \to
        code: "list-to = (from_, to_) --> (new Array(Math.floor(from_) - Math.floor to_)).fill Math.floor(from_) .map (el, i) -> el + i"
    }
    {
        name: \til
        code: "list-til = (from_, to_) --> (new Array(Math.floor(from_) - 1 - Math.floor to_)).fill Math.floor(from_) .map (el, i) -> el + i"
    }
    {
        name: \funcall
        code: "funcall = (...args) -> if args.length < 2 then args[0]! else args.pop! ...args"
    }
]

importable-functions = [
    {
        name: \is-numeric?
        code: "is-numeric = (xs) --> (/^[-+]?\\d+(\\.\\d+)?$/.test xs)"
    }
    {
        name: \inc
        code: "inc = (n) --> n + 1"
    }
    {
        name: \dec
        code: "dec = (n) --> n - 1"
    }
    {
        name: \head
        code: "head = (xs) --> xs[0]"
    }
    {
        name: \tail
        code: "tail = (xs) --> xs[xs.length - 1]"
    }
    {
        name: \empty
        code: "empty = (xs) --> xs.length is 0"
    }
    {
        name: \uniq
        code: "uniq = (xs) --> [...(new Set xs)]"
    }
    {
        name: \lower
        code: "lower = (xs) --> xs.to-lower-case!"
    }
    {
        name: \upper
        code: "upper = (xs) --> xs.to-upper-case!"
    }
    {
        name: \supertrim
        code: "supertrim = (s) --> s.replace(/\\r?\\n|\\r/g '')trim!"
    }
    {
        name: \freq
        code: "freq = (k, xs) --> xs.filter((el) -> el is k)length"
    }
    {
        name: \freq-in
        code: "freq-in = (xs, k) --> freq k, xs"
    }
    {
        name: \any?
        code: "any = (f, xs) --> for x in xs when f x then true; false"
    }
    {
        name: \all?
        code: "all = (f, xs) --> for x in xs when not f x then false; true"
    }
    {
        name: \rev
        code: "rev = (xs) --> if typeof xs is \\string then xs.split('')reverse!join '' else xs.concat!reverse!"
    }
    {
        name: \flatten
        code: "flatten = (xs) --> [(if typeof! xs is \\Array then flatten xs else x) for x in xs]"
    }
    {
        name: \sum
        code: "sum = (xs) --> xs.reduce ((acc, current) -> acc + current) 0"
    }
    {
        name: \product
        code: "product = (xs) --> xs.reduce ((acc, current) -> acc + current) 0"
    }
    {
        name: \mean
        code: "mean = (xs) --> (sum xs) / xs.length"
    }
    {
        name: \maximum
        code: "maximum = (xs) --> xs.reduce (acc, current) -> if (>) acc, current then acc else current"
    }
    {
        name: \minimum
        code: "minimum = (xs) --> xs.reduce (acc, current) -> if (<) acc, current then acc else current"
    }
    {
        name: \floor
        code: "floor = Math.floor"
    }
    {
        name: \ceil
        code: "ceil = Math.ceil"
    }
    {
        name: \each
        code: "each = (f, xs) --> for x in xs then f x; xs"
    }
    {
        name: \compact
        code: "compact = (xs) --> [x for x in xs when f x]"
    }
    {
        name: \reject
        code: "reject = (f, xs) --> xs.filter (x) -> not f x"
    }
    {
        name: \partition
        code: "partition = (f, xs) --> [[x for x in xs when f x] [x for x in xs when not f x]]"
    }
    {
        name: \find
        code: "find = (f, xs) --> for x in xs when f x then return x; -1"
    }
    {
        name: \rest
        code: "rest = (xs) --> xs.slice 1"
    }
    {
        name: \initial
        code: "initial = (xs) --> xs.slice xs.length"
    }
    {
        name: \enumerate
        code: "enumerate = (xs) --> xs.map (item, i) -> [i, item]"
    }
    {
        name: \chars
        code: "chars = (s) --> s.split ''"
    }
    {
        name: \max
        code: "max = (x1, x2) --> if x1 > x2 then x1 else x2"
    }
    {
        name: \map2
        code: "map2 = (f, xs1, xs2) --> xs1.map (x, i) -> f x, xs2[i]"
    }
    {
        name: \negate
        code: "negate = (x) -> if (>) 0 x then x else -x"
    }
    {
        name: \abs
        code: "abs = Math.abs"
    }
    {
        name: \min
        code: "min = (x1, x2) --> if x1 > x2 then x2 else x1"
    }
    {
        name: \quot
        code: "quot = (x, y) --> ~~(x / y)"
    }
    {
        name: \ln
        code: "ln = Math.log"
    }
    {
        name: \sin
        code: "sin = Math.sin"
    }
    {
        name: \cos
        code: "cos = Math.cos"
    }
    {
        name: \tan
        code: "tan = Math.tan"
    }
    {
        name: \csc
        code: "csc = (1 /) >> Math.sin"
    }
    {
        name: \sec
        code: "sec = (1 /) >> Math.cos"
    }
    {
        name: \cot
        code: "cot = (1 / ) >> Math.tan"
    }
    {
        name: \truncate
        code: "truncate = (x) --> ~~x"
    }
    {
        name: \gcd
        code: "
            gcd = (x, y) -->
            x = Math.abs x
            y = Math.abs y
            until y is 0
                z = x % y
                x = y
                y = z
            x
        "
    }
    {
        name: \lcm
        code: "
            lcm = (x, y) -->
                Math.abs Math.floor (x / (((x2, y2) ->
                    x2 = Math.abs x2
                    y2 = Math.abs y2
                    until y2 is 0
                        z = x2 % y2
                        x2 = y2
                        y2 = z
                    x)(x, y)) * y)
        "
    }
    {
        name: \even
        code: "even = (x) --> x % 2 is 0"
    }
    {
        name: \odd
        code: "odd = (x) --> x % 2 is 1"
    }
    {
        name: \take
        code: "take = (n, xs) --> xs.slice 0 n"
    }
    {
        name: \drop
        code: "drop = (n, xs) --> xs.slice n"
    }
    {
        name: \repeat
        code: "
            repeat = (n, s) -->
                result = ''
                for til n
                    result += s
                result
        "
    }
    {
        name: \str
        code: "
            str = (s) -->
                if s instanceof Array or Array.is-array s then return JSON.stringify s
                if typeof s is \\string then return s
                if typeof s is \\undefined or s is undefined then return \\undefined
                if typeof s is \\null or s is null then return \\null
                if typeof s is boolean then if s then return \\true else return \\false
                if isNaN s then return \\NaN
                if s instanceof Function then return s.to-string!
                String s
        "
    }
    {
        name: \int
        code: "int = (s) --> if typeof s is \number then Math.floor s else int Number s"
    }
    {
        name: \title
        code: "title = (s) --> s.replace /\\b\\w/g (c) -> (c.to-upper-case)"
    }
    {
        name: \lazy
        code: "
            lazy = (f) ->
                evaluated = no
                result = null
                (...args) ->
                    if not evaluated
                        result = func ...args
                        evaluated = yes
                    result
        "
    }
    {
        name: \throttle
        code: "
            throttle = (func, delay) ->
                last-time = 0
                (...args) ->
                    current-time = Date.now!
                    if (current-time - last-time) >= delay then do
                        func.apply this, args
                        last-time = current-time
                    return
        "
    }
    {
        name: \debounce
        code: "
            debounce = (func, delay) ->
                timeout-id = null
                (...args) ->
                    clear-timeout timeout-id
                    timeout-id = set-timeout do
                        -> func ...args
                        delay
                    return
        "
    }
    {
        name: \noop
        code: "noop = -> null; return"
    }
    {
        name: \id
        code: "id = -> it"
    }
    {
        name: \before
        code: "
            before = (before-func, func) -->
                (...args) ->
                    before-func!
                    func ...args
        "
    }
    {
        name: \after
        code: "
            after = (func, after-func) -->
                (...args) ->
                    result = func ...args
                    after-func!
                    result
        "
    }
    {
        name: \say
        code: "say = console.log"
    }
    {
        name: \log
        code: "log = (base, x) --> (Math.log x) / (Math.log base)"
    }
    {
        name: \random
        code: "
            random = (min-val, max-val) -->
                if min-val >= max-val
                    min-val
                else
                    max-val
                        |> (- min-val)
                        |> (* Math.random!)
                        |> Math.floor
                        |> (+ min-val)
        "
    }
    {
        name: \sorted
        code: "
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
        "
    }
    {
        name: \memoize
        code: "
            memoize = (f) ->
                cache = {}
                (...args) ->
                    if args[0] in cache then return cache[args[0]]
                    res = f args[0]
                    cache[n] = res
                    res
        "
    }
    {
        name: \sqrt
        code: "sqrt = Math.sqrt"
    }
    {
        name: \round
        code: "round = Math.round"
    }
    {
        name: \build-list
        code: "build-list = (n, f) --> [0 til n].map f"
    }
    {
        name: \hash-ref
        code: "hash-ref = (ref, hash) --> hash[ref]"
    }
    {
        name: \remove
        code: "remove = (k, xs) --> if typeof xs is \\string then xs.replace (new RegExp k, 'g') '' else xs.filter (item) -> item isnt k"
    }
    {
        name: \join
        code: "join = (k, xs) --> xs.join k;"
    }
]

built-in-constants = [
    {
        name: \tau
        code: "tau = Math.pi * 2"
    }
    {
        name: \pi
        code: "pi = Math.pi"
    }
]

say = console.log

compile-macro = (_code) -->
    code = LiveScript.compile _code, {+bare, -header}
    for el in [ 'function curry$(f, bound' 'function not$' 'function compose$' 'function in$' ]
        if code.index-of el isnt -1 then code = code.slice 0 code.index-of el
    code

tokenize-a-piece = (code) -->
    res = []
    current = ""
    i = 0
    res-loc = 0

    while i < code.length
        if code[i] is '('
            res.push []
        if code[i] is ')'
            res[res-loc].push current
            current = ''
            res-loc++
        if code[i] isnt '(' and code[i] isnt ')'
            current += code[i]
        i++
    res

list-ref = (i, xs) --> xs[i]

tokenize = (code) -->
    paren-count = 0
    res = []

    for c in code
        if c is '('
            paren-count += 1
            get-to-right-part-of-res = (paren-count) ->
                res.

console.log tokenize "(hello(test))(world)(blin)"
