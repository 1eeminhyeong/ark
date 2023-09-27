import { mergeProps } from '@zag-js/solid'
import { createSplitProps } from '../create-split-props'
import { ark, type HTMLArkProps } from '../factory'
import type { Assign } from '../types'
import { NumberInputProvider } from './number-input-context'
import { useNumberInput, type UseNumberInputProps } from './use-number-input'

export type NumberInputProps = Assign<HTMLArkProps<'div'>, UseNumberInputProps>

export const NumberInput = (props: NumberInputProps) => {
  const [useNumberInputProps, localProps] = createSplitProps<UseNumberInputProps>()(props, [
    'allowMouseWheel',
    'allowOverflow',
    'clampValueOnBlur',
    'dir',
    'disabled',
    'focusInputOnChange',
    'form',
    'formatOptions',
    'getRootNode',
    'id',
    'ids',
    'inputMode',
    'invalid',
    'locale',
    'max',
    'min',
    'name',
    'onFocusChange',
    'onValueChange',
    'onValueInvalid',
    'pattern',
    'readOnly',
    'spinOnPress',
    'step',
    'translations',
    'value',
  ])

  const api = useNumberInput(useNumberInputProps)

  const rootProps = mergeProps(() => api().rootProps, localProps)

  return (
    <NumberInputProvider value={api}>
      <ark.div {...rootProps} />
    </NumberInputProvider>
  )
}
