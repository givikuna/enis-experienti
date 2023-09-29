(fs = require 'fs')

(require! {
    'prelude-ls': {floor,filter,map,sort,unique,empty,chars,reverse}
})

(is-numeric = (s) --> (/^[-+]?\d+(\.\d+)?$/.test s))

(mapcar = (func, list_) --> (list_.map func))

(str = (s) -->
    (if s instanceof Array or Array.is-array s then return JSON.stringify s)
    (if typeof s is \string then return s)
    (if typeof s is \undefined or s is undefiend then return 'undefiend')
    (if typeof s is \null or s is null then return 'null')
    (if typeof s is boolean then if s then return 'true' else return 'false')
    (if isNaN s then return 'NaN')
    (if s instanceof Function then return s.to-string!)
    (String s))

(int = (s) -->
    (try
        (if typeof s is \number
            (return Math.floor s))
        (int Number s)
    catch e
        (console.error e)
        (0)))

(random = (min-val, max-val) -->
    (if (>=) min-val, max-val then do
        (return min-val))
    (return max-val
        |> (- min-val)
        |> (* Math.random!)
        |> floor
        |> (+ min-val)))

(round-to-x-digits = (n, digits = 0) ->
    (n
        |> (* ((**) 10 digits))
        |> Math.round
        |> (/ ((**) 10 digits))))

(lower = (s) --> s |> str |> (.to-lower-case!))

(inc = (n) --> (+) 1 n)

(dec = (n) --> (-) n, 1)

(upper = (s) --> s |> str |> (.to-upper-case!))

(supertrim = (s) --> s.replace /\r?\n|\r/g '' .trim!)

(freq = (arr, key) -->
    (try
        (if typeof arr is \number then return key |> freq chars str arr)
        (if typeof arr is \string then return key |> freq chars arr)
        (if Array.is-array arr then do
            (return arr
                |> filter (is) key
                |> (.length)))
    catch e
        (console.error e)
        (0)))

(freq-of = (key, arr) --> freq arr, key)

(title = (s) --> s.replace /\b\w/g (c) -> (c.to-upper-case))

(rev = (val) -->
    (if typeof val is \string then return str rev chars val)
    (if typeof val is \number then return parseInt do
        val
            |> (.to-string!)
            |> (.replace /0+$/ '')
            |> chars
            |> rev
            |> (.join '')
        10)
    (if typeof val is \boolean then return not val)
    (reverse val))

(get-file-extension = (s) -->
    (if (<) 1 (s.split '.' .length) then return (str s.split '.')pop! else return 'undefined'))

(equals-any = (key, arr) -->
    (if key in arr then return true)
    ((freq arr, key) or (arr
        |> flatten
        |> some (el) -> (is) key, el or (~=) key, el)))

(console.log equals-any 10 [1 to 20])

(flat-freq = (arr, key) --> arr |> flatten |> freq-of key)

(equals-any-in = (arr, key) --> equals-any key, arr)

(transpose = (arr) -->
    (if not arr or arr.length is 0 or arr[0].length is 0 then return [])
    (ROW-COUNT = arr.length)
    (COL-COUNT = arr[0].length)
    (transposed-arr = [])
    (col = 0)
    (while (<) col, COL-COUNT
        (transposed-arr[col] = [])
        (row = 0)
        (while (<) row, ROW-COUNT
            (transposed-arr[col][row] = arr[row][col])
            (row += 1))
        (col++))
    (transposed-arr))

(chunk = (arr, size) -->
    (CHUNKED-ARR = [])
    (i = 0)
    (while (<) i, arr.length
        (chunk_ = arr.slice i, ((+) i, size))
        (CHUNKED-ARR.push chunk)
        (i += 1))
    (CHUNKED-ARR))

(list = (...elements) -> elements)

(uniq = unique)

(sorted = sort)

(bool = (b) --> if b then return true else return false)

(dir = -> fs.readdir-sync process.cwd!)

(current-dir = -> process.cwd!)

(print = console.log)

(input = (prompt) -> readline-sync.question prompt)

(function is-file
    (fs.exists-sync ... and fs.statSync ... .is-file!))

(function is-dir
    (fs.exists-sync ... and fs.statSync ... .is-directory!))

(exists = fs.exists-sync)

(make-legal-JS-name = (s) -->
    (name = s.replace /\r?\n|\r/g, '' .trim!)
    (if /^[a-zA-Z0-9]+$/.test name then return name)
    (if name[0] is name[0].to-upper-case! then return lodash.camel-case(name)replace /\b\w/g (c) -> c.to-upper-case!)
    (lodash.camel-case name))

(function defun name, func
    (if global.has-own-property name then return null)
    (if not func
        (global[make-legal-JS-name name] = null)
        (return global[make-legal-JS-name name]))
    (global[make-legal-JS-name name] = func)
    (func))

(function define name, val
    (if global.has-own-property name then do
        (return global['name']))
    (if not val then do
        (global[make-legal-JS-name name] = null)
        (return global[make-legal-JS-name name]))
    (global[make-legal-JS-name name] = val)
    (val))

(function defconstant name, val
    (if global.has-own-property name then do
        (return global['name']))
    (if not val then do
        (global[make-legal-JS-name name] = null)
        (return global[make-legal-JS-name name]))
    (Object.define-property do
        global
        make-legal-JS-name name
        {
            value: val
            writable: false
            configurable: false
        })
    (val))

(function defparameter name, val
    (if global.has-own-property name then do
        (return null))
    (defun name, val))

(function defvar name
    (if not global.has-own-property name then do
        (global[name] = undefined))
    (return))

(function defmacro name, func
    (defun name, func)) 

(lambda = (func) -> (...args) -> func ...args)

(fn = lambda)

(echo = console.log)

(println = console.log)

(execute = (cmd) -> if typeof cmd isnt \string then return '' else return String exec-sync cmd)

(exec = execute)

(funcall = (func, ...args) -> func ...args)

(len = (val) -->
    (if typeof val is \boolean then return 4 if val else 5)
    (if typeof val is \number then return val.to-string!.length)
    (if typeof val is \string then return val.length)
    (if val instanceof Array or Array.is-array val then return val.length)
    (len str val))

(length = len)

(function sleep amount, type = \milliseconds
    (multiplier = do ->
        (if type is \seconds then return 1000)
        (if type is \hours then return 3600000)
        (if type is \days then return 86400000)
        (return 1))
    (start = new Date!get-time!)
    (while (<) ((-) new Date!get-time!, start), ((*) multiplier, amount)
        (null))
    (return))

(lazy = (func) ->
    (evaluated = no)
    (result = null)
    ((...args) ->
        (if not evaluated then do
            (result = func ...args)
            (evaluated = yes))
        (result)))

(throttle = (func, delay) ->
    (last-time = 0)
    ((...args) ->
        (current-time = Date.now!)
        (if (>=) ((-) current-time, last-time), delay then do
            (func.apply this, args)
            (last-time = current-time))
        (return)))

(debounce = (func, delay) ->
    (timeout-id = null)
    ((...args) ->
        (clear-timeout timeout-id)
        (timeout-id = set-timeout do
            -> func ...args
            delay)
        (return)))

(noop = -> null; return)

(identity = -> it)

(before = (before-func, func) -->
    ((...args) ->
        (before-func!)
        (func ...args)))

(after = (func, after-func) -->
    ((...args) ->
        (result = func ...args)
        (after-func!)
        (result)))

(say = console.log)

(puts = console.log)

(const t = true)

(const nil = null)

(const f = false)

(const True = true)

(const False = false)

(const None = null)

(reversed = rev)

(enumerate = (arr, start = 0) -> arr.map (el, i) -> [(i + start), el])

(log = (x, base) --> (/) Math.log(x), Math.log(base))

(pow = (n, exponent) -->
    (if exponent is 0 then return 1)
    (if exponent is 1 then return n)
    (if (<) exponent, 0 then do
        return exponent
            |> (1 /)
            |> Math.pow n)
    (if (>) exponent.toString!.split('')includes \.
        (nil))
    (return exponent
        |> (- 1)
        |> pow n
        |> (* n)))

module.exports = {
    enumerate
    reversed
    True
    False
    None
    t
    nil
    f
    say
    after
    before
    identity
    noop
    debounce
    throttle
    lazy
    sleep
    length
    len
    funcall
    exec
    println
    echo
    fn
    lambda
    defmacro
    defvar
    defparameter
    defconstant
    define
    defun
    make-legal-JS-name
    exists
    dir
    current-dir
    is-dir
    is-file
    input
    print
    bool
    uniq
    sorted
    list
    chunk
    transpose
    equals-any-in
    equals-any
    freq
    freq-of
    is-numeric
    mapcar
    str
    int
    random
    round-to-x-digits
    lower
    inc
    dec
    upper
    supertrim
    title
    rev
    get-file-extension
    puts
}
