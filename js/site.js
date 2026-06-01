(function () {
  'use strict';

  const pages = [
    { href: './index.html', label: 'トップページ', match: /(?:^|\/)index\.html$|\/$/ },
    { href: './privacy-policy.html', label: 'プライバシーポリシー', match: /(?:^|\/)privacy-policy\.html$/ },
  ];

  const currentPath = window.location.pathname || '/';

  function isCurrentPage(page) {
    return page.match.test(currentPath);
  }

  function renderHeader() {
    const headerMount = document.getElementById('site-header');

    if (!headerMount) {
      return;
    }

    const navLinks = pages.map((page) => {
      const current = isCurrentPage(page) ? ' aria-current="page"' : '';
      return `<a href="${page.href}"${current}>${page.label}</a>`;
    }).join('');

    headerMount.innerHTML = `
      <header class="site-header">
        <a class="site-brand" href="./index.html">ききさけ帖</a>
        <nav class="site-nav" aria-label="サイト内ナビゲーション">
          ${navLinks}
        </nav>
      </header>
    `;
  }

  function renderFooter() {
    const footerMount = document.getElementById('site-footer');
    const currentYear = new Date().getFullYear();

    if (!footerMount) {
      return;
    }

    footerMount.innerHTML = `
      <footer class="site-footer">
        <nav class="site-footer__nav" aria-label="サイト内リンク">
          <a href="./index.html">トップページ</a>
          <span aria-hidden="true">/</span>
          <a href="./privacy-policy.html">プライバシーポリシー</a>
          <span aria-hidden="true">/</span>
          <a href="https://github.com/pyth0n14n/TastingGenie2nd-site" rel="noopener noreferrer" target="_blank">GitHub</a>
        </nav>
        <p>&copy; ${currentYear} ききさけ帖 開発者. All rights reserved.</p>
      </footer>
    `;
  }

  renderHeader();
  renderFooter();
}());
