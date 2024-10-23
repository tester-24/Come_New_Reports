const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: "b6bh2b",
  //projectId: "m4t5cs",
  //projectId: "v4584h", 
  e2e: {
         //projectId: "m4t5cs",
          setupNodeEvents(on, config) {
      // node event listeners
     
    },
   // baseUrl: 'https://comet.jainam.in/#/startup',
  },
});

