import { Html, useProgress } from '@react-three/drei';

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div className="text-right">
            <span className="text-xs font-semibold inline-block text-sky-600">
              {`${progress.toFixed()}`}%
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-sky-200">
          <div
            style={{ width: `${progress.toFixed()}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-sky-500"
          ></div>
        </div>
      </div>
    </Html>
  );
};

export default Loader;
