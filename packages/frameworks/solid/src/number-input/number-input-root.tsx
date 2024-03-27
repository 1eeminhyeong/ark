import { mergeProps } from '@zag-js/solid'
import { type JSX } from 'solid-js'
import { createSplitProps } from '../create-split-props'
import { ark, type HTMLArkProps } from '../factory'
import { runIfFn } from '../run-if-fn'
import type { Assign } from '../types'
import { NumberInputProvider } from './number-input-context'
import {
  useNumberInput,
  type UseNumberInputProps,
  type UseNumberInputReturn,
} from './use-number-input'

interface ElementProps extends UseNumberInputProps {
  children?: JSX.Element | ((api: UseNumberInputReturn) => JSX.Element)
}

export interface NumberInputRootProps extends Assign<HTMLArkProps<'div'>, ElementProps> {}

export const NumberInputRoot = (props: NumberInputRootProps) => {
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
  const mergedProps = mergeProps(() => api().rootProps, localProps)
  const getChildren = () => runIfFn(localProps.children, api)

  return (
    <NumberInputProvider value={api}>
      <ark.div {...mergedProps}>{getChildren()}</ark.div>
    </NumberInputProvider>
  )
}
