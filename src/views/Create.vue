<template>
  <div class="create">
    <div class="container">
      <!-- code here -->
      <div class="card">
        <div class="card-image">
          <h2 class="card-heading">
            开始
            <small>让我们创建您的帐户</small>
          </h2>
        </div>
        <form class="card-form">
          <div class="input">
            <input type="text" class="input-field" value="" required />
            <label class="input-label">名称</label>
          </div>
          <div class="input">
            <input type="text" class="input-field" value="" required />
            <label class="input-label">邮箱</label>
          </div>
          <div class="input">
            <input type="password" class="input-field" required />
            <label class="input-label">密码</label>
          </div>
          <div class="action">
            <button class="action-button">立即注册</button>
          </div>
        </form>
        <div class="card-info">
          <p>表示您同意我们<a href="#">用户协议</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
*,
*:after,
*:before {
  box-sizing: border-box;
}

body {
  font-family: "DM Sans", sans-serif;
  line-height: 1.5;
  background-color: #f1f3fb;
  padding: 0 2rem;
}

img {
  max-width: 100%;
  display: block;
}

input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0;
}

.card {
  margin: 2rem auto;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  width: 100%;
  max-width: 425px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 20px 0 rgba(153, 153, 153, 0.25);
  padding: 0.75rem;
}

.card-image {
  border-radius: 8px;
  overflow: hidden;
  padding-bottom: 65%;
  background-image: url("../assets/wallhaven-qdk1xd.jpg");
  background-repeat: no-repeat;
  background-size: 150%;
  background-position: 0 5%;
  position: relative;
  background-size:cover ;
}

.card-heading {
  position: absolute;
  left: 10%;
  top: 15%;
  right: 10%;
  font-size: 1.75rem;
  font-weight: 700;
  color: #fff;
  line-height: 1.222;
}
.card-heading small {
  display: block;
  font-size: 0.75em;
  font-weight: 400;
  margin-top: 0.25em;
}

.card-form {
  padding: 2rem 1rem 0;
}

.input {
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: reverse;
  flex-direction: column-reverse;
  position: relative;
  padding-top: 1.5rem;
}
.input + .input {
  margin-top: 1.5rem;
}

.input-label {
  color: #8597a3;
  position: absolute;
  top: 1.5rem;
  -webkit-transition: 0.25s ease;
  transition: 0.25s ease;
}

.input-field {
  border: 0;
  z-index: 1;
  background-color: transparent;
  border-bottom: 2px solid #eee;
  font: inherit;
  font-size: 1.125rem;
  padding: 0.25rem 0;
}
.input-field:focus,
.input-field:valid {
  outline: 0;
  border-bottom-color: #409EFF;
}
.input-field:focus + .input-label,
.input-field:valid + .input-label {
  color: #6658d3;
  -webkit-transform: translateY(-1.5rem);
  transform: translateY(-1.5rem);
}

.action {
  margin-top: 2rem;
}

.action-button {
  font: inherit;
  font-size: 1.25rem;
  padding: 1em;
  width: 100%;
  font-weight: 500;
  background-color: #409EFF;
  border-radius: 6px;
  color: #fff;
  border: 0;
}
.action-button:focus {
  outline: 0;
}

.card-info {
  padding: 1rem 1rem;
  text-align: center;
  font-size: 0.875rem;
  color: #8597a3;
}
.card-info a {
  display: block;
  color: #409EFF;
  text-decoration: none;
}
</style>