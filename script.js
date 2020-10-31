nvg13574.makeRubicon = function () {
    var a = {};
    var b = new Array(
      'gender',
      'age',
      'education',
      'interest',
      'product',
      'marital',
      'brand',
      'career',
      'income',
      'cluster',
      'custom'
    );
    var c = 0;
    var d = '';
    for (c = 0; c < b.length; c++) {
      d = nvg13574.getSegment(b[c]);
      if (d)
        a['nvg_' + b[c]] = nvg13574.getSegment(b[c]).replace(/-/g, ',');
    }
    return a;
  };
  nvg13574.dfpnvg = function () {
    this.cokCache = {};
    var a = this.version == 7 ? this.segments : this.seg;
    for (nvg_i in a) {
      var b = '';
      var c = 0;
      var d = 'nvg_' + a[nvg_i];
      d = d.substring(0, 10);
      var e = this.getSegment(a[nvg_i]);
      if (e.search(',') != -1) {
        var b = e.split(',');
        c = 1;
      } else if (e.search('-') != -1) {
        var b = e.split('-');
        c = 1;
      } else if (e != '') {
        if (typeof googletag == 'object')
          googletag.pubads().setTargeting(d, e);
        if (typeof GA_googleAddAttr == 'function') GA_googleAddAttr(d, e);
        c = 0;
      }
      if (c == 1)
        if (b.length >= 1) {
          if (typeof googletag == 'object')
            googletag.pubads().setTargeting(d, b);
          if (typeof GA_googleAddAttr == 'function') GA_googleAddAttr(d, b);
        }
    }
  };
  nvg13574.krux_cookie_swap = function () {
    var a = new Date(),
      b = window.localStorage.getItem('nvgkrux13574');
    try {
      if (!b || a - new Date(b) >= 24 * 60 * 60 * 1000) {
        this.include(
          '//beacon.krxd.net/usermatch.gif?partner=navegg&partner_uid=' +
            this.userId
        );
        window.localStorage.setItem('nvgkrux13574', a.toJSON());
      }
    } catch (c) {
      window.localStorage.removeItem('nvgkrux13574');
    }
  };
  window.naveggReady = window.naveggReady || [];
  window.naveggReady.push(function () {
    nvg13574.krux_cookie_swap();
  });
  nvg13574.onboarding = function (a) {
    var b = ['prtusride', 'prtusridc', 'prtusridr', 'prtusridt'];
    var c,
      d,
      e = 0;
    var f =
      'cd.navdmp.com/cd?id=' + (this.version == 7 ? this.userId : this.usr);
    f += '&acc=' + this.account;
    if (!a.hasOwnProperty('prtid')) {
      if (this.debug)
        console.error('Navegg - OnBoard - missed prtid parms');
      return;
    }
    f += '&prtid=' + a.prtid;
    for (d = 0; d < b.length; d++) {
      c = b[d];
      if (a.hasOwnProperty(c)) {
        f += '&' + c + '=' + a[c];
        e = 1;
      }
    }
    if (a.hasOwnProperty('data'))
      f += '&data=' + escape(JSON.stringify(a.data));
    if (!e && this.debug)
      console.warn(
        'Navegg - OnBoard - parms should contain at least one of:' + b
      );
    this.include(this.schema + f);
  };
  nvg13574.setOnboard = nvg13574.onboarding;
  try {
    nvg13574.url = window.location.href;
    window.onhashchange = function () {
      try {
        nvg13574.url = window.location.href;
        nvg13574.saveRequest(nvg13574.userId || nvg13574.usr);
      } catch (a) {}
    };
  } catch (e) {}
  try {
    var nvg_hosts = [
      'casavogue.globo.com',
      'revistaglamour.globo.com',
      'gq.globo.com',
      'vogue.globo.com',
      'revistaautoesporte.globo.com',
      'revistacasaejardim.globo.com',
      'revistacrescer.globo.com',
      'epoca.globo.com',
      'epocanegocios.globo.com',
      'revistagalileu.globo.com',
      'revistagloborural.globo.com',
      'revistamarieclaire.globo.com',
      'revistamonet.globo.com',
      'revistapegn.globo.com',
      'revistaquem.globo.com',
      'www.techtudo.com.br',
    ];
    if (nvg_hosts.indexOf(window.location.host) > -1)
      nvg13574.include('//tag.navdmp.com/tm46169.js');
  } catch (e) {}
  try {
    if (nvg13574.getCookie('Xt0aE3mT_r') == 'cf82c')
      try {
        nvg13574.setCustom('120929');
      } catch (err) {}
    if (nvg13574.getCookie('Xt0aE3mT_r') == '55feb')
      try {
        nvg13574.setCustom('120930');
      } catch (err) {}
    if (nvg13574.getCookie('Xt0aE3mT_r') == '15bbe')
      try {
        nvg13574.setCustom('120931');
      } catch (err) {}
    if (nvg13574.getCookie('Xt0aE3mT_r') == '3f5eb')
      try {
        nvg13574.setCustom('120932');
      } catch (err) {}
  } catch (err) {}
  nvg13574.ddp_cookie_swap = function () {
    if (window.location.host == 'www.zapimoveis.com.br') {
      var a = new Date(),
        b = window.localStorage.getItem('nvgddp13574');
      try {
        if (!b || a - new Date(b) >= 24 * 60 * 60 * 1000) {
          this.include(
            '//cm.g.doubleclick.net/pixel?google_nid=navegg_ddp&google_cm'
          );
          window.localStorage.setItem('nvgddp13574', a.toJSON());
        }
      } catch (c) {
        window.localStorage.removeItem('nvgddp13574');
      }
    }
  };
  window.naveggReady = window.naveggReady || [];
  window.naveggReady.push(function () {
    nvg13574.ddp_cookie_swap();
  });
  nvg13574.setBeacons = function () {
    var a,
      b,
      c,
      d,
      e = [
        [211503, 'beacon.krxd.net/event.gif?event_id=M6IkIfZM', 'Pixel'],
        [138176, 'beacon.krxd.net/event.gif?event_id=M6Ij5wwD', 'Pixel'],
        [138183, 'beacon.krxd.net/event.gif?event_id=M6IkT5Yu', 'Pixel'],
        [129094, 'beacon.krxd.net/event.gif?event_id=M6Ik8xnI', 'Pixel'],
        [
          212807,
          'beacon.krxd.net/event.gif?event_id=M_irTDJF&event_type=default',
          'Pixel',
        ],
        [212808, 'beacon.krxd.net/event.gif?event_id=M_irzpI_', 'Pixel'],
        [
          211648,
          'beacon.krxd.net/event.gif?event_id=NB644Bfa&event_type=default&homepage=1',
          'Pixel',
        ],
        [
          211649,
          'beacon.krxd.net/event.gif?event_id=NB65bCk5&event_type=default&compra=1',
          'Pixel',
        ],
        [
          214255,
          "beacon.krxd.net/event.gif?event_id=NB655vdh&event_type=default&revenda-home=1'",
          'Pixel',
        ],
        [
          214256,
          'beacon.krxd.net/event.gif?event_id=NB66rH_n&event_type=default&revenda-cadastro=1',
          'Pixel',
        ],
        [
          134696,
          'beacon.krxd.net/event.gif?event_id=NRIgrMgx&event_type=default',
          'Pixel',
        ],
        [
          216886,
          'beacon.krxd.net/event.gif?event_id=NRmrK9kZ&event_type=default',
          'Pixel',
        ],
      ];
    b = this.getSegment('custom').split('-');
    for (c = 0; c < e.length; c++) {
      d = e[c];
      if (b.indexOf(d[0].toString()) >= 0) {
        a = d[2] == 'Script' ? 'script' : 'img';
        this.include('//' + d[1], a);
      }
    }
  };
  nvg13574.setBeacons();