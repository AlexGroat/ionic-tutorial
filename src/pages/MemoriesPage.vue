<template>
  <ion-page>
    <base-layout page-title="All Memories">
      <ion-list>
        <ion-item router-link="/memories/1">A trip to the mountains</ion-item>
        <ion-item>Surfing</ion-item>
        <ion-item>Good eating</ion-item>
      </ion-list>
    </base-layout>
  </ion-page>
</template>

<script>
import {
  IonList,
  IonItem
} from "@ionic/vue";
import BaseLayout from '../components/base/BaseLayout.vue';
export default {
  components: {
    IonList,
    IonItem,
    BaseLayout
  },
};
</script>

