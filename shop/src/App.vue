<template>
  <header>
    <div
      style="
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 63px;
        border-top: 6px solid #00C65E;
      "
    >
      <img src="./components/icons/Logo.png" alt="/" />
      <nav>
        <a-flex gap="middle">
          <RouterLink to="/board">Доска объявлений</RouterLink>
          <RouterLink to="/Service_сenter">Сервисный центр</RouterLink>
          <RouterLink to="/Online_store">Интернет-магазин Dily.ru</RouterLink>
          <RouterLink to="/Buying">Скупка</RouterLink>
        </a-flex>
      </nav>
      <a-flex gap="middle" align="center" >
        <div>
          <a-dropdown :trigger="['click']">
            <a class="ant-dropdown-link" @click.prevent>
               <img src="./components/icons/off.png" alt="">
               Москва
              <DownOutlined />
            </a>
            <template #overlay>
              <a-menu>
                <a-menu-item key="0">
                  <a href="http://www.alipay.com/">1st menu item</a>
                </a-menu-item>
                <a-menu-item key="1">
                  <a href="http://www.taobao.com/">2nd menu item</a>
                </a-menu-item>
                <a-menu-divider />
                <a-menu-item key="3">3rd menu item</a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </div>
        <div>
          <a-button  type="text" @click="showModal">
            <a-flex gap="small" align="center" >
            <img src="./components/icons/default.png" alt="">
            Вход/ регистрация
          </a-flex>
          </a-button>
          <a-modal v-model:open="open" title="Basic Modal" @ok="handleOk">
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </a-modal>
        </div>
      </a-flex>
    </div>
  </header>

  <RouterView />
</template>

<script lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';
const open = ref<boolean>(false);

const showModal = () => {
  open.value = true;
};

const handleOk = (e: MouseEvent) => {
  console.log(e);
  open.value = false;
};
</script>


<style scoped>
a {
  all: unset;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}
a:focus {
  background-color: hwb(120 20% 20% / 0.3); /* Зеленый фон при фокусе */
}
</style>
