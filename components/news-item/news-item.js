import Typography from '@mui/material/Typography';
import { Card, CardContent } from '@mui/material';
import { ScheduleRounded } from '@mui/icons-material';
import { wrapper, timeWrapper, date } from './news-item-styles';

const NewsItem = ({ item }) => {
  const { Title, Summary, Published } = item;
  return (
    <li style={wrapper}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="body1" gutterBottom>
            <strong>{Title}</strong>
          </Typography>
          <Typography variant="body1" gutterBottom>
            {Summary}
          </Typography>
          <div style={timeWrapper}>
            <ScheduleRounded />
            <div style={date}>{getPublishedTime(Published)}</div>
          </div>
        </CardContent>
      </Card>
    </li>
  );
};

const getPublishedTime = (dateString) => {
  const date = new Date(dateString);
  const [day, time] = date.toISOString().split('T');
  return day;
};

export default NewsItem;
