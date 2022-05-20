import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  // this is supposed to be done with dynamic import
  messages: {
    en: {
      fields: {
        password: 'password',
        email: 'email',
      },
      validation: {
        min: 'The {_field_} field must be at least {length} characters',
        required: 'The {_field_} field is required',
        integer: 'The {_field_} field must be an integer',
        email: 'The {_field_} field must be a valid email',
      },
    },
    ja: {
      fields: {
        password: 'パスワード',
        email: 'メールアドレス',
      },
      validation: {
        min: '{_field_}は{length}文字以上でなければなりません',
        required: '{_field_}は必須項目です',
        integer: '{_field_}は整数のみ使用できます',
        email: '{_field_}は有効なメールアドレスではありません',
      },
    },
  },
})
