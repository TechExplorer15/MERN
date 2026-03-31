import ImageItem from "./panel-item";

export default function PanelList({ isExpanded }) {
  const images = [
    { id: 1, url: "https://picsum.photos/200", desc: "Image 1" },
    { id: 2, url: "https://picsum.photos/201", desc: "Image 2" },
    { id: 3, url: "https://picsum.photos/202", desc: "Image 3" },
  ];

  return (
    <div className="panel">
      {images.map((img) => (
        <ImageItem key={img.id} img={img} isExpanded={isExpanded} />
      ))}
    </div>
  );
}
