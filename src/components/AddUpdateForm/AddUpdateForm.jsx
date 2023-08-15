import "./AddUpdateForm.css";
import { useState } from "react";
import PropTypes from 'prop-types'
import axios from 'axios'

const initialFormData = {
  r1:'', 
  r2:'', 
  r3:''
};

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
  k:'ك',
  q:'ق',
  l:'ل',
  m:'م',
  n:'ن',
  h:'ه',
  w:'و',
  y:'ي'
}
const baseUrl = import.meta.env.VITE_APP_BACKEND;

const AddUpdateForm = () => {
  const [formData, setFormData] = useState({
    r1:'', r2:'', r3:'', r1en:'', r2en: '', r3en: ''});
  const [isSubmitted, setIsSubmitted] = useState(false)
  
    const handleRootSubmit = formData => {
      axios
      .post(`${baseUrl}/words`, {letters:`${formData.r1} ${formData.r2} ${formData.r3}`, engLetters: formData.r1en+formData.r2en+formData.r3en})
      .then(()=> console.info('success'))
      .catch((err) => console.error(err))
    }
  const handleChange = (event) => {
    console.log(event.target.name)
    if (event.target.name === 'r1') {
      setFormData((prev) => ({...prev, r1:conversionKey[event.target.value], r1en:event.target.value}));
    }
    if (event.target.name === 'r2') {
      setFormData((prev) => ({...prev, r2:conversionKey[event.target.value], r2en:event.target.value}));
    }
    if (event.target.name === 'r3') {
      setFormData((prev) => ({...prev, r3:conversionKey[event.target.value], r3en:event.target.value}));
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleRootSubmit(formData);
    
    setIsSubmitted(true);
    setFormData(initialFormData);
    setTimeout(()=>{(setIsSubmitted(false))}, 3000);
  };
  const message = isSubmitted ? 'Root added': 'Add a root?'
  
  return (
    <div>
        <h2>{message}</h2>
        {!isSubmitted && <form id='rootSubmit' onSubmit={handleFormSubmit}>
          <input className='submit__button' type="submit" />
        <select className="root3" defaultValue='r3' name='r3' onChange={handleChange}>
          <option value="r3">3rd</option>
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
        <select className="root2" defaultValue='r2' name='r2' onChange={handleChange}>
          <option value="r2">2nd</option>
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
        <select className="root1" defaultValue='r1' name='r1' onChange={handleChange}>
          <option value="r1">1st</option>
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
        </form>}
    </div>
  );
};

AddUpdateForm.propTypes = {
handleRootSubmit:PropTypes.func
}

export default AddUpdateForm;
