<template>
   <div class="bg-image"> 
     <div style="display: flex;">
      <div style="padding-left: 200px ; padding-top: 99px; height: 390px; width: 50%;">
        <a-flex gap="middle" vertical>
        <a-flex gap="middle">
        <h1 style="color: #FFB762;">Скидки от</h1>
        <img src="../components/icons/Logo.png" alt="">
      </a-flex>
      <a-flex vertical>
        <H3 style="padding-left: 200px; color: #FFB762;">
          На смартфоны Samsung
        </H3>
        <div style="padding-top: 50px  ; ">
          <AButton style="background: #00C65E; color: white; width: 180px;">Подробнее</AButton>
        </div>
      </a-flex>
    </a-flex>
      </div>
      <div   style=" width: 50% ;  position: relative;">
        <div class="first_phone">
        <img src="../components/icons_two_page/image 175.png" alt="/">
        <img src="../components/icons_two_page/Polygon 10.png" alt="/">
      </div>
      <div class="second_phone">
        <img src="../components/icons_two_page/image 173.png" alt="/">

        <img src="../components/icons_two_page/Polygon 8.png" alt="/">
      </div>
      <div class="third_phone">
        <img src="../components/icons_two_page/image 174.png" alt="/">
        <img src="../components/icons_two_page/Polygon 9.png" alt="/">
      </div>
      <div class="fourth_phone">
        <img src="../components/icons_two_page/image 177.png" alt="/">
        <img src="../components/icons_two_page/Polygon 11.png" alt="/">
      </div>
     
      </div>
     
     </div>

   </div>
</template>

<style>
.bg-image {
    background-image: url('../components/icons/Rectangle 286.png');
    background-size: cover; 
    background-position: center; 
    width: 100%; 
    height: 390px;
}
.first_phone, .second_phone, .third_phone, .fourth_phone {
  position: relative;
  display: inline-block; /* Это позволяет контейнеру быть только размером содержимого */
}
.first_phone img:nth-child(1){
  width: 300px;
  height: 240px;
  z-index: 1000;
}
.second_phone img:nth-child(1){
  width: 145px;
  height: 245px;
  z-index: 100;
  position: absolute;
  top: -70px;
  left: -100px;
}
.third_phone img:nth-child(1){
  width: 270;
  height: 270;
  z-index: 100;
  position: absolute;
  top: -300px;
  left: -60px;
}
.fourth_phone img:nth-child(1){
  width: 270;
  height: 270;
  z-index: 100;
  position: absolute;
  top: -200px;
  left: 215px;
}

.first_phone img:nth-child(2){
  position: absolute;
  z-index: 100;
  top: 20px; 
  left: 30px;
}
.second_phone img:nth-child(2){
  position: absolute;
  z-index: 1;
  top: -35px; 
  left: -168px;

}
.third_phone img:nth-child(2){
  position: absolute;
  top: -200px;
  left: 60px;
}
.fourth_phone img:nth-child(2){
  z-index: 1;
  position: absolute;
  top: -60px;
  left: 255px;
}

</style>
