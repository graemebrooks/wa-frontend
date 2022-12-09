import React from 'react';

const ScrollingImageList = () => {
  const images = [
    'https://i.pinimg.com/474x/00/28/d9/0028d990d266bf999bfbdf143f4999f5.jpg',
    'https://i0.wp.com/winkgo.com/wp-content/uploads/2020/02/tuesday-memes-01.jpg?resize=720%2C547&ssl=1',
    'https://digitalsynopsis.com/wp-content/uploads/2017/12/funny-agency-life-creative-designer-copywriter-memes-1.jpg',
    'https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/d8/images/canvas/2021/10/30/85f2cb5f-44f8-4f2f-a813-63e657e11acc_5065cac7.jpg?itok=gY-K9HdU&v=1635566576',
  ];

  return (
    <div className="scrolling-image-list">
      <style>{`
        .scrolling-image-list {
          overflow-x: scroll;
          animation: scroll-right-to-left 10s linear infinite;
        }
        .scrolling-image-list img {
          width: 200px;
          height: 200px;
        }
        @keyframes scroll-right-to-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>
      {images.map((imageUrl) => (
        <img key={imageUrl} src={imageUrl} />
      ))}
    </div>
  );
};

export default ScrollingImageList;
