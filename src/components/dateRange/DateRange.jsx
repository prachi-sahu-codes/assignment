import { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { convertDateFormat } from "../../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import dayjs from 'dayjs';

export default function DateRange() {
  const data = useSelector((state) => state.data);
  const [date, setDate] = useState({
    start: data.startDate,
    end: data.endDate,
  });
  const dispatch = useDispatch();

  const handleDateRangeChange = (ranges) => {
    const formattedStartDate = ranges[0]?.$d.toLocaleDateString("en-US");
    const formattedEndDate = ranges[1]?.$d.toLocaleDateString("en-US");

    const startDate = convertDateFormat(formattedStartDate);
    const endDate = convertDateFormat(formattedEndDate);
    setDate(() => ({ start: startDate, end: endDate }));

    dispatch({ type: "DATE_RANGE", payload: date });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateRangePicker"]}>
        <DateRangePicker
          localeText={{ start: "Start date", end: "End date" }}
          onChange={handleDateRangeChange}
          // defaultRangePosition=""
          defaultValue={[dayjs('2022-04-10'), dayjs('2022-05-10')]}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
