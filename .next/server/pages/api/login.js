"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "@hapi/iron":
/*!*****************************!*\
  !*** external "@hapi/iron" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("@hapi/iron");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("body-parser");

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "mysql2":
/*!*************************!*\
  !*** external "mysql2" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("mysql2");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("passport");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("passport-local");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("sequelize");

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = import("uuid");;

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./src/lib/auth-cookies.js":
/*!*********************************!*\
  !*** ./src/lib/auth-cookies.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MAX_AGE\": () => (/* binding */ MAX_AGE),\n/* harmony export */   \"getTokenCookie\": () => (/* binding */ getTokenCookie),\n/* harmony export */   \"parseCookies\": () => (/* binding */ parseCookies),\n/* harmony export */   \"removeTokenCookie\": () => (/* binding */ removeTokenCookie),\n/* harmony export */   \"setTokenCookie\": () => (/* binding */ setTokenCookie)\n/* harmony export */ });\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);\n\nconst TOKEN_NAME = \"token\";\nconst MAX_AGE = 60 * 60 * 8 // 8 hours\n;\nfunction setTokenCookie(res, token) {\n    const cookie = (0,cookie__WEBPACK_IMPORTED_MODULE_0__.serialize)(TOKEN_NAME, token, {\n        maxAge: MAX_AGE,\n        expires: new Date(Date.now() + MAX_AGE * 1000),\n        httpOnly: true,\n        secure: \"development\" === \"production\",\n        path: \"/\",\n        sameSite: \"lax\"\n    });\n    res.setHeader(\"Set-Cookie\", cookie);\n}\nfunction removeTokenCookie(res) {\n    const cookie = (0,cookie__WEBPACK_IMPORTED_MODULE_0__.serialize)(TOKEN_NAME, \"\", {\n        maxAge: -1,\n        path: \"/\"\n    });\n    res.setHeader(\"Set-Cookie\", cookie);\n}\nfunction parseCookies(req) {\n    // For API Routes we don't need to parse the cookies.\n    if (req.cookies) return req.cookies;\n    // For pages we do need to parse the cookies.\n    const cookie = req.headers?.cookie;\n    return (0,cookie__WEBPACK_IMPORTED_MODULE_0__.parse)(cookie || \"\");\n}\nfunction getTokenCookie(req) {\n    const cookies = parseCookies(req);\n    return cookies[TOKEN_NAME];\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbGliL2F1dGgtY29va2llcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlDO0FBRXpDLE1BQU1FLGFBQWE7QUFFWixNQUFNQyxVQUFVLEtBQUssS0FBSyxFQUFFLFVBQVU7Q0FBWDtBQUUzQixTQUFTQyxlQUFlQyxHQUFHLEVBQUVDLEtBQUssRUFBRTtJQUN6QyxNQUFNQyxTQUFTUCxpREFBU0EsQ0FBQ0UsWUFBWUksT0FBTztRQUMxQ0UsUUFBUUw7UUFDUk0sU0FBUyxJQUFJQyxLQUFLQSxLQUFLQyxHQUFHLEtBQUtSLFVBQVU7UUFDekNTLFVBQVUsSUFBSTtRQUNkQyxRQUFRQyxrQkFBeUI7UUFDakNDLE1BQU07UUFDTkMsVUFBVTtJQUNaO0lBRUFYLElBQUlZLFNBQVMsQ0FBQyxjQUFjVjtBQUM5QixDQUFDO0FBRU0sU0FBU1csa0JBQWtCYixHQUFHLEVBQUU7SUFDckMsTUFBTUUsU0FBU1AsaURBQVNBLENBQUNFLFlBQVksSUFBSTtRQUN2Q00sUUFBUSxDQUFDO1FBQ1RPLE1BQU07SUFDUjtJQUVBVixJQUFJWSxTQUFTLENBQUMsY0FBY1Y7QUFDOUIsQ0FBQztBQUVNLFNBQVNZLGFBQWFDLEdBQUcsRUFBRTtJQUNoQyxxREFBcUQ7SUFDckQsSUFBSUEsSUFBSUMsT0FBTyxFQUFFLE9BQU9ELElBQUlDLE9BQU87SUFFbkMsNkNBQTZDO0lBQzdDLE1BQU1kLFNBQVNhLElBQUlFLE9BQU8sRUFBRWY7SUFDNUIsT0FBT04sNkNBQUtBLENBQUNNLFVBQVU7QUFDekIsQ0FBQztBQUVNLFNBQVNnQixlQUFlSCxHQUFHLEVBQUU7SUFDbEMsTUFBTUMsVUFBVUYsYUFBYUM7SUFDN0IsT0FBT0MsT0FBTyxDQUFDbkIsV0FBVztBQUM1QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3NjMTkwLy4vc3JjL2xpYi9hdXRoLWNvb2tpZXMuanM/MmE3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzZXJpYWxpemUsIHBhcnNlIH0gZnJvbSAnY29va2llJ1xuXG5jb25zdCBUT0tFTl9OQU1FID0gJ3Rva2VuJ1xuXG5leHBvcnQgY29uc3QgTUFYX0FHRSA9IDYwICogNjAgKiA4IC8vIDggaG91cnNcblxuZXhwb3J0IGZ1bmN0aW9uIHNldFRva2VuQ29va2llKHJlcywgdG9rZW4pIHtcbiAgY29uc3QgY29va2llID0gc2VyaWFsaXplKFRPS0VOX05BTUUsIHRva2VuLCB7XG4gICAgbWF4QWdlOiBNQVhfQUdFLFxuICAgIGV4cGlyZXM6IG5ldyBEYXRlKERhdGUubm93KCkgKyBNQVhfQUdFICogMTAwMCksXG4gICAgaHR0cE9ubHk6IHRydWUsXG4gICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nLFxuICAgIHBhdGg6ICcvJyxcbiAgICBzYW1lU2l0ZTogJ2xheCcsXG4gIH0pXG5cbiAgcmVzLnNldEhlYWRlcignU2V0LUNvb2tpZScsIGNvb2tpZSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRva2VuQ29va2llKHJlcykge1xuICBjb25zdCBjb29raWUgPSBzZXJpYWxpemUoVE9LRU5fTkFNRSwgJycsIHtcbiAgICBtYXhBZ2U6IC0xLFxuICAgIHBhdGg6ICcvJyxcbiAgfSlcblxuICByZXMuc2V0SGVhZGVyKCdTZXQtQ29va2llJywgY29va2llKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDb29raWVzKHJlcSkge1xuICAvLyBGb3IgQVBJIFJvdXRlcyB3ZSBkb24ndCBuZWVkIHRvIHBhcnNlIHRoZSBjb29raWVzLlxuICBpZiAocmVxLmNvb2tpZXMpIHJldHVybiByZXEuY29va2llc1xuXG4gIC8vIEZvciBwYWdlcyB3ZSBkbyBuZWVkIHRvIHBhcnNlIHRoZSBjb29raWVzLlxuICBjb25zdCBjb29raWUgPSByZXEuaGVhZGVycz8uY29va2llXG4gIHJldHVybiBwYXJzZShjb29raWUgfHwgJycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUb2tlbkNvb2tpZShyZXEpIHtcbiAgY29uc3QgY29va2llcyA9IHBhcnNlQ29va2llcyhyZXEpXG4gIHJldHVybiBjb29raWVzW1RPS0VOX05BTUVdXG59Il0sIm5hbWVzIjpbInNlcmlhbGl6ZSIsInBhcnNlIiwiVE9LRU5fTkFNRSIsIk1BWF9BR0UiLCJzZXRUb2tlbkNvb2tpZSIsInJlcyIsInRva2VuIiwiY29va2llIiwibWF4QWdlIiwiZXhwaXJlcyIsIkRhdGUiLCJub3ciLCJodHRwT25seSIsInNlY3VyZSIsInByb2Nlc3MiLCJwYXRoIiwic2FtZVNpdGUiLCJzZXRIZWFkZXIiLCJyZW1vdmVUb2tlbkNvb2tpZSIsInBhcnNlQ29va2llcyIsInJlcSIsImNvb2tpZXMiLCJoZWFkZXJzIiwiZ2V0VG9rZW5Db29raWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/lib/auth-cookies.js\n");

/***/ }),

/***/ "(api)/./src/lib/auth.js":
/*!*************************!*\
  !*** ./src/lib/auth.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLoginSession\": () => (/* binding */ getLoginSession),\n/* harmony export */   \"setLoginSession\": () => (/* binding */ setLoginSession)\n/* harmony export */ });\n/* harmony import */ var _hapi_iron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hapi/iron */ \"@hapi/iron\");\n/* harmony import */ var _hapi_iron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hapi_iron__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _auth_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-cookies */ \"(api)/./src/lib/auth-cookies.js\");\n\n\nconst TOKEN_SECRET = process.env.TOKEN_SECRET;\nasync function setLoginSession(res, session) {\n    const createdAt = Date.now();\n    // Create a session object with a max age that we can validate later\n    const obj = {\n        ...session,\n        createdAt,\n        maxAge: _auth_cookies__WEBPACK_IMPORTED_MODULE_1__.MAX_AGE\n    };\n    const token = await _hapi_iron__WEBPACK_IMPORTED_MODULE_0___default().seal(obj, TOKEN_SECRET, (_hapi_iron__WEBPACK_IMPORTED_MODULE_0___default().defaults));\n    (0,_auth_cookies__WEBPACK_IMPORTED_MODULE_1__.setTokenCookie)(res, token);\n}\nasync function getLoginSession(req) {\n    const token = (0,_auth_cookies__WEBPACK_IMPORTED_MODULE_1__.getTokenCookie)(req);\n    if (!token) return;\n    const session = await _hapi_iron__WEBPACK_IMPORTED_MODULE_0___default().unseal(token, TOKEN_SECRET, (_hapi_iron__WEBPACK_IMPORTED_MODULE_0___default().defaults));\n    const expiresAt = session.createdAt + session.maxAge * 1000;\n    // Validate the expiration date of the session\n    if (Date.now() > expiresAt) {\n        throw new Error(\"Session expired\");\n    }\n    return session;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbGliL2F1dGguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNkI7QUFDMkM7QUFFeEUsTUFBTUksZUFBZUMsUUFBUUMsR0FBRyxDQUFDRixZQUFZO0FBRXRDLGVBQWVHLGdCQUFnQkMsR0FBRyxFQUFFQyxPQUFPLEVBQUU7SUFDbEQsTUFBTUMsWUFBWUMsS0FBS0MsR0FBRztJQUMxQixvRUFBb0U7SUFDcEUsTUFBTUMsTUFBTTtRQUFFLEdBQUdKLE9BQU87UUFBRUM7UUFBV0ksUUFBUWIsa0RBQU9BO0lBQUM7SUFDckQsTUFBTWMsUUFBUSxNQUFNZixzREFBUyxDQUFDYSxLQUFLVCxjQUFjSiw0REFBYTtJQUU5REUsNkRBQWNBLENBQUNNLEtBQUtPO0FBQ3RCLENBQUM7QUFFTSxlQUFlRyxnQkFBZ0JDLEdBQUcsRUFBRTtJQUN6QyxNQUFNSixRQUFRWiw2REFBY0EsQ0FBQ2dCO0lBRTdCLElBQUksQ0FBQ0osT0FBTztJQUVaLE1BQU1OLFVBQVUsTUFBTVQsd0RBQVcsQ0FBQ2UsT0FBT1gsY0FBY0osNERBQWE7SUFDcEUsTUFBTXFCLFlBQVlaLFFBQVFDLFNBQVMsR0FBR0QsUUFBUUssTUFBTSxHQUFHO0lBRXZELDhDQUE4QztJQUM5QyxJQUFJSCxLQUFLQyxHQUFHLEtBQUtTLFdBQVc7UUFDMUIsTUFBTSxJQUFJQyxNQUFNLG1CQUFrQjtJQUNwQyxDQUFDO0lBRUQsT0FBT2I7QUFDVCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3NjMTkwLy4vc3JjL2xpYi9hdXRoLmpzPzg3YmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElyb24gZnJvbSAnQGhhcGkvaXJvbidcbmltcG9ydCB7IE1BWF9BR0UsIHNldFRva2VuQ29va2llLCBnZXRUb2tlbkNvb2tpZSB9IGZyb20gJy4vYXV0aC1jb29raWVzJ1xuXG5jb25zdCBUT0tFTl9TRUNSRVQgPSBwcm9jZXNzLmVudi5UT0tFTl9TRUNSRVRcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldExvZ2luU2Vzc2lvbihyZXMsIHNlc3Npb24pIHtcbiAgY29uc3QgY3JlYXRlZEF0ID0gRGF0ZS5ub3coKVxuICAvLyBDcmVhdGUgYSBzZXNzaW9uIG9iamVjdCB3aXRoIGEgbWF4IGFnZSB0aGF0IHdlIGNhbiB2YWxpZGF0ZSBsYXRlclxuICBjb25zdCBvYmogPSB7IC4uLnNlc3Npb24sIGNyZWF0ZWRBdCwgbWF4QWdlOiBNQVhfQUdFIH1cbiAgY29uc3QgdG9rZW4gPSBhd2FpdCBJcm9uLnNlYWwob2JqLCBUT0tFTl9TRUNSRVQsIElyb24uZGVmYXVsdHMpXG5cbiAgc2V0VG9rZW5Db29raWUocmVzLCB0b2tlbilcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExvZ2luU2Vzc2lvbihyZXEpIHtcbiAgY29uc3QgdG9rZW4gPSBnZXRUb2tlbkNvb2tpZShyZXEpXG5cbiAgaWYgKCF0b2tlbikgcmV0dXJuXG5cbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IElyb24udW5zZWFsKHRva2VuLCBUT0tFTl9TRUNSRVQsIElyb24uZGVmYXVsdHMpXG4gIGNvbnN0IGV4cGlyZXNBdCA9IHNlc3Npb24uY3JlYXRlZEF0ICsgc2Vzc2lvbi5tYXhBZ2UgKiAxMDAwXG5cbiAgLy8gVmFsaWRhdGUgdGhlIGV4cGlyYXRpb24gZGF0ZSBvZiB0aGUgc2Vzc2lvblxuICBpZiAoRGF0ZS5ub3coKSA+IGV4cGlyZXNBdCkge1xuICAgIHRocm93IG5ldyBFcnJvcignU2Vzc2lvbiBleHBpcmVkJylcbiAgfVxuXG4gIHJldHVybiBzZXNzaW9uXG59Il0sIm5hbWVzIjpbIklyb24iLCJNQVhfQUdFIiwic2V0VG9rZW5Db29raWUiLCJnZXRUb2tlbkNvb2tpZSIsIlRPS0VOX1NFQ1JFVCIsInByb2Nlc3MiLCJlbnYiLCJzZXRMb2dpblNlc3Npb24iLCJyZXMiLCJzZXNzaW9uIiwiY3JlYXRlZEF0IiwiRGF0ZSIsIm5vdyIsIm9iaiIsIm1heEFnZSIsInRva2VuIiwic2VhbCIsImRlZmF1bHRzIiwiZ2V0TG9naW5TZXNzaW9uIiwicmVxIiwidW5zZWFsIiwiZXhwaXJlc0F0IiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/lib/auth.js\n");

/***/ }),

/***/ "(api)/./src/lib/password-local.js":
/*!***********************************!*\
  !*** ./src/lib/password-local.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"localStrategy\": () => (/* binding */ localStrategy)\n/* harmony export */ });\n/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! passport-local */ \"passport-local\");\n/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(passport_local__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ \"(api)/./src/lib/user.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_user__WEBPACK_IMPORTED_MODULE_1__]);\n_user__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst localStrategy = new (passport_local__WEBPACK_IMPORTED_MODULE_0___default().Strategy)(function(username, password, done) {\n    (0,_user__WEBPACK_IMPORTED_MODULE_1__.findUser)({\n        username\n    }).then((user)=>{\n        if (user && (0,_user__WEBPACK_IMPORTED_MODULE_1__.validatePassword)(user, password)) {\n            done(null, user);\n        } else {\n            done(new Error(\"Invalid username and password combination\"));\n        }\n    }).catch((error)=>{\n        done(error);\n    });\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbGliL3Bhc3N3b3JkLWxvY2FsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBa0M7QUFDaUI7QUFFNUMsTUFBTUcsZ0JBQWdCLElBQUlILGdFQUFjLENBQUMsU0FDOUNLLFFBQVEsRUFDUkMsUUFBUSxFQUNSQyxJQUFJLEVBQ0o7SUFDQU4sK0NBQVFBLENBQUM7UUFBRUk7SUFBUyxHQUNqQkcsSUFBSSxDQUFDLENBQUNDLE9BQVM7UUFDZCxJQUFJQSxRQUFRUCx1REFBZ0JBLENBQUNPLE1BQU1ILFdBQVc7WUFDNUNDLEtBQUssSUFBSSxFQUFFRTtRQUNiLE9BQU87WUFDTEYsS0FBSyxJQUFJRyxNQUFNO1FBQ2pCLENBQUM7SUFDSCxHQUNDQyxLQUFLLENBQUMsQ0FBQ0MsUUFBVTtRQUNoQkwsS0FBS0s7SUFDUDtBQUNKLEdBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jc2MxOTAvLi9zcmMvbGliL3Bhc3N3b3JkLWxvY2FsLmpzP2VjOTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExvY2FsIGZyb20gJ3Bhc3Nwb3J0LWxvY2FsJ1xuaW1wb3J0IHsgZmluZFVzZXIsIHZhbGlkYXRlUGFzc3dvcmQgfSBmcm9tICcuL3VzZXInXG5cbmV4cG9ydCBjb25zdCBsb2NhbFN0cmF0ZWd5ID0gbmV3IExvY2FsLlN0cmF0ZWd5KGZ1bmN0aW9uIChcbiAgdXNlcm5hbWUsXG4gIHBhc3N3b3JkLFxuICBkb25lXG4pIHtcbiAgZmluZFVzZXIoeyB1c2VybmFtZSB9KVxuICAgIC50aGVuKCh1c2VyKSA9PiB7XG4gICAgICBpZiAodXNlciAmJiB2YWxpZGF0ZVBhc3N3b3JkKHVzZXIsIHBhc3N3b3JkKSkge1xuICAgICAgICBkb25lKG51bGwsIHVzZXIpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb25lKG5ldyBFcnJvcignSW52YWxpZCB1c2VybmFtZSBhbmQgcGFzc3dvcmQgY29tYmluYXRpb24nKSlcbiAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGRvbmUoZXJyb3IpXG4gICAgfSlcbn0pIl0sIm5hbWVzIjpbIkxvY2FsIiwiZmluZFVzZXIiLCJ2YWxpZGF0ZVBhc3N3b3JkIiwibG9jYWxTdHJhdGVneSIsIlN0cmF0ZWd5IiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImRvbmUiLCJ0aGVuIiwidXNlciIsIkVycm9yIiwiY2F0Y2giLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/lib/password-local.js\n");

/***/ }),

/***/ "(api)/./src/lib/user.js":
/*!*************************!*\
  !*** ./src/lib/user.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createUser\": () => (/* binding */ createUser),\n/* harmony export */   \"findUser\": () => (/* binding */ findUser),\n/* harmony export */   \"validatePassword\": () => (/* binding */ validatePassword)\n/* harmony export */ });\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ \"uuid\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_1__]);\nuuid__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\nconst express = __webpack_require__(/*! express */ \"express\");\nconst app = express();\nconst mysql = __webpack_require__(/*! mysql2 */ \"mysql2\");\nconst cors = __webpack_require__(/*! cors */ \"cors\");\nvar fs = __webpack_require__(/*! fs */ \"fs\");\nvar path = __webpack_require__(/*! path */ \"path\");\nvar Sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\nvar env = \"development\" || 0;\nvar fs = __webpack_require__(/*! fs */ \"fs\");\nvar path = __webpack_require__(/*! path */ \"path\");\nvar Sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\nvar env = \"development\" || 0;\nvar db = {};\nconst sequelize = new Sequelize(\"absolutemedia\", \"root\", \"password1!\", {\n    host: \"localhost\",\n    dialect: \"mysql\"\n});\nsequelize.authenticate().then(()=>{\n    console.log(\"Connection has been established successfully.\");\n}).catch((error)=>{\n    console.error(\"Unable to connect to the database: \", error);\n});\n/**\n * User methods. The example doesn't contain a DB, but for real applications you must use a\n * db here, such as MongoDB, Fauna, SQL, etc.\n */ var User = sequelize.define(\"user\", {\n    id: {\n        autoIncrement: true,\n        primaryKey: true,\n        type: Sequelize.INTEGER\n    },\n    createdAt: {\n        type: Sequelize.DATE\n    },\n    username: {\n        type: Sequelize.TEXT\n    },\n    hash: {\n        type: Sequelize.STRING\n    },\n    salt: {\n        type: Sequelize.UUID,\n        allowNull: false\n    }\n});\n(async ()=>{\n    await User.sync().then(function() {\n        console.log(\"Nice! Database looks fine\");\n    }).catch(function(err) {\n        console.log(err, \"Something went wrong with the Database Update!\");\n    });\n})();\n//const users = [user]\nasync function createUser({ username , password  }) {\n    // Here you should create the user and save the salt and hashed password (some dbs may have\n    // authentication methods that will do it for you so you don't have to worry about it):\n    const salt = crypto__WEBPACK_IMPORTED_MODULE_0___default().randomBytes(16).toString(\"hex\");\n    console.log(salt);\n    const hash = crypto__WEBPACK_IMPORTED_MODULE_0___default().pbkdf2Sync(password, salt, 1000, 64, \"sha512\").toString(\"hex\");\n    const user = await User.create({\n        createdAt: Date.now(),\n        username,\n        hash,\n        salt\n    });\n    // This is an in memory store for users, there is no data persistence without a proper DB\n    return {\n        username,\n        createdAt: Date.now()\n    };\n}\n// Here you should lookup for the user in your DB\nasync function findUser({ username  }) {\n    // This is an in memory store for users, there is no data persistence without a proper DB\n    return User.findAll({\n        where: {\n            username: username\n        }\n    });\n}\n// Compare the password of an already fetched user (using `findUser`) and compare the\n// password for a potential match\nfunction validatePassword(user, inputPassword) {\n    console.log(\"usersalt\" + user.salt);\n    const inputHash = crypto__WEBPACK_IMPORTED_MODULE_0___default().pbkdf2Sync(inputPassword, user.salt, 1000, 64, \"sha512\").toString(\"hex\");\n    const passwordsMatch = user.hash === inputHash;\n    return passwordsMatch;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUU7SUFDcERuQyxRQUFRQyxHQUFHLENBQUMsYUFBYTBCLEtBQUtWLElBQUk7SUFDbEMsTUFBTW1CLFlBQVl4RCx3REFDTCxDQUFDdUQsZUFBZVIsS0FBS1YsSUFBSSxFQUFFLE1BQU0sSUFBSSxVQUMvQ1EsUUFBUSxDQUFDO0lBQ1osTUFBTVksaUJBQWlCVixLQUFLWixJQUFJLEtBQUtxQjtJQUNyQyxPQUFPQztBQUNULENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jc2MxOTAvLi9zcmMvbGliL3VzZXIuanM/ZWZlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3J5cHRvIGZyb20gJ2NyeXB0bydcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnXG5cbmNvbnN0IGJvZHlQYXJzZXIgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIilcbmNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcbmNvbnN0IG15c3FsID0gcmVxdWlyZShcIm15c3FsMlwiKTtcbmNvbnN0IGNvcnMgPSByZXF1aXJlKCdjb3JzJyk7XG52YXIgZnMgPSByZXF1aXJlKFwiZnNcIik7XG52YXIgcGF0aCA9IHJlcXVpcmUoXCJwYXRoXCIpO1xudmFyIFNlcXVlbGl6ZSA9IHJlcXVpcmUoXCJzZXF1ZWxpemVcIik7XG52YXIgZW52ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgXCJkZXZlbG9wbWVudFwiO1xudmFyIGZzID0gcmVxdWlyZShcImZzXCIpO1xudmFyIHBhdGggPSByZXF1aXJlKFwicGF0aFwiKTtcbnZhciBTZXF1ZWxpemUgPSByZXF1aXJlKFwic2VxdWVsaXplXCIpO1xudmFyIGVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8IFwiZGV2ZWxvcG1lbnRcIjtcbnZhciBkYiA9IHt9O1xuY29uc3Qgc2VxdWVsaXplID0gbmV3IFNlcXVlbGl6ZShcbiAgICAnYWJzb2x1dGVtZWRpYScsXG4gICAgJ3Jvb3QnLFxuICAgICdwYXNzd29yZDEhJyxcbiAgICAge1xuICAgICAgIGhvc3Q6ICdsb2NhbGhvc3QnLFxuICAgICAgIGRpYWxlY3Q6ICdteXNxbCdcbiAgICAgfVxuICAgKTtcbiAgIHNlcXVlbGl6ZS5hdXRoZW50aWNhdGUoKS50aGVuKCgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnQ29ubmVjdGlvbiBoYXMgYmVlbiBlc3RhYmxpc2hlZCBzdWNjZXNzZnVsbHkuJyk7XG4gfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgY29uc29sZS5lcnJvcignVW5hYmxlIHRvIGNvbm5lY3QgdG8gdGhlIGRhdGFiYXNlOiAnLCBlcnJvcik7XG4gfSk7XG5cbi8qKlxuICogVXNlciBtZXRob2RzLiBUaGUgZXhhbXBsZSBkb2Vzbid0IGNvbnRhaW4gYSBEQiwgYnV0IGZvciByZWFsIGFwcGxpY2F0aW9ucyB5b3UgbXVzdCB1c2UgYVxuICogZGIgaGVyZSwgc3VjaCBhcyBNb25nb0RCLCBGYXVuYSwgU1FMLCBldGMuXG4gKi9cblxuICAgIHZhciBVc2VyID0gc2VxdWVsaXplLmRlZmluZSgndXNlcicsIHtcblxuICAgICAgICBpZDoge1xuICAgICAgICAgICAgYXV0b0luY3JlbWVudDogdHJ1ZSxcbiAgICAgICAgICAgIHByaW1hcnlLZXk6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuSU5URUdFUlxuICAgICAgICB9LFxuXG4gICAgICAgIGNyZWF0ZWRBdDoge1xuICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5EQVRFXG4gICAgICAgIH0sXG5cbiAgICAgICAgdXNlcm5hbWU6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5URVhUXG4gICAgICAgIH0sXG5cbiAgICAgICAgaGFzaDoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgICB9LFxuICAgICAgICBzYWx0OiB7XG4gICAgICAgICAgdHlwZTogU2VxdWVsaXplLlVVSUQsXG4gICAgICAgICAgYWxsb3dOdWxsOiBmYWxzZVxuICAgICAgICAgIFxuICAgICAgfVxuXG4gICAgfSk7XG5cbiAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgYXdhaXQgVXNlci5zeW5jKClcbiAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ05pY2UhIERhdGFiYXNlIGxvb2tzIGZpbmUnKVxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyLCBcIlNvbWV0aGluZyB3ZW50IHdyb25nIHdpdGggdGhlIERhdGFiYXNlIFVwZGF0ZSFcIilcbn0pO1xuIH0pKCk7XG5cblxuXG5cbi8vY29uc3QgdXNlcnMgPSBbdXNlcl1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVVzZXIoeyB1c2VybmFtZSwgcGFzc3dvcmQgfSkge1xuICAvLyBIZXJlIHlvdSBzaG91bGQgY3JlYXRlIHRoZSB1c2VyIGFuZCBzYXZlIHRoZSBzYWx0IGFuZCBoYXNoZWQgcGFzc3dvcmQgKHNvbWUgZGJzIG1heSBoYXZlXG4gIC8vIGF1dGhlbnRpY2F0aW9uIG1ldGhvZHMgdGhhdCB3aWxsIGRvIGl0IGZvciB5b3Ugc28geW91IGRvbid0IGhhdmUgdG8gd29ycnkgYWJvdXQgaXQpOlxuICBjb25zdCBzYWx0ID0gY3J5cHRvLnJhbmRvbUJ5dGVzKDE2KS50b1N0cmluZygnaGV4JylcbiAgY29uc29sZS5sb2coc2FsdCk7XG4gIGNvbnN0IGhhc2ggPSBjcnlwdG9cbiAgICAucGJrZGYyU3luYyhwYXNzd29yZCwgc2FsdCwgMTAwMCwgNjQsICdzaGE1MTInKVxuICAgIC50b1N0cmluZygnaGV4JylcbiAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuY3JlYXRlKHtcbiAgICBjcmVhdGVkQXQ6IERhdGUubm93KCksXG4gICAgdXNlcm5hbWUsXG4gICAgaGFzaCxcbiAgICBzYWx0LFxuICB9KTtcblxuICAvLyBUaGlzIGlzIGFuIGluIG1lbW9yeSBzdG9yZSBmb3IgdXNlcnMsIHRoZXJlIGlzIG5vIGRhdGEgcGVyc2lzdGVuY2Ugd2l0aG91dCBhIHByb3BlciBEQlxuICBcblxuICByZXR1cm4geyB1c2VybmFtZSwgY3JlYXRlZEF0OiBEYXRlLm5vdygpIH1cbn1cblxuLy8gSGVyZSB5b3Ugc2hvdWxkIGxvb2t1cCBmb3IgdGhlIHVzZXIgaW4geW91ciBEQlxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZpbmRVc2VyKHsgdXNlcm5hbWUgfSkge1xuICAvLyBUaGlzIGlzIGFuIGluIG1lbW9yeSBzdG9yZSBmb3IgdXNlcnMsIHRoZXJlIGlzIG5vIGRhdGEgcGVyc2lzdGVuY2Ugd2l0aG91dCBhIHByb3BlciBEQlxuICByZXR1cm4gVXNlci5maW5kQWxsKHt3aGVyZToge3VzZXJuYW1lOiB1c2VybmFtZX19KTtcbn1cblxuLy8gQ29tcGFyZSB0aGUgcGFzc3dvcmQgb2YgYW4gYWxyZWFkeSBmZXRjaGVkIHVzZXIgKHVzaW5nIGBmaW5kVXNlcmApIGFuZCBjb21wYXJlIHRoZVxuLy8gcGFzc3dvcmQgZm9yIGEgcG90ZW50aWFsIG1hdGNoXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVQYXNzd29yZCh1c2VyLCBpbnB1dFBhc3N3b3JkKSB7XG4gIGNvbnNvbGUubG9nKFwidXNlcnNhbHRcIiArIHVzZXIuc2FsdCk7XG4gIGNvbnN0IGlucHV0SGFzaCA9IGNyeXB0b1xuICAgIC5wYmtkZjJTeW5jKGlucHV0UGFzc3dvcmQsIHVzZXIuc2FsdCwgMTAwMCwgNjQsICdzaGE1MTInKVxuICAgIC50b1N0cmluZygnaGV4JylcbiAgY29uc3QgcGFzc3dvcmRzTWF0Y2ggPSB1c2VyLmhhc2ggPT09IGlucHV0SGFzaFxuICByZXR1cm4gcGFzc3dvcmRzTWF0Y2hcbn0iXSwibmFtZXMiOlsiY3J5cHRvIiwidjQiLCJ1dWlkdjQiLCJib2R5UGFyc2VyIiwicmVxdWlyZSIsImV4cHJlc3MiLCJhcHAiLCJteXNxbCIsImNvcnMiLCJmcyIsInBhdGgiLCJTZXF1ZWxpemUiLCJlbnYiLCJwcm9jZXNzIiwiZGIiLCJzZXF1ZWxpemUiLCJob3N0IiwiZGlhbGVjdCIsImF1dGhlbnRpY2F0ZSIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnJvciIsIlVzZXIiLCJkZWZpbmUiLCJpZCIsImF1dG9JbmNyZW1lbnQiLCJwcmltYXJ5S2V5IiwidHlwZSIsIklOVEVHRVIiLCJjcmVhdGVkQXQiLCJEQVRFIiwidXNlcm5hbWUiLCJURVhUIiwiaGFzaCIsIlNUUklORyIsInNhbHQiLCJVVUlEIiwiYWxsb3dOdWxsIiwic3luYyIsImVyciIsImNyZWF0ZVVzZXIiLCJwYXNzd29yZCIsInJhbmRvbUJ5dGVzIiwidG9TdHJpbmciLCJwYmtkZjJTeW5jIiwidXNlciIsImNyZWF0ZSIsIkRhdGUiLCJub3ciLCJmaW5kVXNlciIsImZpbmRBbGwiLCJ3aGVyZSIsInZhbGlkYXRlUGFzc3dvcmQiLCJpbnB1dFBhc3N3b3JkIiwiaW5wdXRIYXNoIiwicGFzc3dvcmRzTWF0Y2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/lib/user.js\n");

/***/ }),

/***/ "(api)/./src/pages/api/login.js":
/*!********************************!*\
  !*** ./src/pages/api/login.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var _lib_password_local__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/password-local */ \"(api)/./src/lib/password-local.js\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/auth */ \"(api)/./src/lib/auth.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_1__, _lib_password_local__WEBPACK_IMPORTED_MODULE_2__]);\n([next_connect__WEBPACK_IMPORTED_MODULE_1__, _lib_password_local__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst authenticate = (method, req, res)=>new Promise((resolve, reject)=>{\n        passport__WEBPACK_IMPORTED_MODULE_0___default().authenticate(method, {\n            session: false\n        }, (error, token)=>{\n            if (error) {\n                reject(error);\n            } else {\n                resolve(token);\n            }\n        })(req, res);\n    });\npassport__WEBPACK_IMPORTED_MODULE_0___default().use(_lib_password_local__WEBPACK_IMPORTED_MODULE_2__.localStrategy);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_connect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().use(passport__WEBPACK_IMPORTED_MODULE_0___default().initialize()).post(async (req, res)=>{\n    try {\n        const user = await authenticate(\"local\", req, res);\n        // session is the payload to save in the token, it may contain basic info about the user\n        const session = {\n            ...user\n        };\n        await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_3__.setLoginSession)(res, session);\n        res.status(200).send({\n            done: true\n        });\n    } catch (error) {\n        console.error(error);\n        res.status(401).send(error.message);\n    }\n}));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2xvZ2luLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUErQjtBQUNPO0FBQ2tCO0FBQ1I7QUFFaEQsTUFBTUksZUFBZSxDQUFDQyxRQUFRQyxLQUFLQyxNQUNqQyxJQUFJQyxRQUFRLENBQUNDLFNBQVNDLFNBQVc7UUFDL0JWLDREQUFxQixDQUFDSyxRQUFRO1lBQUVNLFNBQVMsS0FBSztRQUFDLEdBQUcsQ0FBQ0MsT0FBT0MsUUFBVTtZQUNsRSxJQUFJRCxPQUFPO2dCQUNURixPQUFPRTtZQUNULE9BQU87Z0JBQ0xILFFBQVFJO1lBQ1YsQ0FBQztRQUNILEdBQUdQLEtBQUtDO0lBQ1Y7QUFFRlAsbURBQVksQ0FBQ0UsOERBQWFBO0FBRTFCLGlFQUFlRCx3REFBV0EsR0FDdkJhLEdBQUcsQ0FBQ2QsMERBQW1CLElBQ3ZCZ0IsSUFBSSxDQUFDLE9BQU9WLEtBQUtDLE1BQVE7SUFDeEIsSUFBSTtRQUNGLE1BQU1VLE9BQU8sTUFBTWIsYUFBYSxTQUFTRSxLQUFLQztRQUM5Qyx3RkFBd0Y7UUFDeEYsTUFBTUksVUFBVTtZQUFFLEdBQUdNLElBQUk7UUFBQztRQUUxQixNQUFNZCwwREFBZUEsQ0FBQ0ksS0FBS0k7UUFFM0JKLElBQUlXLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsTUFBTSxJQUFJO1FBQUM7SUFDcEMsRUFBRSxPQUFPUixPQUFPO1FBQ2RTLFFBQVFULEtBQUssQ0FBQ0E7UUFDZEwsSUFBSVcsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ1AsTUFBTVUsT0FBTztJQUNwQztBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jc2MxOTAvLi9zcmMvcGFnZXMvYXBpL2xvZ2luLmpzP2VlZmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhc3Nwb3J0IGZyb20gJ3Bhc3Nwb3J0J1xuaW1wb3J0IG5leHRDb25uZWN0IGZyb20gJ25leHQtY29ubmVjdCdcbmltcG9ydCB7IGxvY2FsU3RyYXRlZ3kgfSBmcm9tICcuLi8uLi9saWIvcGFzc3dvcmQtbG9jYWwnXG5pbXBvcnQgeyBzZXRMb2dpblNlc3Npb24gfSBmcm9tICcuLi8uLi9saWIvYXV0aCdcblxuY29uc3QgYXV0aGVudGljYXRlID0gKG1ldGhvZCwgcmVxLCByZXMpID0+XG4gIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBwYXNzcG9ydC5hdXRoZW50aWNhdGUobWV0aG9kLCB7IHNlc3Npb246IGZhbHNlIH0sIChlcnJvciwgdG9rZW4pID0+IHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICByZWplY3QoZXJyb3IpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKHRva2VuKVxuICAgICAgfVxuICAgIH0pKHJlcSwgcmVzKVxuICB9KVxuXG5wYXNzcG9ydC51c2UobG9jYWxTdHJhdGVneSlcblxuZXhwb3J0IGRlZmF1bHQgbmV4dENvbm5lY3QoKVxuICAudXNlKHBhc3Nwb3J0LmluaXRpYWxpemUoKSlcbiAgLnBvc3QoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBhdXRoZW50aWNhdGUoJ2xvY2FsJywgcmVxLCByZXMpXG4gICAgICAvLyBzZXNzaW9uIGlzIHRoZSBwYXlsb2FkIHRvIHNhdmUgaW4gdGhlIHRva2VuLCBpdCBtYXkgY29udGFpbiBiYXNpYyBpbmZvIGFib3V0IHRoZSB1c2VyXG4gICAgICBjb25zdCBzZXNzaW9uID0geyAuLi51c2VyIH1cblxuICAgICAgYXdhaXQgc2V0TG9naW5TZXNzaW9uKHJlcywgc2Vzc2lvbilcblxuICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoeyBkb25lOiB0cnVlIH0pXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICByZXMuc3RhdHVzKDQwMSkuc2VuZChlcnJvci5tZXNzYWdlKVxuICAgIH1cbiAgfSkiXSwibmFtZXMiOlsicGFzc3BvcnQiLCJuZXh0Q29ubmVjdCIsImxvY2FsU3RyYXRlZ3kiLCJzZXRMb2dpblNlc3Npb24iLCJhdXRoZW50aWNhdGUiLCJtZXRob2QiLCJyZXEiLCJyZXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNlc3Npb24iLCJlcnJvciIsInRva2VuIiwidXNlIiwiaW5pdGlhbGl6ZSIsInBvc3QiLCJ1c2VyIiwic3RhdHVzIiwic2VuZCIsImRvbmUiLCJjb25zb2xlIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/login.js"));
module.exports = __webpack_exports__;

})();