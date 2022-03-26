import './workPage.scss'
import ProtofolioImg from '../../components/protofolioImg/ProtofolioImg';
import { Link } from 'react-router-dom';

export default function WorkPage({open , setOpen, item, id}) {
  return (
    <>
        {item.id === id ? (
            <div className="workPage"  id={id}   style={{display: !open &&  "none"}}>
                <div className="icon" onClick={() => setOpen(false)}>
                    <Link to="/">
                        <i className="fas fa-chevron-left"></i>
                        Home
                    </Link>
                </div>
                <div className="container">
                    <div className="img-container">
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/0ab75c136781991.620006a79bf61.jpg" alt="" />
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/0ab75c136781991.620006a79bf61.jpg" alt="" />
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/0ab75c136781991.620006a79bf61.jpg" alt="" />
                        <ProtofolioImg src={item.img} />
                    </div>
                    <div className="info">
                        <h2>item.title</h2>
                        <p>item.desc</p>
                        <a href="item.link">Link in behance</a>
                    </div>
                </div>
            </div>
         ) : ""}
    </>
  );
}