import * as React from "react";

type Article = {
  url : string
  , explainerOrTitle : string
}

type Props = {
  articleData : Article[]
}

export default (props: Props) => {
  
  return (
    <div>
      <h3>Articles</h3>
      
    {/* Mapped array of article data */}
    <div>
      {
        props.articleData.map((object, index) => (
         <p key={object.url}>{`${index + 1}. `}
           <a href={`${object.url}`}>{`${object.explainerOrTitle}`}</a>
         </p>
        ))
      }
    </div>
    </div>
  )
}