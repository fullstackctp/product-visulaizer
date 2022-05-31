import "antd/dist/antd.css";
import { Table } from "antd";

const headStyle = {
  fontSize: 18,
  fontWeight: 700,
  textAlign: "center",
};

const columns = [
  {
    title: <p style={headStyle}>Brand</p>,
    dataIndex: "brand",
    key: "brand",
    render: (text) => (
      <p style={{ fontSize: 16, fontWeight: 700, textAlign: "center" }}>
        {text}
      </p>
    ),
  },
  {
    title: <p style={headStyle}>Title</p>,
    dataIndex: "title",
    key: "title",
    render: (text) => (
      <p style={{ fontStyle: "italic", textAlign: "center" }}>{text}</p>
    ),
  },
  {
    title: <p style={headStyle}>Price</p>,
    dataIndex: "price",
    key: "price",
    render: (text) => <p style={{ textAlign: "center" }}>{text}</p>,
  },
  {
    title: <p style={headStyle}>Rating</p>,
    key: "rating",
    dataIndex: "rating",
    render: (text) => <p style={{ textAlign: "center" }}>{text}</p>,
  },
  {
    title: <p style={headStyle}>Category</p>,
    key: "category",
    dataIndex: "category",
    render: (text) => <p style={{ textAlign: "center" }}>{text}</p>,
  },
  {
    title: <p style={headStyle}>Thumbnail</p>,
    key: "thumbnail",
    dataIndex: "thumbnail",
    render: (src) => (
      <img
        style={{
          display: "block",
          margin: "auto",
          height: "200px",
          maxWidth: "300px",
        }}
        src={src}
        alt={src}
      />
    ),
  },
];

function ProductTable(props) {
  const { data } = props;

  console.log(data);
  return (
    <div style={{ padding: "20px" }}>
      <div style={{ padding: "20px" }}>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
}

export default ProductTable;
