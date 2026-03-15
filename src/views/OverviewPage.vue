<template>
  <div class="overview-page">
    <!-- Page Header -->
    <PageHeader title="塾概要" />

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
            板橋セミナーは東京都板橋区にある学習塾で、小学生・中学生・高校生を対象とした学習指導やテスト対策を通して、子供たちの毎日の成長をアシストするための授業を行っております。時として厳しく指導することもありますが、仲間とともに勉強する中で「頑張ること」と「ルールを守ること」といった人として大切なことを学びながら成長できるよう指導する様心がけています。
          </p>
          <p>
            生徒の学習状況に合わせたクラス分けや個別指導で、受験指導から定期テスト対策まで幅広くサポートします。
          </p>
          <p>
            2週間の無料体験入塾もご用意していますので、まずはお気軽にご連絡いただき、実際の授業を体験してみてください。
          </p>
        </div>

        <div class="about-image">
          <img src="https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?w=800&q=80" alt="桜" />
        </div>
      </div>
    </section>

    <!-- Company Info Section -->
    <section class="info-section section bg-gray">
      <div class="container">
        <h2 class="info-title">塾概要</h2>

        <div class="info-table-wrapper">
          <table class="info-table">
            <tbody>
              <tr>
                <th>会社名</th>
                <td>株式会社板橋セミナー</td>
              </tr>
              <tr>
                <th>代表者</th>
                <td>坂下 浩行</td>
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
            height="400"
            style="border:0;"
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
import PageHeader from '../components/PageHeader.vue'
import PageBreadcrumb from '../components/PageBreadcrumb.vue'
</script>

<style scoped>
/* Secondary Nav */
.secondary-nav {
  background-color: var(--color-primary);
}

.secondary-nav-list {
  max-width: 1100px;
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
.about-content {
  max-width: 800px;
  margin: 0 auto 40px;
  font-size: 0.9375rem;
  line-height: 2;
  color: #333;
}

.about-content p {
  margin-bottom: 15px;
}

.about-image {
  max-width: 700px;
  margin: 0 auto;
}

.about-image img {
  width: 100%;
  border-radius: 4px;
}

/* Info Section */
.bg-gray {
  background-color: #f5f5f5;
}

.info-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-primary);
  border-left: 4px solid var(--color-primary);
  padding-left: 15px;
  margin-bottom: 30px;
}

.info-table-wrapper {
  max-width: 800px;
}

.info-table {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
}

.info-table th,
.info-table td {
  padding: 20px;
  border-bottom: 1px solid #eee;
  text-align: left;
  vertical-align: top;
}

.info-table th {
  background-color: #f9f9f9;
  color: var(--color-primary);
  font-weight: 500;
  width: 150px;
}

.info-table td {
  font-size: 0.9375rem;
  color: #333;
}

/* Map Section */
.map-wrapper {
  max-width: 900px;
  margin: 0 auto;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.map-wrapper iframe {
  display: block;
}

/* Responsive */
@media (max-width: 768px) {
  .secondary-nav {
    display: none;
  }

  .info-table th,
  .info-table td {
    display: block;
    width: 100%;
    padding: 15px;
  }

  .info-table th {
    border-bottom: none;
    padding-bottom: 5px;
  }

  .info-table td {
    padding-top: 5px;
  }

  .map-wrapper iframe {
    height: 300px;
  }
}
</style>
