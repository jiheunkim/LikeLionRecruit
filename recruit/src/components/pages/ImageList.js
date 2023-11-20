import React, {useState, useEffect} from 'react';
import axios from 'axios';

function ImageList() {
const navigation = [
    { name: '기획 디자인', href: '/api/images/pmanddesignimage/1', current: false },
    { name: '프론트엔드', href: '/api/images/frontend/1', current: false },
    { name: '백엔드', href: '/api/images/backend/1', current: false },
    { name: '아이디어톤', href: '/api/images/ideathon/1', current: false },
    { name: '중앙 해커톤', href: '/api/images/hackathon/1', current: true },
];

const response = axios.get(
    
  );

const ImageList = ({ navigation }) => {
    return (
        <ul className="subcontentList">
            {navigation.map((item) => (
                <li key={item.name}>
                    <a
                        href={item.href}
                        className={`group flex w-[139px] h-[18px] hover:bg-zinc-300 text-black text-[11px] font-normal font-[Galmuri9] leading-[10.16px] ${item.current ? 'mb-2' : ''
                            }`}
                    >
                        <span className="ml-2">{item.name}</span>
                        {/* 이미지를 표시하는 부분 */}
                        {item.current && (
                            <img
                                src={item.href} // 이미지 API 경로를 사용합니다.
                                alt={item.name}
                                style={{ width: '100%', height: 'auto', marginTop: '5px' }}
                            />
                        )}
                    </a>
                </li>
            ))}
        </ul>
    );
};
}
export default ImageList;