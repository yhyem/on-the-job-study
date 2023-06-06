const inputEl = { current: null };

function InputElSample() {
  const onButtonClick = () => {
    inputEl.current.focus();
    inputEl.current.click();
  };
  const onInputClick = () => {
    alert("input clicked");
  };

  console.log({ inputEl });

  return (
    <>
      <input onClick={onInputClick} ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}

export default InputElSample;
