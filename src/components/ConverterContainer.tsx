import { useState } from "react";

const ConverterContainer = () => {
  const [pxInput, setPxInput] = useState<any>();
  const [conversionRate] = useState(16);
  const [remInput, setRemInput] = useState<any>();

  const changeConversionInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string = "rem"
  ) => {
    const input = Number(e.target.value);
    if (type === "rem") {
      setRemInput(input);
      conversionFunction(input, "px");
    } else {
      setPxInput(input);
      conversionFunction(input);
    }
  };

  const conversionFunction = (input: number, type: string = "rem") => {
    if (type === "rem") {
      setRemInput((input * 1) / conversionRate);
    } else {
      setPxInput(input * conversionRate);
    }
  };

  return (
    <div className="converter-container">
      <h2>Px</h2>
      <input
        value={pxInput}
        onChange={(e) => changeConversionInput(e, "px")}
        type="number"
        step="any"
      />
      <p className="text-center text-medium">
        <img src="../icons/128.png" alt="icon" className="w-48" />
      </p>
      <h2>Rem</h2>
      <input
        value={remInput}
        onChange={(e) => changeConversionInput(e, "rem")}
        type="number"
        step="any"
      />

      <h4 className="text-center">
        Calculation based on a root font-size of {conversionRate} pixel.
      </h4>

      <h6 className="text-center">
        <a
          href="https://www.flaticon.com/free-icons/exchange"
          title="exchange icons"
        >
          Exchange icons created by Freepik - Flaticon
        </a>
      </h6>
    </div>
  );
};

export default ConverterContainer;
