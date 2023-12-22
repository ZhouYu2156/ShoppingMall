# 极客兔 - 功能库

## 安装
```bash
$ npm install rabbit-utils
```

## 快速上手

### 按需导入
```vue
<script setup>
  // 导入
  import { DecimalToBinary } from 'rabbit-utils'

  // 使用方式
  console.log(DecimalToBinary(10))
</script>
```

### 默认导入
```vue
<script setup>
  // 导入
  import RabbitUtils from 'rabbit-utils'

  // 使用
  console.log(RabbitUtils.DecimalToBinary(10))
</script>
```

## API 说明

### 两数求和

```ts
/** 两数求和 */
export const add = (a: number, b: number) => a + b;
```





