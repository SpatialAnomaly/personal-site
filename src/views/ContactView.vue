<script setup lang="ts">
import { FormKit } from '@formkit/vue'
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="column-6 column-md-6">
        <h1>Contact</h1>
      </div>
    </div>
    <div class="row">
      <div class="column-6 column-md-6">
        <FormKit
          type="form"
          :submit-attrs="{
            inputClass: 'form-button'
          }"
        >
          <FormKit type="text" label="Name" validation="required" />
          <FormKit type="email" label="Email" validation="required" />
          <FormKit type="textarea" label="Comments" validation="required" />
        </FormKit>
      </div>
    </div>
  </div>
</template>
