"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/lower-case";
exports.ids = ["vendor-chunks/lower-case"];
exports.modules = {

/***/ "(rsc)/./node_modules/lower-case/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lower-case/dist/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports.lowerCase = exports.localeLowerCase = void 0;\n/**\n * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt\n */ var SUPPORTED_LOCALE = {\n    tr: {\n        regexp: /\\u0130|\\u0049|\\u0049\\u0307/g,\n        map: {\n            İ: \"i\",\n            I: \"ı\",\n            İ: \"i\"\n        }\n    },\n    az: {\n        regexp: /\\u0130/g,\n        map: {\n            İ: \"i\",\n            I: \"ı\",\n            İ: \"i\"\n        }\n    },\n    lt: {\n        regexp: /\\u0049|\\u004A|\\u012E|\\u00CC|\\u00CD|\\u0128/g,\n        map: {\n            I: \"i̇\",\n            J: \"j̇\",\n            Į: \"į̇\",\n            Ì: \"i̇̀\",\n            Í: \"i̇́\",\n            Ĩ: \"i̇̃\"\n        }\n    }\n};\n/**\n * Localized lower case.\n */ function localeLowerCase(str, locale) {\n    var lang = SUPPORTED_LOCALE[locale.toLowerCase()];\n    if (lang) return lowerCase(str.replace(lang.regexp, function(m) {\n        return lang.map[m];\n    }));\n    return lowerCase(str);\n}\nexports.localeLowerCase = localeLowerCase;\n/**\n * Lower case as a function.\n */ function lowerCase(str) {\n    return str.toLowerCase();\n}\nexports.lowerCase = lowerCase; //# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbG93ZXItY2FzZS9kaXN0L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2JBLDhDQUE2QztJQUFFRyxPQUFPO0FBQUssQ0FBQyxFQUFDO0FBQzdERCxpQkFBaUIsR0FBR0EsdUJBQXVCLEdBQUcsS0FBSztBQUNuRDs7Q0FFQyxHQUNELElBQUlJLG1CQUFtQjtJQUNuQkMsSUFBSTtRQUNBQyxRQUFRO1FBQ1JDLEtBQUs7WUFDREMsR0FBRztZQUNIQyxHQUFHO1lBQ0hDLElBQUk7UUFDUjtJQUNKO0lBQ0FDLElBQUk7UUFDQUwsUUFBUTtRQUNSQyxLQUFLO1lBQ0RDLEdBQUc7WUFDSEMsR0FBRztZQUNIQyxJQUFJO1FBQ1I7SUFDSjtJQUNBRSxJQUFJO1FBQ0FOLFFBQVE7UUFDUkMsS0FBSztZQUNERSxHQUFHO1lBQ0hJLEdBQUc7WUFDSEMsR0FBRztZQUNIQyxHQUFHO1lBQ0hDLEdBQUc7WUFDSEMsR0FBRztRQUNQO0lBQ0o7QUFDSjtBQUNBOztDQUVDLEdBQ0QsU0FBU2QsZ0JBQWdCZSxHQUFHLEVBQUVDLE1BQU07SUFDaEMsSUFBSUMsT0FBT2hCLGdCQUFnQixDQUFDZSxPQUFPRSxXQUFXLEdBQUc7SUFDakQsSUFBSUQsTUFDQSxPQUFPbEIsVUFBVWdCLElBQUlJLE9BQU8sQ0FBQ0YsS0FBS2QsTUFBTSxFQUFFLFNBQVVpQixDQUFDO1FBQUksT0FBT0gsS0FBS2IsR0FBRyxDQUFDZ0IsRUFBRTtJQUFFO0lBQ2pGLE9BQU9yQixVQUFVZ0I7QUFDckI7QUFDQWxCLHVCQUF1QixHQUFHRztBQUMxQjs7Q0FFQyxHQUNELFNBQVNELFVBQVVnQixHQUFHO0lBQ2xCLE9BQU9BLElBQUlHLFdBQVc7QUFDMUI7QUFDQXJCLGlCQUFpQixHQUFHRSxXQUNwQixpQ0FBaUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbmdnYW0vLi9ub2RlX21vZHVsZXMvbG93ZXItY2FzZS9kaXN0L2luZGV4LmpzPzJjMDQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmxvd2VyQ2FzZSA9IGV4cG9ydHMubG9jYWxlTG93ZXJDYXNlID0gdm9pZCAwO1xuLyoqXG4gKiBTb3VyY2U6IGZ0cDovL2Z0cC51bmljb2RlLm9yZy9QdWJsaWMvVUNEL2xhdGVzdC91Y2QvU3BlY2lhbENhc2luZy50eHRcbiAqL1xudmFyIFNVUFBPUlRFRF9MT0NBTEUgPSB7XG4gICAgdHI6IHtcbiAgICAgICAgcmVnZXhwOiAvXFx1MDEzMHxcXHUwMDQ5fFxcdTAwNDlcXHUwMzA3L2csXG4gICAgICAgIG1hcDoge1xuICAgICAgICAgICAgxLA6IFwiXFx1MDA2OVwiLFxuICAgICAgICAgICAgSTogXCJcXHUwMTMxXCIsXG4gICAgICAgICAgICBJzIc6IFwiXFx1MDA2OVwiLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgYXo6IHtcbiAgICAgICAgcmVnZXhwOiAvXFx1MDEzMC9nLFxuICAgICAgICBtYXA6IHtcbiAgICAgICAgICAgIMSwOiBcIlxcdTAwNjlcIixcbiAgICAgICAgICAgIEk6IFwiXFx1MDEzMVwiLFxuICAgICAgICAgICAgScyHOiBcIlxcdTAwNjlcIixcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGx0OiB7XG4gICAgICAgIHJlZ2V4cDogL1xcdTAwNDl8XFx1MDA0QXxcXHUwMTJFfFxcdTAwQ0N8XFx1MDBDRHxcXHUwMTI4L2csXG4gICAgICAgIG1hcDoge1xuICAgICAgICAgICAgSTogXCJcXHUwMDY5XFx1MDMwN1wiLFxuICAgICAgICAgICAgSjogXCJcXHUwMDZBXFx1MDMwN1wiLFxuICAgICAgICAgICAgxK46IFwiXFx1MDEyRlxcdTAzMDdcIixcbiAgICAgICAgICAgIMOMOiBcIlxcdTAwNjlcXHUwMzA3XFx1MDMwMFwiLFxuICAgICAgICAgICAgw406IFwiXFx1MDA2OVxcdTAzMDdcXHUwMzAxXCIsXG4gICAgICAgICAgICDEqDogXCJcXHUwMDY5XFx1MDMwN1xcdTAzMDNcIixcbiAgICAgICAgfSxcbiAgICB9LFxufTtcbi8qKlxuICogTG9jYWxpemVkIGxvd2VyIGNhc2UuXG4gKi9cbmZ1bmN0aW9uIGxvY2FsZUxvd2VyQ2FzZShzdHIsIGxvY2FsZSkge1xuICAgIHZhciBsYW5nID0gU1VQUE9SVEVEX0xPQ0FMRVtsb2NhbGUudG9Mb3dlckNhc2UoKV07XG4gICAgaWYgKGxhbmcpXG4gICAgICAgIHJldHVybiBsb3dlckNhc2Uoc3RyLnJlcGxhY2UobGFuZy5yZWdleHAsIGZ1bmN0aW9uIChtKSB7IHJldHVybiBsYW5nLm1hcFttXTsgfSkpO1xuICAgIHJldHVybiBsb3dlckNhc2Uoc3RyKTtcbn1cbmV4cG9ydHMubG9jYWxlTG93ZXJDYXNlID0gbG9jYWxlTG93ZXJDYXNlO1xuLyoqXG4gKiBMb3dlciBjYXNlIGFzIGEgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGxvd2VyQ2FzZShzdHIpIHtcbiAgICByZXR1cm4gc3RyLnRvTG93ZXJDYXNlKCk7XG59XG5leHBvcnRzLmxvd2VyQ2FzZSA9IGxvd2VyQ2FzZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImxvd2VyQ2FzZSIsImxvY2FsZUxvd2VyQ2FzZSIsIlNVUFBPUlRFRF9MT0NBTEUiLCJ0ciIsInJlZ2V4cCIsIm1hcCIsIsSwIiwiSSIsIknMhyIsImF6IiwibHQiLCJKIiwixK4iLCLDjCIsIsONIiwixKgiLCJzdHIiLCJsb2NhbGUiLCJsYW5nIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwibSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/lower-case/dist/index.js\n");

/***/ })

};
;