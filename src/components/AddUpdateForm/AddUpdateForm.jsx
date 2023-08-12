// import "./AddUpdateForm.css";
import { useState } from "react";

const initialFormData = '';

const conversionKey = {
  A:'ء',
  b:'ب',
  t:'ت',
  v:'ث',
  j:'ج',
  H:'ح',
  x:'خ',
  d:'د',
  '*':'ذ',
  r:'ر',
  z:'ز',
  s:'س',
  $:'ش',
  S:'ص',
  D:'ض',
  T:'ط',
  Z:'ظ',
  E:'ع',
  g:'غ',
  f:'ف',
  q:'ق',
  l:'ل',
  m:'م',
  n:'ن',
  h:'ه',
  w:'و',
  y:'ي'
}

const AddUpdateForm = () => {
  const [engLettersFormData, setEngLettersFormData] = useState('');
  const [lettersFormData, setLettersFormData] = useState('')
 
  let r1=''
  let r3=''
  let r2=''
  const handleChange = (event) => {
    if (event.target.name === 'r1') {
      r1 = event.target.value;
    }
    if (event.target.name === 'r2') {
      r2 = event.target.value;
    }
    if (event.target.name === 'r3') {
      r3 = event.target.value;
    }
    const letters = `${r1}${r2}${r3}`
    
    setEngLettersFormData((prev) => (prev.concat(event.target.value)));
    setLettersFormData((prev) => (prev.concat(conversionKey[event.target.value])));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // props.handleWordSubmit(formData);
    console.log(letters)
    setLettersFormData(initialFormData);
    setEngLettersFormData(initialFormData);
  };

  return (
    <div>
        <h2>Missing a root?</h2>
        <h3>Add it now</h3>
        <form onSubmit={handleFormSubmit}>
          <input className='submit__button' type="submit" />
        <select className="root3" defaultValue='r' name='r1' onChange={handleChange}>
          <option value="A">ء - A</option>
          <option value="b">ب - b</option>
          <option value="t">ت - t</option>
          <option value="v">ث - ṯ</option>
          <option value="j">ج - ǧ</option>
          <option value="H">ح - ḥ</option>
          <option value="x">خ - ḫ</option>
          <option value="d">د - d</option>
          <option value="*">ذ - ḏ</option>
          <option value="r">ر - r</option>
          <option value="z">ز - z</option>
          <option value="s">س - s</option>
          <option value="$">ش - š</option>
          <option value="S">ص - ṣ</option>
          <option value="D">ض - ḍ</option>
          <option value="T">ط - ṭ</option>
          <option value="Z">ظ - ẓ</option>
          <option value="E">ع - ʿ</option>
          <option value="g">غ - ḡ</option>
          <option value="f">ف - f</option>
          <option value="q">ق - q</option>
          <option value="k">ك - k</option>
          <option value="l">ل - l</option>
          <option value="m">م - m</option>
          <option value="n">ن - n</option>
          <option value="h">ه - h</option>
          <option value="w">و - w</option>
          <option value="y">ي - y</option>
        </select>
        <select className="root2" defaultValue='d' name='r2' onChange={handleChange}>
          <option value="A">ء - A</option>
          <option value="b">ب - b</option>
          <option value="t">ت - t</option>
          <option value="v">ث - ṯ</option>
          <option value="j">ج - ǧ</option>
          <option value="H">ح - ḥ</option>
          <option value="x">خ - ḫ</option>
          <option value="d">د - d</option>
          <option value="*">ذ - ḏ</option>
          <option value="r">ر - r</option>
          <option value="z">ز - z</option>
          <option value="s">س - s</option>
          <option value="$">ش - š</option>
          <option value="S">ص - ṣ</option>
          <option value="D">ض - ḍ</option>
          <option value="T">ط - ṭ</option>
          <option value="Z">ظ - ẓ</option>
          <option value="E">ع - ʿ</option>
          <option value="g">غ - ḡ</option>
          <option value="f">ف - f</option>
          <option value="q">ق - q</option>
          <option value="k">ك - k</option>
          <option value="l">ل - l</option>
          <option value="m">م - m</option>
          <option value="n">ن - n</option>
          <option value="h">ه - h</option>
          <option value="w">و - w</option>
          <option value="y">ي - y</option>
        </select>
        <select className="root1" defaultValue='S' name='r3' onChange={handleChange}>
          <option value="A">ء - A</option>
          <option value="b">ب - b</option>
          <option value="t">ت - t</option>
          <option value="v">ث - ṯ</option>
          <option value="j">ج - ǧ</option>
          <option value="H">ح - ḥ</option>
          <option value="x">خ - ḫ</option>
          <option value="d">د - d</option>
          <option value="*">ذ - ḏ</option>
          <option value="r">ر - r</option>
          <option value="z">ز - z</option>
          <option value="s">س - s</option>
          <option value="$">ش - š</option>
          <option value="S">ص - ṣ</option>
          <option value="D">ض - ḍ</option>
          <option value="T">ط - ṭ</option>
          <option value="Z">ظ - ẓ</option>
          <option value="E">ع - ʿ</option>
          <option value="g">غ - ḡ</option>
          <option value="f">ف - f</option>
          <option value="q">ق - q</option>
          <option value="k">ك - k</option>
          <option value="l">ل - l</option>
          <option value="m">م - m</option>
          <option value="n">ن - n</option>
          <option value="h">ه - h</option>
          <option value="w">و - w</option>
          <option value="y">ي - y</option>
        </select>
        
        </form>
    </div>
  );
};

export default AddUpdateForm;
