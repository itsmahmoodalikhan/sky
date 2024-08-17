"use strict";
(window.Element.prototype.removeClass = function () {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        a = this;
    return a instanceof HTMLElement || null === a || (a = document.querySelector(a)), this.isVariableDefined(a) && t && a.classList.remove(t), this;
}),
    (window.Element.prototype.addClass = function () {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            a = this;
        return a instanceof HTMLElement || null === a || (a = document.querySelector(a)), this.isVariableDefined(a) && t && a.classList.add(t), this;
    }),
    (window.Element.prototype.toggleClass = function () {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            a = this;
        return a instanceof HTMLElement || null === a || (a = document.querySelector(a)), this.isVariableDefined(a) && t && a.classList.toggle(t), this;
    }),
    (window.Element.prototype.isVariableDefined = function () {
        return !!this && void 0 !== this && null != this;
    });
var e = {
    init: function () {
        e.preLoader(),
            e.dropdownHover(),
            e.stickyHeader(),
            e.stickyBar(),
            e.toolTipFunc(),
            e.popOverFunc(),
            e.backTotop(),
            e.lightBox(),
            e.aosFunc(),
            e.stepper(),
            e.pricing(),
            e.stickyElement(),
            e.pswMeter(),
            e.fakePwd(),
            e.autoTabinput(),
            e.parallaxBG(),
            e.typeText(),
            e.enableIsotope(),
            e.swiperSlider(),
            e.mouseMove();
    },
    isVariableDefined: function (t) {
        return typeof !!t && "undefined" != t && null != t;
    },
    getParents: function (t, a, n) {
        let s = [],
            i = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector;
        for (t = t.parentElement; t && !i.call(t, a); ) {
            if (n) i.call(t, n) && s.push(t);
            else if (a) {
                if (i.call(t, a)) return s.push(t);
            } else s.push(t);
            if (((t = t.parentElement), e.isVariableDefined(t) && i.call(t, a))) return t;
        }
        return s;
    },
    getNextSiblings: function (t, a, n) {
        let s = [],
            i = t.parentNode.firstChild,
            r = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector;
        do
            if (3 !== i.nodeType && i !== t && i === t.nextElementSibling && (!n || n(t))) {
                if (a) {
                    if (r.call(i, a)) return i;
                } else s.push(i);
                t = i;
            }
        while ((i = i.nextSibling));
        return s;
    },
    on: function (t, a, n) {
        document.addEventListener("DOMContentLoaded", () => {
            t instanceof HTMLElement || null === t || (t = document.querySelector(t)), t.addEventListener(a, n);
        });
    },
    onAll: function (t, a, n) {
        document.addEventListener("DOMContentLoaded", () => {
            document.querySelectorAll(t).forEach((t) => {
                a.indexOf(",") > -1
                    ? a.split(",").forEach((a) => {
                          t.addEventListener(a, n);
                      })
                    : t.addEventListener(a, n);
            });
        });
    },
    removeClass: function (t, a) {
        t instanceof HTMLElement || null === t || (t = document.querySelector(t)), e.isVariableDefined(t) && t.removeClass(a);
    },
    removeAllClass: function (t, a) {
        e.isVariableDefined(t) &&
            t instanceof HTMLElement &&
            document.querySelectorAll(t).forEach((t) => {
                t.removeClass(a);
            });
    },
    toggleClass: function (t, a) {
        t instanceof HTMLElement || null === t || (t = document.querySelector(t)), e.isVariableDefined(t) && t.toggleClass(a);
    },
    toggleAllClass: function (t, a) {
        e.isVariableDefined(t) &&
            t instanceof HTMLElement &&
            document.querySelectorAll(t).forEach((t) => {
                t.toggleClass(a);
            });
    },
    addClass: function (t, a) {
        t instanceof HTMLElement || null === t || (t = document.querySelector(t)), e.isVariableDefined(t) && t.addClass(a);
    },
    select: function (t) {
        return document.querySelector(t);
    },
    selectAll: function (t) {
        return document.querySelectorAll(t);
    },
    preLoader: function () {
        window.onload = function () {
            var t = e.select(".preloader");
            e.isVariableDefined(t) &&
                ((t.className += " animate__animated animate__fadeOut"),
                setTimeout(function () {
                    t.style.display = "none";
                }, 200));
        };
    },
    dropdownHover: function () {
        var t;
        window.matchMedia("(min-width: 992px)").matches &&
            ((t = bootstrap),
            document.querySelectorAll(".dropdown-hover .dropdown").forEach(function (a) {
                a.addEventListener("mouseenter", function (a) {
                    let n = a.target.querySelector(':scope>[data-bs-toggle="dropdown"]');
                    n.classList.contains("show") || t.Dropdown.getOrCreateInstance(n).toggle();
                }),
                    a.addEventListener("mouseleave", function (a) {
                        let n = a.target.querySelector(':scope>[data-bs-toggle="dropdown"]');
                        n.classList.contains("show") && t.Dropdown.getOrCreateInstance(n).toggle();
                    });
            }));
    },
    stickyHeader: function () {
        if (window.matchMedia("(min-width: 992px)").matches) {
            var t = e.select(".header-sticky");
            e.isVariableDefined(t) &&
                document.addEventListener("scroll", function (a) {
                    (window.pageYOffset || document.documentElement.scrollTop) >= 400 ? t.addClass("header-sticky-on") : t.removeClass("header-sticky-on");
                });
        }
    },
    stickyBar: function () {
        var t = e.select("[data-sticky]");
        e.isVariableDefined(t) && new Sticky("[data-sticky]");
    },
    toolTipFunc: function () {
        [].slice.call(e.selectAll('[data-bs-toggle="tooltip"]')).map(function (t) {
            return new bootstrap.Tooltip(t);
        });
    },
    popOverFunc: function () {
        [].slice.call(e.selectAll('[data-bs-toggle="popover"]')).map(function (t) {
            return new bootstrap.Popover(t);
        });
    },
    backTotop: function () {
        window.scrollY;
        var t = e.select(".back-top");
        e.isVariableDefined(t) &&
            (window.addEventListener("scroll", function () {
                window.scrollY >= 800 ? t.addClass("back-top-show") : t.removeClass("back-top-show");
            }),
            t.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" })));
    },
    lightBox: function () {
        var t = e.select("[data-glightbox]");
        e.isVariableDefined(t) && GLightbox({ selector: "*[data-glightbox]", openEffect: "fade", closeEffect: "fade" });
    },
    aosFunc: function () {
        var t = e.select(".aos");
        e.isVariableDefined(t) && AOS.init({ duration: 500, easing: "ease-out-quart", once: !0 });
    },
    stepper: function () {
        var t = e.select("#stepper");
        if (e.isVariableDefined(t)) {
            var a = document.querySelectorAll(".next-btn"),
                n = document.querySelectorAll(".prev-btn"),
                s = new Stepper(document.querySelector("#stepper"), { linear: !1, animation: !0 });
            a.forEach(function (t) {
                t.addEventListener("click", () => {
                    s.next();
                });
            }),
                n.forEach(function (t) {
                    t.addEventListener("click", () => {
                        s.previous();
                    });
                });
        }
    },
    pricing: function () {
        var t = e.select(".price-wrap");
        e.isVariableDefined(t) &&
            e.selectAll(".price-wrap").forEach((t) => {
                var a = t.querySelector(".price-toggle"),
                    n = t.querySelectorAll(".plan-price");
                a.addEventListener("change", function () {
                    a.checked
                        ? n.forEach((t) => {
                              var a = t.getAttribute("data-annual-price");
                              t.innerHTML = a;
                          })
                        : n.forEach((t) => {
                              var a = t.getAttribute("data-monthly-price");
                              t.innerHTML = a;
                          });
                });
            });
    },
    stickyElement: function () {
        window.scrollY;
        var t = e.select(".sticky-element");
        e.isVariableDefined(t) &&
            window.addEventListener("scroll", function () {
                window.scrollY >= 800 ? t.addClass("sticky-element-sticked") : t.removeClass("sticky-element-sticked");
            });
    },
    pswMeter: function () {
        e.isVariableDefined(e.select("#pswmeter")) &&
            passwordStrengthMeter({
                containerElement: "#pswmeter",
                passwordInput: "#psw-input",
                showMessage: !0,
                messageContainer: "#pswmeter-message",
                messagesList: ["Write your password...", "Easy peasy!", "That is a simple one", "That is better", "Yeah! that password rocks ;)"],
                height: 8,
                borderRadius: 4,
                pswMinLength: 8,
                colorScore1: "#dc3545",
                colorScore2: "#f7c32e",
                colorScore3: "#4f9ef8",
                colorScore4: "#0cbc87",
            });
    },
    fakePwd: function () {
        if (e.isVariableDefined(e.select(".fakepassword"))) {
            var t = document.querySelector(".fakepassword"),
                a = document.querySelector(".fakepasswordicon");
            a.addEventListener("click", () => {
                "password" == t.type ? (t.setAttribute("type", "text"), a.classList.add("fa-eye")) : (a.classList.remove("fa-eye"), t.setAttribute("type", "password"));
            });
        }
    },
    autoTabinput: function () {
        var t = document.getElementsByClassName("autotab")[0];
        e.isVariableDefined(t) &&
            (t.onkeyup = function (t) {
                var a = t.srcElement,
                    n = parseInt(a.attributes.maxlength.value, 10);
                if (a.value.length >= n) {
                    for (var s = a; (s = s.nextElementSibling) && null != s; )
                        if ("input" == s.tagName.toLowerCase()) {
                            s.focus();
                            break;
                        }
                }
            });
    },
    parallaxBG: function () {
        var t = e.select(".bg-parallax");
        e.isVariableDefined(t) && jarallax(e.selectAll(".bg-parallax"), { speed: 0.6 });
    },
    typeText: function () {
        var t = e.select(".typed");
        e.isVariableDefined(t) &&
            e.selectAll(".typed").forEach((t) => {
                var a = t.getAttribute("data-type-text").split("&&"),
                    n = t.getAttribute("data-speed") ? t.getAttribute("data-speed") : 200,
                    s = t.getAttribute("data-back-speed") ? t.getAttribute("data-back-speed") : 50;
                ityped.init(t, { strings: a, showCursor: !0, typeSpeed: n, backSpeed: s });
            });
    },
    enableIsotope: function () {
        var t = e.select(".grid-item");
        if (e.isVariableDefined(t)) {
            var a = e.select("[data-isotope]");
            e.isVariableDefined(a) &&
                e.selectAll("[data-isotope]").forEach((t) => {
                    var a = JSON.parse(t.getAttribute("data-isotope")),
                        n = new Isotope(t, { itemSelector: ".grid-item", layoutMode: a.layoutMode });
                    imagesLoaded(t).on("progress", function () {
                        n.layout();
                    });
                });
            var n = e.select(".grid-menu");
            e.isVariableDefined(n) &&
                e.selectAll(".grid-menu").forEach((t) => {
                    var a = t.getAttribute("data-target"),
                        n = t.dataset.target,
                        s = JSON.parse(e.select(n).getAttribute("data-isotope")),
                        i = new Isotope(a, { itemSelector: ".grid-item", transitionDuration: "0.7s", layoutMode: s.layoutMode }),
                        r = t.querySelectorAll("li a");
                    r.forEach((t) => {
                        t.addEventListener("click", function (a) {
                            var n = t.getAttribute("data-filter");
                            i.arrange({ filter: n }), r.forEach((t) => t.removeClass("active")), t.addClass("active");
                        });
                    }),
                        imagesLoaded(a).on("progress", function () {
                            i.layout();
                        });
                });
        }
    },
    swiperSlider: function () {
        var t = e.select("[data-swiper-options]");
        e.isVariableDefined(t) &&
            (function t(a = {}, n = ".swiper") {
                document.querySelectorAll(n).forEach((t) => {
                    let n = t.getAttribute("data-swiper-options") ? JSON.parse(t.getAttribute("data-swiper-options")) : {},
                        s = { ...a, ...n };
                    new Swiper(t, s);
                });
            })({ spaceBetween: 0, slidesPerView: 1, loop: !0, autoplay: { delay: 2e3, disableOnInteraction: !1, pauseOnMouseEnter: !1 }, freeMode: !1 });
    },
    mouseMove: function () {
        document.addEventListener("mousemove", function (t) {
            this.querySelectorAll(".parallax-wrap .layer").forEach((a) => {
                let n = a.getAttribute("data-depth"),
                    s = (window.innerWidth - t.pageX * n) / 90,
                    i = (window.innerHeight - t.pageY * n) / 90;
                a.style.transform = `translateX(${s}px) translateY(${i}px)`;
            });
        });
    },
};
e.init();
