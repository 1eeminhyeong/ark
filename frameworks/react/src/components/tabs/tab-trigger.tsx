import { mergeProps } from '@zag-js/react'
import type { TriggerProps } from '@zag-js/tabs'
import { forwardRef } from 'react'
import type { Assign } from '../../types'
import { createSplitProps } from '../../utils/create-split-props'
import { type HTMLArkProps, ark } from '../factory'
import { useTabsContext } from './use-tabs-context'

export interface TabTriggerProps extends Assign<HTMLArkProps<'button'>, TriggerProps> {}

export const TabTrigger = forwardRef<HTMLButtonElement, TabTriggerProps>((props, ref) => {
  const [tabProps, localProps] = createSplitProps<TriggerProps>()(props, ['disabled', 'value'])
  const tabs = useTabsContext()
  const mergedProps = mergeProps(tabs.getTriggerProps(tabProps), localProps)

  return <ark.button {...mergedProps} ref={ref} />
})

TabTrigger.displayName = 'TabTrigger'
