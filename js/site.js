(function () {
  'use strict';

  function renderFooter() {
    var footerRoot = document.getElementById('site-footer');

    if (!footerRoot) {
      return;
    }

    var currentYear = new Date().getFullYear();

    footerRoot.innerHTML = [
      '<footer class="site-footer">',
      '  <nav class="site-footer__nav" aria-label="サイト内リンク">',
      '    <a href="./index.html">トップページ</a>',
      '    <span aria-hidden="true">/</span>',
      '    <a href="./privacy-policy.html">プライバシーポリシー</a>',
      '    <span aria-hidden="true">/</span>',
      '    <a href="https://github.com/pyth0n14n/TastingGenie2nd-site" rel="noopener noreferrer" target="_blank">GitHub</a>',
      '  </nav>',
      '  <p>&copy; ' + currentYear + ' ききさけ帖 開発者</p>',
      '</footer>'
    ].join('');
  }

  window.renderFooter = renderFooter;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderFooter);
  } else {
    renderFooter();
  }
}());
