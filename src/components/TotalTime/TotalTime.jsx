import PropTypes from "prop-types";
const TotalTime = ({ totalTime }) => {
  //   console.log(totalTime);
//   const time = totalTime.reduce((acc, time) => {
//     return acc + time;
//   }, 0);
  return (
    <div className="p-8 bg-[#6047EC1A] rounded-lg mb-10 border border-[#6047EC]">
      <p className="text-[#6047EC] text-xl font-bold">
        {/* Spent time on read: {time} minutes */}
        Spent time on read: {totalTime} minutes
      </p>
    </div>
  );
};

TotalTime.propTypes = {
//   totalTime: PropTypes.arrayOf(PropTypes.number).isRequired,
  totalTime: PropTypes.number.isRequired,
};

export default TotalTime;
