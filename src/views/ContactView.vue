<script setup lang="ts">
import { FormKit } from '@formkit/vue'
import axios from 'axios'

type FormData = {
  name: string
  email: string
  comments: string
}

function sendForm(formData: FormData) {
  console.log(formData)

  const airtableUrl = 'https://api.airtable.com/v0/appyakULO8J61yyOn/tblF1CQMhtRuqCO8E'
  const airtableApiKey = process.env.VITE_AIRTABLE_API_KEY

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
        <FormKit
          id="contact-form"
          type="form"
          :submit-attrs="{
            inputClass: 'form-button'
          }"
          @submit="sendForm($event)"
        >
          <FormKit type="text" label="Name" name="name" validation="required" />
          <FormKit type="email" label="Email" name="email" validation="required|email" />
          <FormKit type="textarea" label="Comments" name="comments" validation="required" />
        </FormKit>
      </div>
    </div>
  </div>
</template>
