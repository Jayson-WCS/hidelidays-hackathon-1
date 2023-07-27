const CardKids = () => {
    return (
    <div className="container">
      <div className="container_card_front">
        <img
          src="..\public\assets\petiteFille.png"
          alt="Petite fille"
          className="front_picture girl_picture"
        />
        <div className="front_text">
          <h2 className="text_title">PACKAGE SANS ENFANT</h2>
          <div className="text_container">
            <h3 className="text_subtitle">SOS NOUNOU</h3>
            <p className="text_description">
              Nous avons recruté une équipe de nounous ninja pour prendre soin
              de vos enfants, prêtes à répondre à tous vos caprices et à
              sauver le monde en même temps 
              (qui a dit que les super-héros n&apos;existent pas ?). 
              Profitez de vos vacances sans culpabilité !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardKids;
