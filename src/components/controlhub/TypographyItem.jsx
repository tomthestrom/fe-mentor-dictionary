function TypographyItem({id, name}) {
  return (
        <>
            <label htmlFor={id}>{name}</label> 
            <input type="radio" name="font-name" id={id}/>
          </>
  )
}

export default TypographyItem