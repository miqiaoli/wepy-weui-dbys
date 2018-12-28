import wepy from 'wepy';
// import Cookie from 'modulex-cookie'
// import Cookie from './demo'

var hexcase = 0; /* hex output format. 0 - lowercase; 1 - uppercase */
var b64pad = ""; /* base-64 pad character. "=" for strict RFC compliance */
var chrsz = 8; /* bits per input character. 8 - ASCII; 16 - Unicode */

function _safepwd(s1, s2, s3) {
  return _hex_md5(_hex_md5(s1).substring(0, 16)
      + _hex_md5(s2).substring(0, 16) + s3.substring(0, 16));
}
function _hex_md5(s) {
  return _binl2hex(_core_md5(_str2binl(s), s.length * chrsz));
}
function _b64_md5(s) {
  return _binl2b64(_core_md5(_str2binl(s), s.length * chrsz));
}
function _str_md5(s) {
  return _binl2str(_core_md5(_str2binl(s), s.length * chrsz));
}
function _hex_hmac_md5(key, data) {
  return _binl2hex(_core_hmac_md5(key, data));
}
function _b64_hmac_md5(key, data) {
  return _binl2b64(_core_hmac_md5(key, data));
}
function _str_hmac_md5(key, data) {
  return _binl2str(_core_hmac_md5(key, data));
}

function _md5_vm_test() {
  return _hex_md5("abc") == "900150983cd24fb0d6963f7d28e17f72";
}

function _core_md5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << ((len) % 32);
  x[(((len + 64) >>> 9) << 4) + 14] = len;

  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;

  for (var i = 0; i < x.length; i += 16) {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;

    a = _md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
    d = _md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = _md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = _md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = _md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = _md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = _md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = _md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = _md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = _md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = _md5_ff(c, d, a, b, x[i + 10], 17, -42063);
    b = _md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = _md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = _md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = _md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = _md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);

    a = _md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = _md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = _md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = _md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
    a = _md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = _md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = _md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = _md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = _md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = _md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = _md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = _md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = _md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = _md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = _md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = _md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);

    a = _md5_hh(a, b, c, d, x[i + 5], 4, -378558);
    d = _md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = _md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = _md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = _md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = _md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = _md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = _md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = _md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = _md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
    c = _md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = _md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = _md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = _md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = _md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = _md5_hh(b, c, d, a, x[i + 2], 23, -995338651);

    a = _md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
    d = _md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = _md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = _md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = _md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = _md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = _md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = _md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = _md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = _md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = _md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = _md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = _md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = _md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = _md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = _md5_ii(b, c, d, a, x[i + 9], 21, -343485551);

    a = _safe_add(a, olda);
    b = _safe_add(b, oldb);
    c = _safe_add(c, oldc);
    d = _safe_add(d, oldd);
  }
  return Array(a, b, c, d);

}

function _md5_cmn(q, a, b, x, s, t) {
  return _safe_add(_bit_rol(_safe_add(_safe_add(a, q), _safe_add(x, t)), s), b);
}
function _md5_ff(a, b, c, d, x, s, t) {
  return _md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
}
function _md5_gg(a, b, c, d, x, s, t) {
  return _md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
}
function _md5_hh(a, b, c, d, x, s, t) {
  return _md5_cmn(b ^ c ^ d, a, b, x, s, t);
}
function _md5_ii(a, b, c, d, x, s, t) {
  return _md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
}

function _core_hmac_md5(key, data) {
  var bkey = _str2binl(key);
  if (bkey.length > 16)
    bkey = _core_md5(bkey, key.length * chrsz);

  var ipad = Array(16), opad = Array(16);
  for (var i = 0; i < 16; i++) {
    ipad[i] = bkey[i] ^ 0x36363636;
    opad[i] = bkey[i] ^ 0x5C5C5C5C;
  }

  var hash = _core_md5(ipad.concat(_str2binl(data)), 512 + data.length
          * chrsz);
  return _core_md5(opad.concat(hash), 512 + 128);
}
function _safe_add(x, y) {
  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return (msw << 16) | (lsw & 0xFFFF);
}

function _bit_rol(num, cnt) {
  return (num << cnt) | (num >>> (32 - cnt));
}

function _str2binl(str) {
  var bin = Array();
  var mask = (1 << chrsz) - 1;
  for (var i = 0; i < str.length * chrsz; i += chrsz)
    bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << (i % 32);
  return bin;
}

function _binl2str(bin) {
  var str = "";
  var mask = (1 << chrsz) - 1;
  for (var i = 0; i < bin.length * 32; i += chrsz)
    str += String.fromCharCode((bin[i >> 5] >>> (i % 32)) & mask);
  return str;
}

function _binl2hex(binarray) {
  var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
  var str = "";
  for (var i = 0; i < binarray.length * 4; i++) {
    str += hex_tab
        .charAt((binarray[i >> 2] >> ((i % 4) * 8 + 4)) & 0xF)
        + hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8)) & 0xF);
  }
  return str;
}

function _binl2b64(binarray) {
  var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var str = "";
  for (var i = 0; i < binarray.length * 4; i += 3) {
    var triplet = (((binarray[i >> 2] >> 8 * (i % 4)) & 0xFF) << 16)
        | (((binarray[i + 1 >> 2] >> 8 * ((i + 1) % 4)) & 0xFF) << 8)
        | ((binarray[i + 2 >> 2] >> 8 * ((i + 2) % 4)) & 0xFF);
    for (var j = 0; j < 4; j++) {
      if (i * 8 + j * 6 > binarray.length * 32)
        str += b64pad;
      else
        str += tab.charAt((triplet >> 6 * (3 - j)) & 0x3F);
    }
  }
  return str;
}

function _pw2md5(password, md5password) {
  md5password.value =_b64_md5(password.value) + "==";
  password.value = "";
}
function Pwdmd5(str1, str2, s3) {
  try {
    // let s3 = Cookie.get("ys-SF_VC_ID")
    // let s3 = CookieGet("ys-SF_VC_ID")
    let str3 = decode(s3)
    console.log(str1 + '---' + str2 + '---' + str3)
    return _safepwd(str1, str2, str3)
  } catch (e) {
  }
  return "";
}

function CookieGet(name) {
  let ret
  let m
  if (isNotEmptyString(name)) {
    // if (m = String(document.cookie).match(new RegExp('(?:^| )' + name + '(?:(?:=([^;]*))|;|$)'))) {
    if (m = String(wsl).match(new RegExp('(?:^| )' + name + '(?:(?:=([^;]*))|;|$)'))) {
      ret = m[1] ? decode(m[1]) : '';
    }
  }
  return ret;
}
function isNotEmptyString(val) {
  return typeof val === 'string' && val !== '';
}
function decode(s) {
 return decodeURIComponent(s.replace(/\+/g, ' '));
}



export default Pwdmd5
  