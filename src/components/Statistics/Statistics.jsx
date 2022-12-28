import PropTypes from "prop-types";

import {
  StatisticsSection,
  StatisticsList,
  StatisticsTitle,
  StatisticsItem,
  StatisticsLabel,
  StatisticsPercentage,
} from "components/Statistics/Statistics.styled";

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}
      <StatisticsList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsItem key={id}>
            <StatisticsLabel>{label}</StatisticsLabel>
            <StatisticsPercentage>{percentage}%</StatisticsPercentage>
          </StatisticsItem>
        ))}
      </StatisticsList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
