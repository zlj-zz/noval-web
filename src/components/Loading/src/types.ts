import { Ref } from "vue"

export interface LoadingParentElement extends HTMLElement {
  vLoadingAddClassList?: () => void
}

type MaybeRef<T> = T | Ref<T>

export type LoadingOptionsResolved = {
  parent: LoadingParentElement,
  background: MaybeRef<string>,
  svg: MaybeRef<string>,
  svgViewBox: MaybeRef<string>,
  spinner: MaybeRef<boolean | string>,
  text: MaybeRef<string>,
  fullscreen: boolean,
  lock: boolean,
  customClass: MaybeRef<string>,
  visible: boolean,
  target: HTMLElement,
  beforeClose?: () => boolean,
  closed?: () => void
}

export type LoadingOptions = Partial<Omit<LoadingOptionsResolved, 'parent' | 'target'> & {
  target: HTMLElement | string, body: boolean
}>
