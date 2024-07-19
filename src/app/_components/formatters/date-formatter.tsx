import { parseISO } from 'date-fns'

type DateFormatterProps = {
  dateString: string
  formatOptions?: Intl.DateTimeFormatOptions
}

const DateFormatter = ({
  dateString,
  formatOptions = {},
}: DateFormatterProps) => {
  const dateISO = parseISO(dateString)
  const dateTimeFormat = new Intl.DateTimeFormat('en-US', formatOptions).format(
    dateISO
  )

  return <time dateTime={dateString}>{dateTimeFormat}</time>
}

export default DateFormatter
