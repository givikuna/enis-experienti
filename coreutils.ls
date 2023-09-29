(is-numeric = (xs) --> (/^[-+]?\d+(\.\d+)?$/.test xs))

(mapcar = (func, xs) --> (xs.map func))

(filter = (func, xs) --> (xs.filter func))

(head = (xs) --> xs[0])

(tail = (xs) --> xs[(-) (xs.length) 1])

(empty = (xs) --> xs.length is 0)

(reverse = (xs) --> xs.concat!reverse!)

(uniq = (xs) -->
    (res = [])
    (for el in xs when x not in res then res.push el)
    (res))

(uniq-by = (f, xs) -->
    (seen = [])
    (for x in xs
        (val = f x)
        (continue if val in seen)
        (seen.push val))
    (x))

(lower = (xs) --> xs.to-lower-case!)

(upper = (xs) --> xs.to-upper-case!)

(inc = (n) --> (+) 1 n)

(dec = (n) --> (-) (n) 1)

(supertrim = (xs) --> s.replace /\r?\n|\r/g '' .trim!)

(freq = (k, xs) --> xs.filter((el) -> el is k)length)

(freq-in = (xs, k) --> freq k, xs)

(any = (f, xs) --> for x in xs when f x then true; false)

(all = (f, xs) --> for x in xs when not f x then false; true)

(is-any = (k, xs) --> any (is) 10)

(rev = (xs) --> if typeof xs is \string then xs.split '' .reverse! .join '' else xs.reverse!)

(flatten = (xs) --> [(if typeof! xs is \Array then flatten xs else x) for x in xs])

(sum = (xs) --> res = 0; for x in xs then res += x; res)

(product = (xs) --> res = 1; for x in xs then res *= x; res)

(mean = (xs) --> (/) (sum xs) xs.length)

(max = (xs) --> res = xs[0]; for x in xs.slice 1 when (>) x, res then res = x; res)

()
