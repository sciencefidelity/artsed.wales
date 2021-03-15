import * as React from "react"
import PropTypes from "prop-types"

const Footer = ({ contact, email, brand, site }) => (
  <footer
    style={{
      background: `#0D0D0D`,
    }}
  >
    <div
      style={{
        width: `88%`,
        maxWidth: 1000,
        margin: `0 auto`,
        padding: `2rem 0 1rem`,
        display: `flex`,
        color: `#e7dbd8`,
        fontFamily: `"Neue Haas Unica",-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
      }}
    >
      <div
        style={{
          display: `flex`,
          flexDirection: `column`,
          width: `50%`
        }}
      >
        <h2
          style={{
            color: `#e7dbd8`,
            marginBottom: `-0.1rem`
          }}
        >
          {contact}
        </h2>
        <a href="mailto:info@arted.wales">
          <p
            style={{
              fontSize: `1.5rem`,
              textDecoration: `underline`,
              color: `#e7dbd8`,
              marginBottom: `2.9rem`
            }}
          >
            {email}
          </p>
        </a>
        <p
          style={{
            fontSize: `1rem`,
            color: `#e7dbd8`
          }}
        >
          © {new Date().getFullYear()} {brand}
        </p>
      </div> 
      
      <div
        style={{
          display: `flex`,
          flexDirection: `column`,
          width: `50%`
        }}
      >
        <div
          style={{
            display: `flex`,
          }}
        >
          <a 
            href="https://plwg.cymru/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              alt="Plwg Logo"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 927 387' class='plwgLogo' %3E%3Cpath d='M401.48 219.33c-17.3 0-31.59-5.77-42.11-16.05v77.46H315V87h43.87v14.54h.5a56.93 56.93 0 0142.11-18.3c37.6 0 63.91 30.33 63.91 67.93s-26.31 68.16-63.91 68.16zm-13.29-98.26c-17.29 0-29.83 12.53-29.83 30.08 0 17.79 13.29 30.33 29.83 30.33 16.8 0 30.08-12.54 30.08-30.33 0-17.55-12.03-30.08-30.08-30.08zM477 0h44.37v215.57H477zm122.93 215.57L531 87h51.13l31.34 69.43L644.3 87h30.58l30.83 69.43L737 87h51.14l-68.9 128.57h-30.07l-29.58-66.43L630 215.57zm216.53 13.78c4.76 7.77 15.54 16.55 34.84 16.55 12.28 0 31.33-7.27 31.33-30.08v-9.53c-9.52 10.53-24.56 13-42.11 13-37.6 0-63.92-30.33-63.92-67.93s26.32-68.18 63.92-68.18c17.05 0 30.83 5.51 41.36 15.29h.75V87H927v132.1c0 43.11-31.83 65.42-75.7 65.42-26.82 0-57.65-6-71.19-37.35zm37.35-47.87c17.29 0 29.83-12.54 29.83-30.08 0-17.8-13.29-30.33-29.83-30.33-16.8 0-30.08 12.53-30.08 30.33 0 17.54 12.03 30.08 30.08 30.08zM135 67H81a59.07 59.07 0 00-59 59v54a41 41 0 0041 41h31v62H54v-7a15 15 0 00-15-15H15a15 15 0 00-15 15v24a15 15 0 0015 15h24a15 15 0 0015-15v-7h40v18a44.11 44.11 0 01-40 43.86V348a15 15 0 00-15-15H15a15 15 0 00-15 15v24a15 15 0 0015 15h24a15 15 0 0015-15v-7.17A54.11 54.11 0 00104 311v-18h31a113 113 0 000-226zm0 216h-31v-62h31a41 41 0 10-41-41v31H63a31 31 0 01-31-31v-54a49.05 49.05 0 0149-49h54a103 103 0 010 206zm-31-72v-31a31 31 0 1131 31z' fill='%23e7dbd8'/%3E%3C/svg%3E"
              style={{
                width: `285px`,
                marginLeft: `1rem`
              }}
            />
          </a>
          <a 
            href="https://artsactive.org.uk/"
            target="_blank"
            rel="noreferrer"
            style={{
              marginLeft: `auto`,
            }}
          >
            <img
              alt="Arts Active Logo"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 41.97 53.86' class='artsActive'%3E%3Cpath d='M5.43 24.09a9.91 9.91 0 00-.14 1.54l-.21.31a9.74 9.74 0 01.35-1.85m22.14-10.62a21 21 0 013.66 1.24 1.74 1.74 0 00.11-.18 19.71 19.71 0 00-3.75-1.28v.22m6.83 3.1c3.13 2.33 5.08 5.58 5.08 9.16a10 10 0 01-.39 2.74 10.51 10.51 0 00.14-1.69 11.84 11.84 0 00-4.86-9.2v-.54-.47M6.1 22.37a10 10 0 00-.58 2.93 29.65 29.65 0 016.81-6.59c.29-.22.59-.42.88-.62l.89-2.52a14.72 14.72 0 00-8 6.8m6.62-3.12a27.81 27.81 0 00-7.18 7.24 10.74 10.74 0 002.56 6l4.73-13.36-.11.08m6.75 3.38l-.47-1.5c-.38-1.19-1-1.19-1.39 0L16.63 24l.47-.25a25.24 25.24 0 012.37-1.07m9.72-2.83l-.27.24a3.12 3.12 0 00-.68.81h4.26a9.58 9.58 0 001.15-3c-.3-.22-.61-.44-.93-.65-.33.28-.7.56-1.12.87-.65.45-1.73 1.23-2.41 1.72m-4.64 1.41l.43-.06a6.32 6.32 0 01.27-.65 8.2 8.2 0 012.94-3.15c.85-.61 1.5-1.11 2-1.5a20.75 20.75 0 00-7.63-1.68l-.47.16a2.6 2.6 0 01.25.5zM3.92 31a3.3 3.3 0 001.24 2.81 5.08 5.08 0 002.17.93l.13-.36a11.7 11.7 0 01-2.95-5.9A6.9 6.9 0 003.92 31m1.14-3.7a10.46 10.46 0 002.66 6.31l.28-.84a11.06 11.06 0 01-2.66-6c-.1.17-.2.34-.29.51m.37-3.21a9.74 9.74 0 00-.35 1.85l.21-.31a9.91 9.91 0 01.14-1.54m4.78-7.23a18.69 18.69 0 014.19-2.11 3.49 3.49 0 01.19-.39 17.66 17.66 0 00-4.38 2.5m11.6-3.35h.64c.66-.21 1.31-.39 1.94-.54-.62-.05-1.25-.08-1.89-.08s-1.35 0-2 .09a3.27 3.27 0 01.85.53h.47m5.8-.35a.41.41 0 000 .11 19.71 19.71 0 013.75 1.28 2.88 2.88 0 00.31-.83 7.8 7.8 0 00-3.21-.59h-.84m6.14 4V17a4 4 0 00-.06-.79c-.13.16-.29.33-.46.51.17.12.35.23.52.36m-6.18-3.35H27a2 2 0 01-1.23-.4c-.44.08-.89.17-1.35.28a21 21 0 016.29 1.72.38.38 0 00.09-.09 3.72 3.72 0 00.44-.56 21 21 0 00-3.66-1.24 2.71 2.71 0 000 .29m7.19 8.37a.31.31 0 010 .1 8.11 8.11 0 012.46 1.83 6.06 6.06 0 011.35 2.4 11.11 11.11 0 00-4.31-8.13 10 10 0 01-1 2.59c.88.18 1.52.65 1.52 1.21m-3.17 1.29A29.58 29.58 0 0127 28l3.22 9.15a17.9 17.9 0 003.3-1.67 11.28 11.28 0 004.32-6.34 5.16 5.16 0 00-1.25-4.53A7.4 7.4 0 0034.23 23a3.14 3.14 0 01-1.74.47zm-6.94 15a2.52 2.52 0 01-.33-.68l-.41-1.27A3.34 3.34 0 0021 34.35h-5.23l-1.19.37A3.29 3.29 0 0013 36.36a20.84 20.84 0 009.51 2.22c.73 0 1.45 0 2.15-.11m-18.88.67c.2-.59.45-1.29.68-1.94l.67-1.87a5.61 5.61 0 01-2.37-1 4 4 0 01-1.49-3.35 8.62 8.62 0 011.13-3.8v-.35a11.41 11.41 0 013.7-8.24A16.62 16.62 0 0114.81 14a3.48 3.48 0 012.58-1.34h1.9a2.55 2.55 0 01.72.1 22.48 22.48 0 012.48-.14 22 22 0 012.59.15h.16a2.07 2.07 0 01-.24-1.26l.41-.81a3.91 3.91 0 012.44-1.95H28a25 25 0 00-14.91 2.67C2.33 16.89-2.82 28.29 1.56 36.86A14.24 14.24 0 005 41.19c0-.09.76-2 .76-2zM31.69 13a2.33 2.33 0 00-.51-1.44 2.11 2.11 0 00-3.3.37 2.2 2.2 0 00-.17.53h.73a8.49 8.49 0 013.25.56m8.72 4a14.71 14.71 0 00-6.35-6.31 4.79 4.79 0 01.66 2.55 4.7 4.7 0 01-.55 2.24 4.24 4.24 0 01.19.8c3.29 2.38 5.34 5.73 5.34 9.45a10.28 10.28 0 01-1.1 4.59 13.48 13.48 0 01-5.3 6.44 21.84 21.84 0 01-2.78 1.74 1.47 1.47 0 01-1.63 1.44H27.3a24 24 0 01-8.2 1.51 13.91 13.91 0 01-7.21-1.72l-1.45 4.53c5.43 1.87 12.21 1.4 18.48-1.81C39.64 37 44.79 25.57 40.41 17M19.1 40.58a22 22 0 005.17-.64 22.16 22.16 0 01-2.47.14A21.35 21.35 0 0112.45 38l-.29.87a12.75 12.75 0 006.94 1.72m12.82-3.92c-.54.26-1.09.51-1.67.73l.08.21c.55-.3 1.08-.61 1.59-.94m-7.12 2a22.05 22.05 0 01-2.31.12 21 21 0 01-9.58-2.23l-.25.78a20.69 20.69 0 009.14 2.06 22.71 22.71 0 003.44-.27zm-7.78-9h2.43A1.55 1.55 0 0021 27.51l-1.29-4c-.76.3-1.5.64-2.23 1-.44.23-.86.47-1.28.72l-.76 2.31A1.54 1.54 0 0017 29.66m13.69-6.24h-5.36l1.39 3.93a29.19 29.19 0 004-3.93' fill='%23e7dbd8'/%3E%3C/svg%3E"
              style={{
                width: `100px`,
              }}
            />
          </a>
        </div>
        <div 
          style={{
            display: `flex`,
            fontSize: `1.1rem`,
            marginLeft: `auto`,
            alignItems: `flex-end`,
            marginTop: `-0.7rem`,
          }}
        >
          <p>{site} <a href="https://mattcook.dev/" 
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: `underline`,
              color: `#e7dbd8`
            }}>Matt Cook</a></p>
        </div>
      </div>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
