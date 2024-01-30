import { defineStore } from 'pinia'


export const changeLanguages = defineStore('changeLanguages', {
    state: () => ({
        languages : ['اردو', 'العربية' ],
        index: 0
    }),
    getters: {
        currentLanguage() {
            return this.languages[this.index];
        },
        nextLanguage() {
          if (this.index === 1) {
            this.index = -1
          }
            return this.languages[this.index + 1];
        }
    },
    actions: {
        switchLanguage() {
          if (this.index >= this.languages.length - 1) {
            this.index = -1;
          }
          this.index = this.index + 1;
        },

        getSvg(svg) {
          return (svg === "menu") ? require("../../public/img/svg/menu.svg") : null;
        },
      }
})

