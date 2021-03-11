import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Tredegar = () => (
  <section
    style={{
      marginBottom: `6rem`,
    }}
  >
    <div
      style={{
        display: `flex`,
        border: `8px solid white`,
        width: `85%`,
        marginLeft: `auto`,
        boxShadow: `2px 2px 10px rgba(0, 0, 0, 0.2)`,
      }}
    >
      <StaticImage
        src="../images/aen_tredegar.jpg"
        width={400}
        height={300}
        quality={80}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Spoken word perfrmance at Tredegar House"

      />
      <div
        style={{
          width: `50%`,
          padding: `25px 30px 10px 40px`,
          position: `relative`,
        }}
      >
        <img
          alt="Quote Left"
          src="data:image/svg+xml,%3Csvg viewBox='0 0 100 73' xmlns='http://www.w3.org/2000/svg' fill-rule='evenodd' clip-rule='evenodd' stroke-linejoin='round' stroke-miterlimit='2' class='quoteLeft'%3E%3Cpath d='M56.291 47.899c0-11.552 2.962-21.135 8.886-28.751C71.1 11.533 78.219 5.629 86.534 1.435 87.417.92 88.319.552 89.238.331 90.158.11 90.986 0 91.722 0c2.355 0 4.323.773 5.905 2.318C99.209 3.863 100 5.592 100 7.505c0 .956-.276 1.95-.828 2.98-.552 1.03-1.416 1.95-2.594 2.759-4.194 2.796-8.517 6.18-12.969 10.154-4.452 3.973-6.677 9.086-6.677 15.34 5.96 0 10.908 1.362 14.845 4.084 3.937 2.722 5.905 6.879 5.905 12.471 0 5.666-1.913 9.933-5.739 12.803-3.827 2.869-8.168 4.304-13.025 4.304-6.034 0-11.313-2.06-15.839-6.18-4.525-4.121-6.788-10.228-6.788-18.321zM22.627 72.4c-6.034 0-11.314-2.06-15.839-6.18C2.263 62.099 0 55.992 0 47.899c0-11.552 2.962-21.135 8.885-28.751 5.924-7.615 13.043-13.519 21.358-17.713.883-.515 1.784-.883 2.704-1.104C33.867.11 34.695 0 35.43 0c2.355 0 4.323.773 5.906 2.318 1.582 1.545 2.373 3.274 2.373 5.187 0 .956-.276 1.95-.828 2.98-.552 1.03-1.417 1.95-2.594 2.759-4.194 2.796-8.517 6.18-12.969 10.154-4.452 3.973-6.678 9.086-6.678 15.34 5.96 0 10.909 1.362 14.846 4.084 3.936 2.722 5.905 6.879 5.905 12.471 0 5.666-1.913 9.933-5.74 12.803-3.826 2.869-8.168 4.304-13.024 4.304z' fill-rule='nonzero' fill='%23fff'/%3E%3C/svg%3E"
          style={{
            width: `4.5rem`,
            position: `absolute`,
            left: `15px`,
            top: `13px`,
            zIndex: `-11`,
          }}
        />
        <img
          alt="Quote Right"
          src="data:image/svg+xml,%3Csvg viewBox='0 0 95 73' xmlns='http://www.w3.org/2000/svg' fill-rule='evenodd' clip-rule='evenodd' stroke-linejoin='round' stroke-miterlimit='2' class='quoteRight'%3E%3Cpath d='M94.7 24.501c0 11.552-2.962 21.135-8.885 28.751-5.923 7.615-13.042 13.519-21.357 17.713-.883.515-1.785.883-2.704 1.104-.92.221-1.748.331-2.484.331-2.354 0-4.323-.773-5.905-2.318-1.582-1.545-2.373-3.274-2.373-5.187 0-.956.276-1.95.828-2.98.552-1.03 1.417-1.95 2.594-2.759 4.194-2.796 8.517-6.18 12.969-10.154 4.451-3.973 6.677-9.086 6.677-15.34-5.96 0-10.908-1.362-14.845-4.084-3.937-2.722-5.905-6.879-5.905-12.471 0-5.666 1.913-9.933 5.74-12.803C62.876 1.435 67.217 0 72.074 0c6.033 0 11.313 2.06 15.838 6.18 4.525 4.121 6.788 10.228 6.788 18.321zM21.081 0c6.034 0 11.313 2.06 15.839 6.18 4.525 4.121 6.788 10.228 6.788 18.321 0 11.552-2.962 21.135-8.885 28.751-5.924 7.615-13.043 13.519-21.357 17.713-.883.515-1.785.883-2.705 1.104-.919.221-1.747.331-2.483.331-2.355 0-4.323-.773-5.905-2.318C.791 68.537 0 66.808 0 64.895c0-.956.276-1.95.828-2.98.552-1.03 1.416-1.95 2.594-2.759 4.194-2.796 8.517-6.18 12.968-10.154 4.452-3.973 6.678-9.086 6.678-15.34-5.96 0-10.909-1.362-14.845-4.084-3.937-2.722-5.905-6.879-5.905-12.471 0-5.666 1.913-9.933 5.739-12.803C11.883 1.435 16.225 0 21.081 0z' fill-rule='nonzero' fill='%23fff'/%3E%3C/svg%3E"
          style={{
            width: `4.5rem`,
            position: `absolute`,
            right: `-4px`,
            bottom: `-12px`,
            zIndex: `-12`,
          }}
        />
        <blockquote>This amazing spoken-word project has inspired our learners to fire their imagination and express themselves. Spoken Word has strengthened the school’s relationship with outside agencies in our community to support future literacy projects in the new curriculum framework.<div style={{height: 10}}></div><cite>(Nicola Williams, Tredegar Park Primary School)</cite></blockquote>
      </div>
    </div>
  </section>
)

export default Tredegar
