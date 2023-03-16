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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MAX_AGE\": () => (/* binding */ MAX_AGE),\n/* harmony export */   \"getTokenCookie\": () => (/* binding */ getTokenCookie),\n/* harmony export */   \"parseCookies\": () => (/* binding */ parseCookies),\n/* harmony export */   \"removeTokenCookie\": () => (/* binding */ removeTokenCookie),\n/* harmony export */   \"setTokenCookie\": () => (/* binding */ setTokenCookie)\n/* harmony export */ });\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);\n\nconst TOKEN_NAME = \"token\";\nconst MAX_AGE = 60 * 60 * 8 // 8 hours\n;\nfunction setTokenCookie(res, token) {\n    const cookie = (0,cookie__WEBPACK_IMPORTED_MODULE_0__.serialize)(TOKEN_NAME, token, {\n        maxAge: MAX_AGE,\n        expires: new Date(Date.now() + MAX_AGE * 1000),\n        httpOnly: true,\n        secure: \"development\" === \"production\",\n        domain: \"localhost\",\n        path: \"/\",\n        sameSite: \"lax\"\n    });\n    res.setHeader(\"Set-Cookie\", cookie);\n}\nfunction removeTokenCookie(res) {\n    const cookie = (0,cookie__WEBPACK_IMPORTED_MODULE_0__.serialize)(TOKEN_NAME, \"\", {\n        maxAge: -1,\n        path: \"/\"\n    });\n    res.setHeader(\"Set-Cookie\", cookie);\n}\nfunction parseCookies(req) {\n    // For API Routes we don't need to parse the cookies.\n    if (req.cookies) return req.cookies;\n    // For pages we do need to parse the cookies.\n    const cookie = req.headers?.cookie;\n    return (0,cookie__WEBPACK_IMPORTED_MODULE_0__.parse)(cookie || \"\");\n}\nfunction getTokenCookie(req) {\n    const cookies = parseCookies(req);\n    return cookies[TOKEN_NAME];\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbGliL2F1dGgtY29va2llcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlDO0FBRXpDLE1BQU1FLGFBQWE7QUFFWixNQUFNQyxVQUFVLEtBQUssS0FBSyxFQUFFLFVBQVU7Q0FBWDtBQUUzQixTQUFTQyxlQUFlQyxHQUFHLEVBQUVDLEtBQUssRUFBRTtJQUN6QyxNQUFNQyxTQUFTUCxpREFBU0EsQ0FBQ0UsWUFBWUksT0FBTztRQUMxQ0UsUUFBUUw7UUFDUk0sU0FBUyxJQUFJQyxLQUFLQSxLQUFLQyxHQUFHLEtBQUtSLFVBQVU7UUFDekNTLFVBQVUsSUFBSTtRQUNkQyxRQUFRQyxrQkFBeUI7UUFDakNDLFFBQVE7UUFDUkMsTUFBTTtRQUNOQyxVQUFVO0lBQ1o7SUFFQVosSUFBSWEsU0FBUyxDQUFDLGNBQWNYO0FBQzlCLENBQUM7QUFFTSxTQUFTWSxrQkFBa0JkLEdBQUcsRUFBRTtJQUNyQyxNQUFNRSxTQUFTUCxpREFBU0EsQ0FBQ0UsWUFBWSxJQUFJO1FBQ3ZDTSxRQUFRLENBQUM7UUFDVFEsTUFBTTtJQUNSO0lBRUFYLElBQUlhLFNBQVMsQ0FBQyxjQUFjWDtBQUM5QixDQUFDO0FBRU0sU0FBU2EsYUFBYUMsR0FBRyxFQUFFO0lBQ2hDLHFEQUFxRDtJQUNyRCxJQUFJQSxJQUFJQyxPQUFPLEVBQUUsT0FBT0QsSUFBSUMsT0FBTztJQUVuQyw2Q0FBNkM7SUFDN0MsTUFBTWYsU0FBU2MsSUFBSUUsT0FBTyxFQUFFaEI7SUFDNUIsT0FBT04sNkNBQUtBLENBQUNNLFVBQVU7QUFDekIsQ0FBQztBQUVNLFNBQVNpQixlQUFlSCxHQUFHLEVBQUU7SUFDbEMsTUFBTUMsVUFBVUYsYUFBYUM7SUFDN0IsT0FBT0MsT0FBTyxDQUFDcEIsV0FBVztBQUM1QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3NjMTkwLy4vc3JjL2xpYi9hdXRoLWNvb2tpZXMuanM/MmE3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzZXJpYWxpemUsIHBhcnNlIH0gZnJvbSAnY29va2llJ1xuXG5jb25zdCBUT0tFTl9OQU1FID0gJ3Rva2VuJ1xuXG5leHBvcnQgY29uc3QgTUFYX0FHRSA9IDYwICogNjAgKiA4IC8vIDggaG91cnNcblxuZXhwb3J0IGZ1bmN0aW9uIHNldFRva2VuQ29va2llKHJlcywgdG9rZW4pIHtcbiAgY29uc3QgY29va2llID0gc2VyaWFsaXplKFRPS0VOX05BTUUsIHRva2VuLCB7XG4gICAgbWF4QWdlOiBNQVhfQUdFLFxuICAgIGV4cGlyZXM6IG5ldyBEYXRlKERhdGUubm93KCkgKyBNQVhfQUdFICogMTAwMCksXG4gICAgaHR0cE9ubHk6IHRydWUsXG4gICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nLFxuICAgIGRvbWFpbjogJ2xvY2FsaG9zdCcsXG4gICAgcGF0aDogJy8nLFxuICAgIHNhbWVTaXRlOiAnbGF4JyxcbiAgfSlcblxuICByZXMuc2V0SGVhZGVyKCdTZXQtQ29va2llJywgY29va2llKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVG9rZW5Db29raWUocmVzKSB7XG4gIGNvbnN0IGNvb2tpZSA9IHNlcmlhbGl6ZShUT0tFTl9OQU1FLCAnJywge1xuICAgIG1heEFnZTogLTEsXG4gICAgcGF0aDogJy8nLFxuICB9KVxuXG4gIHJlcy5zZXRIZWFkZXIoJ1NldC1Db29raWUnLCBjb29raWUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUNvb2tpZXMocmVxKSB7XG4gIC8vIEZvciBBUEkgUm91dGVzIHdlIGRvbid0IG5lZWQgdG8gcGFyc2UgdGhlIGNvb2tpZXMuXG4gIGlmIChyZXEuY29va2llcykgcmV0dXJuIHJlcS5jb29raWVzXG5cbiAgLy8gRm9yIHBhZ2VzIHdlIGRvIG5lZWQgdG8gcGFyc2UgdGhlIGNvb2tpZXMuXG4gIGNvbnN0IGNvb2tpZSA9IHJlcS5oZWFkZXJzPy5jb29raWVcbiAgcmV0dXJuIHBhcnNlKGNvb2tpZSB8fCAnJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRva2VuQ29va2llKHJlcSkge1xuICBjb25zdCBjb29raWVzID0gcGFyc2VDb29raWVzKHJlcSlcbiAgcmV0dXJuIGNvb2tpZXNbVE9LRU5fTkFNRV1cbn0iXSwibmFtZXMiOlsic2VyaWFsaXplIiwicGFyc2UiLCJUT0tFTl9OQU1FIiwiTUFYX0FHRSIsInNldFRva2VuQ29va2llIiwicmVzIiwidG9rZW4iLCJjb29raWUiLCJtYXhBZ2UiLCJleHBpcmVzIiwiRGF0ZSIsIm5vdyIsImh0dHBPbmx5Iiwic2VjdXJlIiwicHJvY2VzcyIsImRvbWFpbiIsInBhdGgiLCJzYW1lU2l0ZSIsInNldEhlYWRlciIsInJlbW92ZVRva2VuQ29va2llIiwicGFyc2VDb29raWVzIiwicmVxIiwiY29va2llcyIsImhlYWRlcnMiLCJnZXRUb2tlbkNvb2tpZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/lib/auth-cookies.js\n");

/***/ }),

/***/ "(api)/./src/lib/auth.js":
/*!*************************!*\
  !*** ./src/lib/auth.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLoginSession\": () => (/* binding */ getLoginSession),\n/* harmony export */   \"getUser\": () => (/* binding */ getUser),\n/* harmony export */   \"setLoginSession\": () => (/* binding */ setLoginSession)\n/* harmony export */ });\n/* harmony import */ var _hapi_iron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hapi/iron */ \"@hapi/iron\");\n/* harmony import */ var _hapi_iron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hapi_iron__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _auth_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-cookies */ \"(api)/./src/lib/auth-cookies.js\");\n\n\nconst TOKEN_SECRET = process.env.TOKEN_SECRET;\nasync function setLoginSession(res, session) {\n    const createdAt = Date.now();\n    // Create a session object with a max age that we can validate later\n    const obj = {\n        ...session,\n        createdAt,\n        maxAge: _auth_cookies__WEBPACK_IMPORTED_MODULE_1__.MAX_AGE\n    };\n    console.log(\"TOKEN_SECRET:\", TOKEN_SECRET);\n    const token = await _hapi_iron__WEBPACK_IMPORTED_MODULE_0___default().seal(obj, TOKEN_SECRET, (_hapi_iron__WEBPACK_IMPORTED_MODULE_0___default().defaults));\n    console.log(\"session res \" + res.status);\n    (0,_auth_cookies__WEBPACK_IMPORTED_MODULE_1__.setTokenCookie)(res, token);\n}\nasync function getLoginSession(req) {\n    const token = (0,_auth_cookies__WEBPACK_IMPORTED_MODULE_1__.getTokenCookie)(req);\n    if (!token) return;\n    const session = await _hapi_iron__WEBPACK_IMPORTED_MODULE_0___default().unseal(token, TOKEN_SECRET, (_hapi_iron__WEBPACK_IMPORTED_MODULE_0___default().defaults));\n    const expiresAt = session.createdAt + session.maxAge * 1000;\n    // Validate the expiration date of the session\n    if (Date.now() > expiresAt) {\n        throw new Error(\"Session expired\");\n    }\n    return session;\n}\nasync function getUser(req) {\n    const session = await getLoginSession(req);\n    if (session) {\n        return {\n            user: session.user\n        };\n    } else {\n        return {\n            user: null\n        };\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbGliL2F1dGguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTZCO0FBQzJDO0FBRXhFLE1BQU1JLGVBQWVDLFFBQVFDLEdBQUcsQ0FBQ0YsWUFBWTtBQUV0QyxlQUFlRyxnQkFBZ0JDLEdBQUcsRUFBRUMsT0FBTyxFQUFFO0lBRWxELE1BQU1DLFlBQVlDLEtBQUtDLEdBQUc7SUFDMUIsb0VBQW9FO0lBQ3BFLE1BQU1DLE1BQU07UUFBRSxHQUFHSixPQUFPO1FBQUVDO1FBQVdJLFFBQVFiLGtEQUFPQTtJQUFDO0lBQ3JEYyxRQUFRQyxHQUFHLENBQUMsaUJBQWlCWjtJQUU3QixNQUFNYSxRQUFRLE1BQU1qQixzREFBUyxDQUFDYSxLQUFLVCxjQUFjSiw0REFBYTtJQUM5RGUsUUFBUUMsR0FBRyxDQUFDLGlCQUFpQlIsSUFBSVksTUFBTTtJQUV2Q2xCLDZEQUFjQSxDQUFDTSxLQUFLUztBQUN0QixDQUFDO0FBRU0sZUFBZUksZ0JBQWdCQyxHQUFHLEVBQUU7SUFDekMsTUFBTUwsUUFBUWQsNkRBQWNBLENBQUNtQjtJQUU3QixJQUFJLENBQUNMLE9BQU87SUFFWixNQUFNUixVQUFVLE1BQU1ULHdEQUFXLENBQUNpQixPQUFPYixjQUFjSiw0REFBYTtJQUNwRSxNQUFNd0IsWUFBWWYsUUFBUUMsU0FBUyxHQUFHRCxRQUFRSyxNQUFNLEdBQUc7SUFFdkQsOENBQThDO0lBQzlDLElBQUlILEtBQUtDLEdBQUcsS0FBS1ksV0FBVztRQUMxQixNQUFNLElBQUlDLE1BQU0sbUJBQWtCO0lBQ3BDLENBQUM7SUFFRCxPQUFPaEI7QUFDVCxDQUFDO0FBRU0sZUFBZWlCLFFBQVFKLEdBQUcsRUFBRTtJQUNqQyxNQUFNYixVQUFVLE1BQU1ZLGdCQUFnQkM7SUFFdEMsSUFBSWIsU0FBUztRQUNYLE9BQU87WUFBRWtCLE1BQU1sQixRQUFRa0IsSUFBSTtRQUFDO0lBQzlCLE9BQU87UUFDTCxPQUFPO1lBQUVBLE1BQU0sSUFBSTtRQUFDO0lBQ3RCLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3NjMTkwLy4vc3JjL2xpYi9hdXRoLmpzPzg3YmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElyb24gZnJvbSAnQGhhcGkvaXJvbidcbmltcG9ydCB7IE1BWF9BR0UsIHNldFRva2VuQ29va2llLCBnZXRUb2tlbkNvb2tpZSB9IGZyb20gJy4vYXV0aC1jb29raWVzJ1xuXG5jb25zdCBUT0tFTl9TRUNSRVQgPSBwcm9jZXNzLmVudi5UT0tFTl9TRUNSRVRcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldExvZ2luU2Vzc2lvbihyZXMsIHNlc3Npb24pIHtcblxuICBjb25zdCBjcmVhdGVkQXQgPSBEYXRlLm5vdygpXG4gIC8vIENyZWF0ZSBhIHNlc3Npb24gb2JqZWN0IHdpdGggYSBtYXggYWdlIHRoYXQgd2UgY2FuIHZhbGlkYXRlIGxhdGVyXG4gIGNvbnN0IG9iaiA9IHsgLi4uc2Vzc2lvbiwgY3JlYXRlZEF0LCBtYXhBZ2U6IE1BWF9BR0UgfVxuICBjb25zb2xlLmxvZyhcIlRPS0VOX1NFQ1JFVDpcIiwgVE9LRU5fU0VDUkVUKTtcblxuICBjb25zdCB0b2tlbiA9IGF3YWl0IElyb24uc2VhbChvYmosIFRPS0VOX1NFQ1JFVCwgSXJvbi5kZWZhdWx0cylcbiAgY29uc29sZS5sb2coXCJzZXNzaW9uIHJlcyBcIiArIHJlcy5zdGF0dXMpXG5cbiAgc2V0VG9rZW5Db29raWUocmVzLCB0b2tlbilcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExvZ2luU2Vzc2lvbihyZXEpIHtcbiAgY29uc3QgdG9rZW4gPSBnZXRUb2tlbkNvb2tpZShyZXEpXG5cbiAgaWYgKCF0b2tlbikgcmV0dXJuXG5cbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IElyb24udW5zZWFsKHRva2VuLCBUT0tFTl9TRUNSRVQsIElyb24uZGVmYXVsdHMpXG4gIGNvbnN0IGV4cGlyZXNBdCA9IHNlc3Npb24uY3JlYXRlZEF0ICsgc2Vzc2lvbi5tYXhBZ2UgKiAxMDAwXG5cbiAgLy8gVmFsaWRhdGUgdGhlIGV4cGlyYXRpb24gZGF0ZSBvZiB0aGUgc2Vzc2lvblxuICBpZiAoRGF0ZS5ub3coKSA+IGV4cGlyZXNBdCkge1xuICAgIHRocm93IG5ldyBFcnJvcignU2Vzc2lvbiBleHBpcmVkJylcbiAgfVxuXG4gIHJldHVybiBzZXNzaW9uXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VyKHJlcSkge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0TG9naW5TZXNzaW9uKHJlcSk7XG5cbiAgaWYgKHNlc3Npb24pIHtcbiAgICByZXR1cm4geyB1c2VyOiBzZXNzaW9uLnVzZXIgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geyB1c2VyOiBudWxsIH07XG4gIH1cbn0iXSwibmFtZXMiOlsiSXJvbiIsIk1BWF9BR0UiLCJzZXRUb2tlbkNvb2tpZSIsImdldFRva2VuQ29va2llIiwiVE9LRU5fU0VDUkVUIiwicHJvY2VzcyIsImVudiIsInNldExvZ2luU2Vzc2lvbiIsInJlcyIsInNlc3Npb24iLCJjcmVhdGVkQXQiLCJEYXRlIiwibm93Iiwib2JqIiwibWF4QWdlIiwiY29uc29sZSIsImxvZyIsInRva2VuIiwic2VhbCIsImRlZmF1bHRzIiwic3RhdHVzIiwiZ2V0TG9naW5TZXNzaW9uIiwicmVxIiwidW5zZWFsIiwiZXhwaXJlc0F0IiwiRXJyb3IiLCJnZXRVc2VyIiwidXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/lib/auth.js\n");

/***/ }),

/***/ "(api)/./src/lib/password-local.js":
/*!***********************************!*\
  !*** ./src/lib/password-local.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"localStrategy\": () => (/* binding */ localStrategy)\n/* harmony export */ });\n/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! passport-local */ \"passport-local\");\n/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(passport_local__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ \"(api)/./src/lib/user.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_user__WEBPACK_IMPORTED_MODULE_1__]);\n_user__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst localStrategy = new (passport_local__WEBPACK_IMPORTED_MODULE_0___default().Strategy)(function(username, password, done) {\n    if (username != undefined) {\n        const user = (0,_user__WEBPACK_IMPORTED_MODULE_1__.findUser)({\n            username\n        }).then((user)=>{\n            if (user && (0,_user__WEBPACK_IMPORTED_MODULE_1__.validatePassword)(user, password)) {\n                done(null, user);\n            } else {\n                done(new Error(\"Invalid username and password combination\"));\n            }\n        }).catch((error)=>{\n            done(error);\n        });\n    }\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbGliL3Bhc3N3b3JkLWxvY2FsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBa0M7QUFDaUI7QUFFNUMsTUFBTUcsZ0JBQWdCLElBQUlILGdFQUFjLENBQUMsU0FDOUNLLFFBQVEsRUFDUkMsUUFBUSxFQUNSQyxJQUFJLEVBQ0o7SUFFRixJQUFJRixZQUFZRyxXQUFVO1FBQ3hCLE1BQU1DLE9BQU9SLCtDQUFRQSxDQUFDO1lBQUVJO1FBQVMsR0FDOUJLLElBQUksQ0FBQyxDQUFDRCxPQUFTO1lBR2QsSUFBSUEsUUFBUVAsdURBQWdCQSxDQUFDTyxNQUFNSCxXQUFXO2dCQUU1Q0MsS0FBSyxJQUFJLEVBQUVFO1lBQ2IsT0FBTztnQkFFTEYsS0FBSyxJQUFJSSxNQUFNO1lBQ2pCLENBQUM7UUFDSCxHQUNDQyxLQUFLLENBQUMsQ0FBQ0MsUUFBVTtZQUVoQk4sS0FBS007UUFDUDtJQUNGLENBQUM7QUFDSCxHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3NjMTkwLy4vc3JjL2xpYi9wYXNzd29yZC1sb2NhbC5qcz9lYzkxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMb2NhbCBmcm9tICdwYXNzcG9ydC1sb2NhbCdcbmltcG9ydCB7IGZpbmRVc2VyLCB2YWxpZGF0ZVBhc3N3b3JkIH0gZnJvbSAnLi91c2VyJ1xuXG5leHBvcnQgY29uc3QgbG9jYWxTdHJhdGVneSA9IG5ldyBMb2NhbC5TdHJhdGVneShmdW5jdGlvbiAoXG4gIHVzZXJuYW1lLFxuICBwYXNzd29yZCxcbiAgZG9uZVxuKSB7XG4gXG5pZiAodXNlcm5hbWUgIT0gdW5kZWZpbmVkKXtcbiAgY29uc3QgdXNlciA9IGZpbmRVc2VyKHsgdXNlcm5hbWUgfSlcbiAgICAudGhlbigodXNlcikgPT4ge1xuXG5cbiAgICAgIGlmICh1c2VyICYmIHZhbGlkYXRlUGFzc3dvcmQodXNlciwgcGFzc3dvcmQpKSB7XG5cbiAgICAgICAgZG9uZShudWxsLCB1c2VyKVxuICAgICAgfSBlbHNlIHtcblxuICAgICAgICBkb25lKG5ldyBFcnJvcignSW52YWxpZCB1c2VybmFtZSBhbmQgcGFzc3dvcmQgY29tYmluYXRpb24nKSlcbiAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcblxuICAgICAgZG9uZShlcnJvcilcbiAgICB9KVxuICB9XG59KSJdLCJuYW1lcyI6WyJMb2NhbCIsImZpbmRVc2VyIiwidmFsaWRhdGVQYXNzd29yZCIsImxvY2FsU3RyYXRlZ3kiLCJTdHJhdGVneSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJkb25lIiwidW5kZWZpbmVkIiwidXNlciIsInRoZW4iLCJFcnJvciIsImNhdGNoIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/lib/password-local.js\n");

/***/ }),

/***/ "(api)/./src/lib/user.js":
/*!*************************!*\
  !*** ./src/lib/user.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createUser\": () => (/* binding */ createUser),\n/* harmony export */   \"findUser\": () => (/* binding */ findUser),\n/* harmony export */   \"validatePassword\": () => (/* binding */ validatePassword)\n/* harmony export */ });\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ \"uuid\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_1__]);\nuuid__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\nconst express = __webpack_require__(/*! express */ \"express\");\nconst app = express();\nconst mysql = __webpack_require__(/*! mysql2 */ \"mysql2\");\nconst cors = __webpack_require__(/*! cors */ \"cors\");\nvar fs = __webpack_require__(/*! fs */ \"fs\");\nvar path = __webpack_require__(/*! path */ \"path\");\nvar Sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\nvar env = \"development\" || 0;\nvar fs = __webpack_require__(/*! fs */ \"fs\");\nvar path = __webpack_require__(/*! path */ \"path\");\nvar Sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\nvar env = \"development\" || 0;\nvar db = {};\nconst sequelize = new Sequelize(\"absolutemedia\", \"root\", \"password\", {\n    host: \"localhost\",\n    dialect: \"mysql\"\n});\nsequelize.authenticate().then(()=>{\n    console.log(\"Connection has been established successfully.\");\n}).catch((error)=>{\n    console.error(\"Unable to connect to the database: \", error);\n});\n/**\n * User methods. The example doesn't contain a DB, but for real applications you must use a\n * db here, such as MongoDB, Fauna, SQL, etc.\n */ var User = sequelize.define(\"user\", {\n    id: {\n        autoIncrement: true,\n        primaryKey: true,\n        type: Sequelize.INTEGER\n    },\n    createdAt: {\n        type: Sequelize.DATE\n    },\n    username: {\n        type: Sequelize.TEXT\n    },\n    hash: {\n        type: Sequelize.STRING\n    },\n    salt: {\n        type: Sequelize.UUID,\n        allowNull: false\n    }\n});\n(async ()=>{\n    await User.sync().then(function() {\n        console.log(\"Nice! Database looks fine\");\n    }).catch(function(err) {\n        console.log(err, \"Something went wrong with the Database Update!\");\n    });\n})();\n//const users = [user]\nasync function createUser({ username , password  }) {\n    // Here you should create the user and save the salt and hashed password (some dbs may have\n    // authentication methods that will do it for you so you don't have to worry about it):\n    const salt = crypto__WEBPACK_IMPORTED_MODULE_0___default().randomBytes(16).toString(\"hex\");\n    const hash = crypto__WEBPACK_IMPORTED_MODULE_0___default().pbkdf2Sync(password, salt, 1000, 64, \"sha512\").toString(\"hex\");\n    const user = await User.create({\n        createdAt: Date.now(),\n        username,\n        hash,\n        salt\n    });\n    // This is an in memory store for users, there is no data persistence without a proper DB\n    return {\n        username,\n        createdAt: Date.now()\n    };\n}\n// Here you should lookup for the user in your DB\nasync function findUser({ username  }) {\n    console.log(\"Username: \", username);\n    const users = await User.findAll({\n        where: {\n            username: username\n        }\n    });\n    return users;\n}\n// Compare the password of an already fetched user (using `findUser`) and compare the\n// password for a potential match\nfunction validatePassword(users, inputPassword) {\n    console.log(\"Validating password for user:\", users[0].username);\n    console.log(\"Input password:\", inputPassword);\n    const inputHash = crypto__WEBPACK_IMPORTED_MODULE_0___default().pbkdf2Sync(inputPassword, users[0].salt, 1000, 64, \"sha512\").toString(\"hex\");\n    const passwordsMatch = users[0].hash === inputHash;\n    console.log(\"match: \" + passwordsMatch);\n    return passwordsMatch;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxFQUFFSSxhQUFhLEVBQUU7SUFDckRwQyxRQUFRQyxHQUFHLENBQUMsaUNBQWlDK0IsS0FBSyxDQUFDLEVBQUUsQ0FBQ25CLFFBQVE7SUFDOURiLFFBQVFDLEdBQUcsQ0FBQyxtQkFBbUJtQztJQUMvQixNQUFNQyxZQUFZekQsd0RBQ0wsQ0FBQ3dELGVBQWVKLEtBQUssQ0FBQyxFQUFFLENBQUNmLElBQUksRUFBRSxNQUFNLElBQUksVUFDbkRRLFFBQVEsQ0FBQztJQUVaLE1BQU1hLGlCQUFpQk4sS0FBSyxDQUFDLEVBQUUsQ0FBQ2pCLElBQUksS0FBS3NCO0lBQ3pDckMsUUFBUUMsR0FBRyxDQUFDLFlBQVlxQztJQUN4QixPQUFPQTtBQUNULENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jc2MxOTAvLi9zcmMvbGliL3VzZXIuanM/ZWZlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3J5cHRvIGZyb20gJ2NyeXB0bydcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnXG5cbmNvbnN0IGJvZHlQYXJzZXIgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIilcbmNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcbmNvbnN0IG15c3FsID0gcmVxdWlyZShcIm15c3FsMlwiKTtcbmNvbnN0IGNvcnMgPSByZXF1aXJlKCdjb3JzJyk7XG52YXIgZnMgPSByZXF1aXJlKFwiZnNcIik7XG52YXIgcGF0aCA9IHJlcXVpcmUoXCJwYXRoXCIpO1xudmFyIFNlcXVlbGl6ZSA9IHJlcXVpcmUoXCJzZXF1ZWxpemVcIik7XG52YXIgZW52ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgXCJkZXZlbG9wbWVudFwiO1xudmFyIGZzID0gcmVxdWlyZShcImZzXCIpO1xudmFyIHBhdGggPSByZXF1aXJlKFwicGF0aFwiKTtcbnZhciBTZXF1ZWxpemUgPSByZXF1aXJlKFwic2VxdWVsaXplXCIpO1xudmFyIGVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8IFwiZGV2ZWxvcG1lbnRcIjtcbnZhciBkYiA9IHt9O1xuY29uc3Qgc2VxdWVsaXplID0gbmV3IFNlcXVlbGl6ZShcbiAgICAnYWJzb2x1dGVtZWRpYScsXG4gICAgJ3Jvb3QnLFxuICAgICdwYXNzd29yZCcsXG4gICAgIHtcbiAgICAgICBob3N0OiAnbG9jYWxob3N0JyxcbiAgICAgICBkaWFsZWN0OiAnbXlzcWwnXG4gICAgIH1cbiAgICk7XG4gICBzZXF1ZWxpemUuYXV0aGVudGljYXRlKCkudGhlbigoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0Nvbm5lY3Rpb24gaGFzIGJlZW4gZXN0YWJsaXNoZWQgc3VjY2Vzc2Z1bGx5LicpO1xuIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1VuYWJsZSB0byBjb25uZWN0IHRvIHRoZSBkYXRhYmFzZTogJywgZXJyb3IpO1xuIH0pO1xuXG4vKipcbiAqIFVzZXIgbWV0aG9kcy4gVGhlIGV4YW1wbGUgZG9lc24ndCBjb250YWluIGEgREIsIGJ1dCBmb3IgcmVhbCBhcHBsaWNhdGlvbnMgeW91IG11c3QgdXNlIGFcbiAqIGRiIGhlcmUsIHN1Y2ggYXMgTW9uZ29EQiwgRmF1bmEsIFNRTCwgZXRjLlxuICovXG5cbiAgICB2YXIgVXNlciA9IHNlcXVlbGl6ZS5kZWZpbmUoJ3VzZXInLCB7XG5cbiAgICAgICAgaWQ6IHtcbiAgICAgICAgICAgIGF1dG9JbmNyZW1lbnQ6IHRydWUsXG4gICAgICAgICAgICBwcmltYXJ5S2V5OiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLklOVEVHRVJcbiAgICAgICAgfSxcblxuICAgICAgICBjcmVhdGVkQXQ6IHtcbiAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuREFURVxuICAgICAgICB9LFxuXG4gICAgICAgIHVzZXJuYW1lOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuVEVYVFxuICAgICAgICB9LFxuXG4gICAgICAgIGhhc2g6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgc2FsdDoge1xuICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5VVUlELFxuICAgICAgICAgIGFsbG93TnVsbDogZmFsc2VcbiAgICAgICAgICBcbiAgICAgIH1cblxuICAgIH0pO1xuXG4gICAgKGFzeW5jICgpID0+IHtcbiAgICAgIGF3YWl0IFVzZXIuc3luYygpXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdOaWNlISBEYXRhYmFzZSBsb29rcyBmaW5lJylcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVyciwgXCJTb21ldGhpbmcgd2VudCB3cm9uZyB3aXRoIHRoZSBEYXRhYmFzZSBVcGRhdGUhXCIpXG59KTtcbiB9KSgpO1xuXG5cblxuXG4vL2NvbnN0IHVzZXJzID0gW3VzZXJdXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVVc2VyKHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pIHtcbiAgLy8gSGVyZSB5b3Ugc2hvdWxkIGNyZWF0ZSB0aGUgdXNlciBhbmQgc2F2ZSB0aGUgc2FsdCBhbmQgaGFzaGVkIHBhc3N3b3JkIChzb21lIGRicyBtYXkgaGF2ZVxuICAvLyBhdXRoZW50aWNhdGlvbiBtZXRob2RzIHRoYXQgd2lsbCBkbyBpdCBmb3IgeW91IHNvIHlvdSBkb24ndCBoYXZlIHRvIHdvcnJ5IGFib3V0IGl0KTpcbiAgY29uc3Qgc2FsdCA9IGNyeXB0by5yYW5kb21CeXRlcygxNikudG9TdHJpbmcoJ2hleCcpXG4gIGNvbnN0IGhhc2ggPSBjcnlwdG9cbiAgICAucGJrZGYyU3luYyhwYXNzd29yZCwgc2FsdCwgMTAwMCwgNjQsICdzaGE1MTInKVxuICAgIC50b1N0cmluZygnaGV4JylcbiAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuY3JlYXRlKHtcbiAgICBjcmVhdGVkQXQ6IERhdGUubm93KCksXG4gICAgdXNlcm5hbWUsXG4gICAgaGFzaCxcbiAgICBzYWx0LFxuICB9KTtcblxuICAvLyBUaGlzIGlzIGFuIGluIG1lbW9yeSBzdG9yZSBmb3IgdXNlcnMsIHRoZXJlIGlzIG5vIGRhdGEgcGVyc2lzdGVuY2Ugd2l0aG91dCBhIHByb3BlciBEQlxuICBcblxuICByZXR1cm4geyB1c2VybmFtZSwgY3JlYXRlZEF0OiBEYXRlLm5vdygpIH1cbn1cblxuLy8gSGVyZSB5b3Ugc2hvdWxkIGxvb2t1cCBmb3IgdGhlIHVzZXIgaW4geW91ciBEQlxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZpbmRVc2VyKHsgdXNlcm5hbWUgfSkge1xuICBjb25zb2xlLmxvZyhcIlVzZXJuYW1lOiBcIiwgdXNlcm5hbWUpO1xuICBjb25zdCB1c2VycyA9IGF3YWl0IFVzZXIuZmluZEFsbCh7IHdoZXJlOiB7IHVzZXJuYW1lOiB1c2VybmFtZSB9IH0pO1xuICByZXR1cm4gdXNlcnM7XG59XG5cbi8vIENvbXBhcmUgdGhlIHBhc3N3b3JkIG9mIGFuIGFscmVhZHkgZmV0Y2hlZCB1c2VyICh1c2luZyBgZmluZFVzZXJgKSBhbmQgY29tcGFyZSB0aGVcbi8vIHBhc3N3b3JkIGZvciBhIHBvdGVudGlhbCBtYXRjaFxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlUGFzc3dvcmQodXNlcnMsIGlucHV0UGFzc3dvcmQpIHtcbiAgY29uc29sZS5sb2coJ1ZhbGlkYXRpbmcgcGFzc3dvcmQgZm9yIHVzZXI6JywgdXNlcnNbMF0udXNlcm5hbWUpO1xuICBjb25zb2xlLmxvZygnSW5wdXQgcGFzc3dvcmQ6JywgaW5wdXRQYXNzd29yZCk7XG4gIGNvbnN0IGlucHV0SGFzaCA9IGNyeXB0b1xuICAgIC5wYmtkZjJTeW5jKGlucHV0UGFzc3dvcmQsIHVzZXJzWzBdLnNhbHQsIDEwMDAsIDY0LCAnc2hhNTEyJylcbiAgICAudG9TdHJpbmcoJ2hleCcpXG5cbiAgY29uc3QgcGFzc3dvcmRzTWF0Y2ggPSB1c2Vyc1swXS5oYXNoID09PSBpbnB1dEhhc2hcbiAgY29uc29sZS5sb2coXCJtYXRjaDogXCIgKyBwYXNzd29yZHNNYXRjaClcbiAgcmV0dXJuIHBhc3N3b3Jkc01hdGNoXG59XG4iXSwibmFtZXMiOlsiY3J5cHRvIiwidjQiLCJ1dWlkdjQiLCJib2R5UGFyc2VyIiwicmVxdWlyZSIsImV4cHJlc3MiLCJhcHAiLCJteXNxbCIsImNvcnMiLCJmcyIsInBhdGgiLCJTZXF1ZWxpemUiLCJlbnYiLCJwcm9jZXNzIiwiZGIiLCJzZXF1ZWxpemUiLCJob3N0IiwiZGlhbGVjdCIsImF1dGhlbnRpY2F0ZSIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnJvciIsIlVzZXIiLCJkZWZpbmUiLCJpZCIsImF1dG9JbmNyZW1lbnQiLCJwcmltYXJ5S2V5IiwidHlwZSIsIklOVEVHRVIiLCJjcmVhdGVkQXQiLCJEQVRFIiwidXNlcm5hbWUiLCJURVhUIiwiaGFzaCIsIlNUUklORyIsInNhbHQiLCJVVUlEIiwiYWxsb3dOdWxsIiwic3luYyIsImVyciIsImNyZWF0ZVVzZXIiLCJwYXNzd29yZCIsInJhbmRvbUJ5dGVzIiwidG9TdHJpbmciLCJwYmtkZjJTeW5jIiwidXNlciIsImNyZWF0ZSIsIkRhdGUiLCJub3ciLCJmaW5kVXNlciIsInVzZXJzIiwiZmluZEFsbCIsIndoZXJlIiwidmFsaWRhdGVQYXNzd29yZCIsImlucHV0UGFzc3dvcmQiLCJpbnB1dEhhc2giLCJwYXNzd29yZHNNYXRjaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/lib/user.js\n");

/***/ }),

/***/ "(api)/./src/pages/api/login.js":
/*!********************************!*\
  !*** ./src/pages/api/login.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var _lib_password_local__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/password-local */ \"(api)/./src/lib/password-local.js\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/auth */ \"(api)/./src/lib/auth.js\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_1__, _lib_password_local__WEBPACK_IMPORTED_MODULE_2__]);\n([next_connect__WEBPACK_IMPORTED_MODULE_1__, _lib_password_local__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nconst authenticate = (method, req, res)=>new Promise((resolve, reject)=>{\n        passport__WEBPACK_IMPORTED_MODULE_0___default().authenticate(method, {\n            session: false\n        }, (error, token)=>{\n            if (error) {\n                reject(error);\n            } else {\n                resolve(token);\n            }\n        })(req, res, ()=>{}, {\n            password: req.body.password\n        });\n    });\npassport__WEBPACK_IMPORTED_MODULE_0___default().use(_lib_password_local__WEBPACK_IMPORTED_MODULE_2__.localStrategy);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_connect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().use(cors__WEBPACK_IMPORTED_MODULE_4___default()()).use(passport__WEBPACK_IMPORTED_MODULE_0___default().initialize()).options(cors__WEBPACK_IMPORTED_MODULE_4___default()()).post(async (req, res)=>{\n    try {\n        const user = await authenticate(\"local\", req, res);\n        // session is the payload to save in the token, it may contain basic info about the user\n        const session = {\n            ...user\n        };\n        console.log(\"session user: \" + session[0].username);\n        console.log(\"res \" + res.statusCode);\n        await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_3__.setLoginSession)(res, session);\n        res.status(200).send({\n            done: true\n        });\n    } catch (error) {\n        console.error(\"I am the error \" + error);\n        res.status(401).send(error.message);\n    }\n}));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2xvZ2luLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ2lDO0FBQ087QUFDa0I7QUFDUjtBQUN6QjtBQUV2QixNQUFNSyxlQUFlLENBQUNDLFFBQVFDLEtBQUtDLE1BQ2pDLElBQUlDLFFBQVEsQ0FBQ0MsU0FBU0MsU0FBVztRQUMvQlgsNERBQXFCLENBQUNNLFFBQVE7WUFBRU0sU0FBUyxLQUFLO1FBQUMsR0FBRyxDQUFDQyxPQUFPQyxRQUFVO1lBQ2xFLElBQUlELE9BQU87Z0JBQ1RGLE9BQU9FO1lBQ1QsT0FBTztnQkFDTEgsUUFBUUk7WUFDVixDQUFDO1FBQ0gsR0FBR1AsS0FBS0MsS0FBSyxJQUFNLENBQUMsR0FBSTtZQUFFTyxVQUFVUixJQUFJUyxJQUFJLENBQUNELFFBQVE7UUFBQztJQUN4RDtBQUVGZixtREFBWSxDQUFDRSw4REFBYUE7QUFFMUIsaUVBQWVELHdEQUFXQSxHQUN2QmdCLEdBQUcsQ0FBQ2IsMkNBQUlBLElBQ1JhLEdBQUcsQ0FBQ2pCLDBEQUFtQixJQUN2Qm1CLE9BQU8sQ0FBQ2YsMkNBQUlBLElBQ1pnQixJQUFJLENBQUMsT0FBT2IsS0FBS0MsTUFBUTtJQUN4QixJQUFJO1FBQ0YsTUFBTWEsT0FBTyxNQUFNaEIsYUFBYSxTQUFTRSxLQUFLQztRQUM5Qyx3RkFBd0Y7UUFDeEYsTUFBTUksVUFBVTtZQUFDLEdBQUdTLElBQUk7UUFBQTtRQUN4QkMsUUFBUUMsR0FBRyxDQUFDLG1CQUFtQlgsT0FBTyxDQUFDLEVBQUUsQ0FBQ1ksUUFBUTtRQUNsREYsUUFBUUMsR0FBRyxDQUFDLFNBQVNmLElBQUlpQixVQUFVO1FBRW5DLE1BQU10QiwwREFBZUEsQ0FBQ0ssS0FBS0k7UUFFM0JKLElBQUlrQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLE1BQU0sSUFBSTtRQUFDO0lBQ3BDLEVBQUUsT0FBT2YsT0FBTztRQUNkUyxRQUFRVCxLQUFLLENBQUMsb0JBQW9CQTtRQUNsQ0wsSUFBSWtCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNkLE1BQU1nQixPQUFPO0lBQ3BDO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2NzYzE5MC8uL3NyYy9wYWdlcy9hcGkvbG9naW4uanM/ZWVmYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHBhc3Nwb3J0IGZyb20gJ3Bhc3Nwb3J0J1xuICBpbXBvcnQgbmV4dENvbm5lY3QgZnJvbSAnbmV4dC1jb25uZWN0J1xuICBpbXBvcnQgeyBsb2NhbFN0cmF0ZWd5IH0gZnJvbSAnLi4vLi4vbGliL3Bhc3N3b3JkLWxvY2FsJ1xuICBpbXBvcnQgeyBzZXRMb2dpblNlc3Npb24gfSBmcm9tICcuLi8uLi9saWIvYXV0aCdcbiAgaW1wb3J0IGNvcnMgZnJvbSAnY29ycydcbiAgXG4gIGNvbnN0IGF1dGhlbnRpY2F0ZSA9IChtZXRob2QsIHJlcSwgcmVzKSA9PlxuICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHBhc3Nwb3J0LmF1dGhlbnRpY2F0ZShtZXRob2QsIHsgc2Vzc2lvbjogZmFsc2UgfSwgKGVycm9yLCB0b2tlbikgPT4ge1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZWplY3QoZXJyb3IpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZSh0b2tlbilcbiAgICAgICAgfVxuICAgICAgfSkocmVxLCByZXMsICgpID0+IHt9ICwgeyBwYXNzd29yZDogcmVxLmJvZHkucGFzc3dvcmQgfSlcbiAgICB9KVxuICBcbiAgcGFzc3BvcnQudXNlKGxvY2FsU3RyYXRlZ3kpXG4gIFxuICBleHBvcnQgZGVmYXVsdCBuZXh0Q29ubmVjdCgpXG4gICAgLnVzZShjb3JzKCkpXG4gICAgLnVzZShwYXNzcG9ydC5pbml0aWFsaXplKCkpXG4gICAgLm9wdGlvbnMoY29ycygpKVxuICAgIC5wb3N0KGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGF1dGhlbnRpY2F0ZSgnbG9jYWwnLCByZXEsIHJlcylcbiAgICAgICAgLy8gc2Vzc2lvbiBpcyB0aGUgcGF5bG9hZCB0byBzYXZlIGluIHRoZSB0b2tlbiwgaXQgbWF5IGNvbnRhaW4gYmFzaWMgaW5mbyBhYm91dCB0aGUgdXNlclxuICAgICAgICBjb25zdCBzZXNzaW9uID0gey4uLnVzZXJ9OyBcbiAgICAgICAgY29uc29sZS5sb2coXCJzZXNzaW9uIHVzZXI6IFwiICsgc2Vzc2lvblswXS51c2VybmFtZSlcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXMgXCIgKyByZXMuc3RhdHVzQ29kZSlcbiAgXG4gICAgICAgIGF3YWl0IHNldExvZ2luU2Vzc2lvbihyZXMsIHNlc3Npb24pXG4gIFxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IGRvbmU6IHRydWUgfSlcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJJIGFtIHRoZSBlcnJvciBcIiArIGVycm9yKSBcbiAgICAgICAgcmVzLnN0YXR1cyg0MDEpLnNlbmQoZXJyb3IubWVzc2FnZSlcbiAgICAgIH1cbiAgICB9KVxuICAiXSwibmFtZXMiOlsicGFzc3BvcnQiLCJuZXh0Q29ubmVjdCIsImxvY2FsU3RyYXRlZ3kiLCJzZXRMb2dpblNlc3Npb24iLCJjb3JzIiwiYXV0aGVudGljYXRlIiwibWV0aG9kIiwicmVxIiwicmVzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXNzaW9uIiwiZXJyb3IiLCJ0b2tlbiIsInBhc3N3b3JkIiwiYm9keSIsInVzZSIsImluaXRpYWxpemUiLCJvcHRpb25zIiwicG9zdCIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwidXNlcm5hbWUiLCJzdGF0dXNDb2RlIiwic3RhdHVzIiwic2VuZCIsImRvbmUiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/login.js\n");

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