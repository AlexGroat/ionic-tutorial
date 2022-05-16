<template>
  <ion-page>
    <base-layout page-title="All Memories">
      <template v-slot:actions-end>
        <ion-button>
          <ion-icon slot="icon-only" :icon="add"></ion-icon>
        </ion-button>
      </template>
      <memories-list :memories="memories"></memories-list>
    </base-layout>
  </ion-page>
</template>

<script>
import { IonButton, IonIcon } from "@ionic/vue";
import { add } from "ionicons/icons";
import BaseLayout from "../components/base/BaseLayout.vue";
import MemoriesList from "../components/memories/MemoriesList.vue";

export default {
  components: {
    BaseLayout,
    MemoriesList,
    IonButton,
    IonIcon,
  },

  data() {
    return {
      add,
    };
  },

  computed: {
    memories() {
      return this.$store.getters.memories;
    },
  },
};
</script>

