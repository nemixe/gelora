<template>
  <div>
    <Banner />
    <div class="relative content-section w-full py-3 z-20 bg-white">
      <div class="px-24 md:px-32 lg:px-64">
        <div class="h-1 bg-gray-300 w-full"></div>
      </div>
      <div class="content-container pt-1 pb-5 px-10">
        <TabBar class="sticky top-0"/>
        <div class="rounded-lg bg-gray-100 shadow py-3 px-5 my-6">
          <div class="flex">
            <img class="mx-0 avatar-medium rounded-full" src="dummy/avatars/1.jpg" alt="" srcset="">
            <div class="text-left ml-3">
              <div class="text-sm font-bold text-primary">Hosted by</div>
              <div class="text-primary">Shaamikh Al Hakim</div>
            </div>
          </div>
        </div>

        <p class="text-gray-700">
          At vero eos et harum quidem rerum facilis est eligendi optio. cumque nihil ut aut contra sit. aspernatur aut ad modum.
          At vero eos et harum quidem rerum facilis est eligendi optio. cumque nihil ut aut contra sit. aspernatur aut ad modum.
          At vero eos et harum quidem rerum facilis est eligendi optio. cumque nihil ut aut contra sit. aspernatur aut ad modum.
          At vero eos et harum quidem rerum facilis est eligendi optio. cumque nihil ut aut contra sit. aspernatur aut ad modum.
        </p>
        <hr class="mb-24 mt-3">

        <div class="w-full">
          <div class="fixed right-0 w-full px-10 bottom-0">
            <div class="md:mx-64 bg-white">
              <Button :text="'Gabung'" :isfluid="true" :type="'primary'" />
              <Button :text="'Kembali'" :isfluid="true" :type="'secondary'" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.content-section {
  margin-top: -20px;
  border-radius: 20px 20px 0px 0px;
  min-height: calc(55vh + 20px);
}

.avatar-medium {
  border: 1px solid #cfcfcf;
  height: 52px;
  width: 52px;
}

</style>

<script>
import Banner from '../../components/pages/group/Banner'
import Button from '../../components/buttons/Base'
import TabBar from '../../components/navigations/TabBar'

export default {
  components: {
    Button,
    Banner,
    TabBar
  }
}
</script>

