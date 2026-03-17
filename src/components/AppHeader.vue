<template>
  <header class="header">
    <!-- Top Header -->
    <div class="header-top">
      <div class="header-top-inner">
        <!-- Logo -->
        <div class="header-logo">
          <router-link to="/">
            <span class="header-logo-sub">板橋区の学習塾なら</span>
            <span class="header-logo-main">板橋セミナー</span>
          </router-link>
        </div>

        <!-- Contact Info (Desktop) -->
        <div class="header-contact">
          <p class="header-contact-text">無料体験入塾の申し込み・お問い合わせなどお気軽にご連絡ください</p>
          <div class="header-contact-phones">
            <a href="tel:000-000-0000" class="header-phone">
              <svg class="phone-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span class="phone-number">000-000-0000</span>
            </a>
            <a href="tel:111-111-1111" class="header-phone">
              <svg class="phone-icon mobile" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
              </svg>
              <span class="phone-number">111-111-1111</span>
            </a>
          </div>
        </div>

        <!-- Mobile Header Icons -->
        <div class="header-mobile-icons">
          <a href="tel:000-000-0000" class="mobile-icon-link">
            <svg class="mobile-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
          </a>
          <a href="tel:111-111-1111" class="mobile-icon-link">
            <svg class="mobile-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
            </svg>
          </a>
          <button class="hamburger" @click="toggleMenu" :class="{ active: isMenuOpen }">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <!-- CTA Buttons (Desktop) - Outside container for right edge alignment -->
      <div class="header-cta">
        <router-link to="/contact" class="header-cta-btn header-cta-trial">
          <span>無料体験申し込み</span>
          <svg class="cta-arrow" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 10l5 5 5-5z"/>
          </svg>
        </router-link>
        <router-link to="/contact" class="header-cta-btn header-cta-contact">
          <span>お問い合わせ</span>
          <svg class="cta-arrow" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 10l5 5 5-5z"/>
          </svg>
        </router-link>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <div class="mobile-menu-overlay" :class="{ 'is-open': isMenuOpen }" @click="closeMenu"></div>

    <!-- Mobile Menu -->
    <div class="mobile-menu" :class="{ 'is-open': isMenuOpen }">
      <nav class="mobile-nav">
        <ul class="mobile-nav-list">
          <li><router-link to="/" @click="closeMenu">TOP</router-link></li>
          <li><router-link to="/policy" @click="closeMenu">授業の方針</router-link></li>
          <li><router-link to="/timetable" @click="closeMenu">授業料・時間割</router-link></li>
          <li><router-link to="/achievement" @click="closeMenu">合格体験談</router-link></li>
          <li><router-link to="/overview" @click="closeMenu">塾概要</router-link></li>
          <li><router-link to="/contact" @click="closeMenu">お問い合わせ</router-link></li>
        </ul>
      </nav>
    </div>
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
  height: 80px;
  display: flex;
  align-items: stretch;
}

.header-top-inner {
  flex: 1;
  max-width: calc(100% - 400px);
  padding: 0 20px 0 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo */
.header-logo a {
  display: block;
  text-decoration: none;
  color: inherit;
}

.header-logo-sub {
  display: block;
  font-size: 0.6875rem;
  color: #666;
  font-weight: bold;
  margin-bottom: 2px;
}

.header-logo-main {
  display: block;
  font-size: 1.75rem;
  font-weight: bold;
  color: #1a3a6e;
  letter-spacing: 0.05em;
}

/* Contact */
.header-contact {
  text-align: center;
}

.header-contact-text {
  font-size: 0.6875rem;
  color: #666;
  margin-bottom: 5px;
}

.header-contact-phones {
  display: flex;
  gap: 25px;
}

.header-phone {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  text-decoration: none;
  color: #1a3a6e;
  line-height: 1;
}

.phone-icon {
  width: 20px;
  height: 20px;
  color: #1a3a6e;
  flex-shrink: 0;
  vertical-align: middle;
}

.phone-number {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  line-height: 1;
  vertical-align: middle;
}

/* CTA Buttons */
.header-cta {
  display: flex;
  flex-shrink: 0;
}

.header-cta-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: opacity 0.3s;
  width: 200px;
  height: 80px;
  box-sizing: border-box;
}

.header-cta-btn:hover {
  opacity: 0.85;
}

.header-cta-trial {
  background-color: #003C78;
  color: #fff;
}

.header-cta-contact {
  background-color: #4A5568;
  color: #fff;
}

.cta-arrow {
  width: 16px;
  height: 16px;
  margin-top: 2px;
}

/* Mobile Icons */
.header-mobile-icons {
  display: none;
  align-items: center;
  gap: 12px;
}

.mobile-icon-link {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1a3a6e;
}

.mobile-icon {
  width: 22px;
  height: 22px;
}

/* Hamburger */
.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  background: #1a3a6e;
  border: none;
  cursor: pointer;
  padding: 10px;
  gap: 6px;
}

.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: #fff;
  transition: all 0.3s;
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* Mobile Menu Overlay */
.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
}

.mobile-menu-overlay.is-open {
  opacity: 1;
  visibility: visible;
}

/* Mobile Menu */
.mobile-menu {
  position: fixed;
  top: 0;
  right: -280px;
  width: 280px;
  height: 100vh;
  background: #fff;
  z-index: 999;
  transition: right 0.3s;
  overflow-y: auto;
}

.mobile-menu.is-open {
  right: 0;
}

.mobile-nav {
  padding: 20px 0;
}

.mobile-nav-list {
  list-style: none;
}

.mobile-nav-list li {
  border-bottom: 1px solid #eee;
}

.mobile-nav-list a {
  display: block;
  padding: 16px 25px;
  color: #333;
  text-decoration: none;
  font-size: 0.9375rem;
  transition: background-color 0.3s;
}

.mobile-nav-list a:hover {
  background-color: #f5f5f5;
}

/* Responsive */
@media (max-width: 1100px) {
  .header-contact {
    display: none;
  }
}

@media (max-width: 768px) {
  .header-top {
    height: auto;
  }

  .header-top-inner {
    max-width: 100%;
    padding: 10px 15px;
  }

  .header-logo-sub {
    display: none;
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
}
</style>
