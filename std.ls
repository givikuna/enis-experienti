is-numeric = (xs) --> (/^[-+]?\d+(\.\d+)?$/.test xs)

sum = (xs) --> xs.reduce ((acc, current) -> acc + current) 0

product = (xs) --> xs.reduce ((acc, current) -> acc * current) 0

mean = (xs) --> (xs.reduce ((acc, current) -> acc + current) 0) >> (/ xs.length)

maximum = (xs) --> xs.reduce (acc, current) -> if (>) acc, current then acc else current

minimum = (xs) --> xs.reduce (acc, current) -> if (<) acc, current then acc else current

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
log = (base, x) --> (Math.log x) / (Math.log base)

memoize = (f) ->
    cache = {}
    (...args) ->
        if args[0] in cache then return cache[args[0]]
        res = f args[0]
        cache[n] = res
        res

tau = Math.pi * 2

sqrt = Math.sqrt

find-indices = (f, xs) --> (xs.entries!filter (x) -> f x[1]).map (x) -> x[0]

elem-indices = (el, xs) --> (xs.entries!filter (x) -> x[1] is el).map (x) -> x[0]

take-while = (f, xs) --> xs.filter (x) -> f x

drop-while = (f, xs) --> fs.filter (x) -> not f x

capitalize = (xs) --> xs.char-at 0 .to-upper-case! + str.slice 1

rest = (xs) --> xs.slice 1

initial = (xs) --> xs.slice xs.length

transpose = (arr) -->
    if not arr or arr.length is 0 or arr[0].length is 0 then return []
    ROW-COUNT = arr.length
    COL-COUNT = arr[0].length
    transposed-arr = []
    col = 0
    while (<) col, COL-COUNT
        transposed-arr[col] = []
        row = 0
        while (<) row, ROW-COUNT
            transposed-arr[col][row] = arr[row][col]
            row += 1
        col++
    transposed-arr

chunk = (size, arr) -->
    chunked-arr = []
    i = 0
    while i < arr.length
        chunk_ = arr.slice i, size + i
        chunked-arr.push chunk_
        i += 1
    chunked-arr
