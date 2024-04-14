import { treeViewAnatomy } from '@ark-ui/anatomy'
import { render } from '@testing-library/vue'
import { TreeView } from '..'
import { getExports, getParts } from '../../../setup-test'
import ComponentUnderTest from './tree-view.test.vue'

describe('TreeView', () => {
  it.each(getParts(treeViewAnatomy))('should render part %s', async (part) => {
    render(ComponentUnderTest)

    expect(document.querySelector(part)).toBeInTheDocument()
  })

  it.each(getExports(treeViewAnatomy))('should export %s', async (part) => {
    expect(TreeView[part]).toBeDefined()
  })
})
