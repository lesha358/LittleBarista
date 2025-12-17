declare global {
  interface Window {
    ym?: (...args: any[]) => void
  }
}

export function reachGoal(counterId: number, target: string, params?: Record<string, any>) {
  if (typeof window === 'undefined' || typeof window.ym !== 'function') return
  try {
    window.ym(counterId, 'reachGoal', target, params || {})
  } catch {}
}

export const YM_COUNTERS = [101109907, 101983555, 101984487, 101111714]

export function reachGoalAll(target: string, params?: Record<string, any>) {
  YM_COUNTERS.forEach((id) => reachGoal(id, target, params))
}


