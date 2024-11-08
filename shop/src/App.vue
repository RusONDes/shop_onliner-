<template>
  <header>
    <div
      style="
        display: flex;
        justify-content: space-between;
        padding: 0 135px 0 135px;
        align-items: center;
        height: 63px;
        border-top: 6px solid #00C65E;
      "
    >
      <img src="./components/icons/Logo.png" alt="/" />
      <nav>
        <a-flex gap="middle" style=" height: 63px; display: flex; align-items: center;">
          <RouterLink to="/board">Доска объявлений</RouterLink>
          <RouterLink to="/Service_сenter">Сервисный центр</RouterLink>
          <RouterLink to="/">Интернет-магазин Dily.ru</RouterLink>
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
    <div
      style="
        display: flex;
        justify-content: space-between;
        padding: 0 148px 0 135px;
        align-items: center;
        height: 63px;
        background: #F7F7F7;
       
      "
    >
      <a-flex gap="small">
        
        <a-flex gap="small" >
          <img src="./components/icons/union.png" alt="/">
           <span style="width: 150px;">Каталог товаров</span>
        </a-flex>
        <a-flex gap="small">
          <img src="./components/icons/cruzac.png" alt="/">
          <span>Доставка и оплата</span>
        </a-flex>
    </a-flex>
      <a-flex gap="90" align="center">
        <div>
          <a-input-search
      v-model:value="value"
      placeholder="Я хочу купить"
      style="width: 200px"
      @search="onSearch"
    />
        </div>
        
       <a-flex gap="middle">
        <span>Поддержка</span>
        <div>
          <img src="./components/icons/vector.png" alt="/">
        </div>
        <div>
          <img src="./components/icons/like.png" alt="/">
        </div>
        <div>
          <img src="./components/icons/карзина.png" alt="/">
        </div>
       </a-flex>
    

      </a-flex>
    </div>
  </header>


  <RouterView/>
  <footer>
    <div >
     <div style="width: 100%;padding: 0 135px 0 135px;"> 
      <a-flex gap="small" vertical  style="color: #818187;">
      <h3>Официальный ремонт техники: срочно и недорого?</h3>
      <h4>Сервис центр техники : мы работаем для вас</h4>
      <span>
        dily.ru – это современная, стремительно развивающаяся компания в Москве, которая специализируется на ремонте любых устройств торговой марки Эппл. В нашей команде трудятся сертифицированные мастера, готовые в кратчайшие сроки устранить любые неисправности iPhone, iPad, MacBook, iMac, iWatch, iPod. Мы сможем поменять разбитый экран, вышедший из строя аккумулятор, сгоревшую материнскую плату вашего смартфона или планшета. Также оказываем услуги по разблокировке iCloud и выездному ремонту компьютеров, ноутбуков и мобильных гаджетов.
     </span>
     <span>Доступный ремонт техники Apple с выездом на дом</span>
     <span>
      Бешеный темп жизни диктует свои правила. Зачастую у наших клиентов попросту нет времени на поездку в сервисный центр, из-за чего им приходится мириться с недостатками в работе электроники. Но мы как никто больше понимаем, сколько проблем способны доставить трещины на экране или «залипающие» кнопки устройства. Поэтому предлагаем своим клиентам такую удобную услугу, как срочный ремонт Apple с выездом на дом, цены на которую вас приятно удивят.
     </span>
     <div>
      <a-button style="color: #818187; padding: 0;" type="text">Развернуть</a-button>
     </div>
    </a-flex>
    </div>
     <div style="background: #EFEFEF;width: 100%;padding: 0 135px 0 135px;height: 60px;display: flex; align-items: center;">

      <div style="width: 50%;">
    <a-flex gap="small" flex="space-around" align="center">
      <img src="./components/icons/Logo.png" alt="/" />
     <div>
       <img src="./components/icons/off.png" alt="">
       Москва
     </div>
   </a-flex>
</div>
    <a-flex gap="small" style="display: flex; align-items: center; justify-content: flex-end;width: 50%;">
     <span>Присоединяйтесь к нам </span> 
    <div class="soheal">
    <img src="./components/icons/Group.png" alt="">
    </div>
    <div class="soheal">
     <img src="./components/icons/Group 228.png" alt="">
    </div>
    <div class="soheal">
   <img src="./components/icons/Exclude.png" alt="">
    </div>

    </a-flex>
     </div>
    </div>
    <div style="width: 100%;padding: 0 135px 0 135px; background: #EFEFEF">
  <a-flex gap="large" class="slor">
    <a-flex gap="small">
      <h3>Доска объявлений</h3>
      <span>Объявления</span>
      <span>Магазины</span>
      <span>Благотворительность</span>
      <span>Личный кабинет</span>
    </a-flex>
    <a-flex gap="small">
      <h3>Сервисный центр</h3>
      <span>Что мы чиним</span>
      <span>Адреса сервисных центров</span>
    </a-flex>
    <a-flex gap="small">
      <h3>Интернет-магазин</h3>
      <span>Каталог товаров</span>
      <span>Доставка и оплата</span>
      <span>Корзина</span>
      <span>Личный кабинет</span>
      <span>Контакты</span>
      <span>Вакансии</span>
    </a-flex>
    <a-flex gap="small">
      <h3>Пользователям</h3>
      <span>Гарантии</span>
      <span>Доставка и оплата</span>
      <span>Служба поддержки</span>
      <span>Вопрос-ответ</span>
    </a-flex>
  </a-flex>
</div>

  <a-flex gap="50" align="center"   style="width: 100%;padding: 0 135px 0 135px;height: 40px;">
    <a-flex gap="small" >
<span>
  Политика конфиденциальности
</span>
<span>
  Пользовательское соглашение
</span>
<span>Использование cookies</span>
<span>Карта сайта</span>

</a-flex>
   <div>
    <img src="./components/icons/Group 53.png" alt="/">
   </div>
  </a-flex>


  </footer>
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
.slor div{
  display: flex;
  flex-direction: column;
}
.soheal{
  border-radius: 0.5rem;
  background: #fffefe;
  text-align: center;
  width: 33px;
  height: 33px;

}
a {
  all: unset;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 10px 0 10px;
  transition: background-color 0.3s ease, border-bottom-color 0.3s ease;
}
a:focus {
  background-color: hwb(120 20% 20% / 0.3); 
  border-bottom: 4px solid hwb(120 20% 20%);
}
</style>
