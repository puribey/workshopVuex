<template>
    <v-card>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-card-title>
            <span class="headline">New Game</span>
        </v-card-title>
        <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12>
                  <v-text-field 
                  v-model="title"
                  label="Title"
                  :rules="titleRules"
                  required
                  color="deep-purple lighten-2"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-select
                    v-model="selectType"
                    :items= "[
                        'Strategy',
                        'Party',
                        'Worker Placement',
                        'Competitive',
                        'Cooperative'
                    ]"
                    :rules="[v => !!v || 'Type is required']"
                    label="Type"
                    required
                    color="deep-purple lighten-2"
                  ></v-select>
                </v-flex>
                <v-flex xs12>
                  <v-select
                    v-model="selectPoints"
                    :items="[1, 2, 3, 4, 5]"
                    label="Points"
                    required
                    color="deep-purple lighten-2"
                  ></v-select>
                </v-flex>
                <v-flex xs12>
                   <v-text-field
                   v-model="description"
                   label="Descrption"
                   :rules="descriptionRules"
                   required
                   color="deep-purple lighten-2"></v-text-field>
                </v-flex>
                <small class="deep-purple--text lighten-2">*indicates required field</small>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="deep-purple lighten-2" flat @click="handleClickModal()">Close</v-btn>
            <v-btn color="deep-purple lighten-2" flat @click.native="dialog = false" type="submit">Save</v-btn>
            <v-btn color="deep-purple lighten-2" flat @click.native="dialog = false" type="reset">Reset</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
</template>

<script>

export default {
  name: "AddGame",
  props: {},
  data() {
    return {
      valid: true,
      title: "",
      titleRules: [
        v => !!v || "Title is required",
      ],
      selectType: null,
      selectPoints: null,
      description: "",
      descriptionRules: [
        v => !!v || "Description is required",
        v => (v && v.length > 10) || 'Description must be more than 10 characters'
      ]
    };
  },
  methods: {
    handleClickModal() {
      this.$emit("onCloseModal");
    },
    submit() {
      
    },
    clear() {
      this.$refs.form.reset();
    }
  }
};
</script>

<style scoped>
</style>