// import "./AddUpdateForm.css";
import { useState } from "react";

const initialFormData = {
    letters: '',
    engLetters: '',
    wordId: ''
  };

const AddUpdateForm = () => {
  const [formData, setFormData] = useState(initialFormData);
 
  let value = '';
  const handleChange = (event) => {
    console.log(event.target.value)
    value.concat(event.target.value);
    // const name = event.target.name;
    setFormData((prev) => ({ ...prev, letters: value }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // props.handleWordSubmit(formData);
    console.log(formData)
    // setFormData(initialFormData);
  };

  return (
    <div>
        <h2>Missing a root?</h2>
        <h3>Add it now</h3>
        <form onSubmit={handleFormSubmit}>
          <input className='submit__button' type="submit" />
        <select className="root3" defaultValue='r' name='r1' onChange={handleChange}>
          <option value="A">ا - A</option>
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
          <option value="ÿ">ى - ỳ</option>
          <option value="y">ي - y</option>
        </select>
        <select className="root2" defaultValue='d' onChange={handleChange}>
          <option value="A">ا - A</option>
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
          <option value="ÿ">ى - ỳ</option>
          <option value="y">ي - y</option>
        </select>
        <select className="root1" defaultValue='S' onChange={handleChange}>
          <option value="A">ا - A</option>
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
          <option value="ÿ">ى - ỳ</option>
          <option value="y">ي - y</option>
        </select>
        
        </form>
    </div>
  );
};

export default AddUpdateForm;
