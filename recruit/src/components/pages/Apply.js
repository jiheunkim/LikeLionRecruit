import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer';
import './Apply.css';


function Apply() {

  const navigate = useNavigate();

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

  const [quest1Length, setQuest1Length] = useState(0);
  const [quest2Length, setQuest2Length] = useState(0);
  const [quest3Length, setQuest3Length] = useState(0);

  const [showPopup, setShowPopup] = useState(false); // 팝업창
  const [successPopup, setSuccessPopup] = useState(false); // 지원 완료시

  const [periodInfo, setPeriodInfo] = useState(null);
  const days = ['일', '월', '화', '수', '목', '금', '토'];

  const handleChange = (e) => {
    const { id, value } = e.target;
    
    if (id === 'quest1' && value.length <= 500) {
      setQuest1Length(value.length);
      setFormData({ ...formData, [id]: value });
    } else if (id === 'quest2' && value.length <= 500) {
      setQuest2Length(value.length);
      setFormData({ ...formData, [id]: value });
    } else if (id === 'quest3' && value.length <= 500) {
      setQuest3Length(value.length);
      setFormData({ ...formData, [id]: value });
    } else if (id === 'quest1') {
      setQuest1Length(500); // 500자를 초과하는 경우 더 이상 입력하지 않도록 설정
    } else if (id === 'quest2') {
      setQuest2Length(500); // 500자를 초과하는 경우 더 이상 입력하지 않도록 설정
    } else if (id === 'quest3') {
      setQuest3Length(500); // 500자를 초과하는 경우 더 이상 입력하지 않도록 설정
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };
  
  const checkPeriod = async () => {
    try {
      const apiPath = `http://3.37.130.241:8080/api/date/check/`;
      const response = await fetch(apiPath); // await를 사용하여 비동기적으로 데이터를 받음
      const data = await response.json();

      if (data.periodCheck == false) {
        navigate('/apply-not');
      }
    } catch (error) {
      console.error(error);
    }
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

        setShowPopup(false);
        setSuccessPopup(true); // 지원 완료를 나타내는 팝업 띄우기
      })
      .catch((error) => {
        console.error('Error:', error);
        setShowPopup(false); // 팝업을 닫음
      });
  };

  const getPeriodInfo = async () => {
    try {
      const apiPath = `http://3.37.130.241:8080/api/recruitment/schedule/`;
      const response = await fetch(apiPath);
      const data = await response.json();
      setPeriodInfo(data);
    } catch (error) {
      console.error(error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = `${date.getFullYear()}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getDate().toString().padStart(2, '0')}`;
    const formattedDayofWeek = `(${days[date.getDay()]})`;
    return `${formattedDate}${formattedDayofWeek}`;
  };

  const formatDate2 = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = `${date.getFullYear()}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getDate().toString().padStart(2, '0')}`;
    const formattedDayofWeek = `(${days[date.getDay()]})`;
    const formattedTime = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
    return `${formattedDate}${formattedDayofWeek} ${formattedTime}`;
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const closeSuccessPopup = () => {
    setSuccessPopup(false);
    navigate('/');
  };

  useEffect(() => {
    if (!periodInfo) {
      getPeriodInfo();
    }
    checkPeriod();
  }, [periodInfo]);

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
                required
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
                required
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
                required
              />
            </div>
            <div className="white-box">
              <label htmlFor="userId">학번</label>
              <input
                type="text"
                id="userId"
                placeholder="학번을 입력하세요"
                value={formData.userId}
                onChange={handleChange}
                required
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
                required
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
                required
              ></textarea>
              <div className="character-count">
                {quest1Length}/500
              </div>
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
                required
              ></textarea>
              <div className="character-count">
                {quest2Length}/500
              </div>
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
                required
              ></textarea>
              <div className="character-count">
                {quest3Length}/500
              </div>
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
              <img className="popup-close" alt="closeBtn" src="/image/buttonClose.png" onClick={closeSuccessPopup} />
              <div className='popup-t2'>지원 완료!!</div>
              <p className='popup-sub'>선발 일정</p>
              <div className='popup-text2'>
                <p>서류 지원: {formatDate(periodInfo.applicationStartDate)} ~ {formatDate2(periodInfo.applicationEndDate)}</p>
                <p>1차 합격 발표: {formatDate(periodInfo.applicationResultAnnouncementDate)}</p>
                <p>2차 면접: {formatDate(periodInfo.interviewStartDate)} ~ {formatDate(periodInfo.interviewEndDate)}</p>
                <p>최종 발표: {formatDate(periodInfo.finalResultAnnouncementDate)}</p>
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