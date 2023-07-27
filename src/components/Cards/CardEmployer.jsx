const CardEmployer = () => {
  return (
    <div className="container">
      <div className="container_card_front">
        <img
          src="..\public\assets\filleTransat.png"
          alt="Fille transat"
          className="front_picture"
        />
        <div className="front_text">
          <h2 className="text_title">PACKAGE EMPLOYEUR</h2>
          <div className="text_container">
            <h3 className="text_subtitle">AU REVOIR MAMIE</h3>
            <p className="text_description">
              Votre chère et tendre grand-mère Huguette vient de rendre
              l&apos;âme, vous devez vous rendre d&apos;urgence dans le pas de
              calais pour débarrasser son appartement. (Faux acte de décès,
              mail du notaire.)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardEmployer;
