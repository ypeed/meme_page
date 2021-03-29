<template>
  <div class="max-w-5xl flex justify-between mx-auto border border-red-900">

      <div class="ml-3  w-3/5 screen bg-green-100">
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
        <h1>hdhdhdhd</h1>
      </div>

      <div class="sticky top-0 w-2/5 pt-16 p-3 h-screen">
        <div class="flex-col p-3 bg-white rounded-md shadow-lg">
          <h1 class="font-sans text-xl font-medium text-gray-700 ">Create new meme</h1>
          <div>
            <label class="block pt-4">
              <span class="block text-sm font-medium text-gray-700">Title</span>
              <input type="text" class="rounded-md mt-1 block w-full sm:text-sm h-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10" placeholder="Title of the meme">
            </label>
          </div>
          <div>
              <label class="block text-sm pt-3 font-medium text-gray-700">
                Cover photo
              </label>
              <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div class="space-y-1 text-center">
                  <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div class="flex text-sm text-gray-600">
                    <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-pink-500 hover:text-pink-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-pink-500">
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" class="sr-only">
                    </label>
                    <p class="pl-1">or drag and drop</p>
                  </div>
                  <p class="text-xs text-gray-500">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
          </div>

          <div class="text-center">
            <button class="border-2 border-pink-500 rounded-md px-2 py-2 mt-4 w-full text-base font-medium text-gray-700 hover:border-transparent hover:bg-pink-500 hover:text-white focus:outline-none">Post</button>
          </div>

        </div>
      </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        "prvi",
        "drugi",
        "tretji",
        "prvi",
        "drugi",
        "tretji",
        "prvi",
        "drugi",
        "tretji",
        "prvi",
        "drugi",
        "tretji",
        "prvi",
        "drugi",
        "tretji",
        "prvi",
        "drugi",
        "tretji",
        "prvi",
        "drugi",
        "tretji",
        "prvi",
        "drugi",
        "tretji",
        "prvi",
        "drugi",
        "tretji",
        "prvi",
        "drugi",
        "tretji",
        "prvi",
        "drugi",
        "tretji",
        "prvi",
        "drugi",
        "tretji",
        "prvi",
        "drugi",
        "tretji",
        "prvi",
        "drugi",
        "tretji",
        "prvi",
        "drugi",
        "tretji",
        "prvi",
        "drugi",
        "tretji",
        "prvi",
        "drugi",
        "tretji",
        "prvi",
        "drugi",
        "tretji",
        "prvi",
        "drugi",
        "tretji",
        "prvi",
        "drugi",
        "tretji",
        "prvi",
        "drugi",
        "tretji",
        "prvi",
        "drugi",
        "tretji",
        "prvi",
        "drugi",
        "tretji",
        "prvi",
        "drugi",
        "tretji",
      ]
    }
  }
}
</script>

<style>

</style>