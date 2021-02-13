import './App.css';
import firebase from "firebase/app";
import "firebase/database";
const keys = require('./keys.json');

function App() {
  var database = firebase.database();
  database.ref().set({
    "nationality": {
      "Afghanistan":{
        "Food Practices":{
          "Religious & Cultural Infulences": {
            "x": "x",
            "x": "x",
            "x": "x"
          },
          "Meal Patterns":{
            "x": "x",
            "x": "x",
            "x": "x"
          },
          "Eating Practices":{
            "x": "x",
            "x": "x",
            "x": "x"
          },
          "Cooking Methods":{
            "x": "x",
            "x": "x",
            "x": "x"
        }},
        "Tradition Dishes":{
          "Non-Vegetarian":{
            "x": "x",
            "x": "x"
          },
          "Vegetarian":{
            "x": "x",
            "x": "x"
          },
          "Desserts":{
            "x": "x",
            "x": "x"
          },
          "Drinks":{
            "x": "x",
            "x": "x"
          }},
        "Popular Food Items":{
        "Dairy & Non-Dairy Products": {
          "x": "x",
          "x": "x",
          "x": "x"
        },
        "Meats & Meat Alternatives": {
          "x": "x",
          "x": "x",
          "x": "x"
        },
        "Fruits & Vegetables": {
          "x":"x",
          "x": "x",
          "x":"x"
        },
        "Grains Breads & Cereals": {
          "x":"x",
          "x": "x",
          "x":"x"
        },
        "Others":{
          "Condiments": "x",
          "Oils": "x",
          "Spices": "x",
          "Sweets": "x"
        }},
        "Food Taboos":{
          "Pregancy & Nutrition":{
            "x":"x",
            "x":"x"
          },
          "Growth & Nutrition":{
            "x":"x",
            "x":"x"
          },
          "Health Related":{
            "x":"x",
            "x":"x"
          }}},
        "Argentina":{
          "Food Practices":{
            "Religious & Cultural Infulences": {
              "x": "x",
              "x": "x",
              "x": "x"
            },
            "Meal Patterns":{
              "x": "x",
              "x": "x",
              "x": "x"
            },
            "Eating Practices":{
              "x": "x",
              "x": "x",
              "x": "x"
            },
            "Cooking Methods":{
              "x": "x",
              "x": "x",
              "x": "x"
            }},
            "Tradition Dishes":{
              "Non-Vegetarian":{
                "x": "x",
                "x": "x"
              },
              "Vegetarian":{
                "x": "x",
                "x": "x"
              },
              "Desserts":{
                "x": "x",
                "x": "x"
              },
              "Drinks":{
                "x": "x",
                "x": "x"
              }},
          "Popular Food Items":{
          "Dairy & Non-Dairy Products": {
            "x": "x",
            "x": "x",
            "x": "x"
          },
          "Meats & Meat Alternatives": {
            "x": "x",
            "x": "x",
            "x": "x"
          },
          "Fruits & Vegetables": {
            "x":"x",
            "x": "x",
            "x":"x"
          },
          "Grains Breads & Cereals": {
            "x":"x",
            "x": "x",
            "x":"x"
          },
          "Others":{
            "Condiments": "x",
            "Oils": "x",
            "Spices": "x",
            "Sweets": "x"
          }},
          "Food Taboos":{
            "Pregancy & Nutrition":{
              "x":"x",
              "x":"x"
            },
            "Growth & Nutrition":{
              "x":"x",
              "x":"x"
            },
            "Health Related":{
              "x":"x",
              "x":"x"
            }},
            "Food Taboos":{
              "Pregancy & Nutrition":{
                "x":"x",
                "x":"x"
              },
              "Growth & Nutrition":{
                "x":"x",
                "x":"x"
              },
              "Health Related":{
                "x":"x",
                "x":"x"
              }}},
          "Brazil":{
            "Food Practices":{
              "Religious & Cultural Infulences": {
                "x": "x",
                "x": "x",
                "x": "x"
              },
              "Meal Patterns":{
                "x": "x",
                "x": "x",
                "x": "x"
              },
              "Eating Practices":{
                "x": "x",
                "x": "x",
                "x": "x"
              },
              "Cooking Methods":{
                "x": "x",
                "x": "x",
                "x": "x"
              }},
              "Tradition Dishes":{
                "Non-Vegetarian":{
                  "x": "x",
                  "x": "x"
                },
                "Vegetarian":{
                  "x": "x",
                  "x": "x"
                },
                "Desserts":{
                  "x": "x",
                  "x": "x"
                },
                "Drinks":{
                  "x": "x",
                  "x": "x"
                }},
            "Popular Food Items":{
            "Dairy & Non-Dairy Products": {
              "x": "x",
              "x": "x",
              "x": "x"
            },
            "Meats & Meat Alternatives": {
              "x": "x",
              "x": "x",
              "x": "x"
            },
            "Fruits & Vegetables": {
              "x":"x",
              "x": "x",
              "x":"x"
            },
            "Grains Breads & Cereals": {
              "x":"x",
              "x": "x",
              "x":"x"
            },
            "Others":{
              "Condiments": "x",
              "Oils": "x",
              "Spices": "x",
              "Sweets": "x"
            }},
            "Food Taboos":{
              "Pregancy & Nutrition":{
                "x":"x",
                "x":"x"
              },
              "Growth & Nutrition":{
                "x":"x",
                "x":"x"
              },
              "Health Related":{
                "x":"x",
                "x":"x"
              }}},
            "Cameroon":{
              "Food Practices":{
                "Religious & Cultural Infulences": {
                  "x": "x",
                  "x": "x",
                  "x": "x"
                },
                "Meal Patterns":{
                  "x": "x",
                  "x": "x",
                  "x": "x"
                },
                "Eating Practices":{
                  "x": "x",
                  "x": "x",
                  "x": "x"
                },
                "Cooking Methods":{
                  "x": "x",
                  "x": "x",
                  "x": "x"
                }},
                "Tradition Dishes":{
                  "Non-Vegetarian":{
                    "x": "x",
                    "x": "x"
                  },
                  "Vegetarian":{
                    "x": "x",
                    "x": "x"
                  },
                  "Desserts":{
                    "x": "x",
                    "x": "x"
                  },
                  "Drinks":{
                    "x": "x",
                    "x": "x"
                  }},
              "Popular Food Items":{
              "Dairy & Non-Dairy Products": {
                "x": "x",
                "x": "x",
                "x": "x"
              },
              "Meats & Meat Alternatives": {
                "x": "x",
                "x": "x",
                "x": "x"
              },
              "Fruits & Vegetables": {
                "x":"x",
                "x": "x",
                "x":"x"
              },
              "Grains Breads & Cereals": {
                "x":"x",
                "x": "x",
                "x":"x"
              },
              "Others":{
                "Condiments": "x",
                "Oils": "x",
                "Spices": "x",
                "Sweets": "x"
              }},
              "Food Taboos":{
                "Pregancy & Nutrition":{
                  "x":"x",
                  "x":"x"
                },
                "Growth & Nutrition":{
                  "x":"x",
                  "x":"x"
                },
                "Health Related":{
                  "x":"x",
                  "x":"x"
                }}},
              "China":{
                "Food Practices":{
                  "Religious & Cultural Infulences": {
                    "x": "x",
                    "x": "x",
                    "x": "x"
                  },
                  "Meal Patterns":{
                    "x": "x",
                    "x": "x",
                    "x": "x"
                  },
                  "Eating Practices":{
                    "x": "x",
                    "x": "x",
                    "x": "x"
                  },
                  "Cooking Methods":{
                    "x": "x",
                    "x": "x",
                    "x": "x"
                  }},
                  "Tradition Dishes":{
                    "Non-Vegetarian":{
                      "x": "x",
                      "x": "x"
                    },
                    "Vegetarian":{
                      "x": "x",
                      "x": "x"
                    },
                    "Desserts":{
                      "x": "x",
                      "x": "x"
                    },
                    "Drinks":{
                      "x": "x",
                      "x": "x"
                    }},
                "Popular Food Items":{
                "Dairy & Non-Dairy Products": {
                  "x": "x",
                  "x": "x",
                  "x": "x"
                },
                "Meats & Meat Alternatives": {
                  "x": "x",
                  "x": "x",
                  "x": "x"
                },
                "Fruits & Vegetables": {
                  "x":"x",
                  "x": "x",
                  "x":"x"
                },
                "Grains Breads & Cereals": {
                  "x":"x",
                  "x": "x",
                  "x":"x"
                },
                "Others":{
                  "Condiments": "x",
                  "Oils": "x",
                  "Spices": "x",
                  "Sweets": "x"
                }},
                "Food Taboos":{
                  "Pregancy & Nutrition":{
                    "x":"x",
                    "x":"x"
                  },
                  "Growth & Nutrition":{
                    "x":"x",
                    "x":"x"
                  },
                  "Health Related":{
                    "x":"x",
                    "x":"x"
                  }}},
                "Columbia":{
                  "Food Practices":{
                    "Religious & Cultural Infulences": {
                      "x": "x",
                      "x": "x",
                      "x": "x"
                    },
                    "Meal Patterns":{
                      "x": "x",
                      "x": "x",
                      "x": "x"
                    },
                    "Eating Practices":{
                      "x": "x",
                      "x": "x",
                      "x": "x"
                    },
                    "Cooking Methods":{
                      "x": "x",
                      "x": "x",
                      "x": "x"
                    }},
                    "Tradition Dishes":{
                      "Non-Vegetarian":{
                        "x": "x",
                        "x": "x"
                      },
                      "Vegetarian":{
                        "x": "x",
                        "x": "x"
                      },
                      "Desserts":{
                        "x": "x",
                        "x": "x"
                      },
                      "Drinks":{
                        "x": "x",
                        "x": "x"
                      }},
                  "Popular Food Items":{
                  "Dairy & Non-Dairy Products": {
                    "x": "x",
                    "x": "x",
                    "x": "x"
                  },
                  "Meats & Meat Alternatives": {
                    "x": "x",
                    "x": "x",
                    "x": "x"
                  },
                  "Fruits & Vegetables": {
                    "x":"x",
                    "x": "x",
                    "x":"x"
                  },
                  "Grains Breads & Cereals": {
                    "x":"x",
                    "x": "x",
                    "x":"x"
                  },
                  "Others":{
                    "Condiments": "x",
                    "Oils": "x",
                    "Spices": "x",
                    "Sweets": "x"
                  }},
                  "Food Taboos":{
                    "Pregancy & Nutrition":{
                      "x":"x",
                      "x":"x"
                    },
                    "Growth & Nutrition":{
                      "x":"x",
                      "x":"x"
                    },
                    "Health Related":{
                      "x":"x",
                      "x":"x"
                    }}},
                  "Costa Rica":{
                    "Food Practices":{
                      "Religious & Cultural Infulences": {
                        "x": "x",
                        "x": "x",
                        "x": "x"
                      },
                      "Meal Patterns":{
                        "x": "x",
                        "x": "x",
                        "x": "x"
                      },
                      "Eating Practices":{
                        "x": "x",
                        "x": "x",
                        "x": "x"
                      },
                      "Cooking Methods":{
                        "x": "x",
                        "x": "x",
                        "x": "x"
                      }},
                      "Tradition Dishes":{
                        "Non-Vegetarian":{
                          "x": "x",
                          "x": "x"
                        },
                        "Vegetarian":{
                          "x": "x",
                          "x": "x"
                        },
                        "Desserts":{
                          "x": "x",
                          "x": "x"
                        },
                        "Drinks":{
                          "x": "x",
                          "x": "x"
                        }},
                    "Popular Food Items":{
                    "Dairy & Non-Dairy Products": {
                      "x": "x",
                      "x": "x",
                      "x": "x"
                    },
                    "Meats & Meat Alternatives": {
                      "x": "x",
                      "x": "x",
                      "x": "x"
                    },
                    "Fruits & Vegetables": {
                      "x":"x",
                      "x": "x",
                      "x":"x"
                    },
                    "Grains Breads & Cereals": {
                      "x":"x",
                      "x": "x",
                      "x":"x"
                    },
                    "Others":{
                      "Condiments": "x",
                      "Oils": "x",
                      "Spices": "x",
                      "Sweets": "x"
                    }},
                    "Food Taboos":{
                      "Pregancy & Nutrition":{
                        "x":"x",
                        "x":"x"
                      },
                      "Growth & Nutrition":{
                        "x":"x",
                        "x":"x"
                      },
                      "Health Related":{
                        "x":"x",
                        "x":"x"
                      }}},
                    "Cuba":{
                      "Food Practices":{
                        "Religious & Cultural Infulences": {
                          "x": "x",
                          "x": "x",
                          "x": "x"
                        },
                        "Meal Patterns":{
                          "x": "x",
                          "x": "x",
                          "x": "x"
                        },
                        "Eating Practices":{
                          "x": "x",
                          "x": "x",
                          "x": "x"
                        },
                        "Cooking Methods":{
                          "x": "x",
                          "x": "x",
                          "x": "x"
                        }},
                        "Tradition Dishes":{
                          "Non-Vegetarian":{
                            "x": "x",
                            "x": "x"
                          },
                          "Vegetarian":{
                            "x": "x",
                            "x": "x"
                          },
                          "Desserts":{
                            "x": "x",
                            "x": "x"
                          },
                          "Drinks":{
                            "x": "x",
                            "x": "x"
                          }},
                      "Popular Food Items":{
                      "Dairy & Non-Dairy Products": {
                        "x": "x",
                        "x": "x",
                        "x": "x"
                      },
                      "Meats & Meat Alternatives": {
                        "x": "x",
                        "x": "x",
                        "x": "x"
                      },
                      "Fruits & Vegetables": {
                        "x":"x",
                        "x": "x",
                        "x":"x"
                      },
                      "Grains Breads & Cereals": {
                        "x":"x",
                        "x": "x",
                        "x":"x"
                      },
                      "Others":{
                        "Condiments": "x",
                        "Oils": "x",
                        "Spices": "x",
                        "Sweets": "x"
                      }},
                      "Food Taboos":{
                        "Pregancy & Nutrition":{
                          "x":"x",
                          "x":"x"
                        },
                        "Growth & Nutrition":{
                          "x":"x",
                          "x":"x"
                        },
                        "Health Related":{
                          "x":"x",
                          "x":"x"
                        }}},
                      "Ethiopia":{
                        "Food Practices":{
                          "Religious & Cultural Infulences": {
                            "x": "x",
                            "x": "x",
                            "x": "x"
                          },
                          "Meal Patterns":{
                            "x": "x",
                            "x": "x",
                            "x": "x"
                          },
                          "Eating Practices":{
                            "x": "x",
                            "x": "x",
                            "x": "x"
                          },
                          "Cooking Methods":{
                            "x": "x",
                            "x": "x",
                            "x": "x"
                          }},
                          "Tradition Dishes":{
                            "Non-Vegetarian":{
                              "x": "x",
                              "x": "x"
                            },
                            "Vegetarian":{
                              "x": "x",
                              "x": "x"
                            },
                            "Desserts":{
                              "x": "x",
                              "x": "x"
                            },
                            "Drinks":{
                              "x": "x",
                              "x": "x"
                            }},
                        "Popular Food Items":{
                        "Dairy & Non-Dairy Products": {
                          "x": "x",
                          "x": "x",
                          "x": "x"
                        },
                        "Meats & Meat Alternatives": {
                          "x": "x",
                          "x": "x",
                          "x": "x"
                        },
                        "Fruits & Vegetables": {
                          "x":"x",
                          "x": "x",
                          "x":"x"
                        },
                        "Grains Breads & Cereals": {
                          "x":"x",
                          "x": "x",
                          "x":"x"
                        },
                        "Others":{
                          "Condiments": "x",
                          "Oils": "x",
                          "Spices": "x",
                          "Sweets": "x"
                        }},
                        "Food Taboos":{
                          "Pregancy & Nutrition":{
                            "x":"x",
                            "x":"x"
                          },
                          "Growth & Nutrition":{
                            "x":"x",
                            "x":"x"
                          },
                          "Health Related":{
                            "x":"x",
                            "x":"x"
                          }}},
                        "Ghana":{
                          "Food Practices":{
                            "Religious & Cultural Infulences": {
                              "x": "x",
                              "x": "x",
                              "x": "x"
                            },
                            "Meal Patterns":{
                              "x": "x",
                              "x": "x",
                              "x": "x"
                            },
                            "Eating Practices":{
                              "x": "x",
                              "x": "x",
                              "x": "x"
                            },
                            "Cooking Methods":{
                              "x": "x",
                              "x": "x",
                              "x": "x"
                            }},
                            "Tradition Dishes":{
                              "Non-Vegetarian":{
                                "x": "x",
                                "x": "x"
                              },
                              "Vegetarian":{
                                "x": "x",
                                "x": "x"
                              },
                              "Desserts":{
                                "x": "x",
                                "x": "x"
                              },
                              "Drinks":{
                                "x": "x",
                                "x": "x"
                              }},
                          "Popular Food Items":{
                          "Dairy & Non-Dairy Products": {
                            "x": "x",
                            "x": "x",
                            "x": "x"
                          },
                          "Meats & Meat Alternatives": {
                            "x": "x",
                            "x": "x",
                            "x": "x"
                          },
                          "Fruits & Vegetables": {
                            "x":"x",
                            "x": "x",
                            "x":"x"
                          },
                          "Grains Breads & Cereals": {
                            "x":"x",
                            "x": "x",
                            "x":"x"
                          },
                          "Others":{
                            "Condiments": "x",
                            "Oils": "x",
                            "Spices": "x",
                            "Sweets": "x"
                          }},
                          "Food Taboos":{
                            "Pregancy & Nutrition":{
                              "x":"x",
                              "x":"x"
                            },
                            "Growth & Nutrition":{
                              "x":"x",
                              "x":"x"
                            },
                            "Health Related":{
                              "x":"x",
                              "x":"x"
                            }}},
                          "Haiti":{
                            "Food Practices":{
                              "Religious & Cultural Infulences": {
                                "x": "x",
                                "x": "x",
                                "x": "x"
                              },
                              "Meal Patterns":{
                                "x": "x",
                                "x": "x",
                                "x": "x"
                              },
                              "Eating Practices":{
                                "x": "x",
                                "x": "x",
                                "x": "x"
                              },
                              "Cooking Methods":{
                                "x": "x",
                                "x": "x",
                                "x": "x"
                              }},
                              "Tradition Dishes":{
                                "Non-Vegetarian":{
                                  "x": "x",
                                  "x": "x"
                                },
                                "Vegetarian":{
                                  "x": "x",
                                  "x": "x"
                                },
                                "Desserts":{
                                  "x": "x",
                                  "x": "x"
                                },
                                "Drinks":{
                                  "x": "x",
                                  "x": "x"
                                }},
                            "Popular Food Items":{
                            "Dairy & Non-Dairy Products": {
                              "x": "x",
                              "x": "x",
                              "x": "x"
                            },
                            "Meats & Meat Alternatives": {
                              "x": "x",
                              "x": "x",
                              "x": "x"
                            },
                            "Fruits & Vegetables": {
                              "x":"x",
                              "x": "x",
                              "x":"x"
                            },
                            "Grains Breads & Cereals": {
                              "x":"x",
                              "x": "x",
                              "x":"x"
                            },
                            "Others":{
                              "Condiments": "x",
                              "Oils": "x",
                              "Spices": "x",
                              "Sweets": "x"
                            }},
                            "Food Taboos":{
                              "Pregancy & Nutrition":{
                                "x":"x",
                                "x":"x"
                              },
                              "Growth & Nutrition":{
                                "x":"x",
                                "x":"x"
                              },
                              "Health Related":{
                                "x":"x",
                                "x":"x"
                              }}},
                            "India":{
                              "Food Practices":{
                                "Religious & Cultural Infulences": {
                                  "x": "x",
                                  "x": "x",
                                  "x": "x"
                                },
                                "Meal Patterns":{
                                  "x": "x",
                                  "x": "x",
                                  "x": "x"
                                },
                                "Eating Practices":{
                                  "x": "x",
                                  "x": "x",
                                  "x": "x"
                                },
                                "Cooking Methods":{
                                  "x": "x",
                                  "x": "x",
                                  "x": "x"
                                }},
                                "Tradition Dishes":{
                                  "Non-Vegetarian":{
                                    "x": "x",
                                    "x": "x"
                                  },
                                  "Vegetarian":{
                                    "x": "x",
                                    "x": "x"
                                  },
                                  "Desserts":{
                                    "x": "x",
                                    "x": "x"
                                  },
                                  "Drinks":{
                                    "x": "x",
                                    "x": "x"
                                  }},
                              "Popular Food Items":{
                              "Dairy & Non-Dairy Products": {
                                "x": "x",
                                "x": "x",
                                "x": "x"
                              },
                              "Meats & Meat Alternatives": {
                                "x": "x",
                                "x": "x",
                                "x": "x"
                              },
                              "Fruits & Vegetables": {
                                "x":"x",
                                "x": "x",
                                "x":"x"
                              },
                              "Grains Breads & Cereals": {
                                "x":"x",
                                "x": "x",
                                "x":"x"
                              },
                              "Others":{
                                "Condiments": "x",
                                "Oils": "x",
                                "Spices": "x",
                                "Sweets": "x"
                              }},
                              "Food Taboos":{
                                "Pregancy & Nutrition":{
                                  "x":"x",
                                  "x":"x"
                                },
                                "Growth & Nutrition":{
                                  "x":"x",
                                  "x":"x"
                                },
                                "Health Related":{
                                  "x":"x",
                                  "x":"x"
                                }}},
                              "Indonesia":{
                                "Food Practices":{
                                  "Religious & Cultural Infulences": {
                                    "x": "x",
                                    "x": "x",
                                    "x": "x"
                                  },
                                  "Meal Patterns":{
                                    "x": "x",
                                    "x": "x",
                                    "x": "x"
                                  },
                                  "Eating Practices":{
                                    "x": "x",
                                    "x": "x",
                                    "x": "x"
                                  },
                                  "Cooking Methods":{
                                    "x": "x",
                                    "x": "x",
                                    "x": "x"
                                  }},
                                  "Tradition Dishes":{
                                    "Non-Vegetarian":{
                                      "x": "x",
                                      "x": "x"
                                    },
                                    "Vegetarian":{
                                      "x": "x",
                                      "x": "x"
                                    },
                                    "Desserts":{
                                      "x": "x",
                                      "x": "x"
                                    },
                                    "Drinks":{
                                      "x": "x",
                                      "x": "x"
                                    }},
                                "Popular Food Items":{
                                "Dairy & Non-Dairy Products": {
                                  "x": "x",
                                  "x": "x",
                                  "x": "x"
                                },
                                "Meats & Meat Alternatives": {
                                  "x": "x",
                                  "x": "x",
                                  "x": "x"
                                },
                                "Fruits & Vegetables": {
                                  "x":"x",
                                  "x": "x",
                                  "x":"x"
                                },
                                "Grains Breads & Cereals": {
                                  "x":"x",
                                  "x": "x",
                                  "x":"x"
                                },
                                "Others":{
                                  "Condiments": "x",
                                  "Oils": "x",
                                  "Spices": "x",
                                  "Sweets": "x"
                                }},
                                "Food Taboos":{
                                  "Pregancy & Nutrition":{
                                    "x":"x",
                                    "x":"x"
                                  },
                                  "Growth & Nutrition":{
                                    "x":"x",
                                    "x":"x"
                                  },
                                  "Health Related":{
                                    "x":"x",
                                    "x":"x"
                                  }}},
                                "Israel":{
                                  "Food Practices":{
                                    "Religious & Cultural Infulences": {
                                      "x": "x",
                                      "x": "x",
                                      "x": "x"
                                    },
                                    "Meal Patterns":{
                                      "x": "x",
                                      "x": "x",
                                      "x": "x"
                                    },
                                    "Eating Practices":{
                                      "x": "x",
                                      "x": "x",
                                      "x": "x"
                                    },
                                    "Cooking Methods":{
                                      "x": "x",
                                      "x": "x",
                                      "x": "x"
                                    }},
                                    "Tradition Dishes":{
                                      "Non-Vegetarian":{
                                        "x": "x",
                                        "x": "x"
                                      },
                                      "Vegetarian":{
                                        "x": "x",
                                        "x": "x"
                                      },
                                      "Desserts":{
                                        "x": "x",
                                        "x": "x"
                                      },
                                      "Drinks":{
                                        "x": "x",
                                        "x": "x"
                                      }},
                                  "Popular Food Items":{
                                  "Dairy & Non-Dairy Products": {
                                    "x": "x",
                                    "x": "x",
                                    "x": "x"
                                  },
                                  "Meats & Meat Alternatives": {
                                    "x": "x",
                                    "x": "x",
                                    "x": "x"
                                  },
                                  "Fruits & Vegetables": {
                                    "x":"x",
                                    "x": "x",
                                    "x":"x"
                                  },
                                  "Grains Breads & Cereals": {
                                    "x":"x",
                                    "x": "x",
                                    "x":"x"
                                  },
                                  "Others":{
                                    "Condiments": "x",
                                    "Oils": "x",
                                    "Spices": "x",
                                    "Sweets": "x"
                                  }},
                                  "Food Taboos":{
                                    "Pregancy & Nutrition":{
                                      "x":"x",
                                      "x":"x"
                                    },
                                    "Growth & Nutrition":{
                                      "x":"x",
                                      "x":"x"
                                    },
                                    "Health Related":{
                                      "x":"x",
                                      "x":"x"
                                    }}},
                                  "Italy":{
                                    "Food Practices":{
                                      "Religious & Cultural Infulences": {
                                        "x": "x",
                                        "x": "x",
                                        "x": "x"
                                      },
                                      "Meal Patterns":{
                                        "x": "x",
                                        "x": "x",
                                        "x": "x"
                                      },
                                      "Eating Practices":{
                                        "x": "x",
                                        "x": "x",
                                        "x": "x"
                                      },
                                      "Cooking Methods":{
                                        "x": "x",
                                        "x": "x",
                                        "x": "x"
                                      }},
                                      "Tradition Dishes":{
                                        "Non-Vegetarian":{
                                          "x": "x",
                                          "x": "x"
                                        },
                                        "Vegetarian":{
                                          "x": "x",
                                          "x": "x"
                                        },
                                        "Desserts":{
                                          "x": "x",
                                          "x": "x"
                                        },
                                        "Drinks":{
                                          "x": "x",
                                          "x": "x"
                                        }},
                                    "Popular Food Items":{
                                    "Dairy & Non-Dairy Products": {
                                      "x": "x",
                                      "x": "x",
                                      "x": "x"
                                    },
                                    "Meats & Meat Alternatives": {
                                      "x": "x",
                                      "x": "x",
                                      "x": "x"
                                    },
                                    "Fruits & Vegetables": {
                                      "x":"x",
                                      "x": "x",
                                      "x":"x"
                                    },
                                    "Grains & Breads & Cereals": {
                                      "x":"x",
                                      "x": "x",
                                      "x":"x"
                                    },
                                    "Others":{
                                      "Condiments": "x",
                                      "Oils": "x",
                                      "Spices": "x",
                                      "Sweets": "x"
                                    }},
                                    "Food Taboos":{
                                      "Pregancy & Nutrition":{
                                        "x":"x",
                                        "x":"x"
                                      },
                                      "Growth & Nutrition":{
                                        "x":"x",
                                        "x":"x"
                                      },
                                      "Health Related":{
                                        "x":"x",
                                        "x":"x"
                                      }}},
                                    "Jamaica":{
                                      "Food Practices":{
                                        "Religious & Cultural Infulences": {
                                          "x": "x",
                                          "x": "x",
                                          "x": "x"
                                        },
                                        "Meal Patterns":{
                                          "x": "x",
                                          "x": "x",
                                          "x": "x"
                                        },
                                        "Eating Practices":{
                                          "x": "x",
                                          "x": "x",
                                          "x": "x"
                                        },
                                        "Cooking Methods":{
                                          "x": "x",
                                          "x": "x",
                                          "x": "x"
                                        }},
                                        "Tradition Dishes":{
                                          "Non-Vegetarian":{
                                            "x": "x",
                                            "x": "x"
                                          },
                                          "Vegetarian":{
                                            "x": "x",
                                            "x": "x"
                                          },
                                          "Desserts":{
                                            "x": "x",
                                            "x": "x"
                                          },
                                          "Drinks":{
                                            "x": "x",
                                            "x": "x"
                                          }},
                                      "Popular Food Items":{
                                      "Dairy & Non-Dairy Products": {
                                        "x": "x",
                                        "x": "x",
                                        "x": "x"
                                      },
                                      "Meats & Meat Alternatives": {
                                        "x": "x",
                                        "x": "x",
                                        "x": "x"
                                      },
                                      "Fruits & Vegetables": {
                                        "x":"x",
                                        "x": "x",
                                        "x":"x"
                                      },
                                      "Grains Breads & Cereals": {
                                        "x":"x",
                                        "x": "x",
                                        "x":"x"
                                      },
                                      "Others":{
                                        "Condiments": "x",
                                        "Oils": "x",
                                        "Spices": "x",
                                        "Sweets": "x"
                                      }},
                                      "Food Taboos":{
                                        "Pregancy & Nutrition":{
                                          "x":"x",
                                          "x":"x"
                                        },
                                        "Growth & Nutrition":{
                                          "x":"x",
                                          "x":"x"
                                        },
                                        "Health Related":{
                                          "x":"x",
                                          "x":"x"
                                        }}},
                                      "Japan":{
                                        "Food Practices":{
                                          "Religious & Cultural Infulences": {
                                            "x": "x",
                                            "x": "x",
                                            "x": "x"
                                          },
                                          "Meal Patterns":{
                                            "x": "x",
                                            "x": "x",
                                            "x": "x"
                                          },
                                          "Eating Practices":{
                                            "x": "x",
                                            "x": "x",
                                            "x": "x"
                                          },
                                          "Cooking Methods":{
                                            "x": "x",
                                            "x": "x",
                                            "x": "x"
                                          }},
                                          "Tradition Dishes":{
                                            "Non-Vegetarian":{
                                              "x": "x",
                                              "x": "x"
                                            },
                                            "Vegetarian":{
                                              "x": "x",
                                              "x": "x"
                                            },
                                            "Desserts":{
                                              "x": "x",
                                              "x": "x"
                                            },
                                            "Drinks":{
                                              "x": "x",
                                              "x": "x"
                                            }},
                                        "Popular Food Items":{
                                        "Dairy & Non-Dairy Products": {
                                          "x": "x",
                                          "x": "x",
                                          "x": "x"
                                        },
                                        "Meats & Meat Alternatives": {
                                          "x": "x",
                                          "x": "x",
                                          "x": "x"
                                        },
                                        "Fruits & Vegetables": {
                                          "x":"x",
                                          "x": "x",
                                          "x":"x"
                                        },
                                        "Grains Breads & Cereals": {
                                          "x":"x",
                                          "x": "x",
                                          "x":"x"
                                        },
                                        "Others":{
                                          "Condiments": "x",
                                          "Oils": "x",
                                          "Spices": "x",
                                          "Sweets": "x"
                                        }},
                                        "Food Taboos":{
                                          "Pregancy & Nutrition":{
                                            "x":"x",
                                            "x":"x"
                                          },
                                          "Growth & Nutrition":{
                                            "x":"x",
                                            "x":"x"
                                          },
                                          "Health Related":{
                                            "x":"x",
                                            "x":"x"
                                          }}},
                                        "Jordan":{
                                          "Food Practices":{
                                            "Religious & Cultural Infulences": {
                                              "x": "x",
                                              "x": "x",
                                              "x": "x"
                                            },
                                            "Meal Patterns":{
                                              "x": "x",
                                              "x": "x",
                                              "x": "x"
                                            },
                                            "Eating Practices":{
                                              "x": "x",
                                              "x": "x",
                                              "x": "x"
                                            },
                                            "Cooking Methods":{
                                              "x": "x",
                                              "x": "x",
                                              "x": "x"
                                            }},
                                            "Tradition Dishes":{
                                              "Non-Vegetarian":{
                                                "x": "x",
                                                "x": "x"
                                              },
                                              "Vegetarian":{
                                                "x": "x",
                                                "x": "x"
                                              },
                                              "Desserts":{
                                                "x": "x",
                                                "x": "x"
                                              },
                                              "Drinks":{
                                                "x": "x",
                                                "x": "x"
                                              }},
                                          "Popular Food Items":{
                                          "Dairy & Non-Dairy Products": {
                                            "x": "x",
                                            "x": "x",
                                            "x": "x"
                                          },
                                          "Meats & Meat Alternatives": {
                                            "x": "x",
                                            "x": "x",
                                            "x": "x"
                                          },
                                          "Fruits & Vegetables": {
                                            "x":"x",
                                            "x": "x",
                                            "x":"x"
                                          },
                                          "Grains Breads & Cereals": {
                                            "x":"x",
                                            "x": "x",
                                            "x":"x"
                                          },
                                          "Others":{
                                            "Condiments": "x",
                                            "Oils": "x",
                                            "Spices": "x",
                                            "Sweets": "x"
                                          }},
                                          "Food Taboos":{
                                            "Pregancy & Nutrition":{
                                              "x":"x",
                                              "x":"x"
                                            },
                                            "Growth & Nutrition":{
                                              "x":"x",
                                              "x":"x"
                                            },
                                            "Health Related":{
                                              "x":"x",
                                              "x":"x"
                                            }}},
                                          "Korea":{
                                            "Food Practices":{
                                              "Religious & Cultural Infulences": {
                                                "x": "x",
                                                "x": "x",
                                                "x": "x"
                                              },
                                              "Meal Patterns":{
                                                "x": "x",
                                                "x": "x",
                                                "x": "x"
                                              },
                                              "Eating Practices":{
                                                "x": "x",
                                                "x": "x",
                                                "x": "x"
                                              },
                                              "Cooking Methods":{
                                                "x": "x",
                                                "x": "x",
                                                "x": "x"
                                              }},
                                              "Tradition Dishes":{
                                                "Non-Vegetarian":{
                                                  "x": "x",
                                                  "x": "x"
                                                },
                                                "Vegetarian":{
                                                  "x": "x",
                                                  "x": "x"
                                                },
                                                "Desserts":{
                                                  "x": "x",
                                                  "x": "x"
                                                },
                                                "Drinks":{
                                                  "x": "x",
                                                  "x": "x"
                                                }},
                                            "Popular Food Items":{
                                            "Dairy & Non-Dairy Products": {
                                              "x": "x",
                                              "x": "x",
                                              "x": "x"
                                            },
                                            "Meats & Meat Alternatives": {
                                              "x": "x",
                                              "x": "x",
                                              "x": "x"
                                            },
                                            "Fruits & Vegetables": {
                                              "x":"x",
                                              "x": "x",
                                              "x":"x"
                                            },
                                            "Grains Breads & Cereals": {
                                              "x":"x",
                                              "x": "x",
                                              "x":"x"
                                            },
                                            "Others":{
                                              "Condiments": "x",
                                              "Oils": "x",
                                              "Spices": "x",
                                              "Sweets": "x"
                                            }},
                                            "Food Taboos":{
                                              "Pregancy & Nutrition":{
                                                "x":"x",
                                                "x":"x"
                                              },
                                              "Growth & Nutrition":{
                                                "x":"x",
                                                "x":"x"
                                              },
                                              "Health Related":{
                                                "x":"x",
                                                "x":"x"
                                              }}},
                                            "Lebanon":{
                                              "Food Practices":{
                                                "Religious & Cultural Infulences": {
                                                  "x": "x",
                                                  "x": "x",
                                                  "x": "x"
                                                },
                                                "Meal Patterns":{
                                                  "x": "x",
                                                  "x": "x",
                                                  "x": "x"
                                                },
                                                "Eating Practices":{
                                                  "x": "x",
                                                  "x": "x",
                                                  "x": "x"
                                                },
                                                "Cooking Methods":{
                                                  "x": "x",
                                                  "x": "x",
                                                  "x": "x"
                                                }},
                                                "Tradition Dishes":{
                                                  "Non-Vegetarian":{
                                                    "x": "x",
                                                    "x": "x"
                                                  },
                                                  "Vegetarian":{
                                                    "x": "x",
                                                    "x": "x"
                                                  },
                                                  "Desserts":{
                                                    "x": "x",
                                                    "x": "x"
                                                  },
                                                  "Drinks":{
                                                    "x": "x",
                                                    "x": "x"
                                                  }},
                                              "Popular Food Items":{
                                              "Dairy & Non-Dairy Products": {
                                                "x": "x",
                                                "x": "x",
                                                "x": "x"
                                              },
                                              "Meats & Meat Alternatives": {
                                                "x": "x",
                                                "x": "x",
                                                "x": "x"
                                              },
                                              "Fruits & Vegetables": {
                                                "x":"x",
                                                "x": "x",
                                                "x":"x"
                                              },
                                              "Grains Breads & Cereals": {
                                                "x":"x",
                                                "x": "x",
                                                "x":"x"
                                              },
                                              "Others":{
                                                "Condiments": "x",
                                                "Oils": "x",
                                                "Spices": "x",
                                                "Sweets": "x"
                                              }},
                                              "Food Taboos":{
                                                "Pregancy & Nutrition":{
                                                  "x":"x",
                                                  "x":"x"
                                                },
                                                "Growth & Nutrition":{
                                                  "x":"x",
                                                  "x":"x"
                                                },
                                                "Health Related":{
                                                  "x":"x",
                                                  "x":"x"
                                                }}},
                                              "Mexico":{
                                                "Food Practices":{
                                                  "Religious & Cultural Infulences": {
                                                    "x": "x",
                                                    "x": "x",
                                                    "x": "x"
                                                  },
                                                  "Meal Patterns":{
                                                    "x": "x",
                                                    "x": "x",
                                                    "x": "x"
                                                  },
                                                  "Eating Practices":{
                                                    "x": "x",
                                                    "x": "x",
                                                    "x": "x"
                                                  },
                                                  "Cooking Methods":{
                                                    "x": "x",
                                                    "x": "x",
                                                    "x": "x"
                                                  }},
                                                  "Tradition Dishes":{
                                                    "Non-Vegetarian":{
                                                      "x": "x",
                                                      "x": "x"
                                                    },
                                                    "Vegetarian":{
                                                      "x": "x",
                                                      "x": "x"
                                                    },
                                                    "Desserts":{
                                                      "x": "x",
                                                      "x": "x"
                                                    },
                                                    "Drinks":{
                                                      "x": "x",
                                                      "x": "x"
                                                    }},
                                                "Popular Food Items":{
                                                "Dairy & Non-Dairy Products": {
                                                  "x": "x",
                                                  "x": "x",
                                                  "x": "x"
                                                },
                                                "Meats & Meat Alternatives": {
                                                  "x": "x",
                                                  "x": "x",
                                                  "x": "x"
                                                },
                                                "Fruits & Vegetables": {
                                                  "x":"x",
                                                  "x": "x",
                                                  "x":"x"
                                                },
                                                "Grains Breads & Cereals": {
                                                  "x":"x",
                                                  "x": "x",
                                                  "x":"x"
                                                },
                                                "Others":{
                                                  "Condiments": "x",
                                                  "Oils": "x",
                                                  "Spices": "x",
                                                  "Sweets": "x"
                                                }},
                                                "Food Taboos":{
                                                  "Pregancy & Nutrition":{
                                                    "x":"x",
                                                    "x":"x"
                                                  },
                                                  "Growth & Nutrition":{
                                                    "x":"x",
                                                    "x":"x"
                                                  },
                                                  "Health Related":{
                                                    "x":"x",
                                                    "x":"x"
                                                  }}},
                                                "Morocco":{
                                                  "Food Practices":{
                                                    "Religious & Cultural Infulences": {
                                                      "x": "x",
                                                      "x": "x",
                                                      "x": "x"
                                                    },
                                                    "Meal Patterns":{
                                                      "x": "x",
                                                      "x": "x",
                                                      "x": "x"
                                                    },
                                                    "Eating Practices":{
                                                      "x": "x",
                                                      "x": "x",
                                                      "x": "x"
                                                    },
                                                    "Cooking Methods":{
                                                      "x": "x",
                                                      "x": "x",
                                                      "x": "x"
                                                    }},
                                                    "Tradition Dishes":{
                                                      "Non-Vegetarian":{
                                                        "x": "x",
                                                        "x": "x"
                                                      },
                                                      "Vegetarian":{
                                                        "x": "x",
                                                        "x": "x"
                                                      },
                                                      "Desserts":{
                                                        "x": "x",
                                                        "x": "x"
                                                      },
                                                      "Drinks":{
                                                        "x": "x",
                                                        "x": "x"
                                                      }},
                                                  "Popular Food Items":{
                                                  "Dairy & Non-Dairy Products": {
                                                    "x": "x",
                                                    "x": "x",
                                                    "x": "x"
                                                  },
                                                  "Meats & Meat Alternatives": {
                                                    "x": "x",
                                                    "x": "x",
                                                    "x": "x"
                                                  },
                                                  "Fruits & Vegetables": {
                                                    "x":"x",
                                                    "x": "x",
                                                    "x":"x"
                                                  },
                                                  "Grains Breads & Cereals": {
                                                    "x":"x",
                                                    "x": "x",
                                                    "x":"x"
                                                  },
                                                  "Others":{
                                                    "Condiments": "x",
                                                    "Oils": "x",
                                                    "Spices": "x",
                                                    "Sweets": "x"
                                                  }},
                                                  "Food Taboos":{
                                                    "Pregancy & Nutrition":{
                                                      "x":"x",
                                                      "x":"x"
                                                    },
                                                    "Growth & Nutrition":{
                                                      "x":"x",
                                                      "x":"x"
                                                    },
                                                    "Health Related":{
                                                      "x":"x",
                                                      "x":"x"
                                                    }}},
                                                  "Nigeria":{
                                                    "Food Practices":{
                                                      "Religious & Cultural Infulences": {
                                                        "x": "x",
                                                        "x": "x",
                                                        "x": "x"
                                                      },
                                                      "Meal Patterns":{
                                                        "x": "x",
                                                        "x": "x",
                                                        "x": "x"
                                                      },
                                                      "Eating Practices":{
                                                        "x": "x",
                                                        "x": "x",
                                                        "x": "x"
                                                      },
                                                      "Cooking Methods":{
                                                        "x": "x",
                                                        "x": "x",
                                                        "x": "x"
                                                      }},
                                                      "Tradition Dishes":{
                                                        "Non-Vegetarian":{
                                                          "x": "x",
                                                          "x": "x"
                                                        },
                                                        "Vegetarian":{
                                                          "x": "x",
                                                          "x": "x"
                                                        },
                                                        "Desserts":{
                                                          "x": "x",
                                                          "x": "x"
                                                        },
                                                        "Drinks":{
                                                          "x": "x",
                                                          "x": "x"
                                                        }},
                                                    "Popular Food Items":{
                                                    "Dairy & Non-Dairy Products": {
                                                      "x": "x",
                                                      "x": "x",
                                                      "x": "x"
                                                    },
                                                    "Meats & Meat Alternatives": {
                                                      "x": "x",
                                                      "x": "x",
                                                      "x": "x"
                                                    },
                                                    "Fruits & Vegetables": {
                                                      "x":"x",
                                                      "x": "x",
                                                      "x":"x"
                                                    },
                                                    "Grains Breads & Cereals": {
                                                      "x":"x",
                                                      "x": "x",
                                                      "x":"x"
                                                    },
                                                    "Others":{
                                                      "Condiments": "x",
                                                      "Oils": "x",
                                                      "Spices": "x",
                                                      "Sweets": "x"
                                                    }},
                                                    "Food Taboos":{
                                                      "Pregancy & Nutrition":{
                                                        "x":"x",
                                                        "x":"x"
                                                      },
                                                      "Growth & Nutrition":{
                                                        "x":"x",
                                                        "x":"x"
                                                      },
                                                      "Health Related":{
                                                        "x":"x",
                                                        "x":"x"
                                                      }}},
                                                    "Philippines":{
                                                      "Food Practices":{
                                                        "Religious & Cultural Infulences": {
                                                          "x": "x",
                                                          "x": "x",
                                                          "x": "x"
                                                        },
                                                        "Meal Patterns":{
                                                          "x": "x",
                                                          "x": "x",
                                                          "x": "x"
                                                        },
                                                        "Eating Practices":{
                                                          "x": "x",
                                                          "x": "x",
                                                          "x": "x"
                                                        },
                                                        "Cooking Methods":{
                                                          "x": "x",
                                                          "x": "x",
                                                          "x": "x"
                                                        }},
                                                        "Tradition Dishes":{
                                                          "Non-Vegetarian":{
                                                            "x": "x",
                                                            "x": "x"
                                                          },
                                                          "Vegetarian":{
                                                            "x": "x",
                                                            "x": "x"
                                                          },
                                                          "Desserts":{
                                                            "x": "x",
                                                            "x": "x"
                                                          },
                                                          "Drinks":{
                                                            "x": "x",
                                                            "x": "x"
                                                          }},
                                                      "Popular Food Items":{
                                                      "Dairy & Non-Dairy Products": {
                                                        "x": "x",
                                                        "x": "x",
                                                        "x": "x"
                                                      },
                                                      "Meats & Meat Alternatives": {
                                                        "x": "x",
                                                        "x": "x",
                                                        "x": "x"
                                                      },
                                                      "Fruits & Vegetables": {
                                                        "x":"x",
                                                        "x": "x",
                                                        "x":"x"
                                                      },
                                                      "Grains Breads & Cereals": {
                                                        "x":"x",
                                                        "x": "x",
                                                        "x":"x"
                                                      },
                                                      "Others":{
                                                        "Condiments": "x",
                                                        "Oils": "x",
                                                        "Spices": "x",
                                                        "Sweets": "x"
                                                      }},
                                                      "Food Taboos":{
                                                        "Pregancy & Nutrition":{
                                                          "x":"x",
                                                          "x":"x"
                                                        },
                                                        "Growth & Nutrition":{
                                                          "x":"x",
                                                          "x":"x"
                                                        },
                                                        "Health Related":{
                                                          "x":"x",
                                                          "x":"x"
                                                        }}},
                                                      "Serbia":{
                                                        "Food Practices":{
                                                          "Religious & Cultural Infulences": {
                                                            "x": "x",
                                                            "x": "x",
                                                            "x": "x"
                                                          },
                                                          "Meal Patterns":{
                                                            "x": "x",
                                                            "x": "x",
                                                            "x": "x"
                                                          },
                                                          "Eating Practices":{
                                                            "x": "x",
                                                            "x": "x",
                                                            "x": "x"
                                                          },
                                                          "Cooking Methods":{
                                                            "x": "x",
                                                            "x": "x",
                                                            "x": "x"
                                                          }},
                                                          "Tradition Dishes":{
                                                            "Non-Vegetarian":{
                                                              "x": "x",
                                                              "x": "x"
                                                            },
                                                            "Vegetarian":{
                                                              "x": "x",
                                                              "x": "x"
                                                            },
                                                            "Desserts":{
                                                              "x": "x",
                                                              "x": "x"
                                                            },
                                                            "Drinks":{
                                                              "x": "x",
                                                              "x": "x"
                                                            }},
                                                        "Popular Food Items":{
                                                        "Dairy & Non-Dairy Products": {
                                                          "x": "x",
                                                          "x": "x",
                                                          "x": "x"
                                                        },
                                                        "Meats & Meat Alternatives": {
                                                          "x": "x",
                                                          "x": "x",
                                                          "x": "x"
                                                        },
                                                        "Fruits & Vegetables": {
                                                          "x":"x",
                                                          "x": "x",
                                                          "x":"x"
                                                        },
                                                        "Grains Breads & Cereals": {
                                                          "x":"x",
                                                          "x": "x",
                                                          "x":"x"
                                                        },
                                                        "Others":{
                                                          "Condiments": "x",
                                                          "Oils": "x",
                                                          "Spices": "x",
                                                          "Sweets": "x"
                                                        }},
                                                        "Food Taboos":{
                                                          "Pregancy & Nutrition":{
                                                            "x":"x",
                                                            "x":"x"
                                                          },
                                                          "Growth & Nutrition":{
                                                            "x":"x",
                                                            "x":"x"
                                                          },
                                                          "Health Related":{
                                                            "x":"x",
                                                            "x":"x"
                                                          }}},
                                                        "Ukraine":{
                                                          "Food Practices":{
                                                            "Religious & Cultural Infulences": {
                                                              "x": "x",
                                                              "x": "x",
                                                              "x": "x"
                                                            },
                                                            "Meal Patterns":{
                                                              "x": "x",
                                                              "x": "x",
                                                              "x": "x"
                                                            },
                                                            "Eating Practices":{
                                                              "x": "x",
                                                              "x": "x",
                                                              "x": "x"
                                                            },
                                                            "Cooking Methods":{
                                                              "x": "x",
                                                              "x": "x",
                                                              "x": "x"
                                                            }},
                                                            "Tradition Dishes":{
                                                              "Non-Vegetarian":{
                                                                "x": "x",
                                                                "x": "x"
                                                              },
                                                              "Vegetarian":{
                                                                "x": "x",
                                                                "x": "x"
                                                              },
                                                              "Desserts":{
                                                                "x": "x",
                                                                "x": "x"
                                                              },
                                                              "Drinks":{
                                                                "x": "x",
                                                                "x": "x"
                                                              }},
                                                          "Popular Food Items":{
                                                          "Dairy & Non-Dairy Products": {
                                                            "x": "x",
                                                            "x": "x",
                                                            "x": "x"
                                                          },
                                                          "Meats & Meat Alternatives": {
                                                            "x": "x",
                                                            "x": "x",
                                                            "x": "x"
                                                          },
                                                          "Fruits & Vegetables": {
                                                            "x":"x",
                                                            "x": "x",
                                                            "x":"x"
                                                          },
                                                          "Grains Breads & Cereals": {
                                                            "x":"x",
                                                            "x": "x",
                                                            "x":"x"
                                                          },
                                                          "Others":{
                                                            "Condiments": "x",
                                                            "Oils": "x",
                                                            "Spices": "x",
                                                            "Sweets": "x"
                                                          }},
                                                          "Food Taboos":{
                                                            "Pregancy & Nutrition":{
                                                              "x":"x",
                                                              "x":"x"
                                                            },
                                                            "Growth & Nutrition":{
                                                              "x":"x",
                                                              "x":"x"
                                                            },
                                                            "Health Related":{
                                                              "x":"x",
                                                              "x":"x"
                                                            }}},
                                                          "Uganda":{
                                                            "Food Practices":{
                                                              "Religious & Cultural Infulences": {
                                                                "x": "x",
                                                                "x": "x",
                                                                "x": "x"
                                                              },
                                                              "Meal Patterns":{
                                                                "x": "x",
                                                                "x": "x",
                                                                "x": "x"
                                                              },
                                                              "Eating Practices":{
                                                                "x": "x",
                                                                "x": "x",
                                                                "x": "x"
                                                              },
                                                              "Cooking Methods":{
                                                                "x": "x",
                                                                "x": "x",
                                                                "x": "x"
                                                              }},
                                                              "Tradition Dishes":{
                                                                "Non-Vegetarian":{
                                                                  "x": "x",
                                                                  "x": "x"
                                                                },
                                                                "Vegetarian":{
                                                                  "x": "x",
                                                                  "x": "x"
                                                                },
                                                                "Desserts":{
                                                                  "x": "x",
                                                                  "x": "x"
                                                                },
                                                                "Drinks":{
                                                                  "x": "x",
                                                                  "x": "x"
                                                                }},
                                                            "Popular Food Items":{
                                                            "Dairy & Non-Dairy Products": {
                                                              "x": "x",
                                                              "x": "x",
                                                              "x": "x"
                                                            },
                                                            "Meats & Meat Alternatives": {
                                                              "x": "x",
                                                              "x": "x",
                                                              "x": "x"
                                                            },
                                                            "Fruits & Vegetables": {
                                                              "x":"x",
                                                              "x": "x",
                                                              "x":"x"
                                                            },
                                                            "Grains Breads & Cereals": {
                                                              "x":"x",
                                                              "x": "x",
                                                              "x":"x"
                                                            },
                                                            "Others":{
                                                              "Condiments": "x",
                                                              "Oils": "x",
                                                              "Spices": "x",
                                                              "Sweets": "x"
                                                            }},
                                                            "Food Taboos":{
                                                              "Pregancy & Nutrition":{
                                                                "x":"x",
                                                                "x":"x"
                                                              },
                                                              "Growth & Nutrition":{
                                                                "x":"x",
                                                                "x":"x"
                                                              },
                                                              "Health Related":{
                                                                "x":"x",
                                                                "x":"x"
                                                              }}},
                                                            "Venezuela":{
                                                              "Food Practices":{
                                                                "Religious & Cultural Infulences": {
                                                                  "x": "x",
                                                                  "x": "x",
                                                                  "x": "x"
                                                                },
                                                                "Meal Patterns":{
                                                                  "x": "x",
                                                                  "x": "x",
                                                                  "x": "x"
                                                                },
                                                                "Eating Practices":{
                                                                  "x": "x",
                                                                  "x": "x",
                                                                  "x": "x"
                                                                },
                                                                "Cooking Methods":{
                                                                  "x": "x",
                                                                  "x": "x",
                                                                  "x": "x"
                                                                }},
                                                                "Tradition Dishes":{
                                                                  "Non-Vegetarian":{
                                                                    "x": "x",
                                                                    "x": "x"
                                                                  },
                                                                  "Vegetarian":{
                                                                    "x": "x",
                                                                    "x": "x"
                                                                  },
                                                                  "Desserts":{
                                                                    "x": "x",
                                                                    "x": "x"
                                                                  },
                                                                  "Drinks":{
                                                                    "x": "x",
                                                                    "x": "x"
                                                                  }},
                                                              "Popular Food Items":{
                                                              "Dairy & Non-Dairy Products": {
                                                                "x": "x",
                                                                "x": "x",
                                                                "x": "x"
                                                              },
                                                              "Meats & Meat Alternatives": {
                                                                "x": "x",
                                                                "x": "x",
                                                                "x": "x"
                                                              },
                                                              "Fruits & Vegetables": {
                                                                "x":"x",
                                                                "x": "x",
                                                                "x":"x"
                                                              },
                                                              "Grains Breads & Cereals": {
                                                                "x":"x",
                                                                "x": "x",
                                                                "x":"x"
                                                              },
                                                              "Others":{
                                                                "Condiments": "x",
                                                                "Oils": "x",
                                                                "Spices": "x",
                                                                "Sweets": "x"
                                                              }},
                                                              "Food Taboos":{
                                                                "Pregancy & Nutrition":{
                                                                  "x":"x",
                                                                  "x":"x"
                                                                },
                                                                "Growth & Nutrition":{
                                                                  "x":"x",
                                                                  "x":"x"
                                                                },
                                                                "Health Related":{
                                                                  "x":"x",
                                                                  "x":"x"
                                                                }}},
                                                              "Vietnam":{
                                                                "Food Practices":{
                                                                  "Religious & Cultural Infulences": {
                                                                    "x": "x",
                                                                    "x": "x",
                                                                    "x": "x"
                                                                  },
                                                                  "Meal Patterns":{
                                                                    "x": "x",
                                                                    "x": "x",
                                                                    "x": "x"
                                                                  },
                                                                  "Eating Practices":{
                                                                    "x": "x",
                                                                    "x": "x",
                                                                    "x": "x"
                                                                  },
                                                                  "Cooking Methods":{
                                                                    "x": "x",
                                                                    "x": "x",
                                                                    "x": "x"
                                                                  }},
                                                                  "Tradition Dishes":{
                                                                    "Non-Vegetarian":{
                                                                      "x": "x",
                                                                      "x": "x"
                                                                    },
                                                                    "Vegetarian":{
                                                                      "x": "x",
                                                                      "x": "x"
                                                                    },
                                                                    "Desserts":{
                                                                      "x": "x",
                                                                      "x": "x"
                                                                    },
                                                                    "Drinks":{
                                                                      "x": "x",
                                                                      "x": "x"
                                                                    }},
                                                                "Popular Food Items":{
                                                                "Dairy & Non-Dairy Products": {
                                                                  "x": "x",
                                                                  "x": "x",
                                                                  "x": "x"
                                                                },
                                                                "Meats & Meat Alternatives": {
                                                                  "x": "x",
                                                                  "x": "x",
                                                                  "x": "x"
                                                                },
                                                                "Fruits & Vegetables": {
                                                                  "x":"x",
                                                                  "x": "x",
                                                                  "x":"x"
                                                                },
                                                                "Grains Breads & Cereals": {
                                                                  "x":"x",
                                                                  "x": "x",
                                                                  "x":"x"
                                                                },
                                                                "Others":{
                                                                  "Condiments": "x",
                                                                  "Oils": "x",
                                                                  "Spices": "x",
                                                                  "Sweets": "x"
                                                                }},
                                                                "Food Taboos":{
                                                                  "Pregancy & Nutrition":{
                                                                    "x":"x",
                                                                    "x":"x"
                                                                  },
                                                                  "Growth & Nutrition":{
                                                                    "x":"x",
                                                                    "x":"x"
                                                                  },
                                                                  "Health Related":{
                                                                    "x":"x",
                                                                    "x":"x"
                                                                  }}},
                }
              });
              // console.log(new Database().getDatabase().ref("test/password").key);
  // console.log(database.ref("test/password").key);
  // console.log(database.ref("test/username").key);
  // database.ref("test/xx/too_bad").get().then(function(snapshot) {
  //   if (snapshot.exists()) {
  //     console.log(snapshot.val());
  //   }
  // });
  // database.ref("test/bruh").set({
  //   username: "bruh",
  //   password: "bruh2"
  // });
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
