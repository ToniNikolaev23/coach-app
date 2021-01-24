<template>
  <section>
    <base-dialog :show="!!error" title="And error accured" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <base-card>
      <header>
        <h2>Requests Received</h2>
      </header>
      <base-spinner v-if="isLoading"></base-spinner>
      <ul v-else-if="hasRequests && !isLoading">
        <request-item
          v-for="request in getRequests"
          :key="request.id"
          :email="request.userEmail"
          :message="request.message"
        ></request-item>
      </ul>
      <h3 v-else>You havent received any requests yet.</h3>
    </base-card>
  </section>
</template>

<script>
import RequestItem from "../../components/requests/RequestItem.vue";
export default {
  components: {
    RequestItem,
  },
  data() {
    return {
      isLoading: false,
      error: null,
    };
  },
  computed: {
    getRequests() {
      return this.$store.getters["requests/getRequests"];
    },
    hasRequests() {
      return this.$store.getters["requests/hasRequests"];
    },
  },
  created() {
      this.loadRequests()
  },
  methods: {
    async loadRequests() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("requests/loadRequests");
      } catch (error) {
        this.error = error.message || "Something went wrong";
      }

      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>