import {
  createApp,
  createVNode,
  h,
  reactive,
  ref,
  toRefs,
  Transition,
  vShow,
  withCtx,
  withDirectives
} from "vue"
import { removeClass } from '@/utils'
import { LoadingOptionsResolved } from "./types"


export function createLoadingComponent(options: LoadingOptionsResolved) {
  let afterLeaveTimer: number

  const afterLeaveFlag = ref(false)

  const data = reactive({
    ...options,
    originalPosition: '',
    originalOverflow: '',
    visible: false
  })

  function setText(text: string): void {
    data.text = text
  }

  function destroySelf(): void {
    const target = data.parent
    if (!target.vLoadingAddClassList) {
      let loadingNumber: number | string | null = target.getAttribute('loading-number')
      loadingNumber = Number.parseInt(loadingNumber as any) - 1

      if (!loadingNumber) {
        removeClass(target, 'el-loading-parent--relative')
        target.removeAttribute('loading-number')
      } else {
        target.setAttribute('loading-number', loadingNumber.toString())
      }

      removeElLoadingChild()
      loadingInstance.unmount()
    }
  }

  function removeElLoadingChild(): void {
    vm.$el?.parentNode?.removeChild(vm.$el)
  }

  function close(): void {
    if (options.beforeClose && !options.beforeClose) return

    const target = data.parent
    target.vLoadingAddClassList = undefined
    afterLeaveFlag.value = true
    clearTimeout(afterLeaveTimer)

    afterLeaveTimer = window.setTimeout(() => {
      if (afterLeaveFlag.value) {
        afterLeaveFlag.value = true
        destroySelf()
      }
    }, 400)
    data.visible = false

    options.closed?.()
  }

  function handleAfterLeave(): void {
    if (!afterLeaveFlag) return
    afterLeaveFlag.value = true
    destroySelf()
  }

  const elLoadingComponent = {
    name: 'ElLoading',
    setup() {
      return () => {
        const svg = data.spinner || data.svg
        const spinner = h(
          'svg',
          {
            class: 'circular',
            viewBox: data.svgViewBox ? data.svgViewBox : '25 25 50 50', ...(svg ? { innerHtml: svg } : {})
          },
          [
            h(
              'circle',
              { class: 'path', cx: '50', cy: '50', r: '20', fill: 'none' }
            )
          ]
        )
        const spinnerText = data.text ? h('p', { class: 'el-loading-text' }, [data.text]) : undefined

        return h(Transition,
          { class: 'el-loading-fade', onAfterLeave: handleAfterLeave },
          {
            default: withCtx(() => [
              withDirectives(
                createVNode(
                  'div',
                  {
                    style: { background: data.background || '' },
                    class: ['el-loading-mask', data.customClass, data.fullscreen ? 'full-screen' : '']
                  },
                  [
                    h('div', { class: 'el-loading-spinner' }, [spinner, spinnerText])
                  ]
                ),
                [[vShow, data.visible]]
              )
            ])
          }
        )
      }
    }
  }

  const loadingInstance = createApp(elLoadingComponent)
  const vm = loadingInstance.mount(document.createElement('div'))


  return {
    ...toRefs(data),
    setText,
    removeElLoadingChild,
    close,
    handleAfterLeave,
    vm,
    get $el(): HTMLElement {
      return vm.$el
    }
  }
}

export type LoadingInstance = ReturnType<typeof createLoadingComponent>
