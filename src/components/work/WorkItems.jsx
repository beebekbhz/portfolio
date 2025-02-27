const WorkItems = ({ item, deploymentLink }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <a
        href={deploymentLink}
        target="_blank"
        className="work__button"
        rel="noreferrer"
      >
        Demo/GitHub <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
};

export default WorkItems;
