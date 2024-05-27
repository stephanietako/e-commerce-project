const RGPD = () => {
  const RGPDText = `
  Politique de confidentialité Cette Politique de confidentialité décrit
  comment [Votre société] recueille, utilise et partage les informations
  personnelles des utilisateurs de ce site web. Collecte et utilisation
  des informations Nous pouvons recueillir plusieurs types d'informations
  personnelles lorsque vous visitez notre site, effectuez un achat ou
  interagissez avec nous de quelque manière que ce soit. Ces informations
  peuvent inclure, mais sans s'y limiter, votre nom, votre adresse e-mail,
  votre adresse postale, votre numéro de téléphone, vos informations de
  paiement, etc. Nous utilisons ces informations pour traiter vos
  commandes, répondre à vos questions, personnaliser votre expérience
  utilisateur et vous fournir des informations sur nos produits,
  promotions et offres spéciales. Protection des données La sécurité de
  vos données personnelles est importante pour nous. Nous mettons en œuvre
  des mesures de sécurité appropriées pour protéger vos informations
  contre tout accès non autorisé, altération, divulgation ou destruction.
  Partage des informations Nous ne vendons, n'échangeons ni ne louons vos
  informations personnelles à des tiers sans votre consentement explicite,
  sauf dans les cas où cela est nécessaire pour fournir nos services ou
  lorsque la loi l'exige. Cookies Nous utilisons des cookies pour
  améliorer votre expérience utilisateur sur notre site. Vous pouvez
  configurer votre navigateur pour refuser tous les cookies ou pour vous
  alerter lorsqu'un cookie est envoyé. Toutefois, certaines
  fonctionnalités de notre site peuvent ne pas fonctionner correctement
  sans les cookies. Droits des utilisateurs Vous avez le droit d'accéder,
  de rectifier, de mettre à jour ou de supprimer vos informations
  personnelles. Vous pouvez également vous opposer au traitement de vos
  données personnelles à des fins de marketing direct ou demander la
  limitation du traitement dans certaines circonstances. Modifications de
  la politique de confidentialité Nous nous réservons le droit de modifier
  cette Politique de confidentialité à tout moment. Les modifications
  entreront en vigueur dès leur publication sur cette page. Contactez-nous
  Si vous avez des questions concernant notre Politique de confidentialité
  ou sur la manière dont nous traitons vos informations personnelles,
  veuillez nous contacter à l'adresse suivante : [Votre adresse e-mail de
  contact]. Assurez-vous d'adapter ce contenu à votre entreprise et à vos
  pratiques spécifiques.
`;

  return (
    <div
      className="rgpd_container"
      style={{
        display: "flex",
        width: "100%",
        height: "auto",
        justifyContent: "center",
        padding: "4rem",
        flexDirection: "column",
      }}
    >
      <h1>RGPD</h1>
      <p>{RGPDText}</p>
    </div>
  );
};
export default RGPD;
