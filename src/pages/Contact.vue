<template>
  <Layout>
    <section class="full-height flex-center-all">
      <div class="container">
        <h2 class="title text-centered">Contact Me</h2>
        <div class="container flex space-evenly">
          <a
            v-for="(hex, index) in hexagons"
            :key="index"
            target="_blank"
            :href="hex.href"
          >
            <Hexagon v-bind="hexConfig">
              <font-awesome-icon :icon="hex.icon" size="2x"></font-awesome-icon>
            </Hexagon>
          </a>
        </div>
        <form
          @submit.prevent="submitForm($event)"
          method="post"
          netlify
          v-if="!submitted"
        >
          <div
            class="input-wrapper"
            v-for="(field, index) in fields"
            :key="index"
          >
            <label :for="field.name" class="flex-center-all">
              <font-awesome-icon :icon="field.icon"></font-awesome-icon>
            </label>
            <input
              v-if="field.tag === 'input'"
              :placeholder="field.name"
              v-model="fields[index].value"
              :class="{ error: field.hasError }"
              :type="field.type"
              :name="field.name"
              :id="field.name"
            />
            <textarea
              v-else
              v-model="fields[index].value"
              :placeholder="field.name"
              :class="{ error: field.hasError }"
              :type="field.type"
              :name="field.name"
              :id="field.name"
            ></textarea>
          </div>

          <button class="button" type="submit" :disabled="loading">
            Submit
          </button>
        </form>
        <div v-else>Thanks!</div>
      </div>
    </section>
  </Layout>
</template>

<script>
import Hexagon from "~/components/Hexagon.vue";
export default {
  components: {
    Hexagon,
  },
  data() {
    return {
      fields: [
        {
          name: "Name",
          icon: ["far", "user"],
          value: null,
          tag: "input",
          type: "text",
          hasError: false,
          validators: [this.required],
        },
        {
          name: "Email",
          icon: ["far", "envelope"],
          value: null,
          tag: "input",
          type: "email",
          hasError: false,
          validators: [this.required, this.validateEmail],
        },
        {
          name: "Message",
          icon: ["far", "comment"],
          value: null,
          tag: "textarea",
          hasError: false,
          validators: [this.required],
        },
      ],
      loading: false,
      submitted: false,
      hexConfig: {
        styles: {
        color: "white",
        background: "#6923CC",
        },
        border: {
          size: '2px',
        color: "white",
        },
        sizes: {
           default: '100px',
          mobile: '75px'
        },
        hoverable: true
      },
      hexagons: [
        {
          icon: ["fab", "github"],
          href: "https://github.com/atinybeardedman",
        },
        {
          icon: ["fab", "linkedin"],
          href: "https://www.linkedin.com/in/sean-dickinson-3a32a295/",
        },
        {
          icon: ["far", "envelope"],
          href: "mailto:contact@seandickinson.dev",
        },
      ],
    };
  },
  methods: {
    submitForm(e) {
      if (this.validateForm()) {
        this.loading = true;
        // TODO: send real post request
        setTimeout(() => {
          this.loading = false;
          this.submitted = true;
        }, 1000);
      }
    },
    validateForm() {
      let isValid = true;
      this.fields = this.fields.map((field) => {
        field.hasError = !field.validators.every((fn) => fn(field.value));
        if (field.hasError) {
          isValid = false;
        }
        return field;
      });

      return isValid;
    },
    required(value) {
      return value ? value.trim() !== "" : false;
    },
    validateEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
};
</script>

<style scoped>
form {
  width: 90vw;
  max-width: 600px;
}
.input-wrapper {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1rem;
}

label {
  flex: 0 1 3em;
  padding: 0.5em 1em;
  font-family: Maven Pro;
  font-weight: 500;
  text-transform: capitalize;
  background: #6923cc;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

input,
textarea {
  flex: 1 0 75%;
  outline: none;
  font-size: 1rem;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  padding: 0 1rem;
  font-family: Roboto;
  border: none;
}

textarea {
  padding: 1em;
  resize: none;
  overflow: hidden;
  height: 5em;
}

input.error,
textarea.error {
  border: 2px red solid;
}

.button {
  font-size: 20px;
  cursor: pointer;
}
</style>