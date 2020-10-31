!(function (e) {
    var t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      var o = (t[r] = { i: r, l: !1, exports: {} });
      return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    (n.m = e),
      (n.c = t),
      (n.d = function (e, t, r) {
        n.o(e, t) ||
          Object.defineProperty(e, t, { enumerable: !0, get: r });
      }),
      (n.r = function (e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (
          (n.r(r),
          Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
          2 & t && 'string' != typeof e)
        )
          for (var o in e)
            n.d(
              r,
              o,
              function (t) {
                return e[t];
              }.bind(null, o)
            );
        return r;
      }),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return n.d(t, 'a', t), t;
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ''),
      n((n.s = 1));
  })([
    ,
    function (e, t, n) {
      'use strict';
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      n.r(t);
      var o = (function () {
        function e(t) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, e),
            this.processDeviceMemory(null == t ? void 0 : t.deviceMemory),
            this.processHardwareConcurrency(
              null == t ? void 0 : t.hardwareConcurrency
            );
        }
        var t, n, o;
        return (
          (t = e),
          (n = [
            {
              key: 'processDeviceMemory',
              value: function (e) {
                this._deviceMemory = null != e ? e : 'indefinido';
              },
            },
            {
              key: 'processHardwareConcurrency',
              value: function (e) {
                this._cpuCores = null != e ? e : 'indefinido';
              },
            },
            {
              key: 'properties',
              get: function () {
                return {
                  deviceMemory: this._deviceMemory,
                  cpuCores: this._cpuCores,
                };
              },
            },
          ]) && r(t.prototype, n),
          o && r(t, o),
          e
        );
      })();
      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var c = (function () {
        function e(t) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, e),
            this.processDataSaver(null == t ? void 0 : t.saveData),
            this.processConnectionType(
              null == t ? void 0 : t.effectiveType
            ),
            this.processRtt(null == t ? void 0 : t.rtt);
        }
        var t, n, r;
        return (
          (t = e),
          (n = [
            {
              key: 'processDataSaver',
              value: function (e) {
                this.saveData = null != e ? e : 'indefinido';
              },
            },
            {
              key: 'processConnectionType',
              value: function (e) {
                this.connectionType = null != e ? e : 'indefinido';
              },
            },
            {
              key: 'processRtt',
              value: function (e) {
                this.rtt = null != e ? e : 'indefinido';
              },
            },
            {
              key: 'properties',
              get: function () {
                return {
                  saveData: this.saveData,
                  connectionType: this.connectionType,
                  rtt: this.rtt,
                };
              },
            },
          ]) && i(t.prototype, n),
          r && i(t, r),
          e
        );
      })();
      function a(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function u(e) {
        return (u =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function f(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function s(e, t) {
        return (s =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function l(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct)
            return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = y(e);
          if (t) {
            var o = y(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return p(this, n);
        };
      }
      function p(e, t) {
        return !t || ('object' !== u(t) && 'function' != typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function y(e) {
        return (y = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      new ((function (e) {
        !(function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && s(e, t);
        })(i, e);
        var t,
          n,
          r,
          o = l(i);
        function i() {
          var e;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, i),
            o.call(
              this,
              null !== (e = window.navigator) && void 0 !== e ? e : {}
            )
          );
        }
        return (
          (t = i),
          (n = [
            {
              key: 'fillUtagData',
              value: function () {
                var e = this.connection,
                  t = e.saveData,
                  n = e.connectionType,
                  r = e.rtt,
                  o = this.hardware,
                  i = o.deviceMemory,
                  c = o.cpuCores;
                (window.utag_data.bs_userpower_connection_saveData = t),
                  (window.utag_data.bs_userpower_connection_connectionType = n),
                  (window.utag_data.bs_userpower_connection_rtt = r),
                  (window.utag_data.bs_userpower_hardware_deviceMemory = i),
                  (window.utag_data.bs_userpower_hardware_cpuCores = c);
              },
            },
          ]) && f(t.prototype, n),
          r && f(t, r),
          i
        );
      })(
        (function () {
          function e(t) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              this.processHardware(t),
              this.processConnection(t);
          }
          var t, n, r;
          return (
            (t = e),
            (n = [
              {
                key: 'processHardware',
                value: function () {
                  this._hardware = new o(navigator);
                },
              },
              {
                key: 'processConnection',
                value: function () {
                  var e, t;
                  this._connection = new c(
                    null !==
                      (e =
                        null === (t = navigator) || void 0 === t
                          ? void 0
                          : t.connection) && void 0 !== e
                      ? e
                      : {}
                  );
                },
              },
              {
                key: 'hardware',
                get: function () {
                  return this._hardware.properties;
                },
              },
              {
                key: 'connection',
                get: function () {
                  return this._connection.properties;
                },
              },
            ]) && a(t.prototype, n),
            r && a(t, r),
            e
          );
        })()
      ))().fillUtagData();
    },
  ]);