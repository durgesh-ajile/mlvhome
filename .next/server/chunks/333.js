"use strict";
exports.id = 333;
exports.ids = [333];
exports.modules = {

/***/ 2333:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ headers_Header)
});

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/layouts/Search.js




const Search = ({
  open,
  closeSidebar
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    id: "search-popup",
    className: `search-popup ${open ? "popup-visible" : ""}`,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "close-search theme-btn",
      onClick: () => closeSidebar(),
      children: /*#__PURE__*/jsx_runtime_.jsx("i", {
        className: "far fa-times"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "popup-inner",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "overlay-layer",
        onClick: () => closeSidebar()
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "search-form",
        children: /*#__PURE__*/jsx_runtime_.jsx("form", {
          method: "post",
          onSubmit: e => e.preventDefault(),
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "form-group",
            children: /*#__PURE__*/jsx_runtime_.jsx("fieldset", {
              children: /*#__PURE__*/jsx_runtime_.jsx("input", {
                type: "search",
                className: "form-control",
                name: "search-input",
                defaultValue: "",
                placeholder: "Type & Enter",
                required: ""
              })
            })
          })
        })
      })]
    })]
  });
};

/* harmony default export */ const layouts_Search = (Search);
;// CONCATENATED MODULE: ./src/layouts/Sidebar.js




const Sidebar = ({
  open,
  closeSidebar
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: `hidden-sidebar  ${open ? "active-sidebar" : "close-sidebar"}`,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "wrapper-box",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "content-wrapper",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "hidden-sidebar-close",
          children: /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "flaticon-remove",
            onClick: () => closeSidebar()
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "about-widget widget",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "logo",
            children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "assets/images/logo.png",
              width: 200,
              alt: ""
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("i", {
              children: [" ", /*#__PURE__*/jsx_runtime_.jsx("p", {
                style: {
                  paddingLeft: '16px'
                },
                children: "\"Service Is Salvation\""
              })]
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "text",
            children: "MLV Student PG Services is an excellent choice for anyone looking for a comfortable and affordable stay."
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "widget contact-widget",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
            children: "Get In Touch"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "text",
            children: "Welcome to MLV PG Services, where comfort is everything."
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "fal fa-phone"
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "tel:9535340123",
                children: "9535340123"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "fal fa-envelope"
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "mailto:mlvpgservices@gmail.com",
                children: "mlvpgservices@gmail.com"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "fal fa-map-marker-alt"
              }), " 13, Shakti Enclave, Opposite Acharya College, Bangalore - 560107"]
            })]
          })]
        })]
      })
    })
  });
};

/* harmony default export */ const layouts_Sidebar = (Sidebar);
// EXTERNAL MODULE: ./src/layouts/headers/Menu.js
var Menu = __webpack_require__(1386);
// EXTERNAL MODULE: ./src/layouts/headers/MobileHeader.js
var MobileHeader = __webpack_require__(6650);
;// CONCATENATED MODULE: ./src/layouts/headers/Header.js





 // import Logo from 'assets/images/pgroom5.jpeg'




const Header = ({
  headernumber
}) => {
  const {
    0: sidebarTrigger,
    1: setSidebarTrigger
  } = (0,external_react_.useState)(false);
  const {
    0: searchBarTrigger,
    1: setSearchBarTrigger
  } = (0,external_react_.useState)(false);
  const {
    0: mobileHeader,
    1: setMobileHeader
  } = (0,external_react_.useState)(false);

  const mobileHeaderTrigger = () => {
    setMobileHeader(!mobileHeader);

    if (mobileHeader) {
      document.querySelector("body").classList.add("mobile-menu-visible");
    } else {
      document.querySelector("body").classList.remove("mobile-menu-visible");
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
      className: `main-header header-style-one ${headernumber ? "" : "style-two"}`,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "auto-container",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "text-center"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "header-upper",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "auto-container",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "inner-container",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "nav-outer",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "mobile-nav-toggler",
                onClick: () => mobileHeaderTrigger(),
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "assets/images/icons/icon-bar.png",
                  alt: ""
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("nav", {
                className: "main-menu navbar-expand-md navbar-light",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "collapse navbar-collapse show clearfix",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                    className: "navigation",
                    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                      className: "dropdown",
                      children: [/*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                        href: "/",
                        children: "Home"
                      }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
                        children: /*#__PURE__*/jsx_runtime_.jsx(Menu/* Home */.SK, {})
                      })]
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      className: "dropdown",
                      children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
                        children: /*#__PURE__*/jsx_runtime_.jsx(Menu/* Room */.du, {})
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {}), /*#__PURE__*/jsx_runtime_.jsx("li", {}), /*#__PURE__*/jsx_runtime_.jsx("li", {})]
                  })
                })
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "right-column",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "menu-bar sidemenu-nav-toggler",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "assets/images/icons/icon-bar3.png",
                  alt: "",
                  onClick: () => setSidebarTrigger(true)
                })
              })
            })]
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "auto-container",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "text-center",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "logo-box main-logo",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "logo",
              children: [/*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                href: "/",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "assets/images/logo.png",
                    alt: "",
                    width: 200
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("i", {
                children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: "\"Service Is Salvation\""
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
                style: {
                  fontWeight: "600"
                },
                children: "MLV Student PG Services"
              })]
            })
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "sticky-header",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "header-upper",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "auto-container",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "inner-container",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "nav-outer",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "mobile-nav-toggler",
                  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "assets/images/icons/icon-bar.png",
                    alt: ""
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("nav", {
                  className: "main-menu navbar-expand-md navbar-light",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "collapse navbar-collapse show clearfix",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                      className: "navigation",
                      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                        className: "dropdown",
                        children: [/*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                          href: "/",
                          children: "Home"
                        }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
                          children: /*#__PURE__*/jsx_runtime_.jsx(Menu/* Home */.SK, {})
                        })]
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        className: "dropdown",
                        children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
                          children: /*#__PURE__*/jsx_runtime_.jsx(Menu/* Room */.du, {})
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {}), /*#__PURE__*/jsx_runtime_.jsx("li", {}), /*#__PURE__*/jsx_runtime_.jsx("li", {})]
                    })
                  })
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "right-column",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "menu-bar sidemenu-nav-toggler",
                  onClick: () => setSidebarTrigger(true),
                  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "assets/images/icons/icon-bar3.png",
                    alt: ""
                  })
                })
              })]
            })
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(MobileHeader/* default */.Z, {
        closeMobileHeader: () => mobileHeaderTrigger()
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "nav-overlay",
        style: {
          display: sidebarTrigger ? "block" : "none"
        },
        onClick: () => setSidebarTrigger(false),
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "cursor"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "cursor-follower"
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(layouts_Sidebar, {
      open: sidebarTrigger,
      closeSidebar: () => setSidebarTrigger(false)
    }), /*#__PURE__*/jsx_runtime_.jsx(layouts_Search, {
      open: searchBarTrigger,
      closeSidebar: () => setSearchBarTrigger(false)
    })]
  });
};

/* harmony default export */ const headers_Header = (Header);

/***/ }),

/***/ 1386:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SK": () => (/* binding */ Home),
/* harmony export */   "du": () => (/* binding */ Room),
/* harmony export */   "iY": () => (/* binding */ Pages),
/* harmony export */   "l3": () => (/* binding */ Blog)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const Home = () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {});
const Room = () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {});
const Pages = () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {});
const Blog = () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {});

/***/ }),

/***/ 6650:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1386);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






const MobileHeader = ({
  closeMobileHeader
}) => {
  const {
    0: toggle,
    1: setToggle
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: activeMenu,
    1: setActiveMenu
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");

  const activeMenuSet = value => setActiveMenu(activeMenu === value ? "" : value),
        activeLi = value => value === activeMenu ? {
    display: "block"
  } : {
    display: "none"
  },
        activeIcon = value => value === activeMenu ? "open" : "";

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "mobile-menu",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: "menu-backdrop"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: "close-btn",
      onClick: () => closeMobileHeader(),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
        className: "icon far fa-times"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("nav", {
      className: "menu-box",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: "nav-logo",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
          href: "/",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
              src: "assets/images/logo.png",
              alt: "",
              title: ""
            })
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: "menu-outer",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: "collapse navbar-collapse show clearfix",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("ul", {
            className: "navigation",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
              className: "dropdown",
              onClick: () => closeMobileHeader(),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
                href: "/",
                children: "Home"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("ul", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_Menu__WEBPACK_IMPORTED_MODULE_2__/* .Home */ .SK, {})
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
              className: "dropdown",
              onClick: () => closeMobileHeader(),
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("ul", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_Menu__WEBPACK_IMPORTED_MODULE_2__/* .Room */ .du, {})
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
              onClick: () => closeMobileHeader()
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
              onClick: () => closeMobileHeader()
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
              onClick: () => closeMobileHeader()
            })]
          })
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileHeader);

/***/ })

};
;