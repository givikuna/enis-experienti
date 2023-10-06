add$ = (+)

minus$ = (-)

multiply$ = (*)

divide$ = (/)

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

