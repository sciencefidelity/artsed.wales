export default {
  name: "social",
  title: "Social Links",
  type: "document",
  fields: [
    {
      name: "site",
      title: "site",
      type: "string"
    },
    {
      name: "username",
      title: "Username",
      type: "string"
    },
    {
      name: "link",
      title: "Link",
      type: "localeURL"
    }
  ],

  preview: {
    select: {
      title: "site",
      username: "username",
      link: "link"
    },
    prepare(selection: any) {
      const {title, username, link} = selection
      return {
        title: title,
        subtitle: `${username ? username : link}`
      }
    }
  }
}
