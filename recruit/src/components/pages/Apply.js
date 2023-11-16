import React, { useState } from 'react';
import Footer from '../Footer';
import './Apply.css';


function Apply() {

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    userId: '',
    grade: '',
    quest1: '',
    quest2: '',
    quest3: '',
  });

  const [showPopup, setShowPopup] = useState(false); // 팝업창
  const [successPopup, setSuccessPopup] = useState(false); // 지원 완료시

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const submitData = () => {
    // HTTP POST 요청 보내기
    fetch('http://3.37.130.241:8080/api/upload/user-info/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // 서버로부터의 응답을 처리하거나 다음 단계로 넘어갈 수 있음
        console.log(data);

        if (data.success) {
          setShowPopup(false);
          setSuccessPopup(true); // 지원 완료를 나타내는 팝업 띄우기
        } else {
          console.error('Error:', data.error);
          setShowPopup(false);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setShowPopup(false); // 팝업을 닫음
      });
  };

  const closePopup = () => {
    setShowPopup(false);
    setSuccessPopup(false);
  };

  return (
      <>
      <div className="App-back">
        <div className='main'>
          <p className="main-title">건국대학교 멋쟁이사자처럼 12기 지원서</p>
          <form onSubmit={handleSubmit}>
            <div className="white-box">
              <label htmlFor="name">이름</label>
              <input
                type="text"
                id="name"
                placeholder="이름을 입력하세요"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="white-box">
              <label htmlFor="phone">연락처</label>
              <input
                type="text"
                id="phone"
                placeholder="연락처를 입력하세요 (010-1234-1234)"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="white-box">
              <label htmlFor="email">이메일</label>
              <input
                type="text"
                id="email"
                placeholder="이메일을 입력하세요"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="white-box">
              <label htmlFor="user_id">학번</label>
              <input
                type="text"
                id="user_id"
                placeholder="학번을 입력하세요"
                value={formData.user_id}
                onChange={handleChange}
              />
            </div>
            <div className="white-box">
              <label htmlFor="grade">학년</label>
              <input
                type="text"
                id="grade"
                placeholder="학년을 입력하세요"
                value={formData.grade}
                onChange={handleChange}
              />
            </div>
            <div className="white-box2">
              <label htmlFor="quest1">멋쟁이사자처럼 지원동기?</label>
              <br />
              <textarea
                id="quest1"
                placeholder="답변을 입력하세요"
                rows="10"
                value={formData.quest1}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="white-box2">
              <label htmlFor="quest2">만들고 싶은 서비스?</label>
              <br />
              <textarea
                id="quest2"
                placeholder="답변을 입력하세요"
                rows="10"
                value={formData.quest2}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="white-box2">
              <label htmlFor="quest3">다른 동아리 참여 경험?</label>
              <br />
              <textarea
                id="quest3"
                placeholder="답변을 입력하세요"
                rows="10"
                value={formData.quest3}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className='submit-title'>[지원하기]</button>
          </form>
        </div>
        {showPopup && (
          <>
          <div className="modal-background">
              {/* 모달 백그라운드 */}
            </div>
          <div className="popup">
            <img className="popup-close" alt="closeBtn" src="/image/buttonClose.png" onClick={closePopup}/>
            <div className='popup-t'>!</div>
            <p className='popup-text'>제출 후 수정이 불가능합니다.<br></br>제출하시겠습니까?</p>
            <button className='popup-submit' onClick={submitData}>[제출하기]</button>
          </div>
          </>
        )}
        {successPopup && (
          <>
            <div className="modal-background"></div>
            <div className="popup">
              <img className="popup-close" alt="closeBtn" src="/image/buttonClose.png" onClick={closePopup} />
              <div className='popup-t2'>지원 완료!!</div>
              <p className='popup-sub'>선발 일정</p>
              <div className='popup-text2'>
                <p>서류 지원: 24.00.00(월) ~ 24.00.00(월) 00:00</p>
                <p>1차 합격 발표: 24.00.00(월)</p>
                <p>2차 면접: 24.00.00(화) ~ 24.00.00(목)</p>
                <p>최종 발표: 24.00.00(금)</p>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
      </>
  );
}

export default Apply;