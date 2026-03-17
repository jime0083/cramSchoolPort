<template>
  <div class="achievement-page">
    <!-- Page Header -->
    <PageHeader title="合格実績" :backgroundImage="topImg" />

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
    <PageBreadcrumb currentPage="合格実績" />

    <!-- Achievement Records -->
    <section class="records-section section">
      <div class="container">
        <h2 class="section-title">合格実績</h2>

        <div class="records-wrapper">
          <table class="records-table">
            <tbody>
              <tr v-for="record in records" :key="record.year">
                <th>{{ record.year }}年度</th>
                <td>{{ record.results }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials-section section bg-gray">
      <div class="container">
        <h2 class="section-title">合格体験談</h2>

        <div class="testimonials-images">
          <div class="testimonial-image">
            <img :src="testimonialImg1" alt="合格体験談" />
          </div>
          <div class="testimonial-image">
            <img :src="testimonialImg2" alt="合格体験談" />
          </div>
          <div class="testimonial-image">
            <img :src="testimonialImg3" alt="合格体験談" />
          </div>
        </div>

        <div class="testimonials-list">
          <!-- Testimonial 1 -->
          <article class="testimonial-item">
            <div class="testimonial-header">
              <h3 class="testimonial-name">S・Tさん　千里高校（国際合格）</h3>
              <time class="testimonial-date">2017年11月06日</time>
            </div>
            <div class="testimonial-content">
              <p>
                中学1年生の夏、私は板橋セミナーに入塾しました。私が想像していた塾は、大きなビルの中のきれいな教室で、マイクを持った先生が30人の生徒に授業をする、というものでした。ところが板橋セミナーは、私の想像とは全く違っていたのです。
              </p>
              <p>
                それはまるで「寺子屋」でした。見かけ過ぎ、授業はとてもアットホームで、分からないところがあれば、すぐに質問できました。授業だけでなく、苦手を克服する特別講座や対策講座を受けた私は、先生方を質問攻めにしました。そのおかげで、私の成績はぐんぐん上がっていったのです。
              </p>
              <p>
                しかし、私の受験勉強は決して楽ではありませんでした。負けず嫌いの私は、どうしても点数にこだわり、勉強のやり方を暗記に頼ってしまいました。当然、長いスランプに陥り、悔し涙を流していました。「頭を使え」「考えろ」と先生に怒られ、何度も泣きました。今となっては、私の学力はそうやって上がっていったのではないかと思います。最後に、板橋セミナーは本当にいい「寺子屋」です。皆さん、ぜひ私と同じ体験をしてほしいと思います。
              </p>
            </div>
          </article>

          <!-- Testimonial 2 -->
          <article class="testimonial-item">
            <div class="testimonial-header">
              <h3 class="testimonial-name">M・Aさん　茨木高校合格</h3>
              <time class="testimonial-date">2017年11月06日</time>
            </div>
            <div class="testimonial-content">
              <p>
                私が板橋セミナーに入塾したのは、小学校5年生の春でした。私は算数がとても苦手でした。先生方は解からないところを根からまで教えてくれました。解る様になると勉強は楽しく、徐々に一人で勉強する習慣が身につきました。振り返ると、小学校の時に培ったこの習慣が中学での成績アップにつながったと思います。
              </p>
              <p>
                また、板橋セミナーでは勉強ばかりでなく、スポーツ大会や合宿も有りました。それらの行事を通して、先生方や友人たちとの絆が深まったと思います。私が困ったり悩んだりした、相談に乗ってくれたり、5年間も長い間板橋セミナーに通い、ハードな受験勉強を続ける事ができたのも、大切な仲間や先生方がいつもそくにいてくれたからこそです。
              </p>
              <p>
                私が茨木高校を目指したのも本当にさまざまな理由があってでした。運動音痴な私が唯一得意としたスポーツが水泳だったからです。そのころから50mプールで思い切り泳いでみたいという夢がありました。そして茨木高校には憧れの50mプールが在ると先生が教えてくれたのです。
              </p>
              <p>
                きっかけは何であれ、自分の夢を実現するために全力で頑張る事ができた私は大きな力を得ました。最後に、私は板橋セミナーの先生方と友人に、一緒に頑張ってきた友人たちに感謝の気持ちで一杯です。ここで学んだ「努力すること」を糧にこれからも頑張りたいです。
              </p>
            </div>
          </article>

          <!-- Testimonial 3 -->
          <article class="testimonial-item">
            <div class="testimonial-header">
              <h3 class="testimonial-name">R・Tさん　春日丘高校合格</h3>
              <time class="testimonial-date">2017年11月06日</time>
            </div>
            <div class="testimonial-content">
              <p>
                3月23日の午後10時、合格発表の紙が張り出されました。手に受験票を握りしめボードに目をやると、私の番号「520」がありました。感動と興奮の中で私は「本当に春日丘を目指して良かった...」
              </p>
              <p>
                と思いました。私は初めために春日丘高校に行くのか、一番はクラブ活動のためです。小学校3年生の頃、合唱団に所属していた私は、音楽に興味を持ち始めました。昔から、市民音楽会が行われる季節は幸せで、輝いている歌声に見に行きました。するとそこにはとても優美に歌い讃える春日丘高校音楽部の姿がありました。私は授げる一目見で、「私もいつか一緒に歌いたい」と思う様になったのです。
              </p>
              <p>
                中学1年の終わりに板橋セミナーに出会い、各教科の弱点を繰り返し指導してもらいました。正直なところ、受験勉強は辛かったです。時には勉強が嫌になって泣いた事もありました。しかし先生に悩みを聴いてもらったり、塾の友達と話し合ったりし、家庭的な雰囲気の中でやり遂ける事が出来ました。今思うとある時の努力・頑張りがあったからこそ、今の私があるんだと思っています。
              </p>
              <p>
                1つの夢を叶えた今、私は春日丘高校で楽しい学生ライフを送り、次の夢を追いかけようと思っています
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import PageHeader from "../components/PageHeader.vue";
import PageBreadcrumb from "../components/PageBreadcrumb.vue";
import topImg from "@/assets/images/top-img.png";
import testimonialImg1 from "@/assets/images/合格体験談画像1.png";
import testimonialImg2 from "@/assets/images/合格体験談画像2.png";
import testimonialImg3 from "@/assets/images/合格体験談画像3.png";

const records = [
  {
    year: "27",
    results:
      "茨木(32名)・三島(22名)・槻の木(21名)・春日丘(18名)・高槻(15名)・千里(12名)・池田(10名)他",
  },
  {
    year: "26",
    results:
      "茨木(32名)・三島(22名)・槻の木(21名)・春日丘(18名)・高槻(15名)・千里(12名)・池田(10名)他",
  },
  {
    year: "25",
    results:
      "茨木(32名)・三島(22名)・槻の木(21名)・春日丘(18名)・高槻(15名)・千里(12名)・池田(10名)他",
  },
  {
    year: "24",
    results:
      "茨木(32名)・三島(22名)・槻の木(21名)・春日丘(18名)・高槻(15名)・千里(12名)・池田(10名)他",
  },
  {
    year: "23",
    results:
      "茨木(32名)・三島(22名)・槻の木(21名)・春日丘(18名)・高槻(15名)・千里(12名)・池田(10名)他",
  },
  {
    year: "22",
    results:
      "茨木(32名)・三島(22名)・槻の木(21名)・春日丘(18名)・高槻(15名)・千里(12名)・池田(10名)他",
  },
  {
    year: "21",
    results:
      "茨木(32名)・三島(22名)・槻の木(21名)・春日丘(18名)・高槻(15名)・千里(12名)・池田(10名)他",
  },
  {
    year: "20",
    results:
      "茨木(32名)・三島(22名)・槻の木(21名)・春日丘(18名)・高槻(15名)・千里(12名)・池田(10名)他",
  },
  {
    year: "19",
    results:
      "茨木(32名)・三島(22名)・槻の木(21名)・春日丘(18名)・高槻(15名)・千里(12名)・池田(10名)他",
  },
  {
    year: "18",
    results:
      "茨木(32名)・三島(22名)・槻の木(21名)・春日丘(18名)・高槻(15名)・千里(12名)・池田(10名)他",
  },
  {
    year: "17",
    results:
      "茨木(32名)・三島(22名)・槻の木(21名)・春日丘(18名)・高槻(15名)・千里(12名)・池田(10名)他",
  },
  {
    year: "16",
    results:
      "茨木(32名)・三島(22名)・槻の木(21名)・春日丘(18名)・高槻(15名)・千里(12名)・池田(10名)他",
  },
];
</script>

<style scoped>
/* Section & Container - グリッド統一 */
.section {
  padding: 60px 0;
}

.container {
  max-width: 980px;
  margin: 0 auto;
  padding: 0;
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

/* Records Section */
.records-section {
  background-color: #fff;
}

.records-wrapper {
  width: 100%;
  height: 420px;
  border: 1px solid #ccc;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 30px 50px;
  box-sizing: border-box;
}

.records-table {
  width: 100%;
  border-collapse: collapse;
}

.records-table th,
.records-table td {
  padding: 4px 0;
  text-align: left;
  border: none;
  font-size: 13px;
  line-height: 1.8;
}

.records-table th {
  font-weight: 700;
  color: #003C78;
  background-color: transparent;
  border: none;
  white-space: nowrap;
  padding-right: 30px;
}

.records-table td {
  color: #333;
  background-color: transparent;
  border: none;
}

/* Testimonials Section */
.bg-gray {
  background-color: #f5f5f5;
}

.testimonials-images {
  display: flex;
  gap: 15px;
  margin-bottom: 50px;
}

.testimonial-image {
  flex: 1;
  overflow: hidden;
}

.testimonial-image img {
  width: 100%;
  height: auto;
  display: block;
}

.testimonials-list {
  /* グリッド統一: コンテナ幅いっぱいに */
}

.testimonial-item {
  background: #fff;
  padding: 30px;
  margin-bottom: 30px;
  border-radius: 4px;
}

.testimonial-item:last-child {
  margin-bottom: 0;
}

.testimonial-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 2px solid var(--color-primary);
}

.testimonial-name {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--color-primary);
}

.testimonial-date {
  font-size: 0.875rem;
  color: #666;
}

.testimonial-content {
  font-size: 0.9375rem;
  line-height: 2;
  color: #333;
}

.testimonial-content p {
  margin-bottom: 15px;
}

.testimonial-content p:last-child {
  margin-bottom: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .secondary-nav {
    display: none;
  }

  .records-wrapper {
    height: auto;
    min-height: 300px;
    padding: 15px;
  }

  .records-table th,
  .records-table td {
    padding: 0;
    font-size: 11px;
    line-height: 2;
  }

  .records-table th {
    width: 45px;
    padding-right: 8px;
  }

  .testimonials-images {
    flex-direction: column;
  }

  .testimonial-item {
    padding: 20px;
  }

  .testimonial-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
}
</style>
