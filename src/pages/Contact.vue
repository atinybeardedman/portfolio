<template>
  <Layout>
    <section class="full-height">
      <div class="container">
          <h2>Contact Me</h2>
        <form @submit.prevent="submitForm($event)" method="post" netlify v-if="!submitted">
          <div class="input-wrapper" v-for="(field, index) in fields" :key="index">
            <label :for="field.name">{{field.name}}</label>
            <input v-if="field.tag === 'input'" v-model="fields[index].value" :class="{error: field.hasError}" :type="field.type" :name="field.name" :id="field.name">
            <textarea v-else v-model="fields[index].value" :class="{error: field.hasError}" :type="field.type" :name="field.name" :id="field.name"></textarea>
          </div>
         
          <button class="button" type="submit" :disabled="loading">Submit</button>
        </form>
        <div v-else>
            Thanks!
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  data(){
      return {
          fields: [
              {
                  name: 'name',
                  value: null,
                  tag: 'input',
                  type:"text",
                  hasError: false,
                  validators: [this.required]
              },
              {
                  name: 'subject',
                  value: null,
                  tag: 'input',
                  type: 'text',
                  hasError: false,
                  validators: [this.required]
              },
              {
                  name: 'email',
                  value: null,
                  tag: 'input',
                  type: 'email',
                  hasError: false,
                  validators: [this.required, this.validateEmail]
              },
              {
                  name: 'message',
                  value: null,
                  tag: 'textarea',
                  hasError: false,
                  validators: [this.required]
              },

          ],
          loading: false,
          submitted: false
      }
  },
  methods: {
    submitForm(e) {
      if(this.validateForm()){
          this.loading = true;
          // TODO: send real post request
          setTimeout(() => {
              this.loading = false;
              this.submitted = true;
          }, 1000);
      }
    },
    validateForm(){
        let isValid = true;
        this.fields = this.fields.map(field => {
            field.hasError = !field.validators.every(fn => fn(field.value));
            if(field.hasError){
                isValid = false;
            }
            return field
        });

        return isValid
    },
    required(value){
        return value ? value.trim() !== '' : false
    },
     validateEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  },
};
</script>

<style scoped>

section {
    padding: 2em 20%;
}

form{
    width: 90vw;
    max-width: 600px;
}
.input-wrapper {
    width: 100%;
    display:flex;
    justify-content: space-between;
    margin-bottom: 1rem;
}

label {
    flex: 0 1 25%;
    padding: 0.5em 1em;
    font-family: Maven Pro;
    font-weight: 500;
    text-transform: capitalize;
}

textarea {
    padding: 0.5em 1em;
}

input, textarea {
    flex: 1 0 75%;
    outline:none;
    font-size: 1rem;
    border-radius: 4px;
    padding: 0 1rem;
    font-family: Roboto;
}

input.error, textarea.error {
    border: 2px red solid;
}

.button {
    font-size: 20px;
    cursor: pointer;
}
</style>