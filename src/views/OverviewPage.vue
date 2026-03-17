<template>
  <div class="overview-page">
    <!-- Page Header -->
    <PageHeader title="塾概要" :backgroundImage="topImg" />

    <!-- Secondary Nav -->
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

    <!-- Breadcrumb -->
    <PageBreadcrumb currentPage="塾概要" />

    <!-- About Section -->
    <section class="about-section section">
      <div class="container">
        <h2 class="section-title">板橋セミナーについて</h2>
        <div class="about-content">
          <p>
            板橋セミナーは東京都板橋区にある学習塾で、小学生・中学生・高校生を対象とした学習指導やテスト対策を通して、子供たちの毎日の成長をアシストするための授業を行っております。時として厳しく指導することもありますが、仲間とともに勉強する中で「頑張ること」と「ルールを守ること」といった人として大切なことを学びながら成長できるよう指導する様心がけています。<br />
            生徒の学習状況に合わせたクラス分けや個別指導で、受験指導から定期テスト対策まで幅広くサポートします。
          </p>
          <p>
            2週間の無料体験入塾もご用意していますので、まずはお気軽にご連絡いただき、実際の授業を体験してみてください。
          </p>
        </div>

        <div class="about-image">
          <img :src="schoolImg" alt="板橋セミナー外観" />
        </div>
      </div>
    </section>

    <!-- Company Info Section -->
    <section class="info-section section">
      <div class="container">
        <h2 class="info-title">塾概要</h2>
        <div class="info-title-line"></div>

        <table class="info-table">
          <tbody>
            <tr>
              <th>会社名</th>
              <td>株式会社板橋セミナー</td>
            </tr>
            <tr>
              <th>代表者</th>
              <td>板下 浩行</td>
            </tr>
            <tr>
              <th>住所</th>
              <td>〒000-0000 東京都板橋区〇〇町11-2</td>
            </tr>
            <tr>
              <th>電話番号</th>
              <td>000-000-0000（111-111-1111）</td>
            </tr>
            <tr>
              <th>FAX</th>
              <td>000-000-0000</td>
            </tr>
            <tr>
              <th>営業時間</th>
              <td>16:30〜23:00</td>
            </tr>
            <tr>
              <th>定休日</th>
              <td>日・祝</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Map Section -->
    <section class="map-section section">
      <div class="container">
        <h2 class="info-title">アクセスマップ</h2>

        <div class="map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.5!2d139.7!3d35.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQ1JzAwLjAiTiAxMznCsDQyJzAwLjAiRQ!5e0!3m2!1sja!2sjp!4v1234567890"
            width="100%"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import PageHeader from "../components/PageHeader.vue";
import PageBreadcrumb from "../components/PageBreadcrumb.vue";
import topImg from "@/assets/images/top-img.png";
import schoolImg from "@/assets/images/合格体験談画像2.png";
</script>

<style scoped>
/* Section & Container - グリッド統一 */
.section {
  padding: 40px 0;
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
}

.section-title {
  font-size: 1.75rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
  color: #333;
}

/* Secondary Nav */
.secondary-nav {
  background-color: var(--color-primary);
}

.secondary-nav-list {
  max-width: 980px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  list-style: none;
}

.secondary-nav-list li {
  border-right: 1px solid rgba(255, 255, 255, 0.2);
}

.secondary-nav-list li:first-child {
  border-left: 1px solid rgba(255, 255, 255, 0.2);
}

.secondary-nav-list a {
  display: block;
  padding: 15px 30px;
  color: #fff;
  text-decoration: none;
  font-size: 0.9375rem;
  transition: background-color 0.3s;
}

.secondary-nav-list a:hover,
.secondary-nav-list a.router-link-active {
  background-color: rgba(255, 255, 255, 0.1);
}

/* About Section */
.about-section {
  background-color: #fff;
}

.about-content {
  font-size: 0.9375rem;
  line-height: 2;
  color: #333;
  margin-bottom: 40px;
}

.about-content p {
  margin-bottom: 15px;
}

.about-content p:last-child {
  margin-bottom: 0;
}

.about-image {
  /* グリッド統一: コンテナ幅いっぱい */
}

.about-image img {
  width: 100%;
  height: 230px;
  object-fit: cover;
  display: block;
}

/* Info Section */
.info-section {
  background-color: #fff;
}

.info-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-primary);
  border-left: 4px solid var(--color-primary);
  padding-left: 15px;
  margin-bottom: 15px;
}

.info-title-line {
  height: 1px;
  background-color: var(--color-primary);
  margin-bottom: 30px;
}

.info-table {
  width: 100%;
  border-collapse: collapse;
}

.info-table tr {
  border-bottom: 1px solid #ddd;
}

.info-table th,
.info-table td {
  padding: 15px 20px;
  text-align: left;
  vertical-align: middle;
  font-size: 0.9375rem;
  background-color: transparent;
  border: none;
}

.info-table th {
  color: var(--color-primary);
  font-weight: 700;
  width: 120px;
}

.info-table td {
  color: #333;
}

/* Map Section */
.map-section {
  background-color: #fff;
  padding-top: 0;
}

.map-wrapper {
  /* グリッド統一: コンテナ幅いっぱい */
}

.map-wrapper iframe {
  display: block;
  width: 100%;
}

/* Responsive */
@media (max-width: 768px) {
  .section {
    padding: 20px 0;
  }

  .secondary-nav {
    display: none;
  }

  .container {
    padding: 0 15px;
  }

  .info-table th,
  .info-table td {
    display: block;
    width: 100%;
    padding: 10px 15px;
  }

  .info-table th {
    border-bottom: none;
    padding-bottom: 5px;
  }

  .info-table td {
    padding-top: 0;
  }

  .map-wrapper iframe {
    height: 300px;
  }
}
</style>
