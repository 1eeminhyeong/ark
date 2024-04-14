import type {
  HighlightChangeDetails as TagsInputHighlightChangeDetails,
  ValidityChangeDetails as TagsInputValidityChangeDetails,
  ValueChangeDetails as TagsInputValueChangeDetails,
} from '@zag-js/tags-input'
import { TagsInputClearTrigger, type TagsInputClearTriggerProps } from './tags-input-clear-trigger'
import { type TagsInputContext, useTagsInputContext } from './tags-input-context'
import { TagsInputControl, type TagsInputControlProps } from './tags-input-control'
import { TagsInputInput, type TagsInputInputProps } from './tags-input-input'
import { TagsInputItem, type TagsInputItemProps } from './tags-input-item'
import { type TagsInputItemContext, useTagsInputItemContext } from './tags-input-item-context'
import {
  TagsInputItemDeleteTrigger,
  type TagsInputItemDeleteTriggerProps,
} from './tags-input-item-delete-trigger'
import { TagsInputItemInput, type TagsInputItemInputProps } from './tags-input-item-input'
import { TagsInputItemPreview, type TagsInputItemPreviewProps } from './tags-input-item-preview'
import { TagsInputItemText, type TagsInputItemTextProps } from './tags-input-item-text'
import { TagsInputLabel, type TagsInputLabelProps } from './tags-input-label'
import { TagsInputRoot, type TagsInputRootProps } from './tags-input-root'

export * as TagsInput from './tags-input'

export {
  TagsInputClearTrigger,
  TagsInputControl,
  TagsInputInput,
  TagsInputItem,
  TagsInputItemDeleteTrigger,
  TagsInputItemInput,
  TagsInputItemPreview,
  TagsInputItemText,
  TagsInputLabel,
  TagsInputRoot,
  useTagsInputContext,
  useTagsInputItemContext,
}

export type {
  TagsInputClearTriggerProps,
  TagsInputContext,
  TagsInputControlProps,
  TagsInputHighlightChangeDetails,
  TagsInputInputProps,
  TagsInputItemContext,
  TagsInputItemDeleteTriggerProps,
  TagsInputItemInputProps,
  TagsInputItemPreviewProps,
  TagsInputItemProps,
  TagsInputItemTextProps,
  TagsInputLabelProps,
  TagsInputRootProps,
  TagsInputValidityChangeDetails,
  TagsInputValueChangeDetails,
}
