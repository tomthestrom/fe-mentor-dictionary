function TypographyItem({id, name}) {
  return (
        <>
            <label className="typography-switcher__label" htmlFor={id}>{name}</label> 
            <input className="typography-switcher__radio" type="radio" name="font-name" id={id}/>
          </>
  )
}

export default TypographyItem