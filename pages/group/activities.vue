<template>
  <div>
    <div class="lg:h-56 h-auto p-6 pt-12 pb-8 text-white" style="background: url('https://www.ncaa.com/sites/default/files/public/styles/focal_point_medium/public-s3/thumbnails/video/ncaa-video-598567-5a945ff24f067.jpg?itok=Ltyh9cU3');background-size: cover;">
      <div class="flex h-10 justify-between">
        <div class="flex-grow text-2xl font-semibold self-center">
          Basket
        </div>
        <div class="relative flex-wrap m-auto h-full">
          <img class="rounded-full h-full" src="/dummy/avatars/1.jpg" alt="" srcset="">
          <div class="profile-icon-indicator absolute rounded-full h-4 w-4" />
        </div>
      </div>
      <div class="w-full">
        <label class="text-sm h-2 w-full" for="location">Your current location</label>
        <div class="relative">
          <select
            id="location"
            @change="onChangeLocation"
            class="h-12 rounded-lg bg-transparent focus:bg-transparent pl-8 text-sm block
              appearance-none w-full border border-gray-200 text-white font-bold
              py-3 px-4 pr-8 rounded leading-tight focus:outline-none
              focus:border-gray-500"
          >
            <option>Jakarta pusat, Pejompongan</option>
            <option>Missouri</option>
            <option>Texas</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
          </div>
        </div>
      </div>
    </div>
    <div class="relative content-section w-full py-5 z-20 bg-white overflow-hidden">
      <div class="pl-6 pr-0 px-10">
        <div class="section pb-8">
          <div class="pr-6 text-gray-700">
            <div class="flex justify-between">
              <div class="flex-col">
                <div class="font-bold text-lg ">
                  Aktifitas
                </div>
              </div>
              <div class="flex-col">
                <div class="text-sm">
                  Lihat semua
                </div>
              </div>
            </div>
          </div>
          <div class="activity-cards whitespace-no-wrap rounded-l-lg pr-6 overflow-scroll">
            <nuxt-link v-for="n in 4" :key="n" :to="`/group/activity/${1}`" class="card relative shadow h-40 w-64 rounded-lg inline-block" style="background: url('https://sport.vic.gov.au/__data/assets/image/0022/55804/girls20playing20hockey_1.jpg');background-size: cover;">
              <div class="absolute rounded-lg z-10 bg-card w-full h-full" />
              <div class="absolute rounded-lg z-20 p-2 w-full h-full">
                title
              </div>
            </nuxt-link>
          </div>
        </div>
        <div class="section pb-8">
          <div class="pr-6 text-gray-700">
            <div class="flex justify-between">
              <div class="flex-col">
                <div class="font-bold text-lg ">
                  Tempat Main
                </div>
              </div>
              <div class="flex-col">
                <div class="text-sm">
                  Lihat semua
                </div>
              </div>
            </div>
          </div>
          <div class="activity-cards whitespace-no-wrap rounded-l-lg pr-6 overflow-scroll">
            <nuxt-link v-for="n in 4" :key="n" :to="`/group/activity/${1}`" class="card relative shadow h-40 w-64 rounded-lg inline-block" style="background: url('https://apicms.thestar.com.my/uploads/images/2020/01/10/483159.jpg');background-size: cover;">
              <div class="absolute rounded-lg z-10 bg-card w-full h-full" />
              awdawd
            </nuxt-link>
          </div>
        </div>
        <div class="section pb-8">
          <div class="pr-6 text-gray-700">
            <div class="flex justify-between">
              <div class="flex-col">
                <div class="font-bold text-lg ">
                  Komunitas
                </div>
              </div>
              <div class="flex-col">
                <div class="text-sm">
                  Lihat semua
                </div>
              </div>
            </div>
          </div>
          <div class="text-gray-600 text-sm py-1">
            Si sine causa ? quae fuerit causa
          </div>
          <div class="community-cards whitespace-no-wrap rounded-l-lg pr-6 overflow-scroll">
            <div v-for="n in 4" :key="n" class="card h-32 w-32 rounded-lg inline-block shadow" style="background: url('http://www-static2.spulsecdn.net/pics/00/35/81/35/35813581_1_O.jpg');background-size: cover;" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
select {
   -webkit-appearance: none;
   -moz-appearance: none;
   appearance: none;       /* Remove default arrow */
}
.content-section {
  min-height: calc(85vh);
}

/* Hide scrollbar for Chrome, Safari and Opera */
.activity-cards::-webkit-scrollbar {
  display: none;
}

.community-cards::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE and Edge */
.activity-cards {
  -ms-overflow-style: none;
  scroll-snap-type: x mandatory;
  /* display: flex; */
}

.activity-cards div, .activity-cards a {
  scroll-snap-align: start;
}

.community-cards {
  -ms-overflow-style: none;
  scroll-snap-type: x mandatory;
  /* display: flex; */
}

.community-cards div, .community-cards a {
  scroll-snap-align: start;
}

.activity-cards .card:not(:first-child) {
  margin-left: 5px;
}

.community-cards .card:not(:first-child) {
  margin-left: 12px;
}
.profile-icon-indicator {
  top: -3px;
  right: -3px;
  background-color: #12c9c7;
}
.bg-card {
  background: linear-gradient(0deg, #000000cc, 20%, transparent 50%)
}

</style>

<script>
export default {
  mounted () {
    document.querySelector('meta[name=theme-color]').content = '#fff'
  },
  methods: {
    onChangeLocation (e) {
      console.log(e.currentTarget.blur())
    }
  }
}
</script>
