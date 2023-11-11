import styles from "./DashBoardPage.module.css";
import image1 from "../../assets/1.png";
import image2 from "../../assets/2.png";
import image3 from "../../assets/3.png";
import image4 from "../../assets/4.png";
import image5 from "../../assets/5.png";

const DashBoardPage = () => {
  return (
    <div className={styles.DashBoardPage}>
      <h2 className={styles.title}>대시보드</h2>

      {/* 귀사의 평가 상태 - 이미지로 대체 */}
      <div className={styles.contentBox1}>
        <img src={image1} alt="image1" />
      </div>

      {/* 회사 프로필 제출 - 이미지로 대체 */}
      <div className={styles.contentBox2}>
        <img src={image2} alt="image2" />
      </div>

      {/* 샘플 설문지  */}
      <div className={styles.contentBox3}>
        <h3>샘플 설문지</h3>
        <p>
          샘플 설문지를 살짝 보고 무엇을 기대할 수 있는지 알아보십시오. 설문지는
          샘플과 다를 수 있습니다.
        </p>
        <img src={image3} alt="image3" />
      </div>

      {/* 산림ESG평가 */}
      <div className={styles.contentBox4}>
        <h3>산림ESG평가</h3>
        <div className={styles.innerContainer}>
          <div className={styles.innerContentBox1}>
            <img src={image4} alt="image4" />
            <span>산림ESG평가 프로세스</span>
            <p>산림ESG평가의 프로세스에 대한 안내를 해드립니다.</p>
          </div>
          <div className={styles.innerContentBox2}>
            <img src={image5} alt="image5" />
            <span>설문지 답변 방법</span>
            <p>
              설문지를 시작할 준비를 합니다. 이 동영상에서는 설문지에 답변하는데
              필요한 정보의 유형과 답변을 뒷받침하는 문서를 업로드하는 것이
              중요한 이유에 대해 설명합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardPage;
