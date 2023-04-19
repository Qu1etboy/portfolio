type TimeLineProps = {
  date: string;
  title: string;
  info: string;
  gpa: string;
};

const TimeLineItem = ({ date, title, info, gpa }: TimeLineProps) => {
  return (
    <li>
      <div className="flex flex-start items-center pt-3">
        <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
        <p className="text-gray-500 dark:text-gray-400 text-sm">{date}</p>
      </div>
      <div className="mt-0.5 ml-4 mb-6">
        <h3 className="text-gray-800 dark:text-gray-200 font-semibold text-lg mb-1.5">
          {title}
        </h3>
        <p className="text-gray-500 dark:text-gray-400 mb-3">
          {info} <br />
          {gpa}
        </p>
      </div>
    </li>
  );
};

const Timeline = () => {
  return (
    <ol className="border-l border-gray-300 dark:border-gray-500 ml-0 md:ml-5">
      <TimeLineItem
        date="2015 - 2021"
        title="St. Francis Xavier School"
        info="Science-Mathematic, Highschool"
        gpa="GPAX: 3.73"
      />
      <TimeLineItem
        date="2021 - Present"
        title="Kasetsart University"
        info="Bachelor's degree (2nd year) of Computer Science"
        gpa="Current GPAX: 3.93"
      />
    </ol>
  );
};

export default Timeline;
