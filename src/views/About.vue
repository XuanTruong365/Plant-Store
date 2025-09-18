<template>
  <div class="min-h-screen bg-gradient-to-b from-green-50 to-white">
    <!-- Hero -->
    <section class="text-center py-16 px-6">
      <h1 class="text-4xl md:text-5xl font-bold text-green-700">Liên hệ với TruongDev</h1>
      <p class="mt-4 text-gray-600 max-w-2xl mx-auto">
        Chúng tôi luôn sẵn sàng tư vấn và giúp bạn chọn cây phù hợp cho ngôi nhà 🌿
      </p>
      <button
          class="mt-6 px-8 py-3 bg-green-600 text-white rounded-full shadow hover:bg-green-700 transition"
      >
        Nhắn ngay qua Messenger
      </button>
    </section>

    <!-- Contact Info + Form -->
    <section class="container mx-auto px-6 grid md:grid-cols-2 gap-10 mb-16">
      <!-- Info -->
      <div class="flex flex-col gap-6">
        <div class="bg-white p-6 rounded-2xl shadow flex items-center gap-4">
          <span class="text-green-600 text-2xl">📍</span>
          <div>
            <h2 class="font-semibold text-lg">Địa chỉ</h2>
            <p class="text-gray-600">123 Đường Xanh, Quận Plant, TP. HCM</p>
          </div>
        </div>
        <div class="bg-white p-6 rounded-2xl shadow flex items-center gap-4">
          <span class="text-green-600 text-2xl">📞</span>
          <div>
            <h2 class="font-semibold text-lg">Hotline</h2>
            <p class="text-gray-600"><a href="tel:+84123456789">+84 123 456 789</a></p>
          </div>
        </div>
        <div class="bg-white p-6 rounded-2xl shadow flex items-center gap-4">
          <span class="text-green-600 text-2xl">✉️</span>
          <div>
            <h2 class="font-semibold text-lg">Email</h2>
            <p class="text-gray-600">support@plantique.com</p>
          </div>
        </div>
        <div class="flex gap-4 mt-2">
          <a href="#" class="w-10 h-10 flex items-center justify-center bg-green-100 rounded-full hover:bg-green-200">💬</a>
          <a href="#" class="w-10 h-10 flex items-center justify-center bg-green-100 rounded-full hover:bg-green-200">📷</a>
          <a href="#" class="w-10 h-10 flex items-center justify-center bg-green-100 rounded-full hover:bg-green-200">🟦</a>
        </div>
      </div>

      <!-- Lead Form -->
      <form class="bg-white p-8 rounded-2xl shadow-lg flex flex-col gap-4">
        <h2 class="text-2xl font-bold text-green-700 mb-4">Nhận tư vấn miễn phí 🌱</h2>
        <input
            type="text"
            placeholder="Tên của bạn"
            class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400"
        />
        <input
            type="tel"
            placeholder="Số điện thoại"
            class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400"
        />
        <textarea
            rows="4"
            placeholder="Bạn muốn tư vấn loại cây nào?"
            class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400"
        ></textarea>
        <div class="flex items-center gap-2 text-sm">
          <input type="checkbox" id="subscribe" class="rounded text-green-600" />
          <label for="subscribe" class="text-gray-600">Nhận ưu đãi 10% cho đơn đầu tiên</label>
        </div>
        <button
            type="submit"
            class="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition"
        >
          Gửi yêu cầu
        </button>
      </form>
    </section>

    <!-- Google Map -->
    <section class="w-full">
      <div class="w-full h-[400px] md:h-[500px] lg:h-[600px]">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14897.724406362322!2d105.77638958715822!3d21.015429799999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab68e8d0799b%3A0xd852d6c59347d451!2zVGnhu4dtIGPDonkgWGFuaCBWaWJlcw!5e0!3m2!1svi!2s!4v1758213626330!5m2!1svi!2s"
            class="w-full h-full border-0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>

  </div>
</template>

<script setup>
</script>
