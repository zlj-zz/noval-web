export type Fiction = {
  name: string,
  info: string,
  date: string,
  key: string
}

export type FictionObj = {
  [idx: string | number]: Fiction
}

export type CrawlReturn = {
  total: number,
  key: string,
  exist: boolean,
  status: number
}

export type CrawlStatus = {
  current: number
}
