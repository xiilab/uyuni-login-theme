//.prettierrc.js
module.exports = {
  printWidth: 80, // 화면 폭
  tabWidth: 2, // 탭 간격, 스페이스 설정 시 4칸 띄어쓰기
  singleQuote: true, // '' 작은 따옴표 사용
  trailingComma: 'all', // , 자동으로 붙이기
  semi: true, // ; 사용 안 함
  useTabs: false, // tab키 사용. false 추천 == space 대체
  arrowParens: 'always', // (x) => x, x => x로 전자처럼 괄호 유지
  endOfLine: 'auto',
  bracketSpacing: true, // 대괄호 {} 사이 공백
  jsxBracketSameLine: true, // JSX 요소 > 줄바꿈
};

// 이부분으로 코딩 스타일을 맞추면 된다.
