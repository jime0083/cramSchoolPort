<template>
  <div class="policy-page">
    <!-- Page Header -->
    <PageHeader title="授業の方針" />

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
    <PageBreadcrumb currentPage="授業の方針" />

    <!-- About Section -->
    <section class="about-section section">
      <div class="container">
        <h2 class="section-title">板橋セミナーについて</h2>
        <div class="about-content">
          <p>
            板橋セミナーは、生徒さまひとりひとりの学力はもちろん、「人間力」を鍛える学習塾です。時代はグローバル社会です。さまざまな価値観と触れ合い、そこから考え、自ら創造し、アクションを起こしていく「発想の柔軟性」と「しなやかさ」が必要です。単なる学歴では、通用しない時代かもしれません。これからの時代の主役である生徒さま達には、今後ますますのご活躍と、時代の変化を楽しむタフな人間力を養っていただきたいと切に願っております。
          </p>
          <p>
            講師一同、あなたのステキな未来のために一生懸命サポートさせていただきますので、今後ともよろしくお願いいたします。
          </p>
        </div>
      </div>
    </section>

    <!-- Policy Section -->
    <section class="policy-section section">
      <div class="container">
        <h2 class="section-title">板橋セミナーの授業方針</h2>

        <div class="policy-image">
          <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80" alt="授業風景" />
        </div>

        <div class="policy-points">
          <div class="policy-point">
            <h3 class="policy-point-title">できるまで、<span class="highlight">やり切るまでとことん</span></h3>
            <p class="policy-point-text">
              授業内で到達点を設定し、たどり着かなかった子は、居残り・呼び出しなどの時間外指導で、やり切るまでじっくり付き合います。
            </p>
          </div>

          <div class="policy-point">
            <h3 class="policy-point-title">解答を生徒に持たせません</h3>
            <p class="policy-point-text">
              講師が生徒の答案に目を通し、でき具合をチェックします。理解不足・練習不足だけでなく、できすぎだって一目瞭然。家で、必死に宿題の解答を写している中学生はいませんか？
            </p>
          </div>

          <div class="policy-point">
            <h3 class="policy-point-title">塾として、子どもの基本姿勢も指導します</h3>
            <p class="policy-point-text">
              忘れ物をしたら、取りに帰らせます。自分勝手なことをしたら、さちんと謝らせます。小・中学生として、自分の言動に責任を持てるよう、毎日こどもと接しています。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Junior High Section -->
    <section class="junior-section section bg-gray">
      <div class="container">
        <h2 class="section-title">中学生の授業について</h2>

        <div class="junior-content">
          <div class="junior-image">
            <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80" alt="中学生授業" />
          </div>
          <div class="junior-text">
            <p>
              中学生科は受験指導から定期テスト対策まで、幅広い指導体制で中学生を強力にサポートいたします。
            </p>
            <p>
              学力別のクラス分けを実施する事で、学力に応じた授業を行います。中1のうちから模擬試験や試験対策で定期テストの勉強法を学習し、高校入試での内申点を大切にします。授業形式は講義と個別指導を併用し、生徒に合わせた学習形態を確立していきます。
            </p>
            <p>
              また、個人面談や電話懇談等、保護者の方との密な連絡を心がけています。
            </p>

            <div class="junior-buttons">
              <button class="btn btn-outline">受験指導</button>
              <button class="btn btn-outline">テスト対策</button>
              <button class="btn btn-outline">講義＋個別指導</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Elementary Section -->
    <section class="elementary-section section">
      <div class="container">
        <h2 class="section-title">小学生の授業について</h2>

        <div class="elementary-grid">
          <div class="elementary-card">
            <div class="elementary-card-image">
              <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80" alt="曜日選択" />
              <span class="elementary-card-number">01</span>
            </div>
            <h3 class="elementary-card-title">曜日選択ができる時間割</h3>
            <p class="elementary-card-text">
              算数は週1回2時間、国語は週1回1時間からスタートできます。もし、お子様が一生懸命になられている習い事があれば、そのまま続けさせてください。子供の「ひたむきさ」がすべての能力を育てます。
            </p>
          </div>

          <div class="elementary-card">
            <div class="elementary-card-image">
              <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&q=80" alt="達成度" />
              <span class="elementary-card-number">02</span>
            </div>
            <h3 class="elementary-card-title">達成度を追及</h3>
            <p class="elementary-card-text">
              1週間授業内容に対し、達成度が不十分である場合は、水曜日・土曜日の対策講座で補講を組みます。授業のやりっ放しにはせず、生徒の達成度を追及します。
            </p>
          </div>

          <div class="elementary-card">
            <div class="elementary-card-image">
              <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=80" alt="クラス分け" />
              <span class="elementary-card-number">03</span>
            </div>
            <h3 class="elementary-card-title">クラス分けを実施</h3>
            <p class="elementary-card-text">
              本科算数を軸に、基礎から学習できる講座・発展内容を学習する講座を併設。お子様の学習状況にあわせて受講内容を設定できます。
            </p>
          </div>
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
  max-width: 900px;
  margin: 0 auto;
  font-size: 0.9375rem;
  line-height: 2;
  color: #333;
}

.about-content p {
  margin-bottom: 20px;
}

/* Policy Section */
.policy-image {
  max-width: 700px;
  margin: 0 auto 40px;
}

.policy-image img {
  width: 100%;
  border-radius: 4px;
}

.policy-points {
  max-width: 800px;
  margin: 0 auto;
}

.policy-point {
  margin-bottom: 30px;
  padding-left: 20px;
  border-left: 4px solid var(--color-primary);
}

.policy-point-title {
  font-size: 1.125rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 10px;
}

.policy-point-title .highlight {
  color: var(--color-primary);
}

.policy-point-text {
  font-size: 0.9375rem;
  color: #666;
  line-height: 1.8;
}

/* Junior Section */
.bg-gray {
  background-color: #f5f5f5;
}

.junior-content {
  display: flex;
  gap: 40px;
  align-items: flex-start;
}

.junior-image {
  flex: 0 0 300px;
}

.junior-image img {
  width: 100%;
  border-radius: 4px;
}

.junior-text {
  flex: 1;
}

.junior-text p {
  font-size: 0.9375rem;
  line-height: 1.8;
  margin-bottom: 15px;
  color: #333;
}

.junior-buttons {
  display: flex;
  gap: 15px;
  margin-top: 25px;
  flex-wrap: wrap;
}

/* Elementary Section */
.elementary-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.elementary-card {
  background: #fff;
}

.elementary-card-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.elementary-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.elementary-card-number {
  position: absolute;
  bottom: 0;
  left: 0;
  background: var(--color-primary);
  color: #fff;
  padding: 10px 20px;
  font-size: 1.5rem;
  font-weight: 700;
}

.elementary-card-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-primary);
  padding: 20px 15px 10px;
}

.elementary-card-text {
  font-size: 0.875rem;
  color: #666;
  line-height: 1.8;
  padding: 0 15px 20px;
}

/* Responsive */
@media (max-width: 768px) {
  .secondary-nav {
    display: none;
  }

  .junior-content {
    flex-direction: column;
  }

  .junior-image {
    flex: none;
    width: 100%;
  }

  .elementary-grid {
    grid-template-columns: 1fr;
  }

  .junior-buttons {
    flex-direction: column;
  }

  .junior-buttons .btn {
    width: 100%;
  }
}
</style>
