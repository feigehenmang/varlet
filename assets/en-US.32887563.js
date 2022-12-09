import{_ as e,p as c,f as r,h as p,M as a,q as n,S as t,as as h,P as s}from"./vue-router.esm-bundler.a03b8b02.js";const o={components:{}},d={class:"varlet-site-doc"},j=a("h1",null,"Form",-1),i=a("div",{class:"card"},[a("h3",null,"Intro"),a("p",null,"Provides the ability to control all form components.")],-1),m={class:"card"},g=a("h3",null,"Form Example",-1),u=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` formData = reactive({
  `),a("span",{class:"hljs-attr"},"username"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
  `),a("span",{class:"hljs-attr"},"password"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
  `),a("span",{class:"hljs-attr"},"department"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
  `),a("span",{class:"hljs-attr"},"gender"),s(": "),a("span",{class:"hljs-literal"},"undefined"),s(`,
  `),a("span",{class:"hljs-attr"},"license"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
  `),a("span",{class:"hljs-attr"},"range"),s(": "),a("span",{class:"hljs-number"},"10"),s(`,
  `),a("span",{class:"hljs-attr"},"count"),s(": "),a("span",{class:"hljs-number"},"0"),s(`,
  `),a("span",{class:"hljs-attr"},"group"),s(`: [],
  `),a("span",{class:"hljs-attr"},"score"),s(": "),a("span",{class:"hljs-number"},"0"),s(`,
  `),a("span",{class:"hljs-attr"},"like"),s(`: [],
  `),a("span",{class:"hljs-attr"},"files"),s(`: []
})
`),a("span",{class:"hljs-keyword"},"const"),s(" form = ref("),a("span",{class:"hljs-literal"},"null"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" disabled = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" readonly = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-form"),s(),a("span",{class:"hljs-attr"},"ref"),s("="),a("span",{class:"hljs-string"},'"form"'),s(),a("span",{class:"hljs-attr"},":disabled"),s("="),a("span",{class:"hljs-string"},'"disabled"'),s(),a("span",{class:"hljs-attr"},":readonly"),s("="),a("span",{class:"hljs-string"},'"readonly"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-space"),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"column"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"[14, 0]"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-input"),s(`
        `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Please input username"'),s(`
        `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[v => !!v || 'The username cannot be empty']"`),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formData.username"'),s(`
      />`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-input"),s(`
        `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"password"'),s(`
        `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Please input password"'),s(`
        `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[v => !!v || 'The password cannot be empty']"`),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formData.password"'),s(`
      />`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-select"),s(`
        `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Please select department"'),s(`
        `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[v => !!v || 'The select cannot be empty']"`),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formData.department"'),s(`
      >`)]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Eat department"'),s("  />")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Sleep department"'),s("  />")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Play game department"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-select"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-select"),s(`
        `),a("span",{class:"hljs-attr"},"multiple"),s(`
        `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Please select group"'),s(`
        `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[v => v.length >= 1 || 'The select cannot be empty']"`),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formData.group"'),s(`
      >`)]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Eat group"'),s("  />")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Sleep group"'),s("  />")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Play game group"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-select"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-radio-group"),s(`
        `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[v => !!v || 'The gender cannot be empty']"`),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formData.gender"'),s(`
      >`)]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-radio"),s(),a("span",{class:"hljs-attr"},":checked-value"),s("="),a("span",{class:"hljs-string"},'"1"'),s(">")]),s("Male"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-radio"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-radio"),s(),a("span",{class:"hljs-attr"},":checked-value"),s("="),a("span",{class:"hljs-string"},'"2"'),s(">")]),s("Female"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-radio"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-radio-group"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-checkbox-group"),s(`
        `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[v => v.length > 0 || 'The select cannot be empty']"`),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formData.like"'),s(`
      >`)]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-checkbox"),s(),a("span",{class:"hljs-attr"},":checked-value"),s("="),a("span",{class:"hljs-string"},'"1"'),s(">")]),s("Eat"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-checkbox"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-checkbox"),s(),a("span",{class:"hljs-attr"},":checked-value"),s("="),a("span",{class:"hljs-string"},'"2"'),s(">")]),s("Sleep"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-checkbox"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-checkbox"),s(),a("span",{class:"hljs-attr"},":checked-value"),s("="),a("span",{class:"hljs-string"},'"3"'),s(">")]),s("Play game"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-checkbox"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-checkbox-group"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-rate"),s(`
        `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[v => v >= 3 || 'It has to be greater than 2']"`),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formData.score"'),s(`
      />`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-switch"),s(`
        `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[v => !!v || 'You must turn on']"`),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formData.license"'),s(`
      />`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-counter"),s(`
        `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[v => v > 10 || 'It has to be greater than 10']"`),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formData.count"'),s(`
      />`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-slider"),s(`
        `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[v => v > 10 || 'It has to be greater than 10']"`),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formData.range"'),s(`
      />`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-uploader"),s(`
        `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[v => v.length >= 1 || 'Upload at least one picture']"`),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formData.files"'),s(`
      />`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-form"),s(">")]),s(`
  
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-space"),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"column"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"[14, 0]"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"block"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"danger"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"form.reset()"'),s(">")]),s(`
      Empty form
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"block"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"form.resetValidation()"'),s(">")]),s(`
      Empty the validation
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"block"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"success"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"form.validate()"'),s(">")]),s(`
      Trigger validation
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"block"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"info"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"disabled = !disabled"'),s(">")]),s(`
      Form disabled
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"block"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"readonly = !readonly"'),s(">")]),s(`
      Form readonly
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),v={class:"card"},b=a("h3",null,"Custom Form Component",-1),f=a("p",null,"If you want to customize the component and access the ability of the form component, the case is as follows.",-1),y=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Form } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { nextTick } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` props = defineProps({
  `),a("span",{class:"hljs-attr"},"modelValue"),s(`: {
    `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-built_in"},"Boolean"),s(`
  },
  `),a("span",{class:"hljs-attr"},"disabled"),s(`: {
    `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-built_in"},"Boolean"),s(`,
    `),a("span",{class:"hljs-attr"},"default"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`
  },
  `),a("span",{class:"hljs-attr"},"readonly"),s(`: {
    `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-built_in"},"Boolean"),s(`,
    `),a("span",{class:"hljs-attr"},"default"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`
  },
  `),a("span",{class:"hljs-attr"},"rules"),s(`: {
    `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-built_in"},"Array"),s(`
  },
  `),a("span",{class:"hljs-attr"},"validateTrigger"),s(`: {
    `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-built_in"},"Array"),s(`,
    `),a("span",{class:"hljs-attr"},"default"),s(": "),a("span",{class:"hljs-function"},"() =>"),s(" ["),a("span",{class:"hljs-string"},"'onToggle'"),s(`]
  },
  `),a("span",{class:"hljs-attr"},"extraMessage"),s(`: {
    `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-built_in"},"String"),s(`
  }
})

`),a("span",{class:"hljs-keyword"},"const"),s(" emit = defineEmits(["),a("span",{class:"hljs-string"},"'update:modelValue'"),s(`])

`),a("span",{class:"hljs-keyword"},"const"),s(` { useForm, useValidation } = Form
`),a("span",{class:"hljs-keyword"},"const"),s(" { errorMessage, "),a("span",{class:"hljs-attr"},"validateWithTrigger"),s(": _validateWithTrigger, "),a("span",{class:"hljs-attr"},"validate"),s(`: _validate, resetValidation } = useValidation()
`),a("span",{class:"hljs-keyword"},"const"),s(` { bindForm, form } = useForm()

`),a("span",{class:"hljs-keyword"},"const"),s(" reset = "),a("span",{class:"hljs-function"},"() =>"),s(` {
  emit(`),a("span",{class:"hljs-string"},"'update:modelValue'"),s(", "),a("span",{class:"hljs-literal"},"false"),s(`)
  resetValidation()
}

`),a("span",{class:"hljs-keyword"},"const"),s(" validate = "),a("span",{class:"hljs-function"},"() =>"),s(` _validate(props.rules, props.modelValue)

`),a("span",{class:"hljs-keyword"},"const"),s(" validateWithTrigger = "),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"trigger"),s(") =>")]),s(` {
  nextTick(`),a("span",{class:"hljs-function"},"() =>"),s(` {
    `),a("span",{class:"hljs-keyword"},"const"),s(` { validateTrigger, rules, modelValue } = props
    _validateWithTrigger(validateTrigger, trigger, rules, modelValue)
  })
}

`),a("span",{class:"hljs-keyword"},"const"),s(" handleClick = "),a("span",{class:"hljs-function"},"() =>"),s(` {
  `),a("span",{class:"hljs-keyword"},"if"),s(` (
    props.readonly ||
    props.disabled ||
    form?.readonly.value ||
    form?.disabled.value
  ) {
    `),a("span",{class:"hljs-keyword"},"return"),s(`
  }

  emit(`),a("span",{class:"hljs-string"},"'update:modelValue'"),s(`, !props.modelValue)
  validateWithTrigger(`),a("span",{class:"hljs-string"},"'onToggle'"),s(`)
}

`),a("span",{class:"hljs-keyword"},"const"),s(` apis = {
  reset,
  validate,
  resetValidation
}

defineExpose(apis)
bindForm?.(apis)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(`
    `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"var-custom-form-component"'),s(`
    `),a("span",{class:"hljs-attr"},":class"),s("="),a("span",{class:"hljs-string"},`"{
      'var-custom-form-component--disabled': disabled || form?.disabled.value,
      'var-custom-form-component--error': errorMessage,
    }"`),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"var-custom-form-component__container"'),s("  @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"handleClick"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(`
        `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"var-custom-form-component__icon"'),s(`
        `),a("span",{class:"hljs-attr"},":name"),s("="),a("span",{class:"hljs-string"},`"modelValue ? 'checkbox-marked-circle' : 'close-circle'"`),s(`
        `),a("span",{class:"hljs-attr"},":transition"),s("="),a("span",{class:"hljs-string"},'"250"'),s(`
      />`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"slot"),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-form-details"),s(),a("span",{class:"hljs-attr"},":error-message"),s("="),a("span",{class:"hljs-string"},'"errorMessage"'),s(),a("span",{class:"hljs-attr"},":extra-message"),s("="),a("span",{class:"hljs-string"},'"extraMessage"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".var-custom-form-component"),s(` {
  `),a("span",{class:"hljs-attribute"},"cursor"),s(`: pointer;
}

`),a("span",{class:"hljs-selector-class"},".var-custom-form-component__container"),s(` {
  `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
  `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
}

`),a("span",{class:"hljs-selector-class"},".var-custom-form-component__icon"),s(` {
  `),a("span",{class:"hljs-attribute"},"margin-right"),s(": "),a("span",{class:"hljs-number"},"6px"),s(`;
  `),a("span",{class:"hljs-attribute"},"font-size"),s(": "),a("span",{class:"hljs-number"},"24px"),s(`;
}

`),a("span",{class:"hljs-selector-class"},".var-custom-form-component--disabled"),s(` {
  `),a("span",{class:"hljs-attribute"},"color"),s(": "),a("span",{class:"hljs-built_in"},"var"),s(`(--color-text-disabled);
  `),a("span",{class:"hljs-attribute"},"cursor"),s(`: not-allowed;
}

`),a("span",{class:"hljs-selector-class"},".var-custom-form-component--error"),s(` {
  `),a("span",{class:"hljs-attribute"},"color"),s(": "),a("span",{class:"hljs-built_in"},"var"),s(`(--color-danger);
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),_=h('<h2>API</h2><div class="card"><h3>Props</h3><h4>Form Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>readonly</code></td><td>Whether the readonly</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>Whether the disabled</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table><h4>FormDetails Props</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>error-message</code></td><td>\u9519\u8BEF\u4FE1\u606F</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>extra-message</code></td><td>\u9644\u52A0\u4FE1\u606F</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Methods</h3><h4>Form Methods</h4><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>validate</code></td><td>Trigger validation for all form components</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>Clear the validation messages for all form components</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>Clears all form component bindings of values and validation messages</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><h4>Form Slots</h4><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Form content</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><h4>FormDetails Variables</h4><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--form-details-error-message-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--form-details-extra-message-color</code></td><td><code>#888</code></td></tr><tr><td><code>--form-details-margin-top</code></td><td><code>6px</code></td></tr><tr><td><code>--form-details-font-size</code></td><td><code>12px</code></td></tr><tr><td><code>--form-details-message-margin-right</code></td><td><code>4px</code></td></tr></tbody></table></div>',5);function k(w,x,V,T,D,F){const l=c("var-site-code-example");return r(),p("div",d,[j,i,a("div",m,[g,n(l,null,{default:t(()=>[u]),_:1})]),a("div",v,[b,f,n(l,{"playground-ignore":""},{default:t(()=>[y]),_:1})]),_])}const S=e(o,[["render",k]]);export{S as default};
