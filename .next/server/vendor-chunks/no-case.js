"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/no-case";
exports.ids = ["vendor-chunks/no-case"];
exports.modules = {

/***/ "(rsc)/./node_modules/no-case/dist/index.js":
/*!********************************************!*\
  !*** ./node_modules/no-case/dist/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports.noCase = void 0;\nvar lower_case_1 = __webpack_require__(/*! lower-case */ \"(rsc)/./node_modules/lower-case/dist/index.js\");\n// Support camel case (\"camelCase\" -> \"camel Case\" and \"CAMELCase\" -> \"CAMEL Case\").\nvar DEFAULT_SPLIT_REGEXP = [\n    /([a-z0-9])([A-Z])/g,\n    /([A-Z])([A-Z][a-z])/g\n];\n// Remove all non-word characters.\nvar DEFAULT_STRIP_REGEXP = /[^A-Z0-9]+/gi;\n/**\n * Normalize the string into something other libraries can manipulate easier.\n */ function noCase(input, options) {\n    if (options === void 0) {\n        options = {};\n    }\n    var _a = options.splitRegexp, splitRegexp = _a === void 0 ? DEFAULT_SPLIT_REGEXP : _a, _b = options.stripRegexp, stripRegexp = _b === void 0 ? DEFAULT_STRIP_REGEXP : _b, _c = options.transform, transform = _c === void 0 ? lower_case_1.lowerCase : _c, _d = options.delimiter, delimiter = _d === void 0 ? \" \" : _d;\n    var result = replace(replace(input, splitRegexp, \"$1\\x00$2\"), stripRegexp, \"\\x00\");\n    var start = 0;\n    var end = result.length;\n    // Trim the delimiter from around the output string.\n    while(result.charAt(start) === \"\\x00\")start++;\n    while(result.charAt(end - 1) === \"\\x00\")end--;\n    // Transform each token independently.\n    return result.slice(start, end).split(\"\\x00\").map(transform).join(delimiter);\n}\nexports.noCase = noCase;\n/**\n * Replace `re` in the input string with the replacement value.\n */ function replace(input, re, value) {\n    if (re instanceof RegExp) return input.replace(re, value);\n    return re.reduce(function(input, re) {\n        return input.replace(re, value);\n    }, input);\n} //# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbm8tY2FzZS9kaXN0L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2JBLDhDQUE2QztJQUFFRyxPQUFPO0FBQUssQ0FBQyxFQUFDO0FBQzdERCxjQUFjLEdBQUcsS0FBSztBQUN0QixJQUFJRyxlQUFlQyxtQkFBT0EsQ0FBQyxpRUFBWTtBQUN2QyxvRkFBb0Y7QUFDcEYsSUFBSUMsdUJBQXVCO0lBQUM7SUFBc0I7Q0FBdUI7QUFDekUsa0NBQWtDO0FBQ2xDLElBQUlDLHVCQUF1QjtBQUMzQjs7Q0FFQyxHQUNELFNBQVNKLE9BQU9LLEtBQUssRUFBRUMsT0FBTztJQUMxQixJQUFJQSxZQUFZLEtBQUssR0FBRztRQUFFQSxVQUFVLENBQUM7SUFBRztJQUN4QyxJQUFJQyxLQUFLRCxRQUFRRSxXQUFXLEVBQUVBLGNBQWNELE9BQU8sS0FBSyxJQUFJSix1QkFBdUJJLElBQUlFLEtBQUtILFFBQVFJLFdBQVcsRUFBRUEsY0FBY0QsT0FBTyxLQUFLLElBQUlMLHVCQUF1QkssSUFBSUUsS0FBS0wsUUFBUU0sU0FBUyxFQUFFQSxZQUFZRCxPQUFPLEtBQUssSUFBSVYsYUFBYVksU0FBUyxHQUFHRixJQUFJRyxLQUFLUixRQUFRUyxTQUFTLEVBQUVBLFlBQVlELE9BQU8sS0FBSyxJQUFJLE1BQU1BO0lBQ3JULElBQUlFLFNBQVNDLFFBQVFBLFFBQVFaLE9BQU9HLGFBQWEsYUFBV0UsYUFBYTtJQUN6RSxJQUFJUSxRQUFRO0lBQ1osSUFBSUMsTUFBTUgsT0FBT0ksTUFBTTtJQUN2QixvREFBb0Q7SUFDcEQsTUFBT0osT0FBT0ssTUFBTSxDQUFDSCxXQUFXLE9BQzVCQTtJQUNKLE1BQU9GLE9BQU9LLE1BQU0sQ0FBQ0YsTUFBTSxPQUFPLE9BQzlCQTtJQUNKLHNDQUFzQztJQUN0QyxPQUFPSCxPQUFPTSxLQUFLLENBQUNKLE9BQU9DLEtBQUtJLEtBQUssQ0FBQyxRQUFNQyxHQUFHLENBQUNaLFdBQVdhLElBQUksQ0FBQ1Y7QUFDcEU7QUFDQWpCLGNBQWMsR0FBR0U7QUFDakI7O0NBRUMsR0FDRCxTQUFTaUIsUUFBUVosS0FBSyxFQUFFcUIsRUFBRSxFQUFFM0IsS0FBSztJQUM3QixJQUFJMkIsY0FBY0MsUUFDZCxPQUFPdEIsTUFBTVksT0FBTyxDQUFDUyxJQUFJM0I7SUFDN0IsT0FBTzJCLEdBQUdFLE1BQU0sQ0FBQyxTQUFVdkIsS0FBSyxFQUFFcUIsRUFBRTtRQUFJLE9BQU9yQixNQUFNWSxPQUFPLENBQUNTLElBQUkzQjtJQUFRLEdBQUdNO0FBQ2hGLEVBQ0EsaUNBQWlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZW5nZ2FtLy4vbm9kZV9tb2R1bGVzL25vLWNhc2UvZGlzdC9pbmRleC5qcz85ZGYwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5ub0Nhc2UgPSB2b2lkIDA7XG52YXIgbG93ZXJfY2FzZV8xID0gcmVxdWlyZShcImxvd2VyLWNhc2VcIik7XG4vLyBTdXBwb3J0IGNhbWVsIGNhc2UgKFwiY2FtZWxDYXNlXCIgLT4gXCJjYW1lbCBDYXNlXCIgYW5kIFwiQ0FNRUxDYXNlXCIgLT4gXCJDQU1FTCBDYXNlXCIpLlxudmFyIERFRkFVTFRfU1BMSVRfUkVHRVhQID0gWy8oW2EtejAtOV0pKFtBLVpdKS9nLCAvKFtBLVpdKShbQS1aXVthLXpdKS9nXTtcbi8vIFJlbW92ZSBhbGwgbm9uLXdvcmQgY2hhcmFjdGVycy5cbnZhciBERUZBVUxUX1NUUklQX1JFR0VYUCA9IC9bXkEtWjAtOV0rL2dpO1xuLyoqXG4gKiBOb3JtYWxpemUgdGhlIHN0cmluZyBpbnRvIHNvbWV0aGluZyBvdGhlciBsaWJyYXJpZXMgY2FuIG1hbmlwdWxhdGUgZWFzaWVyLlxuICovXG5mdW5jdGlvbiBub0Nhc2UoaW5wdXQsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3BsaXRSZWdleHAsIHNwbGl0UmVnZXhwID0gX2EgPT09IHZvaWQgMCA/IERFRkFVTFRfU1BMSVRfUkVHRVhQIDogX2EsIF9iID0gb3B0aW9ucy5zdHJpcFJlZ2V4cCwgc3RyaXBSZWdleHAgPSBfYiA9PT0gdm9pZCAwID8gREVGQVVMVF9TVFJJUF9SRUdFWFAgOiBfYiwgX2MgPSBvcHRpb25zLnRyYW5zZm9ybSwgdHJhbnNmb3JtID0gX2MgPT09IHZvaWQgMCA/IGxvd2VyX2Nhc2VfMS5sb3dlckNhc2UgOiBfYywgX2QgPSBvcHRpb25zLmRlbGltaXRlciwgZGVsaW1pdGVyID0gX2QgPT09IHZvaWQgMCA/IFwiIFwiIDogX2Q7XG4gICAgdmFyIHJlc3VsdCA9IHJlcGxhY2UocmVwbGFjZShpbnB1dCwgc3BsaXRSZWdleHAsIFwiJDFcXDAkMlwiKSwgc3RyaXBSZWdleHAsIFwiXFwwXCIpO1xuICAgIHZhciBzdGFydCA9IDA7XG4gICAgdmFyIGVuZCA9IHJlc3VsdC5sZW5ndGg7XG4gICAgLy8gVHJpbSB0aGUgZGVsaW1pdGVyIGZyb20gYXJvdW5kIHRoZSBvdXRwdXQgc3RyaW5nLlxuICAgIHdoaWxlIChyZXN1bHQuY2hhckF0KHN0YXJ0KSA9PT0gXCJcXDBcIilcbiAgICAgICAgc3RhcnQrKztcbiAgICB3aGlsZSAocmVzdWx0LmNoYXJBdChlbmQgLSAxKSA9PT0gXCJcXDBcIilcbiAgICAgICAgZW5kLS07XG4gICAgLy8gVHJhbnNmb3JtIGVhY2ggdG9rZW4gaW5kZXBlbmRlbnRseS5cbiAgICByZXR1cm4gcmVzdWx0LnNsaWNlKHN0YXJ0LCBlbmQpLnNwbGl0KFwiXFwwXCIpLm1hcCh0cmFuc2Zvcm0pLmpvaW4oZGVsaW1pdGVyKTtcbn1cbmV4cG9ydHMubm9DYXNlID0gbm9DYXNlO1xuLyoqXG4gKiBSZXBsYWNlIGByZWAgaW4gdGhlIGlucHV0IHN0cmluZyB3aXRoIHRoZSByZXBsYWNlbWVudCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gcmVwbGFjZShpbnB1dCwgcmUsIHZhbHVlKSB7XG4gICAgaWYgKHJlIGluc3RhbmNlb2YgUmVnRXhwKVxuICAgICAgICByZXR1cm4gaW5wdXQucmVwbGFjZShyZSwgdmFsdWUpO1xuICAgIHJldHVybiByZS5yZWR1Y2UoZnVuY3Rpb24gKGlucHV0LCByZSkgeyByZXR1cm4gaW5wdXQucmVwbGFjZShyZSwgdmFsdWUpOyB9LCBpbnB1dCk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJub0Nhc2UiLCJsb3dlcl9jYXNlXzEiLCJyZXF1aXJlIiwiREVGQVVMVF9TUExJVF9SRUdFWFAiLCJERUZBVUxUX1NUUklQX1JFR0VYUCIsImlucHV0Iiwib3B0aW9ucyIsIl9hIiwic3BsaXRSZWdleHAiLCJfYiIsInN0cmlwUmVnZXhwIiwiX2MiLCJ0cmFuc2Zvcm0iLCJsb3dlckNhc2UiLCJfZCIsImRlbGltaXRlciIsInJlc3VsdCIsInJlcGxhY2UiLCJzdGFydCIsImVuZCIsImxlbmd0aCIsImNoYXJBdCIsInNsaWNlIiwic3BsaXQiLCJtYXAiLCJqb2luIiwicmUiLCJSZWdFeHAiLCJyZWR1Y2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/no-case/dist/index.js\n");

/***/ })

};
;