<template>
  <div class="top-page">
    <!-- Hero Section -->
    <section class="hero">
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

    <!-- Mobile Badges -->
    <div class="mobile-badges">
      <p class="mobile-badges-text">
        板橋区にある
        <span class="mobile-badge">小</span>
        <span class="mobile-badge">中</span>
        <span class="mobile-badge">高</span>
        対象の学習塾
      </p>
    </div>

    <!-- Trial Banner -->
    <section class="trial-banner">
      <div class="container">
        <div class="trial-banner-content">
          <div class="trial-banner-badge">
            <span class="trial-badge-text">無料体験入塾<br />受付中！</span>
          </div>
          <div class="trial-banner-main">
            <span class="trial-weeks">たっぷり<br />2週間</span>
            <span class="trial-title">無料体験</span>
            <span class="trial-subtitle">入塾実施中!</span>
          </div>
          <p class="trial-banner-description">
            お申し込みやご相談などは、電話・メールにてお気軽にお問い合わせください
          </p>
        </div>
      </div>
    </section>

    <!-- Timetable Section -->
    <section class="timetable-section section">
      <div class="container">
        <h2 class="section-title">授業料・時間割</h2>

        <div class="timetable-grid">
          <!-- Junior High School -->
          <div class="timetable-card timetable-card-main">
            <div class="timetable-card-image">
              <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=80" alt="中学生" />
            </div>
            <div class="timetable-card-content">
              <h3 class="timetable-card-title">中学生(中1〜中3)</h3>
              <p class="timetable-card-description">
                受験指導から定期テストの対策まで、幅広い指導体制で中学生を強力サポート
              </p>
              <ul class="timetable-links">
                <li>
                  <router-link to="/timetable" class="timetable-link">
                    中1の授業料/時間割を見る →
                  </router-link>
                </li>
                <li>
                  <router-link to="/timetable" class="timetable-link">
                    中1の授業料/時間割を見る →
                  </router-link>
                </li>
                <li>
                  <router-link to="/timetable" class="timetable-link">
                    中1の授業料/時間割を見る →
                  </router-link>
                </li>
              </ul>
            </div>
          </div>

          <!-- Elementary School -->
          <div class="timetable-card">
            <div class="timetable-card-image">
              <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80" alt="小学生" />
            </div>
            <h3 class="timetable-card-title text-center">小学生</h3>
            <p class="timetable-card-description text-center">
              学習の習慣化や思考トレーニングを実施。お子様の「できる！」を増やします
            </p>
            <div class="timetable-card-button">
              <router-link to="/timetable" class="btn btn-outline">
                小学生の授業料/時間割を見る →
              </router-link>
            </div>
          </div>

          <!-- High School -->
          <div class="timetable-card">
            <div class="timetable-card-image">
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80" alt="高校生" />
            </div>
            <h3 class="timetable-card-title text-center">高校生</h3>
            <p class="timetable-card-description text-center">
              大学受験・定期テスト対策、目標に向かってレベルアップをサポートします
            </p>
            <div class="timetable-card-button">
              <router-link to="/timetable" class="btn btn-outline">
                高校生の授業料/時間割を見る →
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about-section">
      <div class="about-section-inner">
        <div class="container">
          <h2 class="section-title">板橋セミナーについて</h2>
          <div class="about-content">
            <p>
              板橋セミナーでは、小学生・中学生・高校生を対象とした学習指導やテスト対策を通して、子供たちの毎日の成長をアシストするための授業を行っております。アットホームな雰囲気で進行される授業の中で、子供たちは日々「頑張ること」と「ルールを守ること」を学んでいます。時として厳しく指導することもありますが、仲間とともに勉強する中で、人として大切なことを学びながら成長できる自立した大人になれるよう指導する様心がけています。
            </p>
            <p>
              板橋セミナーでは、生徒の学習状況に合わせたクラス分けが行われていて、レベルの高い学校を目指したい生徒の為のクラスや学校での勉強をサポートするためのクラスの他、受験対策の為の個別クラスなどを展開しております。また、スタッフ全く担任制の家庭教師であり、読み方・記入方や理解方法などもしっかりと共有し合える体制を行っております。体験入塾も実施しておりますので、是非一度板橋セミナーの授業風景を覗いてみてください。
            </p>
            <div class="about-button">
              <router-link to="/policy" class="btn btn-outline">
                板橋セミナーの授業方針 →
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Achievement Banners -->
    <section class="achievement-banners section">
      <div class="container">
        <div class="achievement-grid">
          <router-link to="/achievement" class="achievement-banner">
            <div class="achievement-banner-icon">
              <span class="achievement-icon-text">📚</span>
            </div>
            <span class="achievement-banner-title">合格実績</span>
            <span class="achievement-banner-check">✓</span>
          </router-link>
          <router-link to="/achievement" class="achievement-banner">
            <div class="achievement-banner-icon">
              <span class="achievement-icon-text">📝</span>
            </div>
            <span class="achievement-banner-title">合格体験談</span>
            <span class="achievement-banner-check">✓</span>
          </router-link>
        </div>
      </div>
    </section>

    <!-- News Section -->
    <section class="news-section section">
      <div class="container">
        <div class="news-header">
          <h2 class="section-title">新着情報</h2>
          <router-link to="/" class="news-all-link btn btn-primary">
            新着一覧 →
          </router-link>
        </div>

        <div class="news-list">
          <article class="news-item">
            <time class="news-date">2022.06.20</time>
            <div class="news-content">
              <h3 class="news-title">中学受験の準備は難しい</h3>
              <p class="news-excerpt">
                梅雨入りとともに、じとじとした雨が降り続く6月となりました。夏の気配を感じつつも、雨に悩まされる日々が続いていますが、皆様楽しくお過ごしください。雨の日が続くと、つい気分...
              </p>
            </div>
          </article>
          <article class="news-item">
            <time class="news-date">2022.06.20</time>
            <div class="news-content">
              <h3 class="news-title">中学受験の準備は難しい</h3>
              <p class="news-excerpt">
                梅雨入りとともに、じとじとした雨が降り続く6月となりました。夏の気配を感じつつも、雨に悩まされる日々が続いていますが、皆様楽しくお過ごしください。雨の日が続くと、つい気分...
              </p>
            </div>
          </article>
          <article class="news-item">
            <time class="news-date">2022.06.20</time>
            <div class="news-content">
              <h3 class="news-title">中学受験の準備は難しい</h3>
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
</script>

<style scoped>
/* Hero Section */
.hero {
  position: relative;
  min-height: 400px;
  background: linear-gradient(135deg, rgba(26, 58, 110, 0.9), rgba(26, 58, 110, 0.7)),
    url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  padding: 60px 20px;
}

.hero-content {
  max-width: 600px;
}

.hero-title {
  margin-bottom: 20px;
}

.hero-title-line {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  color: #4da3ff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-description {
  color: #fff;
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 25px;
}

.hero-badges {
  display: flex;
  gap: 10px;
}

.hero-badge {
  display: inline-block;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 700;
  border: 2px solid;
}

.badge-elementary {
  background-color: #2e8b57;
  border-color: #2e8b57;
  color: #fff;
}

.badge-junior {
  background-color: #1a5a9e;
  border-color: #1a5a9e;
  color: #fff;
}

.badge-high {
  background-color: #f4d03f;
  border-color: #f4d03f;
  color: #333;
}

/* Secondary Nav */
.secondary-nav {
  background-color: #40a9ff;
}

.secondary-nav-list {
  max-width: 1100px;
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
  padding: 12px 25px;
  color: #fff;
  text-decoration: none;
  font-size: 0.875rem;
  transition: background-color 0.3s;
}

.secondary-nav-list a:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* Mobile Badges */
.mobile-badges {
  display: none;
  background-color: #f5f5f5;
  padding: 15px 20px;
  text-align: center;
}

.mobile-badges-text {
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.mobile-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: var(--color-primary);
  color: #fff;
  font-size: 0.75rem;
  font-weight: 700;
}

/* Trial Banner */
.trial-banner {
  background: linear-gradient(to right, #1a3a6e, #2a5a9e);
  padding: 20px 0;
}

.trial-banner-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  color: #fff;
}

.trial-banner-badge {
  background-color: #e74c3c;
  padding: 8px 12px;
  border-radius: 4px;
  transform: rotate(-5deg);
}

.trial-badge-text {
  font-size: 0.75rem;
  font-weight: 700;
  text-align: center;
  line-height: 1.4;
}

.trial-banner-main {
  display: flex;
  align-items: center;
  gap: 10px;
}

.trial-weeks {
  font-size: 0.875rem;
  line-height: 1.3;
  color: #4da3ff;
}

.trial-title {
  font-size: 2rem;
  font-weight: 700;
  color: #f4d03f;
}

.trial-subtitle {
  font-size: 1.5rem;
  font-weight: 700;
}

.trial-banner-description {
  font-size: 0.75rem;
  max-width: 300px;
}

/* Timetable Section */
.timetable-section {
  background-color: #fff;
}

.timetable-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 30px;
}

.timetable-card {
  background: #fff;
  overflow: hidden;
}

.timetable-card-main {
  grid-row: span 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.timetable-card-image {
  position: relative;
  overflow: hidden;
}

.timetable-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.timetable-card-content {
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.timetable-card-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 15px;
}

.timetable-card-description {
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 20px;
  line-height: 1.8;
}

.timetable-links {
  list-style: none;
}

.timetable-link {
  display: block;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  color: var(--color-primary);
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.3s;
}

.timetable-link:hover {
  color: var(--color-accent);
}

.timetable-card:not(.timetable-card-main) .timetable-card-image {
  height: 180px;
}

.timetable-card:not(.timetable-card-main) .timetable-card-title {
  padding: 20px 20px 10px;
  margin-bottom: 0;
}

.timetable-card:not(.timetable-card-main) .timetable-card-description {
  padding: 0 20px;
}

.timetable-card-button {
  padding: 15px 20px 20px;
  text-align: center;
}

.text-center {
  text-align: center;
}

/* About Section */
.about-section {
  background: linear-gradient(rgba(26, 58, 110, 0.85), rgba(26, 58, 110, 0.85)),
    url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80');
  background-size: cover;
  background-position: center;
  padding: 80px 0;
}

.about-section .section-title {
  color: #fff;
}

.about-content {
  max-width: 800px;
  margin: 0 auto;
  color: #fff;
  font-size: 0.9375rem;
  line-height: 2;
}

.about-content p {
  margin-bottom: 20px;
}

.about-button {
  text-align: center;
  margin-top: 30px;
}

.about-button .btn-outline {
  border-color: #fff;
  color: #fff;
}

.about-button .btn-outline:hover {
  background-color: #fff;
  color: var(--color-primary);
}

/* Achievement Banners */
.achievement-grid {
  display: flex;
  justify-content: center;
  gap: 30px;
}

.achievement-banner {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px 30px;
  background: #fff;
  border: 2px solid var(--color-primary);
  text-decoration: none;
  transition: all 0.3s;
}

.achievement-banner:hover {
  background-color: var(--color-primary);
}

.achievement-banner:hover .achievement-banner-title {
  color: #fff;
}

.achievement-banner-icon {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.achievement-icon-text {
  font-size: 2rem;
}

.achievement-banner-title {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--color-primary);
  transition: color 0.3s;
}

.achievement-banner-check {
  width: 24px;
  height: 24px;
  background-color: var(--color-primary);
  color: #fff;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
}

/* News Section */
.news-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.news-header .section-title {
  margin-bottom: 0;
}

.news-all-link {
  padding: 8px 20px;
  font-size: 0.875rem;
}

.news-list {
  border-top: 1px solid #ddd;
}

.news-item {
  display: flex;
  padding: 20px 0;
  border-bottom: 1px solid #ddd;
  gap: 20px;
}

.news-date {
  font-size: 0.875rem;
  color: #666;
  flex-shrink: 0;
}

.news-content {
  flex: 1;
}

.news-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 10px;
}

.news-excerpt {
  font-size: 0.875rem;
  color: #666;
  line-height: 1.8;
}

/* Responsive */
@media (max-width: 1024px) {
  .timetable-card-main {
    grid-column: span 2;
  }
}

@media (max-width: 768px) {
  .hero {
    min-height: 300px;
    padding: 40px 20px;
  }

  .hero-title-line {
    font-size: 1.75rem;
  }

  .hero-description {
    font-size: 0.875rem;
  }

  .secondary-nav {
    display: none;
  }

  .mobile-badges {
    display: block;
  }

  .trial-banner-content {
    flex-direction: column;
    text-align: center;
    gap: 15px;
  }

  .trial-banner-badge {
    transform: none;
  }

  .trial-banner-main {
    flex-wrap: wrap;
    justify-content: center;
  }

  .trial-title {
    font-size: 1.5rem;
  }

  .trial-subtitle {
    font-size: 1.125rem;
  }

  .timetable-grid {
    grid-template-columns: 1fr;
  }

  .timetable-card-main {
    grid-column: 1;
    grid-row: auto;
    grid-template-columns: 1fr;
  }

  .timetable-card-content {
    padding: 20px;
  }

  .achievement-grid {
    flex-direction: column;
  }

  .news-header {
    flex-direction: column;
    gap: 20px;
  }

  .news-header .section-title {
    margin-bottom: 0;
  }

  .news-item {
    flex-direction: column;
    gap: 10px;
  }
}
</style>
