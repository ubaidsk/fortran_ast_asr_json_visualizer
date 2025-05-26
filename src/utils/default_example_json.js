const json_example1 = `{
    "node": "TranslationUnit",
    "fields": {
        "global_scope": {
            "node": "SymbolTable1",
            "fields": {
                "expr2": {
                    "node": "Program",
                    "fields": {
                        "symtab": {
                            "node": "SymbolTable2",
                            "fields": {
                                "x": {
                                    "node": "Variable",
                                    "fields": {
                                        "parent_symtab": 2,
                                        "name": "x",
                                        "intent": "Local",
                                        "symbolic_value": [],
                                        "value": [],
                                        "storage": "Default",
                                        "type": {
                                            "node": "Integer",
                                            "fields": {
                                                "kind": 4,
                                                "dims": []
                                            }
                                        },
                                        "abi": "Source",
                                        "access": "Public",
                                        "presence": "Required",
                                        "value_attr": false
                                    }
                                }
                            }
                        },
                        "name": "expr2",
                        "dependencies": [],
                        "body": [
                            {
                                "node": "Assignment",
                                "fields": {
                                    "target": {
                                        "node": "Var",
                                        "fields": {
                                            "v": {
                                                "node": "Variable",
                                                "fields": {
                                                    "parent_symtab": 2,
                                                    "name": "x",
                                                    "intent": "Local",
                                                    "symbolic_value": [],
                                                    "value": [],
                                                    "storage": "Default",
                                                    "type": {
                                                        "node": "Integer",
                                                        "fields": {
                                                            "kind": 4,
                                                            "dims": []
                                                        }
                                                    },
                                                    "abi": "Source",
                                                    "access": "Public",
                                                    "presence": "Required",
                                                    "value_attr": false
                                                }
                                            }
                                        }
                                    },
                                    "value": {
                                        "node": "IntegerBinOp",
                                        "fields": {
                                            "left": {
                                                "node": "IntegerBinOp",
                                                "fields": {
                                                    "left": {
                                                        "node": "IntegerConstant",
                                                        "fields": {
                                                            "n": 2,
                                                            "type": {
                                                                "node": "Integer",
                                                                "fields": {
                                                                    "kind": 4,
                                                                    "dims": []
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "op": "Add",
                                                    "right": {
                                                        "node": "IntegerConstant",
                                                        "fields": {
                                                            "n": 3,
                                                            "type": {
                                                                "node": "Integer",
                                                                "fields": {
                                                                    "kind": 4,
                                                                    "dims": []
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "type": {
                                                        "node": "Integer",
                                                        "fields": {
                                                            "kind": 4,
                                                            "dims": []
                                                        }
                                                    },
                                                    "value": {
                                                        "node": "IntegerConstant",
                                                        "fields": {
                                                            "n": 5,
                                                            "type": {
                                                                "node": "Integer",
                                                                "fields": {
                                                                    "kind": 4,
                                                                    "dims": []
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            },
                                            "op": "Mul",
                                            "right": {
                                                "node": "IntegerConstant",
                                                "fields": {
                                                    "n": 5,
                                                    "type": {
                                                        "node": "Integer",
                                                        "fields": {
                                                            "kind": 4,
                                                            "dims": []
                                                        }
                                                    }
                                                }
                                            },
                                            "type": {
                                                "node": "Integer",
                                                "fields": {
                                                    "kind": 4,
                                                    "dims": []
                                                }
                                            },
                                            "value": {
                                                "node": "IntegerConstant",
                                                "fields": {
                                                    "n": 25,
                                                    "type": {
                                                        "node": "Integer",
                                                        "fields": {
                                                            "kind": 4,
                                                            "dims": []
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "overloaded": []
                                }
                            },
                            {
                                "node": "Print",
                                "fields": {
                                    "fmt": [],
                                    "values": [
                                        {
                                            "node": "Var",
                                            "fields": {
                                                "v": {
                                                    "node": "Variable",
                                                    "fields": {
                                                        "parent_symtab": 2,
                                                        "name": "x",
                                                        "intent": "Local",
                                                        "symbolic_value": [],
                                                        "value": [],
                                                        "storage": "Default",
                                                        "type": {
                                                            "node": "Integer",
                                                            "fields": {
                                                                "kind": 4,
                                                                "dims": []
                                                            }
                                                        },
                                                        "abi": "Source",
                                                        "access": "Public",
                                                        "presence": "Required",
                                                        "value_attr": false
                                                    }
                                                }
                                            }
                                        }
                                    ],
                                    "separator": [],
                                    "end": []
                                }
                            }
                        ]
                    }
                }
            }
        },
        "items": []
    }
}
`;

const json_example2 = `{
    "node": "TranslationUnit",
    "fields": {
        "global_scope": {
            "node": "SymbolTable1",
            "fields": {
                "error_stop_01": {
                    "node": "Program",
                    "fields": {
                        "symtab": {
                            "node": "SymbolTable2",
                            "fields": {}
                        },
                        "name": "error_stop_01",
                        "dependencies": [],
                        "body": [
                            {
                                "node": "ErrorStop",
                                "fields": {
                                    "code": []
                                }
                            }
                        ]
                    }
                }
            }
        },
        "items": []
    }
}
`;

const json_examples = [json_example1, json_example2]
export default json_examples;
