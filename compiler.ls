require! {
    'prelude-ls':{tail}
}

tokenize = (code) -->
    code
        |> (.replace-all '(' '"["')
        |> (.replace-all ')' ', ]", ')
        |> tail

console.log tokenize "(hello(world(ok))(hi))"
