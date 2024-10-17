import dayjs from 'dayjs'

// 영업일 계산 함수 (유틸리티 파일에 정의)
export function addBusinessDays(days: number): Date {
  let currentDate = dayjs()
  let businessDaysAdded = 0

  while (businessDaysAdded < days) {
    if (currentDate.day() !== 0 && currentDate.day() !== 6) {
      businessDaysAdded++
    }
    currentDate = currentDate.add(1, 'day')
  }

  return currentDate.toDate()
}
