export default function ImageItem({ img, isExpanded }) {
  return (
    <div className="card">
      <img
        src={img.url}
        alt="img"
        style={{
          width: isExpanded ? "400px" : "200px",
        }}
      />
      <p>{img.desc}</p>
    </div>
  );
}
