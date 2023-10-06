export const ast = [
    {
        statement: "just-a-value",
        info: {
            value: "t",
            type: "Bool"
        },
    },
    {
        statement: "just-a-value",
        info: {
            value: "f",
            type: "Bool"
        },
    },
    {
        statement: "just-a-value",
        info: {
            value: "nil",
            type: "Nil"
        }
    },
    {
        statement: "just-a-value",
        info: {
            value: "10",
            type: "Number",
        }
    },
    {
        statement: "function-call",
        info: {
            functionBeingCalled: "+",
            arguments: [
                {
                    statement: "just-a-value",
                    info: {
                        value: "10",
                        type: "Number"
                    }
                },
                {
                    statement: "just-a-value",
                    info: {
                        value: "5",
                        type: "Number"
                    }
                }
            ]
        }
    },
    {
        statement: "function-call",
        info: {
            functionBeingCalled: "expt",
            arguments: [
                {
                    statement: "just-a-value",
                    info: {
                        value: "2",
                        type: "Number"
                    }
                },
                {
                    statement: "just-a-value",
                    info: {
                        value: "7",
                        type: "Number"
                    }
                }
            ]
        }
    },
    {
        statement: "just-a-value",
        info: {
            value: "\"Hello World\"",
            type: "String"
        }
    },
    {
        statement: "just-a-value",
        info: {
            value: ":atom",
            type: "String"
        }
    },
    {
        statement: "function-call",
        info: {
            functionBeingCalled: "list-to",
            arguments: [
                {
                    statement: "just-a-value",
                    info: {
                        value: "4",
                        type: "Number"
                    }
                },
                {
                    statement: "just-a-value",
                    info: {
                        value: "1",
                        type: "Number"
                    }
                }
            ]
        }
    },
    {
        statement: "function-call",
        info: {
            functionBeingCalled: "list-til",
            arguments: [
                {
                    statement: "just-a-value",
                    info: {
                        value: "5",
                        type: "Number"
                    }
                },
                {
                    statement: "just-a-value",
                    info: {
                        value: "1",
                        type: "Number"
                    }
                }
            ]
        }
    },
    {
        statement: "function-call",
        info: {
            functionBeingCalled: "list",
            arguments: [
                {
                    statement: "just-a-value",
                    info: {
                        value: "1",
                        type: "Number"
                    }
                },
                {
                    statement: "just-a-value",
                    info: {
                        value: "2",
                        type: "Number"
                    }
                },
                {
                    statement: "just-a-value",
                    info: {
                        value: "3",
                        type: "Number"
                    }
                },
                {
                    statement: "just-a-value",
                    info: {
                        value: "4",
                        type: "Number"
                    }
                },
                {
                    statement: "just-a-value",
                    info: {
                        value: "5",
                        type: "Number"
                    }
                },
            ]
        }
    },
    {
        statement: "define",
        info: {
            variableName: "n",
            variableType: "Number",
            variableValue: {
                statement: "just-a-value",
                info: {
                    value: "10",
                    type: "Number"
                }
            }
        }
    },
    {
        statement: "defvar",
        info: {
            variableName: "n2",
            variableType: "Number",
            variableValue: {
                statement: "just-a-value",
                info: {
                    value: "10",
                    type: "Number"
                }
            }
        }
    },
    {
        statement: "macro-call",
        info: {
            macroName: "set!",
            arguments: [
                {
                    statement: "just-a-value",
                    info: {
                        value: "n2",
                        type: "Number"
                    }
                },
                {
                    statement: "just-a-value",
                    info: {
                        value: "12",
                        type: "Number"
                    }
                }
            ]
        }
    },
    {
        statement: "function-call",
        info: {
            functionBeingCalled: "say",
            arguments: [
                {
                    statement: "function-call",
                    info: {
                        functionBeingCalled: "lower",
                        arguments: [
                            {
                                statement: "just-a-value",
                                info: {
                                    value: ":Hey",
                                    type: "String"
                                }
                            }
                        ]
                    }
                }
            ]
        }
    },
    {
        statement: "if-statement",
        info: {
            conditions: [
                {
                    statement: "function-call",
                    info: {
                        functionBeingCalled: "or",
                        arguments: [
                            {
                                statement: "function-call",
                                info: {
                                    functionBeingCalled: "=",
                                    arguments: [
                                        {
                                            statement: "just-a-value",
                                            info: {
                                                value: "n2",
                                                type: "Number"
                                            }
                                        },
                                        {
                                            statement: "just-a-value",
                                            info: {
                                                value: "10",
                                                type: "Number"
                                            }
                                        },
                                    ]
                                }
                            },
                            {
                                statement: "function-call",
                                info: {
                                    functionBeingCalled: "=",
                                    arguments: [
                                        {
                                            statement: "just-a-value",
                                            info: {
                                                value: "n",
                                                type: "Number"
                                            }
                                        },
                                        {
                                            statement: "just-a-value",
                                            info: {
                                                value: "10",
                                                type: "Number"
                                            }
                                        },
                                    ]
                                }
                            }
                        ]
                    }
                }
            ],
            ifTrue: [
                {
                    statement: "function-call",
                    info: {
                        functionBeingCalled: "say",
                        arguments: [
                            {
                                statement: "just-a-value",
                                info: {
                                    value: "\'or\'",
                                    type: "String"
                                }
                            }
                        ]
                    }
                }
            ],
            elifs: [],
            else: []
        }
    },
    {
        statement: "if-statement",
        info: {
            conditions: [
                {
                    statement: "function-call",
                    info: {
                        functionBeingCalled: "and",
                        arguments: [
                            {
                                statement: "function-call",
                                info: {
                                    functionBeingCalled: "=",
                                    arguments: [
                                        {
                                            statement: "just-a-value",
                                            info: {
                                                value: "n2",
                                                type: "Number"
                                            }
                                        },
                                        {
                                            statement: "just-a-value",
                                            info: {
                                                value: "10",
                                                type: "Number"
                                            }
                                        },
                                    ]
                                }
                            },
                            {
                                statement: "function-call",
                                info: {
                                    functionBeingCalled: "=",
                                    arguments: [
                                        {
                                            statement: "just-a-value",
                                            info: {
                                                value: "n",
                                                type: "Number"
                                            }
                                        },
                                        {
                                            statement: "just-a-value",
                                            info: {
                                                value: "12",
                                                type: "Number"
                                            }
                                        },
                                    ]
                                }
                            }
                        ]
                    }
                }
            ],
            ifTrue: [
                {
                    statement: "function-call",
                    info: {
                        functionBeingCalled: "say",
                        arguments: [
                            {
                                statement: "just-a-value",
                                info: {
                                    value: "\'and\'",
                                    type: "String"
                                }
                            }
                        ]
                    }
                }
            ],
            elifs: [],
            else: []
        }
    },
    {
        statement: "if-statement",
        info: {
            conditions: [
                {
                    statement: "function-call",
                    info: {
                        functionBeingCalled: "xor",
                        arguments: [
                            {
                                statement: "function-call",
                                info: {
                                    functionBeingCalled: "=",
                                    arguments: [
                                        {
                                            statement: "just-a-value",
                                            info: {
                                                value: "n2",
                                                type: "Number"
                                            }
                                        },
                                        {
                                            statement: "just-a-value",
                                            info: {
                                                value: "10",
                                                type: "Number"
                                            }
                                        },
                                    ]
                                }
                            },
                            {
                                statement: "function-call",
                                info: {
                                    functionBeingCalled: "=",
                                    arguments: [
                                        {
                                            statement: "just-a-value",
                                            info: {
                                                value: "n",
                                                type: "Number"
                                            }
                                        },
                                        {
                                            statement: "just-a-value",
                                            info: {
                                                value: "10",
                                                type: "Number"
                                            }
                                        },
                                    ]
                                }
                            }
                        ]
                    }
                }
            ],
            ifTrue: [
                {
                    statement: "function-call",
                    info: {
                        functionBeingCalled: "say",
                        arguments: [
                            {
                                statement: "just-a-value",
                                info: {
                                    value: "\'xor\'",
                                    type: "String"
                                }
                            }
                        ]
                    }
                }
            ],
            elifs: [],
            else: []
        }
    },
    {
        statement: "function-signature",
        info: {
            functionName: "SayHi",
            inputTypes: [],
            returnType: "Void"
        },
        curried: false,
        functionDefinition: {
            statement: "define",
            info: {
                functionName: "SayHi",
                functionParameters: [],
                functionBody: [
                    {
                        statement: "function-call",
                        info: {
                            functionBeingCalled: "say",
                            arguments: [
                                {
                                    statement: "just-a-value",
                                    info: {
                                        value: ":Hi",
                                        type: "String"
                                    }
                                }
                            ]
                        }
                    }
                ],
            }
        }
    },
    {
        statement: "function-call",
        info: {
            functionBeingCalled: "funcall",
            arguments: [
                {
                    statement: "just-a-value",
                    info: {
                        value: "SayHiTo",
                        type: "Function"
                    }
                }
            ],
        }
    },
    {
        statement: "function-signature",
        info: {
            functionName: "SayHiTo",
            inputTypes: [
                "String"
            ],
            returnType: "Void"
        },
        curried: false,
        functionDefinition: {
            statement: "define",
            info: {
                functionName: "SayHiTo",
                functionParameters: [
                    "name"
                ],
                functionBody: [
                    {
                        statement: "function-call",
                        info: {
                            functionBeingCalled: "say",
                            arguments: [
                                {
                                    statement: "f-string",
                                    info: {
                                        value: "f\"Hi #{name}\"",
                                        type: "String"
                                    }
                                }
                            ]
                        }
                    }
                ],
            }
        }
    },
    {
        statement: "function-call",
        info: {
            functionBeingCalled: "SayHiTo",
            arguments: [
                {
                    statement: "just-a-value",
                    info: {
                        value: "\'Steve\'",
                        type: "String",
                    }
                }
            ]
        }
    },
    {
        statement: "function-call",
        info: {
            functionBeingCalled: "funcall",
            arguments: [
                {
                    statement: "just-a-value",
                    info: {
                        value: "SayHiTo",
                        type: "Function",
                    }
                },
                {
                    statement: "just-a-value",
                    info: {
                        value: "\'Steve\'",
                        type: "String",
                    },
                }
            ]
        }
    },
    {
        statement: "function-signature",
        info: {
            functionName: "CoolerFunction",
            inputTypes: [
                "String"
            ],
            returnType: "Void"
        },
        functionDefinition: {
            statement: "defun",
            info: {
                functionName: "CoolerFunction",
                functionParameters: [
                    "name"
                ],
                functionBody: [
                    {
                        statement: "function-call",
                        info: {
                            functionBeingCalled: "say",
                            arguments: [
                                {
                                    statement: "f-string",
                                    info: {
                                        value: "f\"Hi #{name} you're cool!\"",
                                        type: "String"
                                    }
                                }
                            ]
                        }
                    }
                ],
            }
        },
        curried: false,
    },
    {
        statement: "function-signature",
        info: {
            functionName: "CurriedAddition",
            inputTypes: [
                "Number",
                "Number"
            ],
            returnType: "Number"
        },
        curried: true,
        functionDefinition: {
            statement: "define",
            info: {
                functionName: "CurriedAddition",
                functionParameters: [
                    "a",
                    "b",
                ],
                functionBody: [
                    {
                        statement: "function-call",
                        info: {
                            functionBeingCalled: "+",
                            arguments: [
                                {
                                    statement: "just-a-value",
                                    info: {
                                        value: "a",
                                        type: "Number"
                                    }
                                },
                                {
                                    statement: "just-a-value",
                                    info: {
                                        value: "b",
                                        type: "Number"
                                    }
                                }
                            ]
                        }
                    }
                ],
            }
        }
    },
    {
        statement: "function-signature",
        info: {
            functionName: "Addition",
            inputTypes: [
                "Number",
                "Number"
            ],
            returnType: "Number"
        },
        curried: false,
        functionDefinition: {
            statement: "define",
            info: {
                functionName: "Addition",
                functionParameters: [
                    "a",
                    "b",
                ],
                functionBody: [
                    {
                        statement: "function-call",
                        info: {
                            functionBeingCalled: "+",
                            arguments: [
                                {
                                    statement: "just-a-value",
                                    info: {
                                        value: "a",
                                        type: "Number"
                                    }
                                },
                                {
                                    statement: "just-a-value",
                                    info: {
                                        value: "b",
                                        type: "Number"
                                    }
                                }
                            ]
                        }
                    }
                ],
            }
        }
    },
    {
        statement: "define",
        info: {
            variableName: "DifferentCurriedAddition",
            variableType: "Function",
            variableValue: {
                statement: "function-call",
                info: {
                    functionBeingCalled: "curry$",
                    arguments: [
                        {
                            statement: "just-a-value",
                            info: {
                                value: "Addition",
                                type: "Function"
                            }
                        }
                    ],
                }
            }
        },
    },
    {
        statement: "define",
        info: {
            variableName: "value-from-lambda",
            variableType: "Number",
            variableValue: {
                statement: "function-call",
                info: {
                    functionBeingCalled: "funcall",
                    arguments: [
                        {
                            statement: "lambda",
                            info: {
                                lambdaSignature: {
                                    inputTypes: [],
                                    functionParameters: [],
                                    returnType: "Number"
                                },
                                lambdaBody: [
                                    {
                                        statement: "funtion-call",
                                        info: {
                                            functionBeingCalled: "+",
                                            arguments: [
                                                {
                                                    statement: "just-a-value",
                                                    info: {
                                                        value: "10",
                                                        type: "Number"
                                                    }
                                                },
                                                {
                                                    statement: "just-a-value",
                                                    info: {
                                                        value: "12",
                                                        type: "Number"
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                ],
                            }
                        }
                    ]
                }
            }
        }
    },
    {
        statement: "define",
        info: {
            variableName: "another-value-from-lambda",
            variableType: "Number",
            variableValue: {
                statement: "function-call",
                info: {
                    functionBeingCalled: "funcall",
                    arguments: [
                        {
                            statement: "lambda",
                            info: {
                                lambdaSignature: {
                                    inputTypes: [],
                                    functionParameters: [],
                                    returnType: "Number",
                                },
                                lambdaBody: [
                                    {
                                        statement: "cond",
                                        info: {
                                            conditions: [
                                                {
                                                    condition: [
                                                        {
                                                            statement: "function-call",
                                                            info: {
                                                                functionBeingCalled: ">",
                                                                arguments: [
                                                                    {
                                                                        statement: "just-a-value",
                                                                        info: {
                                                                            value: "1",
                                                                            type: "Number"
                                                                        }
                                                                    },
                                                                    {
                                                                        statement: "just-a-value",
                                                                        info: {
                                                                            value: "2",
                                                                            type: "Number"
                                                                        }
                                                                    },
                                                                ]
                                                            }
                                                        }
                                                    ],
                                                    return: [
                                                        {
                                                            statement: "just-a-value",
                                                            info: {
                                                                value: "2",
                                                                type: "Number"
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    condition: [
                                                        {
                                                            statement: "function-call",
                                                            info: {
                                                                functionBeingCalled: ">",
                                                                arguments: [
                                                                    {
                                                                        statement: "just-a-value",
                                                                        info: {
                                                                            value: "2",
                                                                            type: "Number"
                                                                        }
                                                                    },
                                                                    {
                                                                        statement: "just-a-value",
                                                                        info: {
                                                                            value: "1",
                                                                            type: "Number"
                                                                        }
                                                                    },
                                                                ]
                                                            }
                                                        }
                                                    ],
                                                    return: [
                                                        {
                                                            statement: "just-a-value",
                                                            info: {
                                                                value: "4",
                                                                type: "Number"
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    condition: [
                                                        {
                                                            statement: "just-a-value",
                                                            info: {
                                                                value: ":else",
                                                                type: "String"
                                                            }
                                                        }
                                                    ],
                                                    return: [
                                                        {
                                                            statement: "just-a-value",
                                                            info: {
                                                                value: "10",
                                                                type: "Number"
                                                            },
                                                        }
                                                    ],
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        }
    },
    {
        statement: "define",
        info: {
            variableName: "person",
            variableType: "JSON",
            variableValue: {
                statement: "hash-statement",
                info: {
                    dictionary: [
                        {
                            key: "Name",
                            value: {
                                statement: "just-a-value",
                                info: {
                                    value: "\"Johnny\"",
                                    type: "String"
                                }
                            },
                        },
                        {
                            key: "Country",
                            value: {
                                statement: "just-a-value",
                                info: {
                                    value: "\"USA\"",
                                    type: "String"
                                }
                            },
                        },
                        {
                            key: "Age",
                            value: {
                                statement: "just-a-value",
                                info: {
                                    value: "20",
                                    type: "Number"
                                }
                            },
                        }
                    ]
                }
            }
        }
    },
    {
        statement: "function-call",
        info: {
            functionBeingCalled: "say",
            arguments: [
                {
                    statement: "function-call",
                    functionBeingCalled: "hash-ref",
                    arguments: [
                        {
                            statement: "just-a-value",
                            info: {
                                value: ":Name",
                                type: "String"
                            }
                        },
                        {
                            statement: "just-a-value",
                            info: {
                                value: "person",
                                type: "JSON"
                            }
                        }
                    ]
                }
            ]
        }
    },
    {
        statement: "function-signature",
        info: {
            functionName: "ReverseInteger",
            inputTypes: [
                "Number",
            ],
            returnType: "Number"
        },
        curried: false,
        functionDefinition: {
            statement: "defun",
            info: {
                functionName: "ReverseInteger",
                functionParameters: [
                    "n",
                ],
                functionBody: [
                    {
                        statement: "pipe",
                        info: {
                            pipedElements: [
                                {
                                    statement: "just-a-value",
                                    info: {
                                        value: "str",
                                        type: "Function"
                                    }
                                },
                                {
                                    statement: "just-a-value",
                                    info: {
                                        value: "chars",
                                        type: "Function"
                                    }
                                },
                                {
                                    statement: "just-a-value",
                                    info: {
                                        value: "rev",
                                        type: "Function"
                                    }
                                },
                                {
                                    statement: "function-call",
                                    info: {
                                        functionBeingCalled: "join",
                                        arguments: [
                                            {
                                                statement: "just-a-value",
                                                info: {
                                                    value: "\'\'",
                                                    type: "String"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    statement: "function-call",
                                    info: {
                                        functionBeingCalled: "remove",
                                        arguments: [
                                            {
                                                statement: "just-a-value",
                                                info: {
                                                    value: ":-",
                                                    type: "String"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    statement: "function-call",
                                    info: {
                                        functionBeingCalled: "*",
                                        arguments: [
                                            {
                                                statement: "function-call",
                                                info: {
                                                    functionBeingCalled: "Math.sign",
                                                    arguments: [
                                                        {
                                                            statement: "just-a-value",
                                                            info: {
                                                                value: "n",
                                                                type: "Number"
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                },
                            ]
                        }
                    }
                ],
            }
        }
    },
    {
        statement: "define",
        info: {
            variableName: "regex-example",
            variableType: "String",
            variableValue: {
                statement: "just-a-value",
                info: {
                    value: "\'haii\'",
                    type: "String",
                    chained: [
                        {
                            statement: "function-call",
                            info: {
                                functionBeingCalled: ".replace",
                                arguments: [
                                    {
                                        statement: "just-a-value",
                                        info: {
                                            value: '/i/g',
                                            type: "RegExp"
                                        }
                                    },
                                    {
                                        statement: "just-a-value",
                                        info: {
                                            value: "\'\'",
                                            type: "String"
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        }
    },
    {
        statement: "define",
        info: {
            variableName: "names",
            variableType: "List<String>",
            variableValue: {
                statement: "function-call",
                info: {
                    functionBeingCalled: "list",
                    arguments: [
                        {
                            statement: "just-a-value",
                            info: {
                                value: ":Jack",
                                type: "String"
                            }
                        },
                        {
                            statement: "just-a-value",
                            info: {
                                value: ":John",
                                type: "String"
                            }
                        },
                        {
                            statement: "just-a-value",
                            info: {
                                value: ":Jimmy",
                                type: "String"
                            }
                        }
                    ]
                }
            }
        }
    },
    {
        statement: "define",
        info: {
            variableName: "first-letters-of-names",
            variableType: "List<String>",
            variableValue: {
                statement: "function-call",
                info: {
                    functionBeingCalled: "mapcar",
                    arguments: [
                        {
                            statement: "lambda",
                            info: {
                                lambdaSignature: {
                                    inputTypes: [
                                        "String"
                                    ],
                                    functionParameters: [
                                        "name"
                                    ],
                                    returnType: "String"
                                },
                                lambdaBody: [
                                    {
                                        statement: "function-call",
                                        info: {
                                            functionBeingCalled: "list-ref",
                                            arguments: [
                                                {
                                                    statement: "function-call",
                                                    info: {
                                                        functionBeingCalled: "chars",
                                                        arguments: [
                                                            {
                                                                statement: "just-a-value",
                                                                info: {
                                                                    value: "name",
                                                                    type: "String"
                                                                }
                                                            }
                                                        ]
                                                    }
                                                },
                                                {
                                                    statement: "just-a-value",
                                                    info: {
                                                        value: "0",
                                                        type: "Number"
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                ],
                            }
                        },
                        {
                            statement: "just-a-value",
                            info: {
                                value: "names",
                                type: "List<String>"
                            }
                        }
                    ]
                }
            }
        }
    },
    {
        statement: "define",
        info: {
            variableName: "last-letters-of-names",
            variableType: "List<String>",
            variableValue: {
                statement: "function-call",
                info: {
                    functionBeingCalled: "mapcar",
                    arguments: [
                        {
                            statement: "lambda",
                            info: {
                                lambdaSignature: {
                                    inputTypes: [
                                        "String"
                                    ],
                                    functionParameters: [
                                        "name"
                                    ],
                                    returnType: "String"
                                },
                                lambdaBody: [
                                    {
                                        statement: "function-call",
                                        info: {
                                            functionBeingCalled: "list-ref",
                                            arguments: [
                                                {
                                                    statement: "function-call",
                                                    info: {
                                                        functionBeingCalled: "chars",
                                                        arguments: [
                                                            {
                                                                statement: "just-a-value",
                                                                info: {
                                                                    value: "name",
                                                                    type: "String"
                                                                }
                                                            }
                                                        ]
                                                    }
                                                },
                                                {
                                                    statement: "just-a-value",
                                                    info: {
                                                        value: "-1",
                                                        type: "Number"
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                ],
                            }
                        },
                        {
                            statement: "just-a-value",
                            info: {
                                value: "names",
                                type: "List<String>"
                            }
                        }
                    ]
                }
            }
        }
    }
];
