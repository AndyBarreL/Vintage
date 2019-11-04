<template>
  <div fluid class="wrapper">
    <p class="label">Contacts</p>
    <div class="flex">
      <div>
        <p class="sub_label"><a class="link">GMS</a> Headquarters</p>
        <div class="flex">
          <ul class="list">
            <li>Global Message Services Ukraine LLC</li>
            <li>Bundesstrasse 5 | 3rd Floor</li>
            <li>6300 Zug</li>
            <li>Switzerland</li>
          </ul>
          <ul class="list">
            <li>Email</li>
            <a class="link">info@gms-worldwide.com</a>
            <li>Send message</li>
            <li>Send form</li>
          </ul>
        </div>
      </div>
      <div>
        <p class="sub_label">Technical support <a class="link">24/7</a></p>
        <p class="text_info">
          GMS understands that it can be hard to follow all new technologies. 
          We regularly provide for all our clients educational trainings to make your operator`s business earn more and better 
          though our best practices.
        </p>
        <a class="link sub_link">+41 41 544 62 06</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.label {
  font-size: 4.9vw;
  line-height: 3.3vw;
  color: #333333;
  font-family: "SuisseIntl-Light";
  font-weight: 300;
  margin-bottom: 6.3vh;
}

.sub_label {
  font-size: 3.5vw;
  line-height: 3.3vw;
  font-family: "SuisseIntl-Light";
  font-weight: 300;
  margin-bottom: 5.4vh;
}

.flex {
  display: flex;
  flex-direction: row;

  & > div {
    width: 50%;
  }
}

.text_info {
  font-size: 1.6vw;
  font-family: "SuisseIntl-Light";
  text-align: left;
  margin-bottom: 28px;
}

.sub_link {
  font-size: 39px;
}

.list {
  padding: 0px;
  margin-right: 37px;
  & > li {
    font-family: "SuisseIntl-Light";
    text-align: left;
    list-style: none;
    font-size: 23px;
  }

  & > a {
    font-size: 23px;
    line-height: 0px;
    margin-top: 13px;
    margin-bottom: 13px; 
  }
}
</style>