import dayjs from 'dayjs';

export default function Date({ dateString }: { dateString: string }) {
  if (!dateString) return <div />;

  const formattedDate = dayjs(dateString).format('MMM D, YYYY');
  return <time dateTime={dateString}>{formattedDate}</time>;
}
