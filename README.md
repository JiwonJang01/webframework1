### npm install ###
1. npm i zustand
- 상태관리를 위한 zustand 설치
2. npm install --save @fullcalendar/react @fullcalendar/core @fullcalendar/daygrid @fullcalendar/interaction
- fullcalendar 설치
3. npm install react-icons --save
- react icon 설치
4. npm i
5. npm start

### Screen configuration ###
1. MyCalendar
- 월별 달력 화면입니다.
- 상단의 양쪽에 있는 화살표를 통해 다른 달로 이동할 수 있습니다.
- 날짜를 선택하면 다이어리, 가계부, 일정 화면으로 이동할 수 있습니다.
- 좌측하단의 화살표를 클릭하면 예산을 입력할 수 있는 창이 나옵니다. 
- 수입, 예산, 지출의 총액을 하단에서 볼 수 있습니다.
- 예산 금액과 지출 금액에 따라서 지출 하단의 글자가 나타납니다.

2. Diary (다이어리)
- 하루를 기록할 수 있는 화면입니다. 
- 월별 달력화면에서 날짜 선택 후 다이어리를 선택하면 나오는 화면입니다. 
- 제목과 내용을 입력하고 저장을 누르면 저장되면서 다시 월별 달력 화면으로 이동합니다. 
- 다시 다이어리화면으로 이동하면 내용을 확인할 수 있습니다. 
- 수정도 다이어리화면에서 다시 입력하고 저장하는 방식으로 가능합니다.

3. AccountList(가계부)
- 수입과 지출을 입력하고 확인할 수 있는 화면입니다.
- 월별 달력 화면에서 날짜를 클릭한 후 가계부 버튼을 누르면 수입과 지출 내역을 보여주는 화면이 나옵니다.
- 하단에 있는 추가 버튼을 통해서 수입과 지출을 입력하는 화면으로 이동할 수 있습니다. 
- 수입과 지출을 입력하는 화면에서 내용을 입력한 후 저장을 누르면 저장된 수입과 지출이 원래 있던 내역 아래에 추가된 것을 확인할 수 있습니다.
- 내역 옆부분에 돋보기 아이콘을 누르면 상세정보를 볼 수 있습니다. 
- 입력된 수입과 지출을 월별 달력 화면 하단에 연동됩니다.

4. Schedule(일정)
- 일정을 등록하고 확인할 수 있는 화면입니다.
- 월별 달력화면에서 날짜 선택 후 일정을 선택하면 나오는 화면입니다. 
- 하단에 있는 추가 버튼을 통해서 일정을 등록하는 화면으로 이동할 수 있습니다. 
- 일정 등록 화면에서 내용을 입력한 후 저장을 누르면 저장된 일정이 원래 있던 일정 아래에 추가된 것을 확인할 수 있습니다.
- 일정 옆부분에 돋보기 아이콘을 누르면 상세정보를 볼 수 있습니다. 
- 입력된 예상 지출은 예산에 연동되지 않습니다. 총 예산과는 달리 일정에 지출이 얼마나 될 것 인지 생각하는 부분으로만 참고하고자 하였습니다.