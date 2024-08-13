<script setup lang="ts">
import { FormKit } from '@formkit/vue'
import axios from 'axios'
import { VueReCaptcha, useReCaptcha } from 'vue-recaptcha-v3'
import { ref } from 'vue'
import { exit } from 'process'

type FormData = {
  name: string
  email: string
  comments: string
}

const success = ref(false)

const { executeRecaptcha, recaptchaLoaded } = useReCaptcha()

// express?
// serverless functions

function postToAirtable(formData: FormData) {
  const airtableUrl = 'https://api.airtable.com/v0/appyakULO8J61yyOn/tblF1CQMhtRuqCO8E'
  const airtableApiKey = import.meta.env.VITE_AIRTABLE_API_KEY
  axios
    .post(
      airtableUrl,
      {
        records: [
          {
            fields: {
              Name: formData.name,
              Email: formData.email,
              Message: formData.comments
            }
          }
        ]
      },
      {
        headers: {
          Authorization: `Bearer ${airtableApiKey}`
        }
      }
    )
    .then((response) => {
      console.log(response.data)
      success.value = true
    })
    .catch((error) => {
      console.error(error)
    })
}

async function handleSubmit(formData: FormData) {
  //console.log(formData)
  await recaptchaLoaded()
  const token = await executeRecaptcha('contact')

  axios
    .post('http://localhost:4000/verify-recaptcha', {
      action: 'contact',
      token
    })
    .then((response) => {
      console.log(response.data)
      if (response.data.success) {
        postToAirtable(formData)
      } else {
        alert('You are bot')
      }
    })
}
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
        <div class="success-msg" v-if="success">
          <p><strong>Success!</strong> Your message has been sent. Thank you!</p>
        </div>
        <FormKit
          id="contact-form"
          type="form"
          :submit-attrs="{
            inputClass: 'form-button'
          }"
          @submit="handleSubmit($event)"
          v-if="!success"
        >
          <FormKit type="text" label="Name" name="name" validation="required" />
          <FormKit type="email" label="Email" name="email" validation="required|email" />
          <FormKit type="textarea" label="Comments" name="comments" validation="required" />
        </FormKit>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
