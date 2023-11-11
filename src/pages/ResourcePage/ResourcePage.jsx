import styles from "./ResourcePage.module.css";

const ResourcePage = () => {
  return (
    <div className={styles.ResourcePage}>
      <h2 className={styles.title}>유용한 리소스</h2>
      <div className={styles.contentBox}>
        <h3>산림ESG평가 등급 방법론 개요</h3>
        <p>
          산림ESG평가방법론의 목적은 기업의 정책, 조치 및 결과를 통해 기업의
          산림분야 지속가능경영의 질을 평가하는 것입니다.
        </p>
      </div>
      <div className={styles.contentBox}>
        <h3>산림ESG평가 문서 가이드</h3>
        <p>
          산림ESG평가방법론의 목적은 기업의 정책, 조치 및 결과를 통해 기업의
          기업의 산림분야 지속가능성 성과를 평가하기 위해서는 설문지에 제시된
          문항을 뒷받침할 증거(문서 등)이 필요합니다. 이를 위해, 본 가이드는
          기업이 제출해야 할 문서를 어떻게 구성해야 하는지 알려줍니다.
        </p>
      </div>
      <div className={styles.contentBox}>
        <h3>산림ESG투자 프로토콜</h3>
        <p>
          이 문서를 사용하여 기업이 자연자본 임팩트를 체크하고, 산림 ESG투자와
          관련된 구체적인 목표와 전략을 설정하는 데 도움이 될 수 있는 구체적인
          지침과 원칙을 제공합니다.
        </p>
      </div>
    </div>
  );
};

export default ResourcePage;
