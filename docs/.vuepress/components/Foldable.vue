<template>
  <fold class="my-foldable" height="20%" :minHeight="150" async>
    <!-- default slot -->
    <slot></slot>

    <!-- named slot -->
    <!-- <p align="center" class="my-foldable my-foldable-button"
       slot="view-more" slot-scope="{ toggle, collapsed }" @click="toggle">
      {{ collapsed ? 'see more' : 'close' }}
    </p> -->

     <template slot="view-more" slot-scope="{ toggle, collapsed }">
      <div @click="toggle"
           class="baidu-view-more my-foldable-button"
           :class="{ 'collapsed': collapsed }">
        <svg class="baidu-view-more-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20"
             height="20" fill="#0064a6">
          <path
            d="M512 0c-281.6 0-512 230.4-512 512s230.4 512 512 512 512-230.4 512-512-230.4-512-512-512z m0 938.666667c-234.666667 0-426.666667-192-426.666667-426.666667s192-426.666667 426.666667-426.666667 426.666667 192 426.666667 426.666667-192 426.666667-426.666667 426.666667z"
            p-id="3018"></path>
          <path
            d="M793.6 396.8c-17.066667-17.066667-42.666667-17.066667-59.733333 0l-221.866667 221.866667-221.866667-221.866667c-17.066667-17.066667-42.666667-17.066667-59.733333 0-17.066667 17.066667-17.066667 42.666667 0 59.733333l251.733333 251.733334c17.066667 17.066667 42.666667 17.066667 59.733334 0l251.733333-251.733334c17.066667-12.8 17.066667-42.666667 0-59.733333z"
            p-id="3019"></path>
        </svg>
        <span class="baidu-view-more-text">{{ collapsed ? 'see more' : 'close' }}</span>
      </div>
    </template>
  </fold>
</template>

<script>
// import VueFoldable from '../../node_modules/vue-foldable/dist/vue-foldable'
// import '../../node_modules/vue-foldable/dist/vue-foldable.css'

import VueFoldable from '../../../node_modules/vue-foldable/dist/vue-foldable'

export default {
  components: {
    'fold': VueFoldable
  },
}
</script>


<style lang="stylus">

@import '../../../node_modules/vue-foldable/dist/vue-foldable.css';

.vue-foldable {
  &.my { /* override */
    .vue-foldable-mask {
      /* tweak the mask's postion according to your view more's height */
      bottom: 50px
    }
  }
}

.vue-foldable-container {
  transition: max-height 0.8s ease-in-out;
}

// .vue-foldable-mask {
//   transition: opacity 3s;
// }

.my-foldable-button {
  background-color: #fff;
  transition: background-color .1s ease-in-out;
  color: #0064a6;
  padding: 0 8px;
  font-size: 14px;
  border-radius: 4px;
  text-align: center;
  height: 34px;
  line-height: 32px;
  min-width: 72px;
  cursor: pointer;
  .baidu-view-more-icon {
    vertical-align: middle;
  }
  .baidu-view-more-text {
    vertical-align: middle;
  }
  &:not(.collapsed) {
    .baidu-view-more-icon {
      transform: scaleY(-1);
    }
  }
  &:hover {
    // background-color: #50a4f6;
    opacity: 0.6;
    // text-decoration: underline;
  }
}

</style>
