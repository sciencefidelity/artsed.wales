import React from "react"
import * as vennStyles from "../css/model.module.css"

const Model = ({ 
  model1, model2, model3, model4, model5, model6, model7, model8, model9 
}) => (
  <section
    style={{
      marginBottom: `3.5rem`,
    }}
  >
    <div
      style={{
        display: `flex`,
      }}
    >
      <div style={{
        width: `33.33%`,
        marginRight: `-10%`
      }}>
        <h2
          style={{
            lineHeight: `0.6`,
            paddingBottom: `1rem`
          }}
        >{model1}</h2>
        <p
          style={{
            marginRight: `-15%`
          }}
        >{model2}</p>
        <p>{model3}</p>
        <p>{model4}</p>
      </div>
      <div className={vennStyles.vennDiagram}>

          <div className={vennStyles.circle5}></div>
          <div className={vennStyles.circle6}></div>
          <div className={vennStyles.circle4}></div>
          <div className={vennStyles.circle1}></div>
          <div className={vennStyles.circle3}></div>
          <div className={vennStyles.circle2}></div>
          
          <div className={vennStyles.content1}>{model7}</div>
          <div className={vennStyles.content2}>{model6}</div>
          <div className={vennStyles.content3}>{model8}<br />{model9}</div>
          <div className={vennStyles.content4}>{model5}</div>
          
          <div>
            <img
              alt="Ampersand Logo"
              src="data:image/svg+xml,%3Csvg width='68' viewBox='0 0 89 100' xmlns='http://www.w3.org/2000/svg' fill-rule='evenodd' clip-rule='evenodd' stroke-linejoin='round' stroke-miterlimit='2'%3E%3Cpath d='M65.314 35.379v-6.933l-.139-1.664c-.416-4.16-2.635-14.145-10.677-21.078-5.131-5.131-18.582-7.488-28.012-4.16-9.013 2.496-13.312 9.568-15.392 14.976-1.248 3.467-2.08 8.043-2.08 9.291-.139.694-.139 1.11-.139 1.526 0 3.189.555 6.24 1.664 9.429 1.109 3.19 2.08 5.27 2.773 6.24.694 1.11 1.248 1.942 1.664 2.496C4.992 53.961 0 63.114 0 72.959c0 7.904 2.635 14.283 7.766 19.414C12.896 97.504 20.385 100 30.508 100c12.064 0 20.939-5.685 25.792-11.094l10.123 9.985h22.604L65.73 75.455l12.758-17.611-12.065-8.875-11.648 15.947-23.019-23.435c-4.438-4.437-6.657-9.152-6.657-14.144 0-6.934 3.744-10.123 7.211-11.233 2.635-.832 3.328-.693 4.438-.693 7.765 0 12.341 5.824 12.341 13.035v6.933h16.225zm-34.39 49.229c-8.737 0-14.7-4.577-14.7-11.787 0-4.438 2.913-10.539 9.153-14.561l19.968 19.83c-3.466 4.299-8.32 6.518-14.421 6.518z' fill-rule='nonzero' fill='%23fff'/%3E%3C/svg%3E"
              className={vennStyles.ampersand}
            />
          </div>

      </div>
    </div>
  </section>
)

export default Model
