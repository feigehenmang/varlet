# Image

### Intro

Components provide more convenient size, fill mode, rounded corner Settings,
ripple effect enhanced picture click interactive experience.
Supports `Lazy load`, `loading images`, `error images`, and default Settings for applying Lazy instructions.

### Basic Use

```html
<template>
  <var-image src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
</template>
```

### Fit Mode

```html
<template>
  <var-space :size="[20, 20]">
    <var-image
      width="85px"
      height="85px"
      src="https://varlet.gitee.io/varlet-ui/cat.jpg"
    />
    <var-image 
      width="85px" 
      height="85px"
      fit="cover" 
      src="https://varlet.gitee.io/varlet-ui/cat.jpg" 
    />

    <var-image 
      width="85px"
      height="85px" 
      fit="contain"
      src="https://varlet.gitee.io/varlet-ui/cat.jpg" 
    />

    <var-image 
      width="85px"
      height="85px"
      fit="none"
      src="https://varlet.gitee.io/varlet-ui/cat.jpg"
    />

    <var-image 
      width="85px"
      height="85px" 
      fit="scale-down"
      src="https://varlet.gitee.io/varlet-ui/cat.jpg" 
    />
  </var-space>
</template>
```

### Set Radius

```html
<template>
  <var-space :size="[20, 20]">
    <var-image
      width="85px"
      height="85px"
      fit="cover"
      :radius="10"
      src="https://varlet.gitee.io/varlet-ui/cat.jpg"
    />

    <var-image
      width="85px"
      height="85px"
      fit="cover"
      radius="50%"
      src="https://varlet.gitee.io/varlet-ui/cat.jpg"
    />
  </var-space>
</template>
```

### Use Ripple

```html
<template>
  <var-image
    width="85px"
    height="85px"
    ripple
    src="https://varlet.gitee.io/varlet-ui/cat.jpg"
  />
</template>
```

### Use LazyLoad

```html
<template>
  <var-image
    width="85px"
    height="85px"
    lazy
    src="https://varlet.gitee.io/varlet-ui/cat.jpg"
  />
</template>
```

### Set the lazy loading state

```html
<!-- playground-ignore -->
<template>
  <var-image 
    lazy
    width="85px" 
    height="85px"
    loading="https://xxx.xxx/loading.png"
    error="https://xxx.xxx/error.png"
    src="https://varlet.gitee.io/varlet-ui/cat.jpg"
  />
</template>
```

### Use local paths

In the file `.vue`,
the `Vue component` will not be automatically processed by the build tool like the native img module,
so you need to import the image resources manually.
Here's how the different build tools are used.

#### Vite

Automatic preprocessing with [@vitejs/plugin-vue](https://github.com/vitejs/vite/tree/main/packages/plugin-vue#asset-url-handling)

```ts
// playground-ignore
// vite.config.js
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      template: {
        transformAssetUrls: {
          'var-image': ['src']
        }
      }
    })
  ],
})
```

```html
<!-- playground-ignore -->
<template>
  <var-image src="../../assets/logo.png"/>
</template>
```

Or import separately

```html
<!-- playground-ignore -->
<script setup>
import logo from '../../assets/logo.png'
</script>

<template>
  <var-image :src="logo"/>
</template>
```

#### Webpack

```html
<!-- playground-ignore -->
<template>
  <var-image :src="require('../../assets/logo.png')"/>
</template>
```

## API

### Props

| Prop | Description                                                                    | Type | Default |
| --- |--------------------------------------------------------------------------------| --- | --- |
| `src` | Image src                                                                      | _string_ | `-` |
| `fit` | Image fit mode, optional value is `fill` `contain` `cover` `none` `scale-down` | _string_ | `fill` |
| `alt` | Image alt text, the same as the native attribute of the `img` tag              | _string_ | `-` |
| `width` | Image title text, the same as the native attribute of the `img` tag            | _string \| number_ | `-` |
| `height` | Image height                                                                   | _string \| number_ | `-` |
| `radius` | Image radius                                                                   | _string \| number_ | `-` |
| `lazy` | Whether to enable lazy loading                                                 | _boolean_ | `false` |
| `loading` | When lazy loading is enabled, the image displayed in loading                   | _string_ | `-` |
| `error` | When lazy loading is enabled, the image displayed in error                     | _string_ | `-` |
| `ripple` | Whether to enable ripple                                                       | _boolean_ | `false` |
| `block` | Whether it is a block element                                                  | _boolean_ | `true` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| `click` | Triggered when you click on Image | `event: Event` |
| `load` | Triggered when the image is successfully loaded (when the image fails in lazy loading mode, it will only be triggered when the image is successfully loaded) | `event: Event` |
| `error` | Triggered when an image fails to load (when an image fails in lazy loading mode, it will only be triggered when the number of attempts ends) | `event: Event` |
