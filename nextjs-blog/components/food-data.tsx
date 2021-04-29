export default function FoodData({
  allFoodsData
}: {
  allFoodsData: {
    NUTR_CONT3: string
    NUTR_CONT2: string
    NUTR_CONT1: string
    SERVING_SIZE: string
    MAKER_NAME: string
    NUTR_CONT9: string
    NUTR_CONT8: string
    FOOD_CD: string
    NUTR_CONT7: string
    NUTR_CONT6: string
    NUTR_CONT5: string
    NUTR_CONT4: string
    DESC_KOR: string
    SAMPLING_MONTH_NAME: string
    SUB_REF_NAME: string
    SAMPLING_REGION_NAME: string
    GROUP_NAME: string
    RESEARCH_YEAR: string
    SAMPLING_REGION_CD: string
    SAMPLING_MONTH_CD: string
    NUM: string
  }[]
}) {
  return (
    <>
      {allFoodsData.map(({
        NUTR_CONT3,
        NUTR_CONT2,
        NUTR_CONT1,
        SERVING_SIZE,
        MAKER_NAME,
        NUTR_CONT9,
        NUTR_CONT8,
        FOOD_CD,
        NUTR_CONT7,
        NUTR_CONT6,
        NUTR_CONT5,
        NUTR_CONT4,
        DESC_KOR,
        SAMPLING_MONTH_NAME,
        SUB_REF_NAME,
        SAMPLING_REGION_NAME,
        GROUP_NAME,
        RESEARCH_YEAR,
        SAMPLING_REGION_CD,
        SAMPLING_MONTH_CD,
        NUM }) => (
        <div key={`${NUM}`}>
          <h3>음식 이름: {DESC_KOR}</h3>
          <ol>
            <li>NUTR_CONT3: {NUTR_CONT3}</li>
            <li>NUTR_CONT2: {NUTR_CONT2}</li>
            <li>NUTR_CONT1: {NUTR_CONT1}</li>
            <li>SERVING_SIZE: {SERVING_SIZE}</li>
            <li>MAKER_NAME: {MAKER_NAME}</li>
            <li>NUTR_CONT9: {NUTR_CONT9}</li>
            <li>NUTR_CONT8: {NUTR_CONT8}</li>
            <li>FOOD_CD: {FOOD_CD}</li>
            <li>NUTR_CONT7: {NUTR_CONT7}</li>
            <li>NUTR_CONT6: {NUTR_CONT6}</li>
            <li>NUTR_CONT5: {NUTR_CONT5}</li>
            <li>NUTR_CONT4: {NUTR_CONT4}</li>
            <li>DESC_KOR: {DESC_KOR}</li>
            <li>SAMPLING_MONTH_NAME: {SAMPLING_MONTH_NAME}</li>
            <li>SUB_REF_NAME: {SUB_REF_NAME}</li>
            <li>SAMPLING_REGION_NAME: {SAMPLING_REGION_NAME}</li>
            <li>GROUP_NAME: {GROUP_NAME}</li>
            <li>RESEARCH_YEAR: {RESEARCH_YEAR}</li>
            <li>SAMPLING_REGION_CD: {SAMPLING_REGION_CD}</li>
            <li>SAMPLING_MONTH_CD: {SAMPLING_MONTH_CD}</li>
            <li>NUM: {NUM}</li>
          </ol>
        </div>
      ))}
    </>
  )
}