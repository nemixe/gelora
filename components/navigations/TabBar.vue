<template>
  <div>
    <ul class="tab-bar bg-white cursor-pointer font-size-3">
      <li class="inline-block py-2 px-2" :class="{ 'active': page === 1 }" @click="page = 1">Deskripsi</li>
      <li class="inline-block py-2 px-2" :class="{ 'active': page === 2 }" @click="page = 2">Lokasi</li>
      <li class="inline-block py-2 px-2" :class="{ 'active': page === 3 }" @click="page = 3">Jadwal</li>
      <li class="inline-block py-2 px-2" :class="{ 'active': page === 4 }" @click="page = 4">Harga</li>
    </ul>
  </div>
</template>

<style scoped>

.tab-bar {
  overflow-x: scroll;
  white-space: nowrap;
  color: rgb(156, 156, 156)
}

.tab-bar li.active {
  border-bottom: 3px solid #12cbc5;
  color: #107cad;
}

.tab-bar li {
  border-bottom: 1px solid lightgray;
  height: 46px;
  margin-left: -5px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.tab-bar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE and Edge */
.tab-bar {
  -ms-overflow-style: none;
}
</style>

<script>
export default {
  data: function() {
    return {
      page: 1
    }
  }
}
</script>