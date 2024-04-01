/* 
green-400
green-500
green-600 
slate-500 text
slate-50 input bg
gray-900
yellow-400
amber-300 
orange-400




*/
import Logo from "../assets/bankco-card.png";

const CreditCard = () => {
  return (
    <div className="h-[200px] w-[340px] rounded-xl border bg-gradient-to-tr from-green-500 to-green-600 to-90%">
      <div className="p-5">
        <img
          src={Logo}
          alt="bankco"
          width={100}
          height={31}
          className="w-[100px]"
        />
      </div>
    </div>
  );
};

export default CreditCard;
