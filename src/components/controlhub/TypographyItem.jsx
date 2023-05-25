function TypographyItem({id, name, handleLabelClick}) {

  return (
        <>
            <label onClick={(e) => handleLabelClick(e, id)} className="typography-switcher__label" htmlFor={id}>{name}</label> 
            <input className="typography-switcher__radio" type="radio" name="font-name" id={id}/>
          </>
  )
}

export default TypographyItem