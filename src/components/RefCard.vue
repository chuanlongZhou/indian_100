<template>
  <div class="info-container mx-3" @mouseover="showPanel = true" @mouseleave="showPanel = false">
    <div class="info-content">
      <slot></slot>
      <sup 
        class="info-avatar" 
        :class="{ 'hovered': showPanel }"
        @click="openLink"
      >
        {{ number }}
      </sup>
    </div>
    <div v-if="showPanel" class="info-panel">
      <div class="info-source">
        <img v-if="sourceIcon" :src="sourceIcon" alt="Source Icon" class="source-icon" />
        <span>{{ sourceName }}</span>
      </div>
      <div class="info-title">{{ title }}</div>
      <div class="info-description">
        <p>{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoComponent",
  props: {
    number: {
      type: Number,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    sourceName: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    sourceIcon: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      showPanel: false
    };
  },
  methods: {
    openLink() {
      window.open(this.link, '_blank');
    }
  }
};
</script>

<style scoped>
.info-container {
  position: relative;
  display: inline-block;
}

.info-content {
  display: inline;
  position: relative;
}

.info-avatar {
  background-color: #e8eaec;
  color: rgb(72, 72, 72);
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
  font-size: 0.75rem;
  line-height: 20px;
  position: absolute;
  top: -15px;
  right: -10px;
  transition: background-color 0.3s;
}

.info-avatar.hovered {
  background-color: #7ad27e;
}

.info-panel {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  width: 250px;
}

.info-panel .info-source {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.info-panel .source-icon {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}

.info-title {
  font-weight: bold;
  margin-bottom: 5px;
}

.info-description {
  font-size: 14px;
  color: #555;
}
</style>
