<template>
  <div class="timetable-page">
    <!-- Page Header -->
    <PageHeader title="授業料・時間割" :backgroundImage="topImg" />

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
    <PageBreadcrumb currentPage="授業料・時間割" />

    <!-- Tab Navigation -->
    <section class="tab-section">
      <div class="container">
        <div class="tab-nav">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            class="tab-btn"
            @click="scrollToSection(tab.id)"
          >
            {{ tab.name }}
            <span class="tab-arrow">▼</span>
          </button>
        </div>
      </div>
    </section>

    <!-- Elementary Class -->
    <section class="class-section section" id="elementary">
      <div class="container">
        <h2 class="class-title">小学生 クラス</h2>

        <div class="schedule-card">
          <h3 class="schedule-year">2019年度 授業料・時間割</h3>

          <!-- Weekly Schedule -->
          <div class="table-wrapper">
            <table class="schedule-table">
              <thead>
                <tr>
                  <th>月</th>
                  <th>火</th>
                  <th>水</th>
                  <th>木</th>
                  <th>金</th>
                  <th>土</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>○</td>
                  <td>○</td>
                  <td>○</td>
                  <td>○</td>
                  <td>○</td>
                  <td>−</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Details Table -->
          <div class="table-wrapper">
            <table class="details-table">
              <thead>
                <tr>
                  <th>授業時間</th>
                  <th>対象科目</th>
                  <th>入塾登録料</th>
                  <th>授業料</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="授業時間">
                    <p>前半：16:45〜17:35（水17:00〜17:50）</p>
                    <p>後半：17:40〜18:30（水17:55〜18:45）</p>
                  </td>
                  <td data-label="対象科目">国語・算数・英語</td>
                  <td data-label="入塾登録料">10,000円</td>
                  <td data-label="授業料">
                    <p>週1回　7,000円</p>
                    <p>週2回以上　13,000円</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="schedule-notes">
            <p>【備考】</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Junior High 1 Class -->
    <section class="class-section section" id="junior1">
      <div class="container">
        <h2 class="class-title">中学1年生 クラス</h2>

        <div class="schedule-card">
          <h3 class="schedule-year">2019年度 授業料・時間割</h3>

          <div class="class-type">・中1A 特進</div>

          <div class="table-wrapper">
            <table class="schedule-table">
              <thead>
                <tr>
                  <th>月</th>
                  <th>火</th>
                  <th>水</th>
                  <th>木</th>
                  <th>金</th>
                  <th>土</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>−</td>
                  <td>数/英</td>
                  <td>特別</td>
                  <td>−</td>
                  <td>数/英</td>
                  <td>特別</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="table-wrapper">
            <table class="details-table">
              <thead>
                <tr>
                  <th>授業時間</th>
                  <th>対象科目</th>
                  <th>入塾登録料</th>
                  <th>授業料</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="授業時間">
                    <p>前半：19:00〜20:10</p>
                    <p>後半：20:10〜21:10</p>
                    <p>補講：21:10〜21:30</p>
                  </td>
                  <td data-label="対象科目">英語・数学・国語・理科・<br />社会・特別</td>
                  <td data-label="入塾登録料">10,000円</td>
                  <td data-label="授業料">
                    <p>週1回　10,500円</p>
                    <p>週2回　17,500円</p>
                    <p>週3回　23,500円</p>
                    <p>週4回以上　25,500円</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="schedule-notes">
            <p>【備考】</p>
            <ul>
              <li>●通年テキスト代・集中講座費用・塾内テスト代（年3回）・五ツ木模試代（中3）等が必要経費としてかかります。</li>
              <li>●兄弟・姉妹割引（2割引）の制度もございます。</li>
              <li>●特別は苦手な強化を個別に指導いたします。</li>
              <li>●テスト期間中は各学校のテスト内容に沿った対策授業に変更致します。</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Junior High 2 Class -->
    <section class="class-section section" id="junior2">
      <div class="container">
        <h2 class="class-title">中学2年生 クラス</h2>

        <div class="schedule-card">
          <h3 class="schedule-year">2019年度 授業料・時間割</h3>

          <div class="class-type">・中2A 特進</div>

          <div class="table-wrapper">
            <table class="schedule-table">
              <thead>
                <tr>
                  <th>月</th>
                  <th>火</th>
                  <th>水</th>
                  <th>木</th>
                  <th>金</th>
                  <th>土</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>−</td>
                  <td>数/英</td>
                  <td>理・国/社</td>
                  <td>数/英</td>
                  <td>特別</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="table-wrapper">
            <table class="details-table">
              <thead>
                <tr>
                  <th>授業時間</th>
                  <th>対象科目</th>
                  <th>入塾登録料</th>
                  <th>授業料</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="授業時間">
                    <p>前半：19:00〜20:10</p>
                    <p>後半：20:20〜21:30</p>
                    <p>補講：21:30〜</p>
                  </td>
                  <td data-label="対象科目">英語・数学・国語・理科・<br />社会・特別</td>
                  <td data-label="入塾登録料">10,000円</td>
                  <td data-label="授業料">
                    <p>週1回　11,500円</p>
                    <p>週2回　18,500円</p>
                    <p>週3回　26,500円</p>
                    <p>週4回以上　29,500円</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="schedule-notes">
            <p>【備考】</p>
            <ul>
              <li>●通年テキスト代・集中講座費用・塾内テスト代（年3回）・五ツ木模試代（中3）等が必要経費としてかかります。</li>
              <li>●兄弟・姉妹割引（2割引）の制度もございます。</li>
              <li>●特別は苦手な強化を個別に指導いたします。</li>
              <li>●テスト期間中は各学校のテスト内容に沿った対策授業に変更致します。</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Junior High 3 Class -->
    <section class="class-section section" id="junior3">
      <div class="container">
        <h2 class="class-title">中学3年生 クラス</h2>

        <div class="schedule-card">
          <h3 class="schedule-year">2019年度 授業料・時間割</h3>

          <div class="class-type-row">
            <div class="class-type">・中3A 特進</div>
            <div class="class-type">・中3B 本科</div>
          </div>

          <div class="schedule-tables-row">
            <div class="table-wrapper">
              <table class="schedule-table">
                <thead>
                  <tr>
                    <th>月</th>
                    <th>火</th>
                    <th>水</th>
                    <th>木</th>
                    <th>金</th>
                    <th>土</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>英</td>
                    <td>国/社</td>
                    <td>特別</td>
                    <td>理</td>
                    <td>−</td>
                    <td>数</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="table-wrapper">
              <table class="schedule-table">
                <thead>
                  <tr>
                    <th>月</th>
                    <th>火</th>
                    <th>水</th>
                    <th>木</th>
                    <th>金</th>
                    <th>土</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>英</td>
                    <td>国/社</td>
                    <td>特別</td>
                    <td>理</td>
                    <td>−</td>
                    <td>数</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="table-wrapper">
            <table class="details-table">
              <thead>
                <tr>
                  <th>授業時間</th>
                  <th>対象科目</th>
                  <th>入塾登録料</th>
                  <th>授業料</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="授業時間">
                    <p>前半：19:00〜20:15</p>
                    <p>後半：20:25〜21:40</p>
                    <p>補講：21:45〜21:15</p>
                  </td>
                  <td data-label="対象科目">英語・数学・国語・理科・<br />社会・特別</td>
                  <td data-label="入塾登録料">10,000円</td>
                  <td data-label="授業料">
                    <p>週2回　22,500円</p>
                    <p>週3回　30,500円</p>
                    <p>週4回以上　37,500円</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="schedule-notes">
            <p>【備考】</p>
            <ul>
              <li>●通年テキスト代・集中講座費用・塾内テスト代（年3回）・五ツ木模試代（中3）等が必要経費としてかかります。</li>
              <li>●兄弟・姉妹割引（2割引）の制度もございます。</li>
              <li>●特別は苦手な強化を個別に指導いたします。</li>
              <li>●テスト期間中は各学校のテスト内容に沿った対策授業に変更致します。</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- High School Class -->
    <section class="class-section section" id="high">
      <div class="container">
        <h2 class="class-title">高校生 クラス</h2>

        <div class="schedule-card">
          <h3 class="schedule-year">2019年度 授業料・時間割</h3>

          <div class="table-wrapper">
            <table class="schedule-table">
              <thead>
                <tr>
                  <th>月</th>
                  <th>火</th>
                  <th>水</th>
                  <th>木</th>
                  <th>金</th>
                  <th>土</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>○</td>
                  <td>○</td>
                  <td>○</td>
                  <td>○</td>
                  <td>○</td>
                  <td>○</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="table-wrapper">
            <table class="details-table">
              <thead>
                <tr>
                  <th>授業時間</th>
                  <th>入塾登録料</th>
                  <th>授業料</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="授業時間">20:30〜22:30</td>
                  <td data-label="入塾登録料">10,000円</td>
                  <td data-label="授業料">週2〜6回　22,500円</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="schedule-notes">
            <p>【備考】</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import PageHeader from '../components/PageHeader.vue'
import PageBreadcrumb from '../components/PageBreadcrumb.vue'
import topImg from '@/assets/images/top-img.png'

const tabs = [
  { id: 'elementary', name: '小学生' },
  { id: 'junior1', name: '中学1年生' },
  { id: 'junior2', name: '中学2年生' },
  { id: 'junior3', name: '中学3年生' },
  { id: 'high', name: '高校生' }
]

const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<style scoped>
.timetable-page {
  font-family: 'Noto Sans JP', sans-serif;
}

/* Section Common */
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

/* Tab Navigation */
.tab-section {
  padding: 30px 0;
  background-color: #fff;
}

.tab-nav {
  display: flex;
  justify-content: center;
  gap: 0;
  border: 2px solid #003C78;
  border-radius: 0;
  overflow: hidden;
}

.tab-btn {
  flex: 1;
  padding: 18px 20px;
  background: #fff;
  border: none;
  border-right: 2px solid #003C78;
  color: #003C78;
  font-size: 0.9375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
}

.tab-btn:last-child {
  border-right: none;
}

.tab-btn:hover {
  background-color: #003C78;
  color: #fff;
}

.tab-arrow {
  margin-left: 5px;
  font-size: 0.625rem;
}

/* Class Section */
.class-section {
  padding: 50px 0;
  background-color: #fff;
}

.class-title {
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 30px;
  color: #333;
}

.schedule-card {
  background: #fff;
  padding: 30px;
}

.schedule-year {
  font-size: 1.125rem;
  font-weight: 700;
  color: #003C78;
  border-left: 4px solid #003C78;
  padding-left: 15px;
  margin-bottom: 20px;
}

.class-type {
  font-size: 0.9375rem;
  font-weight: 500;
  margin-bottom: 15px;
}

.class-type-row {
  display: flex;
  gap: 100px;
  margin-bottom: 15px;
}

.schedule-tables-row {
  display: flex;
  gap: 30px;
  margin-bottom: 20px;
}

.schedule-tables-row .table-wrapper {
  flex: 1;
}

/* Tables */
.table-wrapper {
  overflow-x: auto;
  margin-bottom: 20px;
}

.schedule-table {
  width: 100%;
  border-collapse: collapse;
  min-width: 350px;
}

.schedule-table th,
.schedule-table td {
  padding: 12px 15px;
  text-align: center;
  border: 1px solid #ddd;
}

.schedule-table th {
  background-color: #003C78;
  color: #fff;
  font-weight: 500;
}

.schedule-table td {
  background-color: #fff;
}

.details-table {
  width: 100%;
  border-collapse: collapse;
}

.details-table th,
.details-table td {
  padding: 15px;
  border: 1px solid #ddd;
  vertical-align: top;
}

.details-table th {
  background-color: #003C78;
  color: #fff;
  font-weight: 500;
  text-align: center;
  width: 25%;
}

.details-table td {
  background-color: #fff;
  font-size: 0.875rem;
  line-height: 1.8;
}

.details-table td p {
  margin-bottom: 5px;
}

.details-table td p:last-child {
  margin-bottom: 0;
}

/* Notes */
.schedule-notes {
  margin-top: 20px;
  font-size: 0.8125rem;
  color: #666;
}

.schedule-notes p {
  font-weight: 500;
  margin-bottom: 10px;
}

.schedule-notes ul {
  list-style: none;
}

.schedule-notes li {
  margin-bottom: 5px;
  line-height: 1.6;
}

/* Responsive */
@media (max-width: 768px) {
  .section {
    padding: 20px 0;
  }

  .secondary-nav {
    display: none;
  }

  .tab-nav {
    flex-direction: column;
  }

  .tab-btn {
    border-right: none;
    border-bottom: 2px solid #003C78;
  }

  .tab-btn:last-child {
    border-bottom: none;
  }

  .schedule-card {
    padding: 20px 15px;
  }

  .class-type-row {
    flex-direction: column;
    gap: 10px;
  }

  .schedule-tables-row {
    flex-direction: column;
  }

  .details-table thead {
    display: none;
  }

  .details-table tbody tr {
    display: block;
  }

  .details-table td {
    display: block;
    width: 100%;
    border: none;
    border-bottom: 1px solid #ddd;
    padding: 15px;
    text-align: left;
  }

  .details-table td::before {
    content: attr(data-label);
    display: block;
    font-weight: 700;
    color: #fff;
    background-color: var(--color-primary);
    padding: 10px 15px;
    margin: -15px -15px 10px -15px;
  }
}
</style>
