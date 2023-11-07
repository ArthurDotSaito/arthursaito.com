import academics from '@/data/academics';
import dayjs from 'dayjs';

const Academics = () => {
  return academics.map((item, index) => {
    return (
      <div style={{ marginBottom: 40 }} key={index}>
        <h3>{item.degree}</h3>
        <p style={{ margin: 0 }}>{item.instituition}</p>
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

export default Academics;
