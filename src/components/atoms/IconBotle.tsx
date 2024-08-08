import { CiPizza } from "react-icons/ci";
import {useCart} from '../../hooks/useCart';

const IconBotle=({
  onClick,
  productCount,
}: {
  onClick: () => void;
  productCount: number;
}) => {
  const {getTotalItems}=useCart();

  return (
    <button className='w-auto h-auto ' onClick={onClick}>
      <CiPizza className='mr-2 w-6 h-6 active:text-secundary text-fourth' />
      {productCount>0&&(
        <span className='absolute top-2 right-4  bg-fourth rounded-full w-4 h-4 text-xs flex items-center justify-center text-secundary font-bold'>
          {getTotalItems()}
        </span>
      )}
    </button>
  );
};

export default IconBotle;
