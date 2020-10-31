
(() => (e, t = document, r = window.performance, n = !1) => {
  const s = () => {
    let e, t;
    return {
      p: new Promise((r, n) => {
        (e = r), (t = n);
      }),
      s: e,
      j: t,
    };
  };
  e.serverError &&
    console.error(`[global-webdeps] Error\n${e.serverError}`);
  const o = (e) =>
      new Map(
        e.map(([e, t, r]) => [
          e,
          a({ name: e, url: t, detectionExpression: r }),
        ])
      ),
    a = (e) => {
      const t = s(),
        r = t.p.then(() => c(e)),
        n = s(),
        o = i
          .then(() => n.p)
          .then(() => l(e))
          .then(() => u(e).then((t) => p(e, t)))
          .catch(() => (t.s(), r));
      return Object.assign({}, e, {
        request: () => (n.s(), Promise.race([r, o])),
      });
    },
    i = new Promise((e) => t.addEventListener('DOMContentLoaded', e)),
    l = ({ url: e }) =>
      new Promise((r, n) => {
        [...t.scripts].find(
          (t) =>
            (
              t.getAttribute('src') ||
              t.getAttribute('data-src') ||
              '//@'
            ).split('//')[1] === e.split('//')[1]
        )
          ? r()
          : n();
      }),
    c = ({ url: e }) =>
      new Promise((r, n) => {
        const s = t.createElement('script');
        (s.src = `${e}${
          e.includes('?') ? '&' : '?'
        }loading-agent=global-webdeps`),
          (s.onload = r),
          (s.onerror = n),
          s.setAttribute('data-agent', 'global-webdeps'),
          t.head.appendChild(s);
      }),
    d = [],
    p = ({ name: e }, t) => {
      const o = (t) => `[global-webdeps] ${e} detection ${t}`,
        { p: a, s: i, j: l } = s();
      return (
        d.push([
          i,
          l,
          t,
          () => {
            r.mark(o('end')), r.measure(o(), o('start'), o('end'));
          },
          r.now(),
          e,
        ]),
        r.mark(o('start')),
        n || m(),
        a
      );
    },
    m = () => {
      n = !0;
      const e = r.now();
      let t,
        s = d.length;
      for (; s--; )
        if ((t = d.shift())) {
          const [r, n, s, a, i, l] = t;
          let c;
          try {
            c = s();
          } catch (o) {
            n(o);
          }
          !0 === c
            ? (a(), r())
            : e - i > 6e4
            ? (a(),
              n(Error(`[global-webdeps] Detection for "${l}" timed out`)))
            : d.push(t);
        }
      d.length ? setTimeout(m, 100) : (n = !1);
    },
    u = ({ name: e, detectionExpression: t }) => {
      let r, n;
      ('string' == typeof t && 0 !== t.length) ||
        (n = Error(
          `[global-webdeps] "${e}" hasn't a detection expression`
        ));
      try {
        r = Function(`return ${t}`);
      } catch (s) {
        n = s;
      }
      return new Promise((e, t) => {
        r ? e(r) : n && t(n);
      });
    },
    b = new Map([...o(e.ex), ...o(e.im)]);
  (globalWebdeps = (...e) => {
    const t = [...new Set(e)],
      r = t.filter((e) => !b.get(e));
    return r.length
      ? Promise.reject(
          Error(`[global-webdeps] Unknown dependency(ies): ${r}`)
        )
      : Promise.all(
          t.map((e) => {
            const t = b.get(e);
            return t ? t.request() : Promise.reject();
          })
        );
  }),
    i.then(() => globalWebdeps(...e.im.map(([e]) => e)));
})()({
  ex: [
    [
      'globoid-js',
      'https://s3.glbimg.com/cdn/libs/globoid-js/1.4.1/globoid-js.min.js',
      'window.glb != null && window.glb.globoIdClientMap != null',
    ],
    [
      'pow',
      'https://royale.globo.com/assets/pow/3.0.0/bundle.js',
      'window.pow !== undefined',
    ],
    [
      'hcaptcha',
      'https://hcaptcha.com/1/api.js?hl=pt-BR&render=explicit&onload=hcaptchaLoad',
      'window.hcaptcha !== undefined',
    ],
    [
      'globo-captcha',
      'https://captcha.globo.com/widget.js',
      'window.GloboCaptcha !== undefined',
    ],
    [
      'amp-social-share',
      'https://cdn.ampproject.org/v0/amp-social-share-0.1.js',
      'window.__AMP_SERVICES["amp-social-share"] !== undefined',
    ],
    [
      'amp',
      'https://cdn.ampproject.org/v0.js',
      'window.AMP !== undefined',
    ],
    [
      'recaptcha',
      'https://www.google.com/recaptcha/api.js?render=explicit',
      'window.grecaptcha !== undefined',
    ],
    [
      'player',
      'https://p.glbimg.com/api/stable/api.min.js',
      "window.WM && typeof WM.Player === 'function'",
    ],
    [
      'cadun',
      'https://s.glbimg.com/pc/ca/cadun.js',
      'window.Cadun !== undefined || window.Cadun.user !== undefined || window.Cadun.user.me !== undefined',
    ],
  ],
  im: [
    [
      'globo-ab-v2',
      'https://s3.glbimg.com/v1/AUTH_da787d4f4e8d46e3ad76d5fa568fe786/globo-ab/globo-ab-v2.min.js',
      "typeof window.globoAB !== 'undefined'",
    ],
    [
      'globo-ab',
      'https://s3.glbimg.com/v1/AUTH_da787d4f4e8d46e3ad76d5fa568fe786/globo-ab/3.0/globo-ab.min.js',
      "typeof window.GloboAB === 'function'",
    ],
  ],
});