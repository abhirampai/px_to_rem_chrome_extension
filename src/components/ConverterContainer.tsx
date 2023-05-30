import { useEffect, useRef, useState } from "react";

const ConverterContainer = () => {
  const conversionInputRef = useRef<any>();

  const [conversionInput, setConversionInput] = useState<number>(0);
  const [conversionRate] = useState(16);
  const [conversionOutput, setConversionOutput] = useState<any>();

  const changeConversionInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConversionInput(Number(e.target.value));
  };

  const onConvert = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const output = (conversionInput * 1) / conversionRate;
    setConversionOutput(output);
  };

  useEffect(() => {
    const inputRef = conversionInputRef.current;
    inputRef.addEventListener(
      "keypress",
      (event: React.KeyboardEvent<HTMLInputElement> | any) => {
        if (event.key === "Enter") {
          event.preventDefault();
          const output = (event.target?.value * 1) / conversionRate;
          setConversionOutput(output);
        }
      }
    );

    return () => inputRef.removeEventListener("keypress");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 

  return (
    <div className="converter-container">
      <h4>Px</h4>
      <input
        ref={conversionInputRef}
        value={conversionInput}
        onChange={changeConversionInput}
      />
      <button className="mt-12" onClick={onConvert}>
        Convert
      </button>
      <h4>Rem</h4>
      <input value={conversionOutput} disabled />
    </div>
  );
};

export default ConverterContainer;
