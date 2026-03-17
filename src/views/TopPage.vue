<template>
  <div class="top-page">
    <!-- Hero Section -->
    <section class="hero">
      <img :src="topImg" alt="板橋セミナー" class="hero-bg" />
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1 class="hero-title">
          <span class="hero-title-line">目標に向かって</span>
          <span class="hero-title-line">とことんと！</span>
        </h1>
        <p class="hero-description">
          御岳中学・大里中学・第四中学などの<br />
          入試やテスト対策におすすめの<br />
          板橋区にある学習塾
        </p>
        <div class="hero-badges">
          <span class="hero-badge badge-elementary">小学生</span>
          <span class="hero-badge badge-junior">中学生</span>
          <span class="hero-badge badge-high">高校生</span>
        </div>
      </div>
    </section>

    <!-- Secondary Nav (Desktop) -->
    <nav class="secondary-nav">
      <ul class="secondary-nav-list">
        <li><router-link to="/">TOP</router-link></li>
        <li><router-link to="/policy">授業の方針</router-link></li>
        <li><router-link to="/timetable">授業料・時間割</router-link></li>
        <li><router-link to="/achievement">合格実績</router-link></li>
        <li><router-link to="/overview">塾概要</router-link></li>
        <li><router-link to="/contact">お問い合わせ</router-link></li>
      </ul>
    </nav>

    <!-- Mobile Info Bar -->
    <div class="mobile-info-bar">
      <p class="mobile-info-text">
        板橋区にある
        <span class="mobile-badge badge-green">小</span>
        <span class="mobile-badge badge-blue">中</span>
        <span class="mobile-badge badge-yellow">高</span>
        対象の学習塾
      </p>
      <p class="mobile-info-schools">
        御岳中学・大里中学・第四中学などの<br />
        入試やテスト対策におすすめの学習塾
      </p>
    </div>

    <!-- Trial Banner -->
    <section class="trial-banner">
      <div class="trial-banner-inner">
        <img :src="banner1" alt="無料体験入塾実施中" class="trial-banner-img" />
      </div>
    </section>

    <!-- Mobile Trial Banner -->
    <section class="mobile-trial-banner">
      <div class="mobile-trial-content">
        <span class="mobile-trial-icon">🎒</span>
        <span class="mobile-trial-label">無料体験</span>
        <span class="mobile-trial-text">入塾実施中!</span>
      </div>
    </section>

    <!-- Timetable Section -->
    <section class="timetable-section section">
      <div class="container">
        <h2 class="section-title">授業料・時間割</h2>

        <div class="timetable-grid">
          <!-- Junior High School - Top Card -->
          <div class="timetable-card timetable-card-main">
            <div class="timetable-card-image">
              <img :src="juniorImg" alt="中学生" />
            </div>
            <div class="timetable-card-content">
              <h3 class="timetable-card-title">中学生(中1〜中3)</h3>
              <p class="timetable-card-description">
                受験指導から定期テストの対策まで、幅広い指導体制で中学生を強力サポート
              </p>
              <ul class="timetable-links">
                <li>
                  <router-link to="/timetable" class="timetable-link">
                    中1の授業料/時間割を見る
                    <span class="arrow">→</span>
                  </router-link>
                </li>
                <li>
                  <router-link to="/timetable" class="timetable-link">
                    中1の授業料/時間割を見る
                    <span class="arrow">→</span>
                  </router-link>
                </li>
                <li>
                  <router-link to="/timetable" class="timetable-link">
                    中1の授業料/時間割を見る
                    <span class="arrow">→</span>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>

          <!-- Bottom Row: Elementary and High School side by side -->
          <div class="timetable-bottom-row">
            <!-- Elementary School -->
            <div class="timetable-card timetable-card-sub">
              <div class="timetable-card-image">
                <img :src="study1" alt="小学生" />
              </div>
              <div class="timetable-card-body">
                <h3 class="timetable-card-title-sub-elementary">小学生</h3>
                <p class="timetable-card-desc-sub">
                  学習の習慣化や思考トレーニングを実施。お子様の「できる！！」を増やします
                </p>
                <router-link to="/timetable" class="btn-timetable-elementary">
                  小学生の授業料/時間割を見る
                  <span class="arrow">→</span>
                </router-link>
              </div>
            </div>

            <!-- High School -->
            <div class="timetable-card timetable-card-sub">
              <div class="timetable-card-image">
                <img :src="highImg" alt="高校生" />
              </div>
              <div class="timetable-card-body">
                <h3 class="timetable-card-title-sub-high">高校生</h3>
                <p class="timetable-card-desc-sub">
                  大学受験・定期テスト対策、目標に向かってレベルアップをサポートします
                </p>
                <router-link to="/timetable" class="btn-timetable-high">
                  高校生の授業料/時間割を見る
                  <span class="arrow">→</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about-section">
      <div class="about-wrapper">
        <div class="about-image">
          <img :src="study1" alt="板橋セミナー" />
        </div>
        <div class="about-content">
          <h2 class="about-title">板橋セミナーについて</h2>
          <p>
            板橋セミナーでは、小学生・中学生・高校生を対象とした学習指導やテスト対策を通して、子供たちの毎日の成長をアシストするための授業を行っております。アットホームな雰囲気で進行される授業の中で、子供たちは日々「頑張ること」と「ルールを守ること」を学んでいます。時として厳しく指導することもありますが、仲間とともに勉強する中で、人として大切なことを学びながら成長できるよう指導する様心がけています。
          </p>
          <p>
            板橋セミナーでは、生徒の学習状況に合わせたクラス分けが行われていて、レベルの高い学校を目指したい生徒の為のクラスや学校での勉強をサポートするためのクラスの他、受験対策の為の個別クラスなどを展開しております。また、スタッフ全くが担任制の家庭教師であり、読み方や指導方法などもしっかりと共有し合える授業を行っております。体験入塾も実施しておりますので、是非一度板橋セミナーの授業風景を覗いてみてください。
          </p>
          <div class="about-button">
            <router-link to="/policy" class="btn-about">
              板橋セミナーの授業方針
              <span class="arrow">→</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Achievement Banners -->
    <section class="achievement-banners section">
      <div class="container">
        <div class="achievement-grid">
          <router-link to="/achievement" class="achievement-banner">
            <img :src="banner2" alt="合格実績" />
          </router-link>
          <router-link to="/achievement" class="achievement-banner">
            <img :src="banner3" alt="合格体験談" />
          </router-link>
        </div>
      </div>
    </section>

    <!-- News Section -->
    <section class="news-section section">
      <div class="container">
        <div class="news-header">
          <h2 class="section-title news-title">新着情報</h2>
          <div class="news-button-wrapper">
            <router-link to="/" class="news-all-link">
              新着一覧
              <span class="arrow">→</span>
            </router-link>
          </div>
        </div>

        <div class="news-list">
          <article class="news-item">
            <time class="news-date">2022.06.20</time>
            <div class="news-content">
              <h3 class="news-item-title">中学受験の準備は難しい</h3>
              <p class="news-excerpt">
                梅雨入りとともに、じとじとした雨が降り続く6月となりました。夏の気配を感じつつも、雨に悩まされる日々が続いていますが、皆様楽しくお過ごしください。雨の日が続くと、つい気分...
              </p>
            </div>
          </article>
          <article class="news-item">
            <time class="news-date">2022.06.20</time>
            <div class="news-content">
              <h3 class="news-item-title">中学受験の準備は難しい</h3>
              <p class="news-excerpt">
                梅雨入りとともに、じとじとした雨が降り続く6月となりました。夏の気配を感じつつも、雨に悩まされる日々が続いていますが、皆様楽しくお過ごしください。雨の日が続くと、つい気分...
              </p>
            </div>
          </article>
          <article class="news-item">
            <time class="news-date">2022.06.20</time>
            <div class="news-content">
              <h3 class="news-item-title">中学受験の準備は難しい</h3>
              <p class="news-excerpt">
                梅雨入りとともに、じとじとした雨が降り続く6月となりました。夏の気配を感じつつも、雨に悩まされる日々が続いていますが、皆様楽しくお過ごしください。雨の日が続くと、つい気分...
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import topImg from '@/assets/images/top-img.png'
import study1 from '@/assets/images/study1.png'
import juniorImg from '@/assets/images/中学生img.png'
import highImg from '@/assets/images/高校生画像 1.png'
import banner1 from '@/assets/images/banner1 1.png'
import banner2 from '@/assets/images/banner2 1.png'
import banner3 from '@/assets/images/banner3 1.png'
</script>

<style scoped>
/* Base - Noto Sans JP */
.top-page {
  font-family: 'Noto Sans JP', sans-serif;
}

/* Hero Section */
.hero {
  position: relative;
  height: 420px;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.4);
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 980px;
  margin: 0 auto;
  padding: 60px 40px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero-title {
  margin-bottom: 20px;
}

.hero-title-line {
  display: block;
  font-size: 2.75rem;
  font-weight: bold;
  color: #00A0F0;
  line-height: 1.3;
}

.hero-description {
  color: #000000;
  font-size: 0.9375rem;
  font-weight: bold;
  line-height: 1.8;
  margin-bottom: 25px;
}

.hero-badges {
  display: flex;
  gap: 10px;
}

.hero-badge {
  display: inline-block;
  padding: 6px 18px;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 700;
  border: 2px solid transparent;
}

.badge-elementary {
  background-color: #00A0F0;
  color: #fff;
}

.badge-junior {
  background-color: #003C78;
  color: #fff;
}

.badge-high {
  background-color: #00A06E;
  color: #fff;
}

/* Secondary Nav */
.secondary-nav {
  background-color: #003C78;
}

.secondary-nav-list {
  max-width: 980px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  list-style: none;
}

.secondary-nav-list li {
  border-right: 1px solid rgba(255, 255, 255, 0.3);
}

.secondary-nav-list li:first-child {
  border-left: 1px solid rgba(255, 255, 255, 0.3);
}

.secondary-nav-list a {
  display: block;
  padding: 12px 28px;
  color: #fff;
  text-decoration: none;
  font-size: 0.9375rem;
  font-weight: 500;
  transition: background-color 0.3s;
}

.secondary-nav-list a:hover {
  background-color: rgba(255, 255, 255, 0.15);
}

/* Mobile Info Bar */
.mobile-info-bar {
  display: none;
  background-color: #f5f5f5;
  padding: 15px 20px;
  text-align: center;
}

.mobile-info-text {
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin-bottom: 8px;
}

.mobile-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  color: #fff;
  font-size: 0.75rem;
  font-weight: 700;
}

.badge-green {
  background-color: #00A0F0;
}

.badge-blue {
  background-color: #003C78;
}

.badge-yellow {
  background-color: #00A06E;
}

.mobile-info-schools {
  font-size: 0.75rem;
  color: #666;
  line-height: 1.6;
}

/* Trial Banner */
.trial-banner {
  background-color: #ffffff;
  padding: 60px 0;
}

.trial-banner-inner {
  max-width: 980px;
  margin: 0 auto;
  padding: 0;
  display: flex;
  justify-content: center;
}

.trial-banner-img {
  display: block;
  width: 400px;
  height: auto;
}

/* Mobile Trial Banner */
.mobile-trial-banner {
  display: none;
  background: linear-gradient(to right, #1a3a6e, #2a5a9e);
  padding: 12px 20px;
}

.mobile-trial-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: #fff;
}

.mobile-trial-icon {
  font-size: 1.25rem;
}

.mobile-trial-label {
  color: #fdd835;
  font-weight: 700;
  font-size: 1.125rem;
}

.mobile-trial-text {
  font-weight: 700;
  font-size: 1rem;
}

/* Section Common */
.section {
  padding: 60px 0;
}

.container {
  max-width: 980px;
  margin: 0 auto;
  padding: 0;
}

@media (max-width: 980px) {
  .container {
    width: 90%;
    max-width: none;
  }

  .about-wrapper {
    flex-direction: column;
  }

  .about-image {
    flex: none;
    height: 300px;
  }

  .about-content {
    flex: none;
    padding: 40px 30px;
  }
}

.section-title {
  font-size: 1.75rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
  color: #333;
}

/* Timetable Section */
.timetable-section {
  background-color: #fff;
  padding-top: 20px;
}

.timetable-grid {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

/* Main Card (中学生) - Top */
.timetable-card-main {
  display: flex;
  background: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

.timetable-card-main .timetable-card-image {
  flex: 0 0 50%;
}

.timetable-card-main .timetable-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.timetable-card-content {
  flex: 1;
  padding: 30px 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.timetable-card-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #003C78;
  margin-bottom: 15px;
  text-align: center;
}

.timetable-card-description {
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 20px;
  line-height: 1.8;
  text-align: center;
}

.timetable-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.timetable-link {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  background-color: #003C78;
  border: 2px solid #003C78;
  color: #fff;
  text-decoration: none;
  font-size: 0.875rem;
  transition: all 0.3s;
}

.timetable-link:hover {
  background-color: transparent;
  color: #003C78;
}

.timetable-link .arrow {
  transition: color 0.3s;
}

.timetable-link:hover .arrow {
  color: #003C78;
}

/* Bottom Row (小学生・高校生 横並び) */
.timetable-bottom-row {
  display: flex;
  gap: 25px;
}

.timetable-card-sub {
  flex: 1;
  background: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

.timetable-card-sub .timetable-card-image {
  height: 200px;
  overflow: hidden;
}

.timetable-card-sub .timetable-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.timetable-card-body {
  padding: 20px;
  text-align: center;
}

.timetable-card-title-sub-elementary {
  font-size: 1.375rem;
  font-weight: 700;
  color: #00A0F0;
  margin-bottom: 12px;
}

.timetable-card-title-sub-high {
  font-size: 1.375rem;
  font-weight: 700;
  color: #00A06E;
  margin-bottom: 12px;
}

.timetable-card-desc-sub {
  font-size: 0.8125rem;
  color: #666;
  line-height: 1.7;
  margin-bottom: 18px;
}

.btn-timetable-elementary {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  background-color: #00A0F0;
  border: 2px solid #00A0F0;
  color: #fff;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s;
}

.btn-timetable-elementary:hover {
  background-color: transparent;
  color: #00A0F0;
}

.btn-timetable-high {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  background-color: #00A06E;
  border: 2px solid #00A06E;
  color: #fff;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s;
}

.btn-timetable-high:hover {
  background-color: transparent;
  color: #00A06E;
}

.btn-timetable-elementary .arrow,
.btn-timetable-high .arrow {
  font-size: 0.875rem;
}

/* About Section */
.about-section {
  background-color: #F5F7FA;
}

.about-wrapper {
  display: flex;
  align-items: stretch;
}

.about-image {
  flex: 0 0 50%;
}

.about-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about-content {
  flex: 0 0 50%;
  color: #333;
  font-size: 0.9375rem;
  line-height: 2;
  padding: 60px 50px;
  box-sizing: border-box;
}

.about-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 30px;
  text-align: center;
}

.about-content p {
  margin-bottom: 20px;
  text-align: justify;
}

.about-button {
  margin-top: 35px;
  text-align: center;
}

.btn-about {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 35px;
  background-color: #003C78;
  border: 2px solid #003C78;
  color: #fff;
  text-decoration: none;
  font-size: 0.9375rem;
  font-weight: 500;
  transition: all 0.3s;
}

.btn-about:hover {
  background-color: transparent;
  color: #003C78;
}

/* Achievement Banners */
.achievement-banners {
  padding: 40px 0;
  background-color: #fff;
}

.achievement-grid {
  display: flex;
  justify-content: center;
  gap: 30px;
}

.achievement-banner {
  display: block;
  transition: transform 0.3s;
}

.achievement-banner:hover {
  transform: translateY(-3px);
}

.achievement-banner img {
  height: 100px;
  width: auto;
}

/* News Section */
.news-section {
  background-color: #fff;
}

.news-header {
  position: relative;
  margin-bottom: 30px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.news-title {
  margin-bottom: 0;
  text-align: center;
}

.news-button-wrapper {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.news-all-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 20px;
  background-color: #003C78;
  border: 2px solid #003C78;
  color: #fff;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s;
}

.news-all-link:hover {
  background-color: transparent;
  color: #003C78;
}

.news-list {
  max-width: 900px;
  margin: 0 auto;
  border-top: 1px solid #e0e0e0;
}

.news-item {
  display: flex;
  padding: 25px 0;
  border-bottom: 1px solid #e0e0e0;
  gap: 25px;
}

.news-date {
  font-size: 0.875rem;
  color: #666;
  flex-shrink: 0;
  min-width: 90px;
}

.news-content {
  flex: 1;
}

.news-item-title {
  font-size: 1rem;
  font-weight: 700;
  color: #1565c0;
  margin-bottom: 10px;
}

.news-excerpt {
  font-size: 0.875rem;
  color: #666;
  line-height: 1.8;
}

/* Responsive */
@media (max-width: 770px) {
  .trial-banner {
    display: none;
  }

  .news-button-wrapper {
    display: none;
  }
}

@media (max-width: 768px) {
  .hero {
    height: auto;
    min-height: 280px;
  }

  .hero-content {
    padding: 40px 20px;
  }

  .hero-title-line {
    font-size: 1.75rem;
  }

  .hero-description {
    display: none;
  }

  .hero-badges {
    display: none;
  }

  .secondary-nav {
    display: none;
  }

  .mobile-info-bar {
    display: block;
  }

  .trial-banner {
    display: none;
  }

  .mobile-trial-banner {
    display: block;
  }

  .section {
    padding: 40px 0;
  }

  .section-title {
    font-size: 1.375rem;
    margin-bottom: 25px;
  }

  .timetable-card-main {
    flex-direction: column;
  }

  .timetable-card-main .timetable-card-image {
    flex: none;
    height: 200px;
  }

  .timetable-card-content {
    padding: 20px;
  }

  .timetable-card-title {
    font-size: 1.25rem;
  }

  .timetable-bottom-row {
    flex-direction: column;
  }

  .about-wrapper {
    flex-direction: column;
  }

  .about-image {
    flex: none;
    height: 250px;
  }

  .about-content {
    flex: none;
    padding: 30px 20px;
  }

  .achievement-grid {
    flex-direction: column;
    align-items: center;
  }

  .achievement-banner img {
    width: 100%;
    max-width: 300px;
    height: auto;
  }

  .news-header {
    position: static;
    text-align: center;
  }

  .news-button-wrapper {
    position: static;
    transform: none;
    margin-top: 20px;
    text-align: center;
  }

  .news-item {
    flex-direction: column;
    gap: 8px;
    padding: 20px 0;
  }
}
</style>
