"use strict";
exports.id = 35;
exports.ids = [35];
exports.modules = {

/***/ 2961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




let useClickOutside = handler => {
  let domNode = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let maybeHandler = event => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);
    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });
  return domNode;
};

const ImgViews = ({
  close,
  src
}) => {
  let domNode = useClickOutside(() => {
    close(false);
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      className: "mfp-bg mfp-ready",
      onClick: () => close(false)
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
      tabIndex: -1,
      style: {
        overflow: "hidden auto"
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: `mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container`,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
          className: "mfp-content",
          ref: domNode,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "mfp-iframe-scaler",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("button", {
              title: "Close (Esc)",
              type: "button",
              className: "mfp-close",
              onClick: () => close(),
              children: "\xD7"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("img", {
              className: "mfp-img",
              src: src
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
          className: "mfp-preloader",
          children: "Loading..."
        })]
      })
    })]
  });
};

const ImageView = () => {
  const {
    0: img,
    1: setImg
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: imgValue,
    1: setImgValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const a = document.querySelectorAll("a");
    a.forEach(a => {
      if (a.href.includes("assets/")) {
        a.addEventListener("click", e => {
          e.preventDefault();
          setImgValue(a.href);
          setImg(true);
        });
      }
    });
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: img && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(ImgViews, {
      close: () => setImg(false),
      src: imgValue
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageView);

/***/ }),

/***/ 9796:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const ScrollTop = () => {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let scrollUp = document.getElementById("scroll-top");
    window.addEventListener("scroll", () => {
      let st = window.scrollY;

      if (st >= 0) {
        scrollUp.style.display = "inline-block";
      } else {
        scrollUp.style.display = "none";
      }
    });
  }, []);

  const onClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
    className: "scroll-to-top scroll-to-target",
    id: "scroll-top",
    "data-target": "html",
    style: {
      fontSize: "4rem"
    },
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
      href: "https://wa.me/+919066570348",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaWhatsappSquare, {
        color: "green"
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollTop);

/***/ }),

/***/ 5436:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




let useClickOutside = handler => {
  let domNode = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let maybeHandler = event => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);
    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });
  return domNode;
};

const VideoPopup_ = ({
  close,
  videoID
}) => {
  let domNode = useClickOutside(() => {
    close(false);
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      className: "mfp-bg mfp-ready",
      onClick: () => close(false)
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
      tabIndex: -1,
      style: {
        overflow: "hidden auto"
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "mfp-container mfp-s-ready mfp-iframe-holder",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
          className: "mfp-content",
          ref: domNode,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "mfp-iframe-scaler",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("button", {
              title: "Close (Esc)",
              type: "button",
              className: "mfp-close",
              onClick: () => close(),
              children: "\xD7"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("iframe", {
              src: "https://www.youtube.com/embed/nfP5N9Yc72A?autoplay=1",
              title: "YouTube video player",
              frameBorder: "0",
              allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
              allowFullScreen: true
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
          className: "mfp-preloader",
          children: "Loading..."
        })]
      })
    })]
  });
};

const VideoPopup = () => {
  const {
    0: video,
    1: setVideo
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: videoValue,
    1: setVideoValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const a = document.querySelectorAll("a");
    a.forEach(a => {
      if (a.href.includes("https://www.youtube.com")) {
        a.addEventListener("click", e => {
          e.preventDefault();
          setVideoValue(a.href);
          setVideo(true);
        });
      }
    });
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: video && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(VideoPopup_, {
      close: () => setVideo(false),
      videoID: videoValue
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoPopup);

/***/ }),

/***/ 3035:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var niceselectwithsabuj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(421);
/* harmony import */ var niceselectwithsabuj__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(niceselectwithsabuj__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ImageView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2961);
/* harmony import */ var _components_ScrollTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9796);
/* harmony import */ var _components_VideoPopup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5436);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1939);
/* harmony import */ var _footers_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6766);
/* harmony import */ var _headers_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2333);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_footers_Footer__WEBPACK_IMPORTED_MODULE_5__]);
_footers_Footer__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// import { niceSelect } from "niceselectwithsabuj";
// import niceSelect from "niceselectwithsabuj";











const Layouts = ({
  children,
  noBg,
  extraCls,
  noHeader,
  noFooter,
  headernumber
}) => {
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    (0,_utils__WEBPACK_IMPORTED_MODULE_8__/* .animation */ .oQ)();
    niceselectwithsabuj__WEBPACK_IMPORTED_MODULE_0___default()({
      withoutwide: true
    });
    window.addEventListener("scroll", _utils__WEBPACK_IMPORTED_MODULE_8__/* .stickyNav */ .h4);
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: "page-wrapper",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_ImageView__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_VideoPopup__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}), children, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_ScrollTop__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layouts);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6766:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3015);
/* harmony import */ var _sliderProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4084);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_1__, _sliderProps__WEBPACK_IMPORTED_MODULE_2__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_1__, _sliderProps__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const Footer = ({
  noBg,
  extraCls
}) => {
  return /*#__PURE__*/_jsx("footer", {
    className: `main-footer ${extraCls ? extraCls : "style-two"}`,
    style: {
      // background: noBg ? null : `url(assets/images/background/bg-1.jpg)`,
      background: "#f5f5f5"
    },
    id: "contact",
    children: /*#__PURE__*/_jsx("div", {
      className: "auto-container",
      children: /*#__PURE__*/_jsx("div", {
        className: "widget-wrapper",
        children: /*#__PURE__*/_jsxs("div", {
          className: "row",
          children: [/*#__PURE__*/_jsx("div", {
            className: "col-lg-3 col-md-6",
            children: /*#__PURE__*/_jsx("div", {
              className: "footer-logo",
              children: /*#__PURE__*/_jsx("img", {
                src: "https://lh5.googleusercontent.com/p/AF1QipOodfsaUzJn_6fOnrfXtX7phjw9dSFci8laNclY",
                alt: ""
              })
            })
          }), /*#__PURE__*/_jsx("div", {
            className: "column col-lg-3 col-md-6",
            children: /*#__PURE__*/_jsxs("div", {
              className: "widget links-widget",
              children: [/*#__PURE__*/_jsx("h2", {
                style: {
                  fontWeight: "600"
                },
                children: "Pages"
              }), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx("div", {
                className: "row",
                children: /*#__PURE__*/_jsx("div", {
                  className: "col-sm-6",
                  children: /*#__PURE__*/_jsxs("ul", {
                    children: [/*#__PURE__*/_jsx("li", {
                      children: /*#__PURE__*/_jsx("a", {
                        href: "/",
                        children: "Home"
                      })
                    }), /*#__PURE__*/_jsx("li", {
                      children: /*#__PURE__*/_jsx("a", {
                        href: "#about",
                        children: "About"
                      })
                    }), /*#__PURE__*/_jsx("li", {
                      children: /*#__PURE__*/_jsx("a", {
                        href: "#room",
                        children: "Rooms"
                      })
                    }), /*#__PURE__*/_jsx("li", {
                      children: /*#__PURE__*/_jsx("a", {
                        href: "#contact",
                        children: "Contact"
                      })
                    })]
                  })
                })
              })]
            })
          }), /*#__PURE__*/_jsx("div", {
            className: "col-lg-3 col-md-6"
          }), /*#__PURE__*/_jsx("div", {
            className: "col-lg-3 col-md-6",
            children: /*#__PURE__*/_jsxs("div", {
              className: "widget contact-widget",
              children: [/*#__PURE__*/_jsx("h2", {
                style: {
                  fontWeight: "600"
                },
                children: "Contact Us"
              }), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx("div", {
                className: "text",
                children: "Welcome to Ganapathi Niwas , where comfort is everything."
              }), /*#__PURE__*/_jsxs("ul", {
                children: [/*#__PURE__*/_jsxs("li", {
                  children: [/*#__PURE__*/_jsx("i", {
                    className: "fal fa-phone"
                  }), /*#__PURE__*/_jsx("a", {
                    href: "tel:9620552269",
                    children: "9620552269"
                  }), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx("i", {
                    className: "fal fa-phone"
                  }), /*#__PURE__*/_jsx("a", {
                    href: "tel:8217556118",
                    children: "8217556118"
                  }), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx("i", {
                    className: "fal fa-phone"
                  }), /*#__PURE__*/_jsx("a", {
                    href: "tel:8310975697",
                    children: "8310975697"
                  })]
                }), /*#__PURE__*/_jsxs("li", {
                  children: [/*#__PURE__*/_jsx("i", {
                    className: "fal fa-envelope"
                  }), /*#__PURE__*/_jsx("a", {
                    href: "mailto:dakshbakashish@gmail.com",
                    children: "dakshbakashish@gmail.com"
                  })]
                }), /*#__PURE__*/_jsxs("li", {
                  children: [/*#__PURE__*/_jsx("i", {
                    className: "fal fa-map-marker-alt"
                  }), " No. 79, Front of Acharya Institute,", /*#__PURE__*/_jsx("br", {}), "Soladevanahalli, Karnataka 560107"]
                })]
              })]
            })
          })]
        })
      })
    })
  });
};

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Footer)));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4084:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "To": () => (/* binding */ bannerSlider),
/* harmony export */   "dt": () => (/* binding */ feedBackSlider),
/* harmony export */   "iV": () => (/* binding */ sponsorsSlider),
/* harmony export */   "yk": () => (/* binding */ roomsSlider),
/* harmony export */   "fd": () => (/* binding */ imageSlider),
/* harmony export */   "A4": () => (/* binding */ testimonialSlider)
/* harmony export */ });
/* unused harmony export footerSlider */
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3877);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_0__]);
swiper__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_0__.EffectFade, swiper__WEBPACK_IMPORTED_MODULE_0__.Autoplay]);
const bannerSlider = {
  preloadImages: false,
  loop: true,
  grabCursor: true,
  centeredSlides: false,
  resistance: true,
  resistanceRatio: 0.6,
  speed: 1400,
  spaceBetween: 0,
  parallax: false,
  effect: "slide",
  autoplay: {
    delay: 6000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".banner-slider-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".banner-slider-button-next",
    prevEl: ".banner-slider-button-prev"
  }
};
const feedBackSlider = {
  spaceBetween: 100,
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false
  }
};
const footerSlider = {
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 2,
      spaceBetween: 30
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 30
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 30
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
};
const sponsorsSlider = {
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false
  },
  breakpoints: {
    0: {
      spaceBetween: 30,
      slidesPerView: 1
    },
    600: {
      spaceBetween: 30,
      slidesPerView: 2
    },
    768: {
      spaceBetween: 30,
      slidesPerView: 3
    },
    992: {
      spaceBetween: 30,
      slidesPerView: 4
    },
    1000: {
      spaceBetween: 30,
      slidesPerView: 5
    }
  }
};
const roomsSlider = {
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false
  },
  breakpoints: {
    0: {
      spaceBetween: 30,
      slidesPerView: 1
    },
    768: {
      spaceBetween: 30,
      slidesPerView: 2
    },
    1000: {
      spaceBetween: 30,
      slidesPerView: 3
    }
  }
};
const imageSlider = {
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false
  },
  breakpoints: {
    0: {
      spaceBetween: 0,
      slidesPerView: 1
    },
    600: {
      spaceBetween: 0,
      slidesPerView: 2
    },
    992: {
      spaceBetween: 0,
      slidesPerView: 3
    },
    1200: {
      spaceBetween: 0,
      slidesPerView: 4
    },
    1600: {
      spaceBetween: 0,
      slidesPerView: 5
    }
  }
};
const testimonialSlider = {
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false
  },
  breakpoints: {
    0: {
      spaceBetween: 0,
      slidesPerView: 1
    },
    768: {
      spaceBetween: 0,
      slidesPerView: 1
    },
    992: {
      spaceBetween: 0,
      slidesPerView: 1
    },
    1200: {
      spaceBetween: 0,
      slidesPerView: 3
    }
  }
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1939:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "oQ": () => (/* binding */ animation),
/* harmony export */   "h4": () => (/* binding */ stickyNav)
/* harmony export */ });
/* unused harmony exports pagination, getPagination, niceSelect, activeNavMenu */
const animation = () => {
  if (false) {}

  new WOW.WOW().init();
};
const stickyNav = () => {
  let offset = window.scrollY;
  const stickys = document.querySelectorAll(".sticky-header");
  const headers = document.querySelectorAll("header");

  for (let i = 0; i < stickys.length; i++) {
    const sticky = stickys[i];

    if (sticky) {
      if (offset > 60) {
        sticky.className = "sticky-header animated slideInDown";
        headers[0].classList.add("fixed-header");
      } else {
        sticky.className = "sticky-header";
        headers[0].classList.remove("fixed-header");
      }
    }
  }
};
const pagination = (listClass, sort, active) => {
  let list = document.querySelectorAll(listClass);

  for (let i = 0; i < list.length; i++) {
    const element = list[i];

    if (active === 1) {
      if (i < sort) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    } else {
      if (i >= (active - 1) * sort && i < active * sort) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    }
  }
};
const getPagination = (totalNumber, sort) => {
  let arr = new Array(Math.ceil(totalNumber / sort)).fill().map((_, idx) => idx + 1);
  return arr;
};
const niceSelect = ({
  withoutwide = undefined
} = {}) => {
  const select = document.querySelectorAll("select");
  select.forEach(element => {
    let option = element.querySelectorAll("option");

    function insertAfter(referenceNode, newNode) {
      referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }

    element.style.display = "none";
    var el = document.createElement("div");
    insertAfter(element, el);
    el.className = withoutwide ? "nice-select" : "nice-select wide";
    let span = document.createElement("span"),
        ul = document.createElement("ul");
    ul.classList.add("list");
    span.classList.add("current");
    el.appendChild(ul);
    el.appendChild(span);
    el.addEventListener("click", () => {
      el.classList.toggle("open");
    });
    document.addEventListener("click", e => {
      if (!el.contains(e.target)) {
        el.classList.remove("open");
      }
    });
    option.forEach(opt => {
      var li = document.createElement("li");
      ul.appendChild(li);
      li.innerHTML = opt.innerText;
      li.className = "option";
      let defultValue = opt.getAttribute("data-dsplay");
      let selected = opt.getAttribute("selected");
      let disabled = opt.getAttribute("disabled");

      if (defultValue || selected !== null || disabled !== null) {
        li.className = "option focus";
        span.innerText = opt.innerText;
      } else {
        span.innerText = option[0].innerText;
      }

      li.addEventListener("click", () => {
        if (disabled == null) {
          span.innerHTML = opt.innerText;
        }
      });
    });
  });
};
const activeNavMenu = path => {
  const navItem = document.querySelectorAll(".main-menu li a");
  navItem.forEach(nav => {
    if (nav.pathname === window.location.pathname) {
      if (!nav.href.includes("#")) {
        if (nav.pathname === "/contact" || nav.pathname === "/about") {
          nav.className = "active";
        } else {
          let navContainer = nav.parentElement.parentElement.parentElement;
          nav.parentElement.parentElement.parentElement.classList.add("active");
        }
      }
    }
  });
};

/***/ })

};
;