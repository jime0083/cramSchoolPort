<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-main">
        <div class="footer-info">
          <div class="footer-logo">
            <span class="footer-logo-sub">板橋区の学習塾なら</span>
            <span class="footer-logo-main">板橋セミナー</span>
          </div>
          <div class="footer-details">
            <p>〒000-0000 東京都板橋区〇〇町11-2</p>
            <p>TEL：000-000-0000（111-111-1111）FAX：000-000-0000</p>
            <p>営業時間：16:30〜23:00　定休日：日・祝</p>
            <p>アクセス：XX線「△△△駅」から徒歩5分</p>
          </div>
        </div>

        <nav class="footer-nav">
          <ul class="footer-nav-list">
            <li><router-link to="/">Top</router-link></li>
            <li><router-link to="/policy">授業の方針</router-link></li>
            <li><router-link to="/timetable">授業料・時間割</router-link></li>
            <li><router-link to="/achievement">合格実績</router-link></li>
          </ul>
          <ul class="footer-nav-list">
            <li><router-link to="/achievement">合格体験談</router-link></li>
            <li><router-link to="/contact">お問い合わせ</router-link></li>
            <li><router-link to="/">新着情報</router-link></li>
            <li><router-link to="/">プライバシーポリシー</router-link></li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="footer-bottom">
      <p class="footer-copyright">東京都板橋区の学習塾 &copy; 板橋セミナー</p>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
  background-color: var(--color-primary);
  color: #fff;
}

.footer-inner {
  max-width: 980px;
  margin: 0 auto;
  padding: 40px 0;
}

@media (max-width: 980px) {
  .footer-inner {
    width: 90%;
    max-width: none;
  }
}

.footer-main {
  display: flex;
  justify-content: space-between;
  gap: 40px;
}

.footer-info {
  flex: 1;
}

.footer-logo {
  margin-bottom: 20px;
}

.footer-logo-sub {
  display: block;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.8);
}

.footer-logo-main {
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
}

.footer-details {
  font-size: 0.8125rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
}

.footer-nav {
  display: flex;
  gap: 60px;
}

.footer-nav-list {
  list-style: none;
}

.footer-nav-list li {
  margin-bottom: 10px;
}

.footer-nav-list a {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.3s;
}

.footer-nav-list a:hover {
  color: #fff;
  text-decoration: underline;
}

.footer-bottom {
  background-color: rgba(0, 0, 0, 0.2);
  padding: 15px 20px;
  text-align: center;
}

.footer-copyright {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.8);
}

@media (max-width: 768px) {
  .footer-main {
    flex-direction: column;
    gap: 30px;
  }

  .footer-nav {
    flex-direction: column;
    gap: 0;
  }

  .footer-nav-list {
    display: flex;
    flex-wrap: wrap;
    gap: 15px 20px;
  }

  .footer-nav-list li {
    margin-bottom: 0;
  }
}
</style>
