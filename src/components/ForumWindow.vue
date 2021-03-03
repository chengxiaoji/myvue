<template>
  <v-list flat>
    <v-list-item-group
        v-model="selectedItem"
        color="primary"
    >
      <v-list-item
          v-for="(item, i) in items"
          :key="i"
          two-line
      >
        <v-list-item-content>
          <v-list-item-title v-text="item.text" style="font-size: 20px"></v-list-item-title>
          <v-list-item-subtitle>
            <div class="listSecondLine">
              <div class="listLineItem">
                <el-avatar :size="24" slot="reference"></el-avatar>
                <a style="margin-left: 5px; color: #757575">唔仄lo咚锵</a>
              </div>


            </div>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  name: "ForumWindow",
  data(){
    return{
      selectedItem: 1,
      items: [
        { text: 'Real-Time', icon: 'mdi-clock' },
        { text: 'Audience', icon: 'mdi-account' },
        { text: 'Conversions', icon: 'mdi-flag' },
        { text: 'Conversions', icon: 'mdi-flag' },
        { text: 'Conversions', icon: 'mdi-flag' },
      ],
    }
  }
}
</script>

<style scoped>
.listLineItem{
  width: 100px;
  display: flex;
  justify-items: center;
  align-items: center;
}
</style>