<template>

    
    <div>
      <!-- File input Icon -->
      <div class="icon">
        <h1><v-icon size="150">mdi-file-code</v-icon></h1>
      </div>
      <!-- File input button -->
      <v-btn @click="triggerFileInput" color="blue" variant="outlined" >
        Choose File
      </v-btn>
      <!-- Hidden file input element -->
      <input
        ref="fileInput"
        type="file"
        multiple
        style="display: none"
        @change="handleFileChange"
      />

      <!-- Display selected files with delete option -->
      <div v-if="files.length" class="file-list">
        <v-chip
          v-for="(file, index) in files"
          :key="file.name"
          class="me-2"
          color="red"
          size="small"
          label
        >
          {{ file.name }}
          <!-- Delete button -->
          <v-icon
            class="ms-2"
            @click.stop="removeFile(index)"
            color="white"
           
          >
            mdi-close
          </v-icon>
        </v-chip>
        <span v-if="files.length > 2" class="text-overline text-grey-darken-3 mx-2">
          +{{ files.length - 2 }} File(s)
        </span>
      </div>
    </div>
    
  </template>
  
  <script>
  export default {
    data() {
      return {
        files: [],
      }
    },
    methods: {
      triggerFileInput() {
        this.$refs.fileInput.click();
      },
      handleFileChange(event) {
        const fileList = event.target.files;
        this.files = Array.from(fileList);
      },
      removeFile(index) {
        this.files.splice(index, 1);
      },
    },
  }
  </script>
  
  <style scoped>
  .file-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .icon {
    margin-bottom: 20px;
  }

  </style>
  