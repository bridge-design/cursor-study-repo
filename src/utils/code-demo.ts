import { StoryObj } from '@storybook/react'
import { makeLiveEditStory } from 'storybook-addon-code-editor'
import * as MyUi from '@/src/components'

interface CreateCodeDemoOptions<T> {
  /** The story to be used in the code demo */
  story: StoryObj<T>
  /** The name of the component to be used in the code demo */
  componentName?: string | undefined
  /** The props to be passed to the component */
  props?: StoryObj<T>['args']
  /** Optional custom code to be used instead of the default template */
  code?: string
  /** Additional imports to be made available in the code demo */
  availableImports?: Record<string, unknown>
}

export const createCodeDemo = <T>({
  story,
  componentName,
  props,
  code,
  availableImports,
}: CreateCodeDemoOptions<T>) =>
  makeLiveEditStory(story, {
    availableImports: { '@manychat/manyui': MyUi, ...availableImports },
    code:
      code ||
      `import React from 'react'
import { ${componentName} } from '@manychat/manyui'

export default () => {
  return (
    <${componentName}
      ${Object.entries(props || {})
        .map(([key, value]) => {
          if (value === undefined) return ''
          if (typeof value === 'string') return `${key}="${value}"`
          return `${key}={${JSON.stringify(value)}}`
        })
        .filter(Boolean)
        .join('\n      ')}
    />
  )
}
  `,
  })

export const CodeDemoStoryParams = {
  parameters: {
    docs: {
      excludeFromStoryGrid: true,
    },
    controls: { disable: true },
    liveCodeEditor: {
      disable: false,
    },
    actions: {
      disable: true,
    },
    a11y: { disable: true },
  },
}
