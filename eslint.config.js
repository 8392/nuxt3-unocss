import antfu from '@antfu/eslint-config'
import unocss from '@unocss/eslint-plugin'

export default antfu(
  {

  },
  unocss.configs.flat,
  {
    rules: {
      'vue/block-order': ['error', {
        order: [['template', 'script'], 'style']
      }],
      'style/comma-dangle': ['error', 'never']
    }
  }
)
