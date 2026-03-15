<template>
  <header class="header">
    <!-- Top Header -->
    <div class="header-top">
      <div class="header-top-inner">
        <div class="header-logo">
          <router-link to="/">
            <span class="header-logo-sub">板橋区の学習塾なら</span>
            <span class="header-logo-main">板橋セミナー</span>
          </router-link>
        </div>

        <div class="header-contact">
          <p class="header-contact-text">無料体験入塾の申し込み・お問い合わせなどお気軽にご連絡ください</p>
          <div class="header-contact-phones">
            <a href="tel:000-000-0000" class="header-phone">
              <span class="phone-icon">📞</span>
              <span class="phone-number">000-000-0000</span>
            </a>
            <a href="tel:111-111-1111" class="header-phone">
              <span class="phone-icon">📱</span>
              <span class="phone-number">111-111-1111</span>
            </a>
          </div>
        </div>

        <div class="header-cta">
          <router-link to="/contact" class="header-cta-btn header-cta-trial">
            <span>無料体験申し込み</span>
            <span class="cta-arrow">▼</span>
          </router-link>
          <router-link to="/contact" class="header-cta-btn header-cta-contact">
            <span>お問い合わせ</span>
            <span class="cta-arrow">▼</span>
          </router-link>
        </div>

        <!-- Mobile Header -->
        <div class="header-mobile-icons">
          <a href="tel:000-000-0000" class="mobile-icon">📞</a>
          <a href="tel:111-111-1111" class="mobile-icon">📱</a>
          <button class="hamburger" @click="toggleMenu" :class="{ active: isMenuOpen }">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <nav class="header-nav" :class="{ 'is-open': isMenuOpen }">
      <ul class="nav-list">
        <li class="nav-item">
          <router-link to="/" class="nav-link" @click="closeMenu">TOP</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/policy" class="nav-link" @click="closeMenu">授業の方針</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/timetable" class="nav-link" @click="closeMenu">授業料・時間割</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/achievement" class="nav-link" @click="closeMenu">合格実績</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/overview" class="nav-link" @click="closeMenu">塾概要</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link" @click="closeMenu">お問い合わせ</router-link>
        </li>
      </ul>
    </nav>

    <!-- Mobile Menu Overlay -->
    <div class="mobile-menu" :class="{ 'is-open': isMenuOpen }">
      <div class="mobile-menu-content">
        <ul class="mobile-nav-list">
          <li><router-link to="/" @click="closeMenu">TOP</router-link></li>
          <li><router-link to="/policy" @click="closeMenu">授業の方針</router-link></li>
          <li><router-link to="/timetable" @click="closeMenu">授業料・時間割</router-link></li>
          <li><router-link to="/achievement" @click="closeMenu">合格体験談</router-link></li>
          <li><router-link to="/overview" @click="closeMenu">塾概要</router-link></li>
          <li><router-link to="/contact" @click="closeMenu">お問い合わせ</router-link></li>
          <li><router-link to="/" @click="closeMenu">新着情報</router-link></li>
          <li><router-link to="/" @click="closeMenu">サイトマップ</router-link></li>
          <li><router-link to="/" @click="closeMenu">プライバシーポリシー</router-link></li>
        </ul>
      </div>
    </div>
    <div class="mobile-menu-overlay" :class="{ 'is-open': isMenuOpen }" @click="closeMenu"></div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}
</script>

<style scoped>
.header {
  position: relative;
  z-index: 100;
}

.header-top {
  background-color: #fff;
  border-bottom: 1px solid #eee;
}

.header-top-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-logo a {
  display: block;
  text-decoration: none;
  color: inherit;
}

.header-logo-sub {
  display: block;
  font-size: 0.75rem;
  color: #666;
}

.header-logo-main {
  display: block;
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-primary);
}

.header-contact {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header-contact-text {
  font-size: 0.75rem;
  color: #666;
  margin-bottom: 5px;
}

.header-contact-phones {
  display: flex;
  gap: 20px;
}

.header-phone {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary);
  text-decoration: none;
}

.phone-icon {
  font-size: 1.25rem;
}

.header-cta {
  display: flex;
  gap: 0;
}

.header-cta-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px 25px;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: opacity 0.3s;
}

.header-cta-btn:hover {
  opacity: 0.8;
}

.header-cta-trial {
  background-color: var(--color-primary);
  color: #fff;
}

.header-cta-contact {
  background-color: #666;
  color: #fff;
}

.cta-arrow {
  font-size: 0.625rem;
  margin-top: 3px;
}

.header-mobile-icons {
  display: none;
  align-items: center;
  gap: 15px;
}

.mobile-icon {
  font-size: 1.25rem;
  text-decoration: none;
}

/* Hamburger */
.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: var(--color-primary);
  border: none;
  cursor: pointer;
  padding: 8px;
  gap: 5px;
}

.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: #fff;
  transition: all 0.3s;
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* Navigation */
.header-nav {
  background-color: var(--color-primary);
}

.nav-list {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

.nav-item {
  border-right: 1px solid rgba(255, 255, 255, 0.2);
}

.nav-item:first-child {
  border-left: 1px solid rgba(255, 255, 255, 0.2);
}

.nav-link {
  display: block;
  padding: 15px 30px;
  color: #fff;
  text-decoration: none;
  font-size: 0.9375rem;
  font-weight: 500;
  transition: background-color 0.3s;
}

.nav-link:hover,
.nav-link.router-link-active {
  background-color: rgba(255, 255, 255, 0.1);
}

/* Mobile Menu */
.mobile-menu {
  position: fixed;
  top: 0;
  right: -280px;
  width: 280px;
  height: 100vh;
  background: #fff;
  z-index: 1001;
  transition: right 0.3s;
  overflow-y: auto;
}

.mobile-menu.is-open {
  right: 0;
}

.mobile-menu-content {
  padding: 60px 20px 20px;
}

.mobile-nav-list li {
  border-bottom: 1px solid #eee;
}

.mobile-nav-list a {
  display: block;
  padding: 15px 0;
  color: #333;
  text-decoration: none;
  font-size: 0.9375rem;
}

.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
}

.mobile-menu-overlay.is-open {
  opacity: 1;
  visibility: visible;
}

/* Responsive */
@media (max-width: 1024px) {
  .header-contact {
    display: none;
  }
}

@media (max-width: 768px) {
  .header-top-inner {
    padding: 10px 15px;
  }

  .header-logo-main {
    font-size: 1.25rem;
  }

  .header-contact,
  .header-cta {
    display: none;
  }

  .header-mobile-icons {
    display: flex;
  }

  .header-nav {
    display: none;
  }
}
</style>
