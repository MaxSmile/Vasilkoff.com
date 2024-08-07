import { parseISO, format } from "date-fns";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const date = new Date(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL	d, yyyy")}</time>;
  //return dateString;
};

export default DateFormatter;
