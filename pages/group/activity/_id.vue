<template>
  <div>
    <div class="container-activity bg-white">
      <Banner />
      <div class="relative content-section w-full py-3 z-20 bg-white">
        <div class="px-24">
          <div class="h-1 bg-gray-300 w-full" />
        </div>
        <TabBar class="sticky top-0 px-6" />
        <div class="pt-1 px-8">
          <div class="rounded-lg bg-gray-100 shadow py-3 px-5 my-6">
            <div class="flex">
              <img class="mx-0 avatar-medium rounded-full" src="/dummy/avatars/1.jpg" alt="" srcset="">
              <div class="text-left ml-3">
                <div class="text-sm font-bold text-primary">
                  Hosted by
                </div>
                <div class="text-primary">
                  Shaamikh Al Hakim
                </div>
              </div>
            </div>
          </div>

          <p class="text-gray-700">
            At vero eos et harum quidem rerum facilis est eligendi optio. cumque nihil ut aut contra sit. aspernatur aut ad modum.
            At vero eos et harum quidem rerum facilis est eligendi optio. cumque nihil ut aut contra sit. aspernatur aut ad modum.
            At vero eos et harum quidem rerum facilis est eligendi optio. cumque nihil ut aut contra sit. aspernatur aut ad modum.
            At vero eos et harum quidem rerum facilis est eligendi optio. cumque nihil ut aut contra sit. aspernatur aut ad modum.
          </p>
          <hr class="mt-3">

        </div>
      </div>
    </div>
    <div class="relative w-full bottom-0 right-0">
      <div class="px-6 bg-white">
        <Button :text="'Gabung'" :isfluid="true" :type="'primary'" />
        <Button :text="'Kembali'" :isfluid="true" :type="'secondary'" :click="() => $router.back()" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.content-section {
  margin-top: -20px;
  border-radius: 20px 20px 0px 0px;
}

.avatar-medium {
  border: 1px solid #cfcfcf;
  height: 52px;
  width: 52px;
}

</style>

<style>
.container-activity {
  height: calc(100vh - 118px) !important;
  overflow-y: scroll;
}
</style>

<script>
import Banner from '../../../components/domain/group/Banner'
import Button from '../../../components/global/buttons/Base'
import TabBar from '../../../components/global/navigations/TabBar'

export default {
  components: {
    Button,
    Banner,
    TabBar
  },
  mounted () {
    document.querySelector('meta[name=theme-color]').content = '#fff'
  }
}
</script>
