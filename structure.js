export const structure = (S) =>
  S.document()
    .schemaType("config")
    .documentId("globalConfig")
    .views([S.view.form(), S.view.component(ConfigPreview)]);
