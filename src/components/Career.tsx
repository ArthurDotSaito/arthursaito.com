import career from '@/data/career';
import dayjs from 'dayjs';

const Career = () => {
  return career.map((item, index) => {
    return (
      <div style={{ marginBottom: 40 }} key={index}>
        <h3>{item.role}</h3>
        <p style={{ margin: 0 }}>{item.company}</p>
        <p style={{ margin: 0 }}>
          <span>{dayjs(item.startDate).format('MMM-YYYY')}</span>
          <span> – </span>
          <span>{item.endDate ? dayjs(item.endDate).format('MMM-YYYY') : 'Present'}</span>
          <span> • </span>
        </p>
      </div>
    );
  });
};

export default Career;
