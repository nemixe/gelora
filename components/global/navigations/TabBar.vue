<template>
  <div>
    <ul class="tab-bar w-full flex whitespace-no-wrap select-none bg-white lg:cursor-pointer font-size-3 font-semibold">
      <li :class="{ 'active': page === 1 }" @click="page = 1" class="flex-1 pt-4 pb-10 px-3 text-center">
        Deskripsi
      </li>
      <li :class="{ 'active': page === 2 }" @click="page = 2" class="flex-1 pt-4 pb-10 px-3 text-center">
        Lokasi
      </li>
      <li :class="{ 'active': page === 3 }" @click="page = 3" class="flex-1 pt-4 pb-10 px-3 text-center">
        Jadwal
      </li>
      <li :class="{ 'active': page === 4 }" @click="page = 4" class="flex-1 pt-4 pb-10 px-3 text-center">
        Harga
      </li>
    </ul>
  </div>
</template>

<style scoped>

.tab-bar {
  overflow-x: scroll;
  color: rgb(156, 156, 156);
}

.tab-bar li.active {
  border-bottom: 2px solid #12cbc5;
  color: #12cbc5;
}

.tab-bar li {
  border-bottom: 2px solid lightgray;
  height: 46px;
  margin-left: -6px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

</style>

<script>
export default {
  data () {
    return {
      page: 1
    }
  }
}
</script>
