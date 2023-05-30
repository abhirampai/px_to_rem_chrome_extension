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
    let output = 0;

    if (type === "rem") {
      setRemInput((input * 1) / conversionRate);
    } else {
      setPxInput((output = input * conversionRate));
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
      <p className="text-center text-medium">↑↓</p>
      <h2>Rem</h2>
      <input
        value={remInput}
        onChange={(e) => changeConversionInput(e, "rem")}
        type="number"
        step="any"
      />

      <h5 className="text-center">
        Calculation based on a root font-size of {conversionRate} pixel.
      </h5>
    </div>
  );
};

export default ConverterContainer;
