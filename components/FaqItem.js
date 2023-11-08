import AnimateHeight from 'react-animate-height';
import ToggleIcon from './ToggleIcon';

const FaqItem = ({ question, answer, isActive, onClick }) => (
  <div className="pb-2 border-gray/20 bg-transparent">
    <button
      type="button"
      className={`relative flex w-full items-center justify-between gap-2 p-2 my-2 text-lg font-bold text-black`}
      onClick={onClick}
    >
      <h3 className="text-left">{question}</h3>
      <ToggleIcon isActive={isActive} />
    </button>
    <AnimateHeight duration={600} height={isActive ? 'auto' : 0}>
      <div className="p-2">
        {Array.isArray(answer) ? 
          answer.map((item, index) => <p className="pb-2" key={index}>{item}</p>) : 
          <p className="text-gray">{answer}</p>
        }
      </div>
    </AnimateHeight>
  </div>
);

export default FaqItem;
