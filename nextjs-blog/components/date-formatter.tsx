import { parseISO, format } from 'date-fns'

export default function DateFormatter({ dateString }: { dateString: string }) {
    const date = parseISO(dateString)
    return <time dateTime={dateString}>{format(date, 'yyyy년 L월 d일')}</time>
}