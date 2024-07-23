<script setup lang="ts">
import { FormKit } from '@formkit/vue'
import axios from 'axios'
import { ref } from 'vue'

type FormData = {
  name: string
  email: string
  comments: string
}

const success = ref(false)

function sendForm(formData: FormData) {
  //console.log(formData)

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
      //console.log(response.data)
      success.value = true
    })
    .catch((error) => {
      console.error(error)
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
          @submit="sendForm($event)"
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
