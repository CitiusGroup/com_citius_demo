{
  "app": {
    "citiusdemo": {
      "name": "Citius DEMO",
      "abbreviation": "cwdemo",
      "requires": [
        {
          "app": "cwapps"
        },
        {
          "app": "cwcore"
        }
      ],
      "icon": "citiusdemoicon",
      "version": "1.0.6",
      "defaultSite": "3nm9",
      "usernameAbbreviation": {
        "abbreviation": "demo",
        "username": "demo@citius.com"
      }
    },
    "name": "Citius DEMO",
    "abbreviation": "cwdemo",
    "version": "1.0.6",
    "theme": {
      "color": "#000000",
      "android": {
        "fontFamily": "Roboto light",
        "brandPrimary": "#0071b8"
      },
      "ios": {
        "fontFamily": "Avenir-Medium"
      },
      "style": {
        "noteluokka": {
          "color": "#7c7e7f"
        },
        "strongluokka": {
          "color": "#0071b8",
          "fontSize": "16px",
          "fontWeight": "bold",
          "ios": {
            "fontFamily": "Avenir-Heavy"
          },
          "android": {
            "fontFamily": "Roboto"
          }
        }
      }
    }
  },
  "views": {
    "login": {
      "applicationImage": "demo-login-applicationImage-transparent",
      "backgroundColor": {
        "ios": "#ffffff",
        "android": "#e1e7f6"
      },
      "repeatBackgroundImage": true,
      "fieldBackgroundColor": "#ffffff",
      "fieldBorderColor": "#0071b8",
      "fieldBorderSize": 1,
      "fieldTextColor": "#0071b8",
      "fieldTextDisabledColor": "#bbbdbf",
      "loginButtonBackgroundColor": "#0071b8",
      "loginButtonDisabledBackgroundColor": "#ffffff",
      "loginButtonTextColor": "#ffffff",
      "loginButtonDisabledTextColor": "#bbbdbf"
    },
    "leftPanel": {
      "header": {
        "backgroundColor": "#ffffff",
        "headerBackgroundColor": {
          "ios": "#ffffff",
          "android": "#e1e7f6"
        },
        "headerImage": "demo-menu-headerImage-transparent"
      },
      "mainmenu": {
        "type": "menu",
        "title": {
          "en": "Citius DEMO Menu",
          "fi": "Citius DEMO valikko"
        },
        "items": {
          "flightsitem": {
            "title": {
              "en": "Flights",
              "fi": "Lennot"
            },
            "icon": "materialcommunityicons:airplane-takeoff",
            "listeners": {
              "click": "onFlightsClick"
            }
          },
          "planesitem": {
            "title": {
              "fi": "Lentokoneet",
              "en": "Airplanes"
            },
            "icon": "ionicons:ios-plane",
            "listeners": {
              "click": "onPlanesClick"
            }
          },
          "airlinesitem": {
            "title": {
              "fi": "Lentoyhtiöt",
              "en": "Airlines"
            },
            "icon": "fontawesome:building-o",
            "listeners": {
              "click": "onAirlinesClick"
            }
          },
          "stationsitem": {
            "title": {
              "fi": "Asemat",
              "en": "Stations"
            },
            "icon": "materialcommunityicons:radio-tower",
            "listeners": {
              "click": "onStationsClick"
            }
          },
          "aboutitem": {
            "title": {
              "en": "About the Demo (testing)",
              "fi": "Tietoa demosta (testi)"
            },
            "icon": "ionicons:ios-information-circle-outline",
            "listeners": {
              "click": "onAboutClick"
            }
          }
        }
      }
    },
    "mainPanel": {
      "flights": {
        "type": "list",
        "title": {
          "en": "Flights",
          "fi": "Lennot"
        },
        "icon": "materialcommunityicons:airplane-takeoff",
        "table": "CWDEMO_Flight",
        "csql": "/CWDEMO_Flight{DepartureTime,ICAO24Hex,PlaneCI.PhotoCI,PlaneCI.AirlineCI,DepartureStationCI,ArrivalStationCI,PlaneCI,ArrivalTime,FlightTime}.sort(DepartureTime-)",
        "left": {
          "rows": [
            {
              "field": "PlaneCI.PhotoCI.IconBase64"
            }
          ]
        },
        "body": {
          "rows": [
            {
              "field": "DepartureTime",
              "texttype": "strongluokka"
            },
            {
              "field": "ICAO24Hex",
              "texttype": "noteluokka",
              "ellipsis": false
            },
            {
              "field": "DepartureStationCI",
              "texttype": "noteluokka",
              "ellipsis": false
            }
          ]
        },
        "right": false,
        "expand": {
          "csql": "/CWDEMO_Flight{DepartureTime,ICAO24Hex,PlaneCI.PhotoCI,PlaneCI.AirlineCI,DepartureStationCI,ArrivalStationCI,PlaneCI,ArrivalTime,FlightTime}.filter(CI=%%CI%%)",
          "view": {
            "grid": [
              {
                "row": [
                  {
                    "col": {
                      "width": "80px",
                      "texttype": "noteluokka",
                      "text": "Lähtöaika:"
                    }
                  },
                  {
                    "col": {
                      "field": "DepartureTime",
                      "suppressRowIfEmpty": true
                    }
                  }
                ]
              },
              {
                "row": [
                  {
                    "col": {
                      "width": "80px",
                      "texttype": "noteluokka",
                      "text": "Lennon numero (ICAO):"
                    }
                  },
                  {
                    "col": {
                      "field": "ICAO24Hex",
                      "suppressRowIfEmpty": true
                    }
                  }
                ]
              },
              {
                "row": [
                  {
                    "col": {
                      "width": "80px",
                      "texttype": "noteluokka",
                      "text": "Lentoyhtiö:"
                    }
                  },
                  {
                    "col": {
                      "field": "PlaneCI.AirlineCI",
                      "suppressRowIfEmpty": true
                    }
                  }
                ]
              },
              {
                "row": [
                  {
                    "col": {
                      "width": "80px",
                      "texttype": "noteluokka",
                      "text": "Lentokone:"
                    }
                  },
                  {
                    "col": {
                      "field": "PlaneCI",
                      "suppressRowIfEmpty": true
                    }
                  }
                ]
              },
              {
                "row": [
                  {
                    "col": {
                      "width": "80px",
                      "texttype": "noteluokka",
                      "text": "Lähtöasema:"
                    }
                  },
                  {
                    "col": {
                      "field": "DepartureStationCI",
                      "suppressRowIfEmpty": true
                    }
                  }
                ]
              },
              {
                "row": [
                  {
                    "col": {
                      "width": "80px",
                      "texttype": "noteluokka",
                      "text": "Määränpää:"
                    }
                  },
                  {
                    "col": {
                      "field": "ArrivalStationCI",
                      "suppressRowIfEmpty": true
                    }
                  }
                ]
              },
              {
                "row": [
                  {
                    "col": {
                      "width": "80px",
                      "texttype": "noteluokka",
                      "text": "Saapumisaika:"
                    }
                  },
                  {
                    "col": {
                      "field": "ArrivalTime",
                      "suppressRowIfEmpty": true
                    }
                  }
                ]
              },
              {
                "row": [
                  {
                    "col": {
                      "width": "80px",
                      "texttype": "noteluokka",
                      "text": "Lentoaika:"
                    }
                  },
                  {
                    "col": {
                      "field": "FlightTime",
                      "suppressRowIfEmpty": true
                    }
                  }
                ]
              }
            ]
          }
        },
        "search": {
          "searchWordFlight": {
            "value": ".filter(ICAO24Hex~'%%searchWordFlight%%'¤DepartureStationCI.Name~'%%searchWordFlight%%')"
          }
        }
      },
      "planes": {
        "type": "list",
        "title": {
          "fi": "Lentokoneet",
          "en": "Airplanes"
        },
        "icon": "ionicons:ios-plane",
        "table": "CWDEMO_Plane",
        "csql": "/CWDEMO_Plane{PhotoCI,Registration+,ICAO24Hex,Make,Model,Built,DeliveryDate}",
        "left": {
          "rows": [
            {
              "field": "PhotoCI.IconBase64"
            }
          ]
        },
        "body": {
          "rows": [
            {
              "field": "Registration",
              "texttype": "strongluokka"
            },
            {
              "field": "ICAO24Hex",
              "texttype": "noteluokka",
              "ellipsis": false
            },
            {
              "field": "Make",
              "texttype": "noteluokka",
              "ellipsis": false
            },
            {
              "field": "Model",
              "texttype": "noteluokka",
              "ellipsis": false
            }
          ]
        },
        "right": false,
        "expand": {
          "csql": "/CWDEMO_Plane{PhotoCI,Registration+,ICAO24Hex,Make,Model,Built,DeliveryDate} .filter(CI=%%CI%%)",
          "view": {
            "grid": [
              {
                "row": [
                  {
                    "col": {
                      "width": "80px",
                      "texttype": "noteluokka",
                      "text": "Rekisteritunnus:"
                    }
                  },
                  {
                    "col": {
                      "field": "Registration",
                      "suppressRowIfEmpty": true
                    }
                  }
                ]
              },
              {
                "row": [
                  {
                    "col": {
                      "width": "80px",
                      "texttype": "noteluokka",
                      "text": "Valmistaja:"
                    }
                  },
                  {
                    "col": {
                      "field": "Make",
                      "suppressRowIfEmpty": true
                    }
                  }
                ]
              },
              {
                "row": [
                  {
                    "col": {
                      "width": "80px",
                      "texttype": "noteluokka",
                      "text": "Malli:"
                    }
                  },
                  {
                    "col": {
                      "field": "Model",
                      "suppressRowIfEmpty": true
                    }
                  }
                ]
              },
              {
                "row": [
                  {
                    "col": {
                      "width": "80px",
                      "texttype": "noteluokka",
                      "text": "Valmistusvuosi:"
                    }
                  },
                  {
                    "col": {
                      "field": "Built",
                      "suppressRowIfEmpty": true
                    }
                  }
                ]
              },
              {
                "row": [
                  {
                    "col": {
                      "width": "80px",
                      "texttype": "noteluokka",
                      "text": "Luovutuspäivä:"
                    }
                  },
                  {
                    "col": {
                      "field": "DeliveryDate",
                      "suppressRowIfEmpty": true
                    }
                  }
                ]
              },
              {
                "row": [
                  {
                    "col": {
                      "width": "80px",
                      "texttype": "noteluokka",
                      "text": "Tunnus (ICAO):"
                    }
                  },
                  {
                    "col": {
                      "field": "ICAO24Hex",
                      "suppressRowIfEmpty": true
                    }
                  }
                ]
              }
            ]
          }
        },
        "search": {
          "searchWordPlane": {
            "value": ".filter(Registration~'%%searchWordPlane%%'¤ICAO24Hex~'%%searchWordPlane%%')"
          }
        }
      },
      "airlines": {
        "type": "list",
        "title": {
          "fi": "Lentoyhtiöt",
          "en": "Airlines"
        },
        "icon": "fontawesome:building-o",
        "table": "CWDEMO_Airline",
        "csql": "/CWDEMO_Airline{Name+,Alias,CountryCI,IATA,ICAO,CallSign}",
        "left": false,
        "body": {
          "rows": [
            {
              "field": "Name",
              "texttype": "strongluokka"
            },
            {
              "field": "Alias",
              "texttype": "noteluokka",
              "ellipsis": false
            },
            {
              "field": "IATA",
              "texttype": "noteluokka",
              "ellipsis": false
            }
          ]
        },
        "right": false,
        "search": {
          "searchWordAirline": {
            "value": ".filter(Name~'%%searchWordAirline%%'¤Alias~'%%searchWordAirline%%')"
          }
        }
      },
      "stations": {
        "type": "list",
        "title": {
          "fi": "Asemat",
          "en": "Stations"
        },
        "icon": "materialcommunityicons:radio-tower",
        "table": "CWDEMO_Station",
        "csql": "/CWDEMO_Station{Name+,City,CountryCI,IATA,ICAO,Latitude,Longitude,Altitude}",
        "left": false,
        "body": {
          "rows": [
            {
              "field": "Name",
              "texttype": "strongluokka"
            },
            {
              "field": "IATA",
              "texttype": "noteluokka",
              "ellipsis": false
            },
            {
              "field": "City",
              "texttype": "noteluokka",
              "ellipsis": false
            },
            {
              "field": "CountryCI",
              "texttype": "noteluokka",
              "ellipsis": false
            }
          ]
        },
        "right": false,
        "search": {
          "searchWordStation": {
            "value": ".filter(Name~'%%searchWordStation%%'¤IATA~'%%searchWordStation%%'¤City~'%%searchWordStation%%'¤CountryCI~'%%searchWordStation%%')"
          }
        }
      },
      "about": {
        "type": "page",
        "title": {
          "en": "About the Demo (testing)",
          "fi": "Tietoa demosta (testi)"
        },
        "ci": {
          "fi": "cwdemo-k9rn",
          "en": "cwdemo-k9rn"
        },
        "icon": "ionicons:ios-information-circle-outline",
        "headerNumbering": false
      }
    }
  },
  "controllers": {
    "constructor": {
      "url": "flights"
    },
    "onAboutClick": {
      "url": "about"
    },
    "onAirlinesClick": {
      "url": "airlines"
    },
    "onFlightsClick": {
      "url": "flights"
    },
    "onPlanesClick": {
      "url": "planes"
    },
    "onStationsClick": {
      "url": "stations"
    }
  }
}