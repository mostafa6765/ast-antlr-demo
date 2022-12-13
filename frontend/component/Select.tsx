import { Fragment, useEffect, useState } from 'react';
import Select from 'react-select';
import langs from '@constant/langs';

function SelectLang(props: any) {

  const [theLang, setTheLang] = useState('' as any)
  
  useEffect(() => {
    setTheLang(langs[0])
  }, [])
  
  useEffect(() => {
    if (theLang !== '') {
      props.setTheLang(theLang)
    }
  },[theLang])

  function selectedLang(data: any) {
    setTheLang(data)
  }

  return (
    <Fragment>
      <Select
        options={langs}
        defaultInputValue={langs[0].name}
        getOptionValue={(item: any) => item.name}
        getOptionLabel={(item: any) => (`${item.name}`)}
        onChange={(data: any) => selectedLang(data)}
      />
    </Fragment>
  )
}

export default SelectLang