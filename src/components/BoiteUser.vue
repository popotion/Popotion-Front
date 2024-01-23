<script setup lang="ts">
import type { User } from '@/types'
const props = defineProps<{ user: User }>()
</script>

<template>
  <div class="contentBox">
    <div class="top">Profil de {{ user.login }}</div>
    <div class="content">
      <div class="group">
        <label>Login</label>
        <input :value="user.login" />
      </div>
      <div class="group">
        <label>Adresse e-mail</label>
        <input :value="user.adresseEmail" />
      </div>
    </div>
  </div>
</template>
