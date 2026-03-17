<template>
  <div class="contact-page">
    <!-- Page Header -->
    <PageHeader title="お問い合わせ" :backgroundImage="topImg" />

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
    <PageBreadcrumb currentPage="お問い合せ" />

    <!-- Contact Form Section -->
    <section class="contact-section section">
      <div class="container">
        <div class="contact-header">
          <h2 class="contact-title">お電話またはメールにてお気軽にお問い合わせください</h2>
        </div>

        <div class="contact-description">
          <p>
            板橋セミナーへのお問い合わせは、下記のフォームから送信してください。後日担当者よりご連絡いたします。
          </p>
          <p>
            なお、お急ぎの方はお電話（000-000-0000）にてお問い合わせくださいますようお願いいたします。
          </p>
        </div>

        <form class="contact-form" @submit.prevent="handleSubmit">
          <div class="form-table">
            <div class="form-row">
              <label class="form-label">
                お名前<span class="required">*必須</span>
              </label>
              <div class="form-input-wrapper">
                <input
                  type="text"
                  v-model="form.name"
                  class="form-input"
                  required
                />
              </div>
            </div>

            <div class="form-row">
              <label class="form-label">ふりがな</label>
              <div class="form-input-wrapper">
                <input
                  type="text"
                  v-model="form.furigana"
                  class="form-input"
                />
              </div>
            </div>

            <div class="form-row">
              <label class="form-label">
                メールアドレス<span class="required">*必須</span>
              </label>
              <div class="form-input-wrapper">
                <input
                  type="email"
                  v-model="form.email"
                  class="form-input"
                  required
                />
              </div>
            </div>

            <div class="form-row">
              <label class="form-label">お電話番号</label>
              <div class="form-input-wrapper">
                <input
                  type="tel"
                  v-model="form.phone"
                  class="form-input"
                />
              </div>
            </div>

            <div class="form-row">
              <label class="form-label">ご住所</label>
              <div class="form-input-wrapper">
                <input
                  type="text"
                  v-model="form.address"
                  class="form-input"
                />
              </div>
            </div>

            <div class="form-row">
              <label class="form-label">お問い合わせ内容</label>
              <div class="form-input-wrapper">
                <textarea
                  v-model="form.message"
                  class="form-textarea"
                  rows="6"
                ></textarea>
              </div>
            </div>
          </div>

          <div class="form-submit">
            <button type="submit" class="btn btn-primary btn-submit">
              確認
            </button>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PageHeader from '../components/PageHeader.vue'
import PageBreadcrumb from '../components/PageBreadcrumb.vue'
import topImg from '@/assets/images/top-img.png'

const form = ref({
  name: '',
  furigana: '',
  email: '',
  phone: '',
  address: '',
  message: ''
})

const handleSubmit = () => {
  alert('お問い合わせありがとうございます。確認画面へ進みます。')
}
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

@media (max-width: 980px) {
  .container {
    width: 90%;
    max-width: none;
  }
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

/* Contact Section */
.contact-section {
  background-color: #fff;
}

.contact-header {
  margin-bottom: 20px;
}

.contact-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-primary);
  border-left: 4px solid var(--color-primary);
  padding-left: 15px;
  border-bottom: 2px solid var(--color-primary);
  padding-bottom: 15px;
}

.contact-description {
  margin-bottom: 30px;
  font-size: 0.9375rem;
  line-height: 1.8;
  color: #333;
}

.contact-description p {
  margin-bottom: 10px;
}

/* Form - グリッド統一: コンテナ幅いっぱい */
.contact-form {
  /* 980px container width */
}

.form-table {
  border: 1px solid #ddd;
}

.form-row {
  display: flex;
  border-bottom: 1px solid #ddd;
}

.form-row:last-child {
  border-bottom: none;
}

.form-label {
  display: flex;
  align-items: center;
  width: 200px;
  padding: 20px;
  background-color: #f9f9f9;
  font-weight: 500;
  color: var(--color-primary);
  font-size: 0.9375rem;
  flex-shrink: 0;
}

.required {
  color: #e74c3c;
  font-size: 0.75rem;
  margin-left: 5px;
}

.form-input-wrapper {
  flex: 1;
  padding: 15px 20px;
  display: flex;
  align-items: center;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--color-primary);
}

.form-textarea {
  resize: vertical;
  min-height: 150px;
}

/* Submit */
.form-submit {
  margin-top: 40px;
  text-align: center;
}

.btn-submit {
  min-width: 200px;
  padding: 15px 50px;
  font-size: 1rem;
}

/* Responsive */
@media (max-width: 768px) {
  .secondary-nav {
    display: none;
  }

  .container {
    padding: 0 15px;
  }

  .form-row {
    flex-direction: column;
  }

  .form-label {
    width: 100%;
    padding: 15px;
    border-bottom: none;
  }

  .form-input-wrapper {
    padding: 0 15px 15px;
  }

  .btn-submit {
    width: 100%;
    max-width: 300px;
  }
}
</style>
